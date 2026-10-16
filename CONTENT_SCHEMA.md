# 課程資料入口

目前 `docs/content.js` 的六科 `chapters` 陣列及全域 `questions` 陣列皆為空白。之後取得課程資料，再由管理者整理加入。使用者端沒有上傳介面。

科目保留固定 `id`、`name`、`en`、`icon`，方便後續對應講義、題庫與進度。

每個大章使用唯一 `id`、`title`、`sections` 與選用的 `quiz`。每個小節使用唯一 `id`、`title`、選用的 `minutes` 與 `blocks`。

講義板塊欄位為 `id`、`type`、`title`、`text`、`formula`、`items`、`steps`、`height`；僅在適用時提供欄位。`type` 可用 `concept`、`formula`、`properties`、`example`、`summary` 或 `note`。文字以純文字方式安全呈現。

題目使用唯一 `id`、`subjectId`、`chapterId`、`sectionId`、`title`、`type`、`text`、`tags`、`source` 及 `steps`。選擇題另有 `options`、從 0 開始的 `answer` 與逐選項 `explanations`。

真實考古題的 `source.kind` 為 `exam`，並提供 `school`、`year`、`number` 與 `url`。模擬題使用 `source.kind = simulation` 及明確的 `source.title`。必須先取得並核對資料，才可填寫來源；共用題幹、小題關係與必要圖表需在內容整理時保留。

不放入任何示範課程或題目作為預設資料。不把尚未提供的教材顯示為已完成或可作答。
