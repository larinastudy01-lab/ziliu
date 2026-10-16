// 課程內容取自使用者提供審閱稿；個人筆跡、作答與進度不放入此檔。
window.ZILIU_CONTENT = {
  "version": 3,
  "subjects": [
    {
      "id": "linear-algebra",
      "name": "線性代數",
      "en": "LINEAR ALGEBRA",
      "icon": "grid",
      "chapters": [
        {
          "id": "LA-CH01",
          "title": "第 1 章",
          "titleStatus": "待確認正式章名",
          "curriculumComplete": false,
          "sections": [
            {
              "id": "LA-CH01-S01",
              "title": "1-1 矩陣及矩陣運算",
              "reviewStatus": "draft",
              "contentVersion": "0.1",
              "notice": "第一階段審閱稿：前置基礎已標為補充；原教材前段尚待補齊，不能視為完整覆蓋原教材。",
              "knowledgePointIds": [
                "LA-CH01-S01-K01",
                "LA-CH01-S01-K02",
                "LA-CH01-S01-K03",
                "LA-CH01-S01-K04",
                "LA-CH01-S01-K05",
                "LA-CH01-S01-K06",
                "LA-CH01-S01-K07",
                "LA-CH01-S01-K08",
                "LA-CH01-S01-K09",
                "LA-CH01-S01-K10",
                "LA-CH01-S01-K11",
                "LA-CH01-S01-K12"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S01-B01",
                  "type": "concept",
                  "title": "尺寸、元素、矩陣類型",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K01"
                  ],
                  "provenance": "前置補充",
                  "markdown": "矩陣（matrix）$A=[a_{ij}]\\in F^{m\\times n}$ 表示有 $m$ 個 row、$n$ 個 column，元素來自數域 $F$；本節主要使用實數 $\\mathbb R$ 或複數 $\\mathbb C$。$a_{ij}$ 是第 $i$ 個 row、第 $j$ 個 column 的元素。為避免「行、列」用語歧義，本稿搭配 row／column。\n\n| 名稱 | 定義或條件 |\n|---|---|\n| 方陣（square matrix） | $m=n$ |\n| 零矩陣（zero matrix）$O$ | 所有元素為 0；尺寸依上下文決定 |\n| 單位矩陣（identity matrix）$I_n$ | 主對角線為 1，其餘為 0 |\n| 對角矩陣（diagonal matrix） | 非主對角線元素為 0；$\\operatorname{diag}(d_1,\\ldots,d_n)$ 表示對角線依序為這些數 |\n| 上／下三角矩陣 | 主對角線下／上方元素全為 0 |\n| 標準基底向量（standard basis vector）$e_j$ | 第 $j$ 個位置為 1，其餘為 0 的 column vector |\n\n同尺寸矩陣相等，指所有對應元素相等。$Ae_j$ 會取出 $A$ 的第 $j$ 個 column。搭配 E01。"
                },
                {
                  "id": "LA-CH01-S01-B02",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E01",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B03",
                  "type": "concept",
                  "title": "加法、純量倍、矩陣乘法",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K02"
                  ],
                  "provenance": "前置補充與教材整理",
                  "markdown": "同尺寸才可相加：$(A+B)_{ij}=a_{ij}+b_{ij}$。純量（scalar）$c$ 的乘法為 $(cA)_{ij}=ca_{ij}$。\n\n若 $A\\in F^{m\\times n}$、$B\\in F^{n\\times p}$，則 $AB\\in F^{m\\times p}$，且\n\n$$ (AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}. $$\n\n$\\Sigma$ 是加總記號；$k$ 為跑動索引，$i,j$ 固定目標位置。例如 $n=3$ 時，上式是 $a_{i1}b_{1j}+a_{i2}b_{2j}+a_{i3}b_{3j}$。每一項都是普通數字相乘，不是矩陣互換。\n\n在運算有定義的前提下，加法可交換、可結合；乘法可結合 $A(BC)=(AB)C$；左右分配律皆成立；純量可提出：$c(AB)=(cA)B=A(cB)$。若 $A$ 為 $m\\times n$，則 $I_mA=AI_n=A$，且 $0A=O$。搭配 E02。"
                },
                {
                  "id": "LA-CH01-S01-B04",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E02",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B05",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "標出每個矩陣尺寸，再逐格計算乘積。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K02"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B06",
                  "type": "concept",
                  "title": "不交換、零因子與消去陷阱",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K03"
                  ],
                  "provenance": "教材整理",
                  "markdown": "1. $AB$ 與 $BA$ 即使都有定義，也通常不同；更可能只有其中一個有定義。\n2. 非零矩陣可能平方為零，例如 $N=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$，$N^2=O$。若某正整數 $r$ 使 $N^r=O$，稱為冪零矩陣（nilpotent matrix）。\n3. $P=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ 滿足 $P^2=P$，卻不是 $O$ 或 $I$；此類稱冪等矩陣（idempotent matrix）。\n4. $AB=O$ 不保證任一因子為零。例如 $A=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$、$B=\\begin{bmatrix}0&0\\\\2&0\\end{bmatrix}$ 都非零，乘積為零。這是非零零因子（zero divisor）。\n5. 不能因 $A\\ne O$，便由 $AB=AC$ 消去 $A$。若 $A$ 可逆，可左乘 $A^{-1}$ 推出 $B=C$。補充：更一般的長方形矩陣若有左反矩陣，也可以左消去。\n6. $X^2=I$ 的矩陣解不只 $\\pm I$，例如 $\\operatorname{diag}(1,-1)$。搭配 E03。\n\n教材消去反例：\n\n$$ A=\\begin{bmatrix}1&0\\\\2&0\\end{bmatrix},\\quad B=\\begin{bmatrix}1&2\\\\0&0\\end{bmatrix},\\quad C=\\begin{bmatrix}1&2\\\\1&1\\end{bmatrix}. $$\n\n直接相乘得 $AB=AC=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$，但 $B\\ne C$。"
                },
                {
                  "id": "LA-CH01-S01-B07",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E03",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B08",
                  "type": "note",
                  "layout": "split",
                  "title": "對照講義，寫下自己的理解",
                  "prompt": "左側顯示 K03，右側自行設計一組消去律失敗的反例。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K03"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B09",
                  "type": "concept",
                  "title": "矩陣冪與二項式展開",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K04"
                  ],
                  "provenance": "教材整理",
                  "markdown": "方陣才可反覆與自身相乘。$A^1=A$、$A^k=A^{k-1}A$。正整數指數滿足 $A^mA^n=A^{m+n}$、$(A^m)^n=A^{mn}$。補充：方陣的零次冪定為 $A^0=I$；負次冪須 $A$ 可逆。\n\n分配律給出\n\n$$ (A+B)^2=A^2+AB+BA+B^2. $$\n\n只有 $AB=BA$ 時，才能合併為 $A^2+2AB+B^2$；一般二項式係數展開也須可交換。矩陣高次冪先找低次規律，再用除法餘數或歸納法。搭配 E04。"
                },
                {
                  "id": "LA-CH01-S01-B10",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E04",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B11",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "先算低次冪，寫出週期並處理指數餘數。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K04"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B12",
                  "type": "concept",
                  "title": "分割矩陣與 column 解釋",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K05"
                  ],
                  "provenance": "教材整理",
                  "markdown": "分割矩陣（partitioned matrix）把矩陣切成子矩陣，也稱方塊矩陣（block matrix）。加法須採相同分割且對應尺寸一致。乘法須讓左矩陣的 column 分割寬度與右矩陣的 row 分割高度逐一相符：\n\n$$\\begin{bmatrix}A_{11}&A_{12}\\\\A_{21}&A_{22}\\end{bmatrix}\\begin{bmatrix}B_{11}&B_{12}\\\\B_{21}&B_{22}\\end{bmatrix}=\\begin{bmatrix}A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\\\A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}\\end{bmatrix}.$$\n\n方塊本身是矩陣，乘積順序不可交換。若 $A=[a_1\\ a_2\\ \\cdots\\ a_n]$，其中 $a_j$ 是第 $j$ 個 column，則\n\n$$Ax=x_1a_1+\\cdots+x_na_n.$$\n\n若 $B=[b_1\\ \\cdots\\ b_p]$，則 $AB=[Ab_1\\ \\cdots\\ Ab_p]$。也可把 $A$ 寫成各 row vector 上下堆疊。搭配 E05。"
                },
                {
                  "id": "LA-CH01-S01-B13",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E05",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B14",
                  "type": "note",
                  "layout": "split",
                  "title": "對照講義，寫下自己的理解",
                  "prompt": "左側顯示 column 組合公式，右側畫出係數與向量的對應。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K05"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B15",
                  "type": "concept",
                  "title": "轉置與元素證明",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K06"
                  ],
                  "provenance": "教材整理",
                  "markdown": "轉置（transpose）交換 row 與 column：$(A^T)_{ij}=a_{ji}$；$m\\times n$ 變成 $n\\times m$。\n\n$$ (A^T)^T=A,\\qquad (\\alpha A+\\beta B)^T=\\alpha A^T+\\beta B^T,\\qquad (AB)^T=B^TA^T. $$\n\n多因子同理：$(A_1\\cdots A_r)^T=A_r^T\\cdots A_1^T$。\n\n為何乘積轉置須反序？取 $A\\in F^{m\\times n}$、$B\\in F^{n\\times p}$。對任意 $1\\le i\\le p$、$1\\le j\\le m$，\n\n$$ ((AB)^T)_{ij}=(AB)_{ji}=\\sum_{k=1}^{n}a_{jk}b_{ki}, $$\n\n前一步是轉置定義，後一步是矩陣乘法定義。另一方面，\n\n$$ (B^TA^T)_{ij}=\\sum_{k=1}^{n}(B^T)_{ik}(A^T)_{kj}=\\sum_{k=1}^{n}b_{ki}a_{jk}. $$\n\n每一對因子都是數域中的純量，可交換，因此對應元素相等；兩矩陣尺寸也同為 $p\\times m$，故相等。搭配 E06。"
                },
                {
                  "id": "LA-CH01-S01-B16",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E06",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B17",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "把 Σ 展開成前三項，再重新寫回索引形式。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K06"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B18",
                  "type": "concept",
                  "title": "共軛與共軛轉置",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K07"
                  ],
                  "provenance": "教材整理",
                  "markdown": "若 $z=a+bi$，其中 $i^2=-1$，其複共軛（complex conjugate）為 $\\bar z=a-bi$。矩陣逐項共軛得到 $\\bar A$。\n\n共軛轉置（conjugate transpose）$A^H=\\bar A^{\\,T}$，亦可記 $A^*$；$(A^H)_{ij}=\\overline{a_{ji}}$。先轉置或先共軛均可。\n\n$$ (A^H)^H=A,\\qquad (\\alpha A\\pm\\beta B)^H=\\bar\\alpha A^H\\pm\\bar\\beta B^H,\\qquad (AB)^H=B^HA^H. $$\n\n實矩陣滿足 $A^H=A^T$。搭配 E07。"
                },
                {
                  "id": "LA-CH01-S01-B19",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E07",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B20",
                  "type": "concept",
                  "title": "對稱、斜對稱與 Hermitian",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K08"
                  ],
                  "provenance": "教材整理",
                  "markdown": "| 類型 | 本節數域 | 條件 | 元素關係 | 主對角線 |\n|---|---|---|---|---|\n| 對稱（symmetric） | $\\mathbb R$ | $A^T=A$ | $a_{ij}=a_{ji}$ | 任意實數 |\n| 斜對稱（skew-symmetric） | $\\mathbb R$ | $A^T=-A$ | $a_{ij}=-a_{ji}$ | 全為 0 |\n| Hermitian | $\\mathbb C$ | $A^H=A$ | $a_{ij}=\\overline{a_{ji}}$ | 實數 |\n| skew-Hermitian | $\\mathbb C$ | $A^H=-A$ | $\\overline{a_{ji}}=-a_{ij}$ | 純虛數或 0 |\n\n斜對稱的對角線滿足 $a_{ii}=-a_{ii}$，所以 $2a_{ii}=0$；在實數或特徵不為 2 的體上，可除以 2，得到 $a_{ii}=0$。Hermitian 對角線滿足 $a_{ii}=\\overline{a_{ii}}$，所以虛部為零；skew-Hermitian 則令實部為零。補充：對稱性也可在複數域定義，但與 Hermitian 條件不同。搭配 E08。"
                },
                {
                  "id": "LA-CH01-S01-B21",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E08",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B22",
                  "type": "note",
                  "layout": "split",
                  "title": "對照講義，寫下自己的理解",
                  "prompt": "左側放四類矩陣表，右側自行寫出各類例子。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K08"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B23",
                  "type": "concept",
                  "title": "對稱矩陣運算與分解",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K09"
                  ],
                  "provenance": "教材整理",
                  "markdown": "任意實方陣可分解為\n\n$$ A=S+K,\\qquad S=\\frac{A+A^T}{2},\\qquad K=\\frac{A-A^T}{2}. $$\n\n由轉置線性性，$S^T=(A^T+A)/2=S$，$K^T=(A^T-A)/2=-K$。此分解在特徵不為 2 的體上同樣成立。\n\n若 $A,B$ 為同階對稱矩陣，則 $A+B$、$\\alpha A$ 與正整數次方 $A^n$ 均對稱；理由分別是轉置線性性與 $(A^n)^T=(A^T)^n$。但\n\n$$ AB\\text{ 對稱}\\iff(AB)^T=AB\\iff BA=AB. $$\n\n「兩個因子對稱」不夠，還需要可交換。搭配 E09。"
                },
                {
                  "id": "LA-CH01-S01-B24",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E09",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K09"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B25",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "自行驗證對稱與斜對稱分解的兩個條件。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K09"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B26",
                  "type": "concept",
                  "title": "trace 與循環性",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K10"
                  ],
                  "provenance": "教材整理",
                  "markdown": "方陣的跡（trace）是主對角線總和：\n\n$$\\operatorname{tr}(A)=\\sum_{i=1}^{n}a_{ii}.$$\n\n$\\operatorname{tr}(\\alpha A+\\beta B)=\\alpha\\operatorname{tr}(A)+\\beta\\operatorname{tr}(B)$；$\\operatorname{tr}(A^T)=\\operatorname{tr}(A)$；$\\operatorname{tr}(A^H)=\\overline{\\operatorname{tr}(A)}$。\n\n若 $A$ 為 $m\\times n$、$B$ 為 $n\\times m$，則\n\n$$\\operatorname{tr}(AB)=\\sum_{i=1}^{m}\\sum_{k=1}^{n}a_{ik}b_{ki}=\\sum_{k=1}^{n}\\sum_{i=1}^{m}b_{ki}a_{ik}=\\operatorname{tr}(BA).$$\n\n中間使用有限和交換次序與純量交換律。$AB$ 與 $BA$ 可不同尺寸，trace 仍相同。尺寸相容時有 $\\operatorname{tr}(ABC)=\\operatorname{tr}(BCA)=\\operatorname{tr}(CAB)$，但不能任意改成 $\\operatorname{tr}(ACB)$。搭配 E10。"
                },
                {
                  "id": "LA-CH01-S01-B27",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E10",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K10"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B28",
                  "type": "concept",
                  "title": "trace 證明與平方和",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K11"
                  ],
                  "provenance": "教材整理",
                  "markdown": "在 $\\mathbb R$ 或 $\\mathbb C$ 上，不存在 $n\\times n$ 矩陣使 $AB-BA=I_n$（$n\\ge1$）。因兩邊取 trace，左邊為 0，右邊為 $n\\ne0$，矛盾。在特徵整除 $n$ 的體上，單靠此證法無法得到矛盾，不可直接延用結論。\n\n對實矩陣 $A\\in\\mathbb R^{m\\times n}$，\n\n$$\\operatorname{tr}(A^TA)=\\sum_{j=1}^{n}(A^TA)_{jj}=\\sum_{j=1}^{n}\\sum_{k=1}^{m}a_{kj}^2.$$\n\n每項非負，總和為零時，每項必為零，因此 $A=O$。此總和亦為 Frobenius 範數（Frobenius norm）平方 $\\|A\\|_F^2$。\n\n複矩陣應使用 $\\operatorname{tr}(A^HA)=\\sum_{k,j}|a_{kj}|^2$，其中 $|z|^2=\\bar z z$；不能用複數平方非負作論證。搭配 E11。"
                },
                {
                  "id": "LA-CH01-S01-B29",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E11",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K11"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B30",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "說明平方和為零為何可推出每一項為零。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K11"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B31",
                  "type": "concept",
                  "title": "方塊矩陣高次冪",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K12"
                  ],
                  "provenance": "教材整理",
                  "markdown": "若 $B$ 為 $r\\times r$ 且 $B^2=B$，令 $A=\\begin{bmatrix}I_r&B\\\\O&B\\end{bmatrix}$，則\n\n$$ A^k=\\begin{bmatrix}I_r&kB\\\\O&B\\end{bmatrix}\\quad(k\\ge1). $$\n\n乘法先算右上角 $I_rB+kBB=B+kB^2=(k+1)B$，右下角為 $B^2=B$，其餘維持不變。歸納證明見 E12。此公式只寫正整數 $k$，不可直接代入 $k=0$。搭配 E12。"
                },
                {
                  "id": "LA-CH01-S01-B32",
                  "type": "example",
                  "exampleId": "LA-CH01-S01-E12",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K12"
                  ]
                },
                {
                  "id": "LA-CH01-S01-B33",
                  "type": "note",
                  "layout": "inline",
                  "title": "停一下，親手推導",
                  "prompt": "寫歸納法：基礎步、歸納假設、歸納推論。",
                  "knowledgePointIds": [
                    "LA-CH01-S01-K12"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S01-B34",
                  "type": "summary",
                  "title": "考前摘要與常見錯誤",
                  "markdown": "- 尺寸：$(m\\times n)(n\\times p)=m\\times p$；先判斷有定義，再計算。\n- 順序：乘法一般不可交換，轉置與共軛轉置會反轉乘積順序。\n- 反例：記住 $N=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$ 的平方為零、$P=\\operatorname{diag}(1,0)$ 的平方等於自己。\n- 對稱：$AB$ 對稱的充要條件是兩個對稱因子可交換。\n- trace：可循環，不可任意交換；trace 相同不表示矩陣相等。\n- 實數平方和用 $A^TA$，複數絕對值平方和用 $A^HA$。\n- 高次冪：先低次試算，再建立公式與證明。\n\n| 常見錯誤 | 訂正 |\n|---|---|\n| $AB=O$ 就消去 A | 非零也可能不可消去 |\n| $(AB)^T=A^TB^T$ | 應為 $B^TA^T$ |\n| $(\\alpha A)^H=\\alpha A^H$ | 純量須共軛 |\n| $(A+B)^2=A^2+2AB+B^2$ | 先檢查 $AB=BA$ |\n| $A^2=A$ 必為 I 或 O | P 提供反例 |\n| $X^2=I$ 只有兩個解 | $\\operatorname{diag}(1,-1)$ 也是解 |\n| $\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$ 就是 $AB=BA$ | 只代表一個純量相同 |"
                },
                {
                  "id": "LA-CH01-S01-B35",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S01-AS01"
                }
              ],
              "assessment": {
                "id": "LA-CH01-S01-AS01",
                "scope": "section",
                "title": "1-1 小節測驗",
                "questionIds": [
                  "LA-CH01-S01-Q01",
                  "LA-CH01-S01-Q02",
                  "LA-CH01-S01-Q03",
                  "LA-CH01-S01-Q04",
                  "LA-CH01-S01-Q05",
                  "LA-CH01-S01-Q06",
                  "LA-CH01-S01-Q07"
                ],
                "totalPoints": 30
              }
            }
          ]
        }
      ],
      "sourceSubjectId": "LA"
    },
    {
      "id": "discrete-math",
      "name": "離散數學",
      "en": "DISCRETE MATHEMATICS",
      "icon": "network",
      "chapters": []
    },
    {
      "id": "data-structures",
      "name": "資料結構",
      "en": "DATA STRUCTURES",
      "icon": "tree",
      "chapters": []
    },
    {
      "id": "algorithms",
      "name": "演算法",
      "en": "ALGORITHMS",
      "icon": "code",
      "chapters": []
    },
    {
      "id": "computer-organization",
      "name": "計算機組織",
      "en": "COMPUTER ORGANIZATION",
      "icon": "cpu",
      "chapters": []
    },
    {
      "id": "operating-systems",
      "name": "作業系統",
      "en": "OPERATING SYSTEMS",
      "icon": "monitor",
      "chapters": []
    }
  ],
  "questions": [
    {
      "id": "LA-CH01-S01-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$A$ 為 $2\\times3$，$B$ 為 $3\\times4$。何者正確？",
      "options": [
        "$AB$ 為 $3\\times3$。",
        "$AB$ 為 $2\\times4$。",
        "$BA$ 必有定義。",
        "$A+B$ 有定義。"
      ],
      "points": 2,
      "knowledgePointIds": [
        "LA-CH01-S01-K01",
        "LA-CH01-S01-K02"
      ],
      "tags": [
        "尺寸、元素、矩陣類型",
        "加法、純量倍、矩陣乘法"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "令 $N=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$。何者正確？",
      "options": [
        "$N^2=N$。",
        "$N=O$。",
        "$N$ 可逆。",
        "$(I+N)^2=I+2N$。"
      ],
      "points": 2,
      "knowledgePointIds": [
        "LA-CH01-S01-K03",
        "LA-CH01-S01-K04"
      ],
      "tags": [
        "不交換、零因子與消去陷阱",
        "矩陣冪與二項式展開"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "對同階複方陣 $A,B$，下列何式對所有 $A,B$ 必成立？",
      "options": [
        "$(iAB)^H=-iB^HA^H$。",
        "$(AB)^H=A^HB^H$。",
        "$(iA)^H=iA^H$。",
        "$A^H=A^T$。"
      ],
      "points": 2,
      "knowledgePointIds": [
        "LA-CH01-S01-K06",
        "LA-CH01-S01-K07"
      ],
      "tags": [
        "轉置與元素證明",
        "共軛與共軛轉置"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$A,B$ 為同階實對稱矩陣。$AB$ 對稱的充要條件為何？",
      "options": [
        "$A+B=O$。",
        "$\\operatorname{tr}(A)=\\operatorname{tr}(B)$。",
        "$AB=BA$。",
        "$A,B$ 都可逆。"
      ],
      "points": 2,
      "knowledgePointIds": [
        "LA-CH01-S01-K08",
        "LA-CH01-S01-K09"
      ],
      "tags": [
        "對稱、斜對稱與 Hermitian",
        "對稱矩陣運算與分解"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "對任意實矩陣 $A\\in\\mathbb R^{m\\times n}$，何者必成立？",
      "options": [
        "$\\operatorname{tr}(A)$ 一定有定義。",
        "$\\operatorname{tr}(A^TA)=0\\iff A=O$。",
        "$A^TA=AA^T$。",
        "$\\operatorname{tr}(A^TA)$ 必為負數。"
      ],
      "points": 2,
      "knowledgePointIds": [
        "LA-CH01-S01-K10",
        "LA-CH01-S01-K11"
      ],
      "tags": [
        "trace 與循環性",
        "trace 證明與平方和"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "令 $P=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$、$M=\\begin{bmatrix}I_2&P\\\\O&P\\end{bmatrix}$。先驗證 $P^2=P$，再用歸納法求 $M^k$（$k\\ge1$），並求 $M^5$。",
      "points": 10,
      "knowledgePointIds": [
        "LA-CH01-S01-K04",
        "LA-CH01-S01-K05",
        "LA-CH01-S01-K12"
      ],
      "tags": [
        "矩陣冪與二項式展開",
        "分割矩陣與 column 解釋",
        "方塊矩陣高次冪"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    },
    {
      "id": "LA-CH01-S01-Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S01",
      "title": "1-1 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "(a) 用加總記號證明：若 $A\\in\\mathbb R^{m\\times n}$、$B\\in\\mathbb R^{n\\times m}$，則 $\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$。  \n(b) 利用 (a) 證明實數域上不存在 $n\\times n$ 矩陣 $X,Y$ 使 $XY-YX=I_n$，其中 $n\\ge1$。",
      "points": 10,
      "knowledgePointIds": [
        "LA-CH01-S01-K06",
        "LA-CH01-S01-K10",
        "LA-CH01-S01-K11"
      ],
      "tags": [
        "轉置與元素證明",
        "trace 與循環性",
        "trace 證明與平方和"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 原創模擬題"
      }
    }
  ],
  "examples": [
    {
      "id": "LA-CH01-S01-E01",
      "title": "例題 01",
      "knowledgePointIds": [
        "LA-CH01-S01-K01"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2&3\\\\4&5&6\\end{bmatrix}$。求尺寸、$a_{23}$ 與 $Ae_2$。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E02",
      "title": "例題 02",
      "knowledgePointIds": [
        "LA-CH01-S01-K02"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$、$B=\\begin{bmatrix}2&0\\\\3&1\\end{bmatrix}$。求 $A+B$、$2A$ 與 $AB$。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E03",
      "title": "例題 03",
      "knowledgePointIds": [
        "LA-CH01-S01-K03"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$、$B=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$。求 $AB,BA,B^2,A^2$，並指出哪些純量直覺不成立。",
      "source": {
        "kind": "material",
        "title": "使用者提供的教材整理稿"
      }
    },
    {
      "id": "LA-CH01-S01-E04",
      "title": "例題 04",
      "knowledgePointIds": [
        "LA-CH01-S01-K04"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&-3\\\\1&1\\end{bmatrix}$。求 $A^2,A^3,A^{20}$。",
      "source": {
        "kind": "material",
        "title": "使用者提供的教材整理稿"
      }
    },
    {
      "id": "LA-CH01-S01-E05",
      "title": "例題 05",
      "knowledgePointIds": [
        "LA-CH01-S01-K05"
      ],
      "type": "手寫計算題",
      "text": "$A=[a_1\\ a_2]$，$a_1=(1,2)^T$、$a_2=(3,4)^T$，$x=(2,-1)^T$。以 column 線性組合求 $Ax$。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E06",
      "title": "例題 06",
      "knowledgePointIds": [
        "LA-CH01-S01-K06"
      ],
      "type": "證明題",
      "text": "以逐元素方法證明 $(AB)^T=B^TA^T$，明確標示尺寸與索引範圍。",
      "source": {
        "kind": "material",
        "title": "使用者提供的教材整理稿"
      }
    },
    {
      "id": "LA-CH01-S01-E07",
      "title": "例題 07",
      "knowledgePointIds": [
        "LA-CH01-S01-K07"
      ],
      "type": "手寫計算題",
      "text": "求 $D=\\begin{bmatrix}1+i&-i&0\\\\2&3-2i&6+8i\\end{bmatrix}$ 的共軛轉置。",
      "source": {
        "kind": "material",
        "title": "使用者提供的教材整理稿"
      }
    },
    {
      "id": "LA-CH01-S01-E08",
      "title": "例題 08",
      "knowledgePointIds": [
        "LA-CH01-S01-K08"
      ],
      "type": "手寫計算題",
      "text": "判斷 $H=\\begin{bmatrix}2&i\\\\-i&3\\end{bmatrix}$、$K=\\begin{bmatrix}i&2\\\\-2&0\\end{bmatrix}$ 分別是否為 Hermitian 或 skew-Hermitian。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E09",
      "title": "例題 09",
      "knowledgePointIds": [
        "LA-CH01-S01-K09"
      ],
      "type": "手寫計算題",
      "text": "將 $A=\\begin{bmatrix}1&4\\\\2&3\\end{bmatrix}$ 分解為對稱矩陣與斜對稱矩陣之和。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E10",
      "title": "例題 10",
      "knowledgePointIds": [
        "LA-CH01-S01-K10"
      ],
      "type": "手寫計算題",
      "text": "令 $A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$、$B=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$、$C=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$。比較 $\\operatorname{tr}(ABC)$ 與 $\\operatorname{tr}(ACB)$。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E11",
      "title": "例題 11",
      "knowledgePointIds": [
        "LA-CH01-S01-K11"
      ],
      "type": "手寫計算題",
      "text": "對實矩陣 $A=\\begin{bmatrix}1&-2\\\\0&3\\end{bmatrix}$ 求 $\\operatorname{tr}(A^TA)$；再以複矩陣 $Z=\\begin{bmatrix}1&i\\end{bmatrix}$ 說明不能由 $\\operatorname{tr}(Z^TZ)=0$ 推出 $Z=O$。",
      "source": {
        "kind": "simulation",
        "title": "原創模擬例題"
      }
    },
    {
      "id": "LA-CH01-S01-E12",
      "title": "例題 12",
      "knowledgePointIds": [
        "LA-CH01-S01-K12"
      ],
      "type": "證明題",
      "text": "設 $B^2=B$，$A=\\begin{bmatrix}I&B\\\\O&B\\end{bmatrix}$。用歸納法求 $A^k$，並計算 $A^{2000}$。",
      "source": {
        "kind": "material",
        "title": "使用者提供的教材整理稿"
      }
    }
  ],
  "knowledgePoints": [
    {
      "id": "LA-CH01-S01-K01",
      "title": "尺寸、元素、矩陣類型",
      "difficulty": 1,
      "provenance": "前置補充",
      "markdown": "矩陣（matrix）$A=[a_{ij}]\\in F^{m\\times n}$ 表示有 $m$ 個 row、$n$ 個 column，元素來自數域 $F$；本節主要使用實數 $\\mathbb R$ 或複數 $\\mathbb C$。$a_{ij}$ 是第 $i$ 個 row、第 $j$ 個 column 的元素。為避免「行、列」用語歧義，本稿搭配 row／column。\n\n| 名稱 | 定義或條件 |\n|---|---|\n| 方陣（square matrix） | $m=n$ |\n| 零矩陣（zero matrix）$O$ | 所有元素為 0；尺寸依上下文決定 |\n| 單位矩陣（identity matrix）$I_n$ | 主對角線為 1，其餘為 0 |\n| 對角矩陣（diagonal matrix） | 非主對角線元素為 0；$\\operatorname{diag}(d_1,\\ldots,d_n)$ 表示對角線依序為這些數 |\n| 上／下三角矩陣 | 主對角線下／上方元素全為 0 |\n| 標準基底向量（standard basis vector）$e_j$ | 第 $j$ 個位置為 1，其餘為 0 的 column vector |\n\n同尺寸矩陣相等，指所有對應元素相等。$Ae_j$ 會取出 $A$ 的第 $j$ 個 column。搭配 E01。"
    },
    {
      "id": "LA-CH01-S01-K02",
      "title": "加法、純量倍、矩陣乘法",
      "difficulty": 1,
      "provenance": "前置補充與教材整理",
      "markdown": "同尺寸才可相加：$(A+B)_{ij}=a_{ij}+b_{ij}$。純量（scalar）$c$ 的乘法為 $(cA)_{ij}=ca_{ij}$。\n\n若 $A\\in F^{m\\times n}$、$B\\in F^{n\\times p}$，則 $AB\\in F^{m\\times p}$，且\n\n$$ (AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}. $$\n\n$\\Sigma$ 是加總記號；$k$ 為跑動索引，$i,j$ 固定目標位置。例如 $n=3$ 時，上式是 $a_{i1}b_{1j}+a_{i2}b_{2j}+a_{i3}b_{3j}$。每一項都是普通數字相乘，不是矩陣互換。\n\n在運算有定義的前提下，加法可交換、可結合；乘法可結合 $A(BC)=(AB)C$；左右分配律皆成立；純量可提出：$c(AB)=(cA)B=A(cB)$。若 $A$ 為 $m\\times n$，則 $I_mA=AI_n=A$，且 $0A=O$。搭配 E02。"
    },
    {
      "id": "LA-CH01-S01-K03",
      "title": "不交換、零因子與消去陷阱",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "1. $AB$ 與 $BA$ 即使都有定義，也通常不同；更可能只有其中一個有定義。\n2. 非零矩陣可能平方為零，例如 $N=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$，$N^2=O$。若某正整數 $r$ 使 $N^r=O$，稱為冪零矩陣（nilpotent matrix）。\n3. $P=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ 滿足 $P^2=P$，卻不是 $O$ 或 $I$；此類稱冪等矩陣（idempotent matrix）。\n4. $AB=O$ 不保證任一因子為零。例如 $A=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$、$B=\\begin{bmatrix}0&0\\\\2&0\\end{bmatrix}$ 都非零，乘積為零。這是非零零因子（zero divisor）。\n5. 不能因 $A\\ne O$，便由 $AB=AC$ 消去 $A$。若 $A$ 可逆，可左乘 $A^{-1}$ 推出 $B=C$。補充：更一般的長方形矩陣若有左反矩陣，也可以左消去。\n6. $X^2=I$ 的矩陣解不只 $\\pm I$，例如 $\\operatorname{diag}(1,-1)$。搭配 E03。\n\n教材消去反例：\n\n$$ A=\\begin{bmatrix}1&0\\\\2&0\\end{bmatrix},\\quad B=\\begin{bmatrix}1&2\\\\0&0\\end{bmatrix},\\quad C=\\begin{bmatrix}1&2\\\\1&1\\end{bmatrix}. $$\n\n直接相乘得 $AB=AC=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$，但 $B\\ne C$。"
    },
    {
      "id": "LA-CH01-S01-K04",
      "title": "矩陣冪與二項式展開",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "方陣才可反覆與自身相乘。$A^1=A$、$A^k=A^{k-1}A$。正整數指數滿足 $A^mA^n=A^{m+n}$、$(A^m)^n=A^{mn}$。補充：方陣的零次冪定為 $A^0=I$；負次冪須 $A$ 可逆。\n\n分配律給出\n\n$$ (A+B)^2=A^2+AB+BA+B^2. $$\n\n只有 $AB=BA$ 時，才能合併為 $A^2+2AB+B^2$；一般二項式係數展開也須可交換。矩陣高次冪先找低次規律，再用除法餘數或歸納法。搭配 E04。"
    },
    {
      "id": "LA-CH01-S01-K05",
      "title": "分割矩陣與 column 解釋",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "分割矩陣（partitioned matrix）把矩陣切成子矩陣，也稱方塊矩陣（block matrix）。加法須採相同分割且對應尺寸一致。乘法須讓左矩陣的 column 分割寬度與右矩陣的 row 分割高度逐一相符：\n\n$$\\begin{bmatrix}A_{11}&A_{12}\\\\A_{21}&A_{22}\\end{bmatrix}\\begin{bmatrix}B_{11}&B_{12}\\\\B_{21}&B_{22}\\end{bmatrix}=\\begin{bmatrix}A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\\\A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}\\end{bmatrix}.$$\n\n方塊本身是矩陣，乘積順序不可交換。若 $A=[a_1\\ a_2\\ \\cdots\\ a_n]$，其中 $a_j$ 是第 $j$ 個 column，則\n\n$$Ax=x_1a_1+\\cdots+x_na_n.$$\n\n若 $B=[b_1\\ \\cdots\\ b_p]$，則 $AB=[Ab_1\\ \\cdots\\ Ab_p]$。也可把 $A$ 寫成各 row vector 上下堆疊。搭配 E05。"
    },
    {
      "id": "LA-CH01-S01-K06",
      "title": "轉置與元素證明",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "轉置（transpose）交換 row 與 column：$(A^T)_{ij}=a_{ji}$；$m\\times n$ 變成 $n\\times m$。\n\n$$ (A^T)^T=A,\\qquad (\\alpha A+\\beta B)^T=\\alpha A^T+\\beta B^T,\\qquad (AB)^T=B^TA^T. $$\n\n多因子同理：$(A_1\\cdots A_r)^T=A_r^T\\cdots A_1^T$。\n\n為何乘積轉置須反序？取 $A\\in F^{m\\times n}$、$B\\in F^{n\\times p}$。對任意 $1\\le i\\le p$、$1\\le j\\le m$，\n\n$$ ((AB)^T)_{ij}=(AB)_{ji}=\\sum_{k=1}^{n}a_{jk}b_{ki}, $$\n\n前一步是轉置定義，後一步是矩陣乘法定義。另一方面，\n\n$$ (B^TA^T)_{ij}=\\sum_{k=1}^{n}(B^T)_{ik}(A^T)_{kj}=\\sum_{k=1}^{n}b_{ki}a_{jk}. $$\n\n每一對因子都是數域中的純量，可交換，因此對應元素相等；兩矩陣尺寸也同為 $p\\times m$，故相等。搭配 E06。"
    },
    {
      "id": "LA-CH01-S01-K07",
      "title": "共軛與共軛轉置",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若 $z=a+bi$，其中 $i^2=-1$，其複共軛（complex conjugate）為 $\\bar z=a-bi$。矩陣逐項共軛得到 $\\bar A$。\n\n共軛轉置（conjugate transpose）$A^H=\\bar A^{\\,T}$，亦可記 $A^*$；$(A^H)_{ij}=\\overline{a_{ji}}$。先轉置或先共軛均可。\n\n$$ (A^H)^H=A,\\qquad (\\alpha A\\pm\\beta B)^H=\\bar\\alpha A^H\\pm\\bar\\beta B^H,\\qquad (AB)^H=B^HA^H. $$\n\n實矩陣滿足 $A^H=A^T$。搭配 E07。"
    },
    {
      "id": "LA-CH01-S01-K08",
      "title": "對稱、斜對稱與 Hermitian",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "| 類型 | 本節數域 | 條件 | 元素關係 | 主對角線 |\n|---|---|---|---|---|\n| 對稱（symmetric） | $\\mathbb R$ | $A^T=A$ | $a_{ij}=a_{ji}$ | 任意實數 |\n| 斜對稱（skew-symmetric） | $\\mathbb R$ | $A^T=-A$ | $a_{ij}=-a_{ji}$ | 全為 0 |\n| Hermitian | $\\mathbb C$ | $A^H=A$ | $a_{ij}=\\overline{a_{ji}}$ | 實數 |\n| skew-Hermitian | $\\mathbb C$ | $A^H=-A$ | $\\overline{a_{ji}}=-a_{ij}$ | 純虛數或 0 |\n\n斜對稱的對角線滿足 $a_{ii}=-a_{ii}$，所以 $2a_{ii}=0$；在實數或特徵不為 2 的體上，可除以 2，得到 $a_{ii}=0$。Hermitian 對角線滿足 $a_{ii}=\\overline{a_{ii}}$，所以虛部為零；skew-Hermitian 則令實部為零。補充：對稱性也可在複數域定義，但與 Hermitian 條件不同。搭配 E08。"
    },
    {
      "id": "LA-CH01-S01-K09",
      "title": "對稱矩陣運算與分解",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "任意實方陣可分解為\n\n$$ A=S+K,\\qquad S=\\frac{A+A^T}{2},\\qquad K=\\frac{A-A^T}{2}. $$\n\n由轉置線性性，$S^T=(A^T+A)/2=S$，$K^T=(A^T-A)/2=-K$。此分解在特徵不為 2 的體上同樣成立。\n\n若 $A,B$ 為同階對稱矩陣，則 $A+B$、$\\alpha A$ 與正整數次方 $A^n$ 均對稱；理由分別是轉置線性性與 $(A^n)^T=(A^T)^n$。但\n\n$$ AB\\text{ 對稱}\\iff(AB)^T=AB\\iff BA=AB. $$\n\n「兩個因子對稱」不夠，還需要可交換。搭配 E09。"
    },
    {
      "id": "LA-CH01-S01-K10",
      "title": "trace 與循環性",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "方陣的跡（trace）是主對角線總和：\n\n$$\\operatorname{tr}(A)=\\sum_{i=1}^{n}a_{ii}.$$\n\n$\\operatorname{tr}(\\alpha A+\\beta B)=\\alpha\\operatorname{tr}(A)+\\beta\\operatorname{tr}(B)$；$\\operatorname{tr}(A^T)=\\operatorname{tr}(A)$；$\\operatorname{tr}(A^H)=\\overline{\\operatorname{tr}(A)}$。\n\n若 $A$ 為 $m\\times n$、$B$ 為 $n\\times m$，則\n\n$$\\operatorname{tr}(AB)=\\sum_{i=1}^{m}\\sum_{k=1}^{n}a_{ik}b_{ki}=\\sum_{k=1}^{n}\\sum_{i=1}^{m}b_{ki}a_{ik}=\\operatorname{tr}(BA).$$\n\n中間使用有限和交換次序與純量交換律。$AB$ 與 $BA$ 可不同尺寸，trace 仍相同。尺寸相容時有 $\\operatorname{tr}(ABC)=\\operatorname{tr}(BCA)=\\operatorname{tr}(CAB)$，但不能任意改成 $\\operatorname{tr}(ACB)$。搭配 E10。"
    },
    {
      "id": "LA-CH01-S01-K11",
      "title": "trace 證明與平方和",
      "difficulty": 5,
      "provenance": "教材整理",
      "markdown": "在 $\\mathbb R$ 或 $\\mathbb C$ 上，不存在 $n\\times n$ 矩陣使 $AB-BA=I_n$（$n\\ge1$）。因兩邊取 trace，左邊為 0，右邊為 $n\\ne0$，矛盾。在特徵整除 $n$ 的體上，單靠此證法無法得到矛盾，不可直接延用結論。\n\n對實矩陣 $A\\in\\mathbb R^{m\\times n}$，\n\n$$\\operatorname{tr}(A^TA)=\\sum_{j=1}^{n}(A^TA)_{jj}=\\sum_{j=1}^{n}\\sum_{k=1}^{m}a_{kj}^2.$$\n\n每項非負，總和為零時，每項必為零，因此 $A=O$。此總和亦為 Frobenius 範數（Frobenius norm）平方 $\\|A\\|_F^2$。\n\n複矩陣應使用 $\\operatorname{tr}(A^HA)=\\sum_{k,j}|a_{kj}|^2$，其中 $|z|^2=\\bar z z$；不能用複數平方非負作論證。搭配 E11。"
    },
    {
      "id": "LA-CH01-S01-K12",
      "title": "方塊矩陣高次冪",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若 $B$ 為 $r\\times r$ 且 $B^2=B$，令 $A=\\begin{bmatrix}I_r&B\\\\O&B\\end{bmatrix}$，則\n\n$$ A^k=\\begin{bmatrix}I_r&kB\\\\O&B\\end{bmatrix}\\quad(k\\ge1). $$\n\n乘法先算右上角 $I_rB+kBB=B+kB^2=(k+1)B$，右下角為 $B^2=B$，其餘維持不變。歸納證明見 E12。此公式只寫正整數 $k$，不可直接代入 $k=0$。搭配 E12。"
    }
  ],
  "answers": {
    "LA-CH01-S01-Q01": {
      "correctOption": 1
    },
    "LA-CH01-S01-Q02": {
      "correctOption": 3
    },
    "LA-CH01-S01-Q03": {
      "correctOption": 0
    },
    "LA-CH01-S01-Q04": {
      "correctOption": 2
    },
    "LA-CH01-S01-Q05": {
      "correctOption": 1
    }
  },
  "solutions": {
    "LA-CH01-S01-E01": {
      "markdown": "提示：$e_2$ 選第 2 個 column。辨識：查位置與尺寸，不需做矩陣乘法全表。答案：$2\\times3$、$a_{23}=6$、$Ae_2=(2,5)^T$。理由：第二個標號是 column，$e_2=(0,1,0)^T$ 只保留該 column。常錯：把 $a_{23}$ 讀成第 3 個 row。"
    },
    "LA-CH01-S01-E02": {
      "markdown": "提示：乘法每格使用 row 乘 column。答案：$A+B=\\begin{bmatrix}3&2\\\\3&2\\end{bmatrix}$，$2A=\\begin{bmatrix}2&4\\\\0&2\\end{bmatrix}$，$AB=\\begin{bmatrix}8&2\\\\3&1\\end{bmatrix}$。例如 $(AB)_{11}=1\\cdot2+2\\cdot3=8$，$(AB)_{12}=1\\cdot0+2\\cdot1=2$，$(AB)_{21}=0\\cdot2+1\\cdot3=3$，$(AB)_{22}=0\\cdot0+1\\cdot1=1$。常錯：將乘法當逐項相乘。"
    },
    "LA-CH01-S01-E03": {
      "markdown": "提示：逐一算四個乘積。$AB=B$，$BA=O$，$B^2=O$，$A^2=A$。第一組說明不可交換；第二組顯示非零矩陣可平方為零；第三組顯示冪等矩陣不必是 $O$ 或 $I$。此題適合用具體反例推翻全稱敘述，無須證明所有矩陣都不交換。常錯：把「通常不交換」寫成「任意兩矩陣必不交換」。"
    },
    "LA-CH01-S01-E04": {
      "markdown": "提示：先算三次冪，將 $20$ 寫成 $3\\cdot6+2$。直接乘法得 $A^2=\\begin{bmatrix}-2&-6\\\\2&-2\\end{bmatrix}$，再乘 $A$，四格依序為 $-8,0,0,-8$，故 $A^3=-8I$。由結合律與冪次規則，$A^{20}=(A^3)^6A^2=(-8)^6A^2=8^6A^2$。常錯：漏掉餘數 2 或把 $(-8)^6$ 判為負數。"
    },
    "LA-CH01-S01-E05": {
      "markdown": "提示：係數由 $x$ 提供。因 $Ax=x_1a_1+x_2a_2$，所以 $Ax=2(1,2)^T-(3,4)^T=(-1,0)^T$。辨識：題目已給 column，採線性組合比逐格展開直觀。常錯：將 $x$ 的元素當 row 選擇器。"
    },
    "LA-CH01-S01-E06": {
      "markdown": "提示：先寫任意位置 $(i,j)$，轉置後交換成 $(j,i)$。完整步驟與索引範圍見 K06 的證明，依序使用轉置定義、乘法定義、純量交換律與矩陣相等定義。選元素法是因相等命題可逐位置比較。常錯：只背誦結論，或以待證公式作為證明前提。"
    },
    "LA-CH01-S01-E07": {
      "markdown": "提示：先由 $2\\times3$ 變 $3\\times2$，再改虛部正負。$D^H=\\begin{bmatrix}1-i&2\\\\i&3+2i\\\\0&6-8i\\end{bmatrix}$。例如原 $(1,2)$ 的 $-i$ 移至 $(2,1)$ 後共軛為 $i$。常錯：僅轉置、未共軛，或把實數也變號。"
    },
    "LA-CH01-S01-E08": {
      "markdown": "提示：分別計算 $H^H,K^H$。$H^H=\\begin{bmatrix}2&i\\\\-i&3\\end{bmatrix}=H$，故 H 為 Hermitian；$K^H=\\begin{bmatrix}-i&-2\\\\2&0\\end{bmatrix}=-K$，故 K 為 skew-Hermitian。H 非 skew-Hermitian，因其非零且不等於自己的負數；K 非 Hermitian，因 $K^H\\ne K$。常錯：只看非對角線，漏看對角線限制。"
    },
    "LA-CH01-S01-E09": {
      "markdown": "提示：平均分配成對位置。$A^T=\\begin{bmatrix}1&2\\\\4&3\\end{bmatrix}$，因此 $S=(A+A^T)/2=\\begin{bmatrix}1&3\\\\3&3\\end{bmatrix}$、$K=(A-A^T)/2=\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}$。檢查 $S^T=S$、$K^T=-K$，相加回到 A。常錯：將 K 的兩個非對角線都取正數。"
    },
    "LA-CH01-S01-E10": {
      "markdown": "提示：先求 $BC$ 與 $CB$。$BC=\\operatorname{diag}(1,0)$，$CB=\\operatorname{diag}(0,1)$；所以 $ABC=\\operatorname{diag}(1,0)$、$ACB=O$，跡分別為 1 與 0。用反例可說明任意換位不成立；循環位移才有一般保證。常錯：把三因子的 trace 循環性當成任意排列。"
    },
    "LA-CH01-S01-E11": {
      "markdown": "提示：實矩陣可直接平方加總；複矩陣需看是否有共軛。$\\operatorname{tr}(A^TA)=1+4+0+9=14$。$Z^TZ=\\begin{bmatrix}1&i\\\\i&-1\\end{bmatrix}$，跡為 0，但 Z 非零。正確使用 $Z^HZ=\\begin{bmatrix}1&i\\\\-i&1\\end{bmatrix}$，其跡為 2。常錯：把 $i^2=-1$ 當成 $|i|^2=1$。"
    },
    "LA-CH01-S01-E12": {
      "markdown": "提示：右上角是規律核心。基礎步 $k=1$ 成立。假設 $A^k=\\begin{bmatrix}I&kB\\\\O&B\\end{bmatrix}$，乘以 A 得 $A^{k+1}=\\begin{bmatrix}I&B+kB^2\\\\O&B^2\\end{bmatrix}=\\begin{bmatrix}I&(k+1)B\\\\O&B\\end{bmatrix}$。因此對所有正整數成立，$A^{2000}=\\begin{bmatrix}I&2000B\\\\O&B\\end{bmatrix}$。選歸納法是因觀察低次冪只能猜測，尚未證明所有 k。常錯：只列 $A^2,A^3$ 就宣稱完成證明。"
    },
    "LA-CH01-S01-Q01": {
      "markdown": "提示：內側尺寸相同才可乘。正解 B。A：乘積外側尺寸為 $2\\times4$，非 $3\\times3$。B：正確。C：BA 的內側 4 與 2 不符。D：相加需同尺寸，兩者不同。",
      "optionExplanations": [
        "乘積外側尺寸為 $2\\times4$，非 $3\\times3$。",
        "正確。",
        "BA 的內側 4 與 2 不符。",
        "相加需同尺寸，兩者不同。"
      ]
    },
    "LA-CH01-S01-Q02": {
      "markdown": "提示：先算 $N^2$。正解 D。A：$N^2=O\\ne N$。B：右上元素為 1，故非零。C：$Ne_1=0$ 而 $e_1\\ne0$，可逆矩陣不會將非零向量送至零。D：分配後 $I+N+N+N^2=I+2N$。",
      "optionExplanations": [
        "$N^2=O\\ne N$。",
        "右上元素為 1，故非零。",
        "$Ne_1=0$ 而 $e_1\\ne0$，可逆矩陣不會將非零向量送至零。",
        "分配後 $I+N+N+N^2=I+2N$。"
      ]
    },
    "LA-CH01-S01-Q03": {
      "markdown": "提示：純量共軛、乘積反序。正解 A。A：$\\overline i=-i$ 且 $(AB)^H=B^HA^H$，故正確。B：一般漏掉反序。C：i 共軛後須變號。D：只在實矩陣等情況有保證，例如 $A=[i]$ 即不成立。",
      "optionExplanations": [
        "$\\overline i=-i$ 且 $(AB)^H=B^HA^H$，故正確。",
        "一般漏掉反序。",
        "i 共軛後須變號。",
        "只在實矩陣等情況有保證，例如 $A=[i]$ 即不成立。"
      ]
    },
    "LA-CH01-S01-Q04": {
      "markdown": "提示：計算 $(AB)^T$。正解 C。A：可為充分條件但非必要，例如 $A=B=I$。B：非充分；同 trace 的對稱矩陣仍可能不交換，例如 $\\operatorname{diag}(1,0)$ 與 $\\begin{bmatrix}0&1\\\\1&1\\end{bmatrix}$。C：$(AB)^T=BA$，故恰等價。D：可逆不保證交換，例如 $\\operatorname{diag}(1,2)$ 與 $\\begin{bmatrix}1&1\\\\1&2\\end{bmatrix}$ 皆對稱可逆，乘積不對稱。",
      "optionExplanations": [
        "可為充分條件但非必要，例如 $A=B=I$。",
        "非充分；同 trace 的對稱矩陣仍可能不交換，例如 $\\operatorname{diag}(1,0)$ 與 $\\begin{bmatrix}0&1\\\\1&1\\end{bmatrix}$。",
        "$(AB)^T=BA$，故恰等價。",
        "可逆不保證交換，例如 $\\operatorname{diag}(1,2)$ 與 $\\begin{bmatrix}1&1\\\\1&2\\end{bmatrix}$ 皆對稱可逆，乘積不對稱。"
      ]
    },
    "LA-CH01-S01-Q05": {
      "markdown": "提示：將 trace 展開成元素平方和。正解 B。A：A 可非方陣。B：非負平方總和為零恰等價所有元素為零。C：尺寸可不同，方陣時也不一定相等。D：平方和必非負，非必負。",
      "optionExplanations": [
        "A 可非方陣。",
        "非負平方總和為零恰等價所有元素為零。",
        "尺寸可不同，方陣時也不一定相等。",
        "平方和必非負，非必負。"
      ]
    },
    "LA-CH01-S01-Q06": {
      "markdown": "提示：先求 $M^2$ 看右上方塊。參考答案：$P^2=P$。$M^k=\\begin{bmatrix}I_2&kP\\\\O&P\\end{bmatrix}$。基礎步 k=1 成立；假設 k 成立，再乘 M，右上角 $P+kP^2=(k+1)P$，右下角 $P^2=P$，故 k+1 成立。\n\n$$M^5=\\begin{bmatrix}1&0&5&0\\\\0&1&0&0\\\\0&0&1&0\\\\0&0&0&0\\end{bmatrix}.$$\n\n評分：驗證 $P^2=P$ 2 分；基礎步 1 分；清楚寫歸納假設 1 分；方塊乘法與歸納推論 4 分；$M^5$ 2 分。常錯：右下角誤寫 $kP$。自評：答對＝公式、證明與特例皆正確；部分正確＝規律正確但證明或計算有缺；不會＝無法建立方塊乘法。"
    },
    "LA-CH01-S01-Q07": {
      "markdown": "提示：展開 trace 後比較有限雙重和。(a) $\\operatorname{tr}(AB)=\\sum_{i=1}^{m}\\sum_{k=1}^{n}a_{ik}b_{ki}=\\sum_{k=1}^{n}\\sum_{i=1}^{m}b_{ki}a_{ik}=\\operatorname{tr}(BA)$。交換的是有限加總順序與純量乘法順序。\n\n(b) 假設存在 X,Y，則由線性性與 (a)，$\\operatorname{tr}(XY-YX)=0$，但 $\\operatorname{tr}(I_n)=n>0$，矛盾，故不存在。\n\n評分：(a) 正確 trace 展開 2 分，雙重和與索引 2 分，合法交換並得結論 2 分；(b) 假設與取 trace 1 分，左側為零 1 分，右側為 n 並指出矛盾 2 分。常錯：由 trace 相等推矩陣相等。自評：答對＝兩部分理由齊全；部分正確＝知道結論但索引或理由缺漏；不會＝無法展開 trace。"
    }
  },
  "sourceReview": {
    "filename": "線性代數_1-1_第一階段審閱稿.md",
    "sha256": "e0c315121b1304eceab487c4518163a17d97cb2ff171472e3c720d5b8d6c2373",
    "contentVersion": "0.1",
    "status": "draft",
    "scope": "LA-CH01-S01",
    "pendingExamCount": 15,
    "pendingExamImported": false,
    "note": "考古題摘要缺完整題幹與來源核對，未納入正式題庫。未建立 1-2 或大章綜合測驗。"
  }
};
