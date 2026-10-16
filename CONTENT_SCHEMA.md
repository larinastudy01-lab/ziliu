# 課程資料入口

目前 `docs/content.js` 包含使用者提供的線性代數 1-1、1-3～1-7，以及資料結構 1-1～1-9 審閱稿，其他四科為空白。後續取得課程資料再由管理者加入，使用者端沒有上傳介面。

科目保留固定 `id`、`name`、`en`、`icon`，方便後續對應講義、題庫與進度。

每個大章使用唯一 `id`、`title`、`sections`，可用 `curriculumComplete: false` 表示資料未齊或教材完整性尚待核對，此時不能自動標記全章完成。每個小節使用唯一 `id`、`title`、`blocks`、選用的 `knowledgePointIds` 與 `assessment`。線性代數科目為 `linear-algebra`，章為 `LA-CH01`，小節為 `LA-CH01-S01`、`LA-CH01-S03`～`LA-CH01-S07`；1-2 沒有建立假內容。資料結構科目為 `data-structures`，章為 `DS-CH01`，小節為 `DS-CH01-S01`～`DS-CH01-S09`。原稿 ID 放在 `sourceSectionId`，資料結構知識點與題目另保留 `sourceId` 以便對照。兩科正式章名仍待核對。

講義板塊使用 `id`、`type` 與適用欄位：`title`、`markdown`、`provenance`、`knowledgePointIds`、`exampleId`、`prompt`、`layout`、`height`、`assessmentId`。本次使用 `concept`、`example`、`note`、`summary`、`assessment`。Markdown 支援段落、列表、表格、數學式與程式碼圍欄，不接受可執行 HTML；程式碼先隔離，再處理正文數學式，保留縮排及字面內容。

`questions` 儲存作答題目；`examples` 儲存講義例題；`knowledgePoints` 儲存知識點。題目使用唯一 `id`、`subjectId`、`chapterId`、`sectionId`、`title`、`type`、`text`、`knowledgePointIds`、`tags`、`source`、`points`，選擇題另有 `options`。共用題幹與小題保持同一題。

作答題型為 `選擇題`、`手寫計算題`、`證明題`、`手寫問答題`。最後一類用於需求、操作規格及演算法說明，與其他手寫題共用筆跡保存、自評與訂正流程。

答案與詳解依題目 ID 分開儲存在 `answers`、`solutions`：選擇答案使用從 0 開始的 `correctOption`；詳解有 `markdown` 與逐選項 `optionExplanations`。這是靜態公開網站的資料組織方式，並非伺服器端保密機制。

小節 `assessment` 使用 `id`、`scope: section`、`title`、`questionIds`、`totalPoints` 與選用的 `scoringNote`；引用正式題目，避免重複題幹。線性代數 1-1 總配分 30、1-3 總配分 20，兩者選擇題都是 10 分。資料結構 1-1、1-2 各 40 分，選擇題各 4 分、手寫各 10 分。其餘小節未提供選擇題配分，`totalPoints` 及選擇題 `points` 為 `null`，`scoringStatus` 為 `unspecified`；不能把未知值算成 0 或自行填上慣例分數。此時自動結果顯示答對題數，手寫配分與自評另外呈現。

真實考古題的 `source.kind` 為 `exam`，並提供 `school`、`year`、`number` 與 `url`。模擬題使用 `source.kind = simulation` 及明確的 `source.title`。必須先取得並核對資料，才可填寫來源；共用題幹、小題關係與必要圖表需在內容整理時保留。

教材例題使用 `source.kind = material`。若只有先前文字轉錄而尚未核對原圖，使用 `source.verificationStatus = pending_original`，並在 `source.title` 保留教材例號與限制，介面在題目旁顯示待確認標籤。1-6 的 E02、E03 屬於這個狀態，不能標為已核對原題；其餘自編例題使用 `simulation`。

僅放入使用者提供的教材。`sourceReviews` 逐節記錄審閱狀態、內容限制、來源 SHA-256 與未收錄的候選索引數；保留原 `sourceReview` 供舊資料相容。跨節稿件可用 `sourceGroup` 表示共用來源，`additionalSources` 保留併入片段的其他來源。各稿候選可能重複，同份跨節稿的候選也不是逐節新增，不以筆數相加推定獨立考古題數。沒有完整來源的考古題，不建立可作答正式題目。個人筆跡、編排、作答與進度都放在 localStorage，不寫入課程檔。
