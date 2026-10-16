// Reviewed against all 68 supplied scan images. Page numbers are image-file
// sequence numbers; 113 papers include a cover before the printed first page.
const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i);
const DS='data-structures',ALG='algorithms',OS='operating-systems',CO='computer-organization',LA='linear-algebra',DM='discrete-math';
const row=(items,pages,subject,topic,extra={})=>({items:Array.isArray(items)?items:[items],pages,subject,topic,...extra});
export const pageMap={
 'NYCU-112-1101':{choices:[
  row(1,[1],DS,'AVL 樹'),row(2,[1],DS,'遞迴時間複雜度'),row(3,[1],ALG,'Kruskal 最小生成樹'),row(4,[1],ALG,'最小生成樹'),
  row(5,[2],DS,'二元搜尋樹走訪'),row(6,[2],DS,'雜湊與碰撞處理'),row(7,[2],ALG,'BFS 與 DFS'),row(8,[2],ALG,'Bellman–Ford 最短路徑'),
  row(9,[3],ALG,'合併排序'),row(10,[3],DS,'紅黑樹'),row(11,[3],DS,'最大堆積'),row(12,[4],DS,'最小堆積'),row(13,[4],DS,'堆疊操作'),row(14,[4],DS,'二元樹'),row(15,[4],DS,'二元樹走訪'),row(16,[5],DS,'插入排序與時間複雜度')
 ],written:[row(17,[5],DS,'漸近時間複雜度'),row(18,[5],ALG,'線性時間選擇演算法'),row(19,[6],ALG,'分治演算法'),row(20,[6],DS,'雙堆疊佇列與攤銷分析'),row(21,[6],ALG,'頂點覆蓋與匹配'),row(22,[7],ALG,'最大流與最小割'),row(23,[7],ALG,'二分搜尋峰值'),row(24,[7],ALG,'生成樹與旅行推銷員'),row(25,[7,8],ALG,'背包問題'),row(26,[8,9],ALG,'動態規劃')],options:4},
 'NYCU-112-1102':{choices:[],written:[
  row(['1-1','1-2','1-3','1-4'],[1],LA,'二次型、正交與投影',{group:'1'}),row(['2-1','2-2'],[2],LA,'QR 分解與矩陣函數',{group:'2'}),
  row([3,4,5,6,7,'8-1','8-2','9-1','9-2'],[3],DM,'邏輯、計數、函數與圖論')
 ]},
 'NYCU-112-1103':{choices:[
  row(1,[1],OS,'頁面置換'),row(2,[1],OS,'共享記憶體'),row(3,[1],CO,'DMA'),row(4,[1],OS,'檔案與目錄'),row(5,[1,2],OS,'檔案系統碎片'),
  row(6,[2],OS,'行程與執行緒'),row(7,[2],OS,'CPU 排程'),row(8,[2,3],OS,'執行緒同步'),row(9,[3],OS,'條件變數'),row(10,[3],OS,'死結'),
  row(11,[3],CO,'處理器效能'),row(12,[3],CO,'管線危障'),row(13,[3,4],CO,'LL／SC 指令'),row(14,[4],CO,'MIPS 資料路徑'),row(15,[4,5],CO,'管線停滯'),row(16,[5],CO,'快取'),row(17,[5],CO,'CPI 與執行時間'),row(18,[5,6],CO,'快取與 CPI'),row(19,[6],CO,'直接對映快取'),row(20,[6],CO,'快取一致性'),
  row(range(21,23),[6,7],CO,'RAID 5',{group:'A',mode:'single'}),row(range(24,27),[7],OS,'訊息傳遞與死結',{group:'B',mode:'single'}),row(range(28,30),[8],CO,'MIPS 呼叫慣例',{group:'C',mode:'single'}),row(range(31,34),[9],CO,'組相聯快取',{group:'D',mode:'single'})
 ],written:[],options:4},
 'NYCU-113-8101':{choices:[
  row(range(1,3),[2,3],DS,'鏈結佇列',{group:'1',answerSlot:true}),row(range(4,6),[3,4],ALG,'快速排序程式',{group:'2',answerSlot:true}),row(range(7,9),[4],DS,'雙重雜湊',{group:'3',answerSlot:true}),row(range(10,12),[4],ALG,'Kruskal 最小生成樹',{group:'4',answerSlot:true}),row([13,14],[5],ALG,'最大流與殘餘網路',{group:'5',answerSlot:true}),row([15,16],[6],ALG,'數字處理演算法',{group:'6',answerSlot:true}),row([17,18],[6],ALG,'有限體多項式取值與複雜度',{group:'7',answerSlot:true}),row(range(19,21),[7,8],ALG,'凸多邊形與二分搜尋',{group:'8',answerSlot:true})
 ],written:[row(1,[8,9],DS,'二元樹走訪與 B 樹'),row(2,[9,10],ALG,'Bellman–Ford 演算法'),row(3,[10],ALG,'動態規劃與子序列'),row(4,[10],DS,'遞迴方程與數值二分搜尋')],options:5},
 'NYCU-113-8102':{choices:[],written:[row(range(1,4),[2],DM,'邏輯、數列與格點路徑'),row([5,6],[3],DM,'偏序與平面圖'),row(range(7,12),[3],LA,'矩陣分解、最小平方與特徵值')]},
 'NYCU-113-8103':{choices:[
  row(1,[2],OS,'權限與特權指令'),row(2,[2],CO,'x86 指令'),row(3,[2,3],OS,'記憶體保護'),row(4,[3],OS,'EDF 排程'),row(5,[3,4],OS,'系統呼叫'),row(6,[4],OS,'行程與執行緒'),row(7,[5],OS,'I/O 系統'),row(8,[5],OS,'記憶體管理'),row(9,[5],OS,'虛擬記憶體'),row(10,[5],OS,'檔案系統'),row(11,[6],CO,'MIPS 定址模式'),row(12,[6,7],CO,'管線資料路徑'),row(13,[7],CO,'分支預測'),row(14,[7],CO,'CPI 與效能'),row(15,[7],CO,'MIPS 指令集'),row(16,[8],CO,'AI 加速器與功耗'),row(17,[8],CO,'指令數與效能'),row(18,[8,9],CO,'乘法器與超前進位'),row(19,[10],CO,'電腦算術與浮點數'),row(20,[10],CO,'Hamming 編碼'),
  row([21,22],[11],OS,'堆疊與緩衝區',{group:'A',mode:'single'}),row([23,24],[12],OS,'分頁與區域性',{group:'B',mode:'single'}),row(range(25,27),[12,13],CO,'管線停滯與危障',{group:'C',mode:'single'}),row(range(28,30),[13,14],CO,'記憶體階層與快取',{group:'D',mode:'single'})
 ],written:[],options:4},
 'NYCU-114-8101':{choices:[
  row(1,[1],DS,'漸近符號與遞迴複雜度'),row(2,[1],ALG,'Monge 陣列'),row(3,[1,2],ALG,'排列重建演算法'),row(4,[2],ALG,'模反元素'),row(5,[2],ALG,'貪婪演算法'),row(6,[2],ALG,'最小生成樹'),row(7,[3],ALG,'最小生成樹計數'),row(8,[3],ALG,'BFS'),row(9,[3],DS,'紅黑樹'),row([10,11],[3,4],DS,'最小堆積程式',{group:'10-11'}),row(12,[4],DS,'B 樹'),row(13,[4],DS,'搜尋樹比較'),row(14,[5,6],ALG,'最短路徑演算法')
 ],written:[row(1,[6],ALG,'DAG 最長路徑'),row(2,[6],ALG,'最長回文子序列'),row(3,[6,7],ALG,'互斥路徑與最大流'),row(4,[7],DS,'紅黑樹高度'),row(5,[7],DS,'堆積葉節點'),row(6,[7],DS,'順序統計樹'),row(7,[7],DS,'遞迴時間複雜度')],options:5},
 'NYCU-114-8102':{choices:[],written:[row(range(1,4),[1],DM,'邏輯、集合、計數與關係'),row(5,[2],DM,'圖同構'),row(range(6,8),[2],LA,'子空間、行列式與二次型'),row(9,[3],LA,'線性映射的矩陣表示')]},
 'NYCU-114-8103':{choices:[
  row(1,[1],OS,'分頁'),row(2,[1],OS,'記憶體管理'),row(3,[1],OS,'虛擬記憶體'),row(4,[1,2],OS,'行程與系統呼叫'),row(5,[2],OS,'銀行家演算法'),row(6,[2],OS,'中斷處理'),row(7,[2,3],OS,'記憶體映射'),row(8,[3],OS,'Round Robin 排程'),row(9,[3],OS,'行程排程與執行緒'),row(10,[3],OS,'I/O 與檔案系統'),row(11,[3],CO,'Amdahl 定律與快取效能'),row(12,[3,4],CO,'快取未命中'),row(13,[4],CO,'快取區塊'),row(14,[4,5],CO,'組相聯快取'),row(15,[5],CO,'AMAT 與 CPI'),row(16,[5],CO,'數值表示'),row(17,[5],CO,'IEEE 754 浮點數'),row(18,[5,6],CO,'管線轉送'),row(19,[6],CO,'分支預測與 CPI'),row(20,[6,7],CO,'二位元分支預測器'),
  row(range(21,24),[7,8],CO,'RAID 5',{group:'A',mode:'single'}),row(range(25,27),[8],OS,'多層頁表',{group:'B',mode:'single'}),row(range(28,30),[9],CO,'快取欄位與容量',{group:'C',mode:'single'}),row(range(31,34),[9,10],CO,'五階段管線',{group:'D',mode:'single'})
 ],written:[],options:4}
};
export function lookupPageMap(examId, number, written=false){
 const map=pageMap[examId], candidates=map?.[written?'written':'choices']?.filter(row=>row.items.some(item=>String(item)===String(number)));
 if(candidates?.length!==1)throw Error('Missing or ambiguous reviewed mapping '+examId+' / '+number);
 return {...candidates[0],options:map.options||0};
}
