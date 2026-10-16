import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {lookupPageMap,pageMap} from './nycu-page-map.mjs';
const [root,archive] = process.argv.slice(2);
if(!root)throw Error('Usage: node scripts/import-nycu-scans.mjs <extracted revised archive folder> [original.zip]');
const filename='題庫_含原題掃描_草案.json',raw=readFileSync(path.join(root,filename),'utf8'),input=JSON.parse(raw),sha=value=>createHash('sha256').update(value).digest('hex');
if(input.papers.length!==9||input.multiple_choice_questions.length!==149||input.non_choice_index_pending.length!==57)throw Error('Unexpected source inventory');
const paperNames={'1101':'資料結構與演算法','8101':'資料結構與演算法','1102':'線性代數與離散數學','8102':'線性代數與離散數學','1103':'計算機系統','8103':'計算機系統（含作業系統及計算機組織）'};
const papers=input.papers.map(p=>({id:p.exam_id,year:p.year,code:p.subject_code,title:paperNames[p.subject_code],filename:p.source_pdf,pages:p.page_images.map(page=>{
 if(!/^assets\/NYCU-11[234]-\d{4}\/p\d{2}\.jpg$/.test(page.asset)||!page.asset.startsWith('assets/'+p.exam_id+'/'))throw Error('Invalid scan path');
 const bytes=readFileSync(path.join(root,page.asset));if(bytes[0]!==255||bytes[1]!==216||bytes.length<1000)throw Error('Invalid JPEG '+page.asset);
 return {number:page.page,asset:page.asset.replace(/^assets\//,'exam-scans/'),alt:`陽明交大 ${p.year} 年 ${paperNames[p.subject_code]} · 掃描檔第 ${page.page} 頁`,sha256:sha(bytes)};
})}));
if(papers.reduce((n,p)=>n+p.pages.length,0)!==68)throw Error('Expected 68 scan pages');
const answers={},questions=[],sourceRecordIds=new Set();
const lessonLinks={'NYCU-112-1101-Q02':'DS-CH01-S07','NYCU-112-1101-Q16':'DS-CH01-S06','NYCU-114-8101-Q01':'DS-CH01-S05','NYCU-112-1101-W17':'DS-CH01-S05','NYCU-114-8101-W07':'DS-CH01-S06'};
function convert(record,written){
 if(sourceRecordIds.has(record.id))throw Error('Duplicate source ID');sourceRecordIds.add(record.id);
 const p=papers.find(p=>p.id===record.exam_id),map=lookupPageMap(record.exam_id,record.original_question_number,written),number=String(record.original_question_number);
 const scans=map.pages.map(n=>{const page=p.pages.find(page=>page.number===n);if(!page)throw Error('Missing page '+record.id);return page;});
 const group=map.group||number.split('-')[0],groupLabel=map.answerSlot?`原卷第 ${group} 大題 · 作答格 ${number}`:map.group?`題組 ${group} · 第 ${number} 題`:`第 ${number} 題`;
 const source={kind:'exam',school:'國立陽明交通大學',year:p.year,number:groupLabel,examId:p.id,examSubject:p.title,filename:p.filename,verificationStatus:'supplied_scan',answerVerificationStatus:written?'not_provided':'provided_index_not_reverified'};
 const item={id:record.id,originalNumber:number,subjectId:map.subject,chapterId:null,sectionId:lessonLinks[record.id]||null,title:`陽明交大 ${p.year} · ${groupLabel}`,type:written?'手寫題':map.mode==='single'?'選擇題':'多選題',text:map.topic,knowledgePointIds:[],tags:[map.topic],points:null,scoringStatus:'not_normalized',source,stemFormat:'scan',scans,groupId:p.id+'-'+(written?'W':'Q')+'-G'+group,groupLabel,pageMappingStatus:'reviewed_against_supplied_images',referenceStatus:'missing',...(!written?{options:Array.from({length:map.options},(_,i)=>'原卷選項 '+String.fromCharCode(65+i)),selectionMode:map.mode||'multiple',bonusAll:record.answer.bonus_all}:{practiceOnly:true})};
 if(!written){
  const answer=record.answer;if(!Array.isArray(answer.accepted_sets)||answer.bonus_all&&answer.accepted_sets.length||!answer.bonus_all&&!answer.accepted_sets.length)throw Error('Invalid answer sets '+record.id);
  for(const set of answer.accepted_sets)if(!set.length||new Set(set).size!==set.length||set.some(letter=>!/^[A-E]$/.test(letter)||letter.charCodeAt(0)-65>=map.options))throw Error('Invalid answer letter '+record.id);
  if(map.mode==='single'&&answer.accepted_sets.some(set=>set.length!==1))throw Error('Single-choice mapping conflicts with answer '+record.id);
  answers[item.id]={acceptedSets:answer.accepted_sets.map(set=>set.map(letter=>letter.charCodeAt(0)-65)),bonusAll:answer.bonus_all,originalAnswer:answer.original_official_answer,displayAnswer:answer.display_answer,hasCorrection:answer.has_official_correction,sourceClaim:{type:answer.source,verification:answer.verification},sourceGradingPolicy:record.grading};
 }
 questions.push(item);
}
input.multiple_choice_questions.forEach(q=>convert(q,false));input.non_choice_index_pending.forEach(q=>convert(q,true));
for(const [id,map]of Object.entries(pageMap))for(const [key,written]of [['choices',false],['written',true]])for(const row of map[key])for(const n of row.items)if(!questions.some(q=>q.source.examId===id&&Boolean(q.practiceOnly)===written&&q.originalNumber===String(n)))throw Error('Unused reviewed mapping '+id+' / '+n);
if(questions.length!==206||Object.keys(answers).length!==149)throw Error('Incomplete exam conversion');
const output={version:1,id:'nycu-112-114-scans',title:'陽明交大 112–114 年考古題',provenance:{filename,sha256:sha(raw),...(archive?{archiveFilename:decodeURIComponent(path.basename(archive)),archiveSha256:sha(readFileSync(archive))}:{})},notice:'原題保留使用者提供的完整掃描頁、共用題幹與圖表；頁次已對照影像核對。答案依附件索引，未另取得官方答案表或疑義處理原件；分步詳解待補。本次只判定是否符合索引採認集合，不重現原卷的部分給分、倒扣或整組配分。',papers,questions,answers};
for(const p of papers)for(const page of p.pages){const target='docs/'+page.asset;mkdirSync(path.dirname(target),{recursive:true});copyFileSync(path.join(root,page.asset.replace(/^exam-scans\//,'assets/')),target);}
writeFileSync('docs/exams.js','// 使用者提供的考古題掃描與答案索引；個人筆跡及作答另存本機。\nwindow.ZILIU_EXAMS = '+JSON.stringify(output,null,2)+';\n');
console.log(`Imported ${papers.length} papers / 68 pages / ${questions.length} indexed items: 149 choice-answer records and 57 handwriting practice items. No explanations fabricated.`);
