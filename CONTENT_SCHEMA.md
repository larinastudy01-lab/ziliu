# 課程資料入口

目前 `docs/content.js` 包含使用者提供的線性代數 1-1 審閱稿，其他五科為空白。後續取得課程資料再由管理者加入，使用者端沒有上傳介面。

科目保留固定 `id`、`name`、`en`、`icon`，方便後續對應講義、題庫與進度。

每個大章使用唯一 `id`、`title`、`sections`，可用 `curriculumComplete: false` 表示資料未齊，此時不能自動標記全章完成。每個小節使用唯一 `id`、`title`、`blocks`、選用的 `knowledgePointIds` 與 `assessment`。1-1 使用來源 ID `LA-CH01-S01`，科目維持既有 `linear-algebra`，另記錄來源科目 ID `LA`。

講義板塊使用 `id`、`type` 與適用欄位：`title`、`markdown`、`provenance`、`knowledgePointIds`、`exampleId`、`prompt`、`layout`、`height`、`assessmentId`。本次使用 `concept`、`example`、`note`、`summary`、`assessment`。Markdown 僅支援段落、列表、表格與數學式，不接受可執行 HTML。

`questions` 儲存作答題目；`examples` 儲存講義例題；`knowledgePoints` 儲存知識點。題目使用唯一 `id`、`subjectId`、`chapterId`、`sectionId`、`title`、`type`、`text`、`knowledgePointIds`、`tags`、`source`、`points`，選擇題另有 `options`。共用題幹與小題保持同一題。

答案與詳解依題目 ID 分開儲存在 `answers`、`solutions`：選擇答案使用從 0 開始的 `correctOption`；詳解有 `markdown` 與逐選項 `optionExplanations`。這是靜態公開網站的資料組織方式，並非伺服器端保密機制。

小節 `assessment` 使用 `id`、`scope: section`、`title`、`questionIds` 與 `totalPoints`；引用正式題目，避免重複題幹。本次 `AS01` 配分為 30，但只有選擇題的 10 分自動計分，手寫另行自評。

真實考古題的 `source.kind` 為 `exam`，並提供 `school`、`year`、`number` 與 `url`。模擬題使用 `source.kind = simulation` 及明確的 `source.title`。必須先取得並核對資料，才可填寫來源；共用題幹、小題關係與必要圖表需在內容整理時保留。

僅放入使用者提供並確認命名的教材。`sourceReview` 記錄審閱狀態、內容限制、來源 SHA-256 與未收錄的考古題摘要數。沒有輸入完整來源的考古題，不建立可作答的正式題目。個人筆跡、編排、作答與進度都放在 localStorage，不寫入課程檔。
