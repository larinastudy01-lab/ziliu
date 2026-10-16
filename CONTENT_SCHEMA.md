# 課程資料入口

目前 `docs/content.js` 包含使用者提供的線性代數 1-1、1-3～1-7、2-1～2-4、3-1～3-3、3-5～3-6，以及資料結構 1-1～1-9 審閱稿，其他四科為空白。後續取得課程資料再由管理者加入，使用者端沒有上傳介面。

科目保留固定 `id`、`name`、`en`、`icon`，方便後續對應講義、題庫與進度。

每個大章使用唯一 `id`、`title`、`sections`，可用 `curriculumComplete: false` 表示資料未齊或教材完整性尚待核對，此時不能自動標記全章完成。每個小節使用唯一 `id`、`title`、`blocks`、選用的 `knowledgePointIds` 與 `assessment`。線性代數科目為 `linear-algebra`，章為 `LA-CH01`，小節為 `LA-CH01-S01`、`LA-CH01-S03`～`LA-CH01-S07`；1-2 沒有建立假內容。資料結構科目為 `data-structures`，章為 `DS-CH01`，小節為 `DS-CH01-S01`～`DS-CH01-S09`。原稿 ID 放在 `sourceSectionId`，資料結構知識點與題目另保留 `sourceId` 以便對照。兩科正式章名仍待核對。

線性代數第二章為 `LA-CH02`，暫稱「第 2 章 行列式」，小節為 `LA-CH02-S01`～`LA-CH02-S04`，正式章名及完整性待原目錄核對。小節 ID 作為題目、知識點、筆記與評量前綴，跨章節同名 K01、Q01 不會互相覆蓋；小節按任意章的「章號-節號」排序。

第三章為 `LA-CH03`，暫稱「第 3 章 向量空間」，已提供小節為 `S01`、`S02`、`S03`、`S05`、`S06`。大章可使用 `pendingSections: [{number, title, status: awaiting_material}]` 保存使用者已確認名稱但未提供教材的項目。本次 3-4「基底與維度」只在目錄中顯示，不放入 `sections`，不建立評量、不計入分母；`coverageNote` 說明缺漏。待實際教材加入後，應移除對應 pending 項目。

講義板塊使用 `id`、`type` 與適用欄位：`title`、`markdown`、`provenance`、`knowledgePointIds`、`exampleId`、`prompt`、`layout`、`height`、`assessmentId`、`transcriptId`。本次使用 `concept`、`example`、`note`、`summary`、`assessment`、`source-review`；最後一類只引用待核對轉錄，不提供作答功能。Markdown 支援段落、列表、表格、數學式與程式碼圍欄，不接受可執行 HTML；程式碼先隔離，再處理正文數學式，保留縮排及字面內容。

`questions` 儲存作答題目；`examples` 儲存講義例題；`knowledgePoints` 儲存知識點。題目使用唯一 `id`、`subjectId`、`chapterId`、`sectionId`、`title`、`type`、`text`、`knowledgePointIds`、`tags`、`source`、`points`，選擇題另有 `options`。共用題幹與小題保持同一題。

作答題型為 `選擇題`、`多選題`、`手寫計算題`、`證明題`、`手寫問答題`。多選題另有 `selectionMode: multiple`，使用核取方塊；最後一類用於需求、操作規格及演算法說明，與其他手寫題共用筆跡保存、自評與訂正流程。

答案與詳解依題目 ID 分開儲存在 `answers`、`solutions`：單選答案使用從 0 開始的 `correctOption`，多選使用 `correctOptions` 整數陣列。多選採完整集合比對，不受勾選順序影響；少選、多選、重複或無效索引皆不算答對。作答不可全空，交卷快照使用深拷貝，避免重做改動舊陣列。詳解有 `markdown` 與逐選項 `optionExplanations`。這是靜態公開網站的資料組織方式，並非伺服器端保密機制。

小節 `assessment` 使用 `id`、`scope: section`、`title`、`questionIds`、`totalPoints` 與選用的 `scoringNote`；引用正式題目，避免重複題幹。線性代數 1-1 總配分 30、1-3 總配分 20，兩者選擇題都是 10 分；2-3、3-1 總配分各 40，選擇各 4 分、手寫各 10 分；2-4 總配分 100，選擇各 8 分、手寫各 30 分。資料結構 1-1、1-2 各 40 分，選擇題各 4 分、手寫各 10 分。其餘小節未提供選擇題配分，`totalPoints` 及選擇題 `points` 為 `null`，`scoringStatus` 為 `unspecified`；不能把未知值算成 0 或自行填上慣例分數。此時自動結果顯示答對題數，手寫配分與自評另外呈現。

真實考古題的 `source.kind` 為 `exam`，並提供 `school`、`year`、`number`；已核對的線上來源可另有 `url`，使用者提供的掃描則記錄原始 `filename`、`examId` 及來源核對狀態，不捏造官方連結。模擬題使用 `source.kind = simulation` 及明確的 `source.title`。必須先取得並核對資料，才可填寫來源；共用題幹、小題關係與必要圖表需在內容整理時保留。

教材例題使用 `source.kind = material`。若只有先前文字轉錄而尚未核對原圖，使用 `source.verificationStatus = pending_original`，並在 `source.title` 保留教材例號與限制，介面在題目旁顯示待確認標籤。線性代數 1-6 的 E02、E03 與第二章的 6 道轉錄例題屬於這個狀態，不能標為已核對原題；其餘自編例題使用 `simulation`。原稿中合併的例題解答按題目拆開保存，共用矩陣補回各例題題幹，避免題目只留下不完整引用。

`pendingExamTranscripts` 獨立保存稿件已有完整題幹、但未核對官方原卷的考古題轉錄。欄位為 `id`、`groupId`、`subjectId`、`sectionId`、`title`、`examSubject`、`knowledgePointIds`、`text`、`editorialSolution`、`status: pending_original`、`source`。共用題幹與所有小題保留在同一筆；`source.kind: unverified_compilation`、彙編檔名、PDF 頁序、來源稿件名稱與未核對聲明均保留。它們不出現在 `questions`／`answers`／`assessment.questionIds`，不產生作答紀錄或弱點分母；介面只提供分開收合的原文及編輯解答，不能誤標已核實考古題。本次有 8 筆，均在 3-3；第三章另有四道教材整理例題使用 `material / pending_original`。

僅放入使用者提供的教材。`sourceReviews` 逐節記錄審閱狀態、內容限制、來源 SHA-256 與未收錄的候選索引數；保留原 `sourceReview` 供舊資料相容。跨節稿件可用 `sourceGroup` 表示共用來源，`additionalSources` 保留併入片段的其他來源。各稿候選可能重複，同份跨節稿的候選也不是逐節新增，不以筆數相加推定獨立考古題數。沒有完整來源的考古題，不建立可作答正式題目。個人筆跡、編排、作答與進度都放在 localStorage，不寫入課程檔。

`docs/exams.js` 另外提供 `window.ZILIU_EXAMS`，包含 `papers`、`questions`、`answers`、`provenance`、`notice`，由介面與課程題目合併展示，不改寫課程評量。修正版有 9 份 `papers`、68 頁影像、206 筆來源索引；149 筆有選擇題答案，57 筆為沒有參考解答的手寫練習。每份原卷保留年、科目代碼、原始檔名及完整有序 `pages`；每頁含本機資產相對路徑、替代文字與 SHA-256。

掃描題目使用 `stemFormat: scan`、`scans`、`originalNumber`、`groupId`、`groupLabel`、`pageMappingStatus: reviewed_against_supplied_images`。`text` 只提供編輯主題標籤，不冒充原題轉錄；完整題幹、共用程式與圖表在相關掃描頁中。113 軟體科的 `originalNumber` 指答案卡作答格，`groupLabel` 同時提供原卷大題號。原卷頁序已透過全部影像核對後的 `nycu-page-map.mjs` 修正，不使用原草案的概略位置直接啟用作答。

掃描選擇題 `options` 只有原卷選項字母的操作標籤，原文以影像顯示；依原卷保留四或五個選項、單選或複選。`answers[id].acceptedSets` 是數字索引陣列的陣列，必須完整命中其中一組；不能將 AC 或 E 合併為 ACE。另存原表、異動、送分與原稿來源聲明。`sourceGradingPolicy` 只保存原稿資訊；本系統只比對答案集合，未實作的原卷部分給分、倒扣或題組配分不啟用，`points` 為 `null`。4 筆 `bonusAll` 顯示送分且不提交、不計入練習答對率。

掃描非選擇題使用 `type: 手寫題`、`practiceOnly: true`、`referenceStatus: missing`；只保存連結原題的筆跡及文字，沒有交卷評分或自評按鈕，不建立作答率分母。149 筆選擇題也缺少分步詳解，交卷後明示尚未提供，不能把答案表說成官方詳解。個人作答、重做與訂正依原題唯一 ID 保存，不寫回靜態來源檔。
