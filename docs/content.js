// 僅收錄使用者提供的教材；筆跡、作答與進度另存於個人裝置。
window.ZILIU_CONTENT = {
  "version": 4,
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
            },
            {
              "id": "LA-CH01-S03",
              "title": "1-3 基本列運算",
              "reviewStatus": "draft",
              "contentVersion": "0.1.0",
              "sourceSectionId": "la-ch01-s03",
              "notice": "第一階段審閱稿：依可見整理文字編寫，未取得原始講義圖片與原例題完整題幹，完整性尚待核對。",
              "knowledgePointIds": [
                "LA-CH01-S03-K01",
                "LA-CH01-S03-K02",
                "LA-CH01-S03-K03",
                "LA-CH01-S03-K04",
                "LA-CH01-S03-K05",
                "LA-CH01-S03-K06",
                "LA-CH01-S03-K07"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S03-B-INTRO",
                  "type": "concept",
                  "title": "符號與先備複習",
                  "provenance": "前置補充",
                  "knowledgePointIds": [],
                  "markdown": "本稿採臺灣教材慣例：列＝橫向 row，行＝直向 column；以英文與尺寸協助避免翻譯混淆。\n\n設 $F$ 為體（field），其元素可做加、減、乘與非零元素的除法。常見例子為實數體 $\\mathbb R$、複數體 $\\mathbb C$、有理數體 $\\mathbb Q$ 與二元體 $\\mathbb F_2$；$\\mathbb F_2$ 的運算取模 2。整數 $\\mathbb Z$ 不是體，因為例如 2 的乘法反元素 $1/2$ 不在整數內。\n\n$$A=[a_{ij}]\\in F^{m\\times n}.$$\n\n$m$ 是列數，$n$ 是行數；$a_{ij}$ 是第 $i$ 列、第 $j$ 行的元素，$1\\le i\\le m$、$1\\le j\\le n$。矩陣大小依「列數 × 行數」書寫。$F^{m\\times n}$ 是所有此尺寸矩陣的集合，也常寫作 $M_{m\\times n}(F)$ 或 $\\operatorname{Mat}_{m\\times n}(F)$；其他縮寫須依教材確認。\n\n| 對象 | 內容或尺寸 | 判讀方式 |\n|---|---|---|\n| 第 $i$ 列 | $a_{i1},\\ldots,a_{in}$ | 第一個下標固定，橫向 |\n| 第 $j$ 行 | $a_{1j},\\ldots,a_{mj}$ | 第二個下標固定，直向 |\n| 列向量 row vector | $1\\times n$ | 一橫列 |\n| 行向量 column vector | $m\\times1$ | 一直行 |\n| 實矩陣 | $\\mathbb R^{m\\times n}$ | 元素全為實數 |\n| 複矩陣 | $\\mathbb C^{m\\times n}$ | 允許複數元素 |\n\n$I_m$ 表示 $m\\times m$ 單位矩陣，對角元素為 1，其餘為 0。$0$ 可表示零數、零向量或零矩陣，尺寸依上下文。$A^{-1}$ 是反矩陣，須滿足 $A^{-1}A=AA^{-1}=I$。$A^T$ 是轉置，交換列與行。$e_i$ 表示第 $i$ 個標準基底行向量（column vector），第 $i$ 個分量為 1，其餘為 0。\n\n若用到 $\\sum_{j=1}^n a_{ij}x_j$，意思是將 $j=1$ 到 $n$ 各項相加，即 $a_{i1}x_1+\\cdots+a_{in}x_n$；下標 $j$ 是加總時改變的索引，不是額外未知數。"
                },
                {
                  "id": "LA-CH01-S03-B-INTRO-EX",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-PRE-EX01",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH01-S03-B-K01-C",
                  "type": "concept",
                  "title": "三種基本列運算與可逆性",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K01"
                  ],
                  "markdown": "對 $A\\in F^{m\\times n}$ 的橫列進行下列操作，稱為基本列運算。\n\n| 類型 | 操作 | 條件 | 逆運算 |\n|---|---|---|---|\n| 第一型：交換 | $R_i\\leftrightarrow R_j$ | 不同列 $i\\ne j$ | 再交換一次 |\n| 第二型：倍乘 | $R_i\\leftarrow kR_i$ | $k\\ne0$ | $R_i\\leftarrow k^{-1}R_i$ |\n| 第三型：加倍數 | $R_j\\leftarrow R_j+kR_i$ | $i\\ne j$ | $R_j\\leftarrow R_j-kR_i$ |\n\n$R_i$ 表示第 $i$ 列；箭頭左邊是更新目標。第三型的來源列 $R_i$ 不變，只有目標列 $R_j$ 改變。$k=0$ 的第三型是恆等操作，有些教材只把非零 $k$ 的非平凡操作列為基本操作；使用時依教材慣例。\n\n第二型不能乘 0，因為該列資訊會消失，沒有逆操作。第三型要求不同列，才能用相反倍數恢復；若對同一列操作，會變成倍乘，且可能因 $1+k=0$ 而不可逆。\n\n教材記號 $r_{ij}^{(1)}$ 表交換，$r_i^{(2)}(k)$ 表倍乘。本稿依可見整理約定 $r_{ij}^{(3)}(k)$ 為把第 $i$ 列的 $k$ 倍加到第 $j$ 列；此下標約定並非所有教材都一致，考試以明寫 $R_j\\leftarrow R_j+kR_i$ 最清楚。"
                },
                {
                  "id": "LA-CH01-S03-B-K01-E-EX01",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX01",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K01-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "各寫一個合法運算及其逆運算。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K01"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-K02-C",
                  "type": "concept",
                  "title": "基本矩陣與左乘",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K02"
                  ],
                  "markdown": "對 $I_m$ 做一次基本列運算 $r$，得到基本矩陣（elementary matrix）$E=r(I_m)$。同一操作用於任意 $m\\times n$ 矩陣時，有\n\n$$EA=r(A).$$\n\n原因是左乘的第 $j$ 列是 $A$ 各列的線性組合；$E$ 的第 $j$ 列係數決定組合方式。例如第三型矩陣\n\n$$E=I_m+ke_je_i^T$$\n\n在位置 $(j,i)$ 放入 $k$。由 $e_i^TA$ 取出 $A$ 的第 $i$ 列，$e_j(e_i^TA)$ 再把它放到第 $j$ 列位置，所以 $EA=A+ke_j(e_i^TA)$ 正是所需操作。此式為補充說明，不要求先背抽象記號。\n\n三型矩陣分別是：交換 $I$ 的兩列；把 $I$ 的一個對角 1 改成 $k\\ne0$；在 $I$ 的非對角位置 $(j,i)$ 放入 $k$。\n\n**左右乘的細節：** 左乘 $m\\times m$ 基本矩陣改變橫列；右乘適當的 $n\\times n$ 基本矩陣改變直行。同一第三型 $E=I+ke_je_i^T$ 若用於右乘，則是 $C_i\\leftarrow C_i+kC_j$，來源與目標相對於左乘交換，不能照抄列運算箭頭。$C_i$ 表第 $i$ 行。左右乘還須先確認尺寸相容。\n\n因三種操作均可逆，$E^{-1}=r^{-1}(I)$，而且逆矩陣仍是基本矩陣。"
                },
                {
                  "id": "LA-CH01-S03-B-K02-E-EX02",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX02",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K02-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "split",
                  "prompt": "先對單位矩陣操作，再驗算。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K02"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-K03-C",
                  "type": "concept",
                  "title": "連續列運算的次序",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K03"
                  ],
                  "markdown": "若依序做 $r_1,r_2,\\ldots,r_k$，對應基本矩陣為 $E_1,\\ldots,E_k$，則\n\n$$A_1=E_1A,\\qquad A_2=E_2A_1=E_2E_1A,$$\n$$B=E_k\\cdots E_2E_1A.$$\n\n每一次的新矩陣都從左側乘上去，所以先做的矩陣最靠近 $A$。一般不能交換順序。\n\n對可逆矩陣乘積，\n\n$$(E_1E_2\\cdots E_k)^{-1}=E_k^{-1}\\cdots E_2^{-1}E_1^{-1}.$$\n\n驗證方式是把候選逆矩陣乘上原乘積，從中間開始相鄰消去，最後得到 $I$；若未反序，通常無法讓互逆因子相鄰。"
                },
                {
                  "id": "LA-CH01-S03-B-K03-E-EX03",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX03",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K03-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "分別寫操作順序和乘積順序。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K03"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-K04-C",
                  "type": "concept",
                  "title": "列等價及不變量",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K04"
                  ],
                  "markdown": "同尺寸矩陣 $A,B\\in F^{m\\times n}$ 能以有限次基本列運算互相轉換，就稱列等價（row equivalent），記 $A\\sim B$。\n\n列等價是等價關係：不做操作得到反身性；把每一步逆向還原得到對稱性；接續兩段操作得到遞移性。\n\n$$A\\sim B\\iff B=PA\\text{，其中 }P\\in F^{m\\times m}\\text{ 可逆。}$$\n\n正向：令 $P=E_k\\cdots E_1$，可逆矩陣的乘積可逆。反向：可逆 $P$ 可由消去法化為 $I$，因此可寫成基本矩陣乘積；把這些矩陣左乘 $A$ 即得到 $B$。\n\n定義：$\\operatorname{Row}(A)$ 是橫列向量所有線性組合的集合；$\\operatorname{Col}(A)$ 是直行向量所有線性組合的集合；$N(A)=\\{x:Ax=0\\}$ 為零空間（null space）；秩 $\\operatorname{rank}(A)$ 是行／列空間維度，等於主元個數。主元是消去後每個非零列的領先位置。\n\n| 列等價保留 | 不保證保留 |\n|---|---|\n| 列空間（row space） | 行空間（column space）作為原座標中的集合 |\n| 零空間 $N(A)$ | 個別列向量、個別行向量 |\n| 秩、主元個數 | 行列式數值 |\n| 同一簡化列梯形矩陣 RREF | 特徵值、跡 |\n\n零空間的證明：$Ax=0\\Rightarrow PAx=0\\Rightarrow Bx=0$；反向用 $A=P^{-1}B$。列空間的證明：$B$ 每一列是 $A$ 各列的組合，得包含關係；反向用 $P^{-1}$ 得相等。\n\nRREF（reduced row echelon form）要求：零列置底；非零列首個非零元素是 1；下一列領先 1 向右移；每個領先 1 所在行其餘元素為 0。其唯一性是後續消去法定理，此處列為補充結論。\n\n**非齊次方程提醒：** $Ax=b$ 必須把 $A$ 與 $b$ 同步操作，才有 $Ax=b\\iff PAx=Pb$。只把 $A$ 換成列等價 $B$ 卻保留原 $b$，解集合可能不同。"
                },
                {
                  "id": "LA-CH01-S03-B-K04-E-EX04",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX04",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K04-SUMMARY",
                  "type": "summary",
                  "title": "列等價保留與不保留的性質",
                  "markdown": "| 列等價保留 | 不保證保留 |\n|---|---|\n| 列空間（row space） | 行空間（column space）作為原座標中的集合 |\n| 零空間 $N(A)$ | 個別列向量、個別行向量 |\n| 秩、主元個數 | 行列式數值 |\n| 同一簡化列梯形矩陣 RREF | 特徵值、跡 |",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K05-C",
                  "type": "concept",
                  "title": "可逆性、基本矩陣分解與反矩陣",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K05"
                  ],
                  "markdown": "對方陣 $A\\in F^{n\\times n}$，若\n\n$$E_k\\cdots E_1A=I,$$\n\n則左側乘積就是 $A^{-1}$：\n\n$$A^{-1}=E_k\\cdots E_1.$$\n\n取逆得到\n\n$$A=E_1^{-1}\\cdots E_k^{-1}.$$\n\n因此 $A$ 可逆當且僅當它是有限個基本矩陣的乘積。正向用消去至 $I$ 得到分解；反向用每個因子可逆、乘積可逆證明。對一般非方陣不能直接寫 $A^{-1}$ 或宣稱化為同尺寸單位矩陣。\n\n增廣法把相同列運算施於兩側：\n\n$$[A\\mid I]\\longrightarrow[I\\mid A^{-1}].$$\n\n若左半部無法化為 $I$，則方陣 $A$ 不可逆，不能把右半部稱作反矩陣。"
                },
                {
                  "id": "LA-CH01-S03-B-K05-E-EX05",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX05",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K05-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "將增廣矩陣每一步算式寫出來。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K05"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-K06-C",
                  "type": "concept",
                  "title": "求轉換矩陣與左因子",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K06"
                  ],
                  "markdown": "求可逆 $P$ 使 $PA=B$：先確認 $A,B$ 同為 $m\\times n$ 且列等價，將 $A$ 變成 $B$ 的操作同步施於 $I_m$，即可讀出 $P$：\n\n$$[A\\mid I_m]\\longrightarrow[B\\mid P].$$\n\n若不容易直接轉換，可分別化到同一 RREF：$UA=R$、$VB=R$，則 $B=V^{-1}UA$，所以 $P=V^{-1}U$。$U,V$ 是各自消去操作的可逆乘積。\n\n求 $A=BC$ 的 $B$：若 $C,A$ 同尺寸且列等價，把 $C$ 轉成 $A$，同步操作單位矩陣可求一個可逆 $B$。若 $C$ 是可逆方陣，直接 $B=AC^{-1}$。\n\n**必要修正：** 一般方程 $A=BC$ 並不保證 $A,C$ 列等價，也不要求 $B$ 可逆。例如 $C=I_2$、$A=0$，則唯一解 $B=0$。一般解法是逐列求線性組合係數，存在條件為 $\\operatorname{Row}(A)\\subseteq\\operatorname{Row}(C)$；若特別要求可逆 $B$，才要同尺寸且列空間相等。"
                },
                {
                  "id": "LA-CH01-S03-B-K06-E-EX06",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX06",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K06-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "split",
                  "prompt": "把操作同步施於單位矩陣。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K06"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-K07-C",
                  "type": "concept",
                  "title": "補充：PA=B 的唯一性",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K07"
                  ],
                  "markdown": "先前「可逆方陣時唯一」是充分條件，並非必要條件。對 $A\\in F^{m\\times n}$，若 $\\operatorname{rank}(A)=m$（滿列秩，full row rank），即使不是方陣，也存在右逆 $R\\in F^{n\\times m}$ 使 $AR=I_m$。因此 $PA=B$ 右乘 $R$ 得 $P=BR$，只要解存在，就必定唯一。右逆本身可以不唯一，但 $P$ 的值相同。\n\n另一種證明：若 $P_1A=P_2A$，則 $(P_1-P_2)A=0$；滿列秩表示 $A$ 各橫列線性獨立，故 $P_1-P_2$ 每列係數都為零，所以兩解相等。\n\n秩不足時，一般矩陣解若存在則不唯一：可找非零 $Q$ 使 $QA=0$，從而 $P+Q$ 仍滿足方程。但若額外要求可逆，仍須檢查 $P+Q$ 是否可逆，不能自動推論。對常見的實數或複數體，若已存在可逆解且秩不足，可取非零且足夠小的擾動 $tQ$，使 $P+tQ$ 仍可逆，因此有不只一個可逆解；這個「足夠小」論證不適用任意有限體。"
                },
                {
                  "id": "LA-CH01-S03-B-K07-E-EX07",
                  "type": "example",
                  "exampleId": "LA-CH01-S03-EX07",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S03-B-K07-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "比較滿列秩與秩不足的情形。",
                  "knowledgePointIds": [
                    "LA-CH01-S03-K07"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S03-B-SUM",
                  "type": "summary",
                  "title": "考前摘要與常見錯誤",
                  "markdown": "1. 基本矩陣由 $E=r(I)$ 建立；列運算是左乘 $EA$。\n2. 先做 $E_1$ 再做 $E_2$，乘積為 $E_2E_1A$。\n3. $E_k\\cdots E_1A=I$ 給出 $A^{-1}=E_k\\cdots E_1$，但 $A$ 的分解是反序取逆。\n4. 列等價保留 row space、null space、rank 與 RREF；column space 的集合不一定保留。\n5. 非齊次方程須同步操作右側常數。\n6. $A=BC$ 若未要求 $B$ 可逆，不能直接假設列等價。\n7. $PA=B$ 存在且 $A$ 滿列秩時 $P$ 唯一，無須 $A$ 是方陣。\n\n### 常見錯誤對照\n\n| 錯誤 | 修正動作 |\n|---|---|\n| 不看尺寸就乘 | 先在矩陣旁寫尺寸 |\n| 第三型填錯位置 | 用「目標列、來源列」定位 $(j,i)$ |\n| 乘積次序相反 | 先逐步寫 $A_1=E_1A$ 再代入 |\n| 求反矩陣只動左半部 | 每一步跨整個增廣矩陣操作 |\n| 認為秩相同就列等價 | 比較 row space 或 RREF；相同秩不足夠 |\n| 非方陣就認為轉換矩陣不唯一 | 檢查是否滿列秩 |\n\n\n### 口頭自我檢核\n\n\n\n請自行說明「為何倍乘不能乘 0」、「為何基本矩陣要左乘」、「為何連續乘積順序倒過來」、「為何列等價不保證行空間相同」，並完成 AS01。無法解釋者回到對應例題重做，勿只背公式。"
                },
                {
                  "id": "LA-CH01-S03-B-ASSESS",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S03-AS01"
                }
              ],
              "assessment": {
                "id": "LA-CH01-S03-AS01",
                "scope": "section",
                "title": "1-3 小節測驗",
                "questionIds": [
                  "LA-CH01-S03-MC01",
                  "LA-CH01-S03-MC02",
                  "LA-CH01-S03-MC03",
                  "LA-CH01-S03-MC04",
                  "LA-CH01-S03-MC05",
                  "LA-CH01-S03-HW01",
                  "LA-CH01-S03-HW02"
                ],
                "totalPoints": 20,
                "scoringNote": "選擇題各 2 分，手寫題各 5 分，共 20 分。"
              }
            },
            {
              "id": "LA-CH01-S04",
              "title": "1-4 線性方程組",
              "reviewStatus": "draft",
              "contentVersion": "0.1",
              "sourceSectionId": "LA-C01-S04",
              "notice": "第一階段審閱稿：未取得原先 12 張講義圖片，不能宣稱逐圖確認完整性；例題均為自編模擬，補充延伸另行標示。",
              "knowledgePointIds": [
                "LA-CH01-S04-K01",
                "LA-CH01-S04-K02",
                "LA-CH01-S04-K03",
                "LA-CH01-S04-K04",
                "LA-CH01-S04-K05",
                "LA-CH01-S04-K06",
                "LA-CH01-S04-K07",
                "LA-CH01-S04-K08",
                "LA-CH01-S04-K09",
                "LA-CH01-S04-K10",
                "LA-CH01-S04-K11",
                "LA-CH01-S04-K12",
                "LA-CH01-S04-K13"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S04-B-INTRO",
                  "type": "concept",
                  "title": "符號與先備複習",
                  "provenance": "前置補充",
                  "knowledgePointIds": [],
                  "markdown": "讀完應能：建立增廣矩陣、辨識 REF/RREF、使用消去法、判定相容性、求參數通解、說明特解與核空間的關係，並處理含參數問題。\n\n|符號|意思|\n|---|---|\n|$F$|係數所在的體（field），本節預設 $\\mathbb R$ 或 $\\mathbb C$|\n|$F^{m\\times n}$|元素在 $F$、有 $m$ 列（row）及 $n$ 欄（column）的矩陣集合|\n|$a_{ij}$|第 $i$ 列、第 $j$ 欄的元素；下標是位置，不是乘法|\n|$x_j$|第 $j$ 個未知數|\n|$\\sum_{j=1}^{n}a_{ij}x_j$|固定第 $i$ 條方程式，將 $a_{i1}x_1$ 一直加到 $a_{in}x_n$|\n|$[A\\mid b]$|將常數向量 $b$ 接在 $A$ 右方的增廣矩陣|\n|$\\ker(A)=N(A)$|所有滿足 $Ax=0$ 的向量組成的集合|\n|$\\operatorname{rank}(A)$|秩，等於梯形矩陣的樞元數|\n|$\\sim$|列等價，即可用有限次基本列運算互相轉換|\n\n全文的「列運算」指 row operations，使用 $R_i$ 表示第 $i$ 列。"
                },
                {
                  "id": "LA-CH01-S04-B-K01-C",
                  "type": "concept",
                  "title": "線性方程組、矩陣表示與相容性",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K01"
                  ],
                  "markdown": "$m$ 條方程式、$n$ 個未知數的一般形式為\n\n$$\\sum_{j=1}^{n}a_{ij}x_j=b_i,\\qquad i=1,\\ldots,m.$$\n\n未知數只能以一次出現，不能彼此相乘；$x_1x_2$、$x_1^2$、$\\sin x_1$ 不是線性項。係數可為零。\n\n令 $A=(a_{ij})\\in F^{m\\times n}$、$x=(x_1,\\ldots,x_n)^T\\in F^n$、$b=(b_1,\\ldots,b_m)^T\\in F^m$，則方程組寫成 $Ax=b$。上標 $T$ 表示轉置，把橫排改成直排。\n\n解集合是 $S=\\{x\\in F^n:Ax=b\\}$。至少一解稱相容（consistent）；無解稱不相容（inconsistent）。增廣矩陣化簡後若出現 $[0\\ \\cdots\\ 0\\mid c]$ 且 $c\\ne0$，代表 $0=c$，必無解。$[0\\ \\cdots\\ 0\\mid0]$ 只代表多餘條件。"
                },
                {
                  "id": "LA-CH01-S04-B-K01-E-E01",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E01",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K01-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "把一組方程式寫成 $Ax=b$",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K01"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K02-C",
                  "type": "concept",
                  "title": "齊次與非齊次",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K02"
                  ],
                  "markdown": "$b=0$ 時稱齊次（homogeneous），$Ax=0$ 必有平凡解 $x=0$；非平凡解指 $x\\ne0$ 的解。$b\\ne0$ 時稱非齊次（nonhomogeneous），可能無解、唯一解或無限多解。\n\n若 $Au=0$ 且 $u\\ne0$，則 $A(tu)=tAu=0$。在無限體上，任意不同純量 $s,t$ 產生不同向量：若 $su=tu$，則 $(s-t)u=0$，由 $u\\ne0$ 得 $s=t$。因此有非零解即有無限多解；有限體不能使用「無限多」結論。"
                },
                {
                  "id": "LA-CH01-S04-B-K02-E-E02",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E02",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K02-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "寫出非零解的純量倍數",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K02"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K03-C",
                  "type": "concept",
                  "title": "等價方程組與列運算",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K03"
                  ],
                  "markdown": "兩方程組解集合相同稱等價。基本列運算包括交換兩列、某列乘非零純量、將某列的倍數加到另一列。它們分別能用交換、乘倒數、加相反倍數還原，因此不會增減解。\n\n對 $[A\\mid b]$ 必須整列一起運算。只改 $A$ 而不改 $b$，通常會改變解。列等價 $A\\sim B$ 可推出 $\\ker(A)=\\ker(B)$，但不能在固定同一個非零 $b$ 時直接宣稱 $Ax=b$ 與 $Bx=b$ 等價。"
                },
                {
                  "id": "LA-CH01-S04-B-K03-E-E03",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E03",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K03-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "解釋列運算為何可逆",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K03"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K04-C",
                  "type": "concept",
                  "title": "REF、RREF、樞元與變數",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K04"
                  ],
                  "markdown": "列梯形（row-echelon form, REF）：零列在底部；各非零列最左非零元素逐列向右；其下方為零。最左非零元素稱樞元（pivot）。有些教材額外要求 REF 首項為 1；本稿使用不要求為 1 的慣例，原教材用語待原圖確認。\n\n簡化列梯形（reduced row-echelon form, RREF）再要求樞元為 1，且樞元所在欄的其他元素皆為零。同一矩陣的 REF 不唯一，RREF 唯一。\n\n|條件|REF|RREF|\n|---|---|---|\n|零列在底部、樞元向右、下方為零|是|是|\n|樞元為 1|不要求|是|\n|樞元上方也為零|不要求|是|\n|結果唯一|否|是|\n\n係數矩陣的樞元欄對應主項變數；其餘未知數為自由變數。增廣欄不是未知數欄；若增廣欄有樞元，系統不相容。原矩陣的樞元欄指原矩陣中對應化簡後樞元位置的欄，並非直接拿化簡後的欄取代原欄。"
                },
                {
                  "id": "LA-CH01-S04-B-K04-E-E04",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E04",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K04-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "圈出樞元並標記自由變數",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K04"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K05-C",
                  "type": "concept",
                  "title": "消去法與回代",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K05"
                  ],
                  "markdown": "Gaussian elimination：從左至右找非零樞元，必要時交換列；消去下方元素，移向右下子矩陣，形成 REF，再由下而上回代。若候選欄全為零，跳到下一欄，不應除以零。\n\nGauss–Jordan elimination：繼續將樞元標準化成 1，消去上方元素形成 RREF。求解順序是先查矛盾，再找自由變數，最後寫完整解集合。"
                },
                {
                  "id": "LA-CH01-S04-B-K05-E-E05",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E05",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K05-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "自行列出每一步運算",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K05"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K06-C",
                  "type": "concept",
                  "title": "參數通解與核空間",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K06"
                  ],
                  "markdown": "若 $x_p$ 是 $Ax=b$ 的一個特解，則全部解為\n\n$$S=x_p+\\ker(A)=\\{x_p+u:Au=0\\}.$$\n\n證明第一方向：任取原解 $x$，$A(x-x_p)=Ax-Ax_p=b-b=0$，所以 $x-x_p\\in\\ker(A)$。第二方向：若 $Au=0$，則 $A(x_p+u)=b+0=b$。兩方向一起才證明集合相等。\n\n若自由變數為 $x_2=r,x_4=s,x_5=t$，且主項條件為 $x_1+3x_2+4x_4+2x_5=0$、$x_3+2x_4=0$、$x_6=1/3$，則\n\n$$x=(-3r-4s-2t,r,-2s,s,t,1/3)^T,\\qquad r,s,t\\in F.$$\n\n自由變數可任意取值，主項變數仍受其限制。若有解且 $\\ker(A)=\\{0\\}$，解唯一。"
                },
                {
                  "id": "LA-CH01-S04-B-K06-E-E06",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E06",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K06-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "寫出雙向包含證明",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K06"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K07-C",
                  "type": "concept",
                  "title": "秩與三種解情形",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K07"
                  ],
                  "markdown": "秩（rank）等於 REF 非零列數，也等於樞元數。$A\\in F^{m\\times n}$ 時，$0\\le\\operatorname{rank}(A)\\le\\min(m,n)$；列運算保持秩。若秩為 $r$，未知數欄有 $n-r$ 個非樞元欄。相容時，它們形成通解的自由參數。\n\n|條件|解的情形（在 $\\mathbb R$ 或 $\\mathbb C$ 上）|\n|---|---|\n|$\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$|無解|\n|$\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n$|唯一解|\n|$\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n$|無限多解|\n\n增加一欄最多增加一個樞元，因此增廣秩只可能是 $r$ 或 $r+1$。方程式多不表示獨立條件多；方程式數等於未知數數也不保證唯一解。$m<n$ 時齊次系統必有非零解，但非齊次系統仍可能無解。"
                },
                {
                  "id": "LA-CH01-S04-B-K07-E-E07",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E07",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K07-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "畫出三種解情形的判斷流程",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K07"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K08-C",
                  "type": "concept",
                  "title": "含參數分類",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K08"
                  ],
                  "markdown": "參數可能使樞元消失，不能先除以可能為零的式子。若最後條件為 $\\alpha z=\\beta$，須分成 $\\alpha\\ne0$、$\\alpha=0,\\beta\\ne0$、$\\alpha=\\beta=0$。第一種只確定這一步的 $z$；是否整體唯一仍須檢查其餘未知數欄。\n\n例如 $(7-11a+3b)z=-14+c$ 的特殊條件為 $7-11a+3b=0$ 與 $c=14$。出現 $0=0$ 不一定立刻代表無限多解，還要確認有自由變數且沒有其他矛盾列。"
                },
                {
                  "id": "LA-CH01-S04-B-K08-E-E08",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E08",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K08-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "先找不能直接除的因子",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K08"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K09-C",
                  "type": "concept",
                  "title": "基本矩陣與還原",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K09"
                  ],
                  "markdown": "對單位矩陣 $I$ 做一次基本列運算所得矩陣稱基本矩陣（elementary matrix）。左乘它等於對原矩陣做該次列運算。每個基本矩陣可逆，逆矩陣代表反向運算。\n\n$$E_k\\cdots E_2E_1A=R\\quad\\Longrightarrow\\quad A=E_1^{-1}E_2^{-1}\\cdots E_k^{-1}R.$$\n\n理由是乘積取逆會反轉因子順序。寫完後應代回相乘檢查，不可只將每個因子取逆而保留原乘積順序。"
                },
                {
                  "id": "LA-CH01-S04-B-K09-E-E09",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E09",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K09"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K09-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "記錄每個基本矩陣的逆",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K09"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K10-C",
                  "type": "concept",
                  "title": "守恆建模",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K10"
                  ],
                  "markdown": "化學配平以每一種元素守恆列式，通常得到齊次系統；選出符合反應方向的正係數解，再化成最小正整數比例。並非每個任意指定的反應式都一定存在全正係數解。\n\n交通流量與 Kirchhoff 電流定律（KCL）使用「流入總和＝流出總和」。節點方程式可能相依，不能用節點數直接當秩。流量另有非負或容量限制，代數通解之後仍要套用限制；負電流若採假設方向，則表示實際方向相反。"
                },
                {
                  "id": "LA-CH01-S04-B-K10-E-E10",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E10",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K10"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K10-E-E11",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E11",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K10"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K10-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "逐項寫出守恆條件",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K10"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K11-C",
                  "type": "concept",
                  "title": "線性性",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K11"
                  ],
                  "markdown": "若 $Aa=b,Ab=c,Ac=d$ 且 $v=\\alpha a+\\beta b+\\gamma c$，則\n\n$$Av=\\alpha Aa+\\beta Ab+\\gamma Ac=\\alpha b+\\beta c+\\gamma d.$$\n\n先解向量組合係數，通常可避免求出完整矩陣 $A$。若組合不唯一，合法資料仍須給出相同 $Av$。"
                },
                {
                  "id": "LA-CH01-S04-B-K11-E-E12",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E12",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K11"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K11-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "先求組合係數再作用 $A$",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K11"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K12-C",
                  "type": "concept",
                  "title": "複數係數",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K12"
                  ],
                  "markdown": "消去法在 $\\mathbb C$ 同樣成立，僅需正確處理 $i^2=-1$、$1/i=-i$。除以 $a+bi$ 可乘共軛 $a-bi$，分母變成 $a^2+b^2$，但須先確認除數非零。這裡 $i$ 是虛數單位，與矩陣位置下標的 $i$ 依上下文區分。"
                },
                {
                  "id": "LA-CH01-S04-B-K12-E-E13",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E13",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K12"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K12-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "計算後代回兩式",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K12"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-K13-C",
                  "type": "concept",
                  "title": "研究所常用連結",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K13"
                  ],
                  "markdown": "1. 秩－零度定理（rank–nullity）：$\\dim\\ker(A)=n-\\operatorname{rank}(A)$。$\\dim$ 表示基底中向量數量。有限體 $\\mathbb F_q$ 上，相容系統恰有 $q^{n-r}$ 個解。\n2. 固定 $b$ 的相容性：$Ax=b$ 有解等價於 $b$ 在 $A$ 的欄空間內。欄空間是各欄向量所有線性組合的集合。\n3. 對每個 $b\\in F^m$ 都有解，等價於 $\\operatorname{rank}(A)=m$；每個相容系統都唯一解，等價於 $\\operatorname{rank}(A)=n$。兩者量詞不同。\n4. 若 $AB=0$，$B$ 的每一欄都在 $\\ker(A)$，所以 $\\operatorname{rank}(B)\\le n-\\operatorname{rank}(A)$，其中 $A$ 有 $n$ 欄。\n5. 實矩陣滿足 $\\ker(A^TA)=\\ker(A)$：由 $A^TAx=0$ 得 $0=x^TA^TAx=\\|Ax\\|^2$，平方和為零推出 $Ax=0$；反方向直接代入。複數須改用共軛轉置 $A^*$，不可直接套用 $A^T$。\n6. 非齊次相容解集合是核空間的平移（仿射集合）；若 $b\\ne0$，不含零向量，因此不是向量子空間。最小平方與正交投影僅列後續學習連結，不作為本節必要先備。"
                },
                {
                  "id": "LA-CH01-S04-B-K13-E-E14",
                  "type": "example",
                  "exampleId": "LA-CH01-S04-E14",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K13"
                  ]
                },
                {
                  "id": "LA-CH01-S04-B-K13-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "區分存在與唯一的量詞",
                  "knowledgePointIds": [
                    "LA-CH01-S04-K13"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S04-B-SUM",
                  "type": "summary",
                  "title": "考前摘要與常見錯誤",
                  "markdown": "1. 先把 $[A\\mid b]$ 整列化簡，再檢查矛盾。\n2. 矛盾列 $[0\\cdots0\\mid c],c\\ne0$ 表示無解；全零列不表示無解。\n3. 相容且 $r=n$ 唯一；相容且 $r<n$，在實數或複數上無限多解。\n4. 自由參數數量為未知數數量減去係數秩。\n5. 齊次一定相容；非齊次先查相容性。\n6. 非齊次通解＝一個特解＋核空間所有向量。\n7. REF 不唯一；RREF 唯一。RREF 自由欄不必清零。\n8. 參數式先分支，不能除以可能為零的因子。\n9. $\\sum$ 只是逐項相加的簡記；不熟時先展開再推導。\n10. 考卷上證明集合相等要寫兩方向；最大值問題要同時證明上界與可達成。\n\n### 自我檢核\n\n- 我能解釋為何只改係數矩陣而不改右側會出問題嗎？\n- 我能分清楚「固定一個 $b$ 有解」與「每個 $b$ 都有解」嗎？\n- 我能從 RREF 寫出帶參數範圍的完整解集合嗎？\n- 我能不用背答案，寫出特解加核空間的兩方向證明嗎？"
                },
                {
                  "id": "LA-CH01-S04-B-ASSESS",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S04-AS01"
                }
              ],
              "assessment": {
                "id": "LA-CH01-S04-AS01",
                "scope": "section",
                "title": "1-4 小節測驗",
                "questionIds": [
                  "LA-CH01-S04-T01",
                  "LA-CH01-S04-T02",
                  "LA-CH01-S04-T03",
                  "LA-CH01-S04-T04",
                  "LA-CH01-S04-T05",
                  "LA-CH01-S04-W01",
                  "LA-CH01-S04-W02"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。"
              }
            },
            {
              "id": "LA-CH01-S05",
              "title": "1-5 可逆矩陣的充要條件",
              "reviewStatus": "draft",
              "contentVersion": "1.0",
              "sourceSectionId": "LA-C01-S05",
              "notice": "第一階段審閱稿：原教材圖片未提供且前文有截斷；完整例題、定理編號及正式章名仍待核對。研究所延伸另行標示。",
              "knowledgePointIds": [
                "LA-CH01-S05-K01",
                "LA-CH01-S05-K02",
                "LA-CH01-S05-K03",
                "LA-CH01-S05-K04",
                "LA-CH01-S05-K05",
                "LA-CH01-S05-K06",
                "LA-CH01-S05-K07",
                "LA-CH01-S05-K08",
                "LA-CH01-S05-K09",
                "LA-CH01-S05-K10",
                "LA-CH01-S05-K11"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S05-B-INTRO",
                  "type": "concept",
                  "title": "符號與先備複習",
                  "provenance": "前置補充",
                  "knowledgePointIds": [],
                  "markdown": "| 記號 | 意義 |\n|---|---|\n| $F$ | 數域，通常為實數 $\\mathbb R$ 或複數 $\\mathbb C$ |\n| $F^{m\\times n}$ | 有 $m$ 列、$n$ 欄、元素在 $F$ 的矩陣集合 |\n| $I_n$ | $n$ 階單位矩陣；對角線為 1，其餘為 0 |\n| $0$ | 依上下文表示零純量、零向量或零矩陣 |\n| $A^{-1}$ | $A$ 的反矩陣（inverse matrix），不是逐項取倒數 |\n| $\\ker A$ | 零空間（null space）：所有滿足 $Ax=0$ 的向量 |\n| $\\operatorname{rank}A$ | 秩（rank）：樞紐數／欄空間維度 |\n| $\\operatorname{nullity}A$ | 零度（nullity）：零空間維度 |\n| $A\\sim B$ | 列等價（row equivalent），可用有限次基本列運算互相轉換 |\n| $A^T,A^*$ | 轉置與共軛轉置；實數時二者相同 |\n| $e_i$ | 第 $i$ 個標準基底向量：第 $i$ 個分量為 1，其餘為 0 |\n\n本稿「列」指 row，「欄」指 column。例：$A\\in F^{m\\times n}$ 代表 $Ax=b$ 有 $m$ 條方程、$n$ 個未知數。\n\n若 $A=[a_1\\ \\cdots\\ a_n]$，則 $Ax=x_1a_1+\\cdots+x_na_n$。寫成 $\\sum_{i=1}^n x_i a_i$ 時，$\\Sigma$ 表示把 $i=1$ 到 $n$ 的各項相加；$i$ 是索引，不是額外未知數。"
                },
                {
                  "id": "LA-CH01-S05-B-K01-C",
                  "type": "concept",
                  "title": "可逆矩陣與齊次方程",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K01"
                  ],
                  "markdown": "方陣 $A\\in F^{n\\times n}$ 可逆，指存在 $B$ 使 $AB=BA=I_n$，記為 $B=A^{-1}$。\n\n核心定理：\n\n$$A\\text{ 可逆}\\iff Ax=0\\text{ 只有零解}\\iff \\operatorname{rank}A=n\\iff A\\sim I_n.$$\n\n正向：$Ax=0$ 左乘 $A^{-1}$ 得 $x=0$。反向：若沒有非零零空間向量，則沒有自由變數，每欄都有樞紐。方陣有 $n$ 欄與 $n$ 列，故 rref 是 $I_n$。若消去矩陣乘積 $P$ 使 $PA=I_n$，則 $P$ 可逆，故 $A=P^{-1}$ 可逆。此證明未預先使用單側反矩陣定理。\n\n求反矩陣：對增廣矩陣同步作列運算，$[A\\mid I_n]\\to[I_n\\mid A^{-1}]$。左半無法化為 $I_n$ 時不可逆。"
                },
                {
                  "id": "LA-CH01-S05-B-K01-E-E01",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E01",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K01-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "自己畫出「非零齊次解 → 自由變數 → 缺樞紐 → 不可逆」的關係。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K01"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K02-C",
                  "type": "concept",
                  "title": "基本矩陣與列等價",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K02"
                  ],
                  "markdown": "基本矩陣（elementary matrix）由 $I$ 做一次基本列運算得到。交換兩列的逆仍是交換；某列乘非零 $c$ 的逆是乘 $c^{-1}$；把第 $j$ 列的 $c$ 倍加到第 $i$ 列的逆是加上 $-c$ 倍。故每個基本矩陣可逆。\n\n若 $E_k\\cdots E_1A=I$，則 $A^{-1}=E_k\\cdots E_1$，而 $A=E_1^{-1}\\cdots E_k^{-1}$。因此可逆方陣恰是有限個基本矩陣的乘積（包含 $I$ 的情況）。\n\n對 $A,B\\in F^{m\\times n}$：\n\n$$A\\sim B\\iff B=PA\\quad\\text{其中 }P\\in F^{m\\times m}\\text{ 可逆}.$$\n\n正向把所有列運算相乘。反向把可逆 $P$ 分解成基本矩陣乘積，即得到一串列運算。左乘改變列，右乘則對應欄運算。\n\n$Bx=0\\iff PAx=0\\iff Ax=0$，所以列等價保持零空間與秩；不保證行列式數值相同。"
                },
                {
                  "id": "LA-CH01-S05-B-K02-E-E02",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E02",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K02-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "寫出三類基本矩陣各自的逆運算，並標註 $P$ 的尺寸。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K02"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K03-C",
                  "type": "concept",
                  "title": "唯一性與運算",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K03"
                  ],
                  "markdown": "若 $B,C$ 都是 $A$ 的反矩陣：\n\n$$B=BI=B(AC)=(BA)C=IC=C.$$\n\n依序使用單位矩陣、$AC=I$、結合律、$BA=I$、單位矩陣。故反矩陣唯一。又 $AB=BA=I$ 同時表示 $A$ 是 $B$ 的逆，故 $(A^{-1})^{-1}=A$。\n\n同階可逆方陣有 $(AB)^{-1}=B^{-1}A^{-1}$，因為 $(AB)(B^{-1}A^{-1})=AIA^{-1}=I$，另一側也成立。取轉置時乘法順序反轉，因此 $(A^{-1})^T=(A^T)^{-1}$。"
                },
                {
                  "id": "LA-CH01-S05-B-K03-E-E03",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E03",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K03-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "不看正文，完成反矩陣唯一性的等式鏈，並在每步旁寫理由。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K03"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K04-C",
                  "type": "concept",
                  "title": "非齊次方程",
                  "provenance": "教材整理與延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K04"
                  ],
                  "markdown": "對方陣 $A$，以下等價：可逆；每個 $b$ 都有唯一解；每個 $b$ 都至少有一解。\n\n可逆時 $x=A^{-1}b$ 存在；兩解相減落在零空間，故相等。唯一解當然意味有解。若每個 $b$ 有解，依序令 $b=e_i$，選 $Ax_i=e_i$，將 $X=[x_1\\cdots x_n]$ 得 $AX=I$。其欄空間涵蓋所有 $e_i$，故秩為 $n$，所以可逆。\n\n延伸：只要某個 $b$ 有唯一解也足夠。設唯一解 $x_0$，若 $Az=0$，則 $A(x_0+z)=b$；唯一性推出 $z=0$。\n\n| 方陣的條件 | 可推出的結果 |\n|---|---|\n| 某個 b 有解 | 不能判斷；b=0 對任何 A 都有解 |\n| 某個 b 唯一解 | 可逆 |\n| 所有 b 有解 | 可逆，且各自唯一 |\n| 某個 b 無解 | 不可逆 |\n| 某個 b 至少兩個不同解 | 不可逆 |\n\n不宜在一般數域一律稱「無限多解」；有限域中解集可能有限。以下數值練習使用實數。"
                },
                {
                  "id": "LA-CH01-S05-B-K04-E-E04",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E04",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K04-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "各寫一個「某個 b 有解」卻不可逆的例子，以及不可逆時無解的 b。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K04"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-SPLIT",
                  "type": "note",
                  "layout": "split",
                  "title": "對照量詞，分清楚存在與唯一",
                  "prompt": "對照上方量詞比較表，自行寫下每種條件的例子或反例。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K04"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K05-C",
                  "type": "concept",
                  "title": "不同尺寸的 I−AB 與 I−BA",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K05"
                  ],
                  "markdown": "若 $A\\in F^{n\\times m},B\\in F^{m\\times n}$，則\n\n$$I_n-AB\\text{ 可逆}\\iff I_m-BA\\text{ 可逆}.$$\n\n設左者可逆，且 $(I_m-BA)x=0$。先得 $x=BAx$，左乘 $A$ 得 $(I_n-AB)Ax=0$。由可逆性得 $Ax=0$，再代回得 $x=0$。因此右者零空間平凡，故可逆。交換 $A,B$ 得反方向。\n\n令 $C=(I_n-AB)^{-1}$，則\n\n$$(I_m-BA)^{-1}=I_m+BCA.$$\n\n驗證：展開 $(I-BA)(I+BCA)$ 得 $I+B(C-I-ABC)A$；由 $(I-AB)C=I$，括號為零。這裡乘積為同階方陣，一側為單位矩陣即足夠。"
                },
                {
                  "id": "LA-CH01-S05-B-K05-E-E05",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E05",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K05-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "每個乘積旁標尺寸，再從齊次方程重寫證明。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K05"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K06-C",
                  "type": "concept",
                  "title": "反矩陣和式的分解",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K06"
                  ],
                  "markdown": "假設 $A,A+I$ 可逆：$A^{-1}+I=A^{-1}(I+A)$，故可逆，且\n\n$$(A^{-1}+I)^{-1}=(I+A)^{-1}A.$$\n\n假設同階 $A,B,A+B$ 均可逆：\n\n$$A^{-1}+B^{-1}=B^{-1}(A+B)A^{-1},$$\n\n所以\n\n$$(A^{-1}+B^{-1})^{-1}=A(A+B)^{-1}B.$$\n\n展開右側分解即可驗證，無須假設 $AB=BA$。亦可用 $A^{-1}(A+B)B^{-1}$ 得另一相等表示 $B(A+B)^{-1}A$。不能把反矩陣對加法分配。"
                },
                {
                  "id": "LA-CH01-S05-B-K06-E-E06",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E06",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K06-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "展開分解中的兩項，檢查消去位置與乘法順序。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K06"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K07-C",
                  "type": "concept",
                  "title": "長方形矩陣、消去律與乘積",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K07"
                  ],
                  "markdown": "| A 為 m×n | 滿欄秩 rank A=n | 滿列秩 rank A=m |\n|---|---|---|\n| 尺寸限制 | n≤m | m≤n |\n| Ax=0 | 只有零解 | 不一定 |\n| 對所有 b 的 Ax=b | 至多一解，可能無解 | 至少一解，可能不唯一 |\n| 映射 | 一對一 injective | 映成 surjective |\n| 單側反矩陣 | L A=I_n | A R=I_m |\n\n若 $LA=I$，則 $Ax=0$ 左乘 $L$ 得 $x=0$。反之，滿欄秩時可由列消去構造左逆；實數情況也可用 K10 的公式。右逆同理由滿列秩與對標準基底求解構造。\n\n同階方陣 $AB=I$ 時 $\\operatorname{rank}(AB)\\le\\operatorname{rank}A$，故 $A$ 滿秩可逆，$B=A^{-1}$，因此 $BA=I$。長方形不適用：$A=[1\\ 0],B=[1\\ 0]^T$ 有 $AB=[1]$，但 $BA=\\operatorname{diag}(1,0)$。\n\n方陣 $A$ 可逆即可在 $AX=AY$ 中左乘 $A^{-1}$ 消去。若不可逆，取非零 $z\\in\\ker A$，則 $Az=A0$ 卻 $z\\ne0$，所以消去律失敗。\n\n同階方陣 $AB$ 可逆等價於 $A,B$ 都可逆：反向由乘積逆公式；正向由 $n=\\operatorname{rank}(AB)\\le\\operatorname{rank}A,\\operatorname{rank}B\\le n$。可逆矩陣的和未必可逆，例如 $I+(-I)=0$。"
                },
                {
                  "id": "LA-CH01-S05-B-K07-E-E07",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E07",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K07-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "以 3×2 與 2×3 矩陣分別畫一對一和映成的例子。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K07"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K08-C",
                  "type": "concept",
                  "title": "特徵值與多項式",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K08"
                  ],
                  "markdown": "特徵值（eigenvalue）$\\lambda$ 表示存在非零 $v$ 使 $Av=\\lambda v$。因此\n\n$$A\\text{ 可逆}\\iff\\det A\\ne0\\iff0\\text{ 不是特徵值},$$\n\n$$A-\\lambda I\\text{ 不可逆}\\iff\\lambda\\text{ 是特徵值}.$$\n\n在複數域，$p(A)$ 可逆當且僅當所有特徵值都滿足 $p(\\lambda)\\ne0$。可由多項式在複數上分解為一次因子的乘積，再用 K07 的乘積可逆性證明；不需要可對角化。實矩陣應考慮其複數特徵值，不能只查實特徵值。"
                },
                {
                  "id": "LA-CH01-S05-B-K08-E-E08",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E08",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K08-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "把 $A^2-I$ 與 $A+I$ 的可逆性分別改寫為特徵值條件。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K08"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K09-C",
                  "type": "concept",
                  "title": "特殊結構",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K09"
                  ],
                  "markdown": "三角矩陣的行列式為對角元素乘積，故可逆當且僅當每個對角元素非零。一般矩陣不能只看對角線。\n\n冪零（nilpotent）：$N^k=0$ 時，$(I-N)(I+N+\\cdots+N^{k-1})=I-N^k=I$，故後者為逆。\n\n冪等（idempotent）：$P^2=P$ 且 $P$ 可逆，左乘 $P^{-1}$ 得 $P=I$。若 $P\\ne0$，$I+\\alpha P$ 可逆當且僅當 $\\alpha\\ne-1$，其逆為 $I-\\frac{\\alpha}{1+\\alpha}P$。將二者相乘，$P$ 的係數為 $\\alpha-\\alpha/(1+\\alpha)-\\alpha^2/(1+\\alpha)=0$。若 $\\alpha=-1$，取 $Py\\ne0$，即 $(I-P)Py=0$，故不可逆。$P=0$ 時任何 $\\alpha$ 均可逆。"
                },
                {
                  "id": "LA-CH01-S05-B-K09-E-E09",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E09",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K09"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K09-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "用乘法展開親自驗證冪零與冪等公式。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K09"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K10-C",
                  "type": "concept",
                  "title": "Gram 矩陣與單側逆",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K10"
                  ],
                  "markdown": "實矩陣 $A\\in\\mathbb R^{m\\times n}$：$x^TA^TAx=\\|Ax\\|^2\\ge0$，故 $A^TA$ 半正定。若 $A^TAx=0$，則長度平方為零，所以 $Ax=0$；反向直接成立。故 $\\ker(A^TA)=\\ker A$。\n\n因此 $A^TA$ 可逆等價於滿欄秩，此時 $L=(A^TA)^{-1}A^T$ 滿足 $LA=I_n$。同理 $AA^T$ 可逆等價於滿列秩，$R=A^T(AA^T)^{-1}$ 滿足 $AR=I_m$。\n\n複數應用 $A^*$：$x^*A^*Ax=\\|Ax\\|^2$。不能直接用 $A^T$，例如 $A=[1\\ i]^T$ 非零卻有 $A^TA=0$。"
                },
                {
                  "id": "LA-CH01-S05-B-K10-E-E10",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E10",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K10"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K10-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "區分「半正定」和「正定」，寫出後者為何排除非零零空間。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K10"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-K11-C",
                  "type": "concept",
                  "title": "Schur 補與秩一更新",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K11"
                  ],
                  "markdown": "設 $M=\\begin{bmatrix}A&B\\\\C&D\\end{bmatrix}$，$A,D$ 是方陣、各區塊尺寸相容、$A$ 可逆。左乘可逆消去矩陣得\n\n$$\\begin{bmatrix}I&0\\\\-CA^{-1}&I\\end{bmatrix}M=\\begin{bmatrix}A&B\\\\0&D-CA^{-1}B\\end{bmatrix}.$$\n\n故 $M$ 可逆等價於 Schur 補 $D-CA^{-1}B$ 可逆。若補矩陣有非零零向量 $y$，取 $x=-A^{-1}By$ 即得 $M[x^T\\ y^T]^T=0$；若補矩陣可逆，則可先解 $y$ 再解 $x$，任何右側均有唯一解。\n\n若 $A$ 可逆，$u,v\\in F^n$，令 $d=1+v^TA^{-1}u$。$d\\ne0$ 時\n\n$$(A+uv^T)^{-1}=A^{-1}-\\frac{A^{-1}uv^TA^{-1}}d.$$\n\n若 $d=0$，則 $u\\ne0$、$A^{-1}u\\ne0$，而 $(A+uv^T)A^{-1}u=u(1+v^TA^{-1}u)=0$，故不可逆。若 $d\\ne0$，乘法展開可驗證上式。複數情況此為代數外積 $uv^T$；若題目使用 $uv^*$，全部相應改用共軛轉置。"
                },
                {
                  "id": "LA-CH01-S05-B-K11-E-E11",
                  "type": "example",
                  "exampleId": "LA-CH01-S05-E11",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K11"
                  ]
                },
                {
                  "id": "LA-CH01-S05-B-K11-H",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "prompt": "各挑一個 2×2 數值例子驗證公式，先確認分母非零。",
                  "knowledgePointIds": [
                    "LA-CH01-S05-K11"
                  ],
                  "height": 230
                },
                {
                  "id": "LA-CH01-S05-B-SUM",
                  "type": "summary",
                  "title": "考前摘要與常見錯誤",
                  "markdown": "對 n×n 方陣，下列等價：可逆、零空間={0}、nullity=0、rank=n、每列與每欄有樞紐、rref=I、是基本矩陣乘積、每個 b 有解、每個 b 唯一解、某個 b 唯一解、欄向量獨立、欄向量張成 Fⁿ、欄向量構成基底、映射一對一／映成／雙射、det≠0、0 非特徵值。\n\n選方法：有零空間條件先用 Ax=0；有列運算用 rref；有特殊結構先分解；有長方形尺寸分滿欄／滿列秩；有 AᵀA 用長度平方；有 I−AB 先看小尺寸乘積；有逆矩陣和式先保持順序因式分解。\n\n| 常見錯誤 | 訂正 |\n|---|---|\n| 可逆時 Ax=0 無解 | 只有零解 |\n| 某個 Ax=b 有解就可逆 | 必須唯一解，且須方陣 |\n| 長方形 AB=I 就 BA=I | 尺寸與秩可能不同 |\n| 列等價行列式相等 | 只保證同為零或同為非零（方陣） |\n| 逆、轉置不反序 | 二者都使乘積反序 |\n| 非零對角線代表可逆 | 三角矩陣才可直接如此判斷 |\n| 複數 AᵀA 必正定 | 使用 A* A，且須滿欄秩 |\n\n\n為何「某個 b 唯一解」夠用？為何方陣的一對一等同映成？I−AB 與 I−BA 的 I 階數各多少？為何 Gram 矩陣要用共軛轉置？能否不算逆而證明可逆？"
                },
                {
                  "id": "LA-CH01-S05-B-ASSESS",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S05-A01"
                }
              ],
              "assessment": {
                "id": "LA-CH01-S05-A01",
                "scope": "section",
                "title": "1-5 小節測驗",
                "questionIds": [
                  "LA-CH01-S05-Q01",
                  "LA-CH01-S05-Q02",
                  "LA-CH01-S05-Q03",
                  "LA-CH01-S05-Q04",
                  "LA-CH01-S05-Q05",
                  "LA-CH01-S05-Q06",
                  "LA-CH01-S05-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。"
              }
            },
            {
              "id": "LA-CH01-S06",
              "title": "1-6 LU 分解",
              "reviewStatus": "draft",
              "contentVersion": "0.1-review",
              "sourceSectionId": "la-ch01-s06",
              "notice": "第一階段審閱稿：本稿依先前文字轉錄整理，未重新核對七張原圖。教材例 38、39 待原圖確認；例 40、42–45 及右頁範例題幹／數值尚缺，未補造題目。補充延伸另行標示。",
              "knowledgePointIds": [
                "LA-CH01-S06-K01",
                "LA-CH01-S06-K02",
                "LA-CH01-S06-K03",
                "LA-CH01-S06-K04",
                "LA-CH01-S06-K05",
                "LA-CH01-S06-K06",
                "LA-CH01-S06-K07",
                "LA-CH01-S06-K08"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S06-B-INTRO",
                  "type": "concept",
                  "title": "符號與用語",
                  "provenance": "前置補充",
                  "knowledgePointIds": [],
                  "markdown": "本稿採臺灣常用用語：列（row）為橫向、行（column）為直向。\n\n|符號|意思|\n|---|---|\n|$A=(a_{ij})$|矩陣；$a_{ij}$ 是第 $i$ 列、第 $j$ 行元素|\n|$n$|方陣的列數與行數|\n|$I$|單位矩陣，對角為 1，其餘為 0|\n|$L,U$|下三角、上三角矩陣|\n|$m_{ik}$|用第 $k$ 列消去第 $i$ 列時的倍數|\n|$P$|排列矩陣，記錄列的重排|\n|$A^T,A^{-1}$|轉置、反矩陣；反矩陣須存在才可使用|\n|$\\operatorname{diag}(d_1,\\ldots,d_n)$|以各 $d_i$ 為主對角的矩陣，其餘為 0|\n|$\\sum_{j=1}^{i-1}$|把 $j=1$ 到 $i-1$ 的各項相加；無項時取 0|\n|$\\det(A)$|行列式；$\\Delta_k$ 表示左上角 $k\\times k$ 子矩陣的行列式|"
                },
                {
                  "id": "LA-CH01-S06-B01",
                  "type": "concept",
                  "title": "LU 是高斯消去的紀錄",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K01"
                  ],
                  "markdown": "目標是 $A=LU$，其中 $L$ 為主對角全 1 的下三角矩陣，$U$ 為上三角矩陣。$L$ 記錄消去倍數，$U$ 記錄消去結果。通常 $LU\\ne UL$。\n\n若消去步驟為 $E_r\\cdots E_2E_1A=U$，其中每個 $E_i$ 只進行倍加列，則\n\n$$A=E_1^{-1}E_2^{-1}\\cdots E_r^{-1}U=LU.$$\n\n理由：從左側依序消去 $E_r,\\ldots,E_1$ 時，反矩陣在右側結果的排列為 $E_1^{-1}\\cdots E_r^{-1}$。每個反矩陣為單位下三角，其乘積仍為單位下三角。"
                },
                {
                  "id": "LA-CH01-S06-B02",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E01",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B03",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "寫出 E01 的消去矩陣及其反矩陣，驗算乘積。",
                  "layout": "inline",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B04",
                  "type": "concept",
                  "title": "消去倍數與演算法",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K02"
                  ],
                  "markdown": "第 $k$ 步，先看目前矩陣的主元 $a_{kk}^{(k)}$。對 $i>k$，若主元非零：\n\n$$m_{ik}=\\frac{a_{ik}^{(k)}}{a_{kk}^{(k)}},\\qquad R_i\\leftarrow R_i-m_{ik}R_k.$$\n\n上標 $(k)$ 表示「已完成前面步驟的當前值」，不是次方。把 $m_{ik}$ 寫入 $L_{ik}$。不可把列運算中加號後的數字直接照抄到 $L$。\n\n例如 $R_3\\leftarrow R_3+\\frac12R_2$，等於減去 $-\\frac12R_2$，所以倍數是 $-\\frac12$。\n\n步驟：初始化 $L=I,U=A$ → 逐主元消去 → 每次記錄倍數 → 最後驗算 $LU=A$。不得把 $U$ 繼續化成 RREF 後仍沿用原本 $L$。",
                  "layout": "split"
                },
                {
                  "id": "LA-CH01-S06-B05",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E02",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B06",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "逐步記錄 E02 的三個消去倍數，追蹤目前矩陣，並驗算第三列。",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B07",
                  "type": "concept",
                  "title": "不換列 LU 的適用條件",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K03"
                  ],
                  "markdown": "「可逆」不保證不換列 LU；「奇異」不代表沒有 LU。\n\n對可逆方陣，在 $L$ 單位下三角的約定下，存在 $A=LU$ 等價於所有順序主子式 $\\Delta_1,\\ldots,\\Delta_n$ 非零。因可逆已知 $\\Delta_n\\ne0$，亦可只檢查前 $n-1$ 個。\n\n必要性：$A$ 的左上角主區塊等於相應的 $L_kU_k$，故 $\\Delta_k=\\prod_{i=1}^ku_{ii}$；可逆的三角 $U$ 對角皆非零。充分性：依消去過程，主元為 $u_{kk}=\\Delta_k/\\Delta_{k-1}$，取 $\\Delta_0=1$，所以不會遇到零主元。\n\n零主元若下方同一行尚有非零元素，直接消去會失敗；若下方已全零，則不一定需要除法。例如上三角奇異矩陣可直接取 $L=I$。不能將「所有主元非零」當所有奇異矩陣存在 LU 的必要條件。"
                },
                {
                  "id": "LA-CH01-S06-B08",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E03",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B09",
                  "type": "summary",
                  "title": "存在條件對照",
                  "provenance": "教材整理",
                  "markdown": "|情形|判斷重點|\n|---|---|\n|可逆方陣的不換列 LU|順序主子式全非零是此形式 LU 存在的充要條件。|\n|零主元且下方尚有非零元素|直接消去失敗，須檢查換列。|\n|奇異上三角矩陣|可直接取 $L=I,U=A$；奇異不代表沒有 LU。|",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B10",
                  "type": "concept",
                  "title": "LDU 分解",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K04"
                  ],
                  "markdown": "當 $U$ 的對角全非零，令 $D=\\operatorname{diag}(u_{11},\\ldots,u_{nn})$，$\\widehat U=D^{-1}U$，則\n\n$$A=LD\\widehat U.$$\n\n$L$ 是單位下三角，$D$ 是對角，$\\widehat U$ 是單位上三角。左乘 $D^{-1}$ 是把 $U$ 的第 $i$ 列除以 $u_{ii}$。有零對角時 $D^{-1}$ 不存在，這個公式不能使用。"
                },
                {
                  "id": "LA-CH01-S06-B11",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E04",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B12",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "從 E02 的 U 抽出 D，逐列寫出單位上三角矩陣。",
                  "layout": "inline",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B13",
                  "type": "concept",
                  "title": "排列與 PA=LU",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K05"
                  ],
                  "markdown": "排列矩陣是單位矩陣重排列後的結果，$P^{-1}=P^T$。左乘 $PA$ 重新排列列，右乘 $AP$ 重新排列行；兩者效果不可混用。多個排列矩陣的乘積仍是排列矩陣，但通常不交換。\n\n換列後應記錄 $PA=LU$，所以 $A=P^TLU$。單次兩列交換的矩陣滿足 $P=P^T$，一般排列矩陣未必對稱。\n\n**延伸提醒：中途換列。** 若在第 $k$ 步換第 $k$ 與第 $p$ 列，須連同 $L$ 已填好的第 $1$ 到 $k-1$ 行位置一併交換；尚未填寫部分不要整列亂換。"
                },
                {
                  "id": "LA-CH01-S06-B14",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E05",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B15",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "用 E05 同時驗算 PA=LU 和 A=PᵀLU。",
                  "layout": "inline",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B16",
                  "type": "concept",
                  "title": "部分選主元與數值精度",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K06"
                  ],
                  "markdown": "部分選主元（partial pivoting）：第 $k$ 步在第 $k$ 行中，從第 $k$ 列至第 $n$ 列的候選元素選絕對值最大者，交換到第 $k$ 列。這裡「行」指 column，搜尋的是同一直行的下方元素。\n\n很小的主元會產生很大的倍數，在有限精度計算下容易使誤差放大。選主元有助於減少這種問題，但不保證所有矩陣都沒有數值誤差，也不改變病態問題本身的敏感性。若候選全部為零，不可硬做除法。"
                },
                {
                  "id": "LA-CH01-S06-B17",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E06",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B18",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "寫出 E06 第一輪的倍數，說明交換前後的差異。",
                  "layout": "inline",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B19",
                  "type": "concept",
                  "title": "利用 LU 解方程組",
                  "provenance": "教材整理",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K07"
                  ],
                  "markdown": "由 $Ax=b$ 與 $A=LU$，令 $y=Ux$，得到先 $Ly=b$、再 $Ux=y$。\n\n$L$ 為單位下三角時，前代為\n\n$$y_i=b_i-\\sum_{j=1}^{i-1}\\ell_{ij}y_j.$$\n\n這表示從 $b_i$ 扣掉「已知的前面變數所貢獻的項」。例如 $y_3=b_3-\\ell_{31}y_1-\\ell_{32}y_2$。\n\n若 $u_{ii}\\ne0$，回代為\n\n$$x_i=\\frac{y_i-\\sum_{j=i+1}^nu_{ij}x_j}{u_{ii}},\\quad i=n,n-1,\\ldots,1.$$\n\n若 $PA=LU$，則應解 $Ly=Pb$，再解 $Ux=y$。有零對角時，不能直接套回代除法；須檢查相容性、自由變數，可能無解或無限多解。\n\n同一 $A$ 有多個右端向量時，分解只做一次。延伸：稠密矩陣分解約 $O(n^3)$，每組前代與回代約 $O(n^2)$。一般不必先求 $A^{-1}$。",
                  "layout": "split"
                },
                {
                  "id": "LA-CH01-S06-B20",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E07",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B21",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "先遮住詳解，用 E07 計算 y 再算 x，最後代回 Ax=b。",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "LA-CH01-S06-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B22",
                  "type": "concept",
                  "title": "延伸：唯一性、行列式與塊狀消去",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K08"
                  ],
                  "markdown": "### 唯一性\n\n若 $A$ 可逆且 $A=L_1U_1=L_2U_2$，兩個 $L$ 都是單位下三角，則\n\n$$L_2^{-1}L_1=U_2U_1^{-1}.$$\n\n左側為單位下三角，右側為上三角；相同矩陣必同時上下三角，因此為對角矩陣，再由左側對角全為 1 得為 $I$。故兩組分解相同。未規範 $L$ 的對角，或 $A$ 奇異時，不能照搬這個唯一性結論。\n\n### 行列式\n\n$A=LU$ 時 $\\det(A)=\\prod_i u_{ii}$，因為 $\\det(L)=1$。$PA=LU$ 時 $\\det(A)=\\det(P)\\prod_i u_{ii}$，每交換一次兩列會改變一次符號。\n\n### 塊狀消去與 Schur complement\n\n令 $M=\\begin{bmatrix}B&C\\\\D&E\\end{bmatrix}$，假設方陣 $B$ 可逆，令 $S=E-DB^{-1}C$，則\n\n$$M=\\begin{bmatrix}I&0\\\\DB^{-1}&I\\end{bmatrix}\\begin{bmatrix}B&C\\\\0&S\\end{bmatrix}.$$\n\n相乘的左下為 $D$，右下為 $DB^{-1}C+S=E$，所以等式成立；故 $\\det(M)=\\det(B)\\det(S)$。乘法順序不可交換，也不能省略 $B$ 可逆的條件。\n\n正定矩陣延伸：實對稱正定矩陣順序主子式皆正，可不換列 LU；亦有 Cholesky 分解，但不作本節原教材已完整涵蓋的主張。"
                },
                {
                  "id": "LA-CH01-S06-B23",
                  "type": "example",
                  "exampleId": "LA-CH01-S06-E08",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B24",
                  "type": "summary",
                  "title": "延伸條件檢查",
                  "provenance": "補充延伸",
                  "markdown": "1. 唯一性結論須有 $A$ 可逆且 $L$ 單位下三角。\n2. $A=LU$ 時 $\\det(A)=\\prod_i u_{ii}$；$PA=LU$ 時 $\\det(A)=\\det(P)\\prod_i u_{ii}$。\n3. 塊狀公式 $S=E-DB^{-1}C$ 要求 $B$ 可逆，且須保留矩陣乘法順序。",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S06-B25",
                  "type": "summary",
                  "title": "考前摘要與錯誤檢查",
                  "markdown": "1. $U$ 是消去結果；$L$ 填消去倍數，對角為 1。\n2. $R_i\\leftarrow R_i-mR_k$ 對應 $L_{ik}=m$。\n3. 可逆不保證不換列 LU；奇異仍可能有 LU。\n4. 可逆矩陣的順序主子式全非零，等價於此形式 LU 存在。\n5. 換列記錄為 $PA=LU$；解方程先 $Ly=Pb$。\n6. 前代由上而下，回代由下而上；除主元前先看是否為零。\n7. $D$ 抽出 $U$ 的對角；$\\widehat U=D^{-1}U$。\n8. 部分選主元比較當前主元行下方的絕對值。\n9. 多次解同一 $A$ 的不同右端，可重用分解。\n10. 最後檢查 $LU=A$ 或 $LU=PA$，再檢查 $Ax=b$。"
                },
                {
                  "id": "LA-CH01-S06-B26",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S06-A01"
                },
                {
                  "id": "LA-CH01-S06-B27",
                  "type": "note",
                  "title": "測驗後訂正與回想",
                  "prompt": "不用看公式，說明「為什麼 L 的符號與列運算寫法看起來相反」，再寫出 PA=LU 的解題順序。",
                  "height": 260,
                  "layout": "inline",
                  "knowledgePointIds": [
                    "LA-CH01-S06-K01",
                    "LA-CH01-S06-K02",
                    "LA-CH01-S06-K03",
                    "LA-CH01-S06-K04",
                    "LA-CH01-S06-K05",
                    "LA-CH01-S06-K06",
                    "LA-CH01-S06-K07",
                    "LA-CH01-S06-K08"
                  ]
                }
              ],
              "assessment": {
                "id": "LA-CH01-S06-A01",
                "scope": "section",
                "title": "1-6 小節測驗",
                "questionIds": [
                  "LA-CH01-S06-Q01",
                  "LA-CH01-S06-Q02",
                  "LA-CH01-S06-Q03",
                  "LA-CH01-S06-Q04",
                  "LA-CH01-S06-Q05",
                  "LA-CH01-S06-Q06",
                  "LA-CH01-S06-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。"
              }
            },
            {
              "id": "LA-CH01-S07",
              "title": "1-7 基本行運算",
              "reviewStatus": "draft",
              "contentVersion": "0.1.0-review",
              "sourceSectionId": "la-ch01-s07",
              "notice": "第一階段審閱稿：未取得三張原教材圖片，原教材「行」代表 row 或 column 仍待確認。本節一律用 row（橫排）與 column（直行）區分操作方向。例題均為自編模擬，原例題與教材歸屬待核對；前文更正及補充延伸另行標示。",
              "knowledgePointIds": [
                "LA-CH01-S07-K01",
                "LA-CH01-S07-K02",
                "LA-CH01-S07-K03",
                "LA-CH01-S07-K04",
                "LA-CH01-S07-K05",
                "LA-CH01-S07-K06",
                "LA-CH01-S07-K07",
                "LA-CH01-S07-K08"
              ],
              "blocks": [
                {
                  "id": "LA-CH01-S07-B-INTRO",
                  "type": "summary",
                  "title": "用語約定與前文更正",
                  "provenance": "編輯更正",
                  "knowledgePointIds": [],
                  "markdown": "本節明確採 row（橫排，R）與 column（直行，C）；原教材「行」的用語仍待原圖確認。左乘做 row 操作，右乘做 column 操作。\n\n1. 全為 1 的矩陣 $J$ 只做 row 運算，不能化為 $\\operatorname{diag}(1,0,0)$：row 運算保留 row space，前者由 $(1,1,1)$ 生成，後者由 $(1,0,0)$ 生成，兩者不同。若允許 row 與 column 運算，才可做到。\n2. 前文所列下三角矩陣的 $(1,3)$ 元素為 1，不是下三角矩陣；不沿用為教材答案。\n3. 不因小節名稱而猜測原教材的左右乘方向。row 操作用左乘，column 操作用右乘；兩種慣例明確分開。\n4. 「$Ax=0$ 只有零解」直接表示 columns 線性獨立；對方陣也等價於 rows 線性獨立，但後者需透過滿秩說明。"
                },
                {
                  "id": "LA-CH01-S07-B001",
                  "type": "concept",
                  "title": "三種基本運算",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "矩陣 $A$ 的第 $i$ 個 row 記為 $R_i$，第 $j$ 個 column 記為 $C_j$。元素 $a_{ij}$ 的第一下標 $i$ 是 row 位置、第二下標 $j$ 是 column 位置。\n\n|類型|row 操作|column 操作|條件與反向操作|\n|---|---|---|---|\n|交換|$R_i \\leftrightarrow  R_j$|$C_i \\leftrightarrow  C_j$|$i\\ne j$；再交換一次還原|\n|倍乘|$R_i \\leftarrow  kR_i$|$C_i \\leftarrow  kC_i$|$k\\ne 0$；乘 $1/k$ 還原|\n|倍加|$R_j \\leftarrow  R_j+kR_i$|$C_j \\leftarrow  C_j+kC_i$|$i\\ne j$；改加 $-k$ 倍還原|\n\n倍加只改目標，來源不變。倍乘 0 會消去資訊，不能逆轉。$k=0$ 的倍加、$k=1$ 的倍乘是恆等操作；是否將恆等矩陣也稱基本矩陣，依教材慣例確認。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B002",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX01",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "height": 230,
                  "prompt": "選一個 $2\\times 2$ 矩陣，為三類操作各寫一次正向及反向過程。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K01"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B004",
                  "type": "concept",
                  "title": "基本矩陣（elementary matrix）",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "對單位矩陣 $I_n$ 做一次基本操作所得的矩陣，稱基本矩陣。$I_n$ 對角線為 1，其餘為 0。交換矩陣記為 $P_{ij}$；第 $i$ 個座標倍乘 $k$ 的矩陣記為 $D_i(k)$。\n\n為避免教材下標慣例衝突，本稿倍加採\n\n$$T_{ji}(k)=I_n+k e_j e_i^T.$$\n\n其中 $e_i$ 是第 $i$ 個標準基底向量（僅第 $i$ 個座標為 1），$T$ 表示轉置；$e_j e_i^T$ 僅在位置 $(j,i)$ 為 1。例如 $T_{21}(5)$=$\\begin{bmatrix}1&0\\\\5&1\\end{bmatrix}$，左乘時對應 $R_2\\leftarrow R_2+5R_1$。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B005",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX02",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "split",
                  "height": 230,
                  "prompt": "對照左側定義，構造例題 02 的基本矩陣與反矩陣，標出來源與目標的下標。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K02"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B007",
                  "type": "concept",
                  "title": "乘法方向與維度",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "若 $A$ 為 $m\\times n$，row 操作矩陣 $E$ 為 $m\\times m$，column 操作矩陣 $F$ 為 $n\\times n$：\n\n$$EA=\\text{row 操作後的矩陣},\\qquad AF=\\text{column 操作後的矩陣}.$$\n\n左乘時，($EA$) 的第 $j$ 個 row 是 $E$ 第 $j$ 個 row 所指定的 $A$ 各 rows 的線性組合。\n\n右乘時，($AF$) 的第 $j$ 個 column 是 $F$ 第 $j$ 個 column 所指定的 $A$ 各 columns 的線性組合。因此\n\n$$R_j\\leftarrow R_j+kR_i:\\ E=I_m+ke_je_i^T,$$\n$$C_j\\leftarrow C_j+kC_i:\\ F=I_n+ke_ie_j^T.$$\n\n同一倍加矩陣放兩側，來源與目標方向不同，不能只背下標。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B008",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX03",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B009",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "height": 230,
                  "prompt": "計算例題 03 的 $EA$ 與 $AE$，分別標出被改變的 row 或 column，檢查兩側矩陣的尺寸。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K03"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B010",
                  "type": "concept",
                  "title": "操作順序與逆矩陣",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "先 row 操作 $E_1$，再 $E_2$：$B=E_2E_1A$；先 column 操作 $F_1$，再 $F_2$：$B=AF_1F_2$。最先作用的因子最靠近 $A$。\n\n$$P_{ij}^{-1}=P_{ij},\\quad D_i(k)^{-1}=D_i(1/k),\\quad T_{ji}(k)^{-1}=T_{ji}(-k).$$\n\n倍加反矩陣證明：令 $N=e_je_i^T$，因 $i\\ne j$，$e_i^Te_j=0$，故 $N^{2}=0$；$(I+kN)(I-kN)=I-k^{2}N^{2}=I$。\n\n若 $B=E_r\\cdots E_1A$，則 $A=E_1^{-1}\\cdots E_r^{-1}B$。逆向還原先撤銷最後一步。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B011",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX04",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B012",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "height": 230,
                  "prompt": "用例題 04 依時間順序寫出每一步，再分別寫出左乘因子的順序與逆向還原順序。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K04"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B013",
                  "type": "concept",
                  "title": "等價關係與不變量",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "row equivalent：有限次 row 操作互得，等價於 $B=PA$，其中 $P$ 為可逆 $m\\times m$ 矩陣。column equivalent：$B=AQ$，其中 $Q$ 為可逆 $n\\times n$ 矩陣。兩者各具反身性（零次操作）、對稱性（反向操作）、傳遞性（接續操作）。\n\n|性質|可逆左乘 $PA$|可逆右乘 $AQ$|\n|---|---|---|\n|rank（秩）|不變|不變|\n|row space|相同|一般不同|\n|column space|一般不同；變為 $P \\operatorname{col}(A)$|相同|\n|null space（核空間）|相同|變為 $Q^{-1} \\operatorname{ker}(A)$|\n|方陣行列式數值|不一定相同|不一定相同|\n|方陣可逆性|保留|保留|\n\n例如 $PAx=0 \\iff  Ax=P^{-1}0=0$，故核相同。$AQx=0 \\iff  Qx\\in \\operatorname{ker}(A)$，故 $x\\in Q^{-1}\\operatorname{ker}(A)$。rank 不變，因可逆變換不改變線性獨立資訊的維數。\n\n補充：交換使行列式變號，倍乘 $k$ 使其乘 $k$，倍加使其不變。等價不代表相等，也不代表相似；特徵值不一定保留。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B014",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX05",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B015",
                  "type": "summary",
                  "title": "等價性質對照",
                  "markdown": "|性質|可逆左乘 $PA$|可逆右乘 $AQ$|\n|---|---|---|\n|rank（秩）|不變|不變|\n|row space|相同|一般不同|\n|column space|一般不同；變為 $P \\operatorname{col}(A)$|相同|\n|null space（核空間）|相同|變為 $Q^{-1} \\operatorname{ker}(A)$|\n|方陣行列式數值|不一定相同|不一定相同|\n|方陣可逆性|保留|保留|",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K05"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B016",
                  "type": "concept",
                  "title": "方程組與反矩陣",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "$Ax=b$ 做 row 操作時，必須連同常數欄一起處理：\n\n$$[A\\mid b]\\longrightarrow[EA\\mid Eb].$$\n\n因 $E$ 可逆，$Ax=b \\iff  EAx=Eb$，解集合相同。column 操作不能直接當成保留未知數 $x$ 的方程等價：若 $x=Qy$，則 $Ax=b$ 變成 $AQy=b$，需要追蹤座標變換。\n\n方陣求逆：若 $E_r\\cdots E_1A=I$，則 $E_r\\cdots E_1=A^{-1}$。因此 $[A\\mid I]$ 以 row 操作化為 $[I\\mid A^{-1}]$；若左半無法化為 $I$，$A$ 不可逆。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B017",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX06",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B018",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "height": 230,
                  "prompt": "自行以 $[A\\mid I]$ 完成例題 06 的求逆過程；右半同步操作，再代回 $Ax=b$ 驗算。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K06"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B019",
                  "type": "concept",
                  "title": "可逆方陣的等價條件",
                  "provenance": "數學整理 · 原教材歸屬待核對",
                  "markdown": "令 $A\\in F^{n\\times n}$，$F$ 為實數、複數或一般域。下列等價：$A$ 可逆；$\\operatorname{ker}(A)=\\{0\\}$；columns 線性獨立；rows 線性獨立；$\\operatorname{rank}(A)=n$；$\\operatorname{RREF}(A)=I_n$；可由 row 操作化為 $I_n$；每個 $b\\in F^n$，$Ax=b$ 恰有一解；每個 $b\\in F^n$，$Ax=b$ 至少有一解；$\\operatorname{det}(A)\\ne 0$。\n\n證明主線：可逆 ⇒ $x=A^{-1}b$ 存在且唯一 ⇒ 取 $b=0$ 得只有零解 ⇒ 無自由變數、每個 column 有主元 ⇒ 方陣每個 row 也有主元 ⇒ RREF 為 $I$ ⇒ 消去操作乘積就是反矩陣。每個 $b$ 都有解 ⇒ column space=$F^n$ ⇒ $\\operatorname{rank}=n$，接回主線。\n\n非方陣 $A\\in F^{m\\times n}$：只有零解等價於滿 column rank $n$；每個 $b$ 都有解等價於滿 row rank $m$，不能直接互推。某個 $b$ 有解、某個非零 $b$ 有解，都不足以推出方陣可逆。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B020",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX07",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B021",
                  "type": "summary",
                  "title": "先確認方陣與量詞",
                  "markdown": "非方陣 $A\\in F^{m\\times n}$：只有零解等價於滿 column rank $n$；每個 $b$ 都有解等價於滿 row rank $m$，不能直接互推。某個 $b$ 有解、某個非零 $b$ 有解，都不足以推出方陣可逆。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K07"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B022",
                  "type": "concept",
                  "title": "補充：雙邊等價與秩標準形",
                  "provenance": "補充延伸",
                  "markdown": "允許 row、column 兩種操作時，可找到可逆 $P$、$Q$，使\n\n$$PAQ=\\begin{bmatrix}I_r&0\\\\0&0\\end{bmatrix},\\qquad r=\\operatorname{rank}(A).$$\n\n這稱矩陣等價的秩標準形，不是相似對角化。全 1 矩陣 $J$：先 $R_2\\leftarrow R_2-R_1$、$R_3\\leftarrow R_3-R_1$，剩第一 row 為 $(1,1,1)$；再 $C_2\\leftarrow C_2-C_1$、$C_3\\leftarrow C_3-C_1$，才得到 $\\operatorname{diag}(1,0,0)$。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B023",
                  "type": "example",
                  "exampleId": "LA-CH01-S07-EX08",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B024",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "layout": "inline",
                  "height": 230,
                  "prompt": "用例題 08 逐步記錄 row 與 column 操作，並說明只做 row 運算為何不夠。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K08"
                  ]
                },
                {
                  "id": "LA-CH01-S07-B025",
                  "type": "summary",
                  "title": "考前摘要",
                  "markdown": "- 左乘改 rows；右乘改 columns。先檢查維度，再判斷來源與目標。\n- 基本矩陣從單位矩陣做一次操作構造，皆可逆。\n- 左乘連續操作反序寫；右乘連續操作依序寫；還原先撤銷最後一步。\n- row 等價保留 row space、ker、rank；column 等價保留 column space、rank。\n- 增廣矩陣同步處理常數欄。column 操作必須追蹤未知數的換元。\n- 可逆定理先確認方陣與「每個 $b$」；某個 $b$ 有解不夠。\n- $\\operatorname{diag}(I_r,0)$ 一般需要雙邊操作，不是只做 row 消去。"
                },
                {
                  "id": "LA-CH01-S07-B026",
                  "type": "assessment",
                  "assessmentId": "LA-CH01-S07-ASSESSMENT01"
                },
                {
                  "id": "LA-CH01-S07-B027",
                  "type": "note",
                  "title": "錯題訂正與重點回想",
                  "layout": "inline",
                  "height": 260,
                  "prompt": "記錄錯題 ID、錯誤位置與原因（觀念／符號／計算／條件），再用自己的話寫下正確判斷提示及重做結果。原作答與訂正請分開保留。",
                  "knowledgePointIds": [
                    "LA-CH01-S07-K01",
                    "LA-CH01-S07-K02",
                    "LA-CH01-S07-K03",
                    "LA-CH01-S07-K04",
                    "LA-CH01-S07-K05",
                    "LA-CH01-S07-K06",
                    "LA-CH01-S07-K07",
                    "LA-CH01-S07-K08"
                  ]
                }
              ],
              "assessment": {
                "id": "LA-CH01-S07-ASSESSMENT01",
                "scope": "section",
                "title": "1-7 小節測驗",
                "questionIds": [
                  "LA-CH01-S07-Q01",
                  "LA-CH01-S07-Q02",
                  "LA-CH01-S07-Q03",
                  "LA-CH01-S07-Q04",
                  "LA-CH01-S07-Q05",
                  "LA-CH01-S07-Q06",
                  "LA-CH01-S07-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。"
              }
            }
          ]
        },
        {
          "id": "LA-CH02",
          "title": "第 2 章 行列式",
          "titleStatus": "章名與教材完整性待原目錄核對",
          "curriculumComplete": false,
          "sections": [
            {
              "id": "LA-CH02-S01",
              "title": "2-1 二階行列式",
              "sourceSectionId": "la-ch02-s01",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得九張原圖，原教材完整性待核。缺少完整矩陣或題幹的課本例7、實例1、2、6未補造。教材轉錄、編輯補充與自編例題分開標示；考古題候選尚未核實，不列入正式題庫。",
              "knowledgePointIds": [
                "LA-CH02-S01-K01",
                "LA-CH02-S01-K02",
                "LA-CH02-S01-K03",
                "LA-CH02-S01-K04"
              ],
              "blocks": [
                {
                  "id": "LA-CH02-S01-B-INTRO",
                  "type": "concept",
                  "title": "符號與閱讀約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "本稿依臺灣教材慣例：**列 row 為橫向，行 column 為縱向**。其他資料有時用「行」指 row，閱讀時以英文或索引確認。\n\n| 符號 | 意義 |\n|---|---|\n| $A=[a_{ij}]$ | $a_{ij}$ 是矩陣第 $i$ 列、第 $j$ 行的元素 |\n| $n\\times n$ | 有 $n$ 列、$n$ 行的方陣 |\n| $\\det(A)$ 或 $|A|$ | 方陣的行列式，是純量，不是逐元素絕對值 |\n| $F$ | 數值所在的體（field）；本稿計算例以實數為主 |\n| $A^T$ | 轉置（transpose），列與行互換 |\n| $I_n$ | $n$ 階單位矩陣，主對角為1，其餘為0 |\n| $\\sum_{j=1}^n b_j$ | 依序把 $b_1,b_2,\\ldots,b_n$ 相加；$j$ 是逐項改變的索引 |\n| $A_{ij}$ | 刪去第 $i$ 列、第 $j$ 行後的子矩陣；其他教材可能用此符號指餘因子，須先看定義 |\n| $M_{ij}$ | 本稿統一指子式 $\\det(A_{ij})$ |\n| $C_{ij}$ | 代數餘因子 $(-1)^{i+j}M_{ij}$ |\n\n難度：基礎 ★；中階 ★★★；進階 ★★★★★。這些是學習難度，並非出題頻率。"
                },
                {
                  "id": "LA-CH02-S01-B001",
                  "type": "concept",
                  "title": "矩陣與行列式不同",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "矩陣是一個數值陣列；行列式是對方陣定義的純量函數。非方陣在本課程不定義行列式。\n\n對 $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，\n\n$$\\det(A)=ad-bc.$$\n\n先算左上乘右下，再減右上乘左下。二階公式同時也是高階遞迴計算的基礎。可逆性連結為 $A$ 可逆當且僅當 $\\det(A)\\ne0$；一般階數的證明留後續性質建立後處理。",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B002",
                  "type": "example",
                  "exampleId": "LA-CH02-S01-EX001",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B003",
                  "type": "example",
                  "exampleId": "LA-CH02-S01-EX002",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B004",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K01"
                  ],
                  "prompt": "畫出兩個乘積的位置，再把「減去負數」單獨寫一步。"
                },
                {
                  "id": "LA-CH02-S01-B005",
                  "type": "concept",
                  "title": "固定其餘列時的線性",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "若 $u=(a_1,a_2)$、$v=(b_1,b_2)$、$w=(c_1,c_2)$ 為橫向列向量，$k$ 為純量，則\n\n$$\\det\\begin{bmatrix}u+kv\\\\w\\end{bmatrix}=\\det\\begin{bmatrix}u\\\\w\\end{bmatrix}+k\\det\\begin{bmatrix}v\\\\w\\end{bmatrix}.$$\n\n證明逐步如下：\n\n$$\\begin{aligned}\n\\det\\begin{bmatrix}a_1+kb_1&a_2+kb_2\\\\c_1&c_2\\end{bmatrix}\n&=(a_1+kb_1)c_2-(a_2+kb_2)c_1 &&\\text{二階定義}\\\\\n&=(a_1c_2-a_2c_1)+k(b_1c_2-b_2c_1) &&\\text{分配律與合併}.\n\\end{aligned}$$\n\n最後兩組就是右邊的兩個行列式。固定第一列、改變第二列也成立。\n\n**限制：其他列必須固定。** $\\det(A+B)=\\det(A)+\\det(B)$ 一般不成立。以 $A=B=I_2$ 為例，左邊為4，右邊為2。",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B006",
                  "type": "example",
                  "exampleId": "LA-CH02-S01-EX003",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B007",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K02"
                  ],
                  "prompt": "標出固定列與改變列，寫清楚每個係數。"
                },
                {
                  "id": "LA-CH02-S01-B008",
                  "type": "concept",
                  "title": "單列縮放與整體縮放",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "只有一列乘 $k$，行列式乘 $k$。整個二階矩陣乘 $k$ 時，兩列各提出一次，故\n\n$$\\det(kA)=k^2\\det(A).$$\n\n一般 $n$ 階則為 $\\det(kA)=k^n\\det(A)$，理由是每列各貢獻一個 $k$。不需除以 $k$，所以 $k=0$ 也適用。",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B009",
                  "type": "example",
                  "exampleId": "LA-CH02-S01-EX004",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B010",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K03"
                  ],
                  "prompt": "把「只改一列」和「每列都改」分成兩格比較。"
                },
                {
                  "id": "LA-CH02-S01-B011",
                  "type": "concept",
                  "title": "相同列、比例列、零列",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "$$\\det\\begin{bmatrix}a&b\\\\a&b\\end{bmatrix}=ab-ba=0.$$\n\n比例列可先提出倍數，化成相同列；零列也可直接由二階公式得到0。對行也成立。例：$\\det\\begin{bmatrix}6&8\\\\3&4\\end{bmatrix}=24-24=0$。\n\n提醒：二階行列式為0代表兩列線性相依；若含零列，不宜硬用比值描述，避免除以0。",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B012",
                  "type": "example",
                  "exampleId": "LA-CH02-S01-EX005",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S01-B013",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S01-K04"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S01-B014",
                  "type": "summary",
                  "title": "考前摘要與錯誤檢查",
                  "markdown": "1. 二階 $ad-bc$，負號與括號最先檢查。\n2. 單列線性必須固定其餘列；整體加法一般不成立。\n3. 單列乘k只乘一次；n階整體乘k是乘$k^n$。\n4. 零列、重複列、比例列使行列式為0。"
                },
                {
                  "id": "LA-CH02-S01-B015",
                  "type": "assessment",
                  "assessmentId": "LA-CH02-S01-AS01"
                },
                {
                  "id": "LA-CH02-S01-B016",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "knowledgePointIds": [
                    "LA-CH02-S01-K01",
                    "LA-CH02-S01-K02",
                    "LA-CH02-S01-K03",
                    "LA-CH02-S01-K04"
                  ],
                  "prompt": "記錄錯題、出錯步驟、適用條件與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。"
                }
              ],
              "assessment": {
                "id": "LA-CH02-S01-AS01",
                "scope": "section",
                "title": "2-1 小節測驗",
                "questionIds": [
                  "LA-CH02-S01-Q101",
                  "LA-CH02-S01-Q102",
                  "LA-CH02-S01-Q103",
                  "LA-CH02-S01-Q104",
                  "LA-CH02-S01-Q105",
                  "LA-CH02-S01-Q106",
                  "LA-CH02-S01-Q107"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "la-ch02-s01-test01"
              }
            },
            {
              "id": "LA-CH02-S02",
              "title": "2-2 高階行列式",
              "sourceSectionId": "la-ch02-s02",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得九張原圖，原教材完整性待核。缺少完整矩陣或題幹的課本例7、實例1、2、6未補造。教材轉錄、編輯補充與自編例題分開標示；考古題候選尚未核實，不列入正式題庫。",
              "knowledgePointIds": [
                "LA-CH02-S02-K01",
                "LA-CH02-S02-K02",
                "LA-CH02-S02-K03",
                "LA-CH02-S02-K04",
                "LA-CH02-S02-K05",
                "LA-CH02-S02-K06"
              ],
              "blocks": [
                {
                  "id": "LA-CH02-S02-B-INTRO",
                  "type": "concept",
                  "title": "符號與閱讀約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "本稿依臺灣教材慣例：**列 row 為橫向，行 column 為縱向**。其他資料有時用「行」指 row，閱讀時以英文或索引確認。\n\n| 符號 | 意義 |\n|---|---|\n| $A=[a_{ij}]$ | $a_{ij}$ 是矩陣第 $i$ 列、第 $j$ 行的元素 |\n| $n\\times n$ | 有 $n$ 列、$n$ 行的方陣 |\n| $\\det(A)$ 或 $|A|$ | 方陣的行列式，是純量，不是逐元素絕對值 |\n| $F$ | 數值所在的體（field）；本稿計算例以實數為主 |\n| $A^T$ | 轉置（transpose），列與行互換 |\n| $I_n$ | $n$ 階單位矩陣，主對角為1，其餘為0 |\n| $\\sum_{j=1}^n b_j$ | 依序把 $b_1,b_2,\\ldots,b_n$ 相加；$j$ 是逐項改變的索引 |\n| $A_{ij}$ | 刪去第 $i$ 列、第 $j$ 行後的子矩陣；其他教材可能用此符號指餘因子，須先看定義 |\n| $M_{ij}$ | 本稿統一指子式 $\\det(A_{ij})$ |\n| $C_{ij}$ | 代數餘因子 $(-1)^{i+j}M_{ij}$ |\n\n難度：基礎 ★；中階 ★★★；進階 ★★★★★。這些是學習難度，並非出題頻率。"
                },
                {
                  "id": "LA-CH02-S02-B001",
                  "type": "concept",
                  "title": "子矩陣、子式、餘因子",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "一階 $\\det([a])=a$。對 $n\\ge2$，選 $a_{ij}$，刪第 $i$ 列與第 $j$ 行得到 $(n-1)$ 階子矩陣；取其行列式得 $M_{ij}$，再加符號得\n\n$$C_{ij}=(-1)^{i+j}M_{ij}.$$\n\n三階符號棋盤為 $\\begin{bmatrix}+&-&+\\\\-&+&-\\\\+&-&+\\end{bmatrix}$。$i+j$ 偶數取正、奇數取負。子矩陣是矩陣，子式與餘因子都是數；子式本身也可能為負，不能把棋盤負號當成子式的數值。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B002",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX006",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K01"
                  ],
                  "prompt": "分別列出刪去的位置、留下的矩陣、子式和餘因子。"
                },
                {
                  "id": "LA-CH02-S02-B004",
                  "type": "concept",
                  "title": "Laplace展開",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "可用第一列遞迴定義：$\\det(A)=\\sum_{j=1}^n a_{1j}C_{1j}$。Laplace展開定理（Laplace expansion）指出任一列、任一行皆可展開：\n\n$$\\det(A)=\\sum_{j=1}^n a_{ij}C_{ij}\\quad\\text{（固定列 }i\\text{）},$$\n$$\\det(A)=\\sum_{i=1}^n a_{ij}C_{ij}\\quad\\text{（固定行 }j\\text{）}.$$\n\n例如沿第二列，就是 $a_{21}C_{21}+a_{22}C_{22}+\\cdots+a_{2n}C_{2n}$。每項必須保留原元素；若已使用 $C_{ij}$，不要再乘一次棋盤符號。\n\n計算流程：確認方陣 → 找零最多的列或行 → 只對非零元素列項 → 刪對列行 → 算子式與符號 → 合併。遇一般稠密高階矩陣，不必硬做大量展開；列運算化簡屬後續延伸方法。\n\n三階沿第一列展開為\n\n$$\\begin{aligned}\\det(A)={}&a_{11}(a_{22}a_{33}-a_{23}a_{32})\\\\&-a_{12}(a_{21}a_{33}-a_{23}a_{31})\\\\&+a_{13}(a_{21}a_{32}-a_{22}a_{31}).\\end{aligned}$$\n\nSarrus斜線法只適用三階，不可直接延用到四階。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B005",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX007",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B006",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX008",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B007",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K02"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S02-B008",
                  "type": "concept",
                  "title": "多重線性與轉置",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "高階行列式固定其他列時，對某一列線性，稱多重線性（multilinearity）；對行亦然。可把二階的單列拆和、單列倍數性質推廣至 $n$ 階。兩列相同或成比例、存在零列時行列式為0。\n\n$$\\det(A^T)=\\det(A).$$\n\n轉置不等於交換兩列。利用轉置性質，列的性質可對應到行。上述為本節性質整理；一般階數的完整定理證明未出現在可讀的先前文字，不能聲稱已照錄原教材證明。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B009",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX009",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B010",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K03"
                  ],
                  "prompt": "寫一組 $A,B$ 反例否定整體加法線性，再說明單列線性為何不矛盾。"
                },
                {
                  "id": "LA-CH02-S02-B011",
                  "type": "concept",
                  "title": "三角矩陣",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "上三角矩陣主對角下方全為0；下三角矩陣主對角上方全為0。兩者皆滿足\n\n$$\\det(A)=\\prod_{i=1}^n a_{ii}=a_{11}\\cdots a_{nn}.$$\n\n上三角可沿第一行（縱向）展開，只剩 $a_{11}$，留下仍為上三角的子矩陣，重複得到公式；下三角可沿第一列展開。對角矩陣同時為上下三角，$\\det(I_n)=1$。\n\n**左下方有非零數不代表一定不是三角矩陣**：仍可能是下三角；必須檢查整個上方或下方區域。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B012",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX010",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B013",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K04"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S02-B014",
                  "type": "concept",
                  "title": "不同列的元素與餘因子配對",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "$$\\sum_{j=1}^n a_{rj}C_{sj}=\\begin{cases}\\det(A),&r=s,\\\\0,&r\\ne s.\\end{cases}$$\n\n當 $r\\ne s$，把第 $s$ 列換成第 $r$ 列。新矩陣有重複列，行列式為0；沿第 $s$ 列展開，其餘因子刪除的是替換列，因此與原矩陣 $C_{sj}$ 相同，得到公式。對行的版本為 $\\sum_i a_{ir}C_{is}=0$（$r\\ne s$）。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B015",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX011",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B016",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K05"
                  ],
                  "prompt": "寫出替換後矩陣，圈出重複列。"
                },
                {
                  "id": "LA-CH02-S02-B017",
                  "type": "concept",
                  "title": "函數行列式的微分",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "各元素在考察點可微時，若列向量為 $r_1(x),\\ldots,r_n(x)$，\n\n$$\\frac{d}{dx}\\det\\begin{bmatrix}r_1\\\\\\vdots\\\\r_n\\end{bmatrix}=\\sum_{k=1}^n\\det\\begin{bmatrix}r_1\\\\\\vdots\\\\r'_k\\\\\\vdots\\\\r_n\\end{bmatrix}.$$\n\n每項只微分一列，其餘不變。二階可從 $f_1g_2-f_2g_1$ 使用乘法法則得到 $f'_1g_2+f_1g'_2-f'_2g_1-f_2g'_1$，再分成兩個行列式。不可寫成 $\\det(A')$。\n\n連續導數列的特殊形式：\n\n$$W=\\det\\begin{bmatrix}f_1&f_2&f_3\\\\f'_1&f'_2&f'_3\\\\f''_1&f''_2&f''_3\\end{bmatrix}\\quad\\Longrightarrow\\quad W'=\\det\\begin{bmatrix}f_1&f_2&f_3\\\\f'_1&f'_2&f'_3\\\\f'''_1&f'''_2&f'''_3\\end{bmatrix}.$$\n\n假設所需三階導數存在。前兩項分別出現兩列相同而為0，才可只留最後一列微分。",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B018",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX012",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B019",
                  "type": "example",
                  "exampleId": "LA-CH02-S02-EX013",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S02-B020",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S02-K06"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S02-B-EXT",
                  "type": "concept",
                  "title": "補充延伸與適用限制",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [],
                  "markdown": "以下為本稿補充，用來銜接後續章節；不宣稱都出現在本次九張原圖。\n\n| 延伸主題 | 結論與條件 | 對本節的用途 |\n|---|---|---|\n| 列運算 | 交換兩列變號；一列乘k使值乘k；一列加另一列倍數不變 | 高階稠密矩陣可先化簡 |\n| 乘法 | 同階方陣$\\det(AB)=\\det A\\det B$ | 可逆、冪次與正交題 |\n| 逆矩陣 | 可逆時$\\det(A^{-1})=1/\\det A$ | 注意不可逆時無此式 |\n| 正交矩陣 | 實正交$Q^TQ=I$，所以$(\\det Q)^2=1$、$\\det Q=\\pm1$ | 不可只記+1 |\n| 實數條件 | 實非奇異$A$有$\\det(A^TA)=(\\det A)^2>0$ | 複數若用普通轉置不能直接說正值 |\n| 三對角遞迴 | 對角3、鄰對角1：$D_n=3D_{n-1}-D_{n-2}$，$D_0=1,D_1=3$ | 展開後識別相同結構，屬進階連結 |\n| Wronskian限制 | Wronskian某點非零可推函數線性獨立；對一般可微函數，恆為0不保證相依 | 避免把矩陣判別直接誤套所有函數 |"
                },
                {
                  "id": "LA-CH02-S02-B021",
                  "type": "summary",
                  "title": "考前摘要與錯誤檢查",
                  "markdown": "1. $A_{ij}$是矩陣；$M_{ij}$是子式；$C_{ij}=(-1)^{i+j}M_{ij}$。\n2. 展開用原元素乘同位置餘因子；零最多處通常最省計算。\n3. 轉置不變、三角矩陣乘對角；Sarrus僅三階。\n4. 異列元素與餘因子配對和為0。\n5. 函數行列式每項只微分一列；連續導數列的消去有特定原因。\n\n| 常錯 | 訂正動作 |\n|---|---|\n| 混淆子式與餘因子 | 先寫M，再另寫C的符號 |\n| 展開漏元素 | 每項固定寫成$a_{ij}C_{ij}$ |\n| 一看到左下非零就否定三角性 | 分別檢查上方、下方完整區域 |\n| 整體縮放漏次方 | 標出每列提出的因數 |\n| 微分所有元素後只取一個行列式 | 列出n個項，再逐項判斷消去 |\n\n### 自我檢查\n\n能否不用看答案解釋「Σ每項在變什麼」？能否說出子式與餘因子的差別？能否指出何時不能乘主對角？能否證明異列配對為0？正式自測使用第7節題庫，第8節作答後再開啟。"
                },
                {
                  "id": "LA-CH02-S02-B022",
                  "type": "assessment",
                  "assessmentId": "LA-CH02-S02-AS01"
                },
                {
                  "id": "LA-CH02-S02-B023",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "knowledgePointIds": [
                    "LA-CH02-S02-K01",
                    "LA-CH02-S02-K02",
                    "LA-CH02-S02-K03",
                    "LA-CH02-S02-K04",
                    "LA-CH02-S02-K05",
                    "LA-CH02-S02-K06"
                  ],
                  "prompt": "記錄錯題、出錯步驟、適用條件與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。"
                }
              ],
              "assessment": {
                "id": "LA-CH02-S02-AS01",
                "scope": "section",
                "title": "2-2 小節測驗",
                "questionIds": [
                  "LA-CH02-S02-Q201",
                  "LA-CH02-S02-Q202",
                  "LA-CH02-S02-Q203",
                  "LA-CH02-S02-Q204",
                  "LA-CH02-S02-Q205",
                  "LA-CH02-S02-Q206",
                  "LA-CH02-S02-Q207"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "la-ch02-s02-test01"
              }
            },
            {
              "id": "LA-CH02-S03",
              "title": "2-3 行列式的性質",
              "sourceSectionId": "LA-C02-S03",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得前次記載的14張原圖；完整原題、頁數及原矩陣仍待核對。本節餘因子記為 Kᵢⱼ，與前節記號不同，請先讀符號表。教材轉錄、編輯補充與自編例題分開標示；考古題候選尚未核實，不列入正式題庫。",
              "knowledgePointIds": [
                "LA-CH02-S03-K01",
                "LA-CH02-S03-K02",
                "LA-CH02-S03-K03",
                "LA-CH02-S03-K04",
                "LA-CH02-S03-K05",
                "LA-CH02-S03-K06",
                "LA-CH02-S03-K09",
                "LA-CH02-S03-K07",
                "LA-CH02-S03-K08",
                "LA-CH02-S03-K10",
                "LA-CH02-S03-K11"
              ],
              "blocks": [
                {
                  "id": "LA-CH02-S03-B-INTRO",
                  "type": "concept",
                  "title": "符號與閱讀約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "**與前節的記號對照：**2-2 的 $A_{ij}$ 表示子矩陣、$M_{ij}$ 表示子式、$C_{ij}$ 表示餘因子。本節改以 $M_{ij}$ 表示子矩陣、$K_{ij}$ 表示餘因子，請以本節符號表為準。\n\n本稿採臺灣常見用語：**列（row）為橫向，行（column）為直向**。以 $R_i$ 表第 $i$ 列、$C_j$ 表第 $j$ 行；為免與行符號混淆，餘因子另記為 $K_{ij}$。\n\n| 符號 | 意義 |\n|---|---|\n| $A=[a_{ij}]$ | 矩陣；$a_{ij}$ 在第 $i$ 列、第 $j$ 行 |\n| $n\\times n$ | 有 $n$ 列、$n$ 行的方陣 |\n| $\\det A$、$|A|$ | 方陣 $A$ 的行列式，是純量而非矩陣 |\n| $A^T$、$A^{-1}$ | 轉置、反矩陣；反矩陣只在可逆時使用 |\n| $I_n$、$0$ | $n$ 階單位矩陣、由上下文確定大小的零矩陣 |\n| $M_{ij}$ | 刪去第 $i$ 列、第 $j$ 行後所得子矩陣 |\n| $K_{ij}=(-1)^{i+j}\\det M_{ij}$ | 餘因子 cofactor；有些教材記為 $C_{ij}$ |\n| $\\sum_{j=1}^n f(j)$ | 依序把 $f(1),\\ldots,f(n)$ 相加；$j$ 是加總索引 |\n| $\\prod_{i=1}^n b_i$ | $b_1b_2\\cdots b_n$；$\\prod$ 表連乘 |\n| $\\operatorname{rank}A$ | 秩，即獨立的列／行的最大個數 |\n| $\\operatorname{adj}A$ | 古典伴隨矩陣；是餘因子矩陣的轉置 |\n| $\\ker A$ | 零空間，即滿足 $Ax=0$ 的全部向量 |\n| $\\lambda$ | 參數，或依題意表示特徵值 |\n\n預設在實數或複數上討論。需要 $2\\ne0$ 的論證，會明列「數域特徵不為 2」；這表示 $1+1\\ne0$，實數與複數皆符合。行列式的主要公式以同階方陣為前提。"
                },
                {
                  "id": "LA-CH02-S03-B001",
                  "type": "concept",
                  "title": "三類基本運算與零值",
                  "provenance": "教材整理轉述",
                  "markdown": "對任意兩個不同的列索引 $i\\ne j$：\n\n| 操作 | 新行列式 | 直向的行操作 |\n|---|---|---|\n| $R_i\\leftrightarrow R_j$ | $-\\det A$ | 同樣變號 |\n| $R_i\\leftarrow kR_i$ | $k\\det A$ | 同樣乘 $k$ |\n| $R_i\\leftarrow R_i+kR_j$ | $\\det A$ | 同樣不變 |\n\n倍乘公式允許 $k=0$，但「可逆的基本列運算／初等矩陣」要求 $k\\ne0$。交換 $s$ 次乘 $(-1)^s$。整個矩陣乘 $k$ 等於每一列都乘 $k$，所以 $\\det(kA)=k^n\\det A$。\n\n零列、零行、兩列相同或成倍數，均使行列式為 0。更一般地，列或行線性相依等價於行列式為 0。若兩列相同，交換後矩陣不變但行列式變號，故在特徵不為 2 的數域可直接推出零值；一般數域可由行列式的交替性得到同一結論。\n\n**計算策略：**先找相同、倍數、相依與可相減的列行，再用加倍數消去，最後對角線連乘；交換與倍乘必須記帳。見 E01、E02。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B002",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E01",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B003",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E02",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K01",
                    "LA-CH02-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B004",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K01"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B005",
                  "type": "concept",
                  "title": "多重線性 Multilinearity",
                  "provenance": "教材整理轉述",
                  "markdown": "其餘列固定，只將第 $i$ 列寫成 $\\alpha u+\\beta v$ 時：\n\n$$\\det(\\ldots,\\alpha u+\\beta v,\\ldots)=\\alpha\\det(\\ldots,u,\\ldots)+\\beta\\det(\\ldots,v,\\ldots).$$\n\n直向的行也成立。「分別線性」表示一次固定其餘位置；**不是對整個矩陣線性**。例如 $A=B=I_2$，$\\det(A+B)=4$，但 $\\det A+\\det B=2$。若有兩列都拆成兩項，通常產生四個行列式，交叉項不能省略。見 E03。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B006",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E03",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B007",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K02"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B008",
                  "type": "concept",
                  "title": "餘因子與錯位展開",
                  "provenance": "教材整理轉述",
                  "markdown": "沿第 $i$ 列展開：$\\det A=\\sum_{j=1}^n a_{ij}K_{ij}$。符號棋盤由左上角正號開始，依 $(-1)^{i+j}$ 決定。\n\n將第 $k$ 列換成第 $i$ 列，沿新矩陣第 $k$ 列展開。因為餘因子的子矩陣刪除了第 $k$ 列，故使用的餘因子仍是原矩陣的 $K_{kj}$。當 $i\\ne k$，新矩陣有相同列，得到：\n\n$$\\sum_{j=1}^n a_{ij}K_{kj}=\\begin{cases}\\det A&i=k,\\\\0&i\\ne k.\\end{cases}$$\n\n行版本為 $\\sum_{i=1}^n a_{ij}K_{ik}$，$j=k$ 時等於 $\\det A$，其餘為 0。\n\n因 $\\operatorname{adj}(A)=[K_{ji}]$，矩陣乘法第 $(i,k)$ 元素正好是上述和式，因此\n\n$$A\\operatorname{adj}(A)=\\operatorname{adj}(A)A=(\\det A)I.$$\n\n這個等式即使 $A$ 不可逆也成立；只有再除以 $\\det A$ 求反矩陣時才要求非零。見 E04。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B009",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E04",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B010",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K03"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B011",
                  "type": "concept",
                  "title": "轉置、乘法與反矩陣",
                  "provenance": "教材整理轉述",
                  "markdown": "$$\\det A^T=\\det A,\\qquad \\det(AB)=\\det A\\det B.$$\n\n因此 $\\det(AB)=\\det(BA)$，但不能推出 $AB=BA$。同理，任意有限個同階方陣的乘積，其行列式等於各自行列式的乘積。\n\n$$\\det(A^m)=(\\det A)^m\\quad(m\\ge0),\\qquad \\det(A^{-1})=\\frac1{\\det A}\\quad(A\\text{ 可逆}).$$\n\n後式由 $AA^{-1}=I$ 取行列式得出；對可逆矩陣，冪次公式也適用於負整數。$m=0$ 時 $A^0=I$，應理解右側為空乘積 1，避免將奇異矩陣的情況解讀為一般實數運算中的 $0^0$。\n\n**方法辨識：**題目只給 $\\det A,\\det B$，卻問轉置、反矩陣、乘積或冪的行列式時，先用公式拆解，不必求矩陣元素。見 E05。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B012",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E05",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B013",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K04"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B014",
                  "type": "concept",
                  "title": "可逆性、參數與奇數階",
                  "provenance": "教材整理轉述",
                  "markdown": "對 $n$ 階方陣，以下條件等價：\n\n$$A\\text{ 可逆}\\iff\\det A\\ne0\\iff\\operatorname{rank}A=n\\iff\\ker A=\\{0\\}.$$\n\n也等價於列、行皆線性獨立。含參數題先算 $d(t)=\\det A(t)$：解 $d(t)=0$ 得不可逆參數，其餘可逆。先前整理提到的因式 $(\\lambda-5)(\\lambda-1)(\\lambda-21)$ 的零點確為 $1,5,21$，但原矩陣尚缺，不能驗證它是否真的具有該行列式。見 E06。\n\n若 $AB=-BA$ 且 $n$ 是奇數，取行列式：\n\n$$\\det A\\det B=\\det(-BA)=(-1)^n\\det B\\det A=-\\det A\\det B.$$\n\n在特徵不為 2 的數域，得到 $\\det A\\det B=0$，所以至少一個不可逆。偶數階無法如此推出；例如 $A=\\operatorname{diag}(1,-1)$、$B=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$ 都可逆，卻有 $AB=-BA$。\n\n若 $A^T=-A$（斜對稱 skew-symmetric）且階數為奇數，同樣由 $\\det A=\\det A^T=\\det(-A)=-\\det A$ 得不可逆。見 E07。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B015",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E06",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B016",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E07",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B017",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K05"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B018",
                  "type": "concept",
                  "title": "初等矩陣 Elementary Matrix",
                  "provenance": "教材整理轉述",
                  "markdown": "對 $A$ 做橫向列運算，相當於左乘初等矩陣 $E$；直向行運算相當於右乘。三類初等矩陣的行列式分別為 $-1,k,1$，皆非零。\n\n若 $U=E_r\\cdots E_1A$ 是消去所得上三角矩陣，則\n\n$$\\det U=\\left(\\prod_{i=1}^r\\det E_i\\right)\\det A.$$\n\n要算原行列式，就把修正係數除回去；不能把消去後的對角線連乘不加修正就當原答案。上、下三角矩陣皆有 $\\det U=\\prod_i u_{ii}$。見 E02、E08。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B019",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E08",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B020",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K06"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B021",
                  "type": "concept",
                  "title": "矩陣和與乘積",
                  "provenance": "教材整理轉述",
                  "markdown": "若 $A$ 可逆，\n\n$$A+B=(I+BA^{-1})A=A(I+A^{-1}B).$$\n\n取行列式後，因 $\\det A\\ne0$，$A+B$ 可逆若且唯若 $I+BA^{-1}$ 可逆，也等價於 $I+A^{-1}B$ 可逆。\n\n對同階方陣，$AB$ 可逆若且唯若 $A,B$ 都可逆，因為 $\\det(AB)=\\det A\\det B$ 非零恰好表示兩個因子都非零。但不可逆矩陣的和可能可逆，例如 $\\operatorname{diag}(1,0)+\\operatorname{diag}(0,1)=I_2$。見 E12。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K09"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B022",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E12",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K09"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B023",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K09"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B024",
                  "type": "concept",
                  "title": "分塊三角與 Schur 補",
                  "provenance": "教材整理 · 含編輯補充",
                  "markdown": "令 $P$ 為 $p\\times p$、$S$ 為 $q\\times q$，$Q$ 為 $p\\times q$、$R$ 為 $q\\times p$。則\n\n$$\\det\\begin{bmatrix}P&Q\\\\0&S\\end{bmatrix}=\\det P\\det S,\\qquad\\det\\begin{bmatrix}P&0\\\\R&S\\end{bmatrix}=\\det P\\det S.$$\n\n$p,q$ 不必相等，$P,S$ 也不必可逆。此公式是對角「區塊」行列式的乘積，不是單純把所有對角區塊元素相乘。\n\n若 $P$ 可逆，左乘\n\n$$L=\\begin{bmatrix}I_p&0\\\\-RP^{-1}&I_q\\end{bmatrix},\\qquad\\det L=1,$$\n\n得到\n\n$$L\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\begin{bmatrix}P&Q\\\\0&S-RP^{-1}Q\\end{bmatrix}.$$\n\n因此\n\n$$\\det\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\det P\\det(S-RP^{-1}Q).$$\n\n$S-RP^{-1}Q$ 是相對於 $P$ 的 Schur 補（Schur complement）。**編輯補充：**若 $S$ 可逆，可改用 $\\det S\\det(P-QS^{-1}R)$。見 E09。\n\n若四區塊都是同階方陣，且 $PR=RP$，則有\n\n$$\\det\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\det(PS-RQ).$$\n\n先假設 $P$ 可逆，由上式及乘積公式：$\\det P\\det(S-RP^{-1}Q)=\\det(PS-PRP^{-1}Q)=\\det(PS-RQ)$。最後一步使用交換條件。\n\n**編輯補充：奇異的 $P$ 如何補足證明。**在實數或複數上，把 $P$ 換為 $P+tI$；它仍與 $R$ 可交換，且除有限多個 $t$ 外均可逆。等式兩邊都是 $t$ 的多項式，無限多個 $t$ 成立，故為恆等式，代回 $t=0$ 即得一般情形。有限數域需用形式變數的多項式論證，不能直接使用「無限多個數值」這一步。\n\n特別注意原對話的排列是 $\\begin{bmatrix}A&C\\\\B&D\\end{bmatrix}$，因此條件為 $AB=BA$，結果為 $\\det(AD-BC)$。若區塊排列改為 $\\begin{bmatrix}A&B\\\\C&D\\end{bmatrix}$，對應條件應為 $AC=CA$，結果才是 $\\det(AD-CB)$；不要只背字母順序。見 E10。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B025",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E09",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B026",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E10",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B027",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K07"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B028",
                  "type": "concept",
                  "title": "成對分塊結構",
                  "provenance": "教材整理轉述",
                  "markdown": "對任意同階方陣 $A,B$，不必假設 $AB=BA$：\n\n$$\\det\\begin{bmatrix}A&B\\\\B&A\\end{bmatrix}=\\det(A+B)\\det(A-B).$$\n\n證明：將上方區塊列加上下方區塊列，得到 $\\begin{bmatrix}A+B&A+B\\\\B&A\\end{bmatrix}$；再將右方區塊行減左方區塊行，得到 $\\begin{bmatrix}A+B&0\\\\B&A-B\\end{bmatrix}$。這些操作都可拆成普通的加倍數列／行運算，故不改行列式；最後用分塊三角公式。此證法不需要除以 2。見 E11。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K08"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B029",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E11",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K08"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B030",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K08"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B031",
                  "type": "concept",
                  "title": "Vandermonde 行列式",
                  "provenance": "教材整理 · 含編輯補充",
                  "markdown": "$$V=\\begin{bmatrix}1&x_1&\\cdots&x_1^{n-1}\\\\1&x_2&\\cdots&x_2^{n-1}\\\\\\vdots&\\vdots&&\\vdots\\\\1&x_n&\\cdots&x_n^{n-1}\\end{bmatrix},\\qquad\\det V=\\prod_{1\\le i<j\\le n}(x_j-x_i).$$\n\n下標 $i<j$ 表示每一對不同索引只取一次。例如 $n=3$ 時乘 $(x_2-x_1)(x_3-x_1)(x_3-x_2)$。公式不要求數值互異才能成立；互異是行列式非零的充要條件。\n\n**編輯補充：證明主線。**視行列式為各 $x_i$ 的多項式。令 $x_i=x_j$ 時兩列相同，所以含因子 $x_j-x_i$。全部因子的總次數為 $n(n-1)/2$，與行列式的總次數相同，故僅差常數。比較單項式 $x_2x_3^2\\cdots x_n^{n-1}$ 的係數為 1，得常數為 1。轉置不變，但任意交換兩列仍會變號。見 E13。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K10"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B032",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E13",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K10"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B033",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K10"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B034",
                  "type": "concept",
                  "title": "三對角行列式與遞迴",
                  "provenance": "教材整理 · 含編輯補充",
                  "markdown": "設 $T_n$ 主對角線皆為 $a$，上副對角線皆為 $b$，下副對角線皆為 $c$，其餘為 0。令 $D_n=\\det T_n$，並定義 $D_0=1$（空行列式），$D_1=a$。\n\n沿第一列展開，第一項是 $aD_{n-1}$；第二項符號為負，刪除第一列第二行後，其子矩陣第一行只有頂端的 $c$，再展開得 $cD_{n-2}$，所以\n\n$$D_n=aD_{n-1}-bcD_{n-2}\\quad(n\\ge2).$$\n\n注意副對角線不相等時是 $bc$，不是 $b^2$。若相同皆為 $x$、主對角線為 $y$，則是 $D_n=yD_{n-1}-x^2D_{n-2}$。\n\n對話中的遞迴 $D_n=10D_{n-1}-25D_{n-2}$、$D_1=10,D_2=75$，特徵方程 $(r-5)^2=0$。重根通解 $(u+vn)5^n$，代入得 $u=v=1$，所以 $D_n=(n+1)5^n$。\n\n**編輯補充：成大候選題的解法工具。**當 $y=x$，$D_n=x^nf_n$（$x\\ne0$ 時可用除法定義），$f_0=f_1=1$、$f_n=f_{n-1}-f_{n-2}$，依序為 $1,1,0,-1,-1,0$ 並以 6 為週期。當 $y=2x$，$D_n=(n+1)x^n$。若 $x=0$，對 $n\\ge1$ 原矩陣是零矩陣，直接得 $D_n=0$，不要在推導中除以零。見 E14。",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K11"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B035",
                  "type": "example",
                  "exampleId": "LA-CH02-S03-E14",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K11"
                  ]
                },
                {
                  "id": "LA-CH02-S03-B036",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S03-K11"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S03-B037",
                  "type": "summary",
                  "title": "考前摘要與錯誤檢查",
                  "markdown": "### 8.1 公式速查\n\n| 辨識特徵 | 優先方法／結論 |\n|---|---|\n| 零列、倍數列、線性相依 | 行列式為 0 |\n| 一次交換、單列倍乘、加倍數 | 分別乘 $-1,k,1$ |\n| 整個 $n$ 階矩陣乘 $k$ | 乘 $k^n$ |\n| 上、下三角 | 對角線連乘 |\n| 乘積、轉置、反矩陣 | $\\det AB=\\det A\\det B$；轉置不變；反矩陣取倒數 |\n| 同位／錯位餘因子展開 | $\\det A$／0 |\n| 含參數的可逆性 | 解 $\\det A(t)=0$ 找不可逆值 |\n| 分塊三角 | 對角區塊的行列式相乘 |\n| 一般分塊且 $P$ 可逆 | Schur 補 $S-RP^{-1}Q$ |\n| 成對分塊 $[A,B;B,A]$ | $\\det(A+B)\\det(A-B)$ |\n| 冪次型列 $1,x_i,x_i^2,\\ldots$ | Vandermonde 差的連乘 |\n| 三對角 | $D_n=aD_{n-1}-bcD_{n-2}$ |\n\n### 8.2 易錯表\n\n| 錯誤 | 校正 |\n|---|---|\n| 把 $\\det(A+B)$ 拆成兩個行列式相加 | 僅對固定其他列／行後的單列／行具有線性性 |\n| 列等價就代表行列式相等 | 只保證秩相同；交換、倍乘可能改值 |\n| $\\det AB=\\det BA$ 就認為矩陣可交換 | 純量相等不表示矩陣相等 |\n| 分塊矩陣直接套 $ad-bc$ | 檢查區塊階數、排列與交換條件 |\n| 先寫 $P^{-1}$ 再看是否存在 | 必須先確認 $P$ 可逆 |\n| $\\det(-A)=-\\det A$ 不問階數 | 正確為 $(-1)^n\\det A$ |\n| 三對角遞迴第二項用加號 | 餘因子符號使它是 $-bc$ |\n| 重根遞迴只保留一個常數 | 二重根用 $(u+vn)r^n$ |\n\n### 8.3 自我檢核（無新增題目 ID，作為複習提示）\n\n能否口述三種運算的差別？能否不計算矩陣元素求乘積行列式？能否解釋錯位和式為何是 0？能否寫出 Schur 補的消去矩陣？能否辨認分塊公式需不需要交換條件？能否由三對角形狀建立遞迴而不是只背閉式？"
                },
                {
                  "id": "LA-CH02-S03-B038",
                  "type": "assessment",
                  "assessmentId": "LA-CH02-S03-AS01"
                },
                {
                  "id": "LA-CH02-S03-B039",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "knowledgePointIds": [
                    "LA-CH02-S03-K01",
                    "LA-CH02-S03-K02",
                    "LA-CH02-S03-K03",
                    "LA-CH02-S03-K04",
                    "LA-CH02-S03-K05",
                    "LA-CH02-S03-K06",
                    "LA-CH02-S03-K09",
                    "LA-CH02-S03-K07",
                    "LA-CH02-S03-K08",
                    "LA-CH02-S03-K10",
                    "LA-CH02-S03-K11"
                  ],
                  "prompt": "記錄錯題、出錯步驟、適用條件與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。"
                }
              ],
              "assessment": {
                "id": "LA-CH02-S03-AS01",
                "scope": "section",
                "title": "2-3 小節測驗",
                "questionIds": [
                  "LA-CH02-S03-Q01",
                  "LA-CH02-S03-Q02",
                  "LA-CH02-S03-Q03",
                  "LA-CH02-S03-Q04",
                  "LA-CH02-S03-Q05",
                  "LA-CH02-S03-H01",
                  "LA-CH02-S03-H02"
                ],
                "totalPoints": 40,
                "scoringNote": "選擇題各 4 分，手寫題各 10 分，共 40 分；手寫對照詳解自評。",
                "sourceId": "LA-C02-S03-A01"
              }
            },
            {
              "id": "LA-CH02-S04",
              "title": "2-4 古典伴隨矩陣與克拉瑪法則",
              "sourceSectionId": "la-ch02-s04",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得七張原圖；例23、例7的矩陣依文字轉述，原例號待核。原例28缺少矩陣未重建，另以自編例題練習。前文標成不可逆的矩陣已更正，其行列式為 −94，實際可逆。教材轉錄、編輯補充與自編例題分開標示；考古題候選尚未核實，不列入正式題庫。",
              "knowledgePointIds": [
                "LA-CH02-S04-K01",
                "LA-CH02-S04-K02",
                "LA-CH02-S04-K03",
                "LA-CH02-S04-K04",
                "LA-CH02-S04-K05",
                "LA-CH02-S04-K06",
                "LA-CH02-S04-K07",
                "LA-CH02-S04-K08"
              ],
              "blocks": [
                {
                  "id": "LA-CH02-S04-B-INTRO",
                  "type": "concept",
                  "title": "符號與閱讀約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "本稿採臺灣教材用語：列 row（橫向）、行 column（直向），首次出現並附英文，避免與其他地區用語混淆。\n\n本節以 $M_{ij}$ 表示子行列式（純量）、$C_{ij}$ 表示餘因子；前節的餘因子 $K_{ij}$ 在此對應為 $C_{ij}$。"
                },
                {
                  "id": "LA-CH02-S04-B001",
                  "type": "concept",
                  "title": "從餘因子建立伴隨矩陣",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "設 $A=[a_{ij}]$ 為 $n\\times n$ 方陣；$a_{ij}$ 表示第 $i$ 列、第 $j$ 行元素。$A^T$ 是轉置（transpose），將列、行交換。刪除第 $i$ 列、第 $j$ 行後，剩餘矩陣的行列式為子行列式（minor）$M_{ij}$。餘因子（cofactor）定義為\n\n$$C_{ij}=(-1)^{i+j}M_{ij}.$$\n\n正負號由 $i+j$ 的奇偶決定：偶數為正、奇數為負。三階符號依序為第一列 $+,-,+$；第二列 $-,+,-$；第三列 $+,-,+$。\n\n古典伴隨矩陣（classical adjugate）是餘因子矩陣的轉置：\n\n$$\\operatorname{adj}(A)=[C_{ij}]^T=[C_{ji}].$$\n\n第 $(i,j)$ 位置應放 $C_{ji}$，不能只把所有餘因子原位排好就停止。它與複數矩陣的共軛轉置（常記 $A^*$）是不同運算。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B002",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E01",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K01"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K01"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B004",
                  "type": "concept",
                  "title": "核心恆等式",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "$I_n$ 表示對角為1、其他為0的單位矩陣；$\\det(A)$ 表示行列式。對所有方陣均有\n\n$$A\\operatorname{adj}(A)=\\operatorname{adj}(A)A=\\det(A)I_n.$$\n\n證明第一個乘積：矩陣乘法第 $(i,j)$ 項為\n\n$$[A\\operatorname{adj}(A)]_{ij}=\\sum_{k=1}^{n}a_{ik}C_{jk}.$$\n\n$\\sum$（sigma）代表把 $k=1,2,\\ldots,n$ 的項逐項相加；例如三階時就是 $a_{i1}C_{j1}+a_{i2}C_{j2}+a_{i3}C_{j3}$。\n\n若 $i=j$，正好是沿第 $i$ 列的餘因子展開，等於 $\\det(A)$。若 $i\\ne j$，把 $A$ 的第 $j$ 列改成原第 $i$ 列；刪除第 $j$ 列所得子行列式不變，故上述和式就是新矩陣沿第 $j$ 列的展開。新矩陣有兩列相同，行列式為0。這證明乘積對角為 $\\det(A)$，其餘為0。右乘的等式同理由行（column）展開證明。\n\n此處沒有除法，因此 $\\det(A)=0$ 時依然成立，乘積為零矩陣。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B005",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E02",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K02"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K02"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B007",
                  "type": "concept",
                  "title": "反矩陣公式",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "若且唯若 $\\det(A)\\ne0$，矩陣可逆（invertible），此時核心式可除以非零純量：\n\n$$A^{-1}=\\frac{\\operatorname{adj}(A)}{\\det(A)}.$$\n\n操作：先算行列式判斷可逆，再算餘因子、轉置、除以行列式。對二階矩陣有\n\n$$A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix},\\quad \\operatorname{adj}(A)=\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}.$$\n\n「對角交換，非對角變號」只適用二階；不可直接套在三階。行列式為零時伴隨仍有定義，反矩陣沒有定義。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B008",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E03",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K03"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B009",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K03"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B010",
                  "type": "concept",
                  "title": "性質與適用條件",
                  "provenance": "教材整理 · 含補充延伸",
                  "markdown": "以下 $n\\ge2$，$A,B$ 為同階方陣。\n\n| 性質 | 公式 | 限制 |\n|---|---|---|\n| 行列式 | $\\det(\\operatorname{adj}A)=\\det(A)^{n-1}$ | 可含奇異矩陣 |\n| 轉置 | $\\operatorname{adj}(A^T)=\\operatorname{adj}(A)^T$ | 無可逆要求 |\n| 乘積 | $\\operatorname{adj}(AB)=\\operatorname{adj}(B)\\operatorname{adj}(A)$ | 順序反轉，無可逆要求 |\n| 純量（補充） | $\\operatorname{adj}(cA)=c^{n-1}\\operatorname{adj}(A)$ | 每個餘因子為 $n-1$ 階行列式 |\n| 可逆等價 | $A$ 可逆 $\\iff\\operatorname{adj}(A)$ 可逆 | $n\\ge2$ |\n\n可逆時對核心式取行列式：$\\det(A)\\det(\\operatorname{adj}A)=\\det(A)^n$，約去非零的 $\\det(A)$ 即得公式。若奇異，不能約分：當秩不超過 $n-2$，全部 $n-1$ 階子行列式為0；當秩等於 $n-1$，由核心式知伴隨的每個行向量都在一維零空間中，故伴隨的秩至多1。兩種情況的伴隨皆奇異（$n\\ge2$），行列式為0。\n\n轉置性質由子行列式轉置不改行列式可得。若兩矩陣可逆，乘積性質由\n\n$$\\operatorname{adj}(AB)=\\det(A)\\det(B)B^{-1}A^{-1}$$\n\n依序分組而得。對奇異情況，兩側的每一元素都是矩陣元素的多項式；在實數或複數域，可用可逆矩陣逼近，再由多項式連續性得到同一恆等式。以上將「可逆時的推導」與「奇異時的補充論證」分開，不以反矩陣代替不存在的運算。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B011",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E04",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K04"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B012",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K04"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B013",
                  "type": "concept",
                  "title": "逆矩陣與重複伴隨",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "可逆時 $\\operatorname{adj}(A)=\\det(A)A^{-1}$，因此\n\n$$\\operatorname{adj}(A^{-1})=\\det(A)^{-1}A=\\operatorname{adj}(A)^{-1}.$$\n\n再次取伴隨，利用純量公式與前式：\n\n$$\\operatorname{adj}(\\operatorname{adj}(A))=\\det(A)^{n-1}\\operatorname{adj}(A^{-1})=\\det(A)^{n-2}A.$$\n\n$n\\ge2$ 時此式亦可透過多項式恆等式延伸到奇異矩陣。特別是 $n=2$，直接有 $\\operatorname{adj}(\\operatorname{adj}A)=A$，不需要在 $\\det(A)=0$ 時討論 $0^0$。\n\n若已知 $B=\\operatorname{adj}(A)$ 且 $B$ 可逆，則先由 $\\det B=\\det(A)^{n-1}$ 求出可能的 $\\det A$，再由 $A=\\det(A)B^{-1}$ 還原。實數域中，$n=4$ 的次方是3，實立方根唯一；$n=3$ 的次方是2，可能存在正負兩種，不能默認唯一。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B014",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E05",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K05"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B015",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K05"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B016",
                  "type": "concept",
                  "title": "不可逆時，伴隨不一定為零",
                  "provenance": "教材整理 · 含補充延伸",
                  "markdown": "例如 $A=\\operatorname{diag}(1,0)$，$\\operatorname{diag}$ 表示只把所列數字放在主對角，其餘為0。此時 $\\operatorname{adj}(A)=\\operatorname{diag}(0,1)\\ne0$，但兩者均不可逆。\n\n**額外補充：秩分類。** 秩（rank）是線性獨立行向量數目的最大值；$\\ker A=\\{x:Ax=0\\}$ 為零空間。\n\n| $\\operatorname{rank}A$ | $\\operatorname{rank}(\\operatorname{adj}A)$ | 原因 |\n|---|---:|---|\n| $n$ | $n$ | 伴隨可逆 |\n| $n-1$ | 1 | 至少一個 $n-1$ 階子行列式非零；各行向量皆落在一維零空間 |\n| $\\le n-2$ | 0 | 所有 $n-1$ 階子行列式皆為0 |\n\n此分類假設 $n\\ge2$。延伸理解：秩為 $n-1$ 時，伴隨的非零行向量提供 $Ax=0$ 的解方向。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B017",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E06",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K06"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B018",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K06"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B019",
                  "type": "concept",
                  "title": "克拉瑪法則（Cramer's rule）",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "考慮方形方程組 $Ax=b$，$a_i$ 表示 $A$ 的第 $i$ 行（column），所以\n\n$$A=[a_1\\ \\cdots\\ a_n],\\quad b=x_1a_1+\\cdots+x_na_n.$$\n\n令 $\\Delta=\\det A$；$A_i(b)$ 表示將第 $i$ 行整行替換成 $b$，其餘行不變；$\\Delta_i=\\det A_i(b)$。若 $\\Delta\\ne0$，唯一解為\n\n$$x_i=\\frac{\\Delta_i}{\\Delta}.$$\n\n推導：將第 $i$ 行的 $b$ 展為上面的線性組合；行列式對這一行線性，所以分成 $n$ 項。來自 $a_k$ 且 $k\\ne i$ 的項會與原第 $k$ 行重複，行列式為0；只有 $x_i a_i$ 一項留下，得到 $\\Delta_i=x_i\\Delta$，再除以非零 $\\Delta$。\n\n若 $\\Delta=0$，不能使用比值。若有某個 $\\Delta_i\\ne0$，由「任何解皆須滿足 $\\Delta_i=x_i\\Delta$」可知無解；但所有 $\\Delta_i=0$ 並不足以保證相容，仍須消去法。例：$A=0_{2\\times2}$、$b=(1,0)^T$，所有替換行列式都是0，系統仍無解。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K07"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B020",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E07",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K07"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B021",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K07"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B022",
                  "type": "concept",
                  "title": "參數方程組",
                  "provenance": "教材整理 · 含補充延伸",
                  "markdown": "先找 $\\det A=0$ 的參數值；非奇異區用克拉瑪法則或消去法求唯一解；各奇異值必須代回原方程。\n\n**補充判斷工具：** 增廣矩陣 $[A\\mid b]$ 是將 $b$ 接在係數矩陣右側。若 $\\operatorname{rank}A<\\operatorname{rank}[A\\mid b]$，無解；若兩者秩相同且小於未知數個數，在實數域有無限多解。\n\n消去／約分後的公式可能可在奇異點算出某個解，但不代表該點有唯一解。前文的「不可直接代入」應精確理解為「不可用代入後的值宣稱唯一解」。",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K08"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B023",
                  "type": "example",
                  "exampleId": "LA-CH02-S04-E08",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K08"
                  ]
                },
                {
                  "id": "LA-CH02-S04-B024",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH02-S04-K08"
                  ],
                  "prompt": "對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。"
                },
                {
                  "id": "LA-CH02-S04-B025",
                  "type": "summary",
                  "title": "考前摘要與錯誤檢查",
                  "markdown": "- 伴隨等於餘因子矩陣轉置；不是直接轉置原矩陣。\n- 核心式所有方陣都成立；求逆與克拉瑪比值需要行列式非零。\n- $\\det(\\operatorname{adj}A)$ 的次方是 $n-1$；重複伴隨的次方是 $n-2$。\n- 乘積伴隨順序反轉；二階速算法不能套三階。\n- 奇異不等於伴隨為零；參數分式約分不能保證奇異點唯一解。\n- 克拉瑪替換 column；所有替換行列式為零不保證有解。\n\n### 自我檢核\n\n能否不用背誦解釋轉置？能否用三項相加解讀 $\\Sigma$？能否證明非對角項為0？能否說明分母為0後要做什麼？請先作答A01，再檢視答案區。"
                },
                {
                  "id": "LA-CH02-S04-B026",
                  "type": "assessment",
                  "assessmentId": "LA-CH02-S04-AS01"
                },
                {
                  "id": "LA-CH02-S04-B027",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "knowledgePointIds": [
                    "LA-CH02-S04-K01",
                    "LA-CH02-S04-K02",
                    "LA-CH02-S04-K03",
                    "LA-CH02-S04-K04",
                    "LA-CH02-S04-K05",
                    "LA-CH02-S04-K06",
                    "LA-CH02-S04-K07",
                    "LA-CH02-S04-K08"
                  ],
                  "prompt": "記錄錯題、出錯步驟、適用條件與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。"
                }
              ],
              "assessment": {
                "id": "LA-CH02-S04-AS01",
                "scope": "section",
                "title": "2-4 小節測驗",
                "questionIds": [
                  "LA-CH02-S04-Q01",
                  "LA-CH02-S04-Q02",
                  "LA-CH02-S04-Q03",
                  "LA-CH02-S04-Q04",
                  "LA-CH02-S04-Q05",
                  "LA-CH02-S04-Q06",
                  "LA-CH02-S04-Q07"
                ],
                "totalPoints": 100,
                "scoringNote": "選擇題各 8 分，手寫題各 30 分，共 100 分；手寫對照詳解自評。",
                "sourceId": "la-ch02-s04-A01"
              }
            }
          ]
        },
        {
          "id": "LA-CH03",
          "title": "第 3 章 向量空間",
          "titleStatus": "章名與教材完整性待原目錄核對",
          "pendingSections": [
            {
              "number": "3-4",
              "title": "基底與維度",
              "status": "awaiting_material"
            }
          ],
          "coverageNote": "3-4「基底與維度」教材待提供，未計入閱讀進度。大章完整性與綜合測驗仍待確認。",
          "curriculumComplete": false,
          "sections": [
            {
              "id": "LA-CH03-S01",
              "title": "3-1 向量空間",
              "sourceSectionId": "la-s03-01",
              "contentVersion": "0.1.0",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得原始五張教材圖片，考古題僅有候選摘要。原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。",
              "knowledgePointIds": [
                "LA-CH03-S01-K01",
                "LA-CH03-S01-K02",
                "LA-CH03-S01-K03",
                "LA-CH03-S01-K04",
                "LA-CH03-S01-K05",
                "LA-CH03-S01-K06",
                "LA-CH03-S01-K07",
                "LA-CH03-S01-K08",
                "LA-CH03-S01-K09"
              ],
              "blocks": [
                {
                  "id": "LA-CH03-S01-B-INTRO",
                  "type": "concept",
                  "title": "學習目標與符號約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "讀完後應能說明向量、純量、零向量的不同；完整寫出公設；用具體反例否定向量空間；辨識特殊運算中的零向量與反元素；依公設完成基本證明。"
                },
                {
                  "id": "LA-CH03-S01-B001",
                  "type": "concept",
                  "title": "集合、體與兩種運算",
                  "markdown": "設 $V$ 為非空集合，$F$ 為體（field）。指定向量加法 $V\\times V\\to V$ 及純量乘法 $F\\times V\\to V$，滿足公設時，稱 $V$ 為「在 $F$ 上的向量空間」。\n\n| 記號 | 意義 | 注意 |\n|---|---|---|\n| $v\\in V$ | $v$ 是集合 $V$ 的一個元素，即向量 | 可以是矩陣、多項式、函數 |\n| $\\alpha\\in F$ | $\\alpha$ 是純量（scalar） | 通常取 $\\mathbb R$ 或 $\\mathbb C$ |\n| $V\\times V$ | 所有有序對 $(u,v)$ 的集合 | 加法取兩個向量作輸入 |\n| $F\\times V$ | 所有 $(\\alpha,v)$ 的集合 | 純量乘法取一純量、一向量 |\n| $0_F,1_F$ | 體的加法零與乘法一 | 都是純量 |\n| $0_V$ | 向量加法的單位元素 | 是向量，不必是數字零 |\n| $-v$ | $v$ 的加法反元素 | 依指定向量加法決定 |\n| $\\in,\\subseteq$ | 屬於、包含於 | 元素屬於集合；集合包含於集合 |\n\n體中的加減乘除遵守通常代數規則，且每個非零元素有乘法反元素。$\\mathbb Z$ 不是體：$2$ 的倒數 $1/2$ 不在其中。本節定義不把以整數為純量的結構稱為向量空間。\n\n同一集合在不同純量體上可能都是向量空間。例如 $\\mathbb C$ 可在 $\\mathbb R$ 或 $\\mathbb C$ 上討論；必須指明純量範圍。此處先不使用後續章節的維度概念。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B002",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E01",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B004",
                  "type": "concept",
                  "title": "十項公設與兩個分配律",
                  "markdown": "對每個 $u,v,w\\in V$ 與每個 $\\alpha,\\beta\\in F$ 都必須成立：\n\n| 編號 | 公設 | 條件 |\n|---|---|---|\n| A1 | 加法封閉 | $u+v\\in V$ |\n| A2 | 純量乘法封閉 | $\\alpha v\\in V$ |\n| A3 | 加法交換 | $u+v=v+u$ |\n| A4 | 加法結合 | $(u+v)+w=u+(v+w)$ |\n| A5 | 加法單位元素 | 存在 $0_V\\in V$，使 $u+0_V=0_V+u=u$ |\n| A6 | 加法反元素 | 每個 $u$ 有 $-u\\in V$，使 $u+(-u)=(-u)+u=0_V$ |\n| A7 | 對向量加法分配 | $\\alpha(u+v)=\\alpha u+\\alpha v$ |\n| A8 | 對純量加法分配 | $(\\alpha+\\beta)v=\\alpha v+\\beta v$ |\n| A9 | 純量乘法結合 | $(\\alpha\\beta)v=\\alpha(\\beta v)$ |\n| A10 | 純量一的作用 | $1_Fv=v$ |\n\n有些書把兩項封閉性包含在「運算為映射」的定義內，因而只列八項；本稿依教材採十項，並非不同數學結構。\n\nA7 括號內加的是向量；A8 括號內加的是純量。A9 不是向量間的乘法，向量空間並不要求一般向量乘法。\n\n**判斷量詞：**證明成立要處理「任意」元素；否定只需找出「一組」元素使某條件失敗。檢查兩三個數值不能證明全部公設成立。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B005",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E02",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B007",
                  "type": "concept",
                  "title": "零乘法、負號、消去律與零積推論",
                  "markdown": "以下是推論，不是新增公設。為避免循環論證，先建立消去的合法性，再使用它。\n\n### 3.1 加法消去律\n\n若 $u+w=v+w$，兩邊加上 $w$ 的反元素 $-w$：\n\n$$\n(u+w)+(-w)=(v+w)+(-w)\n\\Rightarrow u+(w+(-w))=v+(w+(-w))\n\\Rightarrow u+0_V=v+0_V\n\\Rightarrow u=v.\n$$\n\n依次使用：同加一元素、A4、A6、A5。左側消去可由 A3 轉成相同形式。\n\n### 3.2 $0_Fv=0_V$\n\n$$\n0_Fv=(0_F+0_F)v=0_Fv+0_Fv.\n$$\n\n第一步用體的 $0_F+0_F=0_F$，第二步用 A8。將左側寫成 $0_V+0_Fv$，由 A5 與消去律可得 $0_V=0_Fv$。\n\n### 3.3 $\\alpha0_V=0_V$\n\n由 $0_V+0_V=0_V$ 及 A7，\n\n$$\n\\alpha0_V=\\alpha(0_V+0_V)=\\alpha0_V+\\alpha0_V.\n$$\n\n與上一步同樣消去 $\\alpha0_V$，得到結論。\n\n### 3.4 負純量與反向量\n\n先看\n\n$$\nv+(-1_F)v=1_Fv+(-1_F)v=(1_F-1_F)v=0_Fv=0_V.\n$$\n\n依次用 A10、A8 與前述零乘法，所以 $(-1_F)v$ 是 $v$ 的反元素，即 $(-1_F)v=-v$。反元素唯一：若 $v+a=v+b=0_V$，由消去律得 $a=b$。\n\n再由 A9 與體的乘法規則：\n\n$$\n\\alpha(-v)=\\alpha((-1_F)v)=(\\alpha(-1_F))v=(-\\alpha)v.\n$$\n\n又因 $\\alpha v+(-\\alpha)v=(\\alpha-\\alpha)v=0_V$，故\n\n$$(-\\alpha)v=\\alpha(-v)=-(\\alpha v).$$\n\n### 3.5 若 $\\alpha v=0_V$，則 $\\alpha=0_F$ 或 $v=0_V$\n\n若 $\\alpha=0_F$，結論已成立。若 $\\alpha\\ne0_F$，因 $F$ 是體，存在 $\\alpha^{-1}$，並且\n\n$$\nv=1_Fv=(\\alpha^{-1}\\alpha)v\n=\\alpha^{-1}(\\alpha v)=\\alpha^{-1}0_V=0_V.\n$$\n\n依次使用 A10、體的反元素、A9、已知條件、3.3。這裡是「純量乘向量」的零積性質，不能直接套成矩陣乘法的零積律。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B008",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E03",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B009",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B010",
                  "type": "concept",
                  "title": "座標及固定尺寸矩陣空間",
                  "markdown": "### 座標空間 $F^n$\n\n$F^n=\\{(x_1,\\ldots,x_n):x_i\\in F\\}$，其中 $n$ 是固定正整數，$i$ 是座標編號。運算逐座標進行：\n\n$$\n(x_1,\\ldots,x_n)+(y_1,\\ldots,y_n)=(x_1+y_1,\\ldots,x_n+y_n),\n\\qquad \\alpha(x_1,\\ldots,x_n)=(\\alpha x_1,\\ldots,\\alpha x_n).\n$$\n\n零向量為 $(0,\\ldots,0)$，反向量為 $(-x_1,\\ldots,-x_n)$。每個座標都在體內運算，因此公設由體的對應規則逐座標成立。\n\n### 固定尺寸矩陣空間 $F^{m\\times n}$\n\n$m,n$ 分別為固定列數與行數，採台灣教材常見的「橫列、直行」用語。矩陣 $A=[a_{ij}]$ 的 $i$ 是列編號、$j$ 是行編號。\n\n$$\n[A+B]_{ij}=a_{ij}+b_{ij},\\qquad[\\alpha A]_{ij}=\\alpha a_{ij}.\n$$\n\n零向量為 $m\\times n$ 零矩陣，反向量為 $-A=[-a_{ij}]$。必須固定尺寸；任意不同尺寸矩陣混在一起，一般不能定義通常加法。矩陣空間成立不依賴矩陣乘法，也不要求矩陣可逆。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B011",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E04",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B012",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B013",
                  "type": "concept",
                  "title": "多項式與函數空間",
                  "markdown": "### 多項式空間 $P(F)$ 與 $P_n(F)$\n\n$P(F)$ 是所有係數在 $F$ 的有限次多項式。一般式\n\n$$p(x)=\\sum_{i=0}^{n}a_ix^i=a_0+a_1x+\\cdots+a_nx^n.$$\n\n$\\sum$（Sigma）表示逐項相加；下限 $i=0$ 表示從常數項開始，上限 $n$ 表示加到 $a_nx^n$；$a_i$ 為第 $i$ 次項係數，$x^0=1$。不同多項式可有不同最高次數，加法時缺少的係數補零。\n\n採通常多項式加法、純量乘法，零向量為零多項式。\n\n$$P_n(F)=\\{a_0+a_1x+\\cdots+a_nx^n:a_i\\in F\\}.$$\n\n此表示自然包含零多項式，避免必須替零多項式指定次數。$P_n(F)$ 的次數「至多 $n$」，不是「恰好 $n$」。恰好 $n$ 次的集合不包含零多項式，且 $p+(-p)=0$ 離開集合；乘純量零也會離開。\n\n### 函數空間 $F^D$ 與連續函數\n\n$F^D=\\{f:D\\to F\\}$，其中 $D$ 是共同定義域。$f:D\\to F$ 表示函數把 $D$ 中每個輸入送到 $F$ 中一個值。運算逐點定義：\n\n$$(f+g)(x)=f(x)+g(x),\\qquad(\\alpha f)(x)=\\alpha f(x).$$\n\n對所有 $x\\in D$ 都成立才是函數相等。零向量為零函數 $z(x)=0$，反元素為 $(-f)(x)=-f(x)$。\n\n連續實函數集合 $C([a,b],\\mathbb R)$ 也構成實向量空間：兩連續函數相加與乘任意實常數仍連續；零函數連續，其餘等式由逐點運算繼承。\n\n| 空間 | 向量例子 | 零向量 | 加法反元素 |\n|---|---|---|---|\n| $F^n$ | $(x_1,\\ldots,x_n)$ | $(0,\\ldots,0)$ | 各座標取負 |\n| $F^{m\\times n}$ | $[a_{ij}]$ | 固定尺寸零矩陣 | $[-a_{ij}]$ |\n| $P(F)$ | $p(x)$ | 零多項式 | $-p(x)$ |\n| $F^D$ | $f$ | 恆等於零的函數 | 逐點取負 |",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B014",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E05",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B015",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E06",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B016",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B017",
                  "type": "concept",
                  "title": "位移、向量加減與幾何表示",
                  "markdown": "點 $P=(p_1,p_2)$ 到 $Q=(q_1,q_2)$ 的位移向量為\n\n$$\\overrightarrow{PQ}=Q-P=(q_1-p_1,q_2-p_2).$$\n\n例：$P=(1,-2)$、$Q=(4,0)$，得到 $(3,2)$。從原點到 $(3,2)$ 的箭頭也代表同一位移；自由向量可以平移表示。\n\n加法採首尾相接：先走 $u$，再走 $v$，總位移為 $u+v$；也可用平行四邊形法。減法 $u-v=u+(-v)$；將兩箭頭放在同一起點時，由 $v$ 的終點指向 $u$ 的終點得到 $u-v$。\n\n純量 $\\alpha>0$ 保持方向，$\\alpha<0$ 反向，長度變成原來的 $|\\alpha|$ 倍；$\\alpha=0$ 得零向量。這是通常實座標空間的圖像，不是所有抽象向量空間的定義。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B018",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E07",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B019",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B020",
                  "type": "concept",
                  "title": "正實數的特殊向量運算",
                  "markdown": "令 $V=\\mathbb R_{>0}=\\{x\\in\\mathbb R:x>0\\}$，純量體為 $\\mathbb R$，定義\n\n$$x\\oplus y=xy,\\qquad\\alpha\\odot x=x^\\alpha.$$\n\n$\\oplus$ 表示本題指定的向量加法，$\\odot$ 表示本題指定的純量乘法；等號右側使用通常數字乘法、次方。正實底數的實數次方可由 $x^\\alpha=\\exp(\\alpha\\ln x)$ 定義。\n\n### 十項公設驗證\n\n| 公設 | 驗證 |\n|---|---|\n| A1 | $x,y>0\\Rightarrow xy>0$ |\n| A2 | $x>0,\\alpha\\in\\mathbb R\\Rightarrow x^\\alpha>0$ |\n| A3 | $xy=yx$ |\n| A4 | $(xy)z=x(yz)$ |\n| A5 | 零向量 $0_V=1$，因為 $x\\oplus1=x\\cdot1=x$ |\n| A6 | $x$ 的反元素為 $1/x>0$，因為 $x\\oplus(1/x)=1=0_V$ |\n| A7 | $(xy)^\\alpha=x^\\alpha y^\\alpha=(\\alpha\\odot x)\\oplus(\\alpha\\odot y)$ |\n| A8 | $x^{\\alpha+\\beta}=x^\\alpha x^\\beta=(\\alpha\\odot x)\\oplus(\\beta\\odot x)$ |\n| A9 | $x^{\\alpha\\beta}=(x^\\beta)^\\alpha$ |\n| A10 | $1\\odot x=x^1=x$ |\n\n所以它是實向量空間。$0_F\\odot x=x^0=1=0_V$，並沒有違反零乘法性質。\n\n**提醒：**這個空間的「向量相減」為 $x\\oplus(1/y)=x/y$，不是通常的 $x-y$。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B021",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E08",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B022",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B023",
                  "type": "concept",
                  "title": "非向量空間與反例寫法",
                  "markdown": "### 7.1 五種典型反例\n\n| 集合與運算 | 具體失敗證據 | 對應條件 |\n|---|---|---|\n| $\\mathbb R$，$u\\oplus v=u-v$，通常純量乘法 | $2\\oplus3=-1\\ne1=3\\oplus2$ | A3 交換律 |\n| $S=\\{(1,x):x\\in\\mathbb R\\}$，通常運算 | $(1,0)+(1,0)=(2,0)\\notin S$ | A1 封閉性 |\n| $\\mathbb R^2$，通常加法，$\\alpha\\odot(x,y)=(\\alpha x,y)$ | 取 $v=(0,1)$，$(1+1)\\odot v=(0,1)$，但 $(1\\odot v)+(1\\odot v)=(0,2)$ | A8 純量分配律 |\n| $\\mathbb R^2$，通常運算，以 $\\mathbb Z$ 當純量 | $\\mathbb Z$ 中非零元素 $2$ 沒有乘法反元素 | 純量集合不是體 |\n| $\\mathbb R$，$x\\oplus y=\\min(x,y)$，通常純量乘法 | 若有單位 $e$，取 $x=e+1$，則 $\\min(x,e)=e\\ne x$ | A5 不存在 |\n\n第三例也可用必要推論 $0_Fv=0_V$ 找矛盾，但若要求指明公設，應直接列出 A8 兩側不等。\n\n### 7.2 通常運算與特殊運算的不同策略\n\n- 通常運算的集合：先檢查是否包含通常零向量，再看加法、純量乘法是否封閉。\n- 若已知是某個向量空間的子集合且沿用運算，可用子空間判別法簡化；這是後續 3-2 的概念，本節先當補充，不當成未證定理直接取代所有公設。\n- 特殊運算：先由 $v\\oplus e=v$ 找單位元素，不可直接假設為通常零；再找反元素、檢查 $1\\odot v$ 及兩個分配律。\n- 特別代入 $0,1,-1$ 有助找反例；全部通過仍不等於證明成立。\n\n### 7.3 考卷上的反例模板\n\n「取……，則……，但……，故不滿足……公設，因此不是在指定體上的向量空間。」\n\n若是運算不封閉，務必寫清楚運算前元素屬於集合，運算後結果為何不屬於集合。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B024",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E09",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B025",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B026",
                  "type": "concept",
                  "title": "補充：平移運算與標準證明格式",
                  "markdown": "### 8.1 零向量唯一\n\n若 $e,f$ 都是加法單位元素，由 $e+f=f$（$e$ 的單位性）與 $e+f=e$（$f$ 的單位性），得 $e=f$。\n\n### 8.2 平移後的運算\n\n取固定 $a\\in\\mathbb R$，在 $\\mathbb R$ 定義\n\n$$u\\oplus v=u+v-a,\\qquad\\alpha\\odot u=a+\\alpha(u-a).$$\n\n其零向量為 $a$，反元素為 $2a-u$。映射 $T(u)=u-a$ 是到通常 $\\mathbb R$ 的雙射，且\n\n$$T(u\\oplus v)=T(u)+T(v),\\qquad T(\\alpha\\odot u)=\\alpha T(u).$$\n\n因此可將公設轉成通常實數空間的公設。這是「用一一對應搬運運算」的例子；若考試尚未引入同構，仍可逐項直接代入驗證。\n\n正實數例子也有 $T(x)=\\ln x$，因為 $\\ln(xy)=\\ln x+\\ln y$、$\\ln(x^\\alpha)=\\alpha\\ln x$。此觀點幫助理解，不取代教材要求的公設證明。",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B027",
                  "type": "example",
                  "exampleId": "LA-CH03-S01-E10",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B028",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S01-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S01-B029",
                  "type": "summary",
                  "title": "考前摘要與自我檢核",
                  "markdown": "### 14.1 考前摘要\n\n1. 向量空間要一起看：集合 $V$、體 $F$、加法、純量乘法。\n2. 所有公設均須對任意合法輸入成立；反駁只要一組具體反例。\n3. 普通零與零向量角色不同；特殊運算先解 $v\\oplus e=v$。\n4. A7：純量乘「向量之和」；A8：「純量之和」乘向量。\n5. $0_Fv=0_V$、$\\alpha0_V=0_V$、$(-1_F)v=-v$ 都是公設的推論。\n6. 非零純量可消去；零純量不能一般消去。\n7. 矩陣空間固定尺寸；多項式「至多」與「恰好」不能混淆；函數等式逐點成立。\n8. 正實數特殊空間：加法是乘法，純量乘法是次方，零向量是 $1$，反元素是倒數。\n9. 不要將純量乘向量的零積性質套到矩陣乘積。\n\n### 14.2 空白錯題紀錄模板\n\n此表只有預設欄位，未保存任何使用者實際學習資料。\n\n| 題目 ID | 我誤判的公設或符號 | 正確辨識線索 | 重寫的關鍵一步 | 下次複習日期 |\n|---|---|---|---|---|\n|  |  |  |  |  |\n|  |  |  |  |  |\n|  |  |  |  |  |\n\n### 14.3 複習用法\n\n先遮住第 12、13 節，完成例題與測驗；再用第 13 節評分。錯在符號者回讀第 2 節；錯在推導者回讀第 3 節；錯在特殊零向量者回讀第 6 節。實際作答與手寫內容應由系統另存，不寫回課程資料。",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH03-S01-B030",
                  "type": "assessment",
                  "assessmentId": "LA-CH03-S01-AS01",
                  "knowledgePointIds": []
                }
              ],
              "assessment": {
                "id": "LA-CH03-S01-AS01",
                "scope": "section",
                "title": "3-1 小節測驗",
                "questionIds": [
                  "LA-CH03-S01-Q01",
                  "LA-CH03-S01-Q02",
                  "LA-CH03-S01-Q03",
                  "LA-CH03-S01-Q04",
                  "LA-CH03-S01-Q05",
                  "LA-CH03-S01-Q06",
                  "LA-CH03-S01-Q07"
                ],
                "totalPoints": 40,
                "scoringNote": "選擇各 4 分、手寫各 10 分，共 40 分；手寫對照詳解自評。"
              }
            },
            {
              "id": "LA-CH03-S02",
              "title": "3-2 子空間",
              "sourceSectionId": "la-ch03-s02",
              "contentVersion": "1.0-draft",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得原始十張教材圖片，八道教學例題皆為自編，十五筆考古題只有摘要。原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。",
              "knowledgePointIds": [
                "LA-CH03-S02-K01",
                "LA-CH03-S02-K02",
                "LA-CH03-S02-K03",
                "LA-CH03-S02-K04",
                "LA-CH03-S02-K05",
                "LA-CH03-S02-K06",
                "LA-CH03-S02-K07",
                "LA-CH03-S02-K08"
              ],
              "blocks": [
                {
                  "id": "LA-CH03-S02-B-INTRO",
                  "type": "concept",
                  "title": "學習目標與符號約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "| 符號 | 意義 |\n|---|---|\n| $F$ | 純量所屬數域，例如實數 $\\mathbb R$ |\n| $V$、$W$ | 向量空間及其子集合 |\n| $W\\le V$ | $W$ 是 $V$ 的子空間 |\n| $0$、$\\{0\\}$ | 零向量；只含零向量的集合，兩者不同 |\n| $\\alpha,\\beta$ | 任意純量，取自 $F$ |\n| $\\forall$、$\\exists$ | 對所有；存在 |\n| $\\subseteq$、$\\in$ | 子集合關係；元素屬於集合 |\n| $\\cap$、$\\cup$ | 交集；聯集 |\n| $\\operatorname{span}(S)$ | $S$ 中向量的所有有限線性組合 |\n| $\\sum_{i=1}^{k}c_iv_i$ | $c_1v_1+\\cdots+c_kv_k$；$i$ 是索引，$k$ 是項數 |\n| $A^T$、$\\ker A$ | 轉置矩陣；核空間 |\n| $e_i$ | 第 $i$ 個標準基底向量，只有第 $i$ 個分量為 1 |\n\n沿用前述教材用語：「列」為 row，「行／欄」為 column。以下盡量並列英文，避免不同教材造成混淆。四空間的正交補補充限定於實數及標準內積；一般數域部分只使用轉置與代數定義。"
                },
                {
                  "id": "LA-CH03-S02-B001",
                  "type": "concept",
                  "title": "子空間的定義與判別",
                  "markdown": "設 $V$ 是 $F$ 上的向量空間。若 $W\\subseteq V$，且沿用 $V$ 的加法與純量乘法後本身為向量空間，稱 $W$ 為 $V$ 的子空間。\n\n判別法：先證 $W\\ne\\varnothing$，再證加法封閉及純量乘法封閉。也可合併為\n\n$$u,v\\in W,\\ \\alpha,\\beta\\in F\\Longrightarrow\\alpha u+\\beta v\\in W.$$\n\n不需要重證十條向量空間公理，因結合律、交換律等已從母空間繼承。但運算或數域若改變，就不能直接套用此說法。\n\n為何非空加封閉可推出含零？取 $w\\in W$，由純量封閉得 $0w=0\\in W$。又 $(-1)w=-w\\in W$，所以反元素也在集合中。零子空間 $\\{0\\}$ 與 $V$ 本身都滿足條件。注意：空集合不是子空間，只有零向量則是子空間。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B002",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E01",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，以「任取」開頭寫完整封閉性證明。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B004",
                  "type": "concept",
                  "title": "如何找反例",
                  "markdown": "否定子空間只需一項條件失敗，無須全部檢查。\n\n| 集合 | 判斷與理由 |\n|---|---|\n| $Ax=0$ 的解集合 | 是；$A(\\alpha u+\\beta v)=0$ |\n| $Ax=b$，$b\\ne0$ 的解集合 | 否；零向量不在內，無解時為空集合也不是 |\n| $x\\ge0$ 的半平面 | 否；負純量破壞條件 |\n| trace 為零的矩陣 | 是；trace 為對角元素總和，具線性 |\n| 對角矩陣、固定方向的上三角矩陣 | 是；指定位置為零的限制是齊次線性限制 |\n| 所有奇異方陣（階數至少 2） | 否；加法不封閉 |\n| $p(0)=0$ 的至多 $n$ 次多項式 | 是；代入值對加法與純量乘法封閉 |\n| 恰為三次的多項式 | 否；不含零多項式 |",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B005",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E02",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "為 $x+y=1$ 與 $x\\ge0$ 各寫最短反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B007",
                  "type": "concept",
                  "title": "交集一定是子空間",
                  "markdown": "設 $W_1,W_2\\le V$。交集包含零。若 $u,v$ 同時在兩者中，線性組合也同時在兩者中，因此 $W_1\\cap W_2\\le V$。同理任意非空索引族子空間的交集仍是子空間；若討論空索引族，需約定其在母空間中的交集為 $V$。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B008",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E03",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B009",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "用兩次封閉性把一般交集定理寫成證明。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B010",
                  "type": "concept",
                  "title": "聯集何時是子空間？",
                  "markdown": "對兩個子空間：\n\n$$U\\cup W\\le V\\iff U\\subseteq W\\ \\text{或}\\ W\\subseteq U.$$\n\n充分性：有包含關係時聯集就是較大的子空間。\n\n必要性：假設聯集是子空間，但彼此皆不包含。可取 $u\\in U\\setminus W$、$w\\in W\\setminus U$。加法封閉要求 $u+w\\in U\\cup W$。若 $u+w\\in U$，則 $w=(u+w)-u\\in U$，矛盾；若 $u+w\\in W$，則 $u=(u+w)-w\\in W$，也矛盾。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B011",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E04",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B012",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "練習必要性證明中兩種情況各用了哪個子空間的封閉性。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B013",
                  "type": "concept",
                  "title": "和空間與最小性",
                  "markdown": "$$U+W=\\{u+w:u\\in U,w\\in W\\}.$$\n\n這裡的加號是集合的和空間，不是聯集。因 $0=0+0$，故非空。若 $x=u_1+w_1$、$y=u_2+w_2$，則\n\n$$\\alpha x+\\beta y=(\\alpha u_1+\\beta u_2)+(\\alpha w_1+\\beta w_2)\\in U+W.$$\n\n因此和是子空間。對任意 $u\\in U$，可寫 $u=u+0$，故 $U\\subseteq U+W$，同理 $W\\subseteq U+W$。若子空間 $Z$ 包含兩者，由加法封閉必包含所有 $u+w$，故 $U+W\\subseteq Z$。這就是「包含兩者的最小子空間」。\n\n$$U+W=\\operatorname{span}(U\\cup W).$$\n\n有限多個子空間的和可類推為所有 $w_1+\\cdots+w_k$；各項可取零。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B014",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E05",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B015",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "自行畫兩平面及交線，並寫一個向量的兩種分解。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B016",
                  "type": "concept",
                  "title": "四個基本子空間",
                  "markdown": "設 $A\\in F^{m\\times n}$，也就是 $m$ 列、$n$ 欄，輸入長度 $n$、輸出長度 $m$。\n\n| 空間 | 定義 | 所在空間 | 解題意義 |\n|---|---|---|---|\n| Column space，CS | $\\{Ax:x\\in F^n\\}$ | $F^m$ | 所有可能輸出 |\n| Row space，RS | 各列向量的線性組合 | $F^n$（將列視為座標向量） | 所有列向量生成的空間 |\n| Null space，kernel | $\\{x:Ax=0\\}$ | $F^n$ | 被送到零的輸入 |\n| Left null space | $\\{y:y^TA=0\\}=\\ker A^T$ | $F^m$ | 對各欄的線性限制 |\n\n若 $A=[a_1\\ \\cdots\\ a_n]$，則 $Ax=x_1a_1+\\cdots+x_na_n$，故 CS 正是欄向量的 span。RS 可寫成 $\\{y^TA:y\\in F^m\\}$（以列向量表示）。span 對線性組合封閉，因此 CS、RS 是子空間。對 kernel，$A0=0$ 且 $A(\\alpha x+\\beta z)=\\alpha Ax+\\beta Az=0$，所以也是子空間。左核套用同樣論證於 $A^T$。\n\n重要連結：$Ax=b$ 有解當且僅當 $b\\in\\operatorname{CS}(A)$。若 $A$ 為方陣，可逆當且僅當 $\\ker A=\\{0\\}$，也當且僅當 $\\operatorname{CS}(A)=F^n$。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B017",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E06",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B018",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "每個答案旁標上向量長度，檢查是否吻合矩陣尺寸。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B019",
                  "type": "concept",
                  "title": "乘積與等價運算",
                  "markdown": "若 $A$ 是 $m\\times n$、$B$ 是 $n\\times p$，則\n\n$$\\operatorname{CS}(AB)\\subseteq\\operatorname{CS}(A),\\qquad\\operatorname{RS}(AB)\\subseteq\\operatorname{RS}(B).$$\n\n第一式：$z=ABx=A(Bx)$ 是 $A$ 的輸出。第二式：$z=y^TAB=(y^TA)B$ 是 $B$ 各列的組合。一般只得到包含，不能直接升級為相等。\n\n若 $R=PA$，$P$ 可逆（基本列運算），則 $Rx=0\\iff Ax=0$，故核相同；各列互相為線性組合，所以 RS 相同。CS 通常改變。\n\n若 $C=AQ$，$Q$ 可逆（基本行／欄運算），則 $y^TC=0\\iff y^TA=0$，故左核相同；CS 相同，RS 與 kernel 通常改變。重排欄只是其中一種情況。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B020",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E07",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B021",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "寫出 $Rx=0\\Rightarrow Ax=0$ 中可逆矩陣的用途。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B022",
                  "type": "concept",
                  "title": "額外補充：維度、直和、正交",
                  "markdown": "以下為編輯延伸，並非宣稱原圖已完整介紹。維度是基底向量的個數；基底同時滿足生成及線性獨立。設 rank 為 $r$：\n\n$$\\dim\\operatorname{CS}(A)=\\dim\\operatorname{RS}(A)=r,$$\n$$\\dim\\ker A=n-r,\\qquad\\dim\\ker A^T=m-r.$$\n\n因此已知 $\\dim\\ker A=k$，先得 $r=n-k$，再得左核維度 $m-n+k$。\n\n有限維情況下 $\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)$。若交集為 $\\{0\\}$，則和中每個向量的分解唯一，稱直和 $U\\oplus W$。理由：$u_1+w_1=u_2+w_2$ 推出 $u_1-u_2=w_2-w_1\\in U\\cap W$；交集為零迫使兩部分各自相同。\n\n實數標準內積下，$\\ker A=\\operatorname{RS}(A)^\\perp$、$\\ker A^T=\\operatorname{CS}(A)^\\perp$。上標 $\\perp$ 表示與該空間所有向量垂直的集合。這裡不以轉置取代複數標準內積所需的共軛轉置。",
                  "provenance": "補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B023",
                  "type": "example",
                  "exampleId": "LA-CH03-S02-E08",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B024",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "在 ex05 的兩平面例子驗證維度公式，並解釋為何不是直和。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S02-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S02-B025",
                  "type": "summary",
                  "title": "考前摘要與自我檢核",
                  "markdown": "- 證明子空間：母空間與數域一致、非空、線性組合封閉。\n- 否定子空間：零向量、加法、純量任選一種具體失敗。\n- 交集必是；兩子空間的聯集需有包含關係；和必是。\n- CS 與左核在 $F^m$；RS 與 kernel 在 $F^n$。\n- 列運算保留 kernel、RS；欄運算保留左核、CS。\n- 乘積空間關係先寫包含，不能沒有條件就寫相等。",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH03-S02-B026",
                  "type": "assessment",
                  "assessmentId": "LA-CH03-S02-AS01",
                  "knowledgePointIds": []
                }
              ],
              "assessment": {
                "id": "LA-CH03-S02-AS01",
                "scope": "section",
                "title": "3-2 小節測驗",
                "questionIds": [
                  "LA-CH03-S02-Q01",
                  "LA-CH03-S02-Q02",
                  "LA-CH03-S02-Q03",
                  "LA-CH03-S02-Q04",
                  "LA-CH03-S02-Q05",
                  "LA-CH03-S02-Q06",
                  "LA-CH03-S02-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分，僅計答對題數；手寫各 10 分，對照詳解自評。"
              }
            },
            {
              "id": "LA-CH03-S03",
              "title": "3-3 生成與線性獨立",
              "sourceSectionId": "LA-CH03-S03",
              "contentVersion": "0.1.0",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得原始十四張教材照片。八道彙編轉錄另置待原卷核對閱讀區，不列正式題庫與作答統計；其餘候選只有摘要。原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。",
              "knowledgePointIds": [
                "LA-CH03-S03-K01",
                "LA-CH03-S03-K02",
                "LA-CH03-S03-K03",
                "LA-CH03-S03-K04",
                "LA-CH03-S03-K05",
                "LA-CH03-S03-K06",
                "LA-CH03-S03-K07",
                "LA-CH03-S03-K08",
                "LA-CH03-S03-K09",
                "LA-CH03-S03-K10",
                "LA-CH03-S03-K11",
                "LA-CH03-S03-K12",
                "LA-CH03-S03-K13"
              ],
              "blocks": [
                {
                  "id": "LA-CH03-S03-B-INTRO",
                  "type": "concept",
                  "title": "學習目標與符號約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "| 符號／用語 | 意義 |\n|---|---|\n| $F$ | 純量域（field），例如實數域 $\\mathbb R$、複數域 $\\mathbb C$ |\n| $V$ | 定義在 $F$ 上的向量空間（vector space） |\n| $v_i$ | 第 $i$ 個向量；下標是編號，不是乘法 |\n| $\\sum_{i=1}^k a_iv_i$ | 西格瑪求和，即 $a_1v_1+\\cdots+a_kv_k$；$i$ 從 1 到 $k$ |\n| $\\operatorname{span}(S)$ | $S$ 的所有有限線性組合所成集合 |\n| $\\varnothing$、$\\{0\\}$ | 分別為空集合、只含零向量的集合，兩者不同 |\n| $S\\subseteq W$ | $S$ 的每個元素都在 $W$ 中，允許相等 |\n| $S_1\\cup S_2$、$S_1\\cap S_2$ | 聯集（至少屬於一者）、交集（同時屬於兩者） |\n| $A=[v_1\\ \\cdots\\ v_k]$ | 各 $v_i$ 直向排成矩陣的一個 column |\n| $e_i$ | 標準向量：第 $i$ 個座標為 1，其餘為 0 |\n| $P_d(F)$ | 係數在 $F$、次數至多為 $d$ 的多項式，包含零多項式 |\n| $M_{m\\times n}(F)$ | 所有 $m\\times n$ 的 $F$ 係數矩陣 |\n| $A^T$、$\\det A$ | 轉置、行列式 |\n| $N(A)$、$CS(A)$、$RS(A)$ | 零空間、column space、row space |\n| $\\operatorname{rank}(A)$ | 樞紐數，等於 column space 與 row space 的維度 |\n\n**行、列用語處理：**不同臺灣教材的翻譯慣例可能不同。本稿統一使用 row（橫向）、column（直向）及「基本 row 運算」，避免把判準翻反。獨立看每個 **column** 是否有樞紐；生成 $F^m$ 看每個 **row** 是否有樞紐。"
                },
                {
                  "id": "LA-CH03-S03-B001",
                  "type": "concept",
                  "title": "線性組合與 $Ax=b$",
                  "markdown": "給定 $v_1,\\ldots,v_k\\in V$ 與 $a_1,\\ldots,a_k\\in F$，$\\sum_{i=1}^k a_iv_i$ 是這些向量的線性組合。係數可為零，不要求正值或總和為 1。\n\n判斷指定向量 $b$ 是否可以組出：設 $a_1v_1+\\cdots+a_kv_k=b$，再求係數。對普通座標向量，令 $A=[v_1\\ \\cdots\\ v_k]$，便得到 $Ax=b$。有解表示可以生成這個 $b$；無解表示不行。這只針對指定 $b$，還不能保證生成整個空間。例題：E01。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B002",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E01",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B004",
                  "type": "concept",
                  "title": "span、空集合與最小子空間",
                  "markdown": "$$\\operatorname{span}(S)=\\left\\{\\sum_{i=1}^k a_iv_i:k\\text{ 有限},\\ a_i\\in F,\\ v_i\\in S\\right\\}.$$\n\n即使 $S$ 是無限集合，每一個線性組合仍只使用有限個向量。採空和等於零的慣例，$\\operatorname{span}(\\varnothing)=\\{0\\}$；而 $\\operatorname{span}(\\{0\\})=\\{0\\}$。\n\n**子空間證明：**span 含零向量。任取 $u=\\sum_i a_iv_i$、$w=\\sum_j b_jz_j$ 與純量 $c$，則 $cu+w=\\sum_i(ca_i)v_i+\\sum_jb_jz_j$，仍是 $S$ 中向量的有限線性組合。因此對純量倍乘與加法封閉。\n\n**最小性：**若子空間 $W$ 包含 $S$，則其封閉性保證 $\\sum_i a_iv_i\\in W$，所以 $\\operatorname{span}(S)\\subseteq W$。「最小」指集合包含關係，不是向量數最少。\n\n若 $\\operatorname{span}(S)=V$，稱 $S$ 生成 $V$（spans $V$）。例題：E02。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B005",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E02",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B007",
                  "type": "concept",
                  "title": "生成空間相等與移除冗餘",
                  "markdown": "要證明 $\\operatorname{span}(S_1)=\\operatorname{span}(S_2)$，可證明 $S_1\\subseteq\\operatorname{span}(S_2)$ 且 $S_2\\subseteq\\operatorname{span}(S_1)$。由 K02 最小性得到兩方向包含。\n\n若 $v_k\\in\\operatorname{span}\\{v_1,\\ldots,v_{k-1}\\}$，加入或移除 $v_k$ 都不改變 span。若不屬於舊 span，加入後生成空間嚴格擴大。反之，兩集合元素數不同也可以有相同 span。另有 $S_1\\subseteq S_2\\Rightarrow\\operatorname{span}(S_1)\\subseteq\\operatorname{span}(S_2)$。例題：E03。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B008",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E03",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B009",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B010",
                  "type": "concept",
                  "title": "column space、row space 與樞紐",
                  "markdown": "對 $A\\in F^{m\\times n}$：$CS(A)\\subseteq F^m$、$RS(A)\\subseteq F^n$，且 $CS(A)=\\{Ax:x\\in F^n\\}$。所以 $Ax=b$ 有解若且唯若 $b\\in CS(A)$。\n\n基本 row 運算相當於左乘可逆矩陣 $E$，所以 $N(EA)=N(A)$，並保留 row space；但 $CS(EA)=E(CS(A))$ 通常不等於原 column space。找 $CS(A)$ 的基底時：先化簡找樞紐 column 的**位置**，再回到原矩陣取那些 column。化簡後非零 row 則能作為原 row space 的基底。例題：E04。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B011",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E04",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B012",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B013",
                  "type": "concept",
                  "title": "相依與獨立的定義、齊次判準",
                  "markdown": "有限向量列 $v_1,\\ldots,v_k$ 線性獨立，指 $\\sum_i a_iv_i=0$ 蘊含所有 $a_i=0$。若存在不全為零的係數使和為零，就是相依。全零係數的解稱平凡解（trivial solution）；「不全為零」只要求至少一個係數非零。\n\n令 $A=[v_1\\cdots v_k]$，有\n$$\\text{獨立}\\iff N(A)=\\{0\\}\\iff\\operatorname{rank}(A)=k\\iff\\text{每個 column 有樞紐}.$$\n有自由變數便有非平凡齊次解，即相依。\n\n**冗餘向量等價命題：**若相依關係中 $a_j\\ne0$，移項並除以 $a_j$ 得 $v_j=-\\sum_{i\\ne j}(a_i/a_j)v_i$。反方向將這個等式移到同一側，第 $j$ 個係數為 1，即得非平凡關係。注意：相依只保證「至少一個」可由其餘表示。例題：E05。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B014",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E05",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B015",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B016",
                  "type": "concept",
                  "title": "快速判斷與子集合性質",
                  "markdown": "| 情況 | 結論與理由 |\n|---|---|\n| 向量列含零向量 | 相依：零向量係數取 1，其他取 0 |\n| 單一向量 $v$ | 獨立若且唯若 $v\\ne0$ |\n| 兩個向量 | 相依若且唯若其中一個可寫成另一個的純量倍數 |\n| 獨立集合的子集合 | 仍獨立；把缺少的係數補 0 即可證明 |\n| 相依集合的超集合 | 仍相依；沿用原非平凡係數，其餘補 0 |\n| $F^n$ 中超過 $n$ 個向量 | 相依：最多有 $n$ 個樞紐 |\n| $F^n$ 中不超過 $n$ 個向量 | 未必獨立，仍需判斷 |\n| 空集合 | 獨立，但只生成零空間 |\n\n對無限集合，獨立指其每個有限子集合皆獨立。重複向量若作為有序向量列的兩個位置，立即相依；集合記法會自動去除重複元素，需區分。例題：E06。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B017",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E06",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B018",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B019",
                  "type": "concept",
                  "title": "生成、獨立、基底的比較",
                  "markdown": "| 問題（$A$ 為 $m\\times n$） | 判準 |\n|---|---|\n| 指定 $b$ 是否在 span？ | $Ax=b$ 有解 |\n| columns 是否獨立？ | $Ax=0$ 只有零解；rank 為 $n$ |\n| 是否生成 $F^m$？ | 對每個 $b\\in F^m$ 皆有解；rank 為 $m$ |\n| 同時獨立且生成 $F^m$？ | columns 是基底，必有 $m=n$ 且可逆 |\n\n基底（basis）是同時獨立且生成目標空間的集合，作為後續小節銜接概念；維度（dimension）是有限基底所含向量數。若 $n<m$，不能生成 $F^m$；若 $n>m$，columns 必相依。只有方陣時，「columns 獨立」與「生成整個目標空間」才等價。例題：E07。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B020",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E07",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B021",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B022",
                  "type": "concept",
                  "title": "含參數的獨立性",
                  "markdown": "方陣 $A(t)$ 的 columns 獨立若且唯若 $\\det A(t)\\ne0$；非方陣需用秩或齊次方程。計算時先找使樞紐或行列式為零的值，再代回逐一討論。除以 $t-a$ 前，必須先處理 $t=a$，不能把特殊情況丟掉。例題：E08。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B023",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E08",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B024",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K08"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B025",
                  "type": "concept",
                  "title": "子空間的和、聯集與交集",
                  "markdown": "$$W_1+W_2=\\{u+v:u\\in W_1,v\\in W_2\\}.$$\n零向量可寫成 $0+0$；若 $u+v$、$u'+v'$ 在其中，則 $c(u+v)+(u'+v')=(cu+u')+(cv+v')$ 仍在其中，故是子空間。\n\n若 $W_i=\\operatorname{span}(S_i)$，把線性組合依來源拆成兩部分，便得\n$$W_1+W_2=\\operatorname{span}(S_1\\cup S_2).$$\n交集 $W_1\\cap W_2$ 也是子空間：兩邊的封閉性可同時使用。聯集通常不是子空間；**補充命題**：兩子空間的聯集為子空間若且唯若其中一者包含另一者。必要性可取 $u\\in W_1\\setminus W_2$、$v\\in W_2\\setminus W_1$，則 $u+v$ 不在任一者中。\n\n$$\\operatorname{span}(S_1\\cap S_2)\\subseteq\\operatorname{span}(S_1)\\cap\\operatorname{span}(S_2).$$\n此式不保證相等：左邊只能使用共同的原始元素；右邊允許兩組不同線性組合產生同一向量。例題：E09。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B026",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E09",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B027",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K09"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B028",
                  "type": "concept",
                  "title": "矩陣與多項式作為向量",
                  "markdown": "矩陣相等要逐位置比較，多項式相等要逐次項比較。矩陣可固定次序攤平成係數向量，之後始終使用相同次序；$a+bx+cx^2$ 可表示為 $(a,b,c)^T$。這些對應保留加法與純量倍乘，因此保留線性關係。零多項式是所有係數皆零，不是只在某點取值為零。例題：E10。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K10"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B029",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E10",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K10"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B030",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K10"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B031",
                  "type": "concept",
                  "title": "函數的獨立性與定義域",
                  "markdown": "$\\sum_i c_if_i(x)=0$ 必須對定義域的**每個** $x$ 成立，且 $c_i$ 是不隨 $x$ 改變的常數。證明獨立可選取適當的點，推出所有係數必為零。有限點上得到非平凡解，卻不能直接證明函數相依，因為該關係未必在其他點成立。定義域與純量域都會影響判斷。例題：E11。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K11"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B032",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E11",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K11"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B033",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K11"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B034",
                  "type": "concept",
                  "title": "Wronskian 充分判準與限制",
                  "markdown": "設 $f_1,\\ldots,f_n$ 在同一區間具有到 $n-1$ 階的導數，定義\n$$W(f_1,\\ldots,f_n)(x)=\\det\\begin{bmatrix}f_1(x)&\\cdots&f_n(x)\\\\f'_1(x)&\\cdots&f'_n(x)\\\\\\vdots&&\\vdots\\\\f_1^{(n-1)}(x)&\\cdots&f_n^{(n-1)}(x)\\end{bmatrix}.$$\n\n若函數相依，對恆等式逐次微分，同一組非零常數係數會使矩陣乘積為零，故 Wronskian 處處為零。取逆否命題：**存在一點 $x_0$ 使 $W(x_0)\\ne0$，即可證明獨立**。只需一點，不要求每一點皆非零。\n\n**補充限制：**對一般可微函數，Wronskian 恆零不能直接反推相依。例：在 $\\mathbb R$ 上 $f=x^2$、$g=x|x|$ 皆可微且 $W\\equiv0$；但在正半軸得到 $a+b=0$，負半軸得到 $a-b=0$，故兩函數仍獨立。若有額外解析性或同一線性常微分方程解族等條件，須先完整列出條件才使用更強結論。例題：E12。",
                  "provenance": "教材整理 · 含補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K12"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B035",
                  "type": "example",
                  "exampleId": "LA-CH03-S03-E12",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K12"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B036",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K12"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B037",
                  "type": "concept",
                  "title": "小節統整",
                  "markdown": "先辨認空間與純量域，再區分 $Ax=b$（有無解）與 $Ax=0$（是否唯一零解）。把物件轉成係數矩陣，檢查樞紐；參數例外值另算；最後寫回原問題的語言。證明題應寫「設任意係數使和為零 → 整理 → 用已知獨立性 → 得係數全零」，不要只寫「顯然」。",
                  "provenance": "教材整理 · 含補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K13"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B038",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K13"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-SOURCE-NOTICE",
                  "type": "summary",
                  "title": "考古題轉錄 · 待原卷核對",
                  "knowledgePointIds": [],
                  "markdown": "以下 8 道大題依稿件保留共用題幹、所有小題及編輯勘誤，來源為補教彙編，**尚未與官方原卷核對**。供閱讀參考，不提供交卷、不列入題庫或弱點統計；投影與最小平方等內容屬後續延伸。"
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-105-02",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-105-02",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-102-05",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-102-05",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05",
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-101-05",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-101-05",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K06",
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-100-06",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-100-06",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-102-08",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-102-08",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K03",
                    "LA-CH03-S03-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-103-04",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-103-04",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K04",
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-104-05",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-104-05",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B-PY-NCTU-106-08",
                  "type": "source-review",
                  "transcriptId": "PY-NCTU-106-08",
                  "knowledgePointIds": [
                    "LA-CH03-S03-K05",
                    "LA-CH03-S03-K07"
                  ]
                },
                {
                  "id": "LA-CH03-S03-B039",
                  "type": "summary",
                  "title": "考前摘要與自我檢核",
                  "markdown": "先辨認空間與純量域，再區分 $Ax=b$（有無解）與 $Ax=0$（是否唯一零解）。把物件轉成係數矩陣，檢查樞紐；參數例外值另算；最後寫回原問題的語言。證明題應寫「設任意係數使和為零 → 整理 → 用已知獨立性 → 得係數全零」，不要只寫「顯然」。",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH03-S03-B040",
                  "type": "assessment",
                  "assessmentId": "LA-CH03-S03-AS01",
                  "knowledgePointIds": []
                }
              ],
              "assessment": {
                "id": "LA-CH03-S03-AS01",
                "scope": "section",
                "title": "3-3 小節測驗",
                "questionIds": [
                  "LA-CH03-S03-Q01",
                  "LA-CH03-S03-Q02",
                  "LA-CH03-S03-Q03",
                  "LA-CH03-S03-Q04",
                  "LA-CH03-S03-Q05",
                  "LA-CH03-S03-Q06",
                  "LA-CH03-S03-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分，僅計答對題數；手寫各 10 分，對照詳解自評。"
              }
            },
            {
              "id": "LA-CH03-S05",
              "title": "3-5 直和",
              "sourceSectionId": "LA-S0305",
              "contentVersion": "0.1.0",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得原始八張教材圖片；教材轉錄例題及四點內插數據待原圖核對。原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。",
              "knowledgePointIds": [
                "LA-CH03-S05-K01",
                "LA-CH03-S05-K02",
                "LA-CH03-S05-K03",
                "LA-CH03-S05-K04",
                "LA-CH03-S05-K05",
                "LA-CH03-S05-K06"
              ],
              "blocks": [
                {
                  "id": "LA-CH03-S05-B-INTRO",
                  "type": "concept",
                  "title": "學習目標與符號約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "|記號|意思|\n|---|---|\n|$F$|係數域，本稿主要採實數域 $\\mathbb R$|\n|$V,W_i$|向量空間及其子空間；下標 $i$ 表示第幾個子空間|\n|$\\{0\\}$|只包含零向量的集合，不是空集合|\n|$\\operatorname{span}\\{v_1,\\ldots,v_r\\}$|這些向量所有線性組合構成的集合|\n|$\\sum_{i=1}^k w_i$|$w_1+\\cdots+w_k$；$\\Sigma$ 是加總記號|\n|$\\bigoplus_i W_i$|子空間的直和，要求分解唯一|\n|$\\dim W$|空間一組基底的向量數（有限維情形）|\n|$A^T$|矩陣轉置，上標 $T$ 不是次方|\n|$P_n$|次數至多 $n$ 的多項式及零多項式所成空間|\n|$\\prod$|連乘記號；$\\prod_{j\\ne i}$ 表示跳過 $j=i$|\n|$e_i$|標準基底向量：第 $i$ 個座標為 1，其餘為 0|"
                },
                {
                  "id": "LA-CH03-S05-B001",
                  "type": "concept",
                  "title": "子空間的和",
                  "markdown": "設 $W_1,\\ldots,W_k$ 是同一個向量空間 $V$ 的子空間。定義\n$$W_1+\\cdots+W_k=\\{w_1+\\cdots+w_k:w_i\\in W_i\\}.$$\n\n它是包含各 $W_i$ 的最小子空間。證明分三步：\n\n1. 各 $W_i$ 含零向量，所以和空間含零向量。\n2. 若 $u=\\sum u_i,v=\\sum v_i$，則對任意純量 $a,b$，$au+bv=\\sum(au_i+bv_i)$；每項仍在 $W_i$，故對線性組合封閉。\n3. 任一包含所有 $W_i$ 的子空間 $U$，因加法封閉，必包含每個 $\\sum w_i$，故包含和空間。\n\n不要把和空間與聯集混淆。聯集 $W_1\\cup W_2$ 一般不對加法封閉。\n\n例題引用：LA-E3501。手寫板塊提示：自行用「零向量＋線性組合封閉」重寫上述證明。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B002",
                  "type": "example",
                  "exampleId": "LA-CH03-S05-E01",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K01",
                    "LA-CH03-S05-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B003",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B004",
                  "type": "concept",
                  "title": "獨立子空間與兩兩獨立",
                  "markdown": "子空間族獨立（Independent Subspaces）指對每個 $i$，\n$$W_i\\cap\\sum_{j\\ne i}W_j=\\{0\\}.$$\n\n等價地：若 $w_i\\in W_i$ 且 $\\sum_iw_i=0$，則每個 $w_i=0$。\n\n證明：固定 $i$，由總和為零得 $w_i=-\\sum_{j\\ne i}w_j$，它同時在 $W_i$ 與其餘子空間的和中，因此只能為零。反向若 $u\\in W_i\\cap\\sum_{j\\ne i}W_j$，寫成 $u=\\sum_{j\\ne i}u_j$，則 $u-\\sum_{j\\ne i}u_j=0$；依零和判準即得 $u=0$。\n\n|概念|條件|可否保證整體分解唯一|\n|---|---|---|\n|兩兩獨立|任意 $i\\ne j$，$W_i\\cap W_j=\\{0\\}$|只有兩個子空間時可以|\n|整體獨立|$\\sum_iw_i=0\\Rightarrow$ 每項為零|可以，對和空間內的向量而言|\n\n三個以上兩兩交集為零仍可能不獨立，見 LA-E3502。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B005",
                  "type": "example",
                  "exampleId": "LA-CH03-S05-E02",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K02",
                    "LA-CH03-S05-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B006",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B007",
                  "type": "concept",
                  "title": "維度判準",
                  "markdown": "有限維時：\n$$\\dim(W_1+W_2)=\\dim W_1+\\dim W_2-\\dim(W_1\\cap W_2).$$\n\n證明：取交集基底 $c_1,\\ldots,c_r$，分別擴充為 $W_1$ 的基底 $(c,a)$ 與 $W_2$ 的基底 $(c,b)$。合併 $(c,a,b)$ 可生成和空間。若合併組有線性關係，把 $a$ 部分移至另一側，可知它在交集中；由 $(c,a)$ 獨立，$a$ 的係數為零，再由 $(c,b)$ 獨立，其餘係數也為零。因此合併組是基底，計數得到公式。\n\n對有限維的多個子空間：\n$$W_1,\\ldots,W_k\\text{ 獨立}\\iff \\dim\\left(\\sum_iW_i\\right)=\\sum_i\\dim W_i.$$\n\n理由：各子空間基底合併後必生成和空間。獨立子空間的零和判準保證合併組獨立；反向若生成組的數量等於維度，它就是基底，故零和判準成立。不能把三集合的容斥公式直接照搬成三子空間維度公式。\n\n例題引用：LA-E3501、LA-E3502。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B008",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B009",
                  "type": "concept",
                  "title": "直和、唯一性與補空間",
                  "markdown": "若 $V=\\sum_iW_i$ 且子空間族獨立，記為\n$$V=W_1\\oplus\\cdots\\oplus W_k.$$\n\n這等價於每個 $v\\in V$ 都能唯一寫成 $v=\\sum_iw_i$，$w_i\\in W_i$。\n\n- 存在性由和等於 $V$ 保證。\n- 唯一性：若 $\\sum_iw_i=\\sum_iu_i$，則 $\\sum_i(w_i-u_i)=0$；因每項在對應子空間，獨立性給出 $w_i=u_i$。\n- 反向：零向量已有全零分解；若有另一組零和表示，唯一性迫使各項為零。\n\n對兩個子空間，證明直和可用「和是 $V$＋交集只有零向量」。有限維時也可用「交集只有零向量＋維度和為 $\\dim V$」。\n\n補空間（Complement）：$T$ 若滿足 $V=S\\oplus T$，稱為 $S$ 的補空間。先選 $S$ 的基底，再擴充成 $V$ 的基底，新增基底向量所生成的空間就是補空間。補空間一般不唯一，也不一定與 $S$ 正交。\n\n例題引用：LA-E3503。手寫提示：用兩種方法證明例題中的直和，並再找一個不同補空間。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B010",
                  "type": "example",
                  "exampleId": "LA-CH03-S05-E03",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B011",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B012",
                  "type": "concept",
                  "title": "對稱與反對稱矩陣分解",
                  "markdown": "在 $M_n(\\mathbb R)$ 中，令 $S=\\{A:A^T=A\\}$、$K=\\{A:A^T=-A\\}$。兩者對線性組合封閉，因此是子空間。對任何 $A$，\n$$A=\\frac{A+A^T}{2}+\\frac{A-A^T}{2}.$$\n\n第一項轉置後不變，第二項轉置後變號，因此和覆蓋全空間。若 $X\\in S\\cap K$，則 $X=X^T=-X$，所以 $2X=0$，在實數域得到 $X=0$。因此 $M_n(\\mathbb R)=S\\oplus K$。\n\n【額外補充】此公式需係數域特徵不為 2；在實數域沒有問題。$S$ 的基底可取 $E_{ii}$ 與 $E_{ij}+E_{ji}$（$i<j$）；$K$ 的基底可取 $E_{ij}-E_{ji}$。$E_{ij}$ 是只有第 $(i,j)$ 項為 1 的矩陣。維度分別為 $n(n+1)/2$ 與 $n(n-1)/2$，相加為 $n^2$。\n\n例題引用：LA-E3504。",
                  "provenance": "教材整理 · 含補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B013",
                  "type": "example",
                  "exampleId": "LA-CH03-S05-E04",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B014",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K05"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B015",
                  "type": "concept",
                  "title": "偶函數與奇函數分解",
                  "markdown": "對所有 $\\mathbb R\\to\\mathbb R$ 的函數所成空間，令 $E,O$ 分別為偶、奇函數子空間。定義\n$$f_e(x)=\\frac{f(x)+f(-x)}2,\\qquad f_o(x)=\\frac{f(x)-f(-x)}2.$$\n\n代入 $-x$ 可得 $f_e(-x)=f_e(x)$、$f_o(-x)=-f_o(x)$，且相加為 $f$。若 $g$ 同時奇且偶，則 $g(x)=g(-x)=-g(x)$，故處處為零。於是 $V=E\\oplus O$。若改用其他定義域，需先確認對 $x\\mapsto -x$ 封閉。\n\n例題引用：LA-E3505。\n\n## 3-5 板塊配置\n\n|block_id|類型|內容／引用|\n|---|---|---|\n|LA-B3501|concept|K0305-01～03 的定義、比較與證明|\n|LA-B3502|example|LA-E3501、LA-E3502|\n|LA-B3503|split|直和唯一性證明並排空白推導區|\n|LA-B3504|example|LA-E3503|\n|LA-B3505|concept|K0305-05、06|\n|LA-B3506|example|LA-E3504、LA-E3505|\n|LA-B3507|handwriting|自行整理「存在／唯一／直和」差異，內容留白|\n|LA-B3508|summary|兩兩獨立不足；補空間不唯一；直和未必正交|\n|LA-B3509|assessment|LA-A3501|",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B016",
                  "type": "example",
                  "exampleId": "LA-CH03-S05-E05",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B017",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S05-K06"
                  ]
                },
                {
                  "id": "LA-CH03-S05-B018",
                  "type": "summary",
                  "title": "考前摘要與自我檢核",
                  "markdown": "1. 直和需同時證明存在與唯一。\n2. 三個以上子空間兩兩交集為零，不足以保證整體獨立。\n3. 補空間一般不唯一，也不一定正交。\n4. 對稱／反對稱與偶／奇分解，利用交集為零證明唯一。",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH03-S05-B019",
                  "type": "assessment",
                  "assessmentId": "LA-CH03-S05-AS01",
                  "knowledgePointIds": []
                }
              ],
              "assessment": {
                "id": "LA-CH03-S05-AS01",
                "scope": "section",
                "title": "3-5 小節測驗",
                "questionIds": [
                  "LA-CH03-S05-Q01",
                  "LA-CH03-S05-Q02",
                  "LA-CH03-S05-Q03",
                  "LA-CH03-S05-Q04",
                  "LA-CH03-S05-Q05",
                  "LA-CH03-S05-Q06",
                  "LA-CH03-S05-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分，僅計答對題數；手寫各 10 分，對照詳解自評。",
                "sourceId": "LA-A3501"
              }
            },
            {
              "id": "LA-CH03-S06",
              "title": "3-6 Lagrange 內插法",
              "sourceSectionId": "LA-S0306",
              "contentVersion": "0.1.0",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：未取得原始八張教材圖片；教材轉錄例題及四點內插數據待原圖核對。原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。",
              "knowledgePointIds": [
                "LA-CH03-S06-K01",
                "LA-CH03-S06-K02",
                "LA-CH03-S06-K03",
                "LA-CH03-S06-K04"
              ],
              "blocks": [
                {
                  "id": "LA-CH03-S06-B-INTRO",
                  "type": "concept",
                  "title": "學習目標與符號約定",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "|記號|意思|\n|---|---|\n|$F$|係數域，本稿主要採實數域 $\\mathbb R$|\n|$V,W_i$|向量空間及其子空間；下標 $i$ 表示第幾個子空間|\n|$\\{0\\}$|只包含零向量的集合，不是空集合|\n|$\\operatorname{span}\\{v_1,\\ldots,v_r\\}$|這些向量所有線性組合構成的集合|\n|$\\sum_{i=1}^k w_i$|$w_1+\\cdots+w_k$；$\\Sigma$ 是加總記號|\n|$\\bigoplus_i W_i$|子空間的直和，要求分解唯一|\n|$\\dim W$|空間一組基底的向量數（有限維情形）|\n|$A^T$|矩陣轉置，上標 $T$ 不是次方|\n|$P_n$|次數至多 $n$ 的多項式及零多項式所成空間|\n|$\\prod$|連乘記號；$\\prod_{j\\ne i}$ 表示跳過 $j=i$|\n|$e_i$|標準基底向量：第 $i$ 個座標為 1，其餘為 0|"
                },
                {
                  "id": "LA-CH03-S06-B001",
                  "type": "concept",
                  "title": "存在與唯一",
                  "markdown": "給定互不相同的 $t_0,\\ldots,t_n$ 與任意指定值 $b_0,\\ldots,b_n$，存在唯一 $P\\in P_n$ 使 $P(t_i)=b_i$。$P_n$ 的標準基底為 $1,x,\\ldots,x^n$，維度 $n+1$。「至多 $n$ 次」不能改為「恰好 $n$ 次」。\n\n唯一性：若 $P,Q$ 都滿足條件，$P-Q$ 次數至多 $n$，卻有 $n+1$ 個相異根。非零至多 $n$ 次多項式最多有 $n$ 個相異根，故 $P-Q=0$。根數性質來自因式定理：每個相異根都貢獻一個不同的一次因子；非零多項式的次數至少等於這些因子的數量。\n\n重複節點時，指定值不同則無解；指定值相同則只是重複條件，通常不足以保證唯一。\n\n例題引用：LA-E3601、LA-E3605。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B002",
                  "type": "example",
                  "exampleId": "LA-CH03-S06-E01",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K01",
                    "LA-CH03-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B003",
                  "type": "example",
                  "exampleId": "LA-CH03-S06-E05",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B004",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K01"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B005",
                  "type": "concept",
                  "title": "Lagrange 基底與公式",
                  "markdown": "定義\n$$L_i(x)=\\prod_{\\substack{0\\le j\\le n\\\\j\\ne i}}\\frac{x-t_j}{t_i-t_j}.$$\n\n節點相異保證分母非零。代入 $t_i$ 時每個因子都等於 1；代入 $t_j$（$j\\ne i$）時有一個分子為零。因此 $L_i(t_j)$ 在 $i=j$ 時為 1，其餘為 0，亦寫成 Kronecker delta $\\delta_{ij}$。\n\n所以\n$$P(x)=\\sum_{i=0}^n b_iL_i(x).$$\n\n每個 $L_i$ 次數至多 $n$，故 $P\\in P_n$；代入 $t_j$ 時只有第 $j$ 項留下，正好得到 $b_j$，完成存在性證明。\n\n若 $\\sum c_iL_i=0$，依次代入所有節點即得各 $c_i=0$。因此 $L_0,\\ldots,L_n$ 是 $n+1$ 個獨立向量，構成 $P_n$ 的基底；多項式在此基底下的座標是 $(P(t_0),\\ldots,P(t_n))^T$。\n\n例題引用：LA-E3601、LA-E3602。手寫提示：不看公式，自行設計「在指定點為 1、其他節點為 0」的多項式。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B006",
                  "type": "example",
                  "exampleId": "LA-CH03-S06-E02",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B007",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K02"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B008",
                  "type": "concept",
                  "title": "四點內插例題",
                  "markdown": "前文轉錄的教材數據為 $(5,1),(-7,-23),(-6,-54),(0,-954)$；仍待原圖核對。完整計算見 LA-E3603。此處不將自行展開結果宣稱為原書答案。",
                  "provenance": "教材整理 · 原圖待核對",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B009",
                  "type": "example",
                  "exampleId": "LA-CH03-S06-E03",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B010",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K03"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B011",
                  "type": "concept",
                  "title": "取值矩陣可逆",
                  "markdown": "設 $f_1,\\ldots,f_n$ 是 $P_{n-1}$ 的基底，$a_1,\\ldots,a_n$ 相異，令 $M_{ij}=f_j(a_i)$。列索引 $i$ 對應節點，欄索引 $j$ 對應基底函數。\n\n令 $Mc=0$，並設 $f=\\sum_jc_jf_j$。矩陣方程第 $i$ 列表示 $f(a_i)=0$。$f$ 次數至多 $n-1$，卻有 $n$ 個相異根，因此 $f=0$。再由基底獨立得 $c=0$。方陣齊次方程只有零解，故 $M$ 可逆。\n\n【額外補充】取標準基底 $1,x,\\ldots,x^{n-1}$ 即得到 Vandermonde 矩陣，其行列式為 $\\prod_{i<j}(a_j-a_i)$。一般基底的取值矩陣可寫為「Vandermonde 矩陣 × 基底係數矩陣」，兩者均可逆。這是理解內插法的另一條路，不是本節必須另背的公式。\n\n例題引用：LA-E3604。\n\n## 3-6 板塊配置\n\n|block_id|類型|內容／引用|\n|---|---|---|\n|LA-B3601|concept|K0306-01 的問題與條件|\n|LA-B3602|split|唯一性證明並排空白證明區|\n|LA-B3603|concept|K0306-02 的基底設計|\n|LA-B3604|example|LA-E3601、LA-E3602|\n|LA-B3605|handwriting|自行算三個基底多項式，內容留白|\n|LA-B3606|example|LA-E3603|\n|LA-B3607|concept|K0306-04|\n|LA-B3608|example|LA-E3604、LA-E3605|\n|LA-B3609|summary|相異節點、次數上限、零多項式、分母符號|\n|LA-B3610|assessment|LA-A3601|",
                  "provenance": "教材整理 · 含補充延伸",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B012",
                  "type": "example",
                  "exampleId": "LA-CH03-S06-E04",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B013",
                  "type": "note",
                  "title": "停一下，親手推導",
                  "prompt": "不看詳解，重寫本知識點的定義、關鍵理由或反例。",
                  "height": 230,
                  "layout": "split",
                  "knowledgePointIds": [
                    "LA-CH03-S06-K04"
                  ]
                },
                {
                  "id": "LA-CH03-S06-B014",
                  "type": "summary",
                  "title": "考前摘要與自我檢核",
                  "markdown": "1. 節點必須相異；多項式次數是「至多」，不是「恰好」。\n2. Lagrange 基底在自身節點為 1，其餘節點為 0；座標是節點值。\n3. 先保留乘積形式，留意分母負號，再代入節點核對。\n4. 唯一性使用根數上限；取值矩陣可逆還需要多項式基底條件。",
                  "knowledgePointIds": []
                },
                {
                  "id": "LA-CH03-S06-B015",
                  "type": "assessment",
                  "assessmentId": "LA-CH03-S06-AS01",
                  "knowledgePointIds": []
                }
              ],
              "assessment": {
                "id": "LA-CH03-S06-AS01",
                "scope": "section",
                "title": "3-6 小節測驗",
                "questionIds": [
                  "LA-CH03-S06-Q01",
                  "LA-CH03-S06-Q02",
                  "LA-CH03-S06-Q03",
                  "LA-CH03-S06-Q04",
                  "LA-CH03-S06-Q05",
                  "LA-CH03-S06-Q06",
                  "LA-CH03-S06-Q07"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分，僅計答對題數；手寫各 10 分，對照詳解自評。",
                "sourceId": "LA-A3601"
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
      "chapters": [
        {
          "id": "DS-CH01",
          "title": "第 1 章",
          "titleStatus": "正式章名與教材完整性待核對",
          "curriculumComplete": false,
          "sections": [
            {
              "id": "DS-CH01-S01",
              "title": "1-1 系統生命週期",
              "sourceSectionId": "DS-C01-S01",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依前次六張講義整理文字重編，原圖、原例題與章節切分仍待確認。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S01-K01",
                "DS-CH01-S01-K02",
                "DS-CH01-S01-K03"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S01-B001",
                  "type": "concept",
                  "title": "五個階段",
                  "provenance": "教材整理",
                  "markdown": "系統生命週期（System Life Cycle）描述從需求到驗證的開發過程，不能把「程式能執行」視為完成全部工作。\n\n| 階段 | 要回答的問題 | 產出例子 |\n|---|---|---|\n| 需求 Requirements | 要做什麼、輸入輸出及限制是什麼？ | 搜尋資料須排序；找不到回傳 -1 |\n| 分析 Analysis | 問題如何分解？ | 讀入、檢查、搜尋、輸出 |\n| 設計 Design | 資料如何表示、操作如何進行？ | 排序陣列＋二元搜尋 |\n| 實作與修正 Refinement and Coding | 如何轉為可執行程式？ | 完成函式並逐步修正 |\n| 驗證 Verification | 對合法輸入是否符合規格？ | 正確性論證、測試、除錯 |",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K01"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S01-E01",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K01"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S01-K01"
                  ],
                  "prompt": "用自己的話為一個「查詢學生成績」程式寫輸入、輸出、合法輸入限制。"
                },
                {
                  "id": "DS-CH01-S01-B004",
                  "type": "concept",
                  "title": "分析與設計",
                  "provenance": "教材整理",
                  "markdown": "由上而下（top-down）：先看整體，再拆成子問題。由下而上（bottom-up）：先建立可用的基本元件，再組合系統。兩者可以交互使用。\n\n資料物件（data objects）的表示法與操作演算法須一起考慮。陣列支援以索引直接取值；已排序陣列適合二元搜尋。若資料未排序，不能直接根據中間值排除一半。",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K02"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S01-E02",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K02"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S01-K02"
                  ],
                  "prompt": "畫出「排序服務」的由上而下拆解，再列出可由下而上重用的函式。"
                },
                {
                  "id": "DS-CH01-S01-B007",
                  "type": "concept",
                  "title": "驗證",
                  "provenance": "教材整理 · 含自編補充",
                  "markdown": "正確性證明（correctness proof）要說明演算法在指定前提下對所有合法輸入成立；測試（testing）只檢查選定案例；除錯（debugging）定位並修正發現的問題。測試全部通過不等於已證明所有情況正確。\n\n自編補充：測試可含空資料、單一資料、邊界、重複值、找不到的目標。這些屬測試策略延伸，並非已確認原講義的完整清單。",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K03"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S01-E03",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K03"
                  ]
                },
                {
                  "id": "DS-CH01-S01-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S01-K03"
                  ],
                  "prompt": "各寫一個正常案例與邊界案例，說明它們能發現什麼問題。"
                },
                {
                  "id": "DS-CH01-S01-B010",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "需求 → 分析 → 設計 → 實作與修正 → 驗證。\n\n資料表示與操作須一起設計；由上而下與由下而上可交互使用。正確性證明、測試與除錯各有不同目的，有限測試不能取代對所有合法輸入的論證。"
                },
                {
                  "id": "DS-CH01-S01-B011",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S01-AS01"
                },
                {
                  "id": "DS-CH01-S01-B012",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S01-K01",
                    "DS-CH01-S01-K02",
                    "DS-CH01-S01-K03"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S01-AS01",
                "scope": "section",
                "title": "1-1 小節測驗",
                "questionIds": [
                  "DS-CH01-S01-Q01",
                  "DS-CH01-S01-Q02",
                  "DS-CH01-S01-Q03",
                  "DS-CH01-S01-Q04",
                  "DS-CH01-S01-Q05",
                  "DS-CH01-S01-W01",
                  "DS-CH01-S01-W02"
                ],
                "totalPoints": 40,
                "scoringNote": "選擇題各 4 分，手寫題各 10 分，共 40 分。",
                "sourceId": "DS-AS01"
              }
            },
            {
              "id": "DS-CH01-S02",
              "title": "1-2 演算法規格與遞迴",
              "sourceSectionId": "DS-C01-S02",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依前次六張講義整理文字重編，原圖、原例題與章節切分仍待確認。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。自訂 A(n,m) 僅供暫定定義下的條件式練習，不當作原教材定義。",
              "knowledgePointIds": [
                "DS-CH01-S02-K04",
                "DS-CH01-S02-K05",
                "DS-CH01-S02-K06",
                "DS-CH01-S02-K07",
                "DS-CH01-S02-K08",
                "DS-CH01-S02-K09",
                "DS-CH01-S02-K10",
                "DS-CH01-S02-K11",
                "DS-CH01-S02-K12",
                "DS-CH01-S02-K13"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S02-B001",
                  "type": "concept",
                  "title": "演算法及五項性質",
                  "provenance": "教材整理",
                  "markdown": "演算法（algorithm）是完成特定工作的有限步驟；程式（program）是以特定語言實作。相同演算法可以有不同語言實作。\n\n| 性質 | 意義 | 常見誤解 |\n|---|---|---|\n| 輸入 Input | 零個或多個輸入 | 不一定至少一個 |\n| 輸出 Output | 至少一項結果 | 回傳值、輸出資料等須符合規格 |\n| 明確性 Definiteness | 指令清楚且無歧義 | 「夠好時停止」未定義夠好 |\n| 有限性 Finiteness | 對合法輸入於有限步驟終止 | 有基底不代表一定到得了 |\n| 有效性 Effectiveness | 每一步足夠基本且可實際完成 | 不是要求時間複雜度一定很低 |",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K04"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E04",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K04"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K04"
                  ],
                  "prompt": "自行寫一個缺乏明確性的指令，再改成可執行條件。"
                },
                {
                  "id": "DS-CH01-S02-B004",
                  "type": "concept",
                  "title": "選擇排序（Selection Sort）",
                  "provenance": "教材整理 · 含自編補充",
                  "markdown": "令 n 為元素個數，索引為 0 至 n−1。第 i 輪從索引 i 至 n−1 找最小值，放到位置 i。`min_index` 儲存索引，`a[min_index]` 才是值。\n\n```text\nselection_sort(a, n):\n    for i = 0 to n-2:\n        min_index = i\n        for j = i+1 to n-1:\n            if a[j] < a[min_index]: min_index = j\n        if min_index != i: swap(a[i], a[min_index])\n```\n\n正確性：開始時已排序前綴為空；每輪把剩餘最小元素放到其最終位置，前綴維持有序且不大於後綴；n−1 輪後最後元素也在正確位置。\n\n比較數：第一輪 n−1 次、第二輪 n−2 次，直到 1 次。\n\n$$C(n)=\\sum_{k=1}^{n-1}k=\\frac{n(n-1)}2.$$\n\nΣ（sigma）表示把指定範圍各項相加；k 是求和索引。比較成本在最佳、平均與最差皆為 $\\Theta(n^2)$；額外空間 $\\Theta(1)$。Θ 表示上下界同階，O 只表示漸近上界。\n\n自編延伸：此交換版通常不穩定（stable），例如 `[2a,2b,1]` 第一輪變 `[1,2b,2a]`，兩個值為 2 的元素相對順序改變。交換最多 n−1 次；是否計入與自身交換須看程式。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K05"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E05",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K05"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K05"
                  ],
                  "prompt": "逐輪追蹤 DS-E05 的 i、min_index、陣列，另寫出比較數。"
                },
                {
                  "id": "DS-CH01-S02-B007",
                  "type": "concept",
                  "title": "二元搜尋（Binary Search）",
                  "provenance": "教材整理",
                  "markdown": "前提：資料依同一比較規則遞增排序，且此處採閉區間 `[left,right]`。每次取中點，比較後排除不可能的半部。\n\n```text\nbinary_search(a, n, x):\n    left = 0; right = n-1\n    while left <= right:\n        mid = left + (right-left)//2\n        if a[mid] == x: return mid\n        if x < a[mid]: right = mid-1\n        else: left = mid+1\n    return -1\n```\n\n`//` 為非負整數整除。閉區間剩一個元素時仍須檢查，所以條件用 `<=`。更新用 mid±1 排除已檢查元素，確保規模縮小。中點形式可避免直接計算 left+right 所造成的部分整數溢位問題。\n\n不變量：若目標存在，尚未排除的可能位置在當前區間內。區間為空時，目標不存在。最佳時間 $\\Theta(1)$；最差 $\\Theta(\\log n)$。迭代額外空間 $\\Theta(1)$；一般遞迴版最差堆疊 $\\Theta(\\log n)$。基本版本只找任一相符位置，未保證第一或最後一個。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K06"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E06",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K06"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K06"
                  ],
                  "prompt": "逐列記錄 left、right、mid、a[mid]，在每列寫出排除理由。"
                },
                {
                  "id": "DS-CH01-S02-B010",
                  "type": "concept",
                  "title": "遞迴設計（Recursion）",
                  "provenance": "教材整理",
                  "markdown": "直接遞迴：A 呼叫 A。間接遞迴：A 呼叫 B，B 經呼叫鏈回到 A。兩者都須有基底情況（base case）、遞迴關係（recursive case）與能朝基底前進的規模量。\n\n呼叫堆疊（call stack）保存各次呼叫的參數、區域狀態與返回位置。總呼叫數影響時間，最大同時未返回的呼叫數影響堆疊空間；兩者不同。若未指定編譯器最佳化，不假設尾端呼叫自動消除。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K07"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B011",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E07",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K07"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B012",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K07"
                  ],
                  "prompt": "畫出 DS-E07 的呼叫展開及返回順序，並各寫總呼叫數與深度。"
                },
                {
                  "id": "DS-CH01-S02-B013",
                  "type": "concept",
                  "title": "階乘（Factorial）",
                  "provenance": "教材整理",
                  "markdown": "$$0!=1,\\qquad n!=n(n-1)!\\quad(n\\geq1).$$\n\nn 為非負整數。每次 n 減一，終止於 0。單位成本模型下時間 $\\Theta(n)$，一般遞迴堆疊 $\\Theta(n)$；迭代只需常數額外空間。負數須拒絕；固定寬度整數可能溢位。大整數乘法成本另計，不能把此模型無條件套用任意大 n。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K08"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B014",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E08",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K08"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B015",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K08"
                  ],
                  "prompt": "分開寫「向下呼叫」與「向上回傳」，不要只寫最後答案。"
                },
                {
                  "id": "DS-CH01-S02-B016",
                  "type": "concept",
                  "title": "費波那契數列（Fibonacci Sequence）",
                  "provenance": "教材整理 · 含自編補充",
                  "markdown": "$$F_0=0,\\quad F_1=1,\\quad F_n=F_{n-1}+F_{n-2}\\ (n\\geq2).$$\n\n下標 n 是項目編號，不是乘法。直接遞迴重複求解相同子問題。若 C(n) 計所有函式進入次數（包含初始呼叫），則\n\n$$C(0)=C(1)=1,\\quad C(n)=1+C(n-1)+C(n-2)=2F_{n+1}-1.$$\n\n最後等式可由歸納法驗證：基底各為 1；代入前兩項公式後得到 $2(F_n+F_{n-1})-1=2F_{n+1}-1$。直接遞迴時間 $\\Theta(\\varphi^n)$，$\\varphi=(1+\\sqrt5)/2$；$O(2^n)$ 也是合法較寬上界，堆疊 $\\Theta(n)$。\n\n自編延伸：記憶化（memoization）保存已求結果，單位成本模型下時間 $\\Theta(n)$、快取 $\\Theta(n)$；命中快取仍算一次函式進入。迭代只保留最近兩項，時間 $\\Theta(n)$、額外空間 $\\Theta(1)$。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K09"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B017",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E09",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K09"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B018",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K09"
                  ],
                  "prompt": "畫 Fib(4) 呼叫樹，用不同記號圈出重複的子問題。"
                },
                {
                  "id": "DS-CH01-S02-B019",
                  "type": "concept",
                  "title": "自訂二維遞迴：待原圖確認",
                  "provenance": "條件式自編 · 定義待原圖確認",
                  "markdown": "前次整理先稱此題為二項式係數，後又指出原講義邊界不同。為避免沿用錯誤，本稿不把它命名為二項式係數。暫依前次整理末段所述，以以下定義作「條件式自編練習」，原講義正式內容待核對：\n\n$$A(n,0)=n+1,\\quad A(0,m)=1,\\quad A(n,m)=A(n-1,m)+A(n,m-1)\\ (n,m\\geq1).$$\n\nn、m 為非負整數，交點 A(0,0)=1 一致。此定義允許 m>n，不可套用一般二項式係數的定義域限制。可逐列填表，不必展開大量重複遞迴。\n\n自編延伸：此暫定函式其實滿足 $A(n,m)=\\binom{n+m+1}{n}$，但不等於 $\\binom nm$；由邊界及帕斯卡恆等式可驗證。正式教材不依此推測反向重建原題。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K10"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B020",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E10",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K10"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B021",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K10"
                  ],
                  "prompt": "畫 n=0～2、m=0～3 的表格，先填邊界再填內格。"
                },
                {
                  "id": "DS-CH01-S02-B022",
                  "type": "concept",
                  "title": "最大公因數（Greatest Common Divisor）",
                  "provenance": "教材整理",
                  "markdown": "歐幾里得演算法（Euclidean Algorithm）：$\\gcd(a,b)=\\gcd(b,a\\bmod b)$，其中 mod 表示除法餘數。對 a≥0、b>0，餘數在 0 至 b−1，規模嚴格縮小。\n\n```text\ngcd(a,b):\n    a = abs(a); b = abs(b)\n    if b == 0: return a\n    return gcd(b, a mod b)\n```\n\n先判斷 b=0 再取餘數，避免除以零。數學上 gcd(0,0) 依採用慣例另訂；此程式回傳 0 是程式規格選擇。單位成本下餘數步驟數為對數級；真實位元運算成本另計。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K11"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B023",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E11",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K11"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B024",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K11"
                  ],
                  "prompt": "逐行寫除法式，最後用公因數驗算結果。"
                },
                {
                  "id": "DS-CH01-S02-B025",
                  "type": "concept",
                  "title": "排列（Permutations）與回溯（Backtracking）",
                  "provenance": "教材整理",
                  "markdown": "n 個互異元素有 n! 種排列。固定位置 i 的候選元素，再處理後面位置；每個遞迴分支返回後交換回來，恢復下一個分支需要的狀態。\n\n```text\npermute(a, i, n):\n    if i == n:\n        output(a)\n        return\n    for j = i to n-1:\n        swap(a[i], a[j])\n        permute(a, i+1, n)\n        swap(a[i], a[j])\n```\n\n若每個完整排列列印 n 個元素，總時間 $\\Theta(n\\cdot n!)$；一般遞迴額外空間 $\\Theta(n)$，不含存下全部輸出的空間。重複元素可能產生重複排列。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K12"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B026",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E12",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K12"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B027",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K12"
                  ],
                  "prompt": "選一個分支寫出交換前、遞迴後、交換復原後三個狀態。"
                },
                {
                  "id": "DS-CH01-S02-B028",
                  "type": "concept",
                  "title": "河內塔（Towers of Hanoi）",
                  "provenance": "教材整理",
                  "markdown": "三根柱子中，把 n 個盤從 A 搬到 C、以 B 輔助，一次一盤且大盤不能放小盤上。先把 n−1 盤由 A 搬到 B，再搬最大盤 A→C，再把 n−1 盤 B→C。\n\n$$T(0)=0,\\qquad T(n)=2T(n-1)+1.$$\n\n展開 k 層得 $T(n)=2^kT(n-k)+(2^k-1)$。令 k=n，因 T(0)=0，得到 $T(n)=2^n-1$。此處 T 是移動次數；它也給出逐步輸出移動的時間 $\\Theta(2^n)$，遞迴堆疊 $\\Theta(n)$。\n\n最少性理由：最大盤移動前，n−1 個小盤必須離開來源並聚於另一柱；移動後還要搬到目標，兩段各至少需要 T(n−1) 次，另加最大盤一次。上述演算法剛好達到此界。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K13"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B029",
                  "type": "example",
                  "exampleId": "DS-CH01-S02-E13",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K13"
                  ]
                },
                {
                  "id": "DS-CH01-S02-B030",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S02-K13"
                  ],
                  "prompt": "列出 3 盤七步，逐步確認沒有大盤壓小盤。"
                },
                {
                  "id": "DS-CH01-S02-B031",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "| 方法 | 核心條件／辨識 | 單位成本時間 | 額外空間 |\n|---|---|---|---|\n| 選擇排序 | 每輪剩餘最小值 | $\\Theta(n^2)$ | $\\Theta(1)$ |\n| 迭代二元搜尋 | 已排序、規模減半 | 最佳$\\Theta(1)$，最差$\\Theta(\\log n)$ | $\\Theta(1)$ |\n| 遞迴階乘 | 非負整數、減一 | $\\Theta(n)$ | $\\Theta(n)$ |\n| 直接遞迴Fib | 兩分支且重疊 | $\\Theta(\\varphi^n)$ | $\\Theta(n)$ |\n| 迭代Fib | 保存最近兩項 | $\\Theta(n)$ | $\\Theta(1)$ |\n| 列印全排列 | n!個長n輸出 | $\\Theta(n\\cdot n!)$ | $\\Theta(n)$，不含輸出 |\n| 河內塔 | 搬小盤、搬最大、搬小盤 | $\\Theta(2^n)$ | $\\Theta(n)$ |\n\n最重要的檢查：①輸入是否合法；②基底是否先於非法操作；③規模是否縮小；④索引端點是否一致；⑤計算的是值、次數還是深度；⑥題目採哪一種成本模型。A(n,m) 定義待確認，不列成正式必背公式。"
                },
                {
                  "id": "DS-CH01-S02-B032",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S02-AS01"
                },
                {
                  "id": "DS-CH01-S02-B033",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S02-K04",
                    "DS-CH01-S02-K05",
                    "DS-CH01-S02-K06",
                    "DS-CH01-S02-K07",
                    "DS-CH01-S02-K08",
                    "DS-CH01-S02-K09",
                    "DS-CH01-S02-K10",
                    "DS-CH01-S02-K11",
                    "DS-CH01-S02-K12",
                    "DS-CH01-S02-K13"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S02-AS01",
                "scope": "section",
                "title": "1-2 小節測驗",
                "questionIds": [
                  "DS-CH01-S02-Q06",
                  "DS-CH01-S02-Q07",
                  "DS-CH01-S02-Q08",
                  "DS-CH01-S02-Q09",
                  "DS-CH01-S02-Q10",
                  "DS-CH01-S02-W03",
                  "DS-CH01-S02-W04"
                ],
                "totalPoints": 40,
                "scoringNote": "選擇題各 4 分，手寫題各 10 分，共 40 分。",
                "sourceId": "DS-AS02"
              }
            },
            {
              "id": "DS-CH01-S03",
              "title": "1-3 資料抽象",
              "sourceSectionId": "ds-01-03",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前教材整理重編，原始五張圖片、英文定義、完整程式及計費表格仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S03-K1301",
                "DS-CH01-S03-K1302",
                "DS-CH01-S03-K1303"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S03-B001",
                  "type": "concept",
                  "title": "資料型態",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "資料型態（Data Type）由一組資料物件，以及可作用在這些物件上的運算構成。\n\n$$\\text{資料型態}=\\text{物件集合}+\\text{運算集合}$$\n\n例如整數型態包含整數值，以及加法、減法、比較等操作。實際程式語言的整數通常有表示範圍；數學整數則沒有固定上限。描述型態時必須說明採用哪個模型。",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1301"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S03-E1301",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1301"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1301"
                  ],
                  "prompt": "用自己的話比較「規格」「表示方式」「效能」；為一個 Queue 設計三項操作。"
                },
                {
                  "id": "DS-CH01-S03-B004",
                  "type": "concept",
                  "title": "抽象資料型態",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "抽象資料型態（Abstract Data Type, ADT）描述資料及操作的對外行為，將規格與內部表示、程式實作分開。使用者依操作契約使用 ADT，無須依賴內部一定採用陣列或鏈結串列。\n\n| 層面 | 堆疊範例 |\n|---|---|\n| 資料物件 | 元素的有限序列 |\n| 行為規格 | push 加入頂端；pop 取出頂端，遵守後進先出（LIFO） |\n| 實作選擇 | 陣列、鏈結串列等 |\n| 成本 | 取決於實作及容量策略，不能僅從 ADT 名稱推定 |\n\n類別（class）可用來實作 ADT，但特定類別程式碼不等於抽象規格。相同 ADT 的不同實作可以有相同行為、不同效能。",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1302"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S03-E1302",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1302"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B006",
                  "type": "example",
                  "exampleId": "DS-CH01-S03-E14",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1302"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B007",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1302"
                  ],
                  "prompt": "用自己的話比較「規格」「表示方式」「效能」；為一個 Queue 設計三項操作。"
                },
                {
                  "id": "DS-CH01-S03-B008",
                  "type": "concept",
                  "title": "運算規格與角色",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "先前教材整理列出的運算規格項目為函式名稱（Function name）、引數型態（Argument type）與結果型態（Result type）。\n\n【延伸補充】要消除行為歧義，可再列前置條件、後置條件、狀態變化及錯誤情況。例如 pop 的結果可包含「被取出的元素」與「更新後堆疊」；可變物件實作則可能修改原物件。不得自行假定空堆疊 pop 必定回傳某個值。\n\n| 角色 | 意義 | 例子 |\n|---|---|---|\n| Creator／Constructor | 建立型態實例 | 建立空堆疊 |\n| Transformer | 改變狀態，或產生變換後實例 | push、pop |\n| Observer／Reporter | 查詢資訊 | size、isEmpty、top |\n\n判斷依據是操作效果。pop 常同時回報元素並改變狀態，因此不能因為它有回傳值就只列為 Observer。上述 Transformer 用語需與原圖定義再核對。",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1303"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B009",
                  "type": "example",
                  "exampleId": "DS-CH01-S03-E1303",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1303"
                  ]
                },
                {
                  "id": "DS-CH01-S03-B010",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1303"
                  ],
                  "prompt": "用自己的話比較「規格」「表示方式」「效能」；為一個 Queue 設計三項操作。"
                },
                {
                  "id": "DS-CH01-S03-B011",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "| 必記項目 | 一句話 |\n|---|---|\n| ADT | 定義資料與操作行為，內部表示可以更換 |\n| 運算規格 | 名稱、輸入型態、結果型態；完整契約再補條件與效果 |"
                },
                {
                  "id": "DS-CH01-S03-B012",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S03-AS01"
                },
                {
                  "id": "DS-CH01-S03-B013",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S03-K1301",
                    "DS-CH01-S03-K1302",
                    "DS-CH01-S03-K1303"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S03-AS01",
                "scope": "section",
                "title": "1-3 小節測驗",
                "questionIds": [
                  "DS-CH01-S03-Q1301",
                  "DS-CH01-S03-Q1302",
                  "DS-CH01-S03-Q1303",
                  "DS-CH01-S03-Q1304",
                  "DS-CH01-S03-Q1305",
                  "DS-CH01-S03-Q1306",
                  "DS-CH01-S03-Q1307"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a1301"
              }
            },
            {
              "id": "DS-CH01-S04",
              "title": "1-4 效能分析",
              "sourceSectionId": "ds-01-04",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前教材整理重編，原始五張圖片、英文定義、完整程式及計費表格仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S04-K1401",
                "DS-CH01-S04-K1402",
                "DS-CH01-S04-K1403",
                "DS-CH01-S04-K1404",
                "DS-CH01-S04-K1405",
                "DS-CH01-S04-K1406"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S04-B001",
                  "type": "concept",
                  "title": "效能分析",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "時間需求衡量工作量；空間需求衡量同時需要的儲存量。理論分析先訂輸入規模及成本模型，推導成長；實測在指定硬體、語言、編譯器及資料上取得執行結果。實測時間與理論複雜度不是相同量。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1401"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1401",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1401"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1401"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B004",
                  "type": "concept",
                  "title": "空間需求",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "$$S(P)=C+S_P(I)$$\n\nP 表示程式，I 表示輸入實例，C 是不隨輸入改變的固定空間，$S_P(I)$ 是依輸入變動的空間。分析漸近需求時，常再用 n 代表輸入規模。\n\n| 情況 | 在固定字長、每個元素固定大小的模型下 |\n|---|---|\n| 固定個數的參數、變數與暫存值 | $\\Theta(1)$ |\n| 新建 n 個元素的陣列 | $\\Theta(n)$ |\n| 新建 n×n 矩陣 | $\\Theta(n^2)$ |\n| 額外空間／輔助空間 | 不包含原有輸入；輸出是否計入須說明 |\n\n常數階不表示只占 1 byte。C/C++ 的陣列參數一般不複製整個陣列；不能因函式接收 list[] 就推定每次遞迴都配置一份 n 元素陣列。\n\n教材固定運算式範例：\n\n```c\nfloat abc(float a, float b, float c) {\n    return a+b+c*(a+b-c)/(a+b)+4;\n}\n```\n\n只有固定數量參數與暫存值，空間為常數階。這項成本結論不保證所有輸入都具有有效的數學結果；分母 a+b 的條件屬程式正確性問題。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1402"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1402",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1402"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1402"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B007",
                  "type": "concept",
                  "title": "迴圈與遞迴加總",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "```c\nfloat sum(float list[], int n) {\n    float tempsum = 0;\n    for (int i = 0; i < n; i++)\n        tempsum += list[i];\n    return tempsum;\n}\n```\n\n前提 $n\\ge 0$，list 有至少 n 個可讀元素。迴圈讀取 n 個元素，時間 $\\Theta(n)$（n 趨大時），輔助空間 $\\Theta(1)$；若包含輸入陣列，總空間為 $\\Theta(n)$。\n\n先前轉述的教材遞迴版本為：\n\n```c\nfloat rsum(float list[], int n) {\n    if (n)\n        return rsum(list, n-1) + list[n-1];\n    return list[0];\n}\n```\n\n【待原圖核對的勘誤】若 n 表示元素個數，此版本在 n=0 時讀 list[0]；非空加總會多加一次 list[0]。例如 n=2 時得到 $2list[0]+list[1]$。這是對轉述程式的分析，尚不能斷言原書確實如此印刷。\n\n【編者修正版】\n\n```c\nfloat rsum(float list[], int n) {\n    if (n == 0) return 0;\n    return rsum(list, n-1) + list[n-1];\n}\n```\n\n每次把 n 減一，直到 0，共 $n+1$ 次呼叫。若每層非遞迴工作為常數：\n\n$$T(n)=T(n-1)+\\Theta(1),\\quad T(0)=\\Theta(1)$$\n\n展開 n 次得到 $T(n)=T(0)+n\\Theta(1)=\\Theta(n)$。一般未消除遞迴的執行模型中，最深同時有 $n+1$ 層，每層固定空間，所以輔助空間 $\\Theta(n)$。此函式返回前仍要進行加法，不是直接回傳遞迴結果的尾遞迴形式。\n\n空間看最大同時存在的框架，不看整段程式累積呼叫次數；同時深度與總呼叫數必須分開計算。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1403"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1403",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1403"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1403"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B010",
                  "type": "concept",
                  "title": "步數、S/E 與頻率",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "S/E（Steps per Execution）表示敘述每次執行的計費步數；Frequency 表示執行次數。\n\n$$\\text{總步數}=\\sum_{i=1}^{m}s_i f_i$$\n\nΣ 是加總符號：i 從 1 到 m，把每列的 $s_i f_i$ 相加；m 是被計費的列數，$s_i$ 是該列每次步數，$f_i$ 是該列頻率。\n\n依先前表格採用的簡化計費約定：\n\n| sum 的計費項目 | S/E | 頻率 | 貢獻 |\n|---|---:|---:|---:|\n| tempsum 初始化 | 1 | 1 | 1 |\n| 迴圈控制列 | 1 | $n+1$ | $n+1$ |\n| 累加敘述 | 1 | n | n |\n| return | 1 | 1 | 1 |\n\n所以 $T(n)=1+(n+1)+n+1=2n+3$。這是表格的抽象計費方式，未把 i 初始化、i++ 等拆開另計；若題目要求每個基本操作逐項計費，就必須重新列式。不能把此數字當成通用 CPU 指令數。\n\n迴圈本體執行 n 次，但檢查 $n+1$ 次，因為最後還要一次失敗檢查。以 n=0 檢查邊界可知本體不執行、控制仍計一次。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1404"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B011",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1404",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1404"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B012",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1404"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B013",
                  "type": "concept",
                  "title": "矩陣加法",
                  "provenance": "教材整理 · 原圖待核對",
                  "markdown": "```c\nfor (i = 0; i < rows; i++)\n    for (j = 0; j < cols; j++)\n        c[i][j] = a[i][j] + b[i][j];\n```\n\n令 r=rows、c=cols；此段數學中的 c 為欄數，程式 c[i][j] 則是輸出矩陣，兩者意義不同。r、c 為非負整數且矩陣容量足夠。\n\n| 計費列 | 頻率 |\n|---|---:|\n| 外層控制 | r+1 |\n| 內層控制 | r(c+1) |\n| 元素相加及指定 | rc |\n\n按每列一次算一步：\n\n$$T(r,c)=(r+1)+r(c+1)+rc=2rc+2r+1.$$\n\n因為每一列重新啟動內層迴圈，所以每列都有 c+1 次內層控制。對 $r,c\\ge 1$，時間為 $\\Theta(rc)$；若包含零維度情形，保留 $\\Theta(rc+r+1)$ 才完整。$r=c=n\\ge 1$ 時為 $\\Theta(n^2)$。\n\n【待核對】先前整理指出原表總數可能與列項不合；本稿只確認上述三項相加的代數結果，原表是否誤印須看原圖。\n\n若輸出矩陣新配置，輸出空間為 $\\Theta(rc)$；若排除輸入輸出、只算迴圈索引等工作空間，輔助空間為 $\\Theta(1)$。判斷時先交代空間口徑。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1405"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B014",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1405",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1405"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B015",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1405"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B016",
                  "type": "concept",
                  "title": "漸近記號【延伸補充】",
                  "provenance": "補充延伸",
                  "markdown": "$f(n)=O(g(n))$ 表示存在正常數 C 與門檻 $n_0$，使所有 $n\\ge n_0$ 都滿足 $0\\le f(n)\\le Cg(n)$；Ω 是相應下界，Θ 同時要求上下界。這裡 C 是界的常數，與前文空間式的 C 屬不同使用情境。\n\n$2n+3=\\Theta(n)$，也屬 $O(n)$；它同時屬 $O(n^2)$，但後者較不緊。精確步數、漸近上界、緊確階不能混稱。定義沒有提到最佳或最壞案例，所以 O 不自動等於最壞情況；先選案例再分析函數。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1406"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B017",
                  "type": "example",
                  "exampleId": "DS-CH01-S04-E1406",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1406"
                  ]
                },
                {
                  "id": "DS-CH01-S04-B018",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1406"
                  ],
                  "prompt": "自行列出 n=0、1、3 的迴圈控制次數；畫出 rsum 呼叫堆疊最深的瞬間；註明是否計入輸入與輸出。"
                },
                {
                  "id": "DS-CH01-S04-B019",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "| 必記項目 | 一句話 |\n|---|---|\n| 時間分析 | 先定規模、成本模型與案例，再數頻率 |\n| 空間分析 | 先說是否計入輸入、輸出，再列同時配置 |\n| 精確步數 | 取決於一步的定義；不是通用指令數 |\n| 迴圈檢查 | n 次本體通常有 $n+1$ 次條件檢查 |\n| 遞迴空間 | 最大同時深度 × 每層額外空間 |\n| 矩陣加法 | 三列模型 $2rc+2r+1$；正維度為 $\\Theta(rc)$ |"
                },
                {
                  "id": "DS-CH01-S04-B020",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S04-AS01"
                },
                {
                  "id": "DS-CH01-S04-B021",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S04-K1401",
                    "DS-CH01-S04-K1402",
                    "DS-CH01-S04-K1403",
                    "DS-CH01-S04-K1404",
                    "DS-CH01-S04-K1405",
                    "DS-CH01-S04-K1406"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S04-AS01",
                "scope": "section",
                "title": "1-4 小節測驗",
                "questionIds": [
                  "DS-CH01-S04-Q1401",
                  "DS-CH01-S04-Q1402",
                  "DS-CH01-S04-Q1403",
                  "DS-CH01-S04-Q1404",
                  "DS-CH01-S04-Q1405",
                  "DS-CH01-S04-Q1406",
                  "DS-CH01-S04-Q1407"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a1401"
              }
            },
            {
              "id": "DS-CH01-S05",
              "title": "1-5 漸近符號",
              "sourceSectionId": "ds-s15",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S05-K15A",
                "DS-CH01-S05-K15B",
                "DS-CH01-S05-K15C"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S05-B-INTRO",
                  "type": "concept",
                  "title": "分析前，先讀符號與成本模型",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "$n$ 為輸入規模；$T(n)$ 為成本函數；$c,c_1,c_2$ 是不依賴 $n$ 的正常數；$n_0$ 是開始成立的門檻；$\\sum_{i=1}^n a_i$ 表示依序將 $a_1$ 到 $a_n$ 相加；$\\lfloor x\\rfloor$ 是不大於 $x$ 的最大整數；$\\Theta$ 為緊界，$O$ 為上界，$\\Omega$ 為下界。"
                },
                {
                  "id": "DS-CH01-S05-B001",
                  "type": "concept",
                  "title": "上界、下界、緊界",
                  "provenance": "教材整理",
                  "markdown": "以下假設函數最終非負，$g(n)$ 最終為正。大 O（Big-O）描述漸近上界：存在 $c>0,n_0$，使所有 $n\\ge n_0$ 滿足 $0\\le f(n)\\le cg(n)$。大 Omega 描述漸近下界，將後一不等式改為 $cg(n)\\le f(n)$。Theta 描述緊界：存在 $c_1,c_2>0,n_0$，使 $c_1g(n)\\le f(n)\\le c_2g(n)$。因此 $f=\\Theta(g)$ 當且僅當同時 $f=O(g)$ 與 $f=\\Omega(g)$。記號中的等號是慣用寫法，並非一般代數等式。\n\n| 記號 | 要證明什麼 | 常見錯誤 |\n|---|---|---|\n| $O(g)$ | 最終不超過某常數倍 $g$ | 誤認一定是最緊上界 |\n| $\\Omega(g)$ | 最終不小於某正常數倍 $g$ | 誤認必定是最好情況 |\n| $\\Theta(g)$ | 同時有上界與下界 | 只證明其中一邊 |",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15A"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S05-Q15E1",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15A"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15A"
                  ],
                  "prompt": "用定義寫出 $100n+6\\le101n$ 的成立門檻，並自行選另一組常數。"
                },
                {
                  "id": "DS-CH01-S05-B004",
                  "type": "concept",
                  "title": "多項式與成長順序",
                  "provenance": "教材整理",
                  "markdown": "固定次數 $m\\ge0$ 的多項式，若最高次係數為正，則最終為 $\\Theta(n^m)$；負低次項須以不等式控制，不能對所有小 $n$ 直接忽略。固定常數倍與較低次項不改變漸近階。\n\n$$1\\prec\\log n\\prec n\\prec n\\log n\\prec n^2\\prec2^n\\prec n!.$$\n\n此處 $\\prec$ 表示比值趨近 0 的嚴格漸近較慢，並非每個固定輸入都較小。例如 $n=O(n^2)$ 成立，但 $n^2=O(n)$ 不成立。",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15B"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S05-Q15E2",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15B"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15B"
                  ],
                  "prompt": "用定義寫出 $100n+6\\le101n$ 的成立門檻，並自行選另一組常數。"
                },
                {
                  "id": "DS-CH01-S05-B007",
                  "type": "concept",
                  "title": "情況分析與嚴格界",
                  "provenance": "補充延伸",
                  "markdown": "最好、平均、最壞情況先決定要研究哪個成本函數，再描述該函數的 $O,\\Omega,\\Theta$，兩者不是同一分類。小 o（little-o）定義：對每個 $c>0$，都存在門檻使 $f(n)\\le cg(n)$；在上述正性條件下等價於 $f(n)/g(n)\\to0$。小 omega 則表示比值趨近無窮。",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15C"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S05-Q15E3",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15C"
                  ]
                },
                {
                  "id": "DS-CH01-S05-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15C"
                  ],
                  "prompt": "用定義寫出 $100n+6\\le101n$ 的成立門檻，並自行選另一組常數。"
                },
                {
                  "id": "DS-CH01-S05-B010",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "緊界證兩邊；上界可不緊；常數不隨 $n$ 改變；不要將 $O$ 等同最壞情況。"
                },
                {
                  "id": "DS-CH01-S05-B011",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S05-AS01"
                },
                {
                  "id": "DS-CH01-S05-B012",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S05-K15A",
                    "DS-CH01-S05-K15B",
                    "DS-CH01-S05-K15C"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S05-AS01",
                "scope": "section",
                "title": "1-5 小節測驗",
                "questionIds": [
                  "DS-CH01-S05-Q15M1",
                  "DS-CH01-S05-Q15M2",
                  "DS-CH01-S05-Q15M3",
                  "DS-CH01-S05-Q15M4",
                  "DS-CH01-S05-Q15M5",
                  "DS-CH01-S05-Q15W1",
                  "DS-CH01-S05-Q15W2"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a15"
              }
            },
            {
              "id": "DS-CH01-S06",
              "title": "1-6 程式與遞迴時間複雜度",
              "sourceSectionId": "ds-s16",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S06-K16A",
                "DS-CH01-S06-K16B",
                "DS-CH01-S06-K16C"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S06-B-INTRO",
                  "type": "concept",
                  "title": "分析前，先讀符號與成本模型",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "$n$ 為輸入規模；$T(n)$ 為成本函數；$c,c_1,c_2$ 是不依賴 $n$ 的正常數；$n_0$ 是開始成立的門檻；$\\sum_{i=1}^n a_i$ 表示依序將 $a_1$ 到 $a_n$ 相加；$\\lfloor x\\rfloor$ 是不大於 $x$ 的最大整數；$\\Theta$ 為緊界，$O$ 為上界，$\\Omega$ 為下界。"
                },
                {
                  "id": "DS-CH01-S06-B001",
                  "type": "concept",
                  "title": "迴圈轉求和",
                  "provenance": "教材整理",
                  "markdown": "先指定關鍵操作，再確認每層實際範圍。獨立的兩個 $n$ 次迴圈共有 $n^2$ 次操作；若第二層依第一層變動，必須求和：\n\n$$\\sum_{i=1}^n\\sum_{j=1}^i1=\\sum_{i=1}^ni=\\frac{n(n+1)}2=\\Theta(n^2).$$\n\n\n\n固定外層 $k$，若 $1\\le i,j\\le k$ 且只計 $i\\ne j$，有序對共 $k^2-k$ 個；累加得 $\\sum_{k=1}^n(k^2-k)=n(n+1)(n-1)/3=\\Theta(n^3)$。",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16A"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S06-Q16E1",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16A"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16A"
                  ],
                  "prompt": "畫出兩種「兩個子呼叫」的遞迴樹，比較 $n/2$ 與 $n-1$ 的深度。"
                },
                {
                  "id": "DS-CH01-S06-B004",
                  "type": "concept",
                  "title": "倍增、減半與開根號",
                  "provenance": "教材整理",
                  "markdown": "$i$ 從 1 開始反覆乘固定 $b>1$，達到 $n$ 約需 $\\log_b n$ 輪；$i=n$ 開始取 $\\lfloor i/2\\rfloor$，到 0 前共有 $\\lfloor\\log_2n\\rfloor+1$ 輪（每次正值時先執行本體）。若停止條件改成 $i>1$，精確次數會不同。",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16B"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S06-Q16E2",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16B"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16B"
                  ],
                  "prompt": "畫出兩種「兩個子呼叫」的遞迴樹，比較 $n/2$ 與 $n-1$ 的深度。"
                },
                {
                  "id": "DS-CH01-S06-B007",
                  "type": "concept",
                  "title": "常見遞迴與成本",
                  "provenance": "教材整理",
                  "markdown": "以下小規模成本為正常數，除非另述，非遞迴工作是所列的緊確量級：\n\n| 遞迴式 | 思路 | 緊界 |\n|---|---|---|\n| $T(n)=T(n/2)+1$ | 一條路徑約 $\\log_2n$ 層 | $\\Theta(\\log n)$ |\n| $T(n)=2T(n/2)+1$ | 滿二元遞迴樹，$n$ 為 2 的冪時約 $2n-1$ 個節點 | $\\Theta(n)$ |\n| $T(n)=T(n-1)+n$ | $n+(n-1)+\\cdots+1$ | $\\Theta(n^2)$ |\n| $T(n)=2T(n-1)+1$ | 每層節點倍增、深度線性 | $\\Theta(2^n)$ |\n\n\n\n補充：單位成本模型假設基本算術操作成本固定；大整數計算不能未說明就採同一模型。遞迴時間與最大同時存在的呼叫堆疊不同；樸素 Fibonacci 時間 $\\Theta(\\varphi^n)$，堆疊深度 $\\Theta(n)$，其中 $\\varphi=(1+\\sqrt5)/2$。",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16C"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S06-Q16E3",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16C"
                  ]
                },
                {
                  "id": "DS-CH01-S06-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16C"
                  ],
                  "prompt": "畫出兩種「兩個子呼叫」的遞迴樹，比較 $n/2$ 與 $n-1$ 的深度。"
                },
                {
                  "id": "DS-CH01-S06-B010",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "先數操作、再寫和式；節點總數不等於堆疊深度。"
                },
                {
                  "id": "DS-CH01-S06-B011",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S06-AS01"
                },
                {
                  "id": "DS-CH01-S06-B012",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S06-K16A",
                    "DS-CH01-S06-K16B",
                    "DS-CH01-S06-K16C"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S06-AS01",
                "scope": "section",
                "title": "1-6 小節測驗",
                "questionIds": [
                  "DS-CH01-S06-Q16M1",
                  "DS-CH01-S06-Q16M2",
                  "DS-CH01-S06-Q16M3",
                  "DS-CH01-S06-Q16M4",
                  "DS-CH01-S06-Q16M5",
                  "DS-CH01-S06-Q16W1",
                  "DS-CH01-S06-Q16W2"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a16"
              }
            },
            {
              "id": "DS-CH01-S07",
              "title": "1-7 主定理",
              "sourceSectionId": "ds-s17",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S07-K17A",
                "DS-CH01-S07-K17B"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S07-B-INTRO",
                  "type": "concept",
                  "title": "分析前，先讀符號與成本模型",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "$n$ 為輸入規模；$T(n)$ 為成本函數；$c,c_1,c_2$ 是不依賴 $n$ 的正常數；$n_0$ 是開始成立的門檻；$\\sum_{i=1}^n a_i$ 表示依序將 $a_1$ 到 $a_n$ 相加；$\\lfloor x\\rfloor$ 是不大於 $x$ 的最大整數；$\\Theta$ 為緊界，$O$ 為上界，$\\Omega$ 為下界。"
                },
                {
                  "id": "DS-CH01-S07-B001",
                  "type": "concept",
                  "title": "形式與適用條件",
                  "provenance": "教材整理",
                  "markdown": "$$T(n)=aT(n/b)+f(n),\\qquad d=\\log_ba.$$\n\n$a\\ge1,b>1$ 必須是固定常數；$f(n)$ 最終非負，小規模成本為正常數。實際整數問題要處理取整，常見良性情況可維持階數，但不能完全略去遞迴的定義。\n\n| 情況 | 條件 | 結論 |\n|---|---|---|\n| 1：本層多項式級較小 | 存在 $\\varepsilon>0$，$f(n)=O(n^{d-\\varepsilon})$ | $\\Theta(n^d)$ |\n| 2：同級含對數因子 | $f(n)=\\Theta(n^d\\log^k n)$，本稿採 $k\\ge0$ 版本 | $\\Theta(n^d\\log^{k+1}n)$ |\n| 3：本層多項式級較大 | $f(n)=\\Omega(n^{d+\\varepsilon})$，且 $af(n/b)\\le cf(n)$ 對某 $c<1$ 最終成立 | $\\Theta(f(n))$ |\n\n第二列為常用擴充版；不能將 $k=-1$ 自動代入此表。第三列的額外條件稱正則性（regularity）。",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S07-Q17E1",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B003",
                  "type": "example",
                  "exampleId": "DS-CH01-S07-Q17E2",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B004",
                  "type": "example",
                  "exampleId": "DS-CH01-S07-Q17E3",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B005",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A"
                  ],
                  "prompt": "自己列出 $a,b,d,f$，寫清楚適用情況與正則性。"
                },
                {
                  "id": "DS-CH01-S07-B006",
                  "type": "concept",
                  "title": "快查與不能套用的情況",
                  "provenance": "教材整理",
                  "markdown": "| 遞迴式 | 緊界／限制 |\n|---|---|\n| $2T(n/2)+n$ | $\\Theta(n\\log n)$ |\n| $2T(n/2)+n\\log n$ | $\\Theta(n\\log^2n)$ |\n| $16T(n/4)+n^2$ | $\\Theta(n^2\\log n)$ |\n| $7T(n/2)+n^2$ | $\\Theta(n^{\\log_2 7})$ |\n| $2T(n/4)+\\sqrt n$ | $\\Theta(\\sqrt n\\log n)$ |\n| $nT(n/2)+1$ | $a=n$ 不是常數，不能套此表 |\n| $T(n-1)+n$ | 規模不是固定比例縮小，不能套此表 |",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17B"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B007",
                  "type": "example",
                  "exampleId": "DS-CH01-S07-Q17E4",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17B"
                  ]
                },
                {
                  "id": "DS-CH01-S07-B008",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17B"
                  ],
                  "prompt": "自己列出 $a,b,d,f$，寫清楚適用情況與正則性。"
                },
                {
                  "id": "DS-CH01-S07-B009",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "先檢查形式；再算臨界項；最後驗證條件。"
                },
                {
                  "id": "DS-CH01-S07-B010",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S07-AS01"
                },
                {
                  "id": "DS-CH01-S07-B011",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S07-K17A",
                    "DS-CH01-S07-K17B"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S07-AS01",
                "scope": "section",
                "title": "1-7 小節測驗",
                "questionIds": [
                  "DS-CH01-S07-Q17M1",
                  "DS-CH01-S07-Q17M2",
                  "DS-CH01-S07-Q17M3",
                  "DS-CH01-S07-Q17M4",
                  "DS-CH01-S07-Q17M5",
                  "DS-CH01-S07-Q17W1",
                  "DS-CH01-S07-Q17W2"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a17"
              }
            },
            {
              "id": "DS-CH01-S08",
              "title": "1-8 對數公式與函數排序",
              "sourceSectionId": "ds-s18",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S08-K18A",
                "DS-CH01-S08-K18B",
                "DS-CH01-S08-K18C"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S08-B-INTRO",
                  "type": "concept",
                  "title": "分析前，先讀符號與成本模型",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "$n$ 為輸入規模；$T(n)$ 為成本函數；$c,c_1,c_2$ 是不依賴 $n$ 的正常數；$n_0$ 是開始成立的門檻；$\\sum_{i=1}^n a_i$ 表示依序將 $a_1$ 到 $a_n$ 相加；$\\lfloor x\\rfloor$ 是不大於 $x$ 的最大整數；$\\Theta$ 為緊界，$O$ 為上界，$\\Omega$ 為下界。"
                },
                {
                  "id": "DS-CH01-S08-B001",
                  "type": "concept",
                  "title": "對數規則",
                  "provenance": "教材整理",
                  "markdown": "對數（logarithm）的底數 $b>0,b\\ne1$，真數為正；成長比較採固定 $b>1$。\n\n$$\\log_b1=0,\\quad\\log_bb=1,\\quad\\log_b(xy)=\\log_bx+\\log_by,\\quad\\log_b(x^r)=r\\log_bx.$$\n$$\\log_bx=\\frac{\\log_cx}{\\log_cb},\\quad b^{\\log_bx}=x,\\quad\\log_bb^r=r.$$\n\n換底時 $c>0,c\\ne1$。固定且大於 1 的底數之間只差正常數倍，因此不改變漸近階；精確計算仍要明寫底數。$\\log^kn=(\\log n)^k$，$\\log\\log n=\\log(\\log n)$。",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18A"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S08-Q18E1",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18A"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B003",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18A"
                  ],
                  "prompt": "先整理相同底數，再比較對數；寫出每個轉換的定義域。"
                },
                {
                  "id": "DS-CH01-S08-B004",
                  "type": "concept",
                  "title": "有限級數",
                  "provenance": "教材整理",
                  "markdown": "$$\\sum_{k=0}^m x^k=\\frac{x^{m+1}-1}{x-1}\\quad(x\\ne1),\\qquad\\sum_{k=0}^m k2^k=(m-1)2^{m+1}+2.$$\n\n第一式在 $x=1$ 時應直接用和式得 $m+1$。第二式可對第一式對 $x$ 微分，再乘 $x$ 並代入 2。",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18B"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B005",
                  "type": "example",
                  "exampleId": "DS-CH01-S08-Q18E2",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18B"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B006",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18B"
                  ],
                  "prompt": "先整理相同底數，再比較對數；寫出每個轉換的定義域。"
                },
                {
                  "id": "DS-CH01-S08-B007",
                  "type": "concept",
                  "title": "複雜函數比較",
                  "provenance": "教材整理",
                  "markdown": "$$a^{\\log_bn}=n^{\\log_ba},\\quad (\\log_2n)^{\\log_2n}=n^{\\log_2\\log_2n}.$$\n\n固定 $k,c>0$，有 $\\log^kn=o(n^c)$。Stirling 公式 $n!\\sim\\sqrt{2\\pi n}(n/e)^n$，其中 $\\sim$ 表示兩者比值趨近 1。因而固定 $a>1$ 時，$a^n\\prec n!\\prec n^n$。",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18C"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B008",
                  "type": "example",
                  "exampleId": "DS-CH01-S08-Q18E3",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18C"
                  ]
                },
                {
                  "id": "DS-CH01-S08-B009",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18C"
                  ],
                  "prompt": "先整理相同底數，再比較對數；寫出每個轉換的定義域。"
                },
                {
                  "id": "DS-CH01-S08-B010",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "$\\log^2n$ 與 $\\log\\log n$ 不同；精確和式先處理整數上限。"
                },
                {
                  "id": "DS-CH01-S08-B011",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S08-AS01"
                },
                {
                  "id": "DS-CH01-S08-B012",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S08-K18A",
                    "DS-CH01-S08-K18B",
                    "DS-CH01-S08-K18C"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S08-AS01",
                "scope": "section",
                "title": "1-8 小節測驗",
                "questionIds": [
                  "DS-CH01-S08-Q18M1",
                  "DS-CH01-S08-Q18M2",
                  "DS-CH01-S08-Q18M3",
                  "DS-CH01-S08-Q18M4",
                  "DS-CH01-S08-Q18M5",
                  "DS-CH01-S08-Q18W1",
                  "DS-CH01-S08-Q18W2"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a18"
              }
            },
            {
              "id": "DS-CH01-S09",
              "title": "1-9 猜測法與漸近關係",
              "sourceSectionId": "ds-s19",
              "contentVersion": "0.1-review",
              "reviewStatus": "draft",
              "notice": "第一階段審閱稿：依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。",
              "knowledgePointIds": [
                "DS-CH01-S09-K19A",
                "DS-CH01-S09-K19B"
              ],
              "blocks": [
                {
                  "id": "DS-CH01-S09-B-INTRO",
                  "type": "concept",
                  "title": "分析前，先讀符號與成本模型",
                  "provenance": "前置說明",
                  "knowledgePointIds": [],
                  "markdown": "$n$ 為輸入規模；$T(n)$ 為成本函數；$c,c_1,c_2$ 是不依賴 $n$ 的正常數；$n_0$ 是開始成立的門檻；$\\sum_{i=1}^n a_i$ 表示依序將 $a_1$ 到 $a_n$ 相加；$\\lfloor x\\rfloor$ 是不大於 $x$ 的最大整數；$\\Theta$ 為緊界，$O$ 為上界，$\\Omega$ 為下界。"
                },
                {
                  "id": "DS-CH01-S09-B001",
                  "type": "concept",
                  "title": "代入法／猜測加歸納",
                  "provenance": "教材整理",
                  "markdown": "猜測法（substitution method）：先由展開或遞迴樹猜階數，再用強歸納證明。要證明 $\\Theta$ 必須給上界與下界。歸納假設套用在更小規模，不能直接假設目前欲證的命題。",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19A"
                  ]
                },
                {
                  "id": "DS-CH01-S09-B002",
                  "type": "example",
                  "exampleId": "DS-CH01-S09-Q19E1",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19A"
                  ]
                },
                {
                  "id": "DS-CH01-S09-B003",
                  "type": "example",
                  "exampleId": "DS-CH01-S09-Q19E2",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19A"
                  ]
                },
                {
                  "id": "DS-CH01-S09-B004",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19A"
                  ],
                  "prompt": "自行寫基底、歸納假設、代入與結論四步。"
                },
                {
                  "id": "DS-CH01-S09-B005",
                  "type": "concept",
                  "title": "關係性質",
                  "provenance": "教材整理",
                  "markdown": "| 性質 | 敘述 |\n|---|---|\n| 遞移性 | $f=\\Theta(g),g=\\Theta(h)\\Rightarrow f=\\Theta(h)$；$O,\\Omega$ 也有遞移性 |\n| 反身性 | $f=\\Theta(f)$，也有 $f=O(f),f=\\Omega(f)$ |\n| 對稱性 | $f=\\Theta(g)\\iff g=\\Theta(f)$ |\n| 轉置對稱性 | $f=O(g)\\iff g=\\Omega(f)$ |",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19B"
                  ]
                },
                {
                  "id": "DS-CH01-S09-B006",
                  "type": "example",
                  "exampleId": "DS-CH01-S09-Q19E3",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19B"
                  ]
                },
                {
                  "id": "DS-CH01-S09-B007",
                  "type": "note",
                  "title": "停一下，寫成自己的理解",
                  "layout": "split",
                  "height": 230,
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19B"
                  ],
                  "prompt": "自行寫基底、歸納假設、代入與結論四步。"
                },
                {
                  "id": "DS-CH01-S09-B008",
                  "type": "summary",
                  "title": "考前摘要與條件檢查",
                  "markdown": "猜測不是證明；先處理基底；取整問題另驗；大 O 不具一般對稱性。"
                },
                {
                  "id": "DS-CH01-S09-B009",
                  "type": "assessment",
                  "assessmentId": "DS-CH01-S09-AS01"
                },
                {
                  "id": "DS-CH01-S09-B010",
                  "type": "note",
                  "title": "測驗後訂正與重點回想",
                  "layout": "inline",
                  "height": 250,
                  "prompt": "記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。",
                  "knowledgePointIds": [
                    "DS-CH01-S09-K19A",
                    "DS-CH01-S09-K19B"
                  ]
                }
              ],
              "assessment": {
                "id": "DS-CH01-S09-AS01",
                "scope": "section",
                "title": "1-9 小節測驗",
                "questionIds": [
                  "DS-CH01-S09-Q19M1",
                  "DS-CH01-S09-Q19M2",
                  "DS-CH01-S09-Q19M3",
                  "DS-CH01-S09-Q19M4",
                  "DS-CH01-S09-Q19M5",
                  "DS-CH01-S09-Q19W1",
                  "DS-CH01-S09-Q19W2"
                ],
                "totalPoints": null,
                "scoringNote": "原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。",
                "sourceId": "ds-a19"
              }
            }
          ]
        }
      ]
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
    },
    {
      "id": "LA-CH01-S03-MC01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "下列何者不是合法的基本列運算？",
      "options": [
        "$R_1\\leftrightarrow R_2$",
        "$R_2\\leftarrow-2R_2$",
        "$R_1\\leftarrow0R_1$",
        "$R_2\\leftarrow R_2+5R_1$"
      ],
      "points": 2,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K01"
      ],
      "tags": [
        "三種基本列運算與可逆性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-MC02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$A\\in\\mathbb R^{3\\times2}$。表示 $R_3\\leftarrow R_3+2R_1$ 的 $E$ 應為何？",
      "options": [
        "$I_3$ 的 $(3,1)$ 位置改成 2，且使用 $EA$",
        "$I_3$ 的 $(1,3)$ 位置改成 2，且使用 $EA$",
        "$I_2$ 的 $(2,1)$ 位置改成 2，且使用 $AE$",
        "$2I_3$，且使用 $EA$"
      ],
      "points": 2,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K02"
      ],
      "tags": [
        "基本矩陣與左乘"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-MC03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "先做 $E_1$，再做 $E_2$，最後做 $E_3$，得到 $I=E_3E_2E_1A$。何者正確？",
      "options": [
        "$A^{-1}=E_1E_2E_3$",
        "$A=E_3^{-1}E_2^{-1}E_1^{-1}$",
        "$A=E_1E_2E_3$",
        "$A=E_1^{-1}E_2^{-1}E_3^{-1}$"
      ],
      "points": 2,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K03",
        "LA-CH01-S03-K05"
      ],
      "tags": [
        "連續列運算的次序",
        "可逆性、基本矩陣分解與反矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-MC04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "同尺寸矩陣 $A\\sim B$，何者一定成立？",
      "options": [
        "行空間相同。",
        "零空間相同。",
        "若為方陣，行列式數值相同。",
        "若為方陣，特徵值相同。"
      ],
      "points": 2,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K04"
      ],
      "tags": [
        "列等價及不變量"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-MC05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$A\\in\\mathbb R^{2\\times3}$ 的秩為 2，已知存在 $2\\times2$ 矩陣 $P$ 使 $PA=B$。下列何者正確？",
      "options": [
        "因 $A$ 非方陣，$P$ 一定不唯一。",
        "$P$ 必定可逆。",
        "$P$ 唯一，但是否可逆仍取決於 $B$。",
        "$P=A^{-1}B$。"
      ],
      "points": 2,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K06",
        "LA-CH01-S03-K07"
      ],
      "tags": [
        "求轉換矩陣與左因子",
        "補充：PA=B 的唯一性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-HW01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "令 $A=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$。用增廣矩陣求 $A^{-1}$，寫出每一步基本矩陣，並將 $A$ 寫成基本矩陣的乘積。",
      "points": 5,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K01",
        "LA-CH01-S03-K02",
        "LA-CH01-S03-K03",
        "LA-CH01-S03-K05"
      ],
      "tags": [
        "三種基本列運算與可逆性",
        "基本矩陣與左乘",
        "連續列運算的次序",
        "可逆性、基本矩陣分解與反矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S03-HW02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S03",
      "title": "1-3 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "在實數體上，$A=\\begin{bmatrix}1&0&1\\\\0&0&0\\end{bmatrix}$，$B=\\begin{bmatrix}1&0&1\\\\1&0&1\\end{bmatrix}$。\n\n(1) 求所有滿足 $PA=B$ 的可逆 $2\\times2$ 矩陣。\n\n(2) 證明 $N(A)=N(B)$。\n\n(3) 判斷 $\\operatorname{Col}(A)$ 與 $\\operatorname{Col}(B)$ 是否相同，說明理由。",
      "points": 5,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S03-K04",
        "LA-CH01-S03-K06",
        "LA-CH01-S03-K07"
      ],
      "tags": [
        "列等價及不變量",
        "求轉換矩陣與左因子",
        "補充：PA=B 的唯一性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-T01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "若增廣矩陣化簡後有一列 $[0\\ 0\\ 0\\mid2]$，何者正確？",
      "options": [
        "無解",
        "唯一解",
        "無限多解",
        "資料不足"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S04-K01",
        "LA-CH01-S04-K07"
      ],
      "tags": [
        "線性方程組、矩陣表示與相容性",
        "秩與三種解情形"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-T02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "何者是 RREF？",
      "options": [
        "$\\begin{bmatrix}2&0\\\\0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}1&2&0\\\\0&0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S04-K04"
      ],
      "tags": [
        "REF、RREF、樞元與變數"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-T03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$A\\in\\mathbb R^{3\\times5}$ 且秩為 3。關於 $Ax=b$，何者正確？",
      "options": [
        "對每個 $b$ 都唯一解。",
        "對每個 $b\\in\\mathbb R^3$ 都有無限多解，且有兩個自由參數。",
        "只有 $b=0$ 時有解。",
        "解的自由參數有三個。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S04-K02",
        "LA-CH01-S04-K07"
      ],
      "tags": [
        "齊次與非齊次",
        "秩與三種解情形"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-T04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "若 $Ax_p=b$ 且 $\\ker(A)=\\operatorname{span}\\{u\\}$，其中 $u\\ne0$，則通解為何？此處 span 指所有純量倍數的集合。",
      "options": [
        "$tu$",
        "$x_p+u$",
        "$tx_p+u$",
        "$x_p+tu$，$t\\in\\mathbb R$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S04-K06"
      ],
      "tags": [
        "參數通解與核空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-T05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "系統 $x+y=1,2x+(k+2)y=3$ 何時無解？",
      "options": [
        "$k=1$",
        "$k=0$",
        "$k=3$",
        "所有 $k$ 都有解"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S04-K08"
      ],
      "tags": [
        "含參數分類"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-W01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "求 $x+2y-z=1,2x+4y-2z=2,y+z=3$ 的完整解集合。列出樞元欄、秩、自由變數，並寫成特解加齊次解。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S04-K04",
        "LA-CH01-S04-K05",
        "LA-CH01-S04-K06"
      ],
      "tags": [
        "REF、RREF、樞元與變數",
        "消去法與回代",
        "參數通解與核空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S04-W02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S04",
      "title": "1-4 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "設 $A\\in\\mathbb R^{m\\times n}$ 且 $Ax=b$ 相容。證明任兩解之差屬於 $\\ker(A)$，再證明全部解等於 $x_p+\\ker(A)$；最後說明唯一解的充要條件。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S04-K06",
        "LA-CH01-S04-K07"
      ],
      "tags": [
        "參數通解與核空間",
        "秩與三種解情形"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "A 為實 n×n 矩陣，哪個條件足以推出可逆？",
      "options": [
        "某個 Ax=b 有解。",
        "Ax=0 至少有零解。",
        "某個 Ax=b 恰有一解。",
        "每個對角元素非零。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S05-K01",
        "LA-CH01-S05-K04"
      ],
      "tags": [
        "可逆矩陣與齊次方程",
        "非齊次方程"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "A、B 為 m×n 矩陣，何者正確？",
      "options": [
        "若 A 與 B 列等價，則存在可逆 m×m 的 P 使 B=PA。",
        "列等價必保持行列式數值。",
        "一次基本列運算應表示為右乘。",
        "列等價必使欄空間作為原空間的子集合完全相同。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S05-K02"
      ],
      "tags": [
        "基本矩陣與列等價"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "實矩陣 A 為 5×3 且 rank A=3，何者必定成立？",
      "options": [
        "Ax=b 對每個 b∈R⁵ 都有解。",
        "AAᵀ 可逆。",
        "A 有雙側反矩陣。",
        "AᵀA 可逆。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S05-K07",
        "LA-CH01-S05-K10"
      ],
      "tags": [
        "長方形矩陣、消去律與乘積",
        "Gram 矩陣與單側逆"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "實 2×2 矩陣 A 的複數特徵值為 i、−i。何者可逆？",
      "options": [
        "A²+I。",
        "A。",
        "A−iI（在複數域）。",
        "A+iI（在複數域）。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S05-K08"
      ],
      "tags": [
        "特徵值與多項式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "A、B、A+B 為同階可逆方陣，何式必成立？",
      "options": [
        "$(A+B)^{-1}=A^{-1}+B^{-1}$。",
        "$(AB)^{-1}=A^{-1}B^{-1}$。",
        "$(A^{-1}+B^{-1})^{-1}=A(A+B)^{-1}B$。",
        "$A^{-1}+B^{-1}=A^{-1}B^{-1}(A+B)$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S05-K03",
        "LA-CH01-S05-K06"
      ],
      "tags": [
        "唯一性與運算",
        "反矩陣和式的分解"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "設 A∈Rⁿˣᵐ、B∈Rᵐˣⁿ，已知 Iₙ−AB 可逆。不使用行列式證明 Iₘ−BA 可逆，並標出所用向量的尺寸。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S05-K01",
        "LA-CH01-S05-K05"
      ],
      "tags": [
        "可逆矩陣與齊次方程",
        "不同尺寸的 I−AB 與 I−BA"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S05-Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S05",
      "title": "1-5 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "(a) N 為 3×3 矩陣且 N³=0，求 (I−N)⁻¹ 並驗證。（4 分）\n(b) A 為實 m×n 矩陣，證明 ker(AᵀA)=ker A，再寫出 A 滿欄秩時的一個左逆。（6 分）",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S05-K09",
        "LA-CH01-S05-K10"
      ],
      "tags": [
        "特殊結構",
        "Gram 矩陣與單側逆"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "若消去操作為 $R_3\\leftarrow R_3+2R_1$，相應的 $L_{31}$ 為何？",
      "options": [
        "$2$",
        "$-2$",
        "$1/2$",
        "$0$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S06-K02"
      ],
      "tags": [
        "消去倍數與演算法"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "哪個敘述正確？",
      "options": [
        "可逆矩陣一定能不換列 LU。",
        "奇異矩陣一定不能 LU。",
        "LU 的 $U$ 必須為 RREF。",
        "上三角矩陣可以取 $L=I,U=A$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S06-K03"
      ],
      "tags": [
        "不換列 LU 的適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "已知 $PA=LU$，要解 $Ax=b$，應先解哪一式？",
      "options": [
        "$Ly=Pb$",
        "$Ly=b$",
        "$Py=Lb$",
        "$Uy=Pb$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S06-K05",
        "LA-CH01-S06-K07"
      ],
      "tags": [
        "排列與 PA=LU",
        "利用 LU 解方程組"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$U=\\begin{bmatrix}2&6\\\\0&-4\\end{bmatrix}$，若 $D=\\operatorname{diag}(2,-4)$，則 $D^{-1}U$ 為何？",
      "options": [
        "$\\begin{bmatrix}1&-3/2\\\\0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}2&3\\\\0&-4\\end{bmatrix}$",
        "$\\begin{bmatrix}1&3\\\\0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}1&6\\\\0&1\\end{bmatrix}$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S06-K04"
      ],
      "tags": [
        "LDU 分解"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "消去第 2 步，第 2 行在第 2–4 列的當前值為 $0.01,-4,2$。部分選主元應如何做？",
      "options": [
        "將第 1 列換到第 2 列。",
        "交換第 2、3 列，選 $-4$ 為主元。",
        "交換第 2、4 列，選正數 2。",
        "不交換，因為 $0.01$ 非零。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S06-K06"
      ],
      "tags": [
        "部分選主元與數值精度"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "求 $A=\\begin{bmatrix}2&1&1\\\\4&3&3\\\\2&2&3\\end{bmatrix}$ 的不換列 LU，再解 $Ax=(4,10,7)^T$。須寫出倍數、前代與回代，並驗算。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S06-K02",
        "LA-CH01-S06-K07"
      ],
      "tags": [
        "消去倍數與演算法",
        "利用 LU 解方程組"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S06-Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S06",
      "title": "1-6 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "對 $A(t)=\\begin{bmatrix}t&1\\\\1&1\\end{bmatrix}$：\n\n(a) 判斷何時可逆。(b) 判斷何時有單位下三角的不換列 LU，並寫出分解。(c) 當 $t=0$，寫出 $PA=LU$。(d) 用 $t=1$ 說明可逆性與 LU 存在性的區別。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S06-K03",
        "LA-CH01-S06-K05"
      ],
      "tags": [
        "不換列 LU 的適用條件",
        "排列與 PA=LU"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "哪一項一定不是可逆的基本 row 操作？",
      "options": [
        "交換兩 rows。",
        "某 row 乘 −2。",
        "某 row 乘 0。",
        "將一 row 的 3 倍加到另一 row。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S07-K01"
      ],
      "tags": [
        "三種基本運算"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$A$ 為 $2\\times 3$，$E$ 為 $2\\times 2$ 且對應 $R_2\\leftarrow R_2+3R_1$。哪個式子表示此操作？",
      "options": [
        "$EA$。",
        "$AE$。",
        "$E+A$。",
        "$A E^T$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S07-K03"
      ],
      "tags": [
        "乘法方向與維度"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "先做 $E_1$ 的 row 操作、再做 $E_2$，結果為 $B$。正確還原公式是？",
      "options": [
        "$A=E_2E_1B$。",
        "$A=E_2^{-1}E_1^{-1}B$。",
        "$A=E_1E_2B$。",
        "$A=E_1^{-1}E_2^{-1}B$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S07-K04"
      ],
      "tags": [
        "操作順序與逆矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$A$ 為 $m\\times n$，$P$ 為任意可逆 $m\\times m$。下列何者一定成立？",
      "options": [
        "$\\operatorname{col}(PA)=\\operatorname{col}(A)$。",
        "$\\operatorname{ker}(PA)=\\operatorname{ker}(A)$。",
        "若 $A$ 為方陣，$\\operatorname{det}(PA)=\\operatorname{det}(A)$。",
        "若 $A$ 為方陣，$PA$ 與 $A$ 有相同特徵值。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S07-K05"
      ],
      "tags": [
        "等價關係與不變量"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$A$ 為 $n\\times n$。哪個條件足以推出 $A$ 可逆？",
      "options": [
        "$Ax=b$ 對至少一個 $b$ 有解。",
        "$Ax=0$ 有零解。",
        "$Ax=b$ 對每個 $b\\in F^n$ 都有解。",
        "$A$ 至少一個 row 非零。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH01-S07-K07"
      ],
      "tags": [
        "可逆方陣的等價條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}2&1\\\\4&3\\end{bmatrix}$，先 $R_2\\leftarrow R_2-2R_1$，再 $R_1\\leftarrow (1/2)R_1$。求 $E_1$、$E_2$、$B$；驗證 $B=E_2E_1A$，寫出從 $B$ 還原 $A$ 的操作。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S07-K02",
        "LA-CH01-S07-K04"
      ],
      "tags": [
        "基本矩陣（elementary matrix）",
        "操作順序與逆矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH01-S07-Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH01",
      "sectionId": "LA-CH01-S07",
      "title": "1-7 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "令 $A\\in F^{n\\times n}$。證明若某個 $b$ 使 $Ax=b$ 無解，則 $\\operatorname{nullity}(A)>0$。再說明非方陣 $A\\in F^{m\\times n}$ 時結論是否仍成立，給出反例。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH01-S07-K05",
        "LA-CH01-S07-K07"
      ],
      "tags": [
        "等價關係與不變量",
        "可逆方陣的等價條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-Q01",
      "sourceId": "DS-Q01",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "訂出「找不到回傳 -1」主要屬於？",
      "options": [
        "需求",
        "除錯",
        "編碼",
        "計時"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K01"
      ],
      "tags": [
        "五個階段"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-Q02",
      "sourceId": "DS-Q02",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "先把整體工作拆成讀入、處理、輸出，屬於？",
      "options": [
        "測試",
        "由上而下",
        "由下而上",
        "除錯"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K02"
      ],
      "tags": [
        "分析與設計"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-Q03",
      "sourceId": "DS-Q03",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "測試全通過，能合理推出？",
      "options": [
        "所有輸入正確",
        "不需要規格",
        "已測案例未發現錯誤",
        "不存在邊界錯誤"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K03"
      ],
      "tags": [
        "驗證"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-Q04",
      "sourceId": "DS-Q04",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "依中間值排除一半，必要前提為？",
      "options": [
        "資料互異",
        "元素個數為偶數",
        "已用鏈結串列",
        "依相同比較規則排序"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K02"
      ],
      "tags": [
        "分析與設計"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-Q05",
      "sourceId": "DS-Q05",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "定位造成錯誤輸出的程式行並修正，屬於？",
      "options": [
        "除錯",
        "需求",
        "資料抽象",
        "輸入設計"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K03"
      ],
      "tags": [
        "驗證"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-W01",
      "sourceId": "DS-W01",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 6 題",
      "type": "手寫問答題",
      "text": "為查詢已排序成績陣列設計服務，寫出五階段工作，並訂重複值與查無資料的規格。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K01",
        "DS-CH01-S01-K02"
      ],
      "tags": [
        "五個階段",
        "分析與設計"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S01-W02",
      "sourceId": "DS-W02",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S01",
      "title": "資料結構 1-1 小節測驗 · 第 7 題",
      "type": "手寫問答題",
      "text": "寫三種搜尋邊界測試並說明目的，再說明測試與正確性證明的差別。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S01-K03"
      ],
      "tags": [
        "驗證"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-Q06",
      "sourceId": "DS-Q06",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "下列何者正確？",
      "options": [
        "演算法必須有輸入",
        "明確性等於速度快",
        "可有零個輸入但須有輸出",
        "有效性要求線性時間"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K04"
      ],
      "tags": [
        "演算法及五項性質"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-Q07",
      "sourceId": "DS-Q07",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "5 個互異元素以本稿選擇排序處理，元素比較幾次？",
      "options": [
        "4",
        "10",
        "20",
        "依初始順序決定"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K05"
      ],
      "tags": [
        "選擇排序（Selection Sort）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-Q08",
      "sourceId": "DS-Q08",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "閉區間搜尋中 x<a[mid] 應如何更新？",
      "options": [
        "left=mid",
        "right=mid",
        "left=mid+1",
        "right=mid−1"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K06"
      ],
      "tags": [
        "二元搜尋（Binary Search）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-Q09",
      "sourceId": "DS-Q09",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "本稿直接遞迴 Fib(3)，含初始呼叫共有？",
      "options": [
        "5",
        "3",
        "4",
        "7"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K09"
      ],
      "tags": [
        "費波那契數列（Fibonacci Sequence）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-Q10",
      "sourceId": "DS-Q10",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "下列何者正確？",
      "options": [
        "回溯不需復原",
        "河內塔只需 n 次",
        "列印互異元素全排列需 $\\Theta(n\\cdot n!)$ 時間",
        "河內塔堆疊為 $\\Theta(2^n)$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K12",
        "DS-CH01-S02-K13"
      ],
      "tags": [
        "排列（Permutations）與回溯（Backtracking）",
        "河內塔（Towers of Hanoi）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-W03",
      "sourceId": "DS-W03",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 6 題",
      "type": "手寫問答題",
      "text": "寫非負整數階乘及非負整數 GCD 的遞迴虛擬碼；說明基底、規模下降與除零防護。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K07",
        "DS-CH01-S02-K08",
        "DS-CH01-S02-K11"
      ],
      "tags": [
        "遞迴設計（Recursion）",
        "階乘（Factorial）",
        "最大公因數（Greatest Common Divisor）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S02-W04",
      "sourceId": "DS-W04",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S02",
      "title": "資料結構 1-2 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "分別建立 Fibonacci 總呼叫數與河內塔移動數的遞迴式；在 K10 暫定定義下求 A(2,2)，並說明為何不可直接套 C(2,2)。\n\n**條件式自編練習：以下暫定定義待原圖確認，僅在此定義成立下作答。**\n\n$$A(n,0)=n+1,\\quad A(0,m)=1,\\quad A(n,m)=A(n-1,m)+A(n,m-1)\\ (n,m\\geq1).$$\n\n$n,m$ 為非負整數。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S02-K09",
        "DS-CH01-S02-K10",
        "DS-CH01-S02-K13"
      ],
      "tags": [
        "費波那契數列（Fibonacci Sequence）",
        "自訂二維遞迴：待原圖確認",
        "河內塔（Towers of Hanoi）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1301",
      "sourceId": "ds-q1301",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "資料型態的描述至少包括？",
      "options": [
        "只有大小",
        "物件與運算",
        "只有記憶體位址",
        "只有函式名稱。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1301"
      ],
      "tags": [
        "資料型態"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1302",
      "sourceId": "ds-q1302",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "何者屬實作選擇？",
      "options": [
        "Stack 後進先出",
        "pop 移除頂端",
        "空堆疊處理契約",
        "Stack 使用鏈結串列儲存。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302"
      ],
      "tags": [
        "抽象資料型態"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1303",
      "sourceId": "ds-q1303",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "哪個操作主要是 Observer？",
      "options": [
        "size()",
        "push(x)",
        "建立空堆疊",
        "清除全部元素。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1303"
      ],
      "tags": [
        "運算規格與角色"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1304",
      "sourceId": "ds-q1304",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "關於空 Stack 的 pop，何者正確？",
      "options": [
        "必回傳 0",
        "必忽略",
        "應由操作規格定義",
        "所有實作必當機。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302",
        "DS-CH01-S03-K1303"
      ],
      "tags": [
        "抽象資料型態",
        "運算規格與角色"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1305",
      "sourceId": "ds-q1305",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "相同 ADT 的兩種實作，何者可能不同？",
      "options": [
        "規格要求的元素順序",
        "操作的時間成本",
        "指定 pop 的抽象效果",
        "規格要求的錯誤行為。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302"
      ],
      "tags": [
        "抽象資料型態"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1306",
      "sourceId": "ds-q1306",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 6 題",
      "type": "手寫問答題",
      "text": "自行規定 Queue 的 create、enqueue、dequeue、front、isEmpty；寫出資料物件、操作角色及空 Queue 限制。不要求程式實作。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302",
        "DS-CH01-S03-K1303"
      ],
      "tags": [
        "抽象資料型態",
        "運算規格與角色"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S03-Q1307",
      "sourceId": "ds-q1307",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S03",
      "title": "資料結構 1-3 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "Stack 初始為空，依序 push(3)、push(8)、pop()、push(5)、top()。寫出狀態與回傳值，並說明以陣列或鏈結串列實作是否改變抽象結果。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302"
      ],
      "tags": [
        "抽象資料型態"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1401",
      "sourceId": "ds-q1401",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$n\\ge 0$，for(i=0;i<n;i++) 的條件檢查次數為？",
      "options": [
        "n−1",
        "n",
        "2n",
        "$n+1$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1404"
      ],
      "tags": [
        "步數、S/E 與頻率"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1402",
      "sourceId": "ds-q1402",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "輸入 n 個元素，用固定變數迴圈加總，輔助空間為？採固定字長模型。",
      "options": [
        "$\\Theta(n)$",
        "$\\Theta(1)$",
        "$\\Theta(n^2)$",
        "由加總數值大小直接決定。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1402"
      ],
      "tags": [
        "空間需求"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1403",
      "sourceId": "ds-q1403",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "一般未消除遞迴的執行模型下，每層固定空間，遞迴深度 $n+1$，輔助空間為？",
      "options": [
        "$\\Theta(1)$",
        "$\\Theta(\\log n)$",
        "$\\Theta(n)$",
        "$\\Theta(n^2)$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1403"
      ],
      "tags": [
        "迴圈與遞迴加總"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1404",
      "sourceId": "ds-q1404",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$r,c\\ge 1$，依本稿矩陣加法三列計費規則，總步數為？",
      "options": [
        "$2rc+2r+1$",
        "rc",
        "2rc+r+1",
        "r+c。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1405"
      ],
      "tags": [
        "矩陣加法"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1405",
      "sourceId": "ds-q1405",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "何者正確？",
      "options": [
        "$O(1)$ 表示 1 byte",
        "$O(n)$ 就是精確 n 步",
        "一次實測可決定漸近階",
        "$2n+3$ 屬 $\\Theta(n)$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1401",
        "DS-CH01-S04-K1406"
      ],
      "tags": [
        "效能分析",
        "漸近記號【延伸補充】"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1406",
      "sourceId": "ds-q1406",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "對本稿轉述的錯誤版 rsum，以 [4,6]、n=2 展開，指出缺陷、修正程式，並分析修正後時間與輔助空間。\n\n以下是待原圖核對的轉述版本；此處 $n$ 表示元素個數：\n\n```c\nfloat rsum(float list[], int n) {\n    if (n)\n        return rsum(list, n-1) + list[n-1];\n    return list[0];\n}\n```",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1403"
      ],
      "tags": [
        "迴圈與遞迴加總"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S04-Q1407",
      "sourceId": "ds-q1407",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S04",
      "title": "資料結構 1-4 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "以下程式採三列計費：外層控制、內層控制、元素相加及指定，每列每次執行均算一步。\n\n```c\nfor (i = 0; i < rows; i++)\n    for (j = 0; j < cols; j++)\n        c[i][j] = a[i][j] + b[i][j];\n```\n\n依本稿三列計費規則，推導 r×c 矩陣加法步數，計算 r=3,c=2 的結果，分別分析「計入新輸出」與「不計輸入輸出」的空間，再處理 c=0 的時間。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S04-K1404",
        "DS-CH01-S04-K1405"
      ],
      "tags": [
        "步數、S/E 與頻率",
        "矩陣加法"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15M1",
      "sourceId": "ds-q15m1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$f(n)=O(g(n))$ 的量詞順序何者正確？",
      "options": [
        "每個 $c>0$ 都對所有 $n\\ge1$ 成立",
        "存在 $c>0,n_0$，對所有 $n\\ge n_0$ 成立",
        "每個 $n$ 可任選不同 $c_n$",
        "存在一個 $n$ 成立即可"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15A"
      ],
      "tags": [
        "上界、下界、緊界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15M2",
      "sourceId": "ds-q15m2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "哪個敘述錯誤？",
      "options": [
        "$n=O(n^2)$",
        "$n^2=\\Omega(n)$",
        "$n^2=O(n)$",
        "$3n+1=\\Theta(n)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15A"
      ],
      "tags": [
        "上界、下界、緊界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15M3",
      "sourceId": "ds-q15m3",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$100n+6\\le101n$ 對整數 $n$ 從何值起恆成立？",
      "options": [
        "1",
        "2",
        "5",
        "6"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15B"
      ],
      "tags": [
        "多項式與成長順序"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15M4",
      "sourceId": "ds-q15m4",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "已知 $f/g\\to0$ 且兩者最終正，何者必成立？",
      "options": [
        "$f=o(g)$",
        "$f=\\Theta(g)$",
        "$g=O(f)$",
        "$f=\\Omega(g)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15C"
      ],
      "tags": [
        "情況分析與嚴格界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15M5",
      "sourceId": "ds-q15m5",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "「最壞情況」與大 O 的關係何者正確？",
      "options": [
        "兩者同義",
        "大 O 只可用於最壞情況",
        "先決定成本函數，再描述其漸近界",
        "Omega 只可描述最好情況"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15C"
      ],
      "tags": [
        "情況分析與嚴格界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15W1",
      "sourceId": "ds-q15w1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "用定義證明 $5n^2+2n+8=\\Theta(n^2)$。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15A"
      ],
      "tags": [
        "上界、下界、緊界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15W2",
      "sourceId": "ds-q15w2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S05",
      "title": "資料結構 1-5 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "令 $g(n)=n$；偶數時 $f(n)=n$、奇數時 $f(n)=1$。判斷 $f=O(g)$、$f=\\Omega(g)$、$f=o(g)$，並說明。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S05-K15C"
      ],
      "tags": [
        "情況分析與嚴格界"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16M1",
      "sourceId": "ds-q16m1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$\\sum_{i=1}^n\\sum_{j=1}^i1$ 的值為何？",
      "options": [
        "$n^2$",
        "$n(n+1)/2$",
        "$n(n-1)/2$",
        "$2^n$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16A"
      ],
      "tags": [
        "迴圈轉求和"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16M2",
      "sourceId": "ds-q16m2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "本題採 $n$ 為正整數。\n\n$i=n$；當 $i>0$ 時先操作再令 $i=\\lfloor i/2\\rfloor$。操作幾次？",
      "options": [
        "$\\lfloor\\log_2n\\rfloor+1$",
        "$n$",
        "$\\log_2\\log_2n$",
        "$2^n$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16B"
      ],
      "tags": [
        "倍增、減半與開根號"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16M3",
      "sourceId": "ds-q16m3",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$T(n)=2T(n-1)+1,T(1)=1$ 的緊界？",
      "options": [
        "$\\Theta(n)$",
        "$\\Theta(n\\log n)$",
        "$\\Theta(n^2)$",
        "$\\Theta(2^n)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16C"
      ],
      "tags": [
        "常見遞迴與成本"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16M4",
      "sourceId": "ds-q16m4",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$T(n)=T(\\sqrt n)+1$、$n\\le2$ 時停止，緊界為何？",
      "options": [
        "$\\Theta(\\sqrt n)$",
        "$\\Theta(\\log n)$",
        "$\\Theta(\\log\\log n)$",
        "$\\Theta(1)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16B"
      ],
      "tags": [
        "倍增、減半與開根號"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16M5",
      "sourceId": "ds-q16m5",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "固定 $k$，$1\\le i,j\\le k$ 且 $i\\ne j$，有序對個數？",
      "options": [
        "$k^2$",
        "$k^2-k$",
        "$k(k-1)/2$",
        "$2k$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16A"
      ],
      "tags": [
        "迴圈轉求和"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16W1",
      "sourceId": "ds-q16w1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "令 i 從 1 到 n、j 從 0 到 i²−1、z 從 0 到 j−1，每次 z 迴圈執行一個固定成本操作。列出總次數及緊界。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16A"
      ],
      "tags": [
        "迴圈轉求和"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16W2",
      "sourceId": "ds-q16w2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S06",
      "title": "資料結構 1-6 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "$T(n)=T(n-1)+n,T(1)=1$，求精確式並證明緊界。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S06-K16C"
      ],
      "tags": [
        "常見遞迴與成本"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17M1",
      "sourceId": "ds-q17m1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "何式不能直接套本稿主定理？",
      "options": [
        "$2T(n/2)+n$",
        "$4T(n/2)+1$",
        "$nT(n/2)+1$",
        "$3T(n/4)+n^2$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17M2",
      "sourceId": "ds-q17m2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$T(n)=2T(n/4)+\\sqrt n$ 的緊界？",
      "options": [
        "$\\Theta(\\sqrt n\\log n)$",
        "$\\Theta(\\sqrt n)$",
        "$\\Theta(n)$",
        "$\\Theta(n\\log n)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17M3",
      "sourceId": "ds-q17m3",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$T(n)=8T(n/2)+n^2$ 的緊界？",
      "options": [
        "$\\Theta(n^2)$",
        "$\\Theta(n^2\\log n)$",
        "$\\Theta(n^3\\log n)$",
        "$\\Theta(n^3)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17M4",
      "sourceId": "ds-q17m4",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$3T(n/2)+n^2$ 的正則性比值 $3f(n/2)/f(n)$？",
      "options": [
        "3",
        "3/4",
        "1",
        "4/3"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17M5",
      "sourceId": "ds-q17m5",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$27T(n/3)+n^3/\\log n$ 不能直接套本稿三情況的原因？",
      "options": [
        "a 不是常數",
        "b 不大於 1",
        "與臨界項無多項式差距，且不符本稿 k≥0 的同級條件",
        "遞迴樹也無法分析"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17B"
      ],
      "tags": [
        "快查與不能套用的情況"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17W1",
      "sourceId": "ds-q17w1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "解 $T(n)=3T(n/4)+n\\log n$，並檢查第三種情況條件。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17W2",
      "sourceId": "ds-q17w2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S07",
      "title": "資料結構 1-7 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "解 $T(n)=4T(n/2)+n^2\\log n$，再解釋每層成本。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "tags": [
        "形式與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18M1",
      "sourceId": "ds-q18m1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$\\log^2n$ 代表何者？",
      "options": [
        "$\\log(\\log n)$",
        "$\\log(n^2)$",
        "$2\\log n$",
        "$(\\log n)^2$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18A"
      ],
      "tags": [
        "對數規則"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18M2",
      "sourceId": "ds-q18m2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$4^{\\log_2n}$ 等於？",
      "options": [
        "$n^2$",
        "$4n$",
        "$n^4$",
        "$\\log_2(n^4)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18A"
      ],
      "tags": [
        "對數規則"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18M3",
      "sourceId": "ds-q18m3",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$\\sum_{k=0}^{m}k2^k$ 等於？",
      "options": [
        "$m2^m$",
        "$2^{m+1}-1$",
        "$(m-1)2^{m+1}+2$",
        "$m(m+1)/2$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18B"
      ],
      "tags": [
        "有限級數"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18M4",
      "sourceId": "ds-q18m4",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "哪個由慢到快的順序正確？",
      "options": [
        "$n!\\prec2^n\\prec n^n$",
        "$2^n\\prec n!\\prec n^n$",
        "$n^n\\prec n!\\prec2^n$",
        "$n!\\prec n^n\\prec2^n$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18C"
      ],
      "tags": [
        "複雜函數比較"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18M5",
      "sourceId": "ds-q18m5",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$n>1$ 時 $n^{1/\\log_2n}$ 等於？",
      "options": [
        "1",
        "$n$",
        "$\\log_2n$",
        "2"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18A"
      ],
      "tags": [
        "對數規則"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18W1",
      "sourceId": "ds-q18w1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "由有限等比和推導 $\\sum_{k=0}^m k2^k$。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18B"
      ],
      "tags": [
        "有限級數"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18W2",
      "sourceId": "ds-q18w2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S08",
      "title": "資料結構 1-8 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "將 $\\log\\log n,\\sqrt{\\log n},\\log^2n,\\sqrt n$ 由慢到快排序，說明兩個關鍵比較。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S08-K18C"
      ],
      "tags": [
        "複雜函數比較"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19M1",
      "sourceId": "ds-q19m1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "猜到遞迴階數後，下一步應做何事？",
      "options": [
        "直接當成證明",
        "只驗一個很大的 n",
        "處理基底並用歸納或其他方法證明界限",
        "只跑幾個測資"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "tags": [
        "代入法／猜測加歸納"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19M2",
      "sourceId": "ds-q19m2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$T(1)>0$ 時，$T(n)\\le cn\\log_2n$ 若從 $n=1$ 起證明，有什麼問題？",
      "options": [
        "右邊在 n=1 為 0，涵蓋不了正基底",
        "c 一定要等於 1",
        "log 不能用於遞迴",
        "所有遞迴都不能歸納"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "tags": [
        "代入法／猜測加歸納"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19M3",
      "sourceId": "ds-q19m3",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$f=O(g)$ 等價於？",
      "options": [
        "$g=O(f)$",
        "$g=\\Omega(f)$",
        "$f=\\Theta(g)$",
        "$f=o(g)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19B"
      ],
      "tags": [
        "關係性質"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19M4",
      "sourceId": "ds-q19m4",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$f=O(g),g=O(h)$ 時可推出？",
      "options": [
        "$h=O(f)$",
        "$f=\\Theta(h)$",
        "$f=o(h)$",
        "$f=O(h)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19B"
      ],
      "tags": [
        "關係性質"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19M5",
      "sourceId": "ds-q19m5",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$T(n)=2T(\\lfloor n/2\\rfloor)+n$ 的取整應如何處理？",
      "options": [
        "每層總成本一定恰為 n",
        "可省略所有基底",
        "上界用 floor≤n/2；下界另外控制各層取整損失",
        "答案必變成線性"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "tags": [
        "代入法／猜測加歸納"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19W1",
      "sourceId": "ds-q19w1",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "$T(n)=2T(n/2)+n$、$n=2^k,T(1)=t>0$，用歸納證明精確解。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "tags": [
        "代入法／猜測加歸納"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19W2",
      "sourceId": "ds-q19w2",
      "subjectId": "data-structures",
      "chapterId": "DS-CH01",
      "sectionId": "DS-CH01-S09",
      "title": "資料結構 1-9 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "用大 O 定義證明遞移性，並給出大 O 不對稱的例子。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "DS-CH01-S09-K19B"
      ],
      "tags": [
        "關係性質"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q101",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$\\det\\begin{bmatrix}2&-1\\\\3&4\\end{bmatrix}=$？",
      "options": [
        "5",
        "−11",
        "11",
        "−5。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S01-K01"
      ],
      "tags": [
        "矩陣與行列式不同"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q102",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "二階 $\\det A=5$，$\\det(2A)=$？",
      "options": [
        "20",
        "10",
        "5",
        "25。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S01-K03"
      ],
      "tags": [
        "單列縮放與整體縮放"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q103",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "已知 $\\det[u;w]=4,\\det[v;w]=1$，$\\det[u-3v;w]=$？",
      "options": [
        "7",
        "−1",
        "3",
        "1。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S01-K02"
      ],
      "tags": [
        "固定其餘列時的線性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q104",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "哪個矩陣行列式為0？",
      "options": [
        "$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$",
        "$\\begin{bmatrix}2&4\\\\1&2\\end{bmatrix}$",
        "$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$",
        "$\\begin{bmatrix}1&1\\\\1&0\\end{bmatrix}$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S01-K04"
      ],
      "tags": [
        "相同列、比例列、零列"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q105",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "下列何者正確？",
      "options": [
        "每個矩陣都有行列式",
        "二階 $\\det A=0$ 則 $A=0$",
        "固定其餘列時，對一列具有線性",
        "$\\det(A+B)=\\det A+\\det B$ 恆成立。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S01-K01",
        "LA-CH02-S01-K02"
      ],
      "tags": [
        "矩陣與行列式不同",
        "固定其餘列時的線性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q106",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}-2&3\\\\4&1\\end{bmatrix}$。求 $\\det A$，並比較僅第二列乘−2與整體乘−2時的行列式。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S01-K01",
        "LA-CH02-S01-K03"
      ],
      "tags": [
        "矩陣與行列式不同",
        "單列縮放與整體縮放"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S01-Q107",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S01",
      "title": "線性代數 2-1 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "用二階定義證明 $\\det[u+kv;w]=\\det[u;w]+k\\det[v;w]$，並給出整體加法線性不成立的反例。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S01-K02"
      ],
      "tags": [
        "固定其餘列時的線性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q201",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "若 $M_{23}=-4$，則 $C_{23}=$？",
      "options": [
        "−4",
        "4",
        "0",
        "−1。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S02-K01"
      ],
      "tags": [
        "子矩陣、子式、餘因子"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q202",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$\\det\\begin{bmatrix}-2&7&1\\\\0&3&5\\\\0&0&4\\end{bmatrix}=$？",
      "options": [
        "24",
        "−9",
        "5",
        "−24。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S02-K04"
      ],
      "tags": [
        "三角矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q203",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "最適合直接展開的位置為何？$A=\\begin{bmatrix}1&2&0&3\\\\0&0&5&0\\\\2&1&0&4\\\\3&2&0&1\\end{bmatrix}$",
      "options": [
        "第二列",
        "第一列",
        "第一行（縱向）",
        "第四列。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S02-K02"
      ],
      "tags": [
        "Laplace展開"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q204",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "對任意三階矩陣何者恆成立？",
      "options": [
        "$\\det(-A)=\\det A$",
        "$\\sum_j a_{1j}C_{2j}=\\det A$",
        "$\\det(A^T)=\\det A$",
        "行列式等於主對角乘積。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S02-K03",
        "LA-CH02-S02-K05"
      ],
      "tags": [
        "多重線性與轉置",
        "不同列的元素與餘因子配對"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q205",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$W=\\begin{vmatrix}x&1\\\\x^2&x\\end{vmatrix}$，$W'=$？",
      "options": [
        "2x",
        "0",
        "2",
        "$x^2$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH02-S02-K06"
      ],
      "tags": [
        "函數行列式的微分"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q206",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "沿第二列計算 $\\det\\begin{bmatrix}1&2&0\\\\0&3&4\\\\2&0&5\\end{bmatrix}$，列出所有非零項的子式和餘因子。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S02-K01",
        "LA-CH02-S02-K02"
      ],
      "tags": [
        "子矩陣、子式、餘因子",
        "Laplace展開"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S02-Q207",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S02",
      "title": "線性代數 2-2 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "對 $W=\\det\\begin{bmatrix}f_1&f_2&f_3\\\\f'_1&f'_2&f'_3\\\\f''_1&f''_2&f''_3\\end{bmatrix}$，假設函數三次可微。逐項推導 $W'$，說明哪兩項為0、為何；再用 $f_1=1,f_2=x,f_3=x^2$ 驗證。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S02-K06"
      ],
      "tags": [
        "函數行列式的微分"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "$A$ 為四階方陣，$\\det A=-3$。求 $\\det(-2A)$。",
      "options": [
        "$6$",
        "$-48$",
        "$48$",
        "$-6$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K01",
        "LA-CH02-S03-K04"
      ],
      "tags": [
        "三類基本運算與零值",
        "轉置、乘法與反矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "以下何者對所有實數同階方陣 $A,B$ 均成立？",
      "options": [
        "$\\det(A+B)=\\det A+\\det B$",
        "若 $A,B$ 列等價，則 $\\det A=\\det B$",
        "$\\det(AB)=\\det(BA)$",
        "$\\det A=\\det B$ 可推出 $A=B$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K01",
        "LA-CH02-S03-K02"
      ],
      "tags": [
        "三類基本運算與零值",
        "多重線性 Multilinearity"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$A$ 為三階方陣，$K_{ij}$ 是其餘因子。下列何者必為 0？",
      "options": [
        "$\\sum_{j=1}^3a_{2j}K_{2j}$",
        "$\\sum_{j=1}^3a_{1j}K_{1j}$",
        "$\\sum_{i=1}^3a_{i3}K_{i3}$",
        "$\\sum_{j=1}^3a_{1j}K_{2j}$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K03"
      ],
      "tags": [
        "餘因子與錯位展開"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$P$ 可逆，$M=\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}$ 的大小相容。哪一個公式必成立？",
      "options": [
        "$\\det M=\\det P\\det(S-RP^{-1}Q)$",
        "$\\det M=\\det P\\det(S-QP^{-1}R)$",
        "$\\det M=\\det P+\\det S$",
        "不需交換條件，永遠有 $\\det M=\\det(PS-RQ)$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K07"
      ],
      "tags": [
        "分塊三角與 Schur 補"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$D_n$ 為主對角線全為 3、上下副對角線全為 1 的 $n$ 階三對角行列式。何者正確？",
      "options": [
        "$D_2=10$",
        "$D_n=3D_{n-1}+D_{n-2}$",
        "$D_0=1,D_1=3,D_n=3D_{n-1}-D_{n-2}$",
        "$D_n=3^n$"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K11"
      ],
      "tags": [
        "三對角行列式與遞迴"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-H01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "用基本列運算計算\n\n$$\\det\\begin{bmatrix}1&2&1\\\\2&5&3\\\\0&1&2\\end{bmatrix}.$$\n\n須標示每一步是否改變行列式，並判斷矩陣是否可逆。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K01",
        "LA-CH02-S03-K06"
      ],
      "tags": [
        "三類基本運算與零值",
        "初等矩陣 Elementary Matrix"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S03-H02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S03",
      "title": "線性代數 2-3 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "設 $A,B$ 為實數奇數階方陣，且 $AB=-BA$。證明至少一個不可逆，並用二階反例說明偶數階不能直接使用同一結論。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S03-K05"
      ],
      "tags": [
        "可逆性、參數與奇數階"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "若 $C=[C_{ij}]$ 為 $A$ 的餘因子矩陣，下列哪個等於 $\\operatorname{adj}A$？",
      "options": [
        "$C$",
        "$C^T$",
        "$A^T$",
        "$A^{-1}$（不附可逆條件）"
      ],
      "points": 8,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K01"
      ],
      "tags": [
        "從餘因子建立伴隨矩陣"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "$A$ 為三階方陣且 $\\det A=0$，哪項必成立？",
      "options": [
        "$A^{-1}=0$",
        "$\\operatorname{adj}A=0$",
        "$\\operatorname{rank}A=0$",
        "$A\\operatorname{adj}A=0$"
      ],
      "points": 8,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K02",
        "LA-CH02-S04-K03"
      ],
      "tags": [
        "核心恆等式",
        "反矩陣公式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "若 $A$ 為四階方陣且 $\\det A=-2$，則 $\\det(\\operatorname{adj}A)$ 為何？",
      "options": [
        "$-8$",
        "$4$",
        "$16$",
        "$-2$"
      ],
      "points": 8,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K04"
      ],
      "tags": [
        "性質與適用條件"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "方程組 $Ax=b$ 為三階，已知 $\\Delta=0$ 且所有 $\\Delta_i=0$，可作何判斷？",
      "options": [
        "必唯一解",
        "必無解",
        "尚須檢查相容性",
        "必無限多解"
      ],
      "points": 8,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K07"
      ],
      "tags": [
        "克拉瑪法則（Cramer's rule）"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "三階矩陣 $A$ 的秩為2，下列何者正確？",
      "options": [
        "$\\operatorname{adj}A$ 的秩為2",
        "$\\operatorname{adj}A$ 的秩為1",
        "$\\operatorname{adj}A=0$",
        "$\\operatorname{adj}(\\operatorname{adj}A)=I_3$"
      ],
      "points": 8,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K05",
        "LA-CH02-S04-K06"
      ],
      "tags": [
        "逆矩陣與重複伴隨",
        "不可逆時，伴隨不一定為零"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "對 $A=\\begin{bmatrix}1&2&0\\\\0&1&0\\\\0&0&3\\end{bmatrix}$，求 $\\det A$、全部餘因子、$\\operatorname{adj}A$ 與 $A^{-1}$，並驗證 $A\\operatorname{adj}A=\\det(A)I_3$。",
      "points": 30,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K01",
        "LA-CH02-S04-K02",
        "LA-CH02-S04-K03"
      ],
      "tags": [
        "從餘因子建立伴隨矩陣",
        "核心恆等式",
        "反矩陣公式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH02-S04-Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH02",
      "sectionId": "LA-CH02-S04",
      "title": "線性代數 2-4 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "討論實參數 $t$ 下 $x+y=2$、$x+ty=3$ 的解，非奇異時用克拉瑪法則求解；奇異時說明相容性。另證明一般方形系統若有解，即使 $\\Delta=0$，仍須滿足 $\\Delta_i=x_i\\Delta$。",
      "points": 30,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH02-S04-K07",
        "LA-CH02-S04-K08"
      ],
      "tags": [
        "克拉瑪法則（Cramer's rule）",
        "參數方程組"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q01",
      "sourceId": "la-31-t01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "哪個敘述正確？",
      "options": [
        "向量必須是二維或三維箭頭。",
        "任意非空集合在通常運算下都是向量空間。",
        "函數可以作為向量，零向量可以是零函數。",
        "向量空間中的純量集合一定只能是實數。"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K01",
        "LA-CH03-S01-K04",
        "LA-CH03-S01-K05"
      ],
      "tags": [
        "集合、體與兩種運算",
        "座標及固定尺寸矩陣空間",
        "多項式與函數空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q02",
      "sourceId": "la-31-t02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "在 $\\mathbb R^2$ 使用通常加法與 $\\alpha\\odot(x,y)=(\\alpha x,y)$。哪一組計算直接顯示對純量加法的分配律失敗？",
      "options": [
        "$v=(0,1)$ 時，$(1+1)\\odot v=(0,1)$，但 $(1\\odot v)+(1\\odot v)=(0,2)$。",
        "$v=(1,0)$ 時，$1\\odot v=v$。",
        "$u=(1,0),v=(0,1)$ 時，$u+v=v+u$。",
        "$v=(1,2)$ 時，$2\\odot v=(2,2)\\in\\mathbb R^2$。"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K02"
      ],
      "tags": [
        "十項公設與兩個分配律"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q03",
      "sourceId": "la-31-t03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "下列集合採通常運算與實數純量，哪一個是實向量空間？",
      "options": [
        "所有恰好三次的實多項式。",
        "所有滿足 $p(0)=1$ 的實多項式。",
        "所有最高次項係數為 $1$ 的三次實多項式。",
        "所有可寫成 $a_0+a_1x+a_2x^2+a_3x^3$、$a_i\\in\\mathbb R$ 的多項式。"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K05"
      ],
      "tags": [
        "多項式與函數空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q04",
      "sourceId": "la-31-t04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "在正實數空間 $x\\oplus y=xy$、$\\alpha\\odot x=x^\\alpha$ 中，向量 $9$ 的加法反元素為何？",
      "options": [
        "$-9$。",
        "$1/9$。",
        "$0$。",
        "$1$。"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K07"
      ],
      "tags": [
        "正實數的特殊向量運算"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q05",
      "sourceId": "la-31-t05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "已知 $V$ 是體 $F$ 上的向量空間，$\\alpha\\in F$、$v\\in V$，且 $\\alpha v=0_V$。哪個敘述一定成立？",
      "options": [
        "一定有 $\\alpha=0_F$。",
        "一定有 $v=0_V$。",
        "$\\alpha=0_F$ 或 $v=0_V$。",
        "$\\alpha$ 與 $v$ 必須同時為零。"
      ],
      "points": 4,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K03",
        "LA-CH03-S01-K08"
      ],
      "tags": [
        "零乘法、負號、消去律與零積推論",
        "非向量空間與反例寫法"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q06",
      "sourceId": "la-31-t06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "只使用向量空間公設及由其證得的消去律，逐步證明 $0_Fv=0_V$ 與 $\\alpha0_V=0_V$。須說明各自使用哪一個分配律。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K02",
        "LA-CH03-S01-K03"
      ],
      "tags": [
        "十項公設與兩個分配律",
        "零乘法、負號、消去律與零積推論"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S01-Q07",
      "sourceId": "la-31-t07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S01",
      "title": "線性代數 3-1 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "在 $V=\\mathbb R_{>0}$ 定義 $x\\oplus y=xy$、$\\alpha\\odot x=x^\\alpha$，純量取自 $\\mathbb R$。證明它是實向量空間，並說明零向量及加法反元素。答案需涵蓋封閉性、兩個分配律及其餘公設。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S01-K02",
        "LA-CH03-S01-K07"
      ],
      "tags": [
        "十項公設與兩個分配律",
        "正實數的特殊向量運算"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q01",
      "sourceId": "la-ch03-s02-mc01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "下列何者是 $\\mathbb R^2$ 的子空間？",
      "options": [
        "$x+y=1$",
        "$x\\ge0$",
        "$x-2y=0$",
        "$x^2+y^2=1$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S02-K01",
        "LA-CH03-S02-K02"
      ],
      "tags": [
        "子空間的定義與判別",
        "如何找反例"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q02",
      "sourceId": "la-ch03-s02-mc02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "若 $U,W\\le V$，何者必成立？",
      "options": [
        "$U\\cap W$ 是子空間",
        "$U\\cup W$ 是子空間",
        "$U+W=U\\cup W$",
        "$U\\cap W=\\{0\\}$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S02-K03",
        "LA-CH03-S02-K04",
        "LA-CH03-S02-K05"
      ],
      "tags": [
        "交集一定是子空間",
        "聯集何時是子空間？",
        "和空間與最小性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q03",
      "sourceId": "la-ch03-s02-mc03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "$A$ 為 $3\\times5$ 實矩陣，何者正確？",
      "options": [
        "CS 是 $\\mathbb R^5$ 的子空間",
        "kernel 是 $\\mathbb R^3$ 的子空間",
        "左核是 $\\mathbb R^5$ 的子空間",
        "RS 是 $\\mathbb R^5$ 的子空間。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S02-K06"
      ],
      "tags": [
        "四個基本子空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q04",
      "sourceId": "la-ch03-s02-mc04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "$R$ 由 $A$ 經基本列運算取得，何者必成立？",
      "options": [
        "CS 相同",
        "kernel 相同",
        "左核相同",
        "每個對應欄向量相同。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S02-K07"
      ],
      "tags": [
        "乘積與等價運算"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q05",
      "sourceId": "la-ch03-s02-mc05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "$U=\\operatorname{span}\\{(1,0)\\}$、$W=\\operatorname{span}\\{(0,1)\\}$，何者正確？",
      "options": [
        "聯集等於 $\\mathbb R^2$",
        "交集為空集合",
        "和等於 $\\mathbb R^2$",
        "$U\\subseteq W$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S02-K04",
        "LA-CH03-S02-K05"
      ],
      "tags": [
        "聯集何時是子空間？",
        "和空間與最小性"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q06",
      "sourceId": "la-ch03-s02-wr01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 6 題",
      "type": "證明題",
      "text": "證明：若 $U,W$ 是 $V$ 的子空間且 $U\\cup W$ 是子空間，則 $U\\subseteq W$ 或 $W\\subseteq U$。請明確交代所取向量及矛盾位置。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S02-K04"
      ],
      "tags": [
        "聯集何時是子空間？"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S02-Q07",
      "sourceId": "la-ch03-s02-wr02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S02",
      "title": "線性代數 3-2 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "給定 $A=\\begin{bmatrix}1&2&1\\\\2&4&2\\\\0&1&1\\end{bmatrix}$，求 CS、RS、kernel、左核各一組基底，並標明各空間所在的 $\\mathbb R^d$。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S02-K06",
        "LA-CH03-S02-K07"
      ],
      "tags": [
        "四個基本子空間",
        "乘積與等價運算"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q01",
      "sourceId": "Q01",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "令 $u=(1,1,0)$、$v=(0,1,1)$。下列哪個向量**不在** $\\operatorname{span}\\{u,v\\}$？",
      "options": [
        "$(2,5,3)$",
        "$(1,0,-1)$",
        "$(1,2,0)$",
        "$(0,4,4)$"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S03-K01",
        "LA-CH03-S03-K04"
      ],
      "tags": [
        "線性組合與 $Ax=b$",
        "column space、row space 與樞紐"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q02",
      "sourceId": "Q02",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "下列何者正確？",
      "options": [
        "空集合線性獨立，且其 span 為 $\\{0\\}$。",
        "$\\{0\\}$ 線性獨立。",
        "不含零向量的集合一定獨立。",
        "每個生成集一定獨立。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S03-K02",
        "LA-CH03-S03-K06"
      ],
      "tags": [
        "span、空集合與最小子空間",
        "快速判斷與子集合性質"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q03",
      "sourceId": "Q03",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "實數矩陣 $A$ 為 $4\\times6$ 且 rank 為 4。何者正確？",
      "options": [
        "六個 columns 線性獨立。",
        "$Ax=0$ 只有零解。",
        "存在 $b\\in\\mathbb R^4$ 使 $Ax=b$ 無解。",
        "columns 生成 $\\mathbb R^4$，但線性相依。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S03-K05",
        "LA-CH03-S03-K07"
      ],
      "tags": [
        "相依與獨立的定義、齊次判準",
        "生成、獨立、基底的比較"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q04",
      "sourceId": "Q04",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 4 題",
      "type": "多選題",
      "text": "設 $S,T\\subseteq V$。選出所有必然正確的敘述。",
      "options": [
        "$\\operatorname{span}(S\\cap T)=\\operatorname{span}(S)\\cap\\operatorname{span}(T)$。",
        "$\\operatorname{span}(S\\cup T)=\\operatorname{span}(S)+\\operatorname{span}(T)$。",
        "若 $S\\subseteq T$，則 $\\operatorname{span}(S)\\subseteq\\operatorname{span}(T)$。",
        "若 $v\\in\\operatorname{span}(S)$，則 $\\operatorname{span}(S\\cup\\{v\\})=\\operatorname{span}(S)$。"
      ],
      "selectionMode": "multiple",
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S03-K03",
        "LA-CH03-S03-K09"
      ],
      "tags": [
        "生成空間相等與移除冗餘",
        "子空間的和、聯集與交集"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q05",
      "sourceId": "Q05",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "三個二次可微函數在區間 $I$ 上的 Wronskian 為 $W(x)$。何者正確？",
      "options": [
        "若 $W(x_0)=0$，則三函數必相依。",
        "若存在 $x_0\\in I$ 使 $W(x_0)\\ne0$，則三函數獨立。",
        "若 $W\\equiv0$，則不需其他條件即可判定相依。",
        "若三函數獨立，則 $W(x)$ 在每一點必非零。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S03-K11",
        "LA-CH03-S03-K12"
      ],
      "tags": [
        "函數的獨立性與定義域",
        "Wronskian 充分判準與限制"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q06",
      "sourceId": "Q06",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "在 $P_2(\\mathbb R)$ 中，令 $p_1=1+x$、$p_2=x+x^2$、$p_3=1+tx^2$。求使三多項式獨立的所有實數 $t$；對相依的參數值寫出非平凡關係式。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S03-K05",
        "LA-CH03-S03-K08",
        "LA-CH03-S03-K10"
      ],
      "tags": [
        "相依與獨立的定義、齊次判準",
        "含參數的獨立性",
        "矩陣與多項式作為向量"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S03-Q07",
      "sourceId": "Q07",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S03",
      "title": "線性代數 3-3 小節測驗 · 第 7 題",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R^3$，令 $U=\\operatorname{span}\\{(1,0,1),(0,1,1)\\}$，$W=\\operatorname{span}\\{(1,1,0)\\}$。求 $U\\cap W$，判斷 $U+W$ 是否為 $\\mathbb R^3$，並證明任意向量的 $U+W$ 分解是否唯一。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S03-K01",
        "LA-CH03-S03-K03",
        "LA-CH03-S03-K09"
      ],
      "tags": [
        "線性組合與 $Ax=b$",
        "生成空間相等與移除冗餘",
        "子空間的和、聯集與交集"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q01",
      "sourceId": "LA-Q3501",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "何者保證 $V=U\\oplus W$",
      "options": [
        "$U\\cap W=\\{0\\}$",
        "$U+W=V$",
        "和為 $V$ 且交集為零",
        "維度和為 $\\dim V$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S05-K04"
      ],
      "tags": [
        "直和、唯一性與補空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q02",
      "sourceId": "LA-Q3502",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "三個子空間兩兩交集為零，何者必真",
      "options": [
        "和維度等於維度總和",
        "整體獨立",
        "和等於環境空間",
        "任兩者的和都是直和。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S05-K02"
      ],
      "tags": [
        "獨立子空間與兩兩獨立"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q03",
      "sourceId": "LA-Q3503",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "若 $\\dim U=3,\\dim W=2,\\dim(U\\cap W)=1$，和空間維度為何",
      "options": [
        "4",
        "5",
        "6",
        "1。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S05-K03"
      ],
      "tags": [
        "維度判準"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q04",
      "sourceId": "LA-Q3504",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "實矩陣 $A$ 的反對稱部分是",
      "options": [
        "$A-A^T$",
        "$(A-A^T)/2$",
        "$(A+A^T)/2$",
        "$A^T$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S05-K05"
      ],
      "tags": [
        "對稱與反對稱矩陣分解"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q05",
      "sourceId": "LA-Q3505",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "對 $\\mathbb R^2$ 的 $x$ 軸，何者是補空間",
      "options": [
        "$x$ 軸自身",
        "$\\{0\\}$",
        "$\\operatorname{span}(1,2)$",
        "$\\mathbb R^2$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S05-K04"
      ],
      "tags": [
        "直和、唯一性與補空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q06",
      "sourceId": "LA-Q3506",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "令 $U=\\operatorname{span}(1,1)$、$W=\\operatorname{span}(1,-1)$，證明 $\\mathbb R^2=U\\oplus W$，並分解 $(4,2)$。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S05-K04"
      ],
      "tags": [
        "直和、唯一性與補空間"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S05-Q07",
      "sourceId": "LA-Q3507",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S05",
      "title": "線性代數 3-5 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "證明任一實函數可唯一分解成偶函數與奇函數，並分解 $f(x)=x^3+x^2+1$。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S05-K06"
      ],
      "tags": [
        "偶函數與奇函數分解"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q01",
      "sourceId": "LA-Q3601",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 1 題",
      "type": "選擇題",
      "text": "四個相異實數節點與任意指定值，唯一決定哪個空間的元素",
      "options": [
        "次數恰好 4",
        "次數恰好 3",
        "不限制次數的多項式空間",
        "$P_3$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S06-K01"
      ],
      "tags": [
        "存在與唯一"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q02",
      "sourceId": "LA-Q3602",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 2 題",
      "type": "選擇題",
      "text": "節點為 $t_0,t_1,t_2$，$L_1(t_2)$ 為何",
      "options": [
        "0",
        "1",
        "$t_1$",
        "無法判斷。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S06-K02"
      ],
      "tags": [
        "Lagrange 基底與公式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q03",
      "sourceId": "LA-Q3603",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 3 題",
      "type": "選擇題",
      "text": "任意相異節點構成的 Lagrange 基底，$\\sum_iL_i(x)$ 恆等於",
      "options": [
        "0",
        "$x$",
        "1",
        "$n+1$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S06-K02"
      ],
      "tags": [
        "Lagrange 基底與公式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q04",
      "sourceId": "LA-Q3604",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 4 題",
      "type": "選擇題",
      "text": "哪個條件能推出 $p\\in P_3$ 為零多項式",
      "options": [
        "$p(0)=0$",
        "有四個相異根",
        "有三個相異根",
        "最高次項係數為零。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S06-K01"
      ],
      "tags": [
        "存在與唯一"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q05",
      "sourceId": "LA-Q3605",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 5 題",
      "type": "選擇題",
      "text": "兩個函數為 $1,x^2$，節點為 $-1,1$。取值矩陣何者正確",
      "options": [
        "必可逆，因節點相異",
        "必可逆，因兩函數獨立",
        "行列式為 2",
        "不可逆，兩列皆為 $(1,1)$。"
      ],
      "points": null,
      "scoringStatus": "unspecified",
      "knowledgePointIds": [
        "LA-CH03-S06-K04"
      ],
      "tags": [
        "取值矩陣可逆"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q06",
      "sourceId": "LA-Q3606",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 6 題",
      "type": "手寫計算題",
      "text": "用 Lagrange 公式求通過 $(-1,2),(0,1),(1,4)$ 的至多二次多項式，並核對節點。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S06-K02"
      ],
      "tags": [
        "Lagrange 基底與公式"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
      }
    },
    {
      "id": "LA-CH03-S06-Q07",
      "sourceId": "LA-Q3607",
      "subjectId": "linear-algebra",
      "chapterId": "LA-CH03",
      "sectionId": "LA-CH03-S06",
      "title": "線性代數 3-6 小節測驗 · 第 7 題",
      "type": "證明題",
      "text": "設 $f_1,\\ldots,f_n$ 是 $P_{n-1}$ 的基底，$a_i$ 相異，證明 $(f_j(a_i))$ 可逆，說明基底條件在哪一步使用。",
      "points": 10,
      "scoringStatus": "specified",
      "knowledgePointIds": [
        "LA-CH03-S06-K04"
      ],
      "tags": [
        "取值矩陣可逆"
      ],
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬題"
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
    },
    {
      "id": "LA-CH01-S03-PRE-EX01",
      "title": "先備複習例題",
      "knowledgePointIds": [],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}2&5&7\\\\1&3&4\\end{bmatrix}$。寫出尺寸、$a_{12}$ 與第 2 行。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題 · 先備複習"
      }
    },
    {
      "id": "LA-CH01-S03-EX01",
      "title": "例題 01",
      "knowledgePointIds": [
        "LA-CH01-S03-K01"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$。依序交換兩列、第 2 列乘 2、再做 $R_2\\leftarrow R_2-2R_1$。求結果及還原次序。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX02",
      "title": "例題 02",
      "knowledgePointIds": [
        "LA-CH01-S03-K02"
      ],
      "type": "手寫計算題",
      "text": "對 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$ 做 $R_2\\leftarrow R_2-3R_1$。求基本矩陣、逆矩陣並驗算。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX03",
      "title": "例題 03",
      "knowledgePointIds": [
        "LA-CH01-S03-K03"
      ],
      "type": "手寫計算題",
      "text": "對 EX02 的 $A$ 先做 $R_2\\leftarrow R_2-3R_1$，再交換兩列。寫出總乘積 $P$ 及 $P^{-1}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX04",
      "title": "例題 04",
      "knowledgePointIds": [
        "LA-CH01-S03-K04"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$，$B=\\begin{bmatrix}1&0\\\\1&0\\end{bmatrix}$。說明是否列等價，並比較列空間、行空間與零空間。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX05",
      "title": "例題 05",
      "knowledgePointIds": [
        "LA-CH01-S03-K05"
      ],
      "type": "手寫計算題",
      "text": "求 $A=\\begin{bmatrix}1&2\\\\3&7\\end{bmatrix}$ 的反矩陣及基本矩陣分解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX06",
      "title": "例題 06",
      "knowledgePointIds": [
        "LA-CH01-S03-K06"
      ],
      "type": "手寫計算題",
      "text": "$C=\\begin{bmatrix}1&0&2\\\\0&1&3\\end{bmatrix}$，$A=\\begin{bmatrix}1&2&8\\\\0&1&3\\end{bmatrix}$。求 $B$ 使 $A=BC$，並判斷是否唯一。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S03-EX07",
      "title": "例題 07",
      "knowledgePointIds": [
        "LA-CH01-S03-K07"
      ],
      "type": "手寫計算題",
      "text": "在實數體上，令 $A=B=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$。求所有滿足 $PA=B$ 的可逆 $2\\times2$ 矩陣。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E01",
      "title": "例題 01",
      "knowledgePointIds": [
        "LA-CH01-S04-K01"
      ],
      "type": "手寫計算題",
      "text": "將 $x+2y=3,2x+4y=7$ 寫成矩陣式並判定相容性。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E02",
      "title": "例題 02",
      "knowledgePointIds": [
        "LA-CH01-S04-K02"
      ],
      "type": "手寫計算題",
      "text": "在 $\\mathbb R$ 上求 $x+2y=0$ 的解，說明非平凡解如何產生無限多解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E03",
      "title": "例題 03",
      "knowledgePointIds": [
        "LA-CH01-S04-K03"
      ],
      "type": "手寫計算題",
      "text": "系統 $x+y=2,2x+3y=5$ 做 $R_2\\leftarrow R_2-2R_1$；說明為何解集合相同。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E04",
      "title": "例題 04",
      "knowledgePointIds": [
        "LA-CH01-S04-K04"
      ],
      "type": "手寫計算題",
      "text": "判定 $M=\\begin{bmatrix}2&4&0&6\\\\0&0&3&9\\\\0&0&0&0\\end{bmatrix}$ 是 REF 或 RREF。視末欄為增廣欄，找主項及自由變數並求通解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E05",
      "title": "例題 05",
      "knowledgePointIds": [
        "LA-CH01-S04-K05"
      ],
      "type": "手寫計算題",
      "text": "用消去法解 $x+y+z=6,2x+3y+z=11,x+2y+3z=14$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E06",
      "title": "例題 06",
      "knowledgePointIds": [
        "LA-CH01-S04-K06"
      ],
      "type": "手寫計算題",
      "text": "求 $x+y+z=2,y+z=1$ 的特解及核空間，寫成特解加齊次通解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E07",
      "title": "例題 07",
      "knowledgePointIds": [
        "LA-CH01-S04-K07"
      ],
      "type": "手寫計算題",
      "text": "$A$ 有 5 個未知數，秩為 3。分別判斷增廣秩為 3、4 時的解與自由度。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E08",
      "title": "例題 08",
      "knowledgePointIds": [
        "LA-CH01-S04-K08"
      ],
      "type": "手寫計算題",
      "text": "依實參數 $k,c$ 分類 $x+y=1,2x+(k+2)y=c$ 的解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E09",
      "title": "例題 09",
      "knowledgePointIds": [
        "LA-CH01-S04-K09"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&1\\\\2&3\\end{bmatrix}$ 先做 $R_2-2R_1$，再做 $R_1-R_2$ 化成 $I$。求兩基本矩陣並還原 $A$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E10",
      "title": "例題 10",
      "knowledgePointIds": [
        "LA-CH01-S04-K10"
      ],
      "type": "手寫計算題",
      "text": "以線性方程組配平 $C_6H_6+O_2\\to C+H_2O$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E11",
      "title": "例題 11",
      "knowledgePointIds": [
        "LA-CH01-S04-K10"
      ],
      "type": "手寫計算題",
      "text": "節點甲流入 10、沿支路 $x$ 流往乙且流出 4；乙另流入 2 且流出 $y$。求 $x,y$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E12",
      "title": "例題 12",
      "knowledgePointIds": [
        "LA-CH01-S04-K11"
      ],
      "type": "手寫計算題",
      "text": "已知 $Aa=b,Ab=c,Ac=d$，求 $A(2a-b+3c)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E13",
      "title": "例題 13",
      "knowledgePointIds": [
        "LA-CH01-S04-K12"
      ],
      "type": "手寫計算題",
      "text": "在 $\\mathbb C$ 上解 $x+iy=1,x-iy=i$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S04-E14",
      "title": "例題 14",
      "knowledgePointIds": [
        "LA-CH01-S04-K13"
      ],
      "type": "手寫計算題",
      "text": "$A\\in\\mathbb R^{4\\times5},B\\in\\mathbb R^{5\\times7}$，$AB=0$ 且 $\\operatorname{rank}(B)=2$，求 $A$ 最大可能秩並說明可達成。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E01",
      "title": "例題 01",
      "knowledgePointIds": [
        "LA-CH01-S05-K01"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$ 是否可逆？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E02",
      "title": "例題 02",
      "knowledgePointIds": [
        "LA-CH01-S05-K02"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$，用基本矩陣表示一次列運算求逆。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E03",
      "title": "例題 03",
      "knowledgePointIds": [
        "LA-CH01-S05-K03"
      ],
      "type": "手寫計算題",
      "text": "證明 $(A^{-1})^T=(A^T)^{-1}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E04",
      "title": "例題 04",
      "knowledgePointIds": [
        "LA-CH01-S05-K04"
      ],
      "type": "手寫計算題",
      "text": "實方陣某個 $Ax=b_0$ 恰有一解。證明 A 可逆。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E05",
      "title": "例題 05",
      "knowledgePointIds": [
        "LA-CH01-S05-K05"
      ],
      "type": "手寫計算題",
      "text": "$A=[1\\ 0],B=[0\\ 1]^T$，求 $(I_2-BA)^{-1}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E06",
      "title": "例題 06",
      "knowledgePointIds": [
        "LA-CH01-S05-K06"
      ],
      "type": "手寫計算題",
      "text": "在 A、B、A+B 可逆時推導 $(A^{-1}+B^{-1})^{-1}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E07",
      "title": "例題 07",
      "knowledgePointIds": [
        "LA-CH01-S05-K07"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&0\\\\0&1\\\\0&0\\end{bmatrix}$，說明是否一對一、映成，並找左逆。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E08",
      "title": "例題 08",
      "knowledgePointIds": [
        "LA-CH01-S05-K08"
      ],
      "type": "手寫計算題",
      "text": "A 的複數特徵值為 0、2、3，判斷 A、A+I、A²−I 的可逆性。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E09",
      "title": "例題 09",
      "knowledgePointIds": [
        "LA-CH01-S05-K09"
      ],
      "type": "手寫計算題",
      "text": "$N=\\begin{bmatrix}0&2\\\\0&0\\end{bmatrix}$，求 $(I-N)^{-1}$。另若非零 P²=P，何時 I+αP 可逆？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E10",
      "title": "例題 10",
      "knowledgePointIds": [
        "LA-CH01-S05-K10"
      ],
      "type": "手寫計算題",
      "text": "$A=[1\\ 2]^T$，求一個左逆並判斷 AAᵀ 是否可逆。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S05-E11",
      "title": "例題 11",
      "knowledgePointIds": [
        "LA-CH01-S05-K11"
      ],
      "type": "手寫計算題",
      "text": "判斷 $M=\\begin{bmatrix}2&1\\\\4&2\\end{bmatrix}$ 是否可逆；再求 $(I_2+uv^T)^{-1}$，其中 u=v=(1,0)ᵀ。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH01-S06-E01",
      "title": "例題 01",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K01"
      ],
      "text": "對 $A=\\begin{bmatrix}2&1\\\\6&5\\end{bmatrix}$ 寫出消去矩陣 $E$，由 $EA=U$ 求 $L$。",
      "source": {
        "kind": "simulation",
        "title": "自編示範"
      }
    },
    {
      "id": "LA-CH01-S06-E02",
      "title": "例題 02",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K02"
      ],
      "text": "求 $A=\\begin{bmatrix}1&2&3\\\\4&-6&-6\\\\-7&-7&9\\end{bmatrix}$ 的 LU。",
      "source": {
        "kind": "material",
        "title": "教材例 38，依先前轉錄待原圖確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH01-S06-E03",
      "title": "例題 03",
      "type": "證明題",
      "knowledgePointIds": [
        "LA-CH01-S06-K03"
      ],
      "text": "證明 $A=\\begin{bmatrix}0&1\\\\1&1\\end{bmatrix}$ 不存在單位下三角 $L$ 的不換列 LU，並給一個奇異矩陣有 LU 的例子。",
      "source": {
        "kind": "material",
        "title": "教材例 39，依先前轉錄待原圖確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH01-S06-E04",
      "title": "例題 04",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K04"
      ],
      "text": "將 E02 的 LU 改寫成 LDU。",
      "source": {
        "kind": "simulation",
        "title": "自編延續 E02"
      }
    },
    {
      "id": "LA-CH01-S06-E05",
      "title": "例題 05",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K05"
      ],
      "text": "對 E03 的矩陣求 $PA=LU$；再解 $Ax=(1,2)^T$。",
      "source": {
        "kind": "simulation",
        "title": "自編示範"
      }
    },
    {
      "id": "LA-CH01-S06-E06",
      "title": "例題 06",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K06"
      ],
      "text": "$A=\\begin{bmatrix}0.001&1\\\\1&1\\end{bmatrix}$，比較不換列與部分選主元的第一個倍數。",
      "source": {
        "kind": "simulation",
        "title": "自編示範，非講義小數例原題"
      }
    },
    {
      "id": "LA-CH01-S06-E07",
      "title": "例題 07",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K07"
      ],
      "text": "用 E01 的 LU 解 $Ax=(3,11)^T$。",
      "source": {
        "kind": "simulation",
        "title": "自編示範"
      }
    },
    {
      "id": "LA-CH01-S06-E08",
      "title": "例題 08",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH01-S06-K08"
      ],
      "text": "用塊狀消去求 $\\det\\begin{bmatrix}2&4\\\\3&7\\end{bmatrix}$，再說明公式的條件。",
      "source": {
        "kind": "simulation",
        "title": "自編示範"
      }
    },
    {
      "id": "LA-CH01-S07-EX01",
      "title": "例題 01",
      "knowledgePointIds": [
        "LA-CH01-S07-K01"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，做 $R_2\\leftarrow R_2-3R_1$。求結果及逆操作。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX02",
      "title": "例題 02",
      "knowledgePointIds": [
        "LA-CH01-S07-K02"
      ],
      "type": "手寫計算題",
      "text": "構造 $R_3\\leftarrow R_3+2R_1$ 的 $3\\times 3$ 基本矩陣，求其反矩陣。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX03",
      "title": "例題 03",
      "knowledgePointIds": [
        "LA-CH01-S07-K03"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$E=\\begin{bmatrix}1&0\\\\5&1\\end{bmatrix}$。計算 $EA$、$AE$ 並解釋。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX04",
      "title": "例題 04",
      "knowledgePointIds": [
        "LA-CH01-S07-K04"
      ],
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，先交換兩 rows，再 $R_2\\leftarrow R_2-R_1$。寫 $E_1$、$E_2$、$B$ 及還原公式。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX05",
      "title": "例題 05",
      "knowledgePointIds": [
        "LA-CH01-S07-K05"
      ],
      "type": "證明題",
      "text": "$A=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}$，$B=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$。兩者是否 row equivalent？是否 column equivalent？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX06",
      "title": "例題 06",
      "knowledgePointIds": [
        "LA-CH01-S07-K06"
      ],
      "type": "手寫計算題",
      "text": "用增廣矩陣求 $A=\\begin{bmatrix}1&2\\\\3&5\\end{bmatrix}$ 的反矩陣，並解 Ax=$(1,2)^T$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX07",
      "title": "例題 07",
      "knowledgePointIds": [
        "LA-CH01-S07-K07"
      ],
      "type": "證明題",
      "text": "$A_t=\\begin{bmatrix}1&2\\\\2&t\\end{bmatrix}$。何時對每個 $b$ 唯一可解？$t=4$ 時分別討論 $b=(1,2)^T$ 與 $(1,3)^T$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "LA-CH01-S07-EX08",
      "title": "例題 08",
      "knowledgePointIds": [
        "LA-CH01-S07-K08"
      ],
      "type": "證明題",
      "text": "以 row 與 column 操作將 $3\\times 3$ 全 1 矩陣化為秩標準形，解釋為何只用 row 不行。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 編寫例題，非原教材題"
      }
    },
    {
      "id": "DS-CH01-S01-E01",
      "sourceId": "DS-E01",
      "title": "例題 01",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S01-K01"
      ],
      "text": "設計整數搜尋服務，列出需求、分析、設計、實作、驗證各一項工作。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S01-E02",
      "sourceId": "DS-E02",
      "title": "例題 02",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S01-K02"
      ],
      "text": "要在大量已排序整數中查值，說明如何由上而下拆解，並指出可重用的底層元件。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S01-E03",
      "sourceId": "DS-E03",
      "title": "例題 03",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S01-K03"
      ],
      "text": "搜尋程式已通過三個案例，是否已證明正確？提出尚應測試的案例與理由。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E04",
      "sourceId": "DS-E04",
      "title": "例題 04",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K04"
      ],
      "text": "「一直增加 x，直到感覺夠大」違反哪些性質？若改為整數 x 從 0 增至 10，問題如何改善？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E05",
      "sourceId": "DS-E05",
      "title": "例題 05",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K05"
      ],
      "text": "用本稿選擇排序將 [7,3,9,2] 遞增排序，列出每輪結果、總比較數與實際交換數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E06",
      "sourceId": "DS-E06",
      "title": "例題 06",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K06"
      ],
      "text": "以本稿二元搜尋在 [2,5,8,11,16,20,24] 找 16，列出每次區間與中點。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E07",
      "sourceId": "DS-E07",
      "title": "例題 07",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K07"
      ],
      "text": "f(0)=0，n>0 時 f(n)=1+f(n−1)。求 f(3)、總呼叫數與最深同時呼叫數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E08",
      "sourceId": "DS-E08",
      "title": "例題 08",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K08"
      ],
      "text": "展開 Fac(4)，以 Fac(0)=1 為基底，計算結果與總呼叫數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E09",
      "sourceId": "DS-E09",
      "title": "例題 09",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K09"
      ],
      "text": "以本稿直接遞迴定義求 Fib(4)，分別計算回傳值、總呼叫數及最大呼叫層數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E10",
      "sourceId": "DS-E10",
      "title": "例題 10",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K10"
      ],
      "text": "**條件式自編練習 · 定義待原圖確認**\n\n在 DS-K10 暫定定義成立下，求 A(2,2)、A(1,2)、A(2,3)。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E11",
      "sourceId": "DS-E11",
      "title": "例題 11",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K11"
      ],
      "text": "逐步計算 gcd(48,18)，並說明 gcd(48,0) 如何處理。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E12",
      "sourceId": "DS-E12",
      "title": "例題 12",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K12"
      ],
      "text": "以交換回溯法列出 [a,b,c] 的輸出順序，說明復原的用途。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S02-E13",
      "sourceId": "DS-E13",
      "title": "例題 13",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S02-K13"
      ],
      "text": "求 3 盤河內塔最少步數，列出 A→C、B 輔助的移動序列。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S03-E1301",
      "sourceId": "ds-e1301",
      "title": "例題 1301",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S03-K1301"
      ],
      "text": "若規格只寫「儲存一串數字」，能否完整描述資料型態？請補出兩種操作。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S03-E1302",
      "sourceId": "ds-e1302",
      "title": "例題 1302",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302"
      ],
      "text": "甲用陣列實作 Stack，乙用鏈結串列實作 Stack。兩者對相同有效操作序列都有相同抽象結果，是否可實作同一 ADT？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S03-E1303",
      "sourceId": "ds-e1303",
      "title": "例題 1303",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S03-K1303"
      ],
      "text": "為 pop 撰寫規格並分類；已知空堆疊不允許 pop，非空時移除且回傳頂端元素。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S03-E14",
      "sourceId": "DS-E14",
      "title": "例題 14",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S03-K1302"
      ],
      "text": "**補充延伸例題**\n\n堆疊改由陣列換成鏈結串列後，哪些操作語意應保留？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1401",
      "sourceId": "ds-e1401",
      "title": "例題 1401",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1401"
      ],
      "text": "A 在某電腦跑得比 B 快，能否據此認定 A 的漸近階較低？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1402",
      "sourceId": "ds-e1402",
      "title": "例題 1402",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1402"
      ],
      "text": "掃描輸入陣列求最大值，只用索引與 max 兩變數，求輔助及含輸入的空間。假設 $n\\ge 1$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1403",
      "sourceId": "ds-e1403",
      "title": "例題 1403",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1403"
      ],
      "text": "修正版 rsum 對 [2,5,7]、n=3 的回傳值、呼叫次數、最深框架數為何？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1404",
      "sourceId": "ds-e1404",
      "title": "例題 1404",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1404"
      ],
      "text": "依本稿計費模型，sum 在 n=4 時各項頻率及總步數為何？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1405",
      "sourceId": "ds-e1405",
      "title": "例題 1405",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1405"
      ],
      "text": "2×3 矩陣相加時，三項頻率及總步數為何？輸出空間如何計？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S04-E1406",
      "sourceId": "ds-e1406",
      "title": "例題 1406",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S04-K1406"
      ],
      "text": "證明 $2n+3$ 屬 $\\Theta(n)$，並說明為何也屬 $O(n^2)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15E1",
      "sourceId": "ds-q15e1",
      "title": "例題 15e1",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S05-K15A"
      ],
      "text": "證明 $7n^2+3n+5=\\Theta(n^2)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15E2",
      "sourceId": "ds-q15e2",
      "title": "例題 15e2",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S05-K15B"
      ],
      "text": "證明 $4n^3-2n+1=\\Theta(n^3)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S05-Q15E3",
      "sourceId": "ds-q15e3",
      "title": "例題 15e3",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S05-K15C"
      ],
      "text": "$n=o(n^2)$ 嗎？",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16E1",
      "sourceId": "ds-q16e1",
      "title": "例題 16e1",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S06-K16A"
      ],
      "text": "`for i=1..n; for j=1..i; for k=1..j: x++`，計算 `x++` 次數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16E2",
      "sourceId": "ds-q16e2",
      "title": "例題 16e2",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S06-K16B"
      ],
      "text": "$T(n)=T(\\sqrt n)+1$，當 $n\\le2$ 時為正常數，求緊界。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S06-Q16E3",
      "sourceId": "ds-q16e3",
      "title": "例題 16e3",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S06-K16C"
      ],
      "text": "$T(n)=2T(n-1)+1$，若 $T(1)=1$，求精確解。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17E1",
      "sourceId": "ds-q17e1",
      "title": "例題 17e1",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "text": "$T(n)=4T(n/2)+n$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17E2",
      "sourceId": "ds-q17e2",
      "title": "例題 17e2",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "text": "$T(n)=2T(n/2)+n\\log^2n$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17E3",
      "sourceId": "ds-q17e3",
      "title": "例題 17e3",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S07-K17A"
      ],
      "text": "$T(n)=3T(n/2)+n^2$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S07-Q17E4",
      "sourceId": "ds-q17e4",
      "title": "例題 17e4",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S07-K17B"
      ],
      "text": "**補充延伸例題**\n\n$T(n)=27T(n/3)+n^3/\\log_3n$，$n=3^L$，$n\\le3$ 為正常數。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18E1",
      "sourceId": "ds-q18e1",
      "title": "例題 18e1",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S08-K18A"
      ],
      "text": "化簡 $4^{\\log_2n}$、$n^{1/\\log_2n}$，$n>1$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18E2",
      "sourceId": "ds-q18e2",
      "title": "例題 18e2",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S08-K18B"
      ],
      "text": "$n=2^m$，求 $\\sum_{k=0}^{\\log_2n}k2^k$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S08-Q18E3",
      "sourceId": "ds-q18e3",
      "title": "例題 18e3",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S08-K18C"
      ],
      "text": "排序 $n^2,(\\log_2n)^{\\log_2n},2^n$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19E1",
      "sourceId": "ds-q19e1",
      "title": "例題 19e1",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "text": "$T(n)=2T(n/2)+n$，$n=2^k,T(1)=t>0$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19E2",
      "sourceId": "ds-q19e2",
      "title": "例題 19e2",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S09-K19A"
      ],
      "text": "**補充延伸例題**\n\n一般整數 $n\\ge2$，$T(n)=2T(\\lfloor n/2\\rfloor)+n$、$T(1)=t>0$，證明同樣緊界。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "DS-CH01-S09-Q19E3",
      "sourceId": "ds-q19e3",
      "title": "例題 19e3",
      "type": "證明題",
      "knowledgePointIds": [
        "DS-CH01-S09-K19B"
      ],
      "text": "已知 $f\\le c_1g$、$g\\le c_2h$ 最終成立，證明 $f=O(h)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S01-EX001",
      "title": "例題 001",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S01-K01"
      ],
      "text": "求 $\\det\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$。",
      "source": {
        "kind": "material",
        "title": "教材轉錄待核 · 原圖尚未確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH02-S01-EX002",
      "title": "例題 002",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S01-K01"
      ],
      "text": "求 $\\det\\begin{bmatrix}-7&4\\\\-3&6\\end{bmatrix}$。",
      "source": {
        "kind": "material",
        "title": "教材轉錄待核 · 原圖尚未確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH02-S01-EX003",
      "title": "例題 003",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S01-K02"
      ],
      "text": "已知 $\\det[u;w]=3,\\det[v;w]=-2$，求 $\\det[2u-v;w]$；分號表示換列。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S01-EX004",
      "title": "例題 004",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S01-K03"
      ],
      "text": "二階 $\\det(A)=-2$。僅第一列乘3得 $B$，求 $\\det(B)$ 與 $\\det(3A)$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S01-EX005",
      "title": "例題 005",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S01-K04"
      ],
      "text": "求 $\\det\\begin{bmatrix}6&8\\\\3&4\\end{bmatrix}$，先辨識結構。",
      "source": {
        "kind": "material",
        "title": "教材轉錄待核 · 原圖尚未確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH02-S02-EX006",
      "title": "例題 006",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K01"
      ],
      "text": "$A=\\begin{bmatrix}1&2&3\\\\0&4&5\\\\1&0&6\\end{bmatrix}$，求 $A_{12},M_{12},C_{12}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX007",
      "title": "例題 007",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K02"
      ],
      "text": "求 $\\det\\begin{bmatrix}0&1&3\\\\-2&-3&-5\\\\4&-4&4\\end{bmatrix}$。",
      "source": {
        "kind": "material",
        "title": "教材轉錄待核 · 原圖尚未確認",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH02-S02-EX008",
      "title": "例題 008",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K02"
      ],
      "text": "求 $\\det\\begin{bmatrix}2&0&0&0\\\\1&3&4&0\\\\0&0&5&0\\\\2&1&0&-1\\end{bmatrix}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX009",
      "title": "例題 009",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K03"
      ],
      "text": "$A$ 為三階且 $\\det A=2$，求 $\\det(A^T),\\det(-A)$；再以 $I_2$ 反駁行列式整體加法線性。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX010",
      "title": "例題 010",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K04"
      ],
      "text": "求 $\\det\\begin{bmatrix}2&0&0\\\\3&-1&0\\\\5&7&4\\end{bmatrix}$。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX011",
      "title": "例題 011",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K05"
      ],
      "text": "對 $A=\\begin{bmatrix}1&2&3\\\\0&4&5\\\\1&0&6\\end{bmatrix}$計算 $\\sum_{j=1}^3 a_{1j}C_{2j}$ 並解釋原因。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX012",
      "title": "例題 012",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K06"
      ],
      "text": "令 $W(x)=\\det\\begin{bmatrix}x&x^2\\\\1&3x\\end{bmatrix}$，用逐列微分法求 $W'$ 並直接展開驗算。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S02-EX013",
      "title": "例題 013",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S02-K06"
      ],
      "text": "令 $W=\\det\\begin{bmatrix}1&x&x^2\\\\0&1&2x\\\\0&0&2\\end{bmatrix}$，求 $W'$，說明消去項。",
      "source": {
        "kind": "simulation",
        "title": "使用者提供審閱稿 · 自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E01",
      "title": "例題 01",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K01"
      ],
      "text": "$A=\\begin{bmatrix}1&2&3\\\\2&4&6\\\\0&1&1\\end{bmatrix}$，不展開行列式，判斷可逆性並說明原因。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E02",
      "title": "例題 02",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K01",
        "LA-CH02-S03-K06"
      ],
      "text": "用基本列運算求 $\\det\\begin{bmatrix}0&2&1\\\\1&1&0\\\\2&3&4\\end{bmatrix}$，逐步記錄行列式變化。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E03",
      "title": "例題 03",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K02"
      ],
      "text": "$D(t)=\\det\\begin{bmatrix}1+t&2+3t\\\\4&5\\end{bmatrix}$。只拆第一列求 $D(t)$，並說明為何不代表整個矩陣具有加法線性。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E04",
      "title": "例題 04",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K03"
      ],
      "text": "$A=\\begin{bmatrix}1&2&0\\\\0&3&1\\\\2&0&1\\end{bmatrix}$。求 $K_{21},K_{22},K_{23}$，並計算 $\\sum_{j=1}^3a_{1j}K_{2j}$、$\\sum_{j=1}^3a_{2j}K_{2j}$。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E05",
      "title": "例題 05",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K04"
      ],
      "text": "$A,B$ 為三階方陣，$\\det A=2,\\det B=-1$。求 $\\det\\bigl(2(A^{-1})^TB^3\\bigr)$。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E06",
      "title": "例題 06",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K05"
      ],
      "text": "$A(t)=\\begin{bmatrix}t&1\\\\2&t-1\\end{bmatrix}$，何時不可逆？",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E07",
      "title": "例題 07",
      "type": "證明題",
      "knowledgePointIds": [
        "LA-CH02-S03-K05"
      ],
      "text": "在實數上證明：奇數階斜對稱矩陣必不可逆。指出奇數階條件用在哪一步。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E08",
      "title": "例題 08",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K06"
      ],
      "text": "已知 $\\det A=6$。先交換兩列，再把某一列乘 3，最後將一列加上另一列的 5 倍，所得為 $U$。求 $\\det U$；若 $U$ 是三角矩陣，其對角線乘積為何？",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E09",
      "title": "例題 09",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K07"
      ],
      "text": "$M=\\begin{bmatrix}2&0&1\\\\0&3&1\\\\1&2&4\\end{bmatrix}$。用左上 $2\\times2$ 區塊的 Schur 補求 $\\det M$。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E10",
      "title": "例題 10",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K07"
      ],
      "text": "設 $P=\\operatorname{diag}(1,2)$、$R=\\operatorname{diag}(3,4)$、$Q=I_2$、$S=\\operatorname{diag}(5,6)$。求 $\\det\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}$，並寫出可用分塊乘差公式的條件。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E11",
      "title": "例題 11",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K08"
      ],
      "text": "$A=\\operatorname{diag}(2,3)$、$B=I_2$，求 $\\det\\begin{bmatrix}A&B\\\\B&A\\end{bmatrix}$。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E12",
      "title": "例題 12",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K09"
      ],
      "text": "$A=\\operatorname{diag}(1,2)$、$B=\\operatorname{diag}(t,-2)$。利用 $I+BA^{-1}$ 判斷 $A+B$ 是否可逆。另舉兩個不可逆矩陣，其和可逆。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E13",
      "title": "例題 13",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K10"
      ],
      "text": "求 $\\det\\begin{bmatrix}1&1&1\\\\1&2&4\\\\1&4&16\\end{bmatrix}$。若交換前兩列，答案如何改變？",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S03-E14",
      "title": "例題 14",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S03-K11"
      ],
      "text": "主對角線為 10、上下副對角線為 5 的 $n$ 階三對角矩陣，求行列式閉式。須寫遞迴、初值及重根求解。",
      "source": {
        "kind": "simulation",
        "title": "自編模擬例題"
      }
    },
    {
      "id": "LA-CH02-S04-E01",
      "title": "例題 01",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K01"
      ],
      "text": "求 $A=\\begin{bmatrix}3&-2&1\\\\5&6&2\\\\1&0&-3\\end{bmatrix}$ 的餘因子矩陣及古典伴隨矩陣。",
      "source": {
        "kind": "material",
        "title": "原教材轉述，例23編號待核",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH02-S04-E02",
      "title": "例題 02",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K02"
      ],
      "text": "對 $A=\\begin{bmatrix}3&-2&1\\\\5&6&2\\\\1&0&-3\\end{bmatrix}$，求 $\\det A$，並用核心恆等式檢查伴隨矩陣。",
      "source": {
        "kind": "simulation",
        "title": "自編驗證，沿用E01數據"
      }
    },
    {
      "id": "LA-CH02-S04-E03",
      "title": "例題 03",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K03"
      ],
      "text": "求 $D=\\begin{bmatrix}2&1\\\\3&2\\end{bmatrix}$ 的伴隨及反矩陣。",
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH02-S04-E04",
      "title": "例題 04",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K04"
      ],
      "text": "$A,B$ 為三階方陣，$\\det A=2$、$\\det B=-3$。求 $\\det(\\operatorname{adj}A)$、$\\operatorname{adj}(2A)$ 與 $\\det(\\operatorname{adj}(AB))$，並寫出 $\\operatorname{adj}(AB)$ 的乘法順序。",
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH02-S04-E05",
      "title": "例題 05",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K05"
      ],
      "text": "在實數域，$A$ 為四階方陣，已知 $\\operatorname{adj}A=2I_4$，求 $A$。",
      "source": {
        "kind": "simulation",
        "title": "自編，非原例28"
      }
    },
    {
      "id": "LA-CH02-S04-E06",
      "title": "例題 06",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K06"
      ],
      "text": "分別求 $\\operatorname{diag}(1,1,0)$ 與 $\\operatorname{diag}(1,0,0)$ 的伴隨及其秩。",
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH02-S04-E07",
      "title": "例題 07",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K07"
      ],
      "text": "用克拉瑪法則解 $2x+y=5$、$x-y=1$。",
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH02-S04-E08",
      "title": "例題 08",
      "type": "手寫計算題",
      "knowledgePointIds": [
        "LA-CH02-S04-K08"
      ],
      "text": "討論實參數 $a$ 下方程組的解：\n\n$$x_1+x_2+ax_3=1,\\quad x_1+ax_2+x_3=3,\\quad ax_1+x_2+x_3=2a.$$\n\n分別找出唯一解、無解與無限多解時的條件及完整解。",
      "source": {
        "kind": "material",
        "title": "原教材轉述，例7編號待核",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH03-S01-E01",
      "sourceId": "la-31-e01",
      "title": "例題 1",
      "type": "手寫計算題",
      "text": "以通常運算討論 $\\mathbb C$ 作為實向量空間時，$i$ 可否是向量？$i$ 可否是純量？若純量集合改為 $\\mathbb Z$，是否符合本節的向量空間定義？",
      "knowledgePointIds": [
        "LA-CH03-S01-K01"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E02",
      "sourceId": "la-31-e02",
      "title": "例題 2",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R^2$ 使用通常加法，另定義 $\\alpha\\odot(x,y)=(\\alpha x,y)$。以 $v=(0,1)$、$\\alpha=\\beta=1$ 檢查對純量加法的分配律。",
      "knowledgePointIds": [
        "LA-CH03-S01-K02"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E03",
      "sourceId": "la-31-e03",
      "title": "例題 3",
      "type": "證明題",
      "text": "在任意實向量空間 $V$ 中，若 $3u=3v$，證明 $u=v$。再說明若把 $3$ 改為 $0$，是否仍能推出結論。",
      "knowledgePointIds": [
        "LA-CH03-S01-K03"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E04",
      "sourceId": "la-31-e04",
      "title": "例題 4",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R^{2\\times2}$ 中，令 $A=\\begin{pmatrix}1&-2\\\\0&3\\end{pmatrix}$、$B=\\begin{pmatrix}2&1\\\\4&-1\\end{pmatrix}$。求 $A+2B$、$A$ 的加法反元素及本空間的零向量。",
      "knowledgePointIds": [
        "LA-CH03-S01-K04"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E05",
      "sourceId": "la-31-e05",
      "title": "例題 5",
      "type": "手寫計算題",
      "text": "通常運算下，所有次數至多二次的實多項式（包含零多項式）是否為向量空間？所有恰好二次的實多項式是否為向量空間？說明理由。",
      "knowledgePointIds": [
        "LA-CH03-S01-K05"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E06",
      "sourceId": "la-31-e06",
      "title": "例題 6",
      "type": "手寫計算題",
      "text": "通常逐點運算下，判斷 $V_0=\\{f:\\mathbb R\\to\\mathbb R:f(0)=0\\}$ 與 $V_1=\\{f:\\mathbb R\\to\\mathbb R:f(0)=1\\}$ 是否為實向量空間。",
      "knowledgePointIds": [
        "LA-CH03-S01-K05"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E07",
      "sourceId": "la-31-e07",
      "title": "例題 7",
      "type": "手寫計算題",
      "text": "令 $P=(1,-2)$、$Q=(4,0)$、$u=(2,1)$、$v=(1,3)$。計算 $\\overrightarrow{PQ}$、$u+v$、$u-v$，說明為何位移向量不需固定起點。",
      "knowledgePointIds": [
        "LA-CH03-S01-K06"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E08",
      "sourceId": "la-31-e08",
      "title": "例題 8",
      "type": "手寫計算題",
      "text": "在正實數空間 $x\\oplus y=xy$、$\\alpha\\odot x=x^\\alpha$ 中，求零向量、向量 $4$ 的加法反元素、$2\\odot4$ 以及向量意義下的 $4$ 減 $2$。",
      "knowledgePointIds": [
        "LA-CH03-S01-K07"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E09",
      "sourceId": "la-31-e09",
      "title": "例題 9",
      "type": "證明題",
      "text": "在 $\\mathbb R$ 定義 $x\\oplus y=\\min(x,y)$，採通常純量乘法。用加法單位元素公設證明它不是實向量空間。",
      "knowledgePointIds": [
        "LA-CH03-S01-K08"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S01-E10",
      "sourceId": "la-31-e10",
      "title": "例題 10",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R$ 定義 $u\\oplus v=u+v-2$、$\\alpha\\odot u=2+\\alpha(u-2)$。求零向量與 $u$ 的加法反元素，並完整驗證其向量空間公設。",
      "knowledgePointIds": [
        "LA-CH03-S01-K09"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E01",
      "sourceId": "la-ch03-s02-ex01",
      "title": "例題 1",
      "type": "證明題",
      "text": "證明 $W=\\{(x,y,z)\\in\\mathbb R^3:x+2y-z=0\\}$ 是子空間。",
      "knowledgePointIds": [
        "LA-CH03-S02-K01"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E02",
      "sourceId": "la-ch03-s02-ex02",
      "title": "例題 2",
      "type": "手寫計算題",
      "text": "所有實數 $2\\times2$ 奇異矩陣構成子空間嗎？",
      "knowledgePointIds": [
        "LA-CH03-S02-K02"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E03",
      "sourceId": "la-ch03-s02-ex03",
      "title": "例題 3",
      "type": "手寫計算題",
      "text": "求 $U=\\{(x,y,z):x+y=0\\}$ 與 $W=\\{(x,y,z):y+z=0\\}$ 的交集。",
      "knowledgePointIds": [
        "LA-CH03-S02-K03"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E04",
      "sourceId": "la-ch03-s02-ex04",
      "title": "例題 4",
      "type": "手寫計算題",
      "text": "$x$ 軸與 $y$ 軸的聯集是 $\\mathbb R^2$ 的子空間嗎？",
      "knowledgePointIds": [
        "LA-CH03-S02-K04"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E05",
      "sourceId": "la-ch03-s02-ex05",
      "title": "例題 5",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R^3$ 中，$U=\\operatorname{span}\\{e_1,e_2\\}$、$W=\\operatorname{span}\\{e_2,e_3\\}$，求交集、和與聯集是否為子空間。",
      "knowledgePointIds": [
        "LA-CH03-S02-K05"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E06",
      "sourceId": "la-ch03-s02-ex06",
      "title": "例題 6",
      "type": "手寫計算題",
      "text": "求 $A=\\begin{bmatrix}1&2&3\\\\0&1&1\\end{bmatrix}$ 的四個基本子空間之生成集合。",
      "knowledgePointIds": [
        "LA-CH03-S02-K06"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E07",
      "sourceId": "la-ch03-s02-ex07",
      "title": "例題 7",
      "type": "手寫計算題",
      "text": "$A=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$ 化簡成 $R=\\begin{bmatrix}1&2\\\\0&0\\end{bmatrix}$，哪些空間相同？",
      "knowledgePointIds": [
        "LA-CH03-S02-K07"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S02-E08",
      "sourceId": "la-ch03-s02-ex08",
      "title": "例題 8",
      "type": "手寫計算題",
      "text": "$A$ 為 $4\\times6$ 實矩陣，kernel 維度為 3，求其餘三空間維度。",
      "knowledgePointIds": [
        "LA-CH03-S02-K08"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E01",
      "sourceId": "E01",
      "title": "例題 1",
      "type": "手寫計算題",
      "text": "設 $u=(1,0,1)$、$v=(0,1,1)$。判斷 $b=(2,3,5)$ 與 $c=(2,3,6)$ 是否在 $\\operatorname{span}\\{u,v\\}$。",
      "knowledgePointIds": [
        "LA-CH03-S03-K01"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E02",
      "sourceId": "E02",
      "title": "例題 2",
      "type": "證明題",
      "text": "證明 $S=\\{(1,2)\\}$ 的 span 是包含 $S$ 的最小子空間。",
      "knowledgePointIds": [
        "LA-CH03-S03-K02"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E03",
      "sourceId": "E03",
      "title": "例題 3",
      "type": "證明題",
      "text": "設 $u=(1,0)$、$v=(0,1)$、$w=u+v$。證明 $\\operatorname{span}\\{u,v\\}=\\operatorname{span}\\{u,w\\}$，並說明移除 $w$ 的影響。",
      "knowledgePointIds": [
        "LA-CH03-S03-K03"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E04",
      "sourceId": "E04",
      "title": "例題 4",
      "type": "手寫計算題",
      "text": "對 $A=\\begin{bmatrix}1&2&0\\\\0&0&1\\\\0&0&1\\end{bmatrix}$，求 column space 與 row space 的一組基底。",
      "knowledgePointIds": [
        "LA-CH03-S03-K04"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E05",
      "sourceId": "E05",
      "title": "例題 5",
      "type": "手寫計算題",
      "text": "判斷 $(1,0,1),(0,1,1),(1,1,2)$ 是否獨立，並寫出相依關係式。",
      "knowledgePointIds": [
        "LA-CH03-S03-K05"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E06",
      "sourceId": "E06",
      "title": "例題 6",
      "type": "手寫計算題",
      "text": "分別判斷：$\\{(1,0),(0,0)\\}$；空集合；$\\mathbb R^3$ 中任意 4 個向量；$\\{(1,0),(0,1)\\}$ 的任意子集合。",
      "knowledgePointIds": [
        "LA-CH03-S03-K06"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E07",
      "sourceId": "E07",
      "title": "例題 7",
      "type": "手寫計算題",
      "text": "分別判斷 $A=[e_1\\ e_2]\\in\\mathbb R^{3\\times2}$ 與 $B=[e_1\\ e_2\\ e_1+e_2]\\in\\mathbb R^{2\\times3}$ 的 columns 是否獨立、是否生成目標空間。",
      "knowledgePointIds": [
        "LA-CH03-S03-K07"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E08",
      "sourceId": "E08",
      "title": "例題 8",
      "type": "手寫計算題",
      "text": "求 $v_1=(1,t)$、$v_2=(t,1)$ 獨立的所有實數 $t$，並討論例外值。",
      "knowledgePointIds": [
        "LA-CH03-S03-K08"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E09",
      "sourceId": "E09",
      "title": "例題 9",
      "type": "手寫計算題",
      "text": "令 $W_1$、$W_2$ 為 $\\mathbb R^2$ 的兩座標軸，求和、交集並判斷聯集。再以 $S_1=\\{e_1\\}$、$S_2=\\{2e_1\\}$ 比較 span 與交集的順序。",
      "knowledgePointIds": [
        "LA-CH03-S03-K09"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E10",
      "sourceId": "E10",
      "title": "例題 10",
      "type": "手寫計算題",
      "text": "(a) 判斷 $1+x,1-x,x^2$ 在 $P_2(\\mathbb R)$ 中是否獨立且生成。(b) 用 $E_{11},E_{12},E_{21},E_{22}$ 表示 $\\begin{bmatrix}2&-1\\\\0&3\\end{bmatrix}$，其中 $E_{ij}$ 只有位置 $(i,j)$ 是 1。",
      "knowledgePointIds": [
        "LA-CH03-S03-K10"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E11",
      "sourceId": "E11",
      "title": "例題 11",
      "type": "證明題",
      "text": "在 $\\mathbb R$ 上，用取值法證明 $\\sin x,\\cos x$ 獨立；若定義域改為單點 $\\{0\\}$ 呢？",
      "knowledgePointIds": [
        "LA-CH03-S03-K11"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S03-E12",
      "sourceId": "E12",
      "title": "例題 12",
      "type": "手寫計算題",
      "text": "用 Wronskian 判斷 $1,x,x^2$ 在 $\\mathbb R$ 上是否獨立。",
      "knowledgePointIds": [
        "LA-CH03-S03-K12"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編教學例題"
      }
    },
    {
      "id": "LA-CH03-S05-E01",
      "sourceId": "LA-E3501",
      "title": "例題 1",
      "type": "手寫計算題",
      "text": "$U=\\operatorname{span}(e_1,e_2),W=\\operatorname{span}(e_2,e_3)$，求和、交集、維度，判斷是否直和。",
      "knowledgePointIds": [
        "LA-CH03-S05-K01",
        "LA-CH03-S05-K03"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH03-S05-E02",
      "sourceId": "LA-E3502",
      "title": "例題 2",
      "type": "手寫計算題",
      "text": "在 $\\mathbb R^3$ 取 $W_1=\\operatorname{span}(1,0,0),W_2=\\operatorname{span}(0,1,0),W_3=\\operatorname{span}(1,1,0)$，判斷兩兩與整體獨立。",
      "knowledgePointIds": [
        "LA-CH03-S05-K02",
        "LA-CH03-S05-K03"
      ],
      "source": {
        "kind": "material",
        "title": "前文教材反例",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH03-S05-E03",
      "sourceId": "LA-E3503",
      "title": "例題 3",
      "type": "證明題",
      "text": "證明 $\\mathbb R^2=\\operatorname{span}(1,0)\\oplus\\operatorname{span}(1,1)$，並求 $(x,y)$ 的分解。",
      "knowledgePointIds": [
        "LA-CH03-S05-K04"
      ],
      "source": {
        "kind": "material",
        "title": "前文整理示例",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH03-S05-E04",
      "sourceId": "LA-E3504",
      "title": "例題 4",
      "type": "手寫計算題",
      "text": "將 $A=\\begin{pmatrix}1&4\\\\2&3\\end{pmatrix}$ 分成對稱與反對稱兩部分。",
      "knowledgePointIds": [
        "LA-CH03-S05-K05"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH03-S05-E05",
      "sourceId": "LA-E3505",
      "title": "例題 5",
      "type": "手寫計算題",
      "text": "將 $f(x)=e^x+x^2+x$ 分成偶函數與奇函數。",
      "knowledgePointIds": [
        "LA-CH03-S05-K06"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH03-S06-E01",
      "sourceId": "LA-E3601",
      "title": "例題 1",
      "type": "手寫計算題",
      "text": "求通過 $(0,1),(1,2),(2,5)$ 的至多二次內插多項式，並寫出 Lagrange 基底。",
      "knowledgePointIds": [
        "LA-CH03-S06-K01",
        "LA-CH03-S06-K02"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH03-S06-E02",
      "sourceId": "LA-E3602",
      "title": "例題 2",
      "type": "證明題",
      "text": "節點為 $-1,0,1$，求常數多項式 1 在 Lagrange 基底下的座標並證明 $\\sum_iL_i=1$。",
      "knowledgePointIds": [
        "LA-CH03-S06-K02"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
      }
    },
    {
      "id": "LA-CH03-S06-E03",
      "sourceId": "LA-E3603",
      "title": "例題 3",
      "type": "手寫計算題",
      "text": "求通過 $(5,1),(-7,-23),(-6,-54),(0,-954)$ 的至多三次多項式。",
      "knowledgePointIds": [
        "LA-CH03-S06-K03"
      ],
      "source": {
        "kind": "material",
        "title": "前文教材轉錄；數據待原圖核對",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH03-S06-E04",
      "sourceId": "LA-E3604",
      "title": "例題 4",
      "type": "證明題",
      "text": "證明一般基底取值矩陣可逆；再對基底 $(1,1+x)$、節點 $(0,2)$ 寫出矩陣並算行列式。",
      "knowledgePointIds": [
        "LA-CH03-S06-K04"
      ],
      "source": {
        "kind": "material",
        "title": "前文教材命題＋自編數值例",
        "verificationStatus": "pending_original"
      }
    },
    {
      "id": "LA-CH03-S06-E05",
      "sourceId": "LA-E3605",
      "title": "例題 5",
      "type": "手寫計算題",
      "text": "指定 $P(0)=1,P(0)=2$ 是否有解？若只指定 $P(0)=1$，在 $P_1$ 中是否唯一？",
      "knowledgePointIds": [
        "LA-CH03-S06-K01"
      ],
      "source": {
        "kind": "simulation",
        "title": "自編"
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
    },
    {
      "id": "LA-CH01-S03-K01",
      "title": "三種基本列運算與可逆性",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "對 $A\\in F^{m\\times n}$ 的橫列進行下列操作，稱為基本列運算。\n\n| 類型 | 操作 | 條件 | 逆運算 |\n|---|---|---|---|\n| 第一型：交換 | $R_i\\leftrightarrow R_j$ | 不同列 $i\\ne j$ | 再交換一次 |\n| 第二型：倍乘 | $R_i\\leftarrow kR_i$ | $k\\ne0$ | $R_i\\leftarrow k^{-1}R_i$ |\n| 第三型：加倍數 | $R_j\\leftarrow R_j+kR_i$ | $i\\ne j$ | $R_j\\leftarrow R_j-kR_i$ |\n\n$R_i$ 表示第 $i$ 列；箭頭左邊是更新目標。第三型的來源列 $R_i$ 不變，只有目標列 $R_j$ 改變。$k=0$ 的第三型是恆等操作，有些教材只把非零 $k$ 的非平凡操作列為基本操作；使用時依教材慣例。\n\n第二型不能乘 0，因為該列資訊會消失，沒有逆操作。第三型要求不同列，才能用相反倍數恢復；若對同一列操作，會變成倍乘，且可能因 $1+k=0$ 而不可逆。\n\n教材記號 $r_{ij}^{(1)}$ 表交換，$r_i^{(2)}(k)$ 表倍乘。本稿依可見整理約定 $r_{ij}^{(3)}(k)$ 為把第 $i$ 列的 $k$ 倍加到第 $j$ 列；此下標約定並非所有教材都一致，考試以明寫 $R_j\\leftarrow R_j+kR_i$ 最清楚。"
    },
    {
      "id": "LA-CH01-S03-K02",
      "title": "基本矩陣與左乘",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "對 $I_m$ 做一次基本列運算 $r$，得到基本矩陣（elementary matrix）$E=r(I_m)$。同一操作用於任意 $m\\times n$ 矩陣時，有\n\n$$EA=r(A).$$\n\n原因是左乘的第 $j$ 列是 $A$ 各列的線性組合；$E$ 的第 $j$ 列係數決定組合方式。例如第三型矩陣\n\n$$E=I_m+ke_je_i^T$$\n\n在位置 $(j,i)$ 放入 $k$。由 $e_i^TA$ 取出 $A$ 的第 $i$ 列，$e_j(e_i^TA)$ 再把它放到第 $j$ 列位置，所以 $EA=A+ke_j(e_i^TA)$ 正是所需操作。此式為補充說明，不要求先背抽象記號。\n\n三型矩陣分別是：交換 $I$ 的兩列；把 $I$ 的一個對角 1 改成 $k\\ne0$；在 $I$ 的非對角位置 $(j,i)$ 放入 $k$。\n\n**左右乘的細節：** 左乘 $m\\times m$ 基本矩陣改變橫列；右乘適當的 $n\\times n$ 基本矩陣改變直行。同一第三型 $E=I+ke_je_i^T$ 若用於右乘，則是 $C_i\\leftarrow C_i+kC_j$，來源與目標相對於左乘交換，不能照抄列運算箭頭。$C_i$ 表第 $i$ 行。左右乘還須先確認尺寸相容。\n\n因三種操作均可逆，$E^{-1}=r^{-1}(I)$，而且逆矩陣仍是基本矩陣。"
    },
    {
      "id": "LA-CH01-S03-K03",
      "title": "連續列運算的次序",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若依序做 $r_1,r_2,\\ldots,r_k$，對應基本矩陣為 $E_1,\\ldots,E_k$，則\n\n$$A_1=E_1A,\\qquad A_2=E_2A_1=E_2E_1A,$$\n$$B=E_k\\cdots E_2E_1A.$$\n\n每一次的新矩陣都從左側乘上去，所以先做的矩陣最靠近 $A$。一般不能交換順序。\n\n對可逆矩陣乘積，\n\n$$(E_1E_2\\cdots E_k)^{-1}=E_k^{-1}\\cdots E_2^{-1}E_1^{-1}.$$\n\n驗證方式是把候選逆矩陣乘上原乘積，從中間開始相鄰消去，最後得到 $I$；若未反序，通常無法讓互逆因子相鄰。"
    },
    {
      "id": "LA-CH01-S03-K04",
      "title": "列等價及不變量",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "同尺寸矩陣 $A,B\\in F^{m\\times n}$ 能以有限次基本列運算互相轉換，就稱列等價（row equivalent），記 $A\\sim B$。\n\n列等價是等價關係：不做操作得到反身性；把每一步逆向還原得到對稱性；接續兩段操作得到遞移性。\n\n$$A\\sim B\\iff B=PA\\text{，其中 }P\\in F^{m\\times m}\\text{ 可逆。}$$\n\n正向：令 $P=E_k\\cdots E_1$，可逆矩陣的乘積可逆。反向：可逆 $P$ 可由消去法化為 $I$，因此可寫成基本矩陣乘積；把這些矩陣左乘 $A$ 即得到 $B$。\n\n定義：$\\operatorname{Row}(A)$ 是橫列向量所有線性組合的集合；$\\operatorname{Col}(A)$ 是直行向量所有線性組合的集合；$N(A)=\\{x:Ax=0\\}$ 為零空間（null space）；秩 $\\operatorname{rank}(A)$ 是行／列空間維度，等於主元個數。主元是消去後每個非零列的領先位置。\n\n| 列等價保留 | 不保證保留 |\n|---|---|\n| 列空間（row space） | 行空間（column space）作為原座標中的集合 |\n| 零空間 $N(A)$ | 個別列向量、個別行向量 |\n| 秩、主元個數 | 行列式數值 |\n| 同一簡化列梯形矩陣 RREF | 特徵值、跡 |\n\n零空間的證明：$Ax=0\\Rightarrow PAx=0\\Rightarrow Bx=0$；反向用 $A=P^{-1}B$。列空間的證明：$B$ 每一列是 $A$ 各列的組合，得包含關係；反向用 $P^{-1}$ 得相等。\n\nRREF（reduced row echelon form）要求：零列置底；非零列首個非零元素是 1；下一列領先 1 向右移；每個領先 1 所在行其餘元素為 0。其唯一性是後續消去法定理，此處列為補充結論。\n\n**非齊次方程提醒：** $Ax=b$ 必須把 $A$ 與 $b$ 同步操作，才有 $Ax=b\\iff PAx=Pb$。只把 $A$ 換成列等價 $B$ 卻保留原 $b$，解集合可能不同。"
    },
    {
      "id": "LA-CH01-S03-K05",
      "title": "可逆性、基本矩陣分解與反矩陣",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "對方陣 $A\\in F^{n\\times n}$，若\n\n$$E_k\\cdots E_1A=I,$$\n\n則左側乘積就是 $A^{-1}$：\n\n$$A^{-1}=E_k\\cdots E_1.$$\n\n取逆得到\n\n$$A=E_1^{-1}\\cdots E_k^{-1}.$$\n\n因此 $A$ 可逆當且僅當它是有限個基本矩陣的乘積。正向用消去至 $I$ 得到分解；反向用每個因子可逆、乘積可逆證明。對一般非方陣不能直接寫 $A^{-1}$ 或宣稱化為同尺寸單位矩陣。\n\n增廣法把相同列運算施於兩側：\n\n$$[A\\mid I]\\longrightarrow[I\\mid A^{-1}].$$\n\n若左半部無法化為 $I$，則方陣 $A$ 不可逆，不能把右半部稱作反矩陣。"
    },
    {
      "id": "LA-CH01-S03-K06",
      "title": "求轉換矩陣與左因子",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "求可逆 $P$ 使 $PA=B$：先確認 $A,B$ 同為 $m\\times n$ 且列等價，將 $A$ 變成 $B$ 的操作同步施於 $I_m$，即可讀出 $P$：\n\n$$[A\\mid I_m]\\longrightarrow[B\\mid P].$$\n\n若不容易直接轉換，可分別化到同一 RREF：$UA=R$、$VB=R$，則 $B=V^{-1}UA$，所以 $P=V^{-1}U$。$U,V$ 是各自消去操作的可逆乘積。\n\n求 $A=BC$ 的 $B$：若 $C,A$ 同尺寸且列等價，把 $C$ 轉成 $A$，同步操作單位矩陣可求一個可逆 $B$。若 $C$ 是可逆方陣，直接 $B=AC^{-1}$。\n\n**必要修正：** 一般方程 $A=BC$ 並不保證 $A,C$ 列等價，也不要求 $B$ 可逆。例如 $C=I_2$、$A=0$，則唯一解 $B=0$。一般解法是逐列求線性組合係數，存在條件為 $\\operatorname{Row}(A)\\subseteq\\operatorname{Row}(C)$；若特別要求可逆 $B$，才要同尺寸且列空間相等。"
    },
    {
      "id": "LA-CH01-S03-K07",
      "title": "補充：PA=B 的唯一性",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "先前「可逆方陣時唯一」是充分條件，並非必要條件。對 $A\\in F^{m\\times n}$，若 $\\operatorname{rank}(A)=m$（滿列秩，full row rank），即使不是方陣，也存在右逆 $R\\in F^{n\\times m}$ 使 $AR=I_m$。因此 $PA=B$ 右乘 $R$ 得 $P=BR$，只要解存在，就必定唯一。右逆本身可以不唯一，但 $P$ 的值相同。\n\n另一種證明：若 $P_1A=P_2A$，則 $(P_1-P_2)A=0$；滿列秩表示 $A$ 各橫列線性獨立，故 $P_1-P_2$ 每列係數都為零，所以兩解相等。\n\n秩不足時，一般矩陣解若存在則不唯一：可找非零 $Q$ 使 $QA=0$，從而 $P+Q$ 仍滿足方程。但若額外要求可逆，仍須檢查 $P+Q$ 是否可逆，不能自動推論。對常見的實數或複數體，若已存在可逆解且秩不足，可取非零且足夠小的擾動 $tQ$，使 $P+tQ$ 仍可逆，因此有不只一個可逆解；這個「足夠小」論證不適用任意有限體。"
    },
    {
      "id": "LA-CH01-S04-K01",
      "title": "線性方程組、矩陣表示與相容性",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "$m$ 條方程式、$n$ 個未知數的一般形式為\n\n$$\\sum_{j=1}^{n}a_{ij}x_j=b_i,\\qquad i=1,\\ldots,m.$$\n\n未知數只能以一次出現，不能彼此相乘；$x_1x_2$、$x_1^2$、$\\sin x_1$ 不是線性項。係數可為零。\n\n令 $A=(a_{ij})\\in F^{m\\times n}$、$x=(x_1,\\ldots,x_n)^T\\in F^n$、$b=(b_1,\\ldots,b_m)^T\\in F^m$，則方程組寫成 $Ax=b$。上標 $T$ 表示轉置，把橫排改成直排。\n\n解集合是 $S=\\{x\\in F^n:Ax=b\\}$。至少一解稱相容（consistent）；無解稱不相容（inconsistent）。增廣矩陣化簡後若出現 $[0\\ \\cdots\\ 0\\mid c]$ 且 $c\\ne0$，代表 $0=c$，必無解。$[0\\ \\cdots\\ 0\\mid0]$ 只代表多餘條件。"
    },
    {
      "id": "LA-CH01-S04-K02",
      "title": "齊次與非齊次",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "$b=0$ 時稱齊次（homogeneous），$Ax=0$ 必有平凡解 $x=0$；非平凡解指 $x\\ne0$ 的解。$b\\ne0$ 時稱非齊次（nonhomogeneous），可能無解、唯一解或無限多解。\n\n若 $Au=0$ 且 $u\\ne0$，則 $A(tu)=tAu=0$。在無限體上，任意不同純量 $s,t$ 產生不同向量：若 $su=tu$，則 $(s-t)u=0$，由 $u\\ne0$ 得 $s=t$。因此有非零解即有無限多解；有限體不能使用「無限多」結論。"
    },
    {
      "id": "LA-CH01-S04-K03",
      "title": "等價方程組與列運算",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "兩方程組解集合相同稱等價。基本列運算包括交換兩列、某列乘非零純量、將某列的倍數加到另一列。它們分別能用交換、乘倒數、加相反倍數還原，因此不會增減解。\n\n對 $[A\\mid b]$ 必須整列一起運算。只改 $A$ 而不改 $b$，通常會改變解。列等價 $A\\sim B$ 可推出 $\\ker(A)=\\ker(B)$，但不能在固定同一個非零 $b$ 時直接宣稱 $Ax=b$ 與 $Bx=b$ 等價。"
    },
    {
      "id": "LA-CH01-S04-K04",
      "title": "REF、RREF、樞元與變數",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "列梯形（row-echelon form, REF）：零列在底部；各非零列最左非零元素逐列向右；其下方為零。最左非零元素稱樞元（pivot）。有些教材額外要求 REF 首項為 1；本稿使用不要求為 1 的慣例，原教材用語待原圖確認。\n\n簡化列梯形（reduced row-echelon form, RREF）再要求樞元為 1，且樞元所在欄的其他元素皆為零。同一矩陣的 REF 不唯一，RREF 唯一。\n\n|條件|REF|RREF|\n|---|---|---|\n|零列在底部、樞元向右、下方為零|是|是|\n|樞元為 1|不要求|是|\n|樞元上方也為零|不要求|是|\n|結果唯一|否|是|\n\n係數矩陣的樞元欄對應主項變數；其餘未知數為自由變數。增廣欄不是未知數欄；若增廣欄有樞元，系統不相容。原矩陣的樞元欄指原矩陣中對應化簡後樞元位置的欄，並非直接拿化簡後的欄取代原欄。"
    },
    {
      "id": "LA-CH01-S04-K05",
      "title": "消去法與回代",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "Gaussian elimination：從左至右找非零樞元，必要時交換列；消去下方元素，移向右下子矩陣，形成 REF，再由下而上回代。若候選欄全為零，跳到下一欄，不應除以零。\n\nGauss–Jordan elimination：繼續將樞元標準化成 1，消去上方元素形成 RREF。求解順序是先查矛盾，再找自由變數，最後寫完整解集合。"
    },
    {
      "id": "LA-CH01-S04-K06",
      "title": "參數通解與核空間",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若 $x_p$ 是 $Ax=b$ 的一個特解，則全部解為\n\n$$S=x_p+\\ker(A)=\\{x_p+u:Au=0\\}.$$\n\n證明第一方向：任取原解 $x$，$A(x-x_p)=Ax-Ax_p=b-b=0$，所以 $x-x_p\\in\\ker(A)$。第二方向：若 $Au=0$，則 $A(x_p+u)=b+0=b$。兩方向一起才證明集合相等。\n\n若自由變數為 $x_2=r,x_4=s,x_5=t$，且主項條件為 $x_1+3x_2+4x_4+2x_5=0$、$x_3+2x_4=0$、$x_6=1/3$，則\n\n$$x=(-3r-4s-2t,r,-2s,s,t,1/3)^T,\\qquad r,s,t\\in F.$$\n\n自由變數可任意取值，主項變數仍受其限制。若有解且 $\\ker(A)=\\{0\\}$，解唯一。"
    },
    {
      "id": "LA-CH01-S04-K07",
      "title": "秩與三種解情形",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "秩（rank）等於 REF 非零列數，也等於樞元數。$A\\in F^{m\\times n}$ 時，$0\\le\\operatorname{rank}(A)\\le\\min(m,n)$；列運算保持秩。若秩為 $r$，未知數欄有 $n-r$ 個非樞元欄。相容時，它們形成通解的自由參數。\n\n|條件|解的情形（在 $\\mathbb R$ 或 $\\mathbb C$ 上）|\n|---|---|\n|$\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$|無解|\n|$\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n$|唯一解|\n|$\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n$|無限多解|\n\n增加一欄最多增加一個樞元，因此增廣秩只可能是 $r$ 或 $r+1$。方程式多不表示獨立條件多；方程式數等於未知數數也不保證唯一解。$m<n$ 時齊次系統必有非零解，但非齊次系統仍可能無解。"
    },
    {
      "id": "LA-CH01-S04-K08",
      "title": "含參數分類",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "參數可能使樞元消失，不能先除以可能為零的式子。若最後條件為 $\\alpha z=\\beta$，須分成 $\\alpha\\ne0$、$\\alpha=0,\\beta\\ne0$、$\\alpha=\\beta=0$。第一種只確定這一步的 $z$；是否整體唯一仍須檢查其餘未知數欄。\n\n例如 $(7-11a+3b)z=-14+c$ 的特殊條件為 $7-11a+3b=0$ 與 $c=14$。出現 $0=0$ 不一定立刻代表無限多解，還要確認有自由變數且沒有其他矛盾列。"
    },
    {
      "id": "LA-CH01-S04-K09",
      "title": "基本矩陣與還原",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "對單位矩陣 $I$ 做一次基本列運算所得矩陣稱基本矩陣（elementary matrix）。左乘它等於對原矩陣做該次列運算。每個基本矩陣可逆，逆矩陣代表反向運算。\n\n$$E_k\\cdots E_2E_1A=R\\quad\\Longrightarrow\\quad A=E_1^{-1}E_2^{-1}\\cdots E_k^{-1}R.$$\n\n理由是乘積取逆會反轉因子順序。寫完後應代回相乘檢查，不可只將每個因子取逆而保留原乘積順序。"
    },
    {
      "id": "LA-CH01-S04-K10",
      "title": "守恆建模",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "化學配平以每一種元素守恆列式，通常得到齊次系統；選出符合反應方向的正係數解，再化成最小正整數比例。並非每個任意指定的反應式都一定存在全正係數解。\n\n交通流量與 Kirchhoff 電流定律（KCL）使用「流入總和＝流出總和」。節點方程式可能相依，不能用節點數直接當秩。流量另有非負或容量限制，代數通解之後仍要套用限制；負電流若採假設方向，則表示實際方向相反。"
    },
    {
      "id": "LA-CH01-S04-K11",
      "title": "線性性",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若 $Aa=b,Ab=c,Ac=d$ 且 $v=\\alpha a+\\beta b+\\gamma c$，則\n\n$$Av=\\alpha Aa+\\beta Ab+\\gamma Ac=\\alpha b+\\beta c+\\gamma d.$$\n\n先解向量組合係數，通常可避免求出完整矩陣 $A$。若組合不唯一，合法資料仍須給出相同 $Av$。"
    },
    {
      "id": "LA-CH01-S04-K12",
      "title": "複數係數",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "消去法在 $\\mathbb C$ 同樣成立，僅需正確處理 $i^2=-1$、$1/i=-i$。除以 $a+bi$ 可乘共軛 $a-bi$，分母變成 $a^2+b^2$，但須先確認除數非零。這裡 $i$ 是虛數單位，與矩陣位置下標的 $i$ 依上下文區分。"
    },
    {
      "id": "LA-CH01-S04-K13",
      "title": "研究所常用連結",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "1. 秩－零度定理（rank–nullity）：$\\dim\\ker(A)=n-\\operatorname{rank}(A)$。$\\dim$ 表示基底中向量數量。有限體 $\\mathbb F_q$ 上，相容系統恰有 $q^{n-r}$ 個解。\n2. 固定 $b$ 的相容性：$Ax=b$ 有解等價於 $b$ 在 $A$ 的欄空間內。欄空間是各欄向量所有線性組合的集合。\n3. 對每個 $b\\in F^m$ 都有解，等價於 $\\operatorname{rank}(A)=m$；每個相容系統都唯一解，等價於 $\\operatorname{rank}(A)=n$。兩者量詞不同。\n4. 若 $AB=0$，$B$ 的每一欄都在 $\\ker(A)$，所以 $\\operatorname{rank}(B)\\le n-\\operatorname{rank}(A)$，其中 $A$ 有 $n$ 欄。\n5. 實矩陣滿足 $\\ker(A^TA)=\\ker(A)$：由 $A^TAx=0$ 得 $0=x^TA^TAx=\\|Ax\\|^2$，平方和為零推出 $Ax=0$；反方向直接代入。複數須改用共軛轉置 $A^*$，不可直接套用 $A^T$。\n6. 非齊次相容解集合是核空間的平移（仿射集合）；若 $b\\ne0$，不含零向量，因此不是向量子空間。最小平方與正交投影僅列後續學習連結，不作為本節必要先備。"
    },
    {
      "id": "LA-CH01-S05-K01",
      "title": "可逆矩陣與齊次方程",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "方陣 $A\\in F^{n\\times n}$ 可逆，指存在 $B$ 使 $AB=BA=I_n$，記為 $B=A^{-1}$。\n\n核心定理：\n\n$$A\\text{ 可逆}\\iff Ax=0\\text{ 只有零解}\\iff \\operatorname{rank}A=n\\iff A\\sim I_n.$$\n\n正向：$Ax=0$ 左乘 $A^{-1}$ 得 $x=0$。反向：若沒有非零零空間向量，則沒有自由變數，每欄都有樞紐。方陣有 $n$ 欄與 $n$ 列，故 rref 是 $I_n$。若消去矩陣乘積 $P$ 使 $PA=I_n$，則 $P$ 可逆，故 $A=P^{-1}$ 可逆。此證明未預先使用單側反矩陣定理。\n\n求反矩陣：對增廣矩陣同步作列運算，$[A\\mid I_n]\\to[I_n\\mid A^{-1}]$。左半無法化為 $I_n$ 時不可逆。",
      "writingPrompt": "自己畫出「非零齊次解 → 自由變數 → 缺樞紐 → 不可逆」的關係。"
    },
    {
      "id": "LA-CH01-S05-K02",
      "title": "基本矩陣與列等價",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "基本矩陣（elementary matrix）由 $I$ 做一次基本列運算得到。交換兩列的逆仍是交換；某列乘非零 $c$ 的逆是乘 $c^{-1}$；把第 $j$ 列的 $c$ 倍加到第 $i$ 列的逆是加上 $-c$ 倍。故每個基本矩陣可逆。\n\n若 $E_k\\cdots E_1A=I$，則 $A^{-1}=E_k\\cdots E_1$，而 $A=E_1^{-1}\\cdots E_k^{-1}$。因此可逆方陣恰是有限個基本矩陣的乘積（包含 $I$ 的情況）。\n\n對 $A,B\\in F^{m\\times n}$：\n\n$$A\\sim B\\iff B=PA\\quad\\text{其中 }P\\in F^{m\\times m}\\text{ 可逆}.$$\n\n正向把所有列運算相乘。反向把可逆 $P$ 分解成基本矩陣乘積，即得到一串列運算。左乘改變列，右乘則對應欄運算。\n\n$Bx=0\\iff PAx=0\\iff Ax=0$，所以列等價保持零空間與秩；不保證行列式數值相同。",
      "writingPrompt": "寫出三類基本矩陣各自的逆運算，並標註 $P$ 的尺寸。"
    },
    {
      "id": "LA-CH01-S05-K03",
      "title": "唯一性與運算",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "若 $B,C$ 都是 $A$ 的反矩陣：\n\n$$B=BI=B(AC)=(BA)C=IC=C.$$\n\n依序使用單位矩陣、$AC=I$、結合律、$BA=I$、單位矩陣。故反矩陣唯一。又 $AB=BA=I$ 同時表示 $A$ 是 $B$ 的逆，故 $(A^{-1})^{-1}=A$。\n\n同階可逆方陣有 $(AB)^{-1}=B^{-1}A^{-1}$，因為 $(AB)(B^{-1}A^{-1})=AIA^{-1}=I$，另一側也成立。取轉置時乘法順序反轉，因此 $(A^{-1})^T=(A^T)^{-1}$。",
      "writingPrompt": "不看正文，完成反矩陣唯一性的等式鏈，並在每步旁寫理由。"
    },
    {
      "id": "LA-CH01-S05-K04",
      "title": "非齊次方程",
      "difficulty": 3,
      "provenance": "教材整理與延伸",
      "markdown": "對方陣 $A$，以下等價：可逆；每個 $b$ 都有唯一解；每個 $b$ 都至少有一解。\n\n可逆時 $x=A^{-1}b$ 存在；兩解相減落在零空間，故相等。唯一解當然意味有解。若每個 $b$ 有解，依序令 $b=e_i$，選 $Ax_i=e_i$，將 $X=[x_1\\cdots x_n]$ 得 $AX=I$。其欄空間涵蓋所有 $e_i$，故秩為 $n$，所以可逆。\n\n延伸：只要某個 $b$ 有唯一解也足夠。設唯一解 $x_0$，若 $Az=0$，則 $A(x_0+z)=b$；唯一性推出 $z=0$。\n\n| 方陣的條件 | 可推出的結果 |\n|---|---|\n| 某個 b 有解 | 不能判斷；b=0 對任何 A 都有解 |\n| 某個 b 唯一解 | 可逆 |\n| 所有 b 有解 | 可逆，且各自唯一 |\n| 某個 b 無解 | 不可逆 |\n| 某個 b 至少兩個不同解 | 不可逆 |\n\n不宜在一般數域一律稱「無限多解」；有限域中解集可能有限。以下數值練習使用實數。",
      "writingPrompt": "各寫一個「某個 b 有解」卻不可逆的例子，以及不可逆時無解的 b。"
    },
    {
      "id": "LA-CH01-S05-K05",
      "title": "不同尺寸的 I−AB 與 I−BA",
      "difficulty": 5,
      "provenance": "教材整理",
      "markdown": "若 $A\\in F^{n\\times m},B\\in F^{m\\times n}$，則\n\n$$I_n-AB\\text{ 可逆}\\iff I_m-BA\\text{ 可逆}.$$\n\n設左者可逆，且 $(I_m-BA)x=0$。先得 $x=BAx$，左乘 $A$ 得 $(I_n-AB)Ax=0$。由可逆性得 $Ax=0$，再代回得 $x=0$。因此右者零空間平凡，故可逆。交換 $A,B$ 得反方向。\n\n令 $C=(I_n-AB)^{-1}$，則\n\n$$(I_m-BA)^{-1}=I_m+BCA.$$\n\n驗證：展開 $(I-BA)(I+BCA)$ 得 $I+B(C-I-ABC)A$；由 $(I-AB)C=I$，括號為零。這裡乘積為同階方陣，一側為單位矩陣即足夠。",
      "writingPrompt": "每個乘積旁標尺寸，再從齊次方程重寫證明。"
    },
    {
      "id": "LA-CH01-S05-K06",
      "title": "反矩陣和式的分解",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "假設 $A,A+I$ 可逆：$A^{-1}+I=A^{-1}(I+A)$，故可逆，且\n\n$$(A^{-1}+I)^{-1}=(I+A)^{-1}A.$$\n\n假設同階 $A,B,A+B$ 均可逆：\n\n$$A^{-1}+B^{-1}=B^{-1}(A+B)A^{-1},$$\n\n所以\n\n$$(A^{-1}+B^{-1})^{-1}=A(A+B)^{-1}B.$$\n\n展開右側分解即可驗證，無須假設 $AB=BA$。亦可用 $A^{-1}(A+B)B^{-1}$ 得另一相等表示 $B(A+B)^{-1}A$。不能把反矩陣對加法分配。",
      "writingPrompt": "展開分解中的兩項，檢查消去位置與乘法順序。"
    },
    {
      "id": "LA-CH01-S05-K07",
      "title": "長方形矩陣、消去律與乘積",
      "difficulty": 3,
      "provenance": "補充延伸",
      "markdown": "| A 為 m×n | 滿欄秩 rank A=n | 滿列秩 rank A=m |\n|---|---|---|\n| 尺寸限制 | n≤m | m≤n |\n| Ax=0 | 只有零解 | 不一定 |\n| 對所有 b 的 Ax=b | 至多一解，可能無解 | 至少一解，可能不唯一 |\n| 映射 | 一對一 injective | 映成 surjective |\n| 單側反矩陣 | L A=I_n | A R=I_m |\n\n若 $LA=I$，則 $Ax=0$ 左乘 $L$ 得 $x=0$。反之，滿欄秩時可由列消去構造左逆；實數情況也可用 K10 的公式。右逆同理由滿列秩與對標準基底求解構造。\n\n同階方陣 $AB=I$ 時 $\\operatorname{rank}(AB)\\le\\operatorname{rank}A$，故 $A$ 滿秩可逆，$B=A^{-1}$，因此 $BA=I$。長方形不適用：$A=[1\\ 0],B=[1\\ 0]^T$ 有 $AB=[1]$，但 $BA=\\operatorname{diag}(1,0)$。\n\n方陣 $A$ 可逆即可在 $AX=AY$ 中左乘 $A^{-1}$ 消去。若不可逆，取非零 $z\\in\\ker A$，則 $Az=A0$ 卻 $z\\ne0$，所以消去律失敗。\n\n同階方陣 $AB$ 可逆等價於 $A,B$ 都可逆：反向由乘積逆公式；正向由 $n=\\operatorname{rank}(AB)\\le\\operatorname{rank}A,\\operatorname{rank}B\\le n$。可逆矩陣的和未必可逆，例如 $I+(-I)=0$。",
      "writingPrompt": "以 3×2 與 2×3 矩陣分別畫一對一和映成的例子。"
    },
    {
      "id": "LA-CH01-S05-K08",
      "title": "特徵值與多項式",
      "difficulty": 3,
      "provenance": "補充延伸",
      "markdown": "特徵值（eigenvalue）$\\lambda$ 表示存在非零 $v$ 使 $Av=\\lambda v$。因此\n\n$$A\\text{ 可逆}\\iff\\det A\\ne0\\iff0\\text{ 不是特徵值},$$\n\n$$A-\\lambda I\\text{ 不可逆}\\iff\\lambda\\text{ 是特徵值}.$$\n\n在複數域，$p(A)$ 可逆當且僅當所有特徵值都滿足 $p(\\lambda)\\ne0$。可由多項式在複數上分解為一次因子的乘積，再用 K07 的乘積可逆性證明；不需要可對角化。實矩陣應考慮其複數特徵值，不能只查實特徵值。",
      "writingPrompt": "把 $A^2-I$ 與 $A+I$ 的可逆性分別改寫為特徵值條件。"
    },
    {
      "id": "LA-CH01-S05-K09",
      "title": "特殊結構",
      "difficulty": 3,
      "provenance": "補充延伸",
      "markdown": "三角矩陣的行列式為對角元素乘積，故可逆當且僅當每個對角元素非零。一般矩陣不能只看對角線。\n\n冪零（nilpotent）：$N^k=0$ 時，$(I-N)(I+N+\\cdots+N^{k-1})=I-N^k=I$，故後者為逆。\n\n冪等（idempotent）：$P^2=P$ 且 $P$ 可逆，左乘 $P^{-1}$ 得 $P=I$。若 $P\\ne0$，$I+\\alpha P$ 可逆當且僅當 $\\alpha\\ne-1$，其逆為 $I-\\frac{\\alpha}{1+\\alpha}P$。將二者相乘，$P$ 的係數為 $\\alpha-\\alpha/(1+\\alpha)-\\alpha^2/(1+\\alpha)=0$。若 $\\alpha=-1$，取 $Py\\ne0$，即 $(I-P)Py=0$，故不可逆。$P=0$ 時任何 $\\alpha$ 均可逆。",
      "writingPrompt": "用乘法展開親自驗證冪零與冪等公式。"
    },
    {
      "id": "LA-CH01-S05-K10",
      "title": "Gram 矩陣與單側逆",
      "difficulty": 3,
      "provenance": "補充延伸",
      "markdown": "實矩陣 $A\\in\\mathbb R^{m\\times n}$：$x^TA^TAx=\\|Ax\\|^2\\ge0$，故 $A^TA$ 半正定。若 $A^TAx=0$，則長度平方為零，所以 $Ax=0$；反向直接成立。故 $\\ker(A^TA)=\\ker A$。\n\n因此 $A^TA$ 可逆等價於滿欄秩，此時 $L=(A^TA)^{-1}A^T$ 滿足 $LA=I_n$。同理 $AA^T$ 可逆等價於滿列秩，$R=A^T(AA^T)^{-1}$ 滿足 $AR=I_m$。\n\n複數應用 $A^*$：$x^*A^*Ax=\\|Ax\\|^2$。不能直接用 $A^T$，例如 $A=[1\\ i]^T$ 非零卻有 $A^TA=0$。",
      "writingPrompt": "區分「半正定」和「正定」，寫出後者為何排除非零零空間。"
    },
    {
      "id": "LA-CH01-S05-K11",
      "title": "Schur 補與秩一更新",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "設 $M=\\begin{bmatrix}A&B\\\\C&D\\end{bmatrix}$，$A,D$ 是方陣、各區塊尺寸相容、$A$ 可逆。左乘可逆消去矩陣得\n\n$$\\begin{bmatrix}I&0\\\\-CA^{-1}&I\\end{bmatrix}M=\\begin{bmatrix}A&B\\\\0&D-CA^{-1}B\\end{bmatrix}.$$\n\n故 $M$ 可逆等價於 Schur 補 $D-CA^{-1}B$ 可逆。若補矩陣有非零零向量 $y$，取 $x=-A^{-1}By$ 即得 $M[x^T\\ y^T]^T=0$；若補矩陣可逆，則可先解 $y$ 再解 $x$，任何右側均有唯一解。\n\n若 $A$ 可逆，$u,v\\in F^n$，令 $d=1+v^TA^{-1}u$。$d\\ne0$ 時\n\n$$(A+uv^T)^{-1}=A^{-1}-\\frac{A^{-1}uv^TA^{-1}}d.$$\n\n若 $d=0$，則 $u\\ne0$、$A^{-1}u\\ne0$，而 $(A+uv^T)A^{-1}u=u(1+v^TA^{-1}u)=0$，故不可逆。若 $d\\ne0$，乘法展開可驗證上式。複數情況此為代數外積 $uv^T$；若題目使用 $uv^*$，全部相應改用共軛轉置。",
      "writingPrompt": "各挑一個 2×2 數值例子驗證公式，先確認分母非零。"
    },
    {
      "id": "LA-CH01-S06-K01",
      "title": "LU 是高斯消去的紀錄",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "目標是 $A=LU$，其中 $L$ 為主對角全 1 的下三角矩陣，$U$ 為上三角矩陣。$L$ 記錄消去倍數，$U$ 記錄消去結果。通常 $LU\\ne UL$。\n\n若消去步驟為 $E_r\\cdots E_2E_1A=U$，其中每個 $E_i$ 只進行倍加列，則\n\n$$A=E_1^{-1}E_2^{-1}\\cdots E_r^{-1}U=LU.$$\n\n理由：從左側依序消去 $E_r,\\ldots,E_1$ 時，反矩陣在右側結果的排列為 $E_1^{-1}\\cdots E_r^{-1}$。每個反矩陣為單位下三角，其乘積仍為單位下三角。"
    },
    {
      "id": "LA-CH01-S06-K02",
      "title": "消去倍數與演算法",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "第 $k$ 步，先看目前矩陣的主元 $a_{kk}^{(k)}$。對 $i>k$，若主元非零：\n\n$$m_{ik}=\\frac{a_{ik}^{(k)}}{a_{kk}^{(k)}},\\qquad R_i\\leftarrow R_i-m_{ik}R_k.$$\n\n上標 $(k)$ 表示「已完成前面步驟的當前值」，不是次方。把 $m_{ik}$ 寫入 $L_{ik}$。不可把列運算中加號後的數字直接照抄到 $L$。\n\n例如 $R_3\\leftarrow R_3+\\frac12R_2$，等於減去 $-\\frac12R_2$，所以倍數是 $-\\frac12$。\n\n步驟：初始化 $L=I,U=A$ → 逐主元消去 → 每次記錄倍數 → 最後驗算 $LU=A$。不得把 $U$ 繼續化成 RREF 後仍沿用原本 $L$。"
    },
    {
      "id": "LA-CH01-S06-K03",
      "title": "不換列 LU 的適用條件",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "「可逆」不保證不換列 LU；「奇異」不代表沒有 LU。\n\n對可逆方陣，在 $L$ 單位下三角的約定下，存在 $A=LU$ 等價於所有順序主子式 $\\Delta_1,\\ldots,\\Delta_n$ 非零。因可逆已知 $\\Delta_n\\ne0$，亦可只檢查前 $n-1$ 個。\n\n必要性：$A$ 的左上角主區塊等於相應的 $L_kU_k$，故 $\\Delta_k=\\prod_{i=1}^ku_{ii}$；可逆的三角 $U$ 對角皆非零。充分性：依消去過程，主元為 $u_{kk}=\\Delta_k/\\Delta_{k-1}$，取 $\\Delta_0=1$，所以不會遇到零主元。\n\n零主元若下方同一行尚有非零元素，直接消去會失敗；若下方已全零，則不一定需要除法。例如上三角奇異矩陣可直接取 $L=I$。不能將「所有主元非零」當所有奇異矩陣存在 LU 的必要條件。"
    },
    {
      "id": "LA-CH01-S06-K04",
      "title": "LDU 分解",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "當 $U$ 的對角全非零，令 $D=\\operatorname{diag}(u_{11},\\ldots,u_{nn})$，$\\widehat U=D^{-1}U$，則\n\n$$A=LD\\widehat U.$$\n\n$L$ 是單位下三角，$D$ 是對角，$\\widehat U$ 是單位上三角。左乘 $D^{-1}$ 是把 $U$ 的第 $i$ 列除以 $u_{ii}$。有零對角時 $D^{-1}$ 不存在，這個公式不能使用。"
    },
    {
      "id": "LA-CH01-S06-K05",
      "title": "排列與 PA=LU",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "排列矩陣是單位矩陣重排列後的結果，$P^{-1}=P^T$。左乘 $PA$ 重新排列列，右乘 $AP$ 重新排列行；兩者效果不可混用。多個排列矩陣的乘積仍是排列矩陣，但通常不交換。\n\n換列後應記錄 $PA=LU$，所以 $A=P^TLU$。單次兩列交換的矩陣滿足 $P=P^T$，一般排列矩陣未必對稱。\n\n**延伸提醒：中途換列。** 若在第 $k$ 步換第 $k$ 與第 $p$ 列，須連同 $L$ 已填好的第 $1$ 到 $k-1$ 行位置一併交換；尚未填寫部分不要整列亂換。"
    },
    {
      "id": "LA-CH01-S06-K06",
      "title": "部分選主元與數值精度",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "部分選主元（partial pivoting）：第 $k$ 步在第 $k$ 行中，從第 $k$ 列至第 $n$ 列的候選元素選絕對值最大者，交換到第 $k$ 列。這裡「行」指 column，搜尋的是同一直行的下方元素。\n\n很小的主元會產生很大的倍數，在有限精度計算下容易使誤差放大。選主元有助於減少這種問題，但不保證所有矩陣都沒有數值誤差，也不改變病態問題本身的敏感性。若候選全部為零，不可硬做除法。"
    },
    {
      "id": "LA-CH01-S06-K07",
      "title": "利用 LU 解方程組",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "由 $Ax=b$ 與 $A=LU$，令 $y=Ux$，得到先 $Ly=b$、再 $Ux=y$。\n\n$L$ 為單位下三角時，前代為\n\n$$y_i=b_i-\\sum_{j=1}^{i-1}\\ell_{ij}y_j.$$\n\n這表示從 $b_i$ 扣掉「已知的前面變數所貢獻的項」。例如 $y_3=b_3-\\ell_{31}y_1-\\ell_{32}y_2$。\n\n若 $u_{ii}\\ne0$，回代為\n\n$$x_i=\\frac{y_i-\\sum_{j=i+1}^nu_{ij}x_j}{u_{ii}},\\quad i=n,n-1,\\ldots,1.$$\n\n若 $PA=LU$，則應解 $Ly=Pb$，再解 $Ux=y$。有零對角時，不能直接套回代除法；須檢查相容性、自由變數，可能無解或無限多解。\n\n同一 $A$ 有多個右端向量時，分解只做一次。延伸：稠密矩陣分解約 $O(n^3)$，每組前代與回代約 $O(n^2)$。一般不必先求 $A^{-1}$。"
    },
    {
      "id": "LA-CH01-S06-K08",
      "title": "延伸：唯一性、行列式與塊狀消去",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "### 唯一性\n\n若 $A$ 可逆且 $A=L_1U_1=L_2U_2$，兩個 $L$ 都是單位下三角，則\n\n$$L_2^{-1}L_1=U_2U_1^{-1}.$$\n\n左側為單位下三角，右側為上三角；相同矩陣必同時上下三角，因此為對角矩陣，再由左側對角全為 1 得為 $I$。故兩組分解相同。未規範 $L$ 的對角，或 $A$ 奇異時，不能照搬這個唯一性結論。\n\n### 行列式\n\n$A=LU$ 時 $\\det(A)=\\prod_i u_{ii}$，因為 $\\det(L)=1$。$PA=LU$ 時 $\\det(A)=\\det(P)\\prod_i u_{ii}$，每交換一次兩列會改變一次符號。\n\n### 塊狀消去與 Schur complement\n\n令 $M=\\begin{bmatrix}B&C\\\\D&E\\end{bmatrix}$，假設方陣 $B$ 可逆，令 $S=E-DB^{-1}C$，則\n\n$$M=\\begin{bmatrix}I&0\\\\DB^{-1}&I\\end{bmatrix}\\begin{bmatrix}B&C\\\\0&S\\end{bmatrix}.$$\n\n相乘的左下為 $D$，右下為 $DB^{-1}C+S=E$，所以等式成立；故 $\\det(M)=\\det(B)\\det(S)$。乘法順序不可交換，也不能省略 $B$ 可逆的條件。\n\n正定矩陣延伸：實對稱正定矩陣順序主子式皆正，可不換列 LU；亦有 Cholesky 分解，但不作本節原教材已完整涵蓋的主張。"
    },
    {
      "id": "LA-CH01-S07-K01",
      "title": "三種基本運算",
      "difficulty": 1,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "矩陣 $A$ 的第 $i$ 個 row 記為 $R_i$，第 $j$ 個 column 記為 $C_j$。元素 $a_{ij}$ 的第一下標 $i$ 是 row 位置、第二下標 $j$ 是 column 位置。\n\n|類型|row 操作|column 操作|條件與反向操作|\n|---|---|---|---|\n|交換|$R_i \\leftrightarrow  R_j$|$C_i \\leftrightarrow  C_j$|$i\\ne j$；再交換一次還原|\n|倍乘|$R_i \\leftarrow  kR_i$|$C_i \\leftarrow  kC_i$|$k\\ne 0$；乘 $1/k$ 還原|\n|倍加|$R_j \\leftarrow  R_j+kR_i$|$C_j \\leftarrow  C_j+kC_i$|$i\\ne j$；改加 $-k$ 倍還原|\n\n倍加只改目標，來源不變。倍乘 0 會消去資訊，不能逆轉。$k=0$ 的倍加、$k=1$ 的倍乘是恆等操作；是否將恆等矩陣也稱基本矩陣，依教材慣例確認。"
    },
    {
      "id": "LA-CH01-S07-K02",
      "title": "基本矩陣（elementary matrix）",
      "difficulty": 1,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "對單位矩陣 $I_n$ 做一次基本操作所得的矩陣，稱基本矩陣。$I_n$ 對角線為 1，其餘為 0。交換矩陣記為 $P_{ij}$；第 $i$ 個座標倍乘 $k$ 的矩陣記為 $D_i(k)$。\n\n為避免教材下標慣例衝突，本稿倍加採\n\n$$T_{ji}(k)=I_n+k e_j e_i^T.$$\n\n其中 $e_i$ 是第 $i$ 個標準基底向量（僅第 $i$ 個座標為 1），$T$ 表示轉置；$e_j e_i^T$ 僅在位置 $(j,i)$ 為 1。例如 $T_{21}(5)$=$\\begin{bmatrix}1&0\\\\5&1\\end{bmatrix}$，左乘時對應 $R_2\\leftarrow R_2+5R_1$。"
    },
    {
      "id": "LA-CH01-S07-K03",
      "title": "乘法方向與維度",
      "difficulty": 3,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "若 $A$ 為 $m\\times n$，row 操作矩陣 $E$ 為 $m\\times m$，column 操作矩陣 $F$ 為 $n\\times n$：\n\n$$EA=\\text{row 操作後的矩陣},\\qquad AF=\\text{column 操作後的矩陣}.$$\n\n左乘時，($EA$) 的第 $j$ 個 row 是 $E$ 第 $j$ 個 row 所指定的 $A$ 各 rows 的線性組合。\n\n右乘時，($AF$) 的第 $j$ 個 column 是 $F$ 第 $j$ 個 column 所指定的 $A$ 各 columns 的線性組合。因此\n\n$$R_j\\leftarrow R_j+kR_i:\\ E=I_m+ke_je_i^T,$$\n$$C_j\\leftarrow C_j+kC_i:\\ F=I_n+ke_ie_j^T.$$\n\n同一倍加矩陣放兩側，來源與目標方向不同，不能只背下標。"
    },
    {
      "id": "LA-CH01-S07-K04",
      "title": "操作順序與逆矩陣",
      "difficulty": 3,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "先 row 操作 $E_1$，再 $E_2$：$B=E_2E_1A$；先 column 操作 $F_1$，再 $F_2$：$B=AF_1F_2$。最先作用的因子最靠近 $A$。\n\n$$P_{ij}^{-1}=P_{ij},\\quad D_i(k)^{-1}=D_i(1/k),\\quad T_{ji}(k)^{-1}=T_{ji}(-k).$$\n\n倍加反矩陣證明：令 $N=e_je_i^T$，因 $i\\ne j$，$e_i^Te_j=0$，故 $N^{2}=0$；$(I+kN)(I-kN)=I-k^{2}N^{2}=I$。\n\n若 $B=E_r\\cdots E_1A$，則 $A=E_1^{-1}\\cdots E_r^{-1}B$。逆向還原先撤銷最後一步。"
    },
    {
      "id": "LA-CH01-S07-K05",
      "title": "等價關係與不變量",
      "difficulty": 3,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "row equivalent：有限次 row 操作互得，等價於 $B=PA$，其中 $P$ 為可逆 $m\\times m$ 矩陣。column equivalent：$B=AQ$，其中 $Q$ 為可逆 $n\\times n$ 矩陣。兩者各具反身性（零次操作）、對稱性（反向操作）、傳遞性（接續操作）。\n\n|性質|可逆左乘 $PA$|可逆右乘 $AQ$|\n|---|---|---|\n|rank（秩）|不變|不變|\n|row space|相同|一般不同|\n|column space|一般不同；變為 $P \\operatorname{col}(A)$|相同|\n|null space（核空間）|相同|變為 $Q^{-1} \\operatorname{ker}(A)$|\n|方陣行列式數值|不一定相同|不一定相同|\n|方陣可逆性|保留|保留|\n\n例如 $PAx=0 \\iff  Ax=P^{-1}0=0$，故核相同。$AQx=0 \\iff  Qx\\in \\operatorname{ker}(A)$，故 $x\\in Q^{-1}\\operatorname{ker}(A)$。rank 不變，因可逆變換不改變線性獨立資訊的維數。\n\n補充：交換使行列式變號，倍乘 $k$ 使其乘 $k$，倍加使其不變。等價不代表相等，也不代表相似；特徵值不一定保留。"
    },
    {
      "id": "LA-CH01-S07-K06",
      "title": "方程組與反矩陣",
      "difficulty": 3,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "$Ax=b$ 做 row 操作時，必須連同常數欄一起處理：\n\n$$[A\\mid b]\\longrightarrow[EA\\mid Eb].$$\n\n因 $E$ 可逆，$Ax=b \\iff  EAx=Eb$，解集合相同。column 操作不能直接當成保留未知數 $x$ 的方程等價：若 $x=Qy$，則 $Ax=b$ 變成 $AQy=b$，需要追蹤座標變換。\n\n方陣求逆：若 $E_r\\cdots E_1A=I$，則 $E_r\\cdots E_1=A^{-1}$。因此 $[A\\mid I]$ 以 row 操作化為 $[I\\mid A^{-1}]$；若左半無法化為 $I$，$A$ 不可逆。"
    },
    {
      "id": "LA-CH01-S07-K07",
      "title": "可逆方陣的等價條件",
      "difficulty": 3,
      "provenance": "數學整理 · 原教材歸屬待核對",
      "markdown": "令 $A\\in F^{n\\times n}$，$F$ 為實數、複數或一般域。下列等價：$A$ 可逆；$\\operatorname{ker}(A)=\\{0\\}$；columns 線性獨立；rows 線性獨立；$\\operatorname{rank}(A)=n$；$\\operatorname{RREF}(A)=I_n$；可由 row 操作化為 $I_n$；每個 $b\\in F^n$，$Ax=b$ 恰有一解；每個 $b\\in F^n$，$Ax=b$ 至少有一解；$\\operatorname{det}(A)\\ne 0$。\n\n證明主線：可逆 ⇒ $x=A^{-1}b$ 存在且唯一 ⇒ 取 $b=0$ 得只有零解 ⇒ 無自由變數、每個 column 有主元 ⇒ 方陣每個 row 也有主元 ⇒ RREF 為 $I$ ⇒ 消去操作乘積就是反矩陣。每個 $b$ 都有解 ⇒ column space=$F^n$ ⇒ $\\operatorname{rank}=n$，接回主線。\n\n非方陣 $A\\in F^{m\\times n}$：只有零解等價於滿 column rank $n$；每個 $b$ 都有解等價於滿 row rank $m$，不能直接互推。某個 $b$ 有解、某個非零 $b$ 有解，都不足以推出方陣可逆。"
    },
    {
      "id": "LA-CH01-S07-K08",
      "title": "補充：雙邊等價與秩標準形",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "允許 row、column 兩種操作時，可找到可逆 $P$、$Q$，使\n\n$$PAQ=\\begin{bmatrix}I_r&0\\\\0&0\\end{bmatrix},\\qquad r=\\operatorname{rank}(A).$$\n\n這稱矩陣等價的秩標準形，不是相似對角化。全 1 矩陣 $J$：先 $R_2\\leftarrow R_2-R_1$、$R_3\\leftarrow R_3-R_1$，剩第一 row 為 $(1,1,1)$；再 $C_2\\leftarrow C_2-C_1$、$C_3\\leftarrow C_3-C_1$，才得到 $\\operatorname{diag}(1,0,0)$。"
    },
    {
      "id": "DS-CH01-S01-K01",
      "sourceId": "DS-K01",
      "title": "五個階段",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "系統生命週期（System Life Cycle）描述從需求到驗證的開發過程，不能把「程式能執行」視為完成全部工作。\n\n| 階段 | 要回答的問題 | 產出例子 |\n|---|---|---|\n| 需求 Requirements | 要做什麼、輸入輸出及限制是什麼？ | 搜尋資料須排序；找不到回傳 -1 |\n| 分析 Analysis | 問題如何分解？ | 讀入、檢查、搜尋、輸出 |\n| 設計 Design | 資料如何表示、操作如何進行？ | 排序陣列＋二元搜尋 |\n| 實作與修正 Refinement and Coding | 如何轉為可執行程式？ | 完成函式並逐步修正 |\n| 驗證 Verification | 對合法輸入是否符合規格？ | 正確性論證、測試、除錯 |"
    },
    {
      "id": "DS-CH01-S01-K02",
      "sourceId": "DS-K02",
      "title": "分析與設計",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "由上而下（top-down）：先看整體，再拆成子問題。由下而上（bottom-up）：先建立可用的基本元件，再組合系統。兩者可以交互使用。\n\n資料物件（data objects）的表示法與操作演算法須一起考慮。陣列支援以索引直接取值；已排序陣列適合二元搜尋。若資料未排序，不能直接根據中間值排除一半。"
    },
    {
      "id": "DS-CH01-S01-K03",
      "sourceId": "DS-K03",
      "title": "驗證",
      "difficulty": 3,
      "provenance": "教材整理 · 含自編補充",
      "markdown": "正確性證明（correctness proof）要說明演算法在指定前提下對所有合法輸入成立；測試（testing）只檢查選定案例；除錯（debugging）定位並修正發現的問題。測試全部通過不等於已證明所有情況正確。\n\n自編補充：測試可含空資料、單一資料、邊界、重複值、找不到的目標。這些屬測試策略延伸，並非已確認原講義的完整清單。"
    },
    {
      "id": "DS-CH01-S02-K04",
      "sourceId": "DS-K04",
      "title": "演算法及五項性質",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "演算法（algorithm）是完成特定工作的有限步驟；程式（program）是以特定語言實作。相同演算法可以有不同語言實作。\n\n| 性質 | 意義 | 常見誤解 |\n|---|---|---|\n| 輸入 Input | 零個或多個輸入 | 不一定至少一個 |\n| 輸出 Output | 至少一項結果 | 回傳值、輸出資料等須符合規格 |\n| 明確性 Definiteness | 指令清楚且無歧義 | 「夠好時停止」未定義夠好 |\n| 有限性 Finiteness | 對合法輸入於有限步驟終止 | 有基底不代表一定到得了 |\n| 有效性 Effectiveness | 每一步足夠基本且可實際完成 | 不是要求時間複雜度一定很低 |"
    },
    {
      "id": "DS-CH01-S02-K05",
      "sourceId": "DS-K05",
      "title": "選擇排序（Selection Sort）",
      "difficulty": 3,
      "provenance": "教材整理 · 含自編補充",
      "markdown": "令 n 為元素個數，索引為 0 至 n−1。第 i 輪從索引 i 至 n−1 找最小值，放到位置 i。`min_index` 儲存索引，`a[min_index]` 才是值。\n\n```text\nselection_sort(a, n):\n    for i = 0 to n-2:\n        min_index = i\n        for j = i+1 to n-1:\n            if a[j] < a[min_index]: min_index = j\n        if min_index != i: swap(a[i], a[min_index])\n```\n\n正確性：開始時已排序前綴為空；每輪把剩餘最小元素放到其最終位置，前綴維持有序且不大於後綴；n−1 輪後最後元素也在正確位置。\n\n比較數：第一輪 n−1 次、第二輪 n−2 次，直到 1 次。\n\n$$C(n)=\\sum_{k=1}^{n-1}k=\\frac{n(n-1)}2.$$\n\nΣ（sigma）表示把指定範圍各項相加；k 是求和索引。比較成本在最佳、平均與最差皆為 $\\Theta(n^2)$；額外空間 $\\Theta(1)$。Θ 表示上下界同階，O 只表示漸近上界。\n\n自編延伸：此交換版通常不穩定（stable），例如 `[2a,2b,1]` 第一輪變 `[1,2b,2a]`，兩個值為 2 的元素相對順序改變。交換最多 n−1 次；是否計入與自身交換須看程式。"
    },
    {
      "id": "DS-CH01-S02-K06",
      "sourceId": "DS-K06",
      "title": "二元搜尋（Binary Search）",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "前提：資料依同一比較規則遞增排序，且此處採閉區間 `[left,right]`。每次取中點，比較後排除不可能的半部。\n\n```text\nbinary_search(a, n, x):\n    left = 0; right = n-1\n    while left <= right:\n        mid = left + (right-left)//2\n        if a[mid] == x: return mid\n        if x < a[mid]: right = mid-1\n        else: left = mid+1\n    return -1\n```\n\n`//` 為非負整數整除。閉區間剩一個元素時仍須檢查，所以條件用 `<=`。更新用 mid±1 排除已檢查元素，確保規模縮小。中點形式可避免直接計算 left+right 所造成的部分整數溢位問題。\n\n不變量：若目標存在，尚未排除的可能位置在當前區間內。區間為空時，目標不存在。最佳時間 $\\Theta(1)$；最差 $\\Theta(\\log n)$。迭代額外空間 $\\Theta(1)$；一般遞迴版最差堆疊 $\\Theta(\\log n)$。基本版本只找任一相符位置，未保證第一或最後一個。"
    },
    {
      "id": "DS-CH01-S02-K07",
      "sourceId": "DS-K07",
      "title": "遞迴設計（Recursion）",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "直接遞迴：A 呼叫 A。間接遞迴：A 呼叫 B，B 經呼叫鏈回到 A。兩者都須有基底情況（base case）、遞迴關係（recursive case）與能朝基底前進的規模量。\n\n呼叫堆疊（call stack）保存各次呼叫的參數、區域狀態與返回位置。總呼叫數影響時間，最大同時未返回的呼叫數影響堆疊空間；兩者不同。若未指定編譯器最佳化，不假設尾端呼叫自動消除。"
    },
    {
      "id": "DS-CH01-S02-K08",
      "sourceId": "DS-K08",
      "title": "階乘（Factorial）",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "$$0!=1,\\qquad n!=n(n-1)!\\quad(n\\geq1).$$\n\nn 為非負整數。每次 n 減一，終止於 0。單位成本模型下時間 $\\Theta(n)$，一般遞迴堆疊 $\\Theta(n)$；迭代只需常數額外空間。負數須拒絕；固定寬度整數可能溢位。大整數乘法成本另計，不能把此模型無條件套用任意大 n。"
    },
    {
      "id": "DS-CH01-S02-K09",
      "sourceId": "DS-K09",
      "title": "費波那契數列（Fibonacci Sequence）",
      "difficulty": 3,
      "provenance": "教材整理 · 含自編補充",
      "markdown": "$$F_0=0,\\quad F_1=1,\\quad F_n=F_{n-1}+F_{n-2}\\ (n\\geq2).$$\n\n下標 n 是項目編號，不是乘法。直接遞迴重複求解相同子問題。若 C(n) 計所有函式進入次數（包含初始呼叫），則\n\n$$C(0)=C(1)=1,\\quad C(n)=1+C(n-1)+C(n-2)=2F_{n+1}-1.$$\n\n最後等式可由歸納法驗證：基底各為 1；代入前兩項公式後得到 $2(F_n+F_{n-1})-1=2F_{n+1}-1$。直接遞迴時間 $\\Theta(\\varphi^n)$，$\\varphi=(1+\\sqrt5)/2$；$O(2^n)$ 也是合法較寬上界，堆疊 $\\Theta(n)$。\n\n自編延伸：記憶化（memoization）保存已求結果，單位成本模型下時間 $\\Theta(n)$、快取 $\\Theta(n)$；命中快取仍算一次函式進入。迭代只保留最近兩項，時間 $\\Theta(n)$、額外空間 $\\Theta(1)$。"
    },
    {
      "id": "DS-CH01-S02-K10",
      "sourceId": "DS-K10",
      "title": "自訂二維遞迴：待原圖確認",
      "difficulty": 3,
      "provenance": "條件式自編 · 定義待原圖確認",
      "markdown": "前次整理先稱此題為二項式係數，後又指出原講義邊界不同。為避免沿用錯誤，本稿不把它命名為二項式係數。暫依前次整理末段所述，以以下定義作「條件式自編練習」，原講義正式內容待核對：\n\n$$A(n,0)=n+1,\\quad A(0,m)=1,\\quad A(n,m)=A(n-1,m)+A(n,m-1)\\ (n,m\\geq1).$$\n\nn、m 為非負整數，交點 A(0,0)=1 一致。此定義允許 m>n，不可套用一般二項式係數的定義域限制。可逐列填表，不必展開大量重複遞迴。\n\n自編延伸：此暫定函式其實滿足 $A(n,m)=\\binom{n+m+1}{n}$，但不等於 $\\binom nm$；由邊界及帕斯卡恆等式可驗證。正式教材不依此推測反向重建原題。"
    },
    {
      "id": "DS-CH01-S02-K11",
      "sourceId": "DS-K11",
      "title": "最大公因數（Greatest Common Divisor）",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "歐幾里得演算法（Euclidean Algorithm）：$\\gcd(a,b)=\\gcd(b,a\\bmod b)$，其中 mod 表示除法餘數。對 a≥0、b>0，餘數在 0 至 b−1，規模嚴格縮小。\n\n```text\ngcd(a,b):\n    a = abs(a); b = abs(b)\n    if b == 0: return a\n    return gcd(b, a mod b)\n```\n\n先判斷 b=0 再取餘數，避免除以零。數學上 gcd(0,0) 依採用慣例另訂；此程式回傳 0 是程式規格選擇。單位成本下餘數步驟數為對數級；真實位元運算成本另計。"
    },
    {
      "id": "DS-CH01-S02-K12",
      "sourceId": "DS-K12",
      "title": "排列（Permutations）與回溯（Backtracking）",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "n 個互異元素有 n! 種排列。固定位置 i 的候選元素，再處理後面位置；每個遞迴分支返回後交換回來，恢復下一個分支需要的狀態。\n\n```text\npermute(a, i, n):\n    if i == n:\n        output(a)\n        return\n    for j = i to n-1:\n        swap(a[i], a[j])\n        permute(a, i+1, n)\n        swap(a[i], a[j])\n```\n\n若每個完整排列列印 n 個元素，總時間 $\\Theta(n\\cdot n!)$；一般遞迴額外空間 $\\Theta(n)$，不含存下全部輸出的空間。重複元素可能產生重複排列。"
    },
    {
      "id": "DS-CH01-S02-K13",
      "sourceId": "DS-K13",
      "title": "河內塔（Towers of Hanoi）",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "三根柱子中，把 n 個盤從 A 搬到 C、以 B 輔助，一次一盤且大盤不能放小盤上。先把 n−1 盤由 A 搬到 B，再搬最大盤 A→C，再把 n−1 盤 B→C。\n\n$$T(0)=0,\\qquad T(n)=2T(n-1)+1.$$\n\n展開 k 層得 $T(n)=2^kT(n-k)+(2^k-1)$。令 k=n，因 T(0)=0，得到 $T(n)=2^n-1$。此處 T 是移動次數；它也給出逐步輸出移動的時間 $\\Theta(2^n)$，遞迴堆疊 $\\Theta(n)$。\n\n最少性理由：最大盤移動前，n−1 個小盤必須離開來源並聚於另一柱；移動後還要搬到目標，兩段各至少需要 T(n−1) 次，另加最大盤一次。上述演算法剛好達到此界。"
    },
    {
      "id": "DS-CH01-S03-K1301",
      "sourceId": "ds-k1301",
      "title": "資料型態",
      "difficulty": 1,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "資料型態（Data Type）由一組資料物件，以及可作用在這些物件上的運算構成。\n\n$$\\text{資料型態}=\\text{物件集合}+\\text{運算集合}$$\n\n例如整數型態包含整數值，以及加法、減法、比較等操作。實際程式語言的整數通常有表示範圍；數學整數則沒有固定上限。描述型態時必須說明採用哪個模型。"
    },
    {
      "id": "DS-CH01-S03-K1302",
      "sourceId": "ds-k1302",
      "title": "抽象資料型態",
      "difficulty": 1,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "抽象資料型態（Abstract Data Type, ADT）描述資料及操作的對外行為，將規格與內部表示、程式實作分開。使用者依操作契約使用 ADT，無須依賴內部一定採用陣列或鏈結串列。\n\n| 層面 | 堆疊範例 |\n|---|---|\n| 資料物件 | 元素的有限序列 |\n| 行為規格 | push 加入頂端；pop 取出頂端，遵守後進先出（LIFO） |\n| 實作選擇 | 陣列、鏈結串列等 |\n| 成本 | 取決於實作及容量策略，不能僅從 ADT 名稱推定 |\n\n類別（class）可用來實作 ADT，但特定類別程式碼不等於抽象規格。相同 ADT 的不同實作可以有相同行為、不同效能。"
    },
    {
      "id": "DS-CH01-S03-K1303",
      "sourceId": "ds-k1303",
      "title": "運算規格與角色",
      "difficulty": 3,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "先前教材整理列出的運算規格項目為函式名稱（Function name）、引數型態（Argument type）與結果型態（Result type）。\n\n【延伸補充】要消除行為歧義，可再列前置條件、後置條件、狀態變化及錯誤情況。例如 pop 的結果可包含「被取出的元素」與「更新後堆疊」；可變物件實作則可能修改原物件。不得自行假定空堆疊 pop 必定回傳某個值。\n\n| 角色 | 意義 | 例子 |\n|---|---|---|\n| Creator／Constructor | 建立型態實例 | 建立空堆疊 |\n| Transformer | 改變狀態，或產生變換後實例 | push、pop |\n| Observer／Reporter | 查詢資訊 | size、isEmpty、top |\n\n判斷依據是操作效果。pop 常同時回報元素並改變狀態，因此不能因為它有回傳值就只列為 Observer。上述 Transformer 用語需與原圖定義再核對。"
    },
    {
      "id": "DS-CH01-S04-K1401",
      "sourceId": "ds-k1401",
      "title": "效能分析",
      "difficulty": 1,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "時間需求衡量工作量；空間需求衡量同時需要的儲存量。理論分析先訂輸入規模及成本模型，推導成長；實測在指定硬體、語言、編譯器及資料上取得執行結果。實測時間與理論複雜度不是相同量。"
    },
    {
      "id": "DS-CH01-S04-K1402",
      "sourceId": "ds-k1402",
      "title": "空間需求",
      "difficulty": 1,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "$$S(P)=C+S_P(I)$$\n\nP 表示程式，I 表示輸入實例，C 是不隨輸入改變的固定空間，$S_P(I)$ 是依輸入變動的空間。分析漸近需求時，常再用 n 代表輸入規模。\n\n| 情況 | 在固定字長、每個元素固定大小的模型下 |\n|---|---|\n| 固定個數的參數、變數與暫存值 | $\\Theta(1)$ |\n| 新建 n 個元素的陣列 | $\\Theta(n)$ |\n| 新建 n×n 矩陣 | $\\Theta(n^2)$ |\n| 額外空間／輔助空間 | 不包含原有輸入；輸出是否計入須說明 |\n\n常數階不表示只占 1 byte。C/C++ 的陣列參數一般不複製整個陣列；不能因函式接收 list[] 就推定每次遞迴都配置一份 n 元素陣列。\n\n教材固定運算式範例：\n\n```c\nfloat abc(float a, float b, float c) {\n    return a+b+c*(a+b-c)/(a+b)+4;\n}\n```\n\n只有固定數量參數與暫存值，空間為常數階。這項成本結論不保證所有輸入都具有有效的數學結果；分母 a+b 的條件屬程式正確性問題。"
    },
    {
      "id": "DS-CH01-S04-K1403",
      "sourceId": "ds-k1403",
      "title": "迴圈與遞迴加總",
      "difficulty": 3,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "```c\nfloat sum(float list[], int n) {\n    float tempsum = 0;\n    for (int i = 0; i < n; i++)\n        tempsum += list[i];\n    return tempsum;\n}\n```\n\n前提 $n\\ge 0$，list 有至少 n 個可讀元素。迴圈讀取 n 個元素，時間 $\\Theta(n)$（n 趨大時），輔助空間 $\\Theta(1)$；若包含輸入陣列，總空間為 $\\Theta(n)$。\n\n先前轉述的教材遞迴版本為：\n\n```c\nfloat rsum(float list[], int n) {\n    if (n)\n        return rsum(list, n-1) + list[n-1];\n    return list[0];\n}\n```\n\n【待原圖核對的勘誤】若 n 表示元素個數，此版本在 n=0 時讀 list[0]；非空加總會多加一次 list[0]。例如 n=2 時得到 $2list[0]+list[1]$。這是對轉述程式的分析，尚不能斷言原書確實如此印刷。\n\n【編者修正版】\n\n```c\nfloat rsum(float list[], int n) {\n    if (n == 0) return 0;\n    return rsum(list, n-1) + list[n-1];\n}\n```\n\n每次把 n 減一，直到 0，共 $n+1$ 次呼叫。若每層非遞迴工作為常數：\n\n$$T(n)=T(n-1)+\\Theta(1),\\quad T(0)=\\Theta(1)$$\n\n展開 n 次得到 $T(n)=T(0)+n\\Theta(1)=\\Theta(n)$。一般未消除遞迴的執行模型中，最深同時有 $n+1$ 層，每層固定空間，所以輔助空間 $\\Theta(n)$。此函式返回前仍要進行加法，不是直接回傳遞迴結果的尾遞迴形式。\n\n空間看最大同時存在的框架，不看整段程式累積呼叫次數；同時深度與總呼叫數必須分開計算。"
    },
    {
      "id": "DS-CH01-S04-K1404",
      "sourceId": "ds-k1404",
      "title": "步數、S/E 與頻率",
      "difficulty": 3,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "S/E（Steps per Execution）表示敘述每次執行的計費步數；Frequency 表示執行次數。\n\n$$\\text{總步數}=\\sum_{i=1}^{m}s_i f_i$$\n\nΣ 是加總符號：i 從 1 到 m，把每列的 $s_i f_i$ 相加；m 是被計費的列數，$s_i$ 是該列每次步數，$f_i$ 是該列頻率。\n\n依先前表格採用的簡化計費約定：\n\n| sum 的計費項目 | S/E | 頻率 | 貢獻 |\n|---|---:|---:|---:|\n| tempsum 初始化 | 1 | 1 | 1 |\n| 迴圈控制列 | 1 | $n+1$ | $n+1$ |\n| 累加敘述 | 1 | n | n |\n| return | 1 | 1 | 1 |\n\n所以 $T(n)=1+(n+1)+n+1=2n+3$。這是表格的抽象計費方式，未把 i 初始化、i++ 等拆開另計；若題目要求每個基本操作逐項計費，就必須重新列式。不能把此數字當成通用 CPU 指令數。\n\n迴圈本體執行 n 次，但檢查 $n+1$ 次，因為最後還要一次失敗檢查。以 n=0 檢查邊界可知本體不執行、控制仍計一次。"
    },
    {
      "id": "DS-CH01-S04-K1405",
      "sourceId": "ds-k1405",
      "title": "矩陣加法",
      "difficulty": 3,
      "provenance": "教材整理 · 原圖待核對",
      "markdown": "```c\nfor (i = 0; i < rows; i++)\n    for (j = 0; j < cols; j++)\n        c[i][j] = a[i][j] + b[i][j];\n```\n\n令 r=rows、c=cols；此段數學中的 c 為欄數，程式 c[i][j] 則是輸出矩陣，兩者意義不同。r、c 為非負整數且矩陣容量足夠。\n\n| 計費列 | 頻率 |\n|---|---:|\n| 外層控制 | r+1 |\n| 內層控制 | r(c+1) |\n| 元素相加及指定 | rc |\n\n按每列一次算一步：\n\n$$T(r,c)=(r+1)+r(c+1)+rc=2rc+2r+1.$$\n\n因為每一列重新啟動內層迴圈，所以每列都有 c+1 次內層控制。對 $r,c\\ge 1$，時間為 $\\Theta(rc)$；若包含零維度情形，保留 $\\Theta(rc+r+1)$ 才完整。$r=c=n\\ge 1$ 時為 $\\Theta(n^2)$。\n\n【待核對】先前整理指出原表總數可能與列項不合；本稿只確認上述三項相加的代數結果，原表是否誤印須看原圖。\n\n若輸出矩陣新配置，輸出空間為 $\\Theta(rc)$；若排除輸入輸出、只算迴圈索引等工作空間，輔助空間為 $\\Theta(1)$。判斷時先交代空間口徑。"
    },
    {
      "id": "DS-CH01-S04-K1406",
      "sourceId": "ds-k1406",
      "title": "漸近記號【延伸補充】",
      "difficulty": 3,
      "provenance": "補充延伸",
      "markdown": "$f(n)=O(g(n))$ 表示存在正常數 C 與門檻 $n_0$，使所有 $n\\ge n_0$ 都滿足 $0\\le f(n)\\le Cg(n)$；Ω 是相應下界，Θ 同時要求上下界。這裡 C 是界的常數，與前文空間式的 C 屬不同使用情境。\n\n$2n+3=\\Theta(n)$，也屬 $O(n)$；它同時屬 $O(n^2)$，但後者較不緊。精確步數、漸近上界、緊確階不能混稱。定義沒有提到最佳或最壞案例，所以 O 不自動等於最壞情況；先選案例再分析函數。"
    },
    {
      "id": "DS-CH01-S05-K15A",
      "sourceId": "ds-k15a",
      "title": "上界、下界、緊界",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "以下假設函數最終非負，$g(n)$ 最終為正。大 O（Big-O）描述漸近上界：存在 $c>0,n_0$，使所有 $n\\ge n_0$ 滿足 $0\\le f(n)\\le cg(n)$。大 Omega 描述漸近下界，將後一不等式改為 $cg(n)\\le f(n)$。Theta 描述緊界：存在 $c_1,c_2>0,n_0$，使 $c_1g(n)\\le f(n)\\le c_2g(n)$。因此 $f=\\Theta(g)$ 當且僅當同時 $f=O(g)$ 與 $f=\\Omega(g)$。記號中的等號是慣用寫法，並非一般代數等式。\n\n| 記號 | 要證明什麼 | 常見錯誤 |\n|---|---|---|\n| $O(g)$ | 最終不超過某常數倍 $g$ | 誤認一定是最緊上界 |\n| $\\Omega(g)$ | 最終不小於某正常數倍 $g$ | 誤認必定是最好情況 |\n| $\\Theta(g)$ | 同時有上界與下界 | 只證明其中一邊 |"
    },
    {
      "id": "DS-CH01-S05-K15B",
      "sourceId": "ds-k15b",
      "title": "多項式與成長順序",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "固定次數 $m\\ge0$ 的多項式，若最高次係數為正，則最終為 $\\Theta(n^m)$；負低次項須以不等式控制，不能對所有小 $n$ 直接忽略。固定常數倍與較低次項不改變漸近階。\n\n$$1\\prec\\log n\\prec n\\prec n\\log n\\prec n^2\\prec2^n\\prec n!.$$\n\n此處 $\\prec$ 表示比值趨近 0 的嚴格漸近較慢，並非每個固定輸入都較小。例如 $n=O(n^2)$ 成立，但 $n^2=O(n)$ 不成立。"
    },
    {
      "id": "DS-CH01-S05-K15C",
      "sourceId": "ds-k15c",
      "title": "情況分析與嚴格界",
      "difficulty": 5,
      "provenance": "補充延伸",
      "markdown": "最好、平均、最壞情況先決定要研究哪個成本函數，再描述該函數的 $O,\\Omega,\\Theta$，兩者不是同一分類。小 o（little-o）定義：對每個 $c>0$，都存在門檻使 $f(n)\\le cg(n)$；在上述正性條件下等價於 $f(n)/g(n)\\to0$。小 omega 則表示比值趨近無窮。"
    },
    {
      "id": "DS-CH01-S06-K16A",
      "sourceId": "ds-k16a",
      "title": "迴圈轉求和",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "先指定關鍵操作，再確認每層實際範圍。獨立的兩個 $n$ 次迴圈共有 $n^2$ 次操作；若第二層依第一層變動，必須求和：\n\n$$\\sum_{i=1}^n\\sum_{j=1}^i1=\\sum_{i=1}^ni=\\frac{n(n+1)}2=\\Theta(n^2).$$\n\n\n\n固定外層 $k$，若 $1\\le i,j\\le k$ 且只計 $i\\ne j$，有序對共 $k^2-k$ 個；累加得 $\\sum_{k=1}^n(k^2-k)=n(n+1)(n-1)/3=\\Theta(n^3)$。"
    },
    {
      "id": "DS-CH01-S06-K16B",
      "sourceId": "ds-k16b",
      "title": "倍增、減半與開根號",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "$i$ 從 1 開始反覆乘固定 $b>1$，達到 $n$ 約需 $\\log_b n$ 輪；$i=n$ 開始取 $\\lfloor i/2\\rfloor$，到 0 前共有 $\\lfloor\\log_2n\\rfloor+1$ 輪（每次正值時先執行本體）。若停止條件改成 $i>1$，精確次數會不同。"
    },
    {
      "id": "DS-CH01-S06-K16C",
      "sourceId": "ds-k16c",
      "title": "常見遞迴與成本",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "以下小規模成本為正常數，除非另述，非遞迴工作是所列的緊確量級：\n\n| 遞迴式 | 思路 | 緊界 |\n|---|---|---|\n| $T(n)=T(n/2)+1$ | 一條路徑約 $\\log_2n$ 層 | $\\Theta(\\log n)$ |\n| $T(n)=2T(n/2)+1$ | 滿二元遞迴樹，$n$ 為 2 的冪時約 $2n-1$ 個節點 | $\\Theta(n)$ |\n| $T(n)=T(n-1)+n$ | $n+(n-1)+\\cdots+1$ | $\\Theta(n^2)$ |\n| $T(n)=2T(n-1)+1$ | 每層節點倍增、深度線性 | $\\Theta(2^n)$ |\n\n\n\n補充：單位成本模型假設基本算術操作成本固定；大整數計算不能未說明就採同一模型。遞迴時間與最大同時存在的呼叫堆疊不同；樸素 Fibonacci 時間 $\\Theta(\\varphi^n)$，堆疊深度 $\\Theta(n)$，其中 $\\varphi=(1+\\sqrt5)/2$。"
    },
    {
      "id": "DS-CH01-S07-K17A",
      "sourceId": "ds-k17a",
      "title": "形式與適用條件",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "$$T(n)=aT(n/b)+f(n),\\qquad d=\\log_ba.$$\n\n$a\\ge1,b>1$ 必須是固定常數；$f(n)$ 最終非負，小規模成本為正常數。實際整數問題要處理取整，常見良性情況可維持階數，但不能完全略去遞迴的定義。\n\n| 情況 | 條件 | 結論 |\n|---|---|---|\n| 1：本層多項式級較小 | 存在 $\\varepsilon>0$，$f(n)=O(n^{d-\\varepsilon})$ | $\\Theta(n^d)$ |\n| 2：同級含對數因子 | $f(n)=\\Theta(n^d\\log^k n)$，本稿採 $k\\ge0$ 版本 | $\\Theta(n^d\\log^{k+1}n)$ |\n| 3：本層多項式級較大 | $f(n)=\\Omega(n^{d+\\varepsilon})$，且 $af(n/b)\\le cf(n)$ 對某 $c<1$ 最終成立 | $\\Theta(f(n))$ |\n\n第二列為常用擴充版；不能將 $k=-1$ 自動代入此表。第三列的額外條件稱正則性（regularity）。"
    },
    {
      "id": "DS-CH01-S07-K17B",
      "sourceId": "ds-k17b",
      "title": "快查與不能套用的情況",
      "difficulty": 5,
      "provenance": "教材整理",
      "markdown": "| 遞迴式 | 緊界／限制 |\n|---|---|\n| $2T(n/2)+n$ | $\\Theta(n\\log n)$ |\n| $2T(n/2)+n\\log n$ | $\\Theta(n\\log^2n)$ |\n| $16T(n/4)+n^2$ | $\\Theta(n^2\\log n)$ |\n| $7T(n/2)+n^2$ | $\\Theta(n^{\\log_2 7})$ |\n| $2T(n/4)+\\sqrt n$ | $\\Theta(\\sqrt n\\log n)$ |\n| $nT(n/2)+1$ | $a=n$ 不是常數，不能套此表 |\n| $T(n-1)+n$ | 規模不是固定比例縮小，不能套此表 |"
    },
    {
      "id": "DS-CH01-S08-K18A",
      "sourceId": "ds-k18a",
      "title": "對數規則",
      "difficulty": 1,
      "provenance": "教材整理",
      "markdown": "對數（logarithm）的底數 $b>0,b\\ne1$，真數為正；成長比較採固定 $b>1$。\n\n$$\\log_b1=0,\\quad\\log_bb=1,\\quad\\log_b(xy)=\\log_bx+\\log_by,\\quad\\log_b(x^r)=r\\log_bx.$$\n$$\\log_bx=\\frac{\\log_cx}{\\log_cb},\\quad b^{\\log_bx}=x,\\quad\\log_bb^r=r.$$\n\n換底時 $c>0,c\\ne1$。固定且大於 1 的底數之間只差正常數倍，因此不改變漸近階；精確計算仍要明寫底數。$\\log^kn=(\\log n)^k$，$\\log\\log n=\\log(\\log n)$。"
    },
    {
      "id": "DS-CH01-S08-K18B",
      "sourceId": "ds-k18b",
      "title": "有限級數",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "$$\\sum_{k=0}^m x^k=\\frac{x^{m+1}-1}{x-1}\\quad(x\\ne1),\\qquad\\sum_{k=0}^m k2^k=(m-1)2^{m+1}+2.$$\n\n第一式在 $x=1$ 時應直接用和式得 $m+1$。第二式可對第一式對 $x$ 微分，再乘 $x$ 並代入 2。"
    },
    {
      "id": "DS-CH01-S08-K18C",
      "sourceId": "ds-k18c",
      "title": "複雜函數比較",
      "difficulty": 5,
      "provenance": "教材整理",
      "markdown": "$$a^{\\log_bn}=n^{\\log_ba},\\quad (\\log_2n)^{\\log_2n}=n^{\\log_2\\log_2n}.$$\n\n固定 $k,c>0$，有 $\\log^kn=o(n^c)$。Stirling 公式 $n!\\sim\\sqrt{2\\pi n}(n/e)^n$，其中 $\\sim$ 表示兩者比值趨近 1。因而固定 $a>1$ 時，$a^n\\prec n!\\prec n^n$。"
    },
    {
      "id": "DS-CH01-S09-K19A",
      "sourceId": "ds-k19a",
      "title": "代入法／猜測加歸納",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "猜測法（substitution method）：先由展開或遞迴樹猜階數，再用強歸納證明。要證明 $\\Theta$ 必須給上界與下界。歸納假設套用在更小規模，不能直接假設目前欲證的命題。"
    },
    {
      "id": "DS-CH01-S09-K19B",
      "sourceId": "ds-k19b",
      "title": "關係性質",
      "difficulty": 3,
      "provenance": "教材整理",
      "markdown": "| 性質 | 敘述 |\n|---|---|\n| 遞移性 | $f=\\Theta(g),g=\\Theta(h)\\Rightarrow f=\\Theta(h)$；$O,\\Omega$ 也有遞移性 |\n| 反身性 | $f=\\Theta(f)$，也有 $f=O(f),f=\\Omega(f)$ |\n| 對稱性 | $f=\\Theta(g)\\iff g=\\Theta(f)$ |\n| 轉置對稱性 | $f=O(g)\\iff g=\\Omega(f)$ |"
    },
    {
      "id": "LA-CH02-S01-K01",
      "title": "矩陣與行列式不同",
      "difficulty": 1,
      "markdown": "矩陣是一個數值陣列；行列式是對方陣定義的純量函數。非方陣在本課程不定義行列式。\n\n對 $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，\n\n$$\\det(A)=ad-bc.$$\n\n先算左上乘右下，再減右上乘左下。二階公式同時也是高階遞迴計算的基礎。可逆性連結為 $A$ 可逆當且僅當 $\\det(A)\\ne0$；一般階數的證明留後續性質建立後處理。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S01-K02",
      "title": "固定其餘列時的線性",
      "difficulty": 3,
      "markdown": "若 $u=(a_1,a_2)$、$v=(b_1,b_2)$、$w=(c_1,c_2)$ 為橫向列向量，$k$ 為純量，則\n\n$$\\det\\begin{bmatrix}u+kv\\\\w\\end{bmatrix}=\\det\\begin{bmatrix}u\\\\w\\end{bmatrix}+k\\det\\begin{bmatrix}v\\\\w\\end{bmatrix}.$$\n\n證明逐步如下：\n\n$$\\begin{aligned}\n\\det\\begin{bmatrix}a_1+kb_1&a_2+kb_2\\\\c_1&c_2\\end{bmatrix}\n&=(a_1+kb_1)c_2-(a_2+kb_2)c_1 &&\\text{二階定義}\\\\\n&=(a_1c_2-a_2c_1)+k(b_1c_2-b_2c_1) &&\\text{分配律與合併}.\n\\end{aligned}$$\n\n最後兩組就是右邊的兩個行列式。固定第一列、改變第二列也成立。\n\n**限制：其他列必須固定。** $\\det(A+B)=\\det(A)+\\det(B)$ 一般不成立。以 $A=B=I_2$ 為例，左邊為4，右邊為2。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S01-K03",
      "title": "單列縮放與整體縮放",
      "difficulty": 1,
      "markdown": "只有一列乘 $k$，行列式乘 $k$。整個二階矩陣乘 $k$ 時，兩列各提出一次，故\n\n$$\\det(kA)=k^2\\det(A).$$\n\n一般 $n$ 階則為 $\\det(kA)=k^n\\det(A)$，理由是每列各貢獻一個 $k$。不需除以 $k$，所以 $k=0$ 也適用。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S01-K04",
      "title": "相同列、比例列、零列",
      "difficulty": 1,
      "markdown": "$$\\det\\begin{bmatrix}a&b\\\\a&b\\end{bmatrix}=ab-ba=0.$$\n\n比例列可先提出倍數，化成相同列；零列也可直接由二階公式得到0。對行也成立。例：$\\det\\begin{bmatrix}6&8\\\\3&4\\end{bmatrix}=24-24=0$。\n\n提醒：二階行列式為0代表兩列線性相依；若含零列，不宜硬用比值描述，避免除以0。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K01",
      "title": "子矩陣、子式、餘因子",
      "difficulty": 1,
      "markdown": "一階 $\\det([a])=a$。對 $n\\ge2$，選 $a_{ij}$，刪第 $i$ 列與第 $j$ 行得到 $(n-1)$ 階子矩陣；取其行列式得 $M_{ij}$，再加符號得\n\n$$C_{ij}=(-1)^{i+j}M_{ij}.$$\n\n三階符號棋盤為 $\\begin{bmatrix}+&-&+\\\\-&+&-\\\\+&-&+\\end{bmatrix}$。$i+j$ 偶數取正、奇數取負。子矩陣是矩陣，子式與餘因子都是數；子式本身也可能為負，不能把棋盤負號當成子式的數值。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K02",
      "title": "Laplace展開",
      "difficulty": 3,
      "markdown": "可用第一列遞迴定義：$\\det(A)=\\sum_{j=1}^n a_{1j}C_{1j}$。Laplace展開定理（Laplace expansion）指出任一列、任一行皆可展開：\n\n$$\\det(A)=\\sum_{j=1}^n a_{ij}C_{ij}\\quad\\text{（固定列 }i\\text{）},$$\n$$\\det(A)=\\sum_{i=1}^n a_{ij}C_{ij}\\quad\\text{（固定行 }j\\text{）}.$$\n\n例如沿第二列，就是 $a_{21}C_{21}+a_{22}C_{22}+\\cdots+a_{2n}C_{2n}$。每項必須保留原元素；若已使用 $C_{ij}$，不要再乘一次棋盤符號。\n\n計算流程：確認方陣 → 找零最多的列或行 → 只對非零元素列項 → 刪對列行 → 算子式與符號 → 合併。遇一般稠密高階矩陣，不必硬做大量展開；列運算化簡屬後續延伸方法。\n\n三階沿第一列展開為\n\n$$\\begin{aligned}\\det(A)={}&a_{11}(a_{22}a_{33}-a_{23}a_{32})\\\\&-a_{12}(a_{21}a_{33}-a_{23}a_{31})\\\\&+a_{13}(a_{21}a_{32}-a_{22}a_{31}).\\end{aligned}$$\n\nSarrus斜線法只適用三階，不可直接延用到四階。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K03",
      "title": "多重線性與轉置",
      "difficulty": 3,
      "markdown": "高階行列式固定其他列時，對某一列線性，稱多重線性（multilinearity）；對行亦然。可把二階的單列拆和、單列倍數性質推廣至 $n$ 階。兩列相同或成比例、存在零列時行列式為0。\n\n$$\\det(A^T)=\\det(A).$$\n\n轉置不等於交換兩列。利用轉置性質，列的性質可對應到行。上述為本節性質整理；一般階數的完整定理證明未出現在可讀的先前文字，不能聲稱已照錄原教材證明。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K04",
      "title": "三角矩陣",
      "difficulty": 1,
      "markdown": "上三角矩陣主對角下方全為0；下三角矩陣主對角上方全為0。兩者皆滿足\n\n$$\\det(A)=\\prod_{i=1}^n a_{ii}=a_{11}\\cdots a_{nn}.$$\n\n上三角可沿第一行（縱向）展開，只剩 $a_{11}$，留下仍為上三角的子矩陣，重複得到公式；下三角可沿第一列展開。對角矩陣同時為上下三角，$\\det(I_n)=1$。\n\n**左下方有非零數不代表一定不是三角矩陣**：仍可能是下三角；必須檢查整個上方或下方區域。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K05",
      "title": "不同列的元素與餘因子配對",
      "difficulty": 3,
      "markdown": "$$\\sum_{j=1}^n a_{rj}C_{sj}=\\begin{cases}\\det(A),&r=s,\\\\0,&r\\ne s.\\end{cases}$$\n\n當 $r\\ne s$，把第 $s$ 列換成第 $r$ 列。新矩陣有重複列，行列式為0；沿第 $s$ 列展開，其餘因子刪除的是替換列，因此與原矩陣 $C_{sj}$ 相同，得到公式。對行的版本為 $\\sum_i a_{ir}C_{is}=0$（$r\\ne s$）。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S02-K06",
      "title": "函數行列式的微分",
      "difficulty": 3,
      "markdown": "各元素在考察點可微時，若列向量為 $r_1(x),\\ldots,r_n(x)$，\n\n$$\\frac{d}{dx}\\det\\begin{bmatrix}r_1\\\\\\vdots\\\\r_n\\end{bmatrix}=\\sum_{k=1}^n\\det\\begin{bmatrix}r_1\\\\\\vdots\\\\r'_k\\\\\\vdots\\\\r_n\\end{bmatrix}.$$\n\n每項只微分一列，其餘不變。二階可從 $f_1g_2-f_2g_1$ 使用乘法法則得到 $f'_1g_2+f_1g'_2-f'_2g_1-f_2g'_1$，再分成兩個行列式。不可寫成 $\\det(A')$。\n\n連續導數列的特殊形式：\n\n$$W=\\det\\begin{bmatrix}f_1&f_2&f_3\\\\f'_1&f'_2&f'_3\\\\f''_1&f''_2&f''_3\\end{bmatrix}\\quad\\Longrightarrow\\quad W'=\\det\\begin{bmatrix}f_1&f_2&f_3\\\\f'_1&f'_2&f'_3\\\\f'''_1&f'''_2&f'''_3\\end{bmatrix}.$$\n\n假設所需三階導數存在。前兩項分別出現兩列相同而為0，才可只留最後一列微分。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S03-K01",
      "title": "三類基本運算與零值",
      "difficulty": 1,
      "markdown": "對任意兩個不同的列索引 $i\\ne j$：\n\n| 操作 | 新行列式 | 直向的行操作 |\n|---|---|---|\n| $R_i\\leftrightarrow R_j$ | $-\\det A$ | 同樣變號 |\n| $R_i\\leftarrow kR_i$ | $k\\det A$ | 同樣乘 $k$ |\n| $R_i\\leftarrow R_i+kR_j$ | $\\det A$ | 同樣不變 |\n\n倍乘公式允許 $k=0$，但「可逆的基本列運算／初等矩陣」要求 $k\\ne0$。交換 $s$ 次乘 $(-1)^s$。整個矩陣乘 $k$ 等於每一列都乘 $k$，所以 $\\det(kA)=k^n\\det A$。\n\n零列、零行、兩列相同或成倍數，均使行列式為 0。更一般地，列或行線性相依等價於行列式為 0。若兩列相同，交換後矩陣不變但行列式變號，故在特徵不為 2 的數域可直接推出零值；一般數域可由行列式的交替性得到同一結論。\n\n**計算策略：**先找相同、倍數、相依與可相減的列行，再用加倍數消去，最後對角線連乘；交換與倍乘必須記帳。見 E01、E02。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K02",
      "title": "多重線性 Multilinearity",
      "difficulty": 3,
      "markdown": "其餘列固定，只將第 $i$ 列寫成 $\\alpha u+\\beta v$ 時：\n\n$$\\det(\\ldots,\\alpha u+\\beta v,\\ldots)=\\alpha\\det(\\ldots,u,\\ldots)+\\beta\\det(\\ldots,v,\\ldots).$$\n\n直向的行也成立。「分別線性」表示一次固定其餘位置；**不是對整個矩陣線性**。例如 $A=B=I_2$，$\\det(A+B)=4$，但 $\\det A+\\det B=2$。若有兩列都拆成兩項，通常產生四個行列式，交叉項不能省略。見 E03。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K03",
      "title": "餘因子與錯位展開",
      "difficulty": 3,
      "markdown": "沿第 $i$ 列展開：$\\det A=\\sum_{j=1}^n a_{ij}K_{ij}$。符號棋盤由左上角正號開始，依 $(-1)^{i+j}$ 決定。\n\n將第 $k$ 列換成第 $i$ 列，沿新矩陣第 $k$ 列展開。因為餘因子的子矩陣刪除了第 $k$ 列，故使用的餘因子仍是原矩陣的 $K_{kj}$。當 $i\\ne k$，新矩陣有相同列，得到：\n\n$$\\sum_{j=1}^n a_{ij}K_{kj}=\\begin{cases}\\det A&i=k,\\\\0&i\\ne k.\\end{cases}$$\n\n行版本為 $\\sum_{i=1}^n a_{ij}K_{ik}$，$j=k$ 時等於 $\\det A$，其餘為 0。\n\n因 $\\operatorname{adj}(A)=[K_{ji}]$，矩陣乘法第 $(i,k)$ 元素正好是上述和式，因此\n\n$$A\\operatorname{adj}(A)=\\operatorname{adj}(A)A=(\\det A)I.$$\n\n這個等式即使 $A$ 不可逆也成立；只有再除以 $\\det A$ 求反矩陣時才要求非零。見 E04。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K04",
      "title": "轉置、乘法與反矩陣",
      "difficulty": 1,
      "markdown": "$$\\det A^T=\\det A,\\qquad \\det(AB)=\\det A\\det B.$$\n\n因此 $\\det(AB)=\\det(BA)$，但不能推出 $AB=BA$。同理，任意有限個同階方陣的乘積，其行列式等於各自行列式的乘積。\n\n$$\\det(A^m)=(\\det A)^m\\quad(m\\ge0),\\qquad \\det(A^{-1})=\\frac1{\\det A}\\quad(A\\text{ 可逆}).$$\n\n後式由 $AA^{-1}=I$ 取行列式得出；對可逆矩陣，冪次公式也適用於負整數。$m=0$ 時 $A^0=I$，應理解右側為空乘積 1，避免將奇異矩陣的情況解讀為一般實數運算中的 $0^0$。\n\n**方法辨識：**題目只給 $\\det A,\\det B$，卻問轉置、反矩陣、乘積或冪的行列式時，先用公式拆解，不必求矩陣元素。見 E05。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K05",
      "title": "可逆性、參數與奇數階",
      "difficulty": 3,
      "markdown": "對 $n$ 階方陣，以下條件等價：\n\n$$A\\text{ 可逆}\\iff\\det A\\ne0\\iff\\operatorname{rank}A=n\\iff\\ker A=\\{0\\}.$$\n\n也等價於列、行皆線性獨立。含參數題先算 $d(t)=\\det A(t)$：解 $d(t)=0$ 得不可逆參數，其餘可逆。先前整理提到的因式 $(\\lambda-5)(\\lambda-1)(\\lambda-21)$ 的零點確為 $1,5,21$，但原矩陣尚缺，不能驗證它是否真的具有該行列式。見 E06。\n\n若 $AB=-BA$ 且 $n$ 是奇數，取行列式：\n\n$$\\det A\\det B=\\det(-BA)=(-1)^n\\det B\\det A=-\\det A\\det B.$$\n\n在特徵不為 2 的數域，得到 $\\det A\\det B=0$，所以至少一個不可逆。偶數階無法如此推出；例如 $A=\\operatorname{diag}(1,-1)$、$B=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$ 都可逆，卻有 $AB=-BA$。\n\n若 $A^T=-A$（斜對稱 skew-symmetric）且階數為奇數，同樣由 $\\det A=\\det A^T=\\det(-A)=-\\det A$ 得不可逆。見 E07。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K06",
      "title": "初等矩陣 Elementary Matrix",
      "difficulty": 3,
      "markdown": "對 $A$ 做橫向列運算，相當於左乘初等矩陣 $E$；直向行運算相當於右乘。三類初等矩陣的行列式分別為 $-1,k,1$，皆非零。\n\n若 $U=E_r\\cdots E_1A$ 是消去所得上三角矩陣，則\n\n$$\\det U=\\left(\\prod_{i=1}^r\\det E_i\\right)\\det A.$$\n\n要算原行列式，就把修正係數除回去；不能把消去後的對角線連乘不加修正就當原答案。上、下三角矩陣皆有 $\\det U=\\prod_i u_{ii}$。見 E02、E08。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K09",
      "title": "矩陣和與乘積",
      "difficulty": 3,
      "markdown": "若 $A$ 可逆，\n\n$$A+B=(I+BA^{-1})A=A(I+A^{-1}B).$$\n\n取行列式後，因 $\\det A\\ne0$，$A+B$ 可逆若且唯若 $I+BA^{-1}$ 可逆，也等價於 $I+A^{-1}B$ 可逆。\n\n對同階方陣，$AB$ 可逆若且唯若 $A,B$ 都可逆，因為 $\\det(AB)=\\det A\\det B$ 非零恰好表示兩個因子都非零。但不可逆矩陣的和可能可逆，例如 $\\operatorname{diag}(1,0)+\\operatorname{diag}(0,1)=I_2$。見 E12。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K07",
      "title": "分塊三角與 Schur 補",
      "difficulty": 5,
      "markdown": "令 $P$ 為 $p\\times p$、$S$ 為 $q\\times q$，$Q$ 為 $p\\times q$、$R$ 為 $q\\times p$。則\n\n$$\\det\\begin{bmatrix}P&Q\\\\0&S\\end{bmatrix}=\\det P\\det S,\\qquad\\det\\begin{bmatrix}P&0\\\\R&S\\end{bmatrix}=\\det P\\det S.$$\n\n$p,q$ 不必相等，$P,S$ 也不必可逆。此公式是對角「區塊」行列式的乘積，不是單純把所有對角區塊元素相乘。\n\n若 $P$ 可逆，左乘\n\n$$L=\\begin{bmatrix}I_p&0\\\\-RP^{-1}&I_q\\end{bmatrix},\\qquad\\det L=1,$$\n\n得到\n\n$$L\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\begin{bmatrix}P&Q\\\\0&S-RP^{-1}Q\\end{bmatrix}.$$\n\n因此\n\n$$\\det\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\det P\\det(S-RP^{-1}Q).$$\n\n$S-RP^{-1}Q$ 是相對於 $P$ 的 Schur 補（Schur complement）。**編輯補充：**若 $S$ 可逆，可改用 $\\det S\\det(P-QS^{-1}R)$。見 E09。\n\n若四區塊都是同階方陣，且 $PR=RP$，則有\n\n$$\\det\\begin{bmatrix}P&Q\\\\R&S\\end{bmatrix}=\\det(PS-RQ).$$\n\n先假設 $P$ 可逆，由上式及乘積公式：$\\det P\\det(S-RP^{-1}Q)=\\det(PS-PRP^{-1}Q)=\\det(PS-RQ)$。最後一步使用交換條件。\n\n**編輯補充：奇異的 $P$ 如何補足證明。**在實數或複數上，把 $P$ 換為 $P+tI$；它仍與 $R$ 可交換，且除有限多個 $t$ 外均可逆。等式兩邊都是 $t$ 的多項式，無限多個 $t$ 成立，故為恆等式，代回 $t=0$ 即得一般情形。有限數域需用形式變數的多項式論證，不能直接使用「無限多個數值」這一步。\n\n特別注意原對話的排列是 $\\begin{bmatrix}A&C\\\\B&D\\end{bmatrix}$，因此條件為 $AB=BA$，結果為 $\\det(AD-BC)$。若區塊排列改為 $\\begin{bmatrix}A&B\\\\C&D\\end{bmatrix}$，對應條件應為 $AC=CA$，結果才是 $\\det(AD-CB)$；不要只背字母順序。見 E10。",
      "provenance": "教材整理 · 含編輯補充"
    },
    {
      "id": "LA-CH02-S03-K08",
      "title": "成對分塊結構",
      "difficulty": 3,
      "markdown": "對任意同階方陣 $A,B$，不必假設 $AB=BA$：\n\n$$\\det\\begin{bmatrix}A&B\\\\B&A\\end{bmatrix}=\\det(A+B)\\det(A-B).$$\n\n證明：將上方區塊列加上下方區塊列，得到 $\\begin{bmatrix}A+B&A+B\\\\B&A\\end{bmatrix}$；再將右方區塊行減左方區塊行，得到 $\\begin{bmatrix}A+B&0\\\\B&A-B\\end{bmatrix}$。這些操作都可拆成普通的加倍數列／行運算，故不改行列式；最後用分塊三角公式。此證法不需要除以 2。見 E11。",
      "provenance": "教材整理轉述"
    },
    {
      "id": "LA-CH02-S03-K10",
      "title": "Vandermonde 行列式",
      "difficulty": 3,
      "markdown": "$$V=\\begin{bmatrix}1&x_1&\\cdots&x_1^{n-1}\\\\1&x_2&\\cdots&x_2^{n-1}\\\\\\vdots&\\vdots&&\\vdots\\\\1&x_n&\\cdots&x_n^{n-1}\\end{bmatrix},\\qquad\\det V=\\prod_{1\\le i<j\\le n}(x_j-x_i).$$\n\n下標 $i<j$ 表示每一對不同索引只取一次。例如 $n=3$ 時乘 $(x_2-x_1)(x_3-x_1)(x_3-x_2)$。公式不要求數值互異才能成立；互異是行列式非零的充要條件。\n\n**編輯補充：證明主線。**視行列式為各 $x_i$ 的多項式。令 $x_i=x_j$ 時兩列相同，所以含因子 $x_j-x_i$。全部因子的總次數為 $n(n-1)/2$，與行列式的總次數相同，故僅差常數。比較單項式 $x_2x_3^2\\cdots x_n^{n-1}$ 的係數為 1，得常數為 1。轉置不變，但任意交換兩列仍會變號。見 E13。",
      "provenance": "教材整理 · 含編輯補充"
    },
    {
      "id": "LA-CH02-S03-K11",
      "title": "三對角行列式與遞迴",
      "difficulty": 5,
      "markdown": "設 $T_n$ 主對角線皆為 $a$，上副對角線皆為 $b$，下副對角線皆為 $c$，其餘為 0。令 $D_n=\\det T_n$，並定義 $D_0=1$（空行列式），$D_1=a$。\n\n沿第一列展開，第一項是 $aD_{n-1}$；第二項符號為負，刪除第一列第二行後，其子矩陣第一行只有頂端的 $c$，再展開得 $cD_{n-2}$，所以\n\n$$D_n=aD_{n-1}-bcD_{n-2}\\quad(n\\ge2).$$\n\n注意副對角線不相等時是 $bc$，不是 $b^2$。若相同皆為 $x$、主對角線為 $y$，則是 $D_n=yD_{n-1}-x^2D_{n-2}$。\n\n對話中的遞迴 $D_n=10D_{n-1}-25D_{n-2}$、$D_1=10,D_2=75$，特徵方程 $(r-5)^2=0$。重根通解 $(u+vn)5^n$，代入得 $u=v=1$，所以 $D_n=(n+1)5^n$。\n\n**編輯補充：成大候選題的解法工具。**當 $y=x$，$D_n=x^nf_n$（$x\\ne0$ 時可用除法定義），$f_0=f_1=1$、$f_n=f_{n-1}-f_{n-2}$，依序為 $1,1,0,-1,-1,0$ 並以 6 為週期。當 $y=2x$，$D_n=(n+1)x^n$。若 $x=0$，對 $n\\ge1$ 原矩陣是零矩陣，直接得 $D_n=0$，不要在推導中除以零。見 E14。",
      "provenance": "教材整理 · 含編輯補充"
    },
    {
      "id": "LA-CH02-S04-K01",
      "title": "從餘因子建立伴隨矩陣",
      "difficulty": 1,
      "markdown": "設 $A=[a_{ij}]$ 為 $n\\times n$ 方陣；$a_{ij}$ 表示第 $i$ 列、第 $j$ 行元素。$A^T$ 是轉置（transpose），將列、行交換。刪除第 $i$ 列、第 $j$ 行後，剩餘矩陣的行列式為子行列式（minor）$M_{ij}$。餘因子（cofactor）定義為\n\n$$C_{ij}=(-1)^{i+j}M_{ij}.$$\n\n正負號由 $i+j$ 的奇偶決定：偶數為正、奇數為負。三階符號依序為第一列 $+,-,+$；第二列 $-,+,-$；第三列 $+,-,+$。\n\n古典伴隨矩陣（classical adjugate）是餘因子矩陣的轉置：\n\n$$\\operatorname{adj}(A)=[C_{ij}]^T=[C_{ji}].$$\n\n第 $(i,j)$ 位置應放 $C_{ji}$，不能只把所有餘因子原位排好就停止。它與複數矩陣的共軛轉置（常記 $A^*$）是不同運算。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S04-K02",
      "title": "核心恆等式",
      "difficulty": 3,
      "markdown": "$I_n$ 表示對角為1、其他為0的單位矩陣；$\\det(A)$ 表示行列式。對所有方陣均有\n\n$$A\\operatorname{adj}(A)=\\operatorname{adj}(A)A=\\det(A)I_n.$$\n\n證明第一個乘積：矩陣乘法第 $(i,j)$ 項為\n\n$$[A\\operatorname{adj}(A)]_{ij}=\\sum_{k=1}^{n}a_{ik}C_{jk}.$$\n\n$\\sum$（sigma）代表把 $k=1,2,\\ldots,n$ 的項逐項相加；例如三階時就是 $a_{i1}C_{j1}+a_{i2}C_{j2}+a_{i3}C_{j3}$。\n\n若 $i=j$，正好是沿第 $i$ 列的餘因子展開，等於 $\\det(A)$。若 $i\\ne j$，把 $A$ 的第 $j$ 列改成原第 $i$ 列；刪除第 $j$ 列所得子行列式不變，故上述和式就是新矩陣沿第 $j$ 列的展開。新矩陣有兩列相同，行列式為0。這證明乘積對角為 $\\det(A)$，其餘為0。右乘的等式同理由行（column）展開證明。\n\n此處沒有除法，因此 $\\det(A)=0$ 時依然成立，乘積為零矩陣。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S04-K03",
      "title": "反矩陣公式",
      "difficulty": 1,
      "markdown": "若且唯若 $\\det(A)\\ne0$，矩陣可逆（invertible），此時核心式可除以非零純量：\n\n$$A^{-1}=\\frac{\\operatorname{adj}(A)}{\\det(A)}.$$\n\n操作：先算行列式判斷可逆，再算餘因子、轉置、除以行列式。對二階矩陣有\n\n$$A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix},\\quad \\operatorname{adj}(A)=\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}.$$\n\n「對角交換，非對角變號」只適用二階；不可直接套在三階。行列式為零時伴隨仍有定義，反矩陣沒有定義。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S04-K04",
      "title": "性質與適用條件",
      "difficulty": 3,
      "markdown": "以下 $n\\ge2$，$A,B$ 為同階方陣。\n\n| 性質 | 公式 | 限制 |\n|---|---|---|\n| 行列式 | $\\det(\\operatorname{adj}A)=\\det(A)^{n-1}$ | 可含奇異矩陣 |\n| 轉置 | $\\operatorname{adj}(A^T)=\\operatorname{adj}(A)^T$ | 無可逆要求 |\n| 乘積 | $\\operatorname{adj}(AB)=\\operatorname{adj}(B)\\operatorname{adj}(A)$ | 順序反轉，無可逆要求 |\n| 純量（補充） | $\\operatorname{adj}(cA)=c^{n-1}\\operatorname{adj}(A)$ | 每個餘因子為 $n-1$ 階行列式 |\n| 可逆等價 | $A$ 可逆 $\\iff\\operatorname{adj}(A)$ 可逆 | $n\\ge2$ |\n\n可逆時對核心式取行列式：$\\det(A)\\det(\\operatorname{adj}A)=\\det(A)^n$，約去非零的 $\\det(A)$ 即得公式。若奇異，不能約分：當秩不超過 $n-2$，全部 $n-1$ 階子行列式為0；當秩等於 $n-1$，由核心式知伴隨的每個行向量都在一維零空間中，故伴隨的秩至多1。兩種情況的伴隨皆奇異（$n\\ge2$），行列式為0。\n\n轉置性質由子行列式轉置不改行列式可得。若兩矩陣可逆，乘積性質由\n\n$$\\operatorname{adj}(AB)=\\det(A)\\det(B)B^{-1}A^{-1}$$\n\n依序分組而得。對奇異情況，兩側的每一元素都是矩陣元素的多項式；在實數或複數域，可用可逆矩陣逼近，再由多項式連續性得到同一恆等式。以上將「可逆時的推導」與「奇異時的補充論證」分開，不以反矩陣代替不存在的運算。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH02-S04-K05",
      "title": "逆矩陣與重複伴隨",
      "difficulty": 3,
      "markdown": "可逆時 $\\operatorname{adj}(A)=\\det(A)A^{-1}$，因此\n\n$$\\operatorname{adj}(A^{-1})=\\det(A)^{-1}A=\\operatorname{adj}(A)^{-1}.$$\n\n再次取伴隨，利用純量公式與前式：\n\n$$\\operatorname{adj}(\\operatorname{adj}(A))=\\det(A)^{n-1}\\operatorname{adj}(A^{-1})=\\det(A)^{n-2}A.$$\n\n$n\\ge2$ 時此式亦可透過多項式恆等式延伸到奇異矩陣。特別是 $n=2$，直接有 $\\operatorname{adj}(\\operatorname{adj}A)=A$，不需要在 $\\det(A)=0$ 時討論 $0^0$。\n\n若已知 $B=\\operatorname{adj}(A)$ 且 $B$ 可逆，則先由 $\\det B=\\det(A)^{n-1}$ 求出可能的 $\\det A$，再由 $A=\\det(A)B^{-1}$ 還原。實數域中，$n=4$ 的次方是3，實立方根唯一；$n=3$ 的次方是2，可能存在正負兩種，不能默認唯一。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S04-K06",
      "title": "不可逆時，伴隨不一定為零",
      "difficulty": 5,
      "markdown": "例如 $A=\\operatorname{diag}(1,0)$，$\\operatorname{diag}$ 表示只把所列數字放在主對角，其餘為0。此時 $\\operatorname{adj}(A)=\\operatorname{diag}(0,1)\\ne0$，但兩者均不可逆。\n\n**額外補充：秩分類。** 秩（rank）是線性獨立行向量數目的最大值；$\\ker A=\\{x:Ax=0\\}$ 為零空間。\n\n| $\\operatorname{rank}A$ | $\\operatorname{rank}(\\operatorname{adj}A)$ | 原因 |\n|---|---:|---|\n| $n$ | $n$ | 伴隨可逆 |\n| $n-1$ | 1 | 至少一個 $n-1$ 階子行列式非零；各行向量皆落在一維零空間 |\n| $\\le n-2$ | 0 | 所有 $n-1$ 階子行列式皆為0 |\n\n此分類假設 $n\\ge2$。延伸理解：秩為 $n-1$ 時，伴隨的非零行向量提供 $Ax=0$ 的解方向。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH02-S04-K07",
      "title": "克拉瑪法則（Cramer's rule）",
      "difficulty": 3,
      "markdown": "考慮方形方程組 $Ax=b$，$a_i$ 表示 $A$ 的第 $i$ 行（column），所以\n\n$$A=[a_1\\ \\cdots\\ a_n],\\quad b=x_1a_1+\\cdots+x_na_n.$$\n\n令 $\\Delta=\\det A$；$A_i(b)$ 表示將第 $i$ 行整行替換成 $b$，其餘行不變；$\\Delta_i=\\det A_i(b)$。若 $\\Delta\\ne0$，唯一解為\n\n$$x_i=\\frac{\\Delta_i}{\\Delta}.$$\n\n推導：將第 $i$ 行的 $b$ 展為上面的線性組合；行列式對這一行線性，所以分成 $n$ 項。來自 $a_k$ 且 $k\\ne i$ 的項會與原第 $k$ 行重複，行列式為0；只有 $x_i a_i$ 一項留下，得到 $\\Delta_i=x_i\\Delta$，再除以非零 $\\Delta$。\n\n若 $\\Delta=0$，不能使用比值。若有某個 $\\Delta_i\\ne0$，由「任何解皆須滿足 $\\Delta_i=x_i\\Delta$」可知無解；但所有 $\\Delta_i=0$ 並不足以保證相容，仍須消去法。例：$A=0_{2\\times2}$、$b=(1,0)^T$，所有替換行列式都是0，系統仍無解。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH02-S04-K08",
      "title": "參數方程組",
      "difficulty": 3,
      "markdown": "先找 $\\det A=0$ 的參數值；非奇異區用克拉瑪法則或消去法求唯一解；各奇異值必須代回原方程。\n\n**補充判斷工具：** 增廣矩陣 $[A\\mid b]$ 是將 $b$ 接在係數矩陣右側。若 $\\operatorname{rank}A<\\operatorname{rank}[A\\mid b]$，無解；若兩者秩相同且小於未知數個數，在實數域有無限多解。\n\n消去／約分後的公式可能可在奇異點算出某個解，但不代表該點有唯一解。前文的「不可直接代入」應精確理解為「不可用代入後的值宣稱唯一解」。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH03-S01-K01",
      "sourceId": "la-31-k01",
      "title": "集合、體與兩種運算",
      "difficulty": 1,
      "markdown": "設 $V$ 為非空集合，$F$ 為體（field）。指定向量加法 $V\\times V\\to V$ 及純量乘法 $F\\times V\\to V$，滿足公設時，稱 $V$ 為「在 $F$ 上的向量空間」。\n\n| 記號 | 意義 | 注意 |\n|---|---|---|\n| $v\\in V$ | $v$ 是集合 $V$ 的一個元素，即向量 | 可以是矩陣、多項式、函數 |\n| $\\alpha\\in F$ | $\\alpha$ 是純量（scalar） | 通常取 $\\mathbb R$ 或 $\\mathbb C$ |\n| $V\\times V$ | 所有有序對 $(u,v)$ 的集合 | 加法取兩個向量作輸入 |\n| $F\\times V$ | 所有 $(\\alpha,v)$ 的集合 | 純量乘法取一純量、一向量 |\n| $0_F,1_F$ | 體的加法零與乘法一 | 都是純量 |\n| $0_V$ | 向量加法的單位元素 | 是向量，不必是數字零 |\n| $-v$ | $v$ 的加法反元素 | 依指定向量加法決定 |\n| $\\in,\\subseteq$ | 屬於、包含於 | 元素屬於集合；集合包含於集合 |\n\n體中的加減乘除遵守通常代數規則，且每個非零元素有乘法反元素。$\\mathbb Z$ 不是體：$2$ 的倒數 $1/2$ 不在其中。本節定義不把以整數為純量的結構稱為向量空間。\n\n同一集合在不同純量體上可能都是向量空間。例如 $\\mathbb C$ 可在 $\\mathbb R$ 或 $\\mathbb C$ 上討論；必須指明純量範圍。此處先不使用後續章節的維度概念。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K02",
      "sourceId": "la-31-k02",
      "title": "十項公設與兩個分配律",
      "difficulty": 3,
      "markdown": "對每個 $u,v,w\\in V$ 與每個 $\\alpha,\\beta\\in F$ 都必須成立：\n\n| 編號 | 公設 | 條件 |\n|---|---|---|\n| A1 | 加法封閉 | $u+v\\in V$ |\n| A2 | 純量乘法封閉 | $\\alpha v\\in V$ |\n| A3 | 加法交換 | $u+v=v+u$ |\n| A4 | 加法結合 | $(u+v)+w=u+(v+w)$ |\n| A5 | 加法單位元素 | 存在 $0_V\\in V$，使 $u+0_V=0_V+u=u$ |\n| A6 | 加法反元素 | 每個 $u$ 有 $-u\\in V$，使 $u+(-u)=(-u)+u=0_V$ |\n| A7 | 對向量加法分配 | $\\alpha(u+v)=\\alpha u+\\alpha v$ |\n| A8 | 對純量加法分配 | $(\\alpha+\\beta)v=\\alpha v+\\beta v$ |\n| A9 | 純量乘法結合 | $(\\alpha\\beta)v=\\alpha(\\beta v)$ |\n| A10 | 純量一的作用 | $1_Fv=v$ |\n\n有些書把兩項封閉性包含在「運算為映射」的定義內，因而只列八項；本稿依教材採十項，並非不同數學結構。\n\nA7 括號內加的是向量；A8 括號內加的是純量。A9 不是向量間的乘法，向量空間並不要求一般向量乘法。\n\n**判斷量詞：**證明成立要處理「任意」元素；否定只需找出「一組」元素使某條件失敗。檢查兩三個數值不能證明全部公設成立。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K03",
      "sourceId": "la-31-k03",
      "title": "零乘法、負號、消去律與零積推論",
      "difficulty": 3,
      "markdown": "以下是推論，不是新增公設。為避免循環論證，先建立消去的合法性，再使用它。\n\n### 3.1 加法消去律\n\n若 $u+w=v+w$，兩邊加上 $w$ 的反元素 $-w$：\n\n$$\n(u+w)+(-w)=(v+w)+(-w)\n\\Rightarrow u+(w+(-w))=v+(w+(-w))\n\\Rightarrow u+0_V=v+0_V\n\\Rightarrow u=v.\n$$\n\n依次使用：同加一元素、A4、A6、A5。左側消去可由 A3 轉成相同形式。\n\n### 3.2 $0_Fv=0_V$\n\n$$\n0_Fv=(0_F+0_F)v=0_Fv+0_Fv.\n$$\n\n第一步用體的 $0_F+0_F=0_F$，第二步用 A8。將左側寫成 $0_V+0_Fv$，由 A5 與消去律可得 $0_V=0_Fv$。\n\n### 3.3 $\\alpha0_V=0_V$\n\n由 $0_V+0_V=0_V$ 及 A7，\n\n$$\n\\alpha0_V=\\alpha(0_V+0_V)=\\alpha0_V+\\alpha0_V.\n$$\n\n與上一步同樣消去 $\\alpha0_V$，得到結論。\n\n### 3.4 負純量與反向量\n\n先看\n\n$$\nv+(-1_F)v=1_Fv+(-1_F)v=(1_F-1_F)v=0_Fv=0_V.\n$$\n\n依次用 A10、A8 與前述零乘法，所以 $(-1_F)v$ 是 $v$ 的反元素，即 $(-1_F)v=-v$。反元素唯一：若 $v+a=v+b=0_V$，由消去律得 $a=b$。\n\n再由 A9 與體的乘法規則：\n\n$$\n\\alpha(-v)=\\alpha((-1_F)v)=(\\alpha(-1_F))v=(-\\alpha)v.\n$$\n\n又因 $\\alpha v+(-\\alpha)v=(\\alpha-\\alpha)v=0_V$，故\n\n$$(-\\alpha)v=\\alpha(-v)=-(\\alpha v).$$\n\n### 3.5 若 $\\alpha v=0_V$，則 $\\alpha=0_F$ 或 $v=0_V$\n\n若 $\\alpha=0_F$，結論已成立。若 $\\alpha\\ne0_F$，因 $F$ 是體，存在 $\\alpha^{-1}$，並且\n\n$$\nv=1_Fv=(\\alpha^{-1}\\alpha)v\n=\\alpha^{-1}(\\alpha v)=\\alpha^{-1}0_V=0_V.\n$$\n\n依次使用 A10、體的反元素、A9、已知條件、3.3。這裡是「純量乘向量」的零積性質，不能直接套成矩陣乘法的零積律。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K04",
      "sourceId": "la-31-k04",
      "title": "座標及固定尺寸矩陣空間",
      "difficulty": 1,
      "markdown": "### 座標空間 $F^n$\n\n$F^n=\\{(x_1,\\ldots,x_n):x_i\\in F\\}$，其中 $n$ 是固定正整數，$i$ 是座標編號。運算逐座標進行：\n\n$$\n(x_1,\\ldots,x_n)+(y_1,\\ldots,y_n)=(x_1+y_1,\\ldots,x_n+y_n),\n\\qquad \\alpha(x_1,\\ldots,x_n)=(\\alpha x_1,\\ldots,\\alpha x_n).\n$$\n\n零向量為 $(0,\\ldots,0)$，反向量為 $(-x_1,\\ldots,-x_n)$。每個座標都在體內運算，因此公設由體的對應規則逐座標成立。\n\n### 固定尺寸矩陣空間 $F^{m\\times n}$\n\n$m,n$ 分別為固定列數與行數，採台灣教材常見的「橫列、直行」用語。矩陣 $A=[a_{ij}]$ 的 $i$ 是列編號、$j$ 是行編號。\n\n$$\n[A+B]_{ij}=a_{ij}+b_{ij},\\qquad[\\alpha A]_{ij}=\\alpha a_{ij}.\n$$\n\n零向量為 $m\\times n$ 零矩陣，反向量為 $-A=[-a_{ij}]$。必須固定尺寸；任意不同尺寸矩陣混在一起，一般不能定義通常加法。矩陣空間成立不依賴矩陣乘法，也不要求矩陣可逆。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K05",
      "sourceId": "la-31-k05",
      "title": "多項式與函數空間",
      "difficulty": 3,
      "markdown": "### 多項式空間 $P(F)$ 與 $P_n(F)$\n\n$P(F)$ 是所有係數在 $F$ 的有限次多項式。一般式\n\n$$p(x)=\\sum_{i=0}^{n}a_ix^i=a_0+a_1x+\\cdots+a_nx^n.$$\n\n$\\sum$（Sigma）表示逐項相加；下限 $i=0$ 表示從常數項開始，上限 $n$ 表示加到 $a_nx^n$；$a_i$ 為第 $i$ 次項係數，$x^0=1$。不同多項式可有不同最高次數，加法時缺少的係數補零。\n\n採通常多項式加法、純量乘法，零向量為零多項式。\n\n$$P_n(F)=\\{a_0+a_1x+\\cdots+a_nx^n:a_i\\in F\\}.$$\n\n此表示自然包含零多項式，避免必須替零多項式指定次數。$P_n(F)$ 的次數「至多 $n$」，不是「恰好 $n$」。恰好 $n$ 次的集合不包含零多項式，且 $p+(-p)=0$ 離開集合；乘純量零也會離開。\n\n### 函數空間 $F^D$ 與連續函數\n\n$F^D=\\{f:D\\to F\\}$，其中 $D$ 是共同定義域。$f:D\\to F$ 表示函數把 $D$ 中每個輸入送到 $F$ 中一個值。運算逐點定義：\n\n$$(f+g)(x)=f(x)+g(x),\\qquad(\\alpha f)(x)=\\alpha f(x).$$\n\n對所有 $x\\in D$ 都成立才是函數相等。零向量為零函數 $z(x)=0$，反元素為 $(-f)(x)=-f(x)$。\n\n連續實函數集合 $C([a,b],\\mathbb R)$ 也構成實向量空間：兩連續函數相加與乘任意實常數仍連續；零函數連續，其餘等式由逐點運算繼承。\n\n| 空間 | 向量例子 | 零向量 | 加法反元素 |\n|---|---|---|---|\n| $F^n$ | $(x_1,\\ldots,x_n)$ | $(0,\\ldots,0)$ | 各座標取負 |\n| $F^{m\\times n}$ | $[a_{ij}]$ | 固定尺寸零矩陣 | $[-a_{ij}]$ |\n| $P(F)$ | $p(x)$ | 零多項式 | $-p(x)$ |\n| $F^D$ | $f$ | 恆等於零的函數 | 逐點取負 |",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K06",
      "sourceId": "la-31-k06",
      "title": "位移、向量加減與幾何表示",
      "difficulty": 1,
      "markdown": "點 $P=(p_1,p_2)$ 到 $Q=(q_1,q_2)$ 的位移向量為\n\n$$\\overrightarrow{PQ}=Q-P=(q_1-p_1,q_2-p_2).$$\n\n例：$P=(1,-2)$、$Q=(4,0)$，得到 $(3,2)$。從原點到 $(3,2)$ 的箭頭也代表同一位移；自由向量可以平移表示。\n\n加法採首尾相接：先走 $u$，再走 $v$，總位移為 $u+v$；也可用平行四邊形法。減法 $u-v=u+(-v)$；將兩箭頭放在同一起點時，由 $v$ 的終點指向 $u$ 的終點得到 $u-v$。\n\n純量 $\\alpha>0$ 保持方向，$\\alpha<0$ 反向，長度變成原來的 $|\\alpha|$ 倍；$\\alpha=0$ 得零向量。這是通常實座標空間的圖像，不是所有抽象向量空間的定義。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K07",
      "sourceId": "la-31-k07",
      "title": "正實數的特殊向量運算",
      "difficulty": 3,
      "markdown": "令 $V=\\mathbb R_{>0}=\\{x\\in\\mathbb R:x>0\\}$，純量體為 $\\mathbb R$，定義\n\n$$x\\oplus y=xy,\\qquad\\alpha\\odot x=x^\\alpha.$$\n\n$\\oplus$ 表示本題指定的向量加法，$\\odot$ 表示本題指定的純量乘法；等號右側使用通常數字乘法、次方。正實底數的實數次方可由 $x^\\alpha=\\exp(\\alpha\\ln x)$ 定義。\n\n### 十項公設驗證\n\n| 公設 | 驗證 |\n|---|---|\n| A1 | $x,y>0\\Rightarrow xy>0$ |\n| A2 | $x>0,\\alpha\\in\\mathbb R\\Rightarrow x^\\alpha>0$ |\n| A3 | $xy=yx$ |\n| A4 | $(xy)z=x(yz)$ |\n| A5 | 零向量 $0_V=1$，因為 $x\\oplus1=x\\cdot1=x$ |\n| A6 | $x$ 的反元素為 $1/x>0$，因為 $x\\oplus(1/x)=1=0_V$ |\n| A7 | $(xy)^\\alpha=x^\\alpha y^\\alpha=(\\alpha\\odot x)\\oplus(\\alpha\\odot y)$ |\n| A8 | $x^{\\alpha+\\beta}=x^\\alpha x^\\beta=(\\alpha\\odot x)\\oplus(\\beta\\odot x)$ |\n| A9 | $x^{\\alpha\\beta}=(x^\\beta)^\\alpha$ |\n| A10 | $1\\odot x=x^1=x$ |\n\n所以它是實向量空間。$0_F\\odot x=x^0=1=0_V$，並沒有違反零乘法性質。\n\n**提醒：**這個空間的「向量相減」為 $x\\oplus(1/y)=x/y$，不是通常的 $x-y$。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K08",
      "sourceId": "la-31-k08",
      "title": "非向量空間與反例寫法",
      "difficulty": 3,
      "markdown": "### 7.1 五種典型反例\n\n| 集合與運算 | 具體失敗證據 | 對應條件 |\n|---|---|---|\n| $\\mathbb R$，$u\\oplus v=u-v$，通常純量乘法 | $2\\oplus3=-1\\ne1=3\\oplus2$ | A3 交換律 |\n| $S=\\{(1,x):x\\in\\mathbb R\\}$，通常運算 | $(1,0)+(1,0)=(2,0)\\notin S$ | A1 封閉性 |\n| $\\mathbb R^2$，通常加法，$\\alpha\\odot(x,y)=(\\alpha x,y)$ | 取 $v=(0,1)$，$(1+1)\\odot v=(0,1)$，但 $(1\\odot v)+(1\\odot v)=(0,2)$ | A8 純量分配律 |\n| $\\mathbb R^2$，通常運算，以 $\\mathbb Z$ 當純量 | $\\mathbb Z$ 中非零元素 $2$ 沒有乘法反元素 | 純量集合不是體 |\n| $\\mathbb R$，$x\\oplus y=\\min(x,y)$，通常純量乘法 | 若有單位 $e$，取 $x=e+1$，則 $\\min(x,e)=e\\ne x$ | A5 不存在 |\n\n第三例也可用必要推論 $0_Fv=0_V$ 找矛盾，但若要求指明公設，應直接列出 A8 兩側不等。\n\n### 7.2 通常運算與特殊運算的不同策略\n\n- 通常運算的集合：先檢查是否包含通常零向量，再看加法、純量乘法是否封閉。\n- 若已知是某個向量空間的子集合且沿用運算，可用子空間判別法簡化；這是後續 3-2 的概念，本節先當補充，不當成未證定理直接取代所有公設。\n- 特殊運算：先由 $v\\oplus e=v$ 找單位元素，不可直接假設為通常零；再找反元素、檢查 $1\\odot v$ 及兩個分配律。\n- 特別代入 $0,1,-1$ 有助找反例；全部通過仍不等於證明成立。\n\n### 7.3 考卷上的反例模板\n\n「取……，則……，但……，故不滿足……公設，因此不是在指定體上的向量空間。」\n\n若是運算不封閉，務必寫清楚運算前元素屬於集合，運算後結果為何不屬於集合。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S01-K09",
      "sourceId": "la-31-k09",
      "title": "補充：平移運算與標準證明格式",
      "difficulty": 5,
      "markdown": "### 8.1 零向量唯一\n\n若 $e,f$ 都是加法單位元素，由 $e+f=f$（$e$ 的單位性）與 $e+f=e$（$f$ 的單位性），得 $e=f$。\n\n### 8.2 平移後的運算\n\n取固定 $a\\in\\mathbb R$，在 $\\mathbb R$ 定義\n\n$$u\\oplus v=u+v-a,\\qquad\\alpha\\odot u=a+\\alpha(u-a).$$\n\n其零向量為 $a$，反元素為 $2a-u$。映射 $T(u)=u-a$ 是到通常 $\\mathbb R$ 的雙射，且\n\n$$T(u\\oplus v)=T(u)+T(v),\\qquad T(\\alpha\\odot u)=\\alpha T(u).$$\n\n因此可將公設轉成通常實數空間的公設。這是「用一一對應搬運運算」的例子；若考試尚未引入同構，仍可逐項直接代入驗證。\n\n正實數例子也有 $T(x)=\\ln x$，因為 $\\ln(xy)=\\ln x+\\ln y$、$\\ln(x^\\alpha)=\\alpha\\ln x$。此觀點幫助理解，不取代教材要求的公設證明。",
      "provenance": "補充延伸"
    },
    {
      "id": "LA-CH03-S02-K01",
      "sourceId": "la-ch03-s02-kp01",
      "title": "子空間的定義與判別",
      "difficulty": 1,
      "markdown": "設 $V$ 是 $F$ 上的向量空間。若 $W\\subseteq V$，且沿用 $V$ 的加法與純量乘法後本身為向量空間，稱 $W$ 為 $V$ 的子空間。\n\n判別法：先證 $W\\ne\\varnothing$，再證加法封閉及純量乘法封閉。也可合併為\n\n$$u,v\\in W,\\ \\alpha,\\beta\\in F\\Longrightarrow\\alpha u+\\beta v\\in W.$$\n\n不需要重證十條向量空間公理，因結合律、交換律等已從母空間繼承。但運算或數域若改變，就不能直接套用此說法。\n\n為何非空加封閉可推出含零？取 $w\\in W$，由純量封閉得 $0w=0\\in W$。又 $(-1)w=-w\\in W$，所以反元素也在集合中。零子空間 $\\{0\\}$ 與 $V$ 本身都滿足條件。注意：空集合不是子空間，只有零向量則是子空間。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K02",
      "sourceId": "la-ch03-s02-kp02",
      "title": "如何找反例",
      "difficulty": 1,
      "markdown": "否定子空間只需一項條件失敗，無須全部檢查。\n\n| 集合 | 判斷與理由 |\n|---|---|\n| $Ax=0$ 的解集合 | 是；$A(\\alpha u+\\beta v)=0$ |\n| $Ax=b$，$b\\ne0$ 的解集合 | 否；零向量不在內，無解時為空集合也不是 |\n| $x\\ge0$ 的半平面 | 否；負純量破壞條件 |\n| trace 為零的矩陣 | 是；trace 為對角元素總和，具線性 |\n| 對角矩陣、固定方向的上三角矩陣 | 是；指定位置為零的限制是齊次線性限制 |\n| 所有奇異方陣（階數至少 2） | 否；加法不封閉 |\n| $p(0)=0$ 的至多 $n$ 次多項式 | 是；代入值對加法與純量乘法封閉 |\n| 恰為三次的多項式 | 否；不含零多項式 |",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K03",
      "sourceId": "la-ch03-s02-kp03",
      "title": "交集一定是子空間",
      "difficulty": 1,
      "markdown": "設 $W_1,W_2\\le V$。交集包含零。若 $u,v$ 同時在兩者中，線性組合也同時在兩者中，因此 $W_1\\cap W_2\\le V$。同理任意非空索引族子空間的交集仍是子空間；若討論空索引族，需約定其在母空間中的交集為 $V$。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K04",
      "sourceId": "la-ch03-s02-kp04",
      "title": "聯集何時是子空間？",
      "difficulty": 3,
      "markdown": "對兩個子空間：\n\n$$U\\cup W\\le V\\iff U\\subseteq W\\ \\text{或}\\ W\\subseteq U.$$\n\n充分性：有包含關係時聯集就是較大的子空間。\n\n必要性：假設聯集是子空間，但彼此皆不包含。可取 $u\\in U\\setminus W$、$w\\in W\\setminus U$。加法封閉要求 $u+w\\in U\\cup W$。若 $u+w\\in U$，則 $w=(u+w)-u\\in U$，矛盾；若 $u+w\\in W$，則 $u=(u+w)-w\\in W$，也矛盾。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K05",
      "sourceId": "la-ch03-s02-kp05",
      "title": "和空間與最小性",
      "difficulty": 3,
      "markdown": "$$U+W=\\{u+w:u\\in U,w\\in W\\}.$$\n\n這裡的加號是集合的和空間，不是聯集。因 $0=0+0$，故非空。若 $x=u_1+w_1$、$y=u_2+w_2$，則\n\n$$\\alpha x+\\beta y=(\\alpha u_1+\\beta u_2)+(\\alpha w_1+\\beta w_2)\\in U+W.$$\n\n因此和是子空間。對任意 $u\\in U$，可寫 $u=u+0$，故 $U\\subseteq U+W$，同理 $W\\subseteq U+W$。若子空間 $Z$ 包含兩者，由加法封閉必包含所有 $u+w$，故 $U+W\\subseteq Z$。這就是「包含兩者的最小子空間」。\n\n$$U+W=\\operatorname{span}(U\\cup W).$$\n\n有限多個子空間的和可類推為所有 $w_1+\\cdots+w_k$；各項可取零。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K06",
      "sourceId": "la-ch03-s02-kp06",
      "title": "四個基本子空間",
      "difficulty": 3,
      "markdown": "設 $A\\in F^{m\\times n}$，也就是 $m$ 列、$n$ 欄，輸入長度 $n$、輸出長度 $m$。\n\n| 空間 | 定義 | 所在空間 | 解題意義 |\n|---|---|---|---|\n| Column space，CS | $\\{Ax:x\\in F^n\\}$ | $F^m$ | 所有可能輸出 |\n| Row space，RS | 各列向量的線性組合 | $F^n$（將列視為座標向量） | 所有列向量生成的空間 |\n| Null space，kernel | $\\{x:Ax=0\\}$ | $F^n$ | 被送到零的輸入 |\n| Left null space | $\\{y:y^TA=0\\}=\\ker A^T$ | $F^m$ | 對各欄的線性限制 |\n\n若 $A=[a_1\\ \\cdots\\ a_n]$，則 $Ax=x_1a_1+\\cdots+x_na_n$，故 CS 正是欄向量的 span。RS 可寫成 $\\{y^TA:y\\in F^m\\}$（以列向量表示）。span 對線性組合封閉，因此 CS、RS 是子空間。對 kernel，$A0=0$ 且 $A(\\alpha x+\\beta z)=\\alpha Ax+\\beta Az=0$，所以也是子空間。左核套用同樣論證於 $A^T$。\n\n重要連結：$Ax=b$ 有解當且僅當 $b\\in\\operatorname{CS}(A)$。若 $A$ 為方陣，可逆當且僅當 $\\ker A=\\{0\\}$，也當且僅當 $\\operatorname{CS}(A)=F^n$。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K07",
      "sourceId": "la-ch03-s02-kp07",
      "title": "乘積與等價運算",
      "difficulty": 3,
      "markdown": "若 $A$ 是 $m\\times n$、$B$ 是 $n\\times p$，則\n\n$$\\operatorname{CS}(AB)\\subseteq\\operatorname{CS}(A),\\qquad\\operatorname{RS}(AB)\\subseteq\\operatorname{RS}(B).$$\n\n第一式：$z=ABx=A(Bx)$ 是 $A$ 的輸出。第二式：$z=y^TAB=(y^TA)B$ 是 $B$ 各列的組合。一般只得到包含，不能直接升級為相等。\n\n若 $R=PA$，$P$ 可逆（基本列運算），則 $Rx=0\\iff Ax=0$，故核相同；各列互相為線性組合，所以 RS 相同。CS 通常改變。\n\n若 $C=AQ$，$Q$ 可逆（基本行／欄運算），則 $y^TC=0\\iff y^TA=0$，故左核相同；CS 相同，RS 與 kernel 通常改變。重排欄只是其中一種情況。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S02-K08",
      "sourceId": "la-ch03-s02-kp08",
      "title": "額外補充：維度、直和、正交",
      "difficulty": 5,
      "markdown": "以下為編輯延伸，並非宣稱原圖已完整介紹。維度是基底向量的個數；基底同時滿足生成及線性獨立。設 rank 為 $r$：\n\n$$\\dim\\operatorname{CS}(A)=\\dim\\operatorname{RS}(A)=r,$$\n$$\\dim\\ker A=n-r,\\qquad\\dim\\ker A^T=m-r.$$\n\n因此已知 $\\dim\\ker A=k$，先得 $r=n-k$，再得左核維度 $m-n+k$。\n\n有限維情況下 $\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)$。若交集為 $\\{0\\}$，則和中每個向量的分解唯一，稱直和 $U\\oplus W$。理由：$u_1+w_1=u_2+w_2$ 推出 $u_1-u_2=w_2-w_1\\in U\\cap W$；交集為零迫使兩部分各自相同。\n\n實數標準內積下，$\\ker A=\\operatorname{RS}(A)^\\perp$、$\\ker A^T=\\operatorname{CS}(A)^\\perp$。上標 $\\perp$ 表示與該空間所有向量垂直的集合。這裡不以轉置取代複數標準內積所需的共軛轉置。",
      "provenance": "補充延伸"
    },
    {
      "id": "LA-CH03-S03-K01",
      "sourceId": "K01",
      "title": "線性組合與 $Ax=b$",
      "difficulty": 1,
      "markdown": "給定 $v_1,\\ldots,v_k\\in V$ 與 $a_1,\\ldots,a_k\\in F$，$\\sum_{i=1}^k a_iv_i$ 是這些向量的線性組合。係數可為零，不要求正值或總和為 1。\n\n判斷指定向量 $b$ 是否可以組出：設 $a_1v_1+\\cdots+a_kv_k=b$，再求係數。對普通座標向量，令 $A=[v_1\\ \\cdots\\ v_k]$，便得到 $Ax=b$。有解表示可以生成這個 $b$；無解表示不行。這只針對指定 $b$，還不能保證生成整個空間。例題：E01。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K02",
      "sourceId": "K02",
      "title": "span、空集合與最小子空間",
      "difficulty": 3,
      "markdown": "$$\\operatorname{span}(S)=\\left\\{\\sum_{i=1}^k a_iv_i:k\\text{ 有限},\\ a_i\\in F,\\ v_i\\in S\\right\\}.$$\n\n即使 $S$ 是無限集合，每一個線性組合仍只使用有限個向量。採空和等於零的慣例，$\\operatorname{span}(\\varnothing)=\\{0\\}$；而 $\\operatorname{span}(\\{0\\})=\\{0\\}$。\n\n**子空間證明：**span 含零向量。任取 $u=\\sum_i a_iv_i$、$w=\\sum_j b_jz_j$ 與純量 $c$，則 $cu+w=\\sum_i(ca_i)v_i+\\sum_jb_jz_j$，仍是 $S$ 中向量的有限線性組合。因此對純量倍乘與加法封閉。\n\n**最小性：**若子空間 $W$ 包含 $S$，則其封閉性保證 $\\sum_i a_iv_i\\in W$，所以 $\\operatorname{span}(S)\\subseteq W$。「最小」指集合包含關係，不是向量數最少。\n\n若 $\\operatorname{span}(S)=V$，稱 $S$ 生成 $V$（spans $V$）。例題：E02。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K03",
      "sourceId": "K03",
      "title": "生成空間相等與移除冗餘",
      "difficulty": 3,
      "markdown": "要證明 $\\operatorname{span}(S_1)=\\operatorname{span}(S_2)$，可證明 $S_1\\subseteq\\operatorname{span}(S_2)$ 且 $S_2\\subseteq\\operatorname{span}(S_1)$。由 K02 最小性得到兩方向包含。\n\n若 $v_k\\in\\operatorname{span}\\{v_1,\\ldots,v_{k-1}\\}$，加入或移除 $v_k$ 都不改變 span。若不屬於舊 span，加入後生成空間嚴格擴大。反之，兩集合元素數不同也可以有相同 span。另有 $S_1\\subseteq S_2\\Rightarrow\\operatorname{span}(S_1)\\subseteq\\operatorname{span}(S_2)$。例題：E03。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K04",
      "sourceId": "K04",
      "title": "column space、row space 與樞紐",
      "difficulty": 3,
      "markdown": "對 $A\\in F^{m\\times n}$：$CS(A)\\subseteq F^m$、$RS(A)\\subseteq F^n$，且 $CS(A)=\\{Ax:x\\in F^n\\}$。所以 $Ax=b$ 有解若且唯若 $b\\in CS(A)$。\n\n基本 row 運算相當於左乘可逆矩陣 $E$，所以 $N(EA)=N(A)$，並保留 row space；但 $CS(EA)=E(CS(A))$ 通常不等於原 column space。找 $CS(A)$ 的基底時：先化簡找樞紐 column 的**位置**，再回到原矩陣取那些 column。化簡後非零 row 則能作為原 row space 的基底。例題：E04。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K05",
      "sourceId": "K05",
      "title": "相依與獨立的定義、齊次判準",
      "difficulty": 1,
      "markdown": "有限向量列 $v_1,\\ldots,v_k$ 線性獨立，指 $\\sum_i a_iv_i=0$ 蘊含所有 $a_i=0$。若存在不全為零的係數使和為零，就是相依。全零係數的解稱平凡解（trivial solution）；「不全為零」只要求至少一個係數非零。\n\n令 $A=[v_1\\cdots v_k]$，有\n$$\\text{獨立}\\iff N(A)=\\{0\\}\\iff\\operatorname{rank}(A)=k\\iff\\text{每個 column 有樞紐}.$$\n有自由變數便有非平凡齊次解，即相依。\n\n**冗餘向量等價命題：**若相依關係中 $a_j\\ne0$，移項並除以 $a_j$ 得 $v_j=-\\sum_{i\\ne j}(a_i/a_j)v_i$。反方向將這個等式移到同一側，第 $j$ 個係數為 1，即得非平凡關係。注意：相依只保證「至少一個」可由其餘表示。例題：E05。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K06",
      "sourceId": "K06",
      "title": "快速判斷與子集合性質",
      "difficulty": 1,
      "markdown": "| 情況 | 結論與理由 |\n|---|---|\n| 向量列含零向量 | 相依：零向量係數取 1，其他取 0 |\n| 單一向量 $v$ | 獨立若且唯若 $v\\ne0$ |\n| 兩個向量 | 相依若且唯若其中一個可寫成另一個的純量倍數 |\n| 獨立集合的子集合 | 仍獨立；把缺少的係數補 0 即可證明 |\n| 相依集合的超集合 | 仍相依；沿用原非平凡係數，其餘補 0 |\n| $F^n$ 中超過 $n$ 個向量 | 相依：最多有 $n$ 個樞紐 |\n| $F^n$ 中不超過 $n$ 個向量 | 未必獨立，仍需判斷 |\n| 空集合 | 獨立，但只生成零空間 |\n\n對無限集合，獨立指其每個有限子集合皆獨立。重複向量若作為有序向量列的兩個位置，立即相依；集合記法會自動去除重複元素，需區分。例題：E06。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K07",
      "sourceId": "K07",
      "title": "生成、獨立、基底的比較",
      "difficulty": 3,
      "markdown": "| 問題（$A$ 為 $m\\times n$） | 判準 |\n|---|---|\n| 指定 $b$ 是否在 span？ | $Ax=b$ 有解 |\n| columns 是否獨立？ | $Ax=0$ 只有零解；rank 為 $n$ |\n| 是否生成 $F^m$？ | 對每個 $b\\in F^m$ 皆有解；rank 為 $m$ |\n| 同時獨立且生成 $F^m$？ | columns 是基底，必有 $m=n$ 且可逆 |\n\n基底（basis）是同時獨立且生成目標空間的集合，作為後續小節銜接概念；維度（dimension）是有限基底所含向量數。若 $n<m$，不能生成 $F^m$；若 $n>m$，columns 必相依。只有方陣時，「columns 獨立」與「生成整個目標空間」才等價。例題：E07。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K08",
      "sourceId": "K08",
      "title": "含參數的獨立性",
      "difficulty": 3,
      "markdown": "方陣 $A(t)$ 的 columns 獨立若且唯若 $\\det A(t)\\ne0$；非方陣需用秩或齊次方程。計算時先找使樞紐或行列式為零的值，再代回逐一討論。除以 $t-a$ 前，必須先處理 $t=a$，不能把特殊情況丟掉。例題：E08。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K09",
      "sourceId": "K09",
      "title": "子空間的和、聯集與交集",
      "difficulty": 3,
      "markdown": "$$W_1+W_2=\\{u+v:u\\in W_1,v\\in W_2\\}.$$\n零向量可寫成 $0+0$；若 $u+v$、$u'+v'$ 在其中，則 $c(u+v)+(u'+v')=(cu+u')+(cv+v')$ 仍在其中，故是子空間。\n\n若 $W_i=\\operatorname{span}(S_i)$，把線性組合依來源拆成兩部分，便得\n$$W_1+W_2=\\operatorname{span}(S_1\\cup S_2).$$\n交集 $W_1\\cap W_2$ 也是子空間：兩邊的封閉性可同時使用。聯集通常不是子空間；**補充命題**：兩子空間的聯集為子空間若且唯若其中一者包含另一者。必要性可取 $u\\in W_1\\setminus W_2$、$v\\in W_2\\setminus W_1$，則 $u+v$ 不在任一者中。\n\n$$\\operatorname{span}(S_1\\cap S_2)\\subseteq\\operatorname{span}(S_1)\\cap\\operatorname{span}(S_2).$$\n此式不保證相等：左邊只能使用共同的原始元素；右邊允許兩組不同線性組合產生同一向量。例題：E09。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K10",
      "sourceId": "K10",
      "title": "矩陣與多項式作為向量",
      "difficulty": 3,
      "markdown": "矩陣相等要逐位置比較，多項式相等要逐次項比較。矩陣可固定次序攤平成係數向量，之後始終使用相同次序；$a+bx+cx^2$ 可表示為 $(a,b,c)^T$。這些對應保留加法與純量倍乘，因此保留線性關係。零多項式是所有係數皆零，不是只在某點取值為零。例題：E10。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K11",
      "sourceId": "K11",
      "title": "函數的獨立性與定義域",
      "difficulty": 3,
      "markdown": "$\\sum_i c_if_i(x)=0$ 必須對定義域的**每個** $x$ 成立，且 $c_i$ 是不隨 $x$ 改變的常數。證明獨立可選取適當的點，推出所有係數必為零。有限點上得到非平凡解，卻不能直接證明函數相依，因為該關係未必在其他點成立。定義域與純量域都會影響判斷。例題：E11。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S03-K12",
      "sourceId": "K12",
      "title": "Wronskian 充分判準與限制",
      "difficulty": 5,
      "markdown": "設 $f_1,\\ldots,f_n$ 在同一區間具有到 $n-1$ 階的導數，定義\n$$W(f_1,\\ldots,f_n)(x)=\\det\\begin{bmatrix}f_1(x)&\\cdots&f_n(x)\\\\f'_1(x)&\\cdots&f'_n(x)\\\\\\vdots&&\\vdots\\\\f_1^{(n-1)}(x)&\\cdots&f_n^{(n-1)}(x)\\end{bmatrix}.$$\n\n若函數相依，對恆等式逐次微分，同一組非零常數係數會使矩陣乘積為零，故 Wronskian 處處為零。取逆否命題：**存在一點 $x_0$ 使 $W(x_0)\\ne0$，即可證明獨立**。只需一點，不要求每一點皆非零。\n\n**補充限制：**對一般可微函數，Wronskian 恆零不能直接反推相依。例：在 $\\mathbb R$ 上 $f=x^2$、$g=x|x|$ 皆可微且 $W\\equiv0$；但在正半軸得到 $a+b=0$，負半軸得到 $a-b=0$，故兩函數仍獨立。若有額外解析性或同一線性常微分方程解族等條件，須先完整列出條件才使用更強結論。例題：E12。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH03-S03-K13",
      "sourceId": "K13",
      "title": "小節統整",
      "difficulty": 3,
      "markdown": "先辨認空間與純量域，再區分 $Ax=b$（有無解）與 $Ax=0$（是否唯一零解）。把物件轉成係數矩陣，檢查樞紐；參數例外值另算；最後寫回原問題的語言。證明題應寫「設任意係數使和為零 → 整理 → 用已知獨立性 → 得係數全零」，不要只寫「顯然」。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH03-S05-K01",
      "sourceId": "LA-K0305-01",
      "title": "子空間的和",
      "difficulty": 1,
      "markdown": "設 $W_1,\\ldots,W_k$ 是同一個向量空間 $V$ 的子空間。定義\n$$W_1+\\cdots+W_k=\\{w_1+\\cdots+w_k:w_i\\in W_i\\}.$$\n\n它是包含各 $W_i$ 的最小子空間。證明分三步：\n\n1. 各 $W_i$ 含零向量，所以和空間含零向量。\n2. 若 $u=\\sum u_i,v=\\sum v_i$，則對任意純量 $a,b$，$au+bv=\\sum(au_i+bv_i)$；每項仍在 $W_i$，故對線性組合封閉。\n3. 任一包含所有 $W_i$ 的子空間 $U$，因加法封閉，必包含每個 $\\sum w_i$，故包含和空間。\n\n不要把和空間與聯集混淆。聯集 $W_1\\cup W_2$ 一般不對加法封閉。\n\n例題引用：LA-E3501。手寫板塊提示：自行用「零向量＋線性組合封閉」重寫上述證明。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S05-K02",
      "sourceId": "LA-K0305-02",
      "title": "獨立子空間與兩兩獨立",
      "difficulty": 3,
      "markdown": "子空間族獨立（Independent Subspaces）指對每個 $i$，\n$$W_i\\cap\\sum_{j\\ne i}W_j=\\{0\\}.$$\n\n等價地：若 $w_i\\in W_i$ 且 $\\sum_iw_i=0$，則每個 $w_i=0$。\n\n證明：固定 $i$，由總和為零得 $w_i=-\\sum_{j\\ne i}w_j$，它同時在 $W_i$ 與其餘子空間的和中，因此只能為零。反向若 $u\\in W_i\\cap\\sum_{j\\ne i}W_j$，寫成 $u=\\sum_{j\\ne i}u_j$，則 $u-\\sum_{j\\ne i}u_j=0$；依零和判準即得 $u=0$。\n\n|概念|條件|可否保證整體分解唯一|\n|---|---|---|\n|兩兩獨立|任意 $i\\ne j$，$W_i\\cap W_j=\\{0\\}$|只有兩個子空間時可以|\n|整體獨立|$\\sum_iw_i=0\\Rightarrow$ 每項為零|可以，對和空間內的向量而言|\n\n三個以上兩兩交集為零仍可能不獨立，見 LA-E3502。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S05-K03",
      "sourceId": "LA-K0305-03",
      "title": "維度判準",
      "difficulty": 3,
      "markdown": "有限維時：\n$$\\dim(W_1+W_2)=\\dim W_1+\\dim W_2-\\dim(W_1\\cap W_2).$$\n\n證明：取交集基底 $c_1,\\ldots,c_r$，分別擴充為 $W_1$ 的基底 $(c,a)$ 與 $W_2$ 的基底 $(c,b)$。合併 $(c,a,b)$ 可生成和空間。若合併組有線性關係，把 $a$ 部分移至另一側，可知它在交集中；由 $(c,a)$ 獨立，$a$ 的係數為零，再由 $(c,b)$ 獨立，其餘係數也為零。因此合併組是基底，計數得到公式。\n\n對有限維的多個子空間：\n$$W_1,\\ldots,W_k\\text{ 獨立}\\iff \\dim\\left(\\sum_iW_i\\right)=\\sum_i\\dim W_i.$$\n\n理由：各子空間基底合併後必生成和空間。獨立子空間的零和判準保證合併組獨立；反向若生成組的數量等於維度，它就是基底，故零和判準成立。不能把三集合的容斥公式直接照搬成三子空間維度公式。\n\n例題引用：LA-E3501、LA-E3502。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S05-K04",
      "sourceId": "LA-K0305-04",
      "title": "直和、唯一性與補空間",
      "difficulty": 3,
      "markdown": "若 $V=\\sum_iW_i$ 且子空間族獨立，記為\n$$V=W_1\\oplus\\cdots\\oplus W_k.$$\n\n這等價於每個 $v\\in V$ 都能唯一寫成 $v=\\sum_iw_i$，$w_i\\in W_i$。\n\n- 存在性由和等於 $V$ 保證。\n- 唯一性：若 $\\sum_iw_i=\\sum_iu_i$，則 $\\sum_i(w_i-u_i)=0$；因每項在對應子空間，獨立性給出 $w_i=u_i$。\n- 反向：零向量已有全零分解；若有另一組零和表示，唯一性迫使各項為零。\n\n對兩個子空間，證明直和可用「和是 $V$＋交集只有零向量」。有限維時也可用「交集只有零向量＋維度和為 $\\dim V$」。\n\n補空間（Complement）：$T$ 若滿足 $V=S\\oplus T$，稱為 $S$ 的補空間。先選 $S$ 的基底，再擴充成 $V$ 的基底，新增基底向量所生成的空間就是補空間。補空間一般不唯一，也不一定與 $S$ 正交。\n\n例題引用：LA-E3503。手寫提示：用兩種方法證明例題中的直和，並再找一個不同補空間。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S05-K05",
      "sourceId": "LA-K0305-05",
      "title": "對稱與反對稱矩陣分解",
      "difficulty": 3,
      "markdown": "在 $M_n(\\mathbb R)$ 中，令 $S=\\{A:A^T=A\\}$、$K=\\{A:A^T=-A\\}$。兩者對線性組合封閉，因此是子空間。對任何 $A$，\n$$A=\\frac{A+A^T}{2}+\\frac{A-A^T}{2}.$$\n\n第一項轉置後不變，第二項轉置後變號，因此和覆蓋全空間。若 $X\\in S\\cap K$，則 $X=X^T=-X$，所以 $2X=0$，在實數域得到 $X=0$。因此 $M_n(\\mathbb R)=S\\oplus K$。\n\n【額外補充】此公式需係數域特徵不為 2；在實數域沒有問題。$S$ 的基底可取 $E_{ii}$ 與 $E_{ij}+E_{ji}$（$i<j$）；$K$ 的基底可取 $E_{ij}-E_{ji}$。$E_{ij}$ 是只有第 $(i,j)$ 項為 1 的矩陣。維度分別為 $n(n+1)/2$ 與 $n(n-1)/2$，相加為 $n^2$。\n\n例題引用：LA-E3504。",
      "provenance": "教材整理 · 含補充延伸"
    },
    {
      "id": "LA-CH03-S05-K06",
      "sourceId": "LA-K0305-06",
      "title": "偶函數與奇函數分解",
      "difficulty": 3,
      "markdown": "對所有 $\\mathbb R\\to\\mathbb R$ 的函數所成空間，令 $E,O$ 分別為偶、奇函數子空間。定義\n$$f_e(x)=\\frac{f(x)+f(-x)}2,\\qquad f_o(x)=\\frac{f(x)-f(-x)}2.$$\n\n代入 $-x$ 可得 $f_e(-x)=f_e(x)$、$f_o(-x)=-f_o(x)$，且相加為 $f$。若 $g$ 同時奇且偶，則 $g(x)=g(-x)=-g(x)$，故處處為零。於是 $V=E\\oplus O$。若改用其他定義域，需先確認對 $x\\mapsto -x$ 封閉。\n\n例題引用：LA-E3505。\n\n## 3-5 板塊配置\n\n|block_id|類型|內容／引用|\n|---|---|---|\n|LA-B3501|concept|K0305-01～03 的定義、比較與證明|\n|LA-B3502|example|LA-E3501、LA-E3502|\n|LA-B3503|split|直和唯一性證明並排空白推導區|\n|LA-B3504|example|LA-E3503|\n|LA-B3505|concept|K0305-05、06|\n|LA-B3506|example|LA-E3504、LA-E3505|\n|LA-B3507|handwriting|自行整理「存在／唯一／直和」差異，內容留白|\n|LA-B3508|summary|兩兩獨立不足；補空間不唯一；直和未必正交|\n|LA-B3509|assessment|LA-A3501|",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S06-K01",
      "sourceId": "LA-K0306-01",
      "title": "存在與唯一",
      "difficulty": 1,
      "markdown": "給定互不相同的 $t_0,\\ldots,t_n$ 與任意指定值 $b_0,\\ldots,b_n$，存在唯一 $P\\in P_n$ 使 $P(t_i)=b_i$。$P_n$ 的標準基底為 $1,x,\\ldots,x^n$，維度 $n+1$。「至多 $n$ 次」不能改為「恰好 $n$ 次」。\n\n唯一性：若 $P,Q$ 都滿足條件，$P-Q$ 次數至多 $n$，卻有 $n+1$ 個相異根。非零至多 $n$ 次多項式最多有 $n$ 個相異根，故 $P-Q=0$。根數性質來自因式定理：每個相異根都貢獻一個不同的一次因子；非零多項式的次數至少等於這些因子的數量。\n\n重複節點時，指定值不同則無解；指定值相同則只是重複條件，通常不足以保證唯一。\n\n例題引用：LA-E3601、LA-E3605。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S06-K02",
      "sourceId": "LA-K0306-02",
      "title": "Lagrange 基底與公式",
      "difficulty": 3,
      "markdown": "定義\n$$L_i(x)=\\prod_{\\substack{0\\le j\\le n\\\\j\\ne i}}\\frac{x-t_j}{t_i-t_j}.$$\n\n節點相異保證分母非零。代入 $t_i$ 時每個因子都等於 1；代入 $t_j$（$j\\ne i$）時有一個分子為零。因此 $L_i(t_j)$ 在 $i=j$ 時為 1，其餘為 0，亦寫成 Kronecker delta $\\delta_{ij}$。\n\n所以\n$$P(x)=\\sum_{i=0}^n b_iL_i(x).$$\n\n每個 $L_i$ 次數至多 $n$，故 $P\\in P_n$；代入 $t_j$ 時只有第 $j$ 項留下，正好得到 $b_j$，完成存在性證明。\n\n若 $\\sum c_iL_i=0$，依次代入所有節點即得各 $c_i=0$。因此 $L_0,\\ldots,L_n$ 是 $n+1$ 個獨立向量，構成 $P_n$ 的基底；多項式在此基底下的座標是 $(P(t_0),\\ldots,P(t_n))^T$。\n\n例題引用：LA-E3601、LA-E3602。手寫提示：不看公式，自行設計「在指定點為 1、其他節點為 0」的多項式。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S06-K03",
      "sourceId": "LA-K0306-03",
      "title": "四點內插例題",
      "difficulty": 3,
      "markdown": "前文轉錄的教材數據為 $(5,1),(-7,-23),(-6,-54),(0,-954)$；仍待原圖核對。完整計算見 LA-E3603。此處不將自行展開結果宣稱為原書答案。",
      "provenance": "教材整理 · 原圖待核對"
    },
    {
      "id": "LA-CH03-S06-K04",
      "sourceId": "LA-K0306-04",
      "title": "取值矩陣可逆",
      "difficulty": 5,
      "markdown": "設 $f_1,\\ldots,f_n$ 是 $P_{n-1}$ 的基底，$a_1,\\ldots,a_n$ 相異，令 $M_{ij}=f_j(a_i)$。列索引 $i$ 對應節點，欄索引 $j$ 對應基底函數。\n\n令 $Mc=0$，並設 $f=\\sum_jc_jf_j$。矩陣方程第 $i$ 列表示 $f(a_i)=0$。$f$ 次數至多 $n-1$，卻有 $n$ 個相異根，因此 $f=0$。再由基底獨立得 $c=0$。方陣齊次方程只有零解，故 $M$ 可逆。\n\n【額外補充】取標準基底 $1,x,\\ldots,x^{n-1}$ 即得到 Vandermonde 矩陣，其行列式為 $\\prod_{i<j}(a_j-a_i)$。一般基底的取值矩陣可寫為「Vandermonde 矩陣 × 基底係數矩陣」，兩者均可逆。這是理解內插法的另一條路，不是本節必須另背的公式。\n\n例題引用：LA-E3604。\n\n## 3-6 板塊配置\n\n|block_id|類型|內容／引用|\n|---|---|---|\n|LA-B3601|concept|K0306-01 的問題與條件|\n|LA-B3602|split|唯一性證明並排空白證明區|\n|LA-B3603|concept|K0306-02 的基底設計|\n|LA-B3604|example|LA-E3601、LA-E3602|\n|LA-B3605|handwriting|自行算三個基底多項式，內容留白|\n|LA-B3606|example|LA-E3603|\n|LA-B3607|concept|K0306-04|\n|LA-B3608|example|LA-E3604、LA-E3605|\n|LA-B3609|summary|相異節點、次數上限、零多項式、分母符號|\n|LA-B3610|assessment|LA-A3601|",
      "provenance": "教材整理 · 含補充延伸"
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
    },
    "LA-CH01-S03-MC01": {
      "correctOption": 2
    },
    "LA-CH01-S03-MC02": {
      "correctOption": 0
    },
    "LA-CH01-S03-MC03": {
      "correctOption": 3
    },
    "LA-CH01-S03-MC04": {
      "correctOption": 1
    },
    "LA-CH01-S03-MC05": {
      "correctOption": 2
    },
    "LA-CH01-S04-T01": {
      "correctOption": 0
    },
    "LA-CH01-S04-T02": {
      "correctOption": 2
    },
    "LA-CH01-S04-T03": {
      "correctOption": 1
    },
    "LA-CH01-S04-T04": {
      "correctOption": 3
    },
    "LA-CH01-S04-T05": {
      "correctOption": 1
    },
    "LA-CH01-S05-Q01": {
      "correctOption": 2
    },
    "LA-CH01-S05-Q02": {
      "correctOption": 0
    },
    "LA-CH01-S05-Q03": {
      "correctOption": 3
    },
    "LA-CH01-S05-Q04": {
      "correctOption": 1
    },
    "LA-CH01-S05-Q05": {
      "correctOption": 2
    },
    "LA-CH01-S06-Q01": {
      "correctOption": 1
    },
    "LA-CH01-S06-Q02": {
      "correctOption": 3
    },
    "LA-CH01-S06-Q03": {
      "correctOption": 0
    },
    "LA-CH01-S06-Q04": {
      "correctOption": 2
    },
    "LA-CH01-S06-Q05": {
      "correctOption": 1
    },
    "LA-CH01-S07-Q01": {
      "correctOption": 2
    },
    "LA-CH01-S07-Q02": {
      "correctOption": 0
    },
    "LA-CH01-S07-Q03": {
      "correctOption": 3
    },
    "LA-CH01-S07-Q04": {
      "correctOption": 1
    },
    "LA-CH01-S07-Q05": {
      "correctOption": 2
    },
    "DS-CH01-S01-Q01": {
      "correctOption": 0
    },
    "DS-CH01-S01-Q02": {
      "correctOption": 1
    },
    "DS-CH01-S01-Q03": {
      "correctOption": 2
    },
    "DS-CH01-S01-Q04": {
      "correctOption": 3
    },
    "DS-CH01-S01-Q05": {
      "correctOption": 0
    },
    "DS-CH01-S02-Q06": {
      "correctOption": 2
    },
    "DS-CH01-S02-Q07": {
      "correctOption": 1
    },
    "DS-CH01-S02-Q08": {
      "correctOption": 3
    },
    "DS-CH01-S02-Q09": {
      "correctOption": 0
    },
    "DS-CH01-S02-Q10": {
      "correctOption": 2
    },
    "DS-CH01-S03-Q1301": {
      "correctOption": 1
    },
    "DS-CH01-S03-Q1302": {
      "correctOption": 3
    },
    "DS-CH01-S03-Q1303": {
      "correctOption": 0
    },
    "DS-CH01-S03-Q1304": {
      "correctOption": 2
    },
    "DS-CH01-S03-Q1305": {
      "correctOption": 1
    },
    "DS-CH01-S04-Q1401": {
      "correctOption": 3
    },
    "DS-CH01-S04-Q1402": {
      "correctOption": 1
    },
    "DS-CH01-S04-Q1403": {
      "correctOption": 2
    },
    "DS-CH01-S04-Q1404": {
      "correctOption": 0
    },
    "DS-CH01-S04-Q1405": {
      "correctOption": 3
    },
    "DS-CH01-S05-Q15M1": {
      "correctOption": 1
    },
    "DS-CH01-S05-Q15M2": {
      "correctOption": 2
    },
    "DS-CH01-S05-Q15M3": {
      "correctOption": 3
    },
    "DS-CH01-S05-Q15M4": {
      "correctOption": 0
    },
    "DS-CH01-S05-Q15M5": {
      "correctOption": 2
    },
    "DS-CH01-S06-Q16M1": {
      "correctOption": 1
    },
    "DS-CH01-S06-Q16M2": {
      "correctOption": 0
    },
    "DS-CH01-S06-Q16M3": {
      "correctOption": 3
    },
    "DS-CH01-S06-Q16M4": {
      "correctOption": 2
    },
    "DS-CH01-S06-Q16M5": {
      "correctOption": 1
    },
    "DS-CH01-S07-Q17M1": {
      "correctOption": 2
    },
    "DS-CH01-S07-Q17M2": {
      "correctOption": 0
    },
    "DS-CH01-S07-Q17M3": {
      "correctOption": 3
    },
    "DS-CH01-S07-Q17M4": {
      "correctOption": 1
    },
    "DS-CH01-S07-Q17M5": {
      "correctOption": 2
    },
    "DS-CH01-S08-Q18M1": {
      "correctOption": 3
    },
    "DS-CH01-S08-Q18M2": {
      "correctOption": 0
    },
    "DS-CH01-S08-Q18M3": {
      "correctOption": 2
    },
    "DS-CH01-S08-Q18M4": {
      "correctOption": 1
    },
    "DS-CH01-S08-Q18M5": {
      "correctOption": 3
    },
    "DS-CH01-S09-Q19M1": {
      "correctOption": 2
    },
    "DS-CH01-S09-Q19M2": {
      "correctOption": 0
    },
    "DS-CH01-S09-Q19M3": {
      "correctOption": 1
    },
    "DS-CH01-S09-Q19M4": {
      "correctOption": 3
    },
    "DS-CH01-S09-Q19M5": {
      "correctOption": 2
    },
    "LA-CH02-S01-Q101": {
      "correctOption": 2
    },
    "LA-CH02-S01-Q102": {
      "correctOption": 0
    },
    "LA-CH02-S01-Q103": {
      "correctOption": 3
    },
    "LA-CH02-S01-Q104": {
      "correctOption": 1
    },
    "LA-CH02-S01-Q105": {
      "correctOption": 2
    },
    "LA-CH02-S02-Q201": {
      "correctOption": 1
    },
    "LA-CH02-S02-Q202": {
      "correctOption": 3
    },
    "LA-CH02-S02-Q203": {
      "correctOption": 0
    },
    "LA-CH02-S02-Q204": {
      "correctOption": 2
    },
    "LA-CH02-S02-Q205": {
      "correctOption": 1
    },
    "LA-CH02-S03-Q01": {
      "correctOption": 1
    },
    "LA-CH02-S03-Q02": {
      "correctOption": 2
    },
    "LA-CH02-S03-Q03": {
      "correctOption": 3
    },
    "LA-CH02-S03-Q04": {
      "correctOption": 0
    },
    "LA-CH02-S03-Q05": {
      "correctOption": 2
    },
    "LA-CH02-S04-Q01": {
      "correctOption": 1
    },
    "LA-CH02-S04-Q02": {
      "correctOption": 3
    },
    "LA-CH02-S04-Q03": {
      "correctOption": 0
    },
    "LA-CH02-S04-Q04": {
      "correctOption": 2
    },
    "LA-CH02-S04-Q05": {
      "correctOption": 1
    },
    "LA-CH03-S01-Q01": {
      "correctOption": 2
    },
    "LA-CH03-S01-Q02": {
      "correctOption": 0
    },
    "LA-CH03-S01-Q03": {
      "correctOption": 3
    },
    "LA-CH03-S01-Q04": {
      "correctOption": 1
    },
    "LA-CH03-S01-Q05": {
      "correctOption": 2
    },
    "LA-CH03-S02-Q01": {
      "correctOption": 2
    },
    "LA-CH03-S02-Q02": {
      "correctOption": 0
    },
    "LA-CH03-S02-Q03": {
      "correctOption": 3
    },
    "LA-CH03-S02-Q04": {
      "correctOption": 1
    },
    "LA-CH03-S02-Q05": {
      "correctOption": 2
    },
    "LA-CH03-S03-Q01": {
      "correctOption": 2
    },
    "LA-CH03-S03-Q02": {
      "correctOption": 0
    },
    "LA-CH03-S03-Q03": {
      "correctOption": 3
    },
    "LA-CH03-S03-Q04": {
      "correctOptions": [
        1,
        2,
        3
      ]
    },
    "LA-CH03-S03-Q05": {
      "correctOption": 1
    },
    "LA-CH03-S05-Q01": {
      "correctOption": 2
    },
    "LA-CH03-S05-Q02": {
      "correctOption": 3
    },
    "LA-CH03-S05-Q03": {
      "correctOption": 0
    },
    "LA-CH03-S05-Q04": {
      "correctOption": 1
    },
    "LA-CH03-S05-Q05": {
      "correctOption": 2
    },
    "LA-CH03-S06-Q01": {
      "correctOption": 3
    },
    "LA-CH03-S06-Q02": {
      "correctOption": 0
    },
    "LA-CH03-S06-Q03": {
      "correctOption": 2
    },
    "LA-CH03-S06-Q04": {
      "correctOption": 1
    },
    "LA-CH03-S06-Q05": {
      "correctOption": 3
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
    },
    "LA-CH01-S03-PRE-EX01": {
      "markdown": "**辨識與方法：** 先數橫列與直行，再依兩個下標定位。\n\n**答案與步驟：** 有 2 橫列與 3 直行，所以尺寸為 $2\\times3$。$a_{12}$ 為第 1 列第 2 行，即 5；第 2 行是 $\\begin{bmatrix}5\\\\3\\end{bmatrix}$。\n\n**常見錯誤：** 把 $a_{12}$ 當成第 2 列第 1 行；只記中文名稱，未確認方向。"
    },
    "LA-CH01-S03-EX01": {
      "markdown": "**提示：** 每一步使用更新後矩陣；還原時從最後一步開始。\n\n**辨識與方法：** 題幹直接給三型操作，逐列追蹤可避免誤改來源列。\n\n**答案：** 最終 $\\begin{bmatrix}3&4\\\\-4&-4\\end{bmatrix}$。\n\n**詳解：** 交換後 $\\begin{bmatrix}3&4\\\\1&2\\end{bmatrix}$，倍乘後 $\\begin{bmatrix}3&4\\\\2&4\\end{bmatrix}$，相減後第 2 列為 $(2,4)-2(3,4)=(-4,-4)$。還原先加 $2R_1$ 到 $R_2$，再把第 2 列乘 $1/2$，最後交換兩列。\n\n**常見錯誤：** 用原矩陣的第 1 列相減；還原未反轉步驟。"
    },
    "LA-CH01-S03-EX02": {
      "markdown": "**提示：** 對 $I_2$ 做同一操作。\n\n**辨識與方法：** 問「對應基本矩陣」時操作對象先換成單位矩陣。\n\n**答案：** $E=\\begin{bmatrix}1&0\\\\-3&1\\end{bmatrix}$，$E^{-1}=\\begin{bmatrix}1&0\\\\3&1\\end{bmatrix}$。\n\n**詳解：** $I_2$ 第 2 列 $(0,1)$ 減去 3 倍第 1 列 $(1,0)$ 成 $(-3,1)$。左乘得到 $EA=\\begin{bmatrix}1&2\\\\0&-2\\end{bmatrix}$。逆操作改為加 $3R_1$；兩矩陣相乘得到 $I_2$。\n\n**常見錯誤：** 把 $-3$ 放在 $(1,2)$；用 $AE$ 驗算列運算。"
    },
    "LA-CH01-S03-EX03": {
      "markdown": "**提示：** 第二步矩陣放在第一步矩陣左側。\n\n**辨識與方法：** 連續操作要求「先做者靠近 $A$」。\n\n**答案：** $P=\\begin{bmatrix}-3&1\\\\1&0\\end{bmatrix}$，$P^{-1}=\\begin{bmatrix}0&1\\\\1&3\\end{bmatrix}$。\n\n**詳解：** $E_1=\\begin{bmatrix}1&0\\\\-3&1\\end{bmatrix}$、$E_2=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，$P=E_2E_1$。逆為 $E_1^{-1}E_2^{-1}$，計算得上述結果。$PA=\\begin{bmatrix}0&-2\\\\1&2\\end{bmatrix}$，與逐步操作相符。\n\n**常見錯誤：** 寫成 $E_1E_2$；取逆只改倍數未反序。"
    },
    "LA-CH01-S03-EX04": {
      "markdown": "**提示：** 嘗試把第 1 列加到第 2 列。\n\n**辨識與方法：** 用一個具體操作建立列等價，再依定義比較空間。\n\n**答案：** 列等價；列空間及零空間相同，行空間不同。\n\n**詳解：** $R_2\\leftarrow R_2+R_1$ 可把 $A$ 變成 $B$。兩者列空間都是 $\\operatorname{span}\\{(1,0)\\}$；$Ax=0$ 和 $Bx=0$ 都要求 $x_1=0$，所以零空間是 $\\operatorname{span}\\{(0,1)^T\\}$。行空間分別為 $\\operatorname{span}\\{(1,0)^T\\}$ 與 $\\operatorname{span}\\{(1,1)^T\\}$，兩者不同。$\\operatorname{span}$ 表示所有線性組合所形成的集合。\n\n**常見錯誤：** 把「維度相同」誤當成「集合相同」。"
    },
    "LA-CH01-S03-EX05": {
      "markdown": "**提示：** 先消去左下角，再消去右上角。\n\n**辨識與方法：** 反矩陣與基本矩陣分解可以共用同一段消去過程。\n\n**答案：** $A^{-1}=\\begin{bmatrix}7&-2\\\\-3&1\\end{bmatrix}$，$A=\\begin{bmatrix}1&0\\\\3&1\\end{bmatrix}\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$。\n\n**詳解：** 先做 $R_2\\leftarrow R_2-3R_1$，左半部變成 $\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$，右半部變成 $\\begin{bmatrix}1&0\\\\-3&1\\end{bmatrix}$。再做 $R_1\\leftarrow R_1-2R_2$，左半部為 $I_2$，右半部第 1 列為 $(1,0)-2(-3,1)=(7,-2)$。因此 $A^{-1}=E_2E_1$；反轉取逆得到 $A=E_1^{-1}E_2^{-1}$。直接相乘可驗證兩個結論。\n\n**常見錯誤：** 求出 $A^{-1}$ 後，把同樣順序當成 $A$ 的分解。"
    },
    "LA-CH01-S03-EX06": {
      "markdown": "**提示：** 比較兩矩陣第 1 列的差。\n\n**辨識與方法：** $C$ 非方陣不可直接寫 $C^{-1}$；比較列的線性組合。\n\n**答案：** $B=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$，唯一。\n\n**詳解：** $A$ 第 1 列等於 $C$ 第 1 列加 2 倍第 2 列，第 2 列不變，故同樣操作施於 $I_2$ 得 $B$。乘積第 1 列為 $(1,0,2)+2(0,1,3)=(1,2,8)$。唯一性可直接觀察 $C$ 的前兩行組成 $I_2$，所以 $BC$ 前兩行必為 $B$；它已由 $A$ 固定。這也是非方陣滿列秩時唯一的例子。\n\n**常見錯誤：** 認為所有非方陣情形都不唯一。"
    },
    "LA-CH01-S03-EX07": {
      "markdown": "**提示：** 設 $P=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，先比較乘積，再加可逆條件。\n\n**辨識與方法：** 秩不足、問全部解時，用待定元素保留自由參數。\n\n**答案：** $P=\\begin{bmatrix}1&b\\\\0&d\\end{bmatrix}$，$b\\in\\mathbb R$、$d\\ne0$。\n\n**詳解：** $PA=\\begin{bmatrix}a&0\\\\c&0\\end{bmatrix}$，與 $B$ 比較得 $a=1,c=0$，$b,d$ 未由方程限制。行列式為 $d$，所以可逆等價於 $d\\ne0$。例如 $I_2$ 和 $\\operatorname{diag}(1,2)$ 都是解；$\\operatorname{diag}$ 表以括號內元素放在對角，其餘填 0。\n\n**常見錯誤：** 忘記檢查 $d\\ne0$，把奇異解也列為可逆解。"
    },
    "LA-CH01-S03-MC01": {
      "markdown": "**提示：** 檢查操作是否可恢復\n\nA 是交換、可逆；B 倍乘非零常數、可逆；C 乘 0 會丟失資訊、不合法；D 為不同列間加倍數、可逆。",
      "optionExplanations": [
        "是交換、可逆",
        "倍乘非零常數、可逆",
        "乘 0 會丟失資訊、不合法",
        "為不同列間加倍數、可逆。"
      ]
    },
    "LA-CH01-S03-MC02": {
      "markdown": "**提示：** 對 $I_3$ 做同一列運算\n\nA 正確，$(3,1)$ 控制來源第 1 列加到目標第 3 列；B 是反向來源與目標；C 右乘改直行，且無法表示第 3 橫列更新；D 把所有橫列乘 2。",
      "optionExplanations": [
        "正確，$(3,1)$ 控制來源第 1 列加到目標第 3 列",
        "是反向來源與目標",
        "右乘改直行，且無法表示第 3 橫列更新",
        "把所有橫列乘 2。"
      ]
    },
    "LA-CH01-S03-MC03": {
      "markdown": "**提示：** 先找 $A^{-1}$，再取逆\n\n$A^{-1}=E_3E_2E_1$。A 次序錯；B 是反序規則未正確作用於已知乘積；C 混淆還原時應取逆；D 對已知乘積取逆後反序，正確。",
      "optionExplanations": [
        "次序錯",
        "是反序規則未正確作用於已知乘積",
        "混淆還原時應取逆",
        "對已知乘積取逆後反序，正確。"
      ]
    },
    "LA-CH01-S03-MC04": {
      "markdown": "**提示：** 用 $B=PA$ 與 $P$ 可逆判斷\n\nA 不保證，見 EX04；B 正確，$Bx=0\\iff PAx=0\\iff Ax=0$；C 不保證，例如將 $I_2$ 的第 1 列乘 2，行列式從 1 變 2；D 不保證，同例特徵值由 $1,1$ 變成 $2,1$。",
      "optionExplanations": [
        "不保證，見 EX04",
        "正確，$Bx=0\\iff PAx=0\\iff Ax=0$",
        "不保證，例如將 $I_2$ 的第 1 列乘 2，行列式從 1 變 2",
        "不保證，同例特徵值由 $1,1$ 變成 $2,1$。"
      ]
    },
    "LA-CH01-S03-MC05": {
      "markdown": "**提示：** 滿列秩保證存在右逆\n\nA 錯，滿列秩即足以保證唯一；B 錯，若 $B=0$ 則唯一解 $P=0$；C 正確，由 $AR=I_2$ 得 $P=BR$；D 錯，$A^{-1}$ 不存在，且乘法方向也未依方程推導。",
      "optionExplanations": [
        "錯，滿列秩即足以保證唯一",
        "錯，若 $B=0$ 則唯一解 $P=0$",
        "正確，由 $AR=I_2$ 得 $P=BR$",
        "錯，$A^{-1}$ 不存在，且乘法方向也未依方程推導。"
      ]
    },
    "LA-CH01-S03-HW01": {
      "markdown": "**提示：** 可先交換兩列，避免分數。\n\n1. 交換兩列：$E_1=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，$E_1A=\\begin{bmatrix}1&1\\\\2&1\\end{bmatrix}$。\n2. $R_2\\leftarrow R_2-2R_1$：$E_2=\\begin{bmatrix}1&0\\\\-2&1\\end{bmatrix}$，左半部成 $\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix}$。\n3. $R_2\\leftarrow-R_2$：$E_3=\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$，左半部成 $\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$。\n4. $R_1\\leftarrow R_1-R_2$：$E_4=\\begin{bmatrix}1&-1\\\\0&1\\end{bmatrix}$，左半部成 $I_2$。\n\n右半部依序為 $E_1$、$\\begin{bmatrix}0&1\\\\1&-2\\end{bmatrix}$、$\\begin{bmatrix}0&1\\\\-1&2\\end{bmatrix}$、$\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}$。因此\n\n$$A^{-1}=E_4E_3E_2E_1=\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix},$$\n$$A=E_1^{-1}E_2^{-1}E_3^{-1}E_4^{-1}=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}.$$\n\n驗算 $AA^{-1}=\\begin{bmatrix}2-1&-2+2\\\\1-1&-1+2\\end{bmatrix}=I_2$。\n\n**評分：** 合法消去且同步作用右半部 2 分；基本矩陣與順序正確 1 分；反矩陣正確 1 分；基本矩陣分解及順序正確 1 分。其他合法消去路徑同樣給分。"
    },
    "LA-CH01-S03-HW02": {
      "markdown": "**提示：** $PA$ 由 $P$ 的第一行（column）決定；其餘參數再由可逆限制篩選。\n\n設 $P=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，則 $PA=\\begin{bmatrix}a&0&a\\\\c&0&c\\end{bmatrix}$。比較 $B$ 得 $a=c=1$，所以\n\n$$P=\\begin{bmatrix}1&b\\\\1&d\\end{bmatrix},\\qquad d-b\\ne0.$$\n\n此即所有可逆解，因為行列式為 $d-b$。例如 $b=0,d=1$ 是其中一解。\n\n$Ax=0$ 僅要求 $x_1+x_3=0$；$Bx=0$ 的兩個方程相同，也只有此條件，所以\n\n$$N(A)=N(B)=\\{(-t,s,t)^T:s,t\\in\\mathbb R\\}.$$\n\n$\\operatorname{Col}(A)=\\operatorname{span}\\{(1,0)^T\\}$，而 $\\operatorname{Col}(B)=\\operatorname{span}\\{(1,1)^T\\}$，集合不同；兩者維度仍皆為 1。\n\n**評分：** 比較乘積得 $a=c=1$ 1 分；完整參數與 $d\\ne b$ 1 分；兩個零空間的等價條件與集合 2 分；行空間及不同的結論 1 分。"
    },
    "LA-CH01-S04-E01": {
      "markdown": "辨識：兩列係數成比例而常數不同；用增廣矩陣立即檢查。\n$A=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix},x_{\\rm vec}=(x,y)^T,b=(3,7)^T$。做 $R_2-2R_1$ 得 $[0\\ 0\\mid1]$，所以無解。\n常錯：只見兩方程式兩未知數便認為唯一。"
    },
    "LA-CH01-S04-E02": {
      "markdown": "辨識：右側為零；選一個自由變數。令 $y=t$，則 $x=-2t$，解為 $t(-2,1)^T$。$t=1$ 給非零解；任意實數 $t$ 產生無限多個不同解。\n常錯：把非平凡解誤解為每個分量都非零。"
    },
    "LA-CH01-S04-E03": {
      "markdown": "辨識：消去第二列的 $x$。新系統為 $x+y=2,y=1$，所以 $(x,y)=(1,1)$。原解必滿足新式；新式加回兩倍第一式可重建原第二式，故兩方向皆成立。\n常錯：只證明原解符合新式，漏掉反向。"
    },
    "LA-CH01-S04-E04": {
      "markdown": "辨識：樞元在第 1、3 欄且下方為零，所以是 REF；樞元非 1，並非 RREF。末欄為常數時只有三個未知數，$x_1,x_3$ 主項、$x_2$ 自由。令 $x_2=t$，$3x_3=9$ 得 $x_3=3$；$2x_1+4t=6$ 得 $x_1=3-2t$。通解 $(3-2t,t,3)^T$。\n常錯：把增廣欄也當成未知數。"
    },
    "LA-CH01-S04-E05": {
      "markdown": "辨識：可用第一列消去其餘列。對增廣矩陣做 $R_2-2R_1,R_3-R_1$ 得第二式 $y-z=-1$、第三式 $y+2z=8$；再做 $R_3-R_2$ 得 $3z=9$。回代得 $z=3,y=2,x=1$。代回原式得 $6,11,14$，吻合。\n常錯：列減法漏改右側常數。Gauss–Jordan 可由此繼續消去上方至左側 $I$。"
    },
    "LA-CH01-S04-E06": {
      "markdown": "辨識：相容而有三未知數、兩樞元；以自由變數寫通解。令 $z=t$，則 $y=1-t,x=1$。取 $t=0$ 得 $x_p=(1,1,0)^T$。齊次系統為 $u_1+u_2+u_3=0,u_2+u_3=0$，故 $u_1=0,u_2=-u_3$，核空間為 $\\{t(0,-1,1)^T:t\\in\\mathbb R\\}$。通解 $x_p+t(0,-1,1)^T$。\n常錯：把所有非齊次解的集合稱為核空間。"
    },
    "LA-CH01-S04-E07": {
      "markdown": "辨識：先比秩，再算未知數減秩。增廣秩 3 時相容，$5-3=2$ 個自由參數，在實數上無限多解；增廣秩 4 時矛盾而無解，不能宣稱有二參數的解集合。\n常錯：無解時仍寫「通解有兩個自由度」。"
    },
    "LA-CH01-S04-E08": {
      "markdown": "辨識：做 $R_2-2R_1$ 得 $ky=c-2$，避免先除以 $k$。若 $k\\ne0$，$y=(c-2)/k,x=1-(c-2)/k$；若 $k=0,c\\ne2$，無解；若 $k=0,c=2$，通解 $(1-t,t)^T$。\n常錯：漏掉 $k=0$ 分支。"
    },
    "LA-CH01-S04-E09": {
      "markdown": "辨識：每次運算作用在 $I$ 得基本矩陣。$E_1=\\begin{bmatrix}1&0\\\\-2&1\\end{bmatrix}$，$E_2=\\begin{bmatrix}1&-1\\\\0&1\\end{bmatrix}$。$E_2E_1A=I$。逆矩陣為 $E_1^{-1}=\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}$、$E_2^{-1}=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$，故 $A=E_1^{-1}E_2^{-1}I=\\begin{bmatrix}1&1\\\\2&3\\end{bmatrix}$。\n常錯：還原時寫成 $E_2^{-1}E_1^{-1}$。"
    },
    "LA-CH01-S04-E10": {
      "markdown": "辨識：每一元素守恆。設係數為 $u,v,w,z$，得 $6u=w,6u=2z,2v=z$。因此 $(u,v,w,z)=t(2,3,12,6)$。取最小正整數比例，得 $2C_6H_6+3O_2\\to12C+6H_2O$。驗算碳 12、氫 12、氧 6，各自守恆。\n常錯：只消分母卻未確認最簡整數比；不得更改化學式下標。"
    },
    "LA-CH01-S04-E11": {
      "markdown": "辨識：每個節點列流入等於流出。甲：$10=x+4$ 得 $x=6$；乙：$x+2=y$ 得 $y=8$。全網外部流入 12、流出 $4+8=12$，一致。\n常錯：將乙的內部流入 $x$ 在全網總流量重複計入。"
    },
    "LA-CH01-S04-E12": {
      "markdown": "辨識：輸入已表示成已知向量組合。由分配律，結果 $2Aa-Ab+3Ac=2b-c+3d$，無須求完整 $A$。\n常錯：誤寫成 $2b-b+3c$，沒有逐項對應作用結果。"
    },
    "LA-CH01-S04-E13": {
      "markdown": "辨識：相加可消去 $y$。相加得 $2x=1+i$，所以 $x=(1+i)/2$；相減得 $2iy=1-i$，所以 $y=(1-i)/(2i)=-(1+i)/2$。代回得 $x+iy=1,x-iy=i$。\n常錯：將 $1/i$ 算成 $i$。"
    },
    "LA-CH01-S04-E14": {
      "markdown": "辨識：$AB=0$ 代表 $B$ 欄空間包含於 $A$ 核空間。故 $2\\le\\dim\\ker(A)=5-r$，得 $r\\le3$。取 $A$ 前三列為 $[I_3\\ 0]$、第四列為零；取 $B$ 第一、二欄為五維標準基底 $e_4,e_5$，其餘欄零，即滿足條件且 $r=3$。$e_j$ 表示第 $j$ 個分量為 1、其餘為零的向量。\n常錯：只給上界，沒有說明能否達到。"
    },
    "LA-CH01-S04-T01": {
      "markdown": "**提示：** 將該列翻回一條方程式。\n\nA 正確：該列等於 $0=2$，矛盾。B 錯：有矛盾就無解，不能唯一。C 錯：零係數列的右側不是零。D 錯：單一矛盾列已足以判定。",
      "optionExplanations": [
        "正確：該列等於 $0=2$，矛盾",
        "錯：有矛盾就無解，不能唯一",
        "錯：零係數列的右側不是零",
        "錯：單一矛盾列已足以判定。"
      ]
    },
    "LA-CH01-S04-T02": {
      "markdown": "**提示：** 先看零列位置，再看首項是否為 1、該欄是否清零。\n\nA 錯：首項 2 不是 1。B 錯：第二樞元欄上方有 2。C 正確：首項為 1、向右移動，樞元欄其餘皆零；自由欄可含 2。D 錯：零列出現在非零列上方。",
      "optionExplanations": [
        "錯：首項 2 不是 1",
        "錯：第二樞元欄上方有 2",
        "正確：首項為 1、向右移動，樞元欄其餘皆零；自由欄可含 2",
        "錯：零列出現在非零列上方。"
      ]
    },
    "LA-CH01-S04-T03": {
      "markdown": "**提示：** 分開檢查滿列秩與未知數欄數。\n\nA 錯：5 未知數而秩 3，不能唯一。B 正確：秩等於列數 3，所有 $b$ 皆相容；$5-3=2$ 個自由參數。C 錯：滿列秩可涵蓋全部 $\\mathbb R^3$ 的右側。D 錯：3 是樞元數，自由參數為 2。",
      "optionExplanations": [
        "錯：5 未知數而秩 3，不能唯一",
        "正確：秩等於列數 3，所有 $b$ 皆相容；$5-3=2$ 個自由參數",
        "錯：滿列秩可涵蓋全部 $\\mathbb R^3$ 的右側",
        "錯：3 是樞元數，自由參數為 2。"
      ]
    },
    "LA-CH01-S04-T04": {
      "markdown": "**提示：** 特解要保持固定，齊次解可乘任意純量。\n\nA 錯：$A(tu)=0$，一般不等於 $b$。B 錯：只列出其中一解，沒有全部純量倍數。C 錯：作用 $A$ 得 $tb$，一般不等於 $b$。D 正確：$A(x_p+tu)=b$，且任一原解減去 $x_p$ 都在核空間中。",
      "optionExplanations": [
        "錯：$A(tu)=0$，一般不等於 $b$",
        "錯：只列出其中一解，沒有全部純量倍數",
        "錯：作用 $A$ 得 $tb$，一般不等於 $b$",
        "正確：$A(x_p+tu)=b$，且任一原解減去 $x_p$ 都在核空間中。"
      ]
    },
    "LA-CH01-S04-T05": {
      "markdown": "**提示：** 先用第二式減兩倍第一式。\n\n第二式減兩倍第一式得 $ky=1$。A 錯：$k=1$ 時有唯一解。B 正確：$k=0$ 時變成 $0=1$。C 錯：$k=3$ 也有唯一解。D 錯：漏掉 $k=0$。",
      "optionExplanations": [
        "錯：$k=1$ 時有唯一解",
        "正確：$k=0$ 時變成 $0=1$",
        "錯：$k=3$ 也有唯一解",
        "錯：漏掉 $k=0$。"
      ]
    },
    "LA-CH01-S04-W01": {
      "markdown": "**提示：** 第二式是否真的提供新限制？\n\n列化簡：$R_2\\leftarrow R_2-2R_1$，將原第三列移到第二列，得到 $x+2y-z=1,y+z=3$。再令 $R_1\\leftarrow R_1-2R_2$ 得 $x-3z=-5$。RREF 為\n\n$$\\left[\\begin{array}{ccc|c}1&0&-3&-5\\\\0&1&1&3\\\\0&0&0&0\\end{array}\\right].$$\n\n樞元欄為係數第 1、2 欄，秩 2。令 $z=t$，得 $y=3-t,x=-5+3t$，通解如答案。特解 $(-5,3,0)^T$；核空間由 $(3,-1,1)^T$ 張成。代回第一式為 1、第二式為 2、第三式為 3，成立。\n\n評分：等價列化簡 3 分；樞元、秩及自由變數 2 分；參數通解含範圍 3 分；特解與齊次解分解 2 分。"
    },
    "LA-CH01-S04-W02": {
      "markdown": "**提示：** 分別驗證兩個集合的每個元素都屬於另一集合。\n\n若 $Ax_1=Ax_2=b$，由線性性 $A(x_1-x_2)=b-b=0$，所以差屬核空間。固定特解 $x_p$：任意原解 $x$ 都有 $x-x_p\\in\\ker(A)$，故屬於 $x_p+\\ker(A)$；反向任取 $u\\in\\ker(A)$，則 $A(x_p+u)=b$，故也屬原解集合。兩方向證明集合相等。\n\n若核空間只有零向量，通解只能是 $x_p$；若有非零 $u$，則 $x_p$ 與 $x_p+u$ 是兩個不同解，不能唯一。因此唯一解等價於核空間為零，再由秩－零度等價於秩 $n$。\n\n評分：差向量推導 2 分；第一個包含 2 分；反向包含 2 分；唯一性的兩方向 3 分；秩條件 1 分。"
    },
    "LA-CH01-S05-E01": {
      "markdown": "**辨識與提示：** 兩列成比例；先找非零齊次解，比直接求逆省事。\n\n取 $x=(-2,1)^T\\ne0$，則 $Ax=(0,0)^T$。由 K01，A 不可逆。錯誤：不能把「齊次方程有解」當成不可逆理由，因為零解永遠存在。"
    },
    "LA-CH01-S05-E02": {
      "markdown": "**辨識與提示：** 左上到右下已有樞紐，只須消去右上角。\n\n作 $R_1\\leftarrow R_1-R_2$，$E=\\begin{bmatrix}1&-1\\\\0&1\\end{bmatrix}$。計算 $EA=I$，且 A 為方陣，故 $A^{-1}=E$。錯誤：列運算應左乘，不是 AE。"
    },
    "LA-CH01-S05-E03": {
      "markdown": "**辨識與提示：** 題目問兩矩陣互為逆；取轉置後檢查乘積。\n\n由 $AA^{-1}=I$ 取轉置，得 $(A^{-1})^TA^T=I$；由 $A^{-1}A=I$ 取轉置得 $A^T(A^{-1})^T=I$。故 $(A^{-1})^T$ 是 $A^T$ 的反矩陣，依唯一性得結論。錯誤：轉置乘積時不反轉次序。"
    },
    "LA-CH01-S05-E04": {
      "markdown": "**辨識與提示：** 唯一性：把任何齊次解加到已知解上。\n\n設唯一解 $x_0$，任取 $Az=0$。線性性給 $A(x_0+z)=b_0$。由唯一性 $x_0+z=x_0$，所以 $z=0$。零空間只有零向量，又 A 為方陣，故可逆。錯誤：漏掉方陣前提。"
    },
    "LA-CH01-S05-E05": {
      "markdown": "**辨識與提示：** AB 是純量；先利用小尺寸判斷，再套公式。\n\n$AB=[0]$，所以 $(I_1-AB)^{-1}=[1]$。$BA=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$，故公式給 $(I_2-BA)^{-1}=I_2+BA=\\begin{bmatrix}1&0\\\\1&1\\end{bmatrix}$。相乘可得 $I_2$。錯誤：把兩個 I 都當成同尺寸。"
    },
    "LA-CH01-S05-E06": {
      "markdown": "**辨識與提示：** 非交換和式；把 A+B 夾在適當左右因子之間。\n\n$B^{-1}(A+B)A^{-1}=B^{-1}+A^{-1}$。三因子皆可逆，取逆反轉次序得到 $A(A+B)^{-1}B$。錯誤：假設 A、B 可交換或直接把逆分配到加法。"
    },
    "LA-CH01-S05-E07": {
      "markdown": "**辨識與提示：** 先比較列欄數及像向量形式。\n\n$Ax=(x_1,x_2,0)^T$，所以零空間為零，一對一；無法得到 $(0,0,1)^T$，因此非映成。左逆為 $L=\\begin{bmatrix}1&0&0\\\\0&1&0\\end{bmatrix}$，驗算 $LA=I_2$。錯誤：用一對一直接宣稱長方形矩陣可逆。"
    },
    "LA-CH01-S05-E08": {
      "markdown": "**辨識與提示：** 把每個特徵值代入相應多項式。\n\nA 不可逆，因有特徵值 0。A+I 的特徵值為 1、3、4，故可逆。A²−I 的特徵值為 −1、3、8，也可逆。錯誤：認為 A 不可逆，所有多項式 p(A) 都不可逆。"
    },
    "LA-CH01-S05-E09": {
      "markdown": "**辨識與提示：** 先算 N²；第二問使用冪等關係。\n\n$N^2=0$，故逆為 $I+N=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$。非零冪等 P 時答案為 $\\alpha\\ne-1$，公式及乘積驗證見 K09；$\\alpha=-1$ 時非零像向量 Py 在 I−P 的零空間。錯誤：漏掉 P=0 的例外。"
    },
    "LA-CH01-S05-E10": {
      "markdown": "**辨識與提示：** 滿欄秩與滿列秩分開判斷。\n\n$A^TA=[5]$，左逆 $L=\\frac15[1\\ 2]$，$LA=1$。$AA^T=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$ 有非零零向量 $(-2,1)^T$，不可逆。錯誤：混淆滿欄秩與滿列秩。"
    },
    "LA-CH01-S05-E11": {
      "markdown": "**辨識與提示：** 前者看 Schur 補；後者先算分母。\n\nA 區塊是純量 2，Schur 補 $2-4(1/2)1=0$，故 M 不可逆。另一問 $d=1+v^Tu=2$，逆為 $I-uv^T/2=\\operatorname{diag}(1/2,1)$。錯誤：只查對角區塊都可逆，未查 Schur 補。"
    },
    "LA-CH01-S05-Q01": {
      "markdown": "**提示：** 比較「有解」與「唯一解」。\n\nA 錯，零矩陣在 b=0 時仍有解；B 錯，所有矩陣都有零解；C 對，唯一解排除非零齊次解；D 錯，全 1 的 2×2 矩陣對角非零仍奇異。",
      "optionExplanations": [
        "錯，零矩陣在 b=0 時仍有解",
        "錯，所有矩陣都有零解",
        "對，唯一解排除非零齊次解",
        "錯，全 1 的 2×2 矩陣對角非零仍奇異。"
      ]
    },
    "LA-CH01-S05-Q02": {
      "markdown": "**提示：** 回想列運算的乘法方向與尺寸。\n\nA 對，P 是列運算基本矩陣之乘積；B 錯，倍乘一列會改變行列式；C 錯，列運算左乘；D 錯，例如 A=(1,0)ᵀ，交換兩列後 B=(0,1)ᵀ，欄空間不同。",
      "optionExplanations": [
        "對，P 是列運算基本矩陣之乘積",
        "錯，倍乘一列會改變行列式",
        "錯，列運算左乘",
        "錯，例如 A=(1,0)ᵀ，交換兩列後 B=(0,1)ᵀ，欄空間不同。"
      ]
    },
    "LA-CH01-S05-Q03": {
      "markdown": "**提示：** 比較秩與列、欄數。\n\nA 錯，rank 3<5，非映成；B 錯，AAᵀ 的秩至多 3，低於階數 5；C 錯，A 不是方陣；D 對，滿欄秩使 AᵀA 零空間為零。",
      "optionExplanations": [
        "錯，rank 3<5，非映成",
        "錯，AAᵀ 的秩至多 3，低於階數 5",
        "錯，A 不是方陣",
        "對，滿欄秩使 AᵀA 零空間為零。"
      ]
    },
    "LA-CH01-S05-Q04": {
      "markdown": "**提示：** 把兩個特徵值代入多項式。\n\nA 錯，i²+1=(−i)²+1=0；B 對，兩個特徵值都非零；C 錯，i 是 A 的特徵值；D 錯，−i 是 A 的特徵值。一般實矩陣不能只檢查實數特徵值。",
      "optionExplanations": [
        "錯，i²+1=(−i)²+1=0",
        "對，兩個特徵值都非零",
        "錯，i 是 A 的特徵值",
        "錯，−i 是 A 的特徵值。一般實矩陣不能只檢查實數特徵值。"
      ]
    },
    "LA-CH01-S05-Q05": {
      "markdown": "**提示：** 先展開分解。\n\nA 錯，取 A=B=I，左邊 I/2、右邊 2I；B 錯，乘積逆須反序；C 對，由 B⁻¹(A+B)A⁻¹ 分解；D 錯，展開一般無法消成 A⁻¹+B⁻¹。B、D 的反例可取 A=[[1,1],[0,1]]、B=diag(1,2)，二者不交換且 A+B 可逆。",
      "optionExplanations": [
        "錯，取 A=B=I，左邊 I/2、右邊 2I",
        "錯，乘積逆須反序",
        "對，由 B⁻¹(A+B)A⁻¹ 分解",
        "錯，展開一般無法消成 A⁻¹+B⁻¹。B、D 的反例可取 A=[[1,1],[0,1]]、B=diag(1,2)，二者不交換且 A+B 可逆。"
      ]
    },
    "LA-CH01-S05-Q06": {
      "markdown": "**提示：** 從 (I−BA)x=0 出發。\n\n取 x∈Rᵐ，令 (Iₘ−BA)x=0，得 x=BAx；左乘 A，得 (Iₙ−AB)Ax=0，此處 Ax∈Rⁿ。由假設 Ax=0，代回得 x=0。故 Iₘ−BA 為 m×m 方陣且齊次解只有零解，所以可逆。\n\n評分：設齊次方程與尺寸 2 分；推出 (I−AB)Ax=0 共 3 分；正確用可逆性得 Ax=0 共 2 分；代回並由方陣條件得結論 3 分。答對：關鍵鏈完整；部分正確：方向正確但缺少代回或理由；不會：只宣稱 AB 與 BA 可交換或未建立零解論證。"
    },
    "LA-CH01-S05-Q07": {
      "markdown": "**提示：** 用望遠鏡相消與長度平方。\n\nQ07(a)：答案 I+N+N²。相乘為 I−N³=I，另一側同理。答案 2 分、驗證 2 分。\n\nQ07(b)：若 Ax=0，則 AᵀAx=0。若 AᵀAx=0，左乘 xᵀ 得 0=xᵀAᵀAx=||Ax||²，故 Ax=0。兩方向各 1 分、長度平方推論 2 分。滿欄秩使 AᵀA 可逆，取 L=(AᵀA)⁻¹Aᵀ，算 LA=Iₙ，2 分。答對：兩方向與左逆驗證皆完整；部分正確：只完成一方向或公式未說明存在；不會：混淆 AᵀA 與 AAᵀ 或直接假設 A 有雙側逆。"
    },
    "LA-CH01-S06-E01": {
      "markdown": "辨識：題目要求消去矩陣與 LU，從倍加列開始。提示：消去倍數是 3。\n\n$R_2\\leftarrow R_2-3R_1$，所以 $E=\\begin{bmatrix}1&0\\\\-3&1\\end{bmatrix}$，$U=\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$。由 $EA=U$ 左乘 $E^{-1}$，得 $L=\\begin{bmatrix}1&0\\\\3&1\\end{bmatrix}$。乘回的第二列是 $(6,5)$。常見錯誤：把 $-3$ 放入 $L$。"
    },
    "LA-CH01-S06-E02": {
      "markdown": "辨識：第一主元非零，先嘗試不換列消去。提示：第二輪使用更新後的矩陣。\n\n第一輪倍數 $m_{21}=4,m_{31}=-7$，消去後第二列 $(0,-14,-18)$、第三列 $(0,7,30)$。第二輪 $m_{32}=7/(-14)=-1/2$，執行 $R_3\\leftarrow R_3+R_2/2$，得到\n\n$$L=\\begin{bmatrix}1&0&0\\\\4&1&0\\\\-7&-1/2&1\\end{bmatrix},\\quad U=\\begin{bmatrix}1&2&3\\\\0&-14&-18\\\\0&0&21\\end{bmatrix}.$$\n\n驗算第三列：$-7(1,2,3)-\\frac12(0,-14,-18)+(0,0,21)=(-7,-7,9)$。常見錯誤：直接拿原始 $a_{32}/a_{22}$。"
    },
    "LA-CH01-S06-E03": {
      "markdown": "辨識：首元素為零但下方不為零，先用乘積比較證明。提示：比較左上與左下。\n\n設 $L=\\begin{bmatrix}1&0\\\\t&1\\end{bmatrix}$，$U=\\begin{bmatrix}u&v\\\\0&w\\end{bmatrix}$。乘積左上迫使 $u=0$，左下便為 $tu=0$，但題目的左下為 1，矛盾。\n\n奇異例：$A=\\operatorname{diag}(1,0)=I A$，可取 $L=I,U=A$。常見錯誤：把反例擴大成所有可逆矩陣都無 LU，或奇異矩陣都無 LU。"
    },
    "LA-CH01-S06-E04": {
      "markdown": "辨識：要求單位上三角，需要將各列除以對角元素。提示：$D$ 放在 $L$ 與 $\\widehat U$ 之間。\n\n$D=\\operatorname{diag}(1,-14,21)$，$\\widehat U=\\begin{bmatrix}1&2&3\\\\0&1&9/7\\\\0&0&1\\end{bmatrix}$。$D\\widehat U=U$，再左乘 E02 的 $L$ 得原矩陣。常見錯誤：按行縮放，或寫成 $L\\widehat UD$。"
    },
    "LA-CH01-S06-E05": {
      "markdown": "辨識：零主元需要換列；解方程的右端也要換列。\n\n$P=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，$PA=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$，故 $L=I,U=PA$。$Pb=(2,1)^T$；前代得 $y=(2,1)^T$，回代得 $x_2=1,x_1=1$。代回原式得 $(1,2)^T$。常見錯誤：使用原本的 $b$。"
    },
    "LA-CH01-S06-E06": {
      "markdown": "辨識：主元很小，需要比較倍數大小。未交換時倍數 $1/0.001=1000$。交換兩列後首主元為 1，倍數為 $0.001$。有限精度下，大倍數與相減可能放大捨入誤差；本例只比較倍數，沒有指定有效位數，因此不虛構捨入後數值。常見錯誤：宣稱精確算術下的小主元必然使答案錯誤。"
    },
    "LA-CH01-S06-E07": {
      "markdown": "辨識：同一矩陣已有分解，直接前代／回代。提示：先算 $y$。\n\n$y_1=3$，$3y_1+y_2=11$，得 $y_2=2$。$2x_2=2$ 得 $x_2=1$；$2x_1+x_2=3$ 得 $x_1=1$。驗算 $Ax=(3,11)^T$。常見錯誤：先回代 $L$，或將 $y$ 當最終答案。"
    },
    "LA-CH01-S06-E08": {
      "markdown": "辨識：右下可由 Schur complement 化簡。$B=2,C=4,D=3,E=7$，$S=7-3(1/2)4=1$，故行列式 $2\\cdot1=2$。條件是 $B$ 可逆；驗算一般二階公式 $14-12=2$。常見錯誤：漏掉反矩陣或乘法順序。"
    },
    "LA-CH01-S06-Q01": {
      "markdown": "提示：把加法改寫為減去倍數。答案 B。\n\nA：混淆列運算加號後的係數；B：$R_3-(-2)R_1$，倍數為 $-2$；C：沒有取倒數的理由；D：確實發生消去，倍數不是 0。",
      "optionExplanations": [
        "混淆列運算加號後的係數",
        "$R_3-(-2)R_1$，倍數為 $-2$",
        "沒有取倒數的理由",
        "確實發生消去，倍數不是 0。"
      ]
    },
    "LA-CH01-S06-Q02": {
      "markdown": "提示：用零主元反例與奇異上三角反例檢查。答案 D。\n\nA：E03 可逆卻沒有此形式 LU；B：$\\operatorname{diag}(1,0)$ 是反例；C：上三角無須主元歸一或消去主元上方；D：$IA=A$ 且 $I$ 符合單位下三角。",
      "optionExplanations": [
        "E03 可逆卻沒有此形式 LU",
        "$\\operatorname{diag}(1,0)$ 是反例",
        "上三角無須主元歸一或消去主元上方",
        "$IA=A$ 且 $I$ 符合單位下三角。"
      ]
    },
    "LA-CH01-S06-Q03": {
      "markdown": "提示：把原方程左乘 $P$。答案 A。\n\nA：$LUx=Pb$，令 $y=Ux$ 即得；B：漏掉排列右端；C：不是由代入推得的三角系統；D：先解 $U$ 不符合此處變數定義與分解順序。",
      "optionExplanations": [
        "$LUx=Pb$，令 $y=Ux$ 即得",
        "漏掉排列右端",
        "不是由代入推得的三角系統",
        "先解 $U$ 不符合此處變數定義與分解順序。"
      ]
    },
    "LA-CH01-S06-Q04": {
      "markdown": "提示：左乘對角矩陣是逐列縮放。答案 C。\n\nA：把右乘的行縮放效果混入；B：對角未歸一；C：第一列除 2、第二列除 $-4$；D：沒有將第一列非對角元素一併除 2。",
      "optionExplanations": [
        "把右乘的行縮放效果混入",
        "對角未歸一",
        "第一列除 2、第二列除 $-4$",
        "沒有將第一列非對角元素一併除 2。"
      ]
    },
    "LA-CH01-S06-Q05": {
      "markdown": "提示：比較絕對值，而非比較正負。答案 B。\n\nA：不從已完成的第 1 列選；B：$|-4|=4$ 最大；C：2 的絕對值較小；D：非零仍可能需要為數值穩定選主元。",
      "optionExplanations": [
        "不從已完成的第 1 列選",
        "$|-4|=4$ 最大",
        "2 的絕對值較小",
        "非零仍可能需要為數值穩定選主元。"
      ]
    },
    "LA-CH01-S06-Q06": {
      "markdown": "提示：先消去第 1 行下方，再消去第 2 行下方。\n\n$m_{21}=2,m_{31}=1$。第一輪後第二列 $(0,1,1)$，第三列 $(0,1,2)$；$m_{32}=1$。\n\n$$L=\\begin{bmatrix}1&0&0\\\\2&1&0\\\\1&1&1\\end{bmatrix},\\quad U=\\begin{bmatrix}2&1&1\\\\0&1&1\\\\0&0&1\\end{bmatrix}.$$\n\n前代：$y_1=4,y_2=10-8=2,y_3=7-4-2=1$。回代：$x_3=1,x_2=1,x_1=1$。$LU=A$，且 $A(1,1,1)^T=(4,10,7)^T$。\n\n評分：倍數 2 分；$L,U$ 各 2 分；前代 1 分；回代 2 分；驗算 1 分。部分正確：方法成立但單步算錯；不會：無法建立兩個三角系統。"
    },
    "LA-CH01-S06-Q07": {
      "markdown": "提示：分開檢查行列式與首主元。\n\n(a) $\\det A=t-1$，故 $t\\ne1$ 時可逆。\n\n(b) $t\\ne0$ 時：\n\n$$L=\\begin{bmatrix}1&0\\\\1/t&1\\end{bmatrix},\\quad U=\\begin{bmatrix}t&1\\\\0&1-1/t\\end{bmatrix}.$$\n\n$t=0$ 時比較乘積首行首項及第二列首項即得矛盾，故無此 LU。\n\n(c) $P=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，$L=I$，$U=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$。\n\n(d) $t=1$ 時奇異，仍有 (b) 的分解，其中 $U$ 最後對角為 0；所以奇異不排除 LU。相對地 $t=0$ 可逆，卻需要換列。\n\n評分：(a) 2 分；(b) 分解 3 分與零主元證明 1 分；(c) 2 分；(d) 2 分。部分正確：能求分解但混淆條件；不會：只用可逆性判斷 LU。"
    },
    "LA-CH01-S07-EX01": {
      "markdown": "**辨識與方法：** 出現指定 row 操作，逐元素更新目標 row。\n\n$R_2$ 新值=$(3,4)-3(1,2)=(0,-2)$，所以結果 $\\begin{bmatrix}1&2\\\\0&-2\\end{bmatrix}$。逆操作 $R_2\\leftarrow R_2+3R_1$。常見錯誤：連來源 row 也改掉。"
    },
    "LA-CH01-S07-EX02": {
      "markdown": "**辨識與方法：** 從 $I_3$ 做同一次操作，反向改加 −2 倍。\n\n$E=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\2&0&1\\end{bmatrix}$；$E^{-1}=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\-2&0&1\\end{bmatrix}$。由左乘第 3 row=$(2,0,1)$ 可知它取 $2R_1+R_3$。常見錯誤：把 2 放在 $(1,3)$。"
    },
    "LA-CH01-S07-EX03": {
      "markdown": "**辨識與方法：** 同一 $E$ 放兩側，直接乘法核對 row／column。\n\n$EA=\\begin{bmatrix}1&2\\\\8&14\\end{bmatrix}$，是 $R_2\\leftarrow R_2+5R_1$；$AE=\\begin{bmatrix}11&2\\\\23&4\\end{bmatrix}$，是 $C_1\\leftarrow C_1+5C_2$。常見錯誤：右乘仍宣稱改 $R_2$。"
    },
    "LA-CH01-S07-EX04": {
      "markdown": "**辨識與方法：** 連續左乘，要反序排列因子。\n\n$E_1=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$；$E_2=\\begin{bmatrix}1&0\\\\-1&1\\end{bmatrix}$。先得 $\\begin{bmatrix}3&4\\\\1&2\\end{bmatrix}$，再得 $B=\\begin{bmatrix}3&4\\\\-2&-2\\end{bmatrix}$。$B=E_2E_1A$；$A=E_1^{-1}E_2^{-1}B$。還原時先 $R_2\\leftarrow R_2+R_1$，再交換。常見錯誤：按書寫時間排列左乘因子。"
    },
    "LA-CH01-S07-EX05": {
      "markdown": "**辨識與方法：** 比較 row space，再嘗試 column 倍加。\n\n不 row equivalent，因 row spaces 分別為 $\\operatorname{span}\\{(1,1)\\}$ 與 $\\operatorname{span}\\{(1,0)\\}$，兩者不同；column equivalent，做 $C_2\\leftarrow C_2-C_1$ 即得 $B$。常見錯誤：秩相同就宣稱 row equivalent；秩相同只保證雙邊等價。"
    },
    "LA-CH01-S07-EX06": {
      "markdown": "**辨識與方法：** 求逆與多常數解，可共用消去結果。\n\n$[A\\mid I]$ 的第二 row 減第一 row 的 3 倍，得 $\\left[\\begin{array}{cc|cc}1&2&1&0\\\\0&-1&-3&1\\end{array}\\right]$；第二 row 乘 −1，得 $\\left[\\begin{array}{cc|cc}1&2&1&0\\\\0&1&3&-1\\end{array}\\right]$；第一 row 減第二 row 的 2 倍，得 $\\left[I\\mid\\begin{matrix}-5&2\\\\3&-1\\end{matrix}\\right]$。所以 $A^{-1}=\\begin{bmatrix}-5&2\\\\3&-1\\end{bmatrix}$，$x=A^{-1}(1,2)^T=(-1,1)^T$。代回得 $(1,2)^T$。常見錯誤：右半單位矩陣沒同步操作。"
    },
    "LA-CH01-S07-EX07": {
      "markdown": "**辨識與方法：** 參數使主元消失，需分相容與不相容。\n\n$R_2\\leftarrow R_2-2R_1$ 得第二主元 $t-4$，所以 $t\\ne 4$ 時唯一可解。$t=4$ 時 $b=(1,2)^T$ 相容，解 $(x_1,x_2)=(1-2s,s)$，$s\\in F$；$b=(1,3)^T$ 產生 $0=1$，因此無解。常見錯誤：奇異就判斷所有 $b$ 都無解。"
    },
    "LA-CH01-S07-EX08": {
      "markdown": "**辨識與方法：** 辨識雙邊等價，先消 rows 再消 columns。\n\n兩次 row 倍加後 $\\begin{bmatrix}1&1&1\\\\0&0&0\\\\0&0&0\\end{bmatrix}$；再兩次 column 倍加後 $\\operatorname{diag}(1,0,0)$。row space 不同，故只用 row 不可能。常見錯誤：混用等價與相似、誤認保留特徵值。"
    },
    "LA-CH01-S07-Q01": {
      "markdown": "**提示：** 操作後能否還原任意原矩陣？\n\n$A$ 再交換可還原；$B$ 乘 −1/2 可還原；$C$ 清除資訊，不能還原任意原 row；$D$ 加 −3 倍可還原。",
      "optionExplanations": [
        "再交換一次可還原。",
        "乘 −1/2 可還原。",
        "清除原 row 的資訊，無法還原任意原矩陣。",
        "加 −3 倍可還原。"
      ]
    },
    "LA-CH01-S07-Q02": {
      "markdown": "**提示：** 先核對乘積維度。\n\n$A$ 維度 ($2\\times 2$)($2\\times 3$) 合法且做 rows；$B$ 的內維度 3、2 不合；$C$ 尺寸不同不能相加，也不是操作表示法；$D$ 的內維度同樣不合。",
      "optionExplanations": [
        "$EA$ 的維度為 ($2\\times 2$)($2\\times 3$)，合法且做 row 操作。",
        "$AE$ 的內維度 3、2 不合。",
        "$E+A$ 尺寸不同，不能相加，也不是操作表示法。",
        "$A E^T$ 的內維度同樣不合。"
      ]
    },
    "LA-CH01-S07-Q03": {
      "markdown": "**提示：** 先撤銷最後操作。\n\n由 $B=E_2E_1A$，先左乘 $E_2^{-1}$，再左乘 $E_1^{-1}$ 得 $D$。$A$、$C$ 未使用反向操作；$B$ 的反向順序錯誤，一般無法交換。",
      "optionExplanations": [
        "未使用反向操作，一般無法還原。",
        "反向操作順序錯誤，$E_1^{-1}$ 與 $E_2^{-1}$ 一般不能交換。",
        "未使用反向操作，一般無法還原。",
        "由 $B=E_2E_1A$，先左乘 $E_2^{-1}$，再左乘 $E_1^{-1}$，得 $A=E_1^{-1}E_2^{-1}B$。"
      ]
    },
    "LA-CH01-S07-Q04": {
      "markdown": "**提示：** 把 $PAx=0$ 兩側左乘 $P^{-1}$。\n\n$B$ 由 $P$ 可逆直接推出。$A$ 反例：$A=(1,0)^T$，$P$ 交換兩座標，column space 從水平軸變垂直軸。$C$ 取 $A=I$、$P=2I$，行列式會改變。$D$ 同一反例中特徵值從 1 變 2。",
      "optionExplanations": [
        "反例：$A=(1,0)^T$，$P$ 交換兩座標，column space 從水平軸變成垂直軸。",
        "$P$ 可逆，所以 $PAx=0 \\iff  Ax=P^{-1}0=0$，核空間相同。",
        "取 $A=I$、$P=2I$，行列式改變。",
        "同樣取 $A=I$、$P=2I$，特徵值從 1 變成 2。"
      ]
    },
    "LA-CH01-S07-Q05": {
      "markdown": "**提示：** 注意「至少一個」與「每個」的量詞。\n\n$C$ 表示滿射，方陣因此滿秩、可逆。$A$ 零矩陣對 $b=0$ 也有解；$B$ 任何矩陣都有零解；$D$ 例如 $\\operatorname{diag}(1,0)$ 仍奇異。",
      "optionExplanations": [
        "零矩陣對 $b=0$ 也有解，不能推出可逆。",
        "任何矩陣的齊次方程都有零解。",
        "對每個 $b$ 都有解表示滿射；方陣因此滿秩、可逆。",
        "$\\operatorname{diag}(1,0)$ 有非零 row，仍是奇異矩陣。"
      ]
    },
    "LA-CH01-S07-Q06": {
      "markdown": "**提示：** 每次基本矩陣都由 $I_2$ 單獨構造。\n\n$E_1=\\begin{bmatrix}1&0\\\\-2&1\\end{bmatrix}$，$E_2=\\begin{bmatrix}1/2&0\\\\0&1\\end{bmatrix}$。$E_1A=\\begin{bmatrix}2&1\\\\0&1\\end{bmatrix}$，$B=\\begin{bmatrix}1&1/2\\\\0&1\\end{bmatrix}$；$E_2E_1=\\begin{bmatrix}1/2&0\\\\-2&1\\end{bmatrix}$，乘 $A$ 得 $B$。還原先 $R_1\\leftarrow 2R_1$，再 $R_2\\leftarrow R_2+2R_1$；$A=E_1^{-1}E_2^{-1}B$。\n\n評分：$E_1$、$E_2$ 各 2 分；$B$ 2 分；驗算 2 分；還原順序 2 分。自評：10 分答對；觀念正確但計算或順序有錯為部分正確；無法構造矩陣為不會。"
    },
    "LA-CH01-S07-Q07": {
      "markdown": "**提示：** 先用 column space，再用 rank-nullity（秩與零度定理）。\n\n$Ax=b$ 無解表示 $b\\notin \\operatorname{col}(A)$，故 $\\operatorname{col}(A)\\ne F^n$，$\\operatorname{rank}(A)<n$。由 $\\operatorname{nullity}(A)=n-\\operatorname{rank}(A)$，得 $\\operatorname{nullity}(A)>0$。非方陣不成立：$A=(1,0)^T$ 是 $2\\times 1$，$b=(0,1)^T$ 無解，但 $Ax=0$ 只有 $x=0$，所以 $\\operatorname{nullity}=0$。\n\n評分：連到 column space 2 分；$\\operatorname{rank}<n$ 2 分；rank-nullity 推論 2 分；非方陣反例與驗證 4 分。自評：證明與反例完整為答對；僅完成方陣證明為部分正確；把無解直接當非零齊次解而無推論為不會。"
    },
    "DS-CH01-S01-E01": {
      "markdown": "辨識：題目問開發流程。方法：把每階段對應具體產出。步驟：①需求訂已排序陣列、目標、回傳任一索引或 -1；②分析拆輸入、搜尋、輸出；③設計閉區間二元搜尋；④實作端點更新；⑤以不變量論證並測空陣列、端點與缺值。常錯：把測試當設計，把需求只寫「找資料」。"
    },
    "DS-CH01-S01-E02": {
      "markdown": "辨識：同時要求分解與組合。方法：用 top-down 拆功能，再由 bottom-up 建元件。步驟：①查值服務拆成讀入、檢核、搜尋、呈現；②底層建比較函式、輸入轉換、搜尋函式；③資料已排序，採二元搜尋。常錯：忽略排序前提或認為兩種設計法互斥。"
    },
    "DS-CH01-S01-E03": {
      "markdown": "辨識：有限測試與普遍命題的差別。方法：找規格尚未覆蓋的情況。步驟：①不能由三例推論所有合法輸入；②測空陣列檢查 right=-1；③測端點檢查邊界；④測不存在值檢查終止。常錯：認為測更多就等於形式證明。"
    },
    "DS-CH01-S01-Q01": {
      "markdown": "**提示：** 先區分「要做什麼」與「怎麼做」。\n\n**A：** 正確：定義輸出規格\n\n**B：** 錯：尚非修錯\n\n**C：** 錯：尚非程式實作\n\n**D：** 錯：非效能量測",
      "optionExplanations": [
        "正確：定義輸出規格",
        "錯：尚非修錯",
        "錯：尚非程式實作",
        "錯：非效能量測"
      ]
    },
    "DS-CH01-S01-Q02": {
      "markdown": "**提示：** 看拆解方向。\n\n**A：** 錯：未執行案例\n\n**B：** 正確：整體往子功能拆解\n\n**C：** 錯：方向相反\n\n**D：** 錯：沒有定位錯誤",
      "optionExplanations": [
        "錯：未執行案例",
        "正確：整體往子功能拆解",
        "錯：方向相反",
        "錯：沒有定位錯誤"
      ]
    },
    "DS-CH01-S01-Q03": {
      "markdown": "**提示：** 區分有限例子與所有輸入。\n\n**A：** 錯：不能普遍推論\n\n**B：** 錯：測試仍需規格\n\n**C：** 正確：限於已測案例\n\n**D：** 錯：可能漏測",
      "optionExplanations": [
        "錯：不能普遍推論",
        "錯：測試仍需規格",
        "正確：限於已測案例",
        "錯：可能漏測"
      ]
    },
    "DS-CH01-S01-Q04": {
      "markdown": "**提示：** 思考為何右半部可以排除。\n\n**A：** 錯：允許重複值\n\n**B：** 錯：奇數也可搜尋\n\n**C：** 錯：不是此法必要條件\n\n**D：** 正確：排序支撐排除推論",
      "optionExplanations": [
        "錯：允許重複值",
        "錯：奇數也可搜尋",
        "錯：不是此法必要條件",
        "正確：排序支撐排除推論"
      ]
    },
    "DS-CH01-S01-Q05": {
      "markdown": "**提示：** 問題已發生後如何找原因。\n\n**A：** 正確：定位修正錯誤\n\n**B：** 錯：需求訂目標\n\n**C：** 錯：非操作語意定義\n\n**D：** 錯：非輸入規格設計",
      "optionExplanations": [
        "正確：定位修正錯誤",
        "錯：需求訂目標",
        "錯：非操作語意定義",
        "錯：非輸入規格設計"
      ]
    },
    "DS-CH01-S01-W01": {
      "markdown": "**提示：** 依五階段逐項落地。\n\n需求：整數遞增陣列、目標，重複時回傳任一索引，無值回傳 -1（2 分）。分析：拆輸入、查詢、輸出（2 分）。設計：二元搜尋且閉區間（2 分）。實作：完成端點更新（2 分）。驗證：測試並論證搜尋不變量（2 分）。若選不同但一致的重複值規格亦可，須讓演算法符合該規格。"
    },
    "DS-CH01-S01-W02": {
      "markdown": "**提示：** 考慮空陣列、端點及缺值。\n\n空陣列：不存取任何元素即回傳 -1（2 分）；單元素命中或端點命中：確認 left=right 仍可查（2 分）；非空且目標缺值：確認區間縮空並終止（2 分）。測試檢查指定實例，證明需對合法輸入建立普遍論證（4 分）。三種測試需功能不同，不能只換數字。"
    },
    "DS-CH01-S02-E04": {
      "markdown": "辨識：模糊指令與終止。方法：分別檢查明確性、有限性。步驟：①「感覺夠大」未定義，缺明確性；②沒有可保證的停止條件，有限性未建立；③從整數 0 每次加 1 到 10，有明確判斷且十次後終止。常錯：把有效性解釋成「一定很快」。"
    },
    "DS-CH01-S02-E05": {
      "markdown": "辨識：每輪找剩餘最小值。方法：記錄最小值索引後才交換。步驟：①[2,3,9,7]；②[2,3,9,7]；③[2,3,7,9]。比較 3+2+1=6；本稿排除自身交換，所以實際交換 2 次。常錯：看到更小值就立刻換、把 min_index 當最小值。"
    },
    "DS-CH01-S02-E06": {
      "markdown": "辨識：已排序陣列查值。方法：每輪縮小閉區間。步驟：①(0,6,3)，值 11，left=4；②(4,6,5)，值 20，right=4；③(4,4,4)，值 16，回傳 4。常錯：回傳數值 16 而非索引 4；把 mid 留在下次區間導致卡住。"
    },
    "DS-CH01-S02-E07": {
      "markdown": "辨識：單分支、規模減一。方法：展開再返回。步驟：f(3)→f(2)→f(1)→f(0)，返回 0→1→2→3。回傳 3；含初始呼叫共 4 次，最深同時 4 層。常錯：把層數與三條呼叫邊混為一談。"
    },
    "DS-CH01-S02-E08": {
      "markdown": "辨識：階乘乘上較小階乘。方法：依基底展開。步驟：Fac(4)=4·Fac(3)=4·3·Fac(2)=4·3·2·Fac(1)=4·3·2·1·Fac(0)=24。共 5 次呼叫。常錯：設 0!=0 或漏算基底呼叫。"
    },
    "DS-CH01-S02-E09": {
      "markdown": "辨識：雙分支且重疊子問題。方法：分別算 F、C 與深度。步驟：F4=3；C0=C1=1，C2=3、C3=5、C4=9；最長路徑 4→3→2→1（或 0），最大 4 層。常錯：把回傳 3 當呼叫數，或把呼叫樹總節點數當深度。"
    },
    "DS-CH01-S02-E10": {
      "markdown": "辨識：非標準邊界的二維遞迴。方法：先填邊界，再填表。步驟：n=0 列為 1,1,1,1；n=1 列為 2,3,4,5；n=2 列為 3,6,10,15。故 A(2,2)=10、A(1,2)=4、A(2,3)=15。常錯：套成 C(2,2)=1，或誤認 m>n 無定義。限制：此答案以暫定定義為前提，待原圖確認。"
    },
    "DS-CH01-S02-E11": {
      "markdown": "辨識：最大公因數。方法：餘數遞迴。步驟：48=2·18+12；18=1·12+6；12=2·6+0，故 gcd=6。gcd(48,0) 直接回傳 48，不取餘數。常錯：先做 a%b 才檢查 b=0。"
    },
    "DS-CH01-S02-E12": {
      "markdown": "辨識：列舉所有排列。方法：逐位置選候選、遞迴、復原。步驟：i=0 選 a 得 abc、acb；選 b 得 bac、bca；選 c 時陣列由 abc 交換首尾為 cba，得到 cba、cab。順序為 abc、acb、bac、bca、cba、cab。常錯：將字典順序誤當此程式輸出順序，或忘記復原。"
    },
    "DS-CH01-S02-E13": {
      "markdown": "辨識：三柱、每次一盤。方法：先搬上方兩盤，再移最大，再搬兩盤。步驟：2³−1=7；移動序列 A→C、A→B、C→B、A→C、B→A、B→C、A→C。常錯：把輔助柱固定在同一參數位置，遞迴時未交換角色。"
    },
    "DS-CH01-S02-Q06": {
      "markdown": "**提示：** 回想五性質的精確定義。\n\n**A：** 錯：可無輸入\n\n**B：** 錯：是無歧義\n\n**C：** 正確：符合輸入輸出性質\n\n**D：** 錯：有效性不是此速度限制",
      "optionExplanations": [
        "錯：可無輸入",
        "錯：是無歧義",
        "正確：符合輸入輸出性質",
        "錯：有效性不是此速度限制"
      ]
    },
    "DS-CH01-S02-Q07": {
      "markdown": "**提示：** 列 4+3+2+1。\n\n**A：** 錯：是輪數\n\n**B：** 正確：4+3+2+1=10\n\n**C：** 錯：重複計數\n\n**D：** 錯：此版比較數固定",
      "optionExplanations": [
        "錯：是輪數",
        "正確：4+3+2+1=10",
        "錯：重複計數",
        "錯：此版比較數固定"
      ]
    },
    "DS-CH01-S02-Q08": {
      "markdown": "**提示：** 排除已檢查過的 mid。\n\n**A：** 錯：未排除中點且方向錯\n\n**B：** 錯：保留已否定中點\n\n**C：** 錯：方向相反\n\n**D：** 正確：查左半部且排除中點",
      "optionExplanations": [
        "錯：未排除中點且方向錯",
        "錯：保留已否定中點",
        "錯：方向相反",
        "正確：查左半部且排除中點"
      ]
    },
    "DS-CH01-S02-Q09": {
      "markdown": "**提示：** 把每個函式節點算一次。\n\n**A：** 正確：C3=1+3+1=5\n\n**B：** 錯：不是只看深度\n\n**C：** 錯：漏計節點\n\n**D：** 錯：樹並非滿二元樹",
      "optionExplanations": [
        "正確：C3=1+3+1=5",
        "錯：不是只看深度",
        "錯：漏計節點",
        "錯：樹並非滿二元樹"
      ]
    },
    "DS-CH01-S02-Q10": {
      "markdown": "**提示：** 分開看輸出量、時間、深度。\n\n**A：** 錯：應恢復分支狀態\n\n**B：** 錯：需 2ⁿ−1\n\n**C：** 正確：n! 輸出各長 n\n\n**D：** 錯：深度為線性",
      "optionExplanations": [
        "錯：應恢復分支狀態",
        "錯：需 2ⁿ−1",
        "正確：n! 輸出各長 n",
        "錯：深度為線性"
      ]
    },
    "DS-CH01-S02-W03": {
      "markdown": "**提示：** 先處理會令下一步非法的輸入。\n\n```text\nfac(n):\n    require n >= 0 and integer\n    if n == 0: return 1\n    return n * fac(n-1)\ngcd(a,b):\n    require a >= 0 and b >= 0 and integer\n    if b == 0: return a\n    return gcd(b, a mod b)\n```\n\n階乘基底與公式 3 分；GCD 基底及先防除零 3 分；說明 n 減一、餘數小於正整數 b 3 分；說明 gcd(0,0) 是規格選擇且此程式回傳 0，1 分。"
    },
    "DS-CH01-S02-W04": {
      "markdown": "**提示：** 先說清楚每個遞迴式在計算什麼。\n\n①C0=C1=1，Cn=1+C(n−1)+C(n−2)，此處 C 計函式進入次數（3 分）；②T0=0，Tn=2T(n−1)+1，Tn=2ⁿ−1，此處 T 計移動（3 分）；③A(1,1)=3、A(1,2)=4、A(2,1)=6，A(2,2)=4+6=10（2 分）；④A(n,0)=$n+1$ 不是一般 C(n,0)=1，故不能直接當 C(n,m)（2 分）。最後兩項以 K10 暫定定義成立為條件。"
    },
    "DS-CH01-S03-E1301": {
      "markdown": "辨識線索是「只有資料，沒有操作」。依型態定義，還要補運算，例如 append(x) 加入數字、length() 查詢數量；再說明輸入輸出與行為。常見錯誤是把資料型態僅當作儲存格式。"
    },
    "DS-CH01-S03-E1302": {
      "markdown": "辨識線索是「行為相同、表示不同」。ADT 以抽象行為為準，因此可以。步驟：先確認兩者處理的是相同抽象物件，再確認操作契約、錯誤條件一致；最後才比較時間空間成本。常見錯誤是認為陣列與鏈結串列必定代表不同 ADT。"
    },
    "DS-CH01-S03-E1303": {
      "markdown": "pop(S) 接收 Stack；前置條件 S 非空；回傳元素型態 E；後置條件為原頂端被移除且回傳該元素，其餘元素次序不變。因為改變抽象狀態，具有 Transformer 角色。常見錯誤是遺漏空集合條件，或只寫函式名稱卻未定義效果。"
    },
    "DS-CH01-S03-E14": {
      "markdown": "辨識：介面語意與內部表示。方法：先訂抽象操作，再比較實作。步驟：push 把資料加入頂端、pop 移除頂端、top 查看頂端、保持 LIFO；容量管理與節點指標可以改變。常錯：把 ADT 直接等同某一種儲存結構。本題為延伸練習。"
    },
    "DS-CH01-S03-Q1301": {
      "markdown": "**提示：** 同時描述資料與行為\n\n**A：** 大小不足\n\n**B：** 包含兩要素\n\n**C：** 位址是表示細節\n\n**D：** 缺物件與行為",
      "optionExplanations": [
        "大小不足",
        "包含兩要素",
        "位址是表示細節",
        "缺物件與行為"
      ]
    },
    "DS-CH01-S03-Q1302": {
      "markdown": "**提示：** 找內部表示\n\n**A：** 是抽象行為\n\n**B：** 是操作效果\n\n**C：** 是契約\n\n**D：** 是儲存表示",
      "optionExplanations": [
        "是抽象行為",
        "是操作效果",
        "是契約",
        "是儲存表示"
      ]
    },
    "DS-CH01-S03-Q1303": {
      "markdown": "**提示：** 是否改變狀態\n\n**A：** 只查數量\n\n**B：** 改變狀態\n\n**C：** 建立實例\n\n**D：** 改變狀態",
      "optionExplanations": [
        "只查數量",
        "改變狀態",
        "建立實例",
        "改變狀態"
      ]
    },
    "DS-CH01-S03-Q1304": {
      "markdown": "**提示：** 未定義時不要猜\n\n**A：** 未必回傳 0\n\n**B：** 未必忽略\n\n**C：** 應訂明限制或錯誤行為\n\n**D：** 非必然當機",
      "optionExplanations": [
        "未必回傳 0",
        "未必忽略",
        "應訂明限制或錯誤行為",
        "非必然當機"
      ]
    },
    "DS-CH01-S03-Q1305": {
      "markdown": "**提示：** 行為與成本分開\n\n**A：** 同規格應一致\n\n**B：** 可因實作改變\n\n**C：** 同契約應一致\n\n**D：** 同契約應一致",
      "optionExplanations": [
        "同規格應一致",
        "可因實作改變",
        "同契約應一致",
        "同契約應一致"
      ]
    },
    "DS-CH01-S03-Q1306": {
      "markdown": "提示：先用有限序列表示 Queue，定義前端與尾端。\n\n參考規格：物件為有限序列 $(x_1,\\ldots,x_k)$；create() 建立空序列，是 Creator；enqueue(Q,x) 把 x 加到尾端，是 Transformer；dequeue(Q) 在 k>0 時移除並回傳 x₁，是 Transformer；front(Q) 在 k>0 時回傳 x₁ 而不修改，是 Observer；isEmpty(Q) 回傳 k=0 的真假值，是 Observer。空 Queue 的 dequeue/front 以前置條件排除，亦可另訂錯誤回傳契約，但不可含糊。\n\n評分：資料物件 2 分、FIFO 操作效果 3 分、角色分類 3 分、空佇列限制 2 分。不同一致且完整的契約可接受。常見錯誤為把 front 寫成移除元素。"
    },
    "DS-CH01-S03-Q1307": {
      "markdown": "提示：用由底到頂的序列逐步追蹤。\n\n狀態：[] → [3] → [3,8] → [3] → [3,5] → [3,5]；pop 回傳 8，top 回傳 5。此處 push 的回傳值未指定，不自行假定。陣列與鏈結串列若遵守相同契約，就維持相同抽象結果；成本與儲存配置可不同。\n\n評分：狀態 4 分、兩個回傳值 2 分、top 不修改 2 分、規格與實作區分 2 分。"
    },
    "DS-CH01-S04-E1401": {
      "markdown": "辨識為實測與漸近分析比較。單一實測無法排除機器、常數、資料及 n 的影響；須定義相同問題與成本模型，再比較 n 增長的需求。錯誤是把一次比較推成所有規模的結論。"
    },
    "DS-CH01-S04-E1402": {
      "markdown": "辨識為空間口徑題。先列新增變數，兩個固定大小變數給 $\\Theta(1)$；再加原有 n 元素輸入，得 $\\Theta(n)$。方法是分開輸入與輔助空間。錯誤是把迴圈執行 n 次當成配置 n 個變數。"
    },
    "DS-CH01-S04-E1403": {
      "markdown": "依序呼叫 n=3、2、1、0，返回 0、2、7、14。共四次呼叫，最深四層；一般 n 得 $n+1$ 層。方法是展開至基底，並在返回時加對應元素。錯誤是漏算基底或把原錯誤版的 list[0] 套進修正版。"
    },
    "DS-CH01-S04-E1404": {
      "markdown": "初始化 1、控制 5、累加 4、return 1，合計 11。由 $2n+3$ 得同樣結果。方法是區分本體與終止檢查；不要自行額外拆計 i++ 卻仍沿用原公式。"
    },
    "DS-CH01-S04-E1405": {
      "markdown": "外層 3；內層 2(3+1)=8；元素加法 6，合計 17。新配置輸出存 6 個元素；一般為 $\\Theta(rc)$。排除輸出時只需固定索引。錯誤是內層只算 c+1 次，沒有乘列數。"
    },
    "DS-CH01-S04-E1406": {
      "markdown": "$n\\ge 1$ 時，$2n\\le2n+3\\le5n$，上下常數分別取 2、5，因此 $\\Theta(n)$；又因 n≤n²，得 $2n+3\\le5n^2$，故 $O(n^2)$。辨識為界的證明，使用常數與門檻；錯誤是說 O 只能寫最緊上界。"
    },
    "DS-CH01-S04-Q1401": {
      "markdown": "**提示：** 加上失敗檢查\n\n**A：** 少算\n\n**B：** 只等於本體次數\n\n**C：** 一般不等於 2n\n\n**D：** n 次成功加一次失敗",
      "optionExplanations": [
        "少算",
        "只等於本體次數",
        "一般不等於 2n",
        "n 次成功加一次失敗"
      ]
    },
    "DS-CH01-S04-Q1402": {
      "markdown": "**提示：** 列額外配置\n\n**A：** 含輸入才是此階\n\n**B：** 只用固定變數\n\n**C：** 沒有平方配置\n\n**D：** 固定字長模型下不以數值決定",
      "optionExplanations": [
        "含輸入才是此階",
        "只用固定變數",
        "沒有平方配置",
        "固定字長模型下不以數值決定"
      ]
    },
    "DS-CH01-S04-Q1403": {
      "markdown": "**提示：** 深度乘每層空間\n\n**A：** 忽略堆疊\n\n**B：** 深度未減半\n\n**C：** ($n+1$) 個固定框架\n\n**D：** 沒有每層線性配置",
      "optionExplanations": [
        "忽略堆疊",
        "深度未減半",
        "($n+1$) 個固定框架",
        "沒有每層線性配置"
      ]
    },
    "DS-CH01-S04-Q1404": {
      "markdown": "**提示：** 三列逐項相加\n\n**A：** 正確展開\n\n**B：** 只算元素敘述\n\n**C：** 少算 r\n\n**D：** 忽略乘積項",
      "optionExplanations": [
        "正確展開",
        "只算元素敘述",
        "少算 r",
        "忽略乘積項"
      ]
    },
    "DS-CH01-S04-Q1405": {
      "markdown": "**提示：** 區分精確值與階\n\n**A：** 常數階不等於 1 byte\n\n**B：** 上界不是精確步數\n\n**C：** 單次實測不夠\n\n**D：** 有線性上下界",
      "optionExplanations": [
        "常數階不等於 1 byte",
        "上界不是精確步數",
        "單次實測不夠",
        "有線性上下界"
      ]
    },
    "DS-CH01-S04-Q1406": {
      "markdown": "提示：一路展開至 n=0，再從基底返回。\n\n原版回傳 rsum(list,2)=rsum(list,1)+6=rsum(list,0)+4+6=4+4+6=14；正確加總應為 10。基底讀 list[0] 造成多計，空輸入時亦可能無效讀取。修正為 if(n==0) return 0; 否則回傳 rsum(list,n-1)+list[n-1]。假設 $n\\ge 0$、輸入容量足夠；$T(n)=T(n-1)+\\Theta(1)$，故 $\\Theta(n)$；一般模型最深 $n+1$ 層，輔助空間 $\\Theta(n)$。\n\n評分：展開與 14 結果 2 分、指出兩種缺陷 2 分、修正 2 分、時間推導 2 分、空間理由 2 分。"
    },
    "DS-CH01-S04-Q1407": {
      "markdown": "提示：每一列都重新執行內層，連最後失敗檢查也算。\n\n外層 r+1，內層 r(c+1)，本體 rc，總和 $2rc+2r+1$。r=3,c=2 時為 19；逐項 4+9+6=19。$r,c\\ge 1$ 時時間 $\\Theta(rc)$；新輸出占 $\\Theta(rc)$，不計輸入輸出的工作空間 $\\Theta(1)$。c=0 時本體不執行，但外層及每列內層檢查仍有成本，總步數 2r+1，時間 $\\Theta(r+1)$，不能寫成 $\\Theta(rc)$=$\\Theta(0)$。\n\n評分：頻率 3 分、公式及數值 2 分、兩種空間口徑 3 分、零欄邊界 2 分。"
    },
    "DS-CH01-S05-Q15E1": {
      "markdown": "辨識：要求緊界，須夾住上下兩側。方法：對 $n\\ge1$，用 $n\\le n^2$、$1\\le n^2$。\n\n$$7n^2\\le7n^2+3n+5\\le(7+3+5)n^2=15n^2.$$\n\n取 $c_1=7,c_2=15,n_0=1$ 即符合定義。常見錯誤：只刪低次項而未寫可用常數。"
    },
    "DS-CH01-S05-Q15E2": {
      "markdown": "辨識：多項式帶負項，需要合法下界。當 $n\\ge1$，$2n\\le2n^3$，故 $4n^3-2n+1\\ge2n^3$；上界 $4n^3-2n+1\\le4n^3+1\\le5n^3$。取常數 2、5 與門檻 1。錯誤：用負項建立方向顛倒的不等式。"
    },
    "DS-CH01-S05-Q15E3": {
      "markdown": "辨識：嚴格較慢，用比值。$n/n^2=1/n\\to0$，所以成立。方法理由：有限比值可判上界，比值趨 0 才能判小 o。錯誤：把「不是下界」直接當作小 o，振盪函數可能反例。"
    },
    "DS-CH01-S05-Q15M1": {
      "markdown": "提示：先回顧 ds-k15a 的定義或計算方法。\n\n正解：B。\n\n- A：這是過強條件，並非大 O 定義。\n- B：正常數和統一門檻均固定，正是定義。\n- C：常數不能隨輸入規模改變。\n- D：必須在門檻後全部成立。",
      "optionExplanations": [
        "這是過強條件，並非大 O 定義。",
        "正常數和統一門檻均固定，正是定義。",
        "常數不能隨輸入規模改變。",
        "必須在門檻後全部成立。"
      ]
    },
    "DS-CH01-S05-Q15M2": {
      "markdown": "提示：先回顧 ds-k15a 的定義或計算方法。\n\n正解：C。\n\n- A：比值 1/n 最終有界。\n- B：n²/n=n 最終有正下界。\n- C：n²/n=n 無界，故錯誤。\n- D：$n\\ge 1$ 時介於 3n 與 4n。",
      "optionExplanations": [
        "比值 1/n 最終有界。",
        "n²/n=n 最終有正下界。",
        "n²/n=n 無界，故錯誤。",
        "$n\\ge 1$ 時介於 3n 與 4n。"
      ]
    },
    "DS-CH01-S05-Q15M3": {
      "markdown": "提示：先回顧 ds-k15b 的定義或計算方法。\n\n正解：D。\n\n- A：n=1 時不成立。\n- B：n=2 時不成立。\n- C：n=5 時不成立。\n- D：移項得 6≤n。",
      "optionExplanations": [
        "n=1 時不成立。",
        "n=2 時不成立。",
        "n=5 時不成立。",
        "移項得 6≤n。"
      ]
    },
    "DS-CH01-S05-Q15M4": {
      "markdown": "提示：先回顧 ds-k15c 的定義或計算方法。\n\n正解：A。\n\n- A：比值趨 0 即嚴格較慢。\n- B：無正常數下界。\n- C：反比無界。\n- D：無正常數下界。",
      "optionExplanations": [
        "比值趨 0 即嚴格較慢。",
        "無正常數下界。",
        "反比無界。",
        "無正常數下界。"
      ]
    },
    "DS-CH01-S05-Q15M5": {
      "markdown": "提示：先回顧 ds-k15c 的定義或計算方法。\n\n正解：C。\n\n- A：情況分類與界限不同。\n- B：任何指定情況的成本函數都可討論上界。\n- C：正確，先定函數再定界。\n- D：下界不限定最好情況。",
      "optionExplanations": [
        "情況分類與界限不同。",
        "任何指定情況的成本函數都可討論上界。",
        "正確，先定函數再定界。",
        "下界不限定最好情況。"
      ]
    },
    "DS-CH01-S05-Q15W1": {
      "markdown": "提示：找上下兩個正常數。\n\n參考解：對 $n\\ge1$，$5n^2\\le5n^2+2n+8\\le15n^2$。取 $c_1=5,c_2=15,n_0=1$。\n\n評分：下界 3 分、上界 4 分、常數與門檻及結論 3 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S05-Q15W2": {
      "markdown": "提示：分別看奇數與偶數子序列。\n\n參考解：$f/g$ 在偶數為 1、奇數為 $1/n$。比值不超過 1，故為 O；奇數子序列趨 0，沒有統一正常數下界，故不是 Omega；偶數子序列為 1，整體不趨 0，故不是小 o。\n\n評分：O 判斷 2 分、Omega 3 分、小 o 3 分、子序列論證 2 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S06-Q16E1": {
      "markdown": "辨識：三層範圍相依，不能直接相乘。先固定 $i,j$，內層做 $j$ 次；再加總 $j$：$\\sum_{j=1}^ij=i(i+1)/2$。最後\n$$\\sum_{i=1}^n\\frac{i(i+1)}2=\\frac12\\left[\\frac{n(n+1)(2n+1)}6+\\frac{n(n+1)}2\\right]=\\frac{n(n+1)(n+2)}6.$$\n緊界 $\\Theta(n^3)$。錯誤：求和上下限與程式不一致。"
    },
    "DS-CH01-S06-Q16E2": {
      "markdown": "辨識：規模反覆開根號。做 $k$ 次後為 $n^{1/2^k}$；停在 2 以下，等價於 $(\\log_2n)/2^k\\le1$。所以 $k=\\lceil\\log_2\\log_2n\\rceil$（對 $n>2$），總成本 $\\Theta(\\log\\log n)$。錯誤：把開根號當成除以 2。對實數規模採這一停止門檻，避免永遠到不了 1。"
    },
    "DS-CH01-S06-Q16E3": {
      "markdown": "辨識：每次只減 1，先展開。$T(n)=2^kT(n-k)+(2^k-1)$。令 $k=n-1$ 得 $T(n)=2^n-1$。為何如此：每次展開的常數工作形成等比級數。錯誤：把兩個子問題誤認成規模減半。"
    },
    "DS-CH01-S06-Q16M1": {
      "markdown": "提示：先回顧 ds-k16a 的定義或計算方法。\n\n正解：B。\n\n- A：這是方形範圍的計數。\n- B：各 i 有 i 次，加總得此值。\n- C：本題含對角線，不能少 n。\n- D：本題不是倍增結構。",
      "optionExplanations": [
        "這是方形範圍的計數。",
        "各 i 有 i 次，加總得此值。",
        "本題含對角線，不能少 n。",
        "本題不是倍增結構。"
      ]
    },
    "DS-CH01-S06-Q16M2": {
      "markdown": "提示：先回顧 ds-k16b 的定義或計算方法。\n\n正解：A。\n\n- A：正整數 n 反覆減半到 0 的精確次數。\n- B：每輪不是減 1。\n- C：這對應反覆開根號的量級。\n- D：不是分支遞迴。",
      "optionExplanations": [
        "正整數 n 反覆減半到 0 的精確次數。",
        "每輪不是減 1。",
        "這對應反覆開根號的量級。",
        "不是分支遞迴。"
      ]
    },
    "DS-CH01-S06-Q16M3": {
      "markdown": "提示：先回顧 ds-k16c 的定義或計算方法。\n\n正解：D。\n\n- A：忽略分支倍增。\n- B：沒有規模減半。\n- C：成本形成等比而非平方級。\n- D：精確式為 2^n−1。",
      "optionExplanations": [
        "忽略分支倍增。",
        "沒有規模減半。",
        "成本形成等比而非平方級。",
        "精確式為 2^n−1。"
      ]
    },
    "DS-CH01-S06-Q16M4": {
      "markdown": "提示：先回顧 ds-k16b 的定義或計算方法。\n\n正解：C。\n\n- A：單次縮小規模不等於總成本。\n- B：規模不是減半。\n- C：取 log 後每次減半。\n- D：深度仍隨 n 增長。",
      "optionExplanations": [
        "單次縮小規模不等於總成本。",
        "規模不是減半。",
        "取 log 後每次減半。",
        "深度仍隨 n 增長。"
      ]
    },
    "DS-CH01-S06-Q16M5": {
      "markdown": "提示：先回顧 ds-k16a 的定義或計算方法。\n\n正解：B。\n\n- A：需扣掉 i=j 的 k 個。\n- B：總共 k²，扣 k。\n- C：此為不分順序配對。\n- D：並非兩條線性列表相加。",
      "optionExplanations": [
        "需扣掉 i=j 的 k 個。",
        "總共 k²，扣 k。",
        "此為不分順序配對。",
        "並非兩條線性列表相加。"
      ]
    },
    "DS-CH01-S06-Q16W1": {
      "markdown": "提示：先固定 i，求 j 的總和。\n\n參考解：內層執行 j 次，總數為 $\\sum_{i=1}^n\\sum_{j=0}^{i^2-1}j=\\frac12\\sum_{i=1}^n(i^4-i^2)=\\Theta(n^5)$。上界用 n 個至多 n⁴ 的項；下界取後半約 n/2 個 i，每項為常數倍 n⁴。\n\n評分：和式 4 分、化簡 2 分、上下界或冪次求和說明 4 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S06-Q16W2": {
      "markdown": "提示：每層加上目前規模。\n\n參考解：展開到基底得 $1+2+\\cdots+n=n(n+1)/2$。對 $n\\ge1$ 介於 $n^2/2$ 與 $n^2$，因此為 $\\Theta(n^2)$。\n\n評分：展開及基底 3 分、公式 3 分、緊界理由 4 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S07-Q17E1": {
      "markdown": "辨識：固定比例分治。$a=4,b=2,d=2$，$n=O(n^{2-1})$，適用情況 1，答案 $\\Theta(n^2)$。遞迴樹第 $i$ 層成本 $4^i(n/2^i)=n2^i$；深度 $\\log_2n$，葉與逐層和同為二次量級。錯誤：只看每個節點成本而漏掉節點數。"
    },
    "DS-CH01-S07-Q17E2": {
      "markdown": "$d=1$，$f(n)=n^d\\log^2n$，以情況 2 的 $k=2$ 得 $\\Theta(n\\log^3n)$。辨識重點是多項式次數相同；錯誤是將 $\\log^2n$ 視為多項式級差距。"
    },
    "DS-CH01-S07-Q17E3": {
      "markdown": "$d=\\log_2 3<2$，選 $\\varepsilon=2-d>0$。再驗 $3f(n/2)=3n^2/4$，可取 $c=3/4$；情況 3 得 $\\Theta(n^2)$。常見錯誤：只比較次方而漏正則性。"
    },
    "DS-CH01-S07-Q17E4": {
      "markdown": "$d=3$，$f=n^3/\\log_3n$ 比 $n^3$ 小，卻無多項式差距，本稿三情況不能直接套。第 $i$ 層成本為 $n^3/(L-i)$，非基底層加總為 $n^3\\sum_{j=2}^{L}1/j=\\Theta(n^3\\log L)$；基底總成本 $\\Theta(n^3)$。因此 $\\Theta(n^3\\log\\log n)$。選遞迴樹是因為各層會形成調和級數。錯誤：硬套情況 1 或把 $k=-1$ 代入情況 2。"
    },
    "DS-CH01-S07-Q17M1": {
      "markdown": "提示：先回顧 ds-k17a 的定義或計算方法。\n\n正解：C。\n\n- A：a、b 固定。\n- B：a、b 固定。\n- C：a=n 隨規模變動。\n- D：a、b 固定。",
      "optionExplanations": [
        "a、b 固定。",
        "a、b 固定。",
        "a=n 隨規模變動。",
        "a、b 固定。"
      ]
    },
    "DS-CH01-S07-Q17M2": {
      "markdown": "提示：先回顧 ds-k17a 的定義或計算方法。\n\n正解：A。\n\n- A：臨界項 n^(log_4 2)=√n，情況 2。\n- B：漏掉同級累積的 log。\n- C：誤算臨界指數。\n- D：誤算臨界指數。",
      "optionExplanations": [
        "臨界項 n^(log_4 2)=√n，情況 2。",
        "漏掉同級累積的 log。",
        "誤算臨界指數。",
        "誤算臨界指數。"
      ]
    },
    "DS-CH01-S07-Q17M3": {
      "markdown": "提示：先回顧 ds-k17a 的定義或計算方法。\n\n正解：D。\n\n- A：葉層成本更大。\n- B：本層非臨界同級。\n- C：只有同級情況才加 log。\n- D：臨界 n³，本層有多項式差距。",
      "optionExplanations": [
        "葉層成本更大。",
        "本層非臨界同級。",
        "只有同級情況才加 log。",
        "臨界 n³，本層有多項式差距。"
      ]
    },
    "DS-CH01-S07-Q17M4": {
      "markdown": "提示：先回顧 ds-k17a 的定義或計算方法。\n\n正解：B。\n\n- A：未除以 2 的平方。\n- B：3(n/2)²/n²=3/4。\n- C：分支數不是 4。\n- D：將比值顛倒。",
      "optionExplanations": [
        "未除以 2 的平方。",
        "3(n/2)²/n²=3/4。",
        "分支數不是 4。",
        "將比值顛倒。"
      ]
    },
    "DS-CH01-S07-Q17M5": {
      "markdown": "提示：先回顧 ds-k17b 的定義或計算方法。\n\n正解：C。\n\n- A：a=27 是常數。\n- B：b=3>1。\n- C：臨界項 n³，差一個 log 不是多項式差距。\n- D：遞迴樹可形成調和和式。",
      "optionExplanations": [
        "a=27 是常數。",
        "b=3>1。",
        "臨界項 n³，差一個 log 不是多項式差距。",
        "遞迴樹可形成調和和式。"
      ]
    },
    "DS-CH01-S07-Q17W1": {
      "markdown": "提示：先算臨界次方，再算正則性比值。\n\n參考解：$d=\\log_4 3<1$；取 $\\varepsilon=(1-d)/2>0$，$n\\log n=\\Omega(n^{d+\\varepsilon})$。比值 $3f(n/4)/f(n)=\\frac34(1-\\log4/\\log n)\\le3/4$ 對充分大 n 成立。因此 $T(n)=\\Theta(n\\log n)$。\n\n評分：d 與差距 4 分、正則性 4 分、結論 2 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S07-Q17W2": {
      "markdown": "提示：同級帶一個 log。\n\n參考解：$d=2,k=1$，故 $\\Theta(n^2\\log^2n)$。若 $n=2^L$，第 i 層成本為 $n^2(L-i)$（log 取 2），非基底層和 $n^2\\sum_{j=1}^Lj=\\Theta(n^2L^2)$，葉成本 $\\Theta(n^2)$。\n\n評分：主定理條件 3 分、層成本 3 分、總和與結論 4 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S08-Q18E1": {
      "markdown": "先將 $4=2^2$，得 $(2^{\\log_2n})^2=n^2$。另令 $n=2^t$，其中 $t=\\log_2n>0$，得 $(2^t)^{1/t}=2$。方法理由：改成相同底數便能抵消指數。錯誤：忽略 $n=1$ 時分母為 0。"
    },
    "DS-CH01-S08-Q18E2": {
      "markdown": "辨識：等比項乘線性項，引用有限和公式。代入 $m=\\log_2n$，$2^m=n$，得 $2n\\log_2n-2n+2=\\Theta(n\\log n)$。一般 $n$ 若指定上限 $\\lfloor\\log_2n\\rfloor$，要用此整數值代回公式；精確式不再直接等於前述表達式，但階數不變。錯誤：未取整便以非整數當有限和上限。"
    },
    "DS-CH01-S08-Q18E3": {
      "markdown": "中項為 $n^{\\log_2\\log_2n}$，其指數最終超過任何固定常數，故比 $n^2$ 快。比較它與 $2^n$，取自然對數後，中項為 $\\Theta(\\log n\\log\\log n)=o(n)$，而後者為 $n\\ln2$，故中項仍較慢。答案依題目列出順序由慢至快。錯誤：看到變動指數就當作固定底數指數成長。"
    },
    "DS-CH01-S08-Q18M1": {
      "markdown": "提示：先回顧 ds-k18a 的定義或計算方法。\n\n正解：D。\n\n- A：此為雙重對數。\n- B：此為真數平方後取 log。\n- C：此等於 log(n²)。\n- D：上標作用在整個對數值。",
      "optionExplanations": [
        "此為雙重對數。",
        "此為真數平方後取 log。",
        "此等於 log(n²)。",
        "上標作用在整個對數值。"
      ]
    },
    "DS-CH01-S08-Q18M2": {
      "markdown": "提示：先回顧 ds-k18a 的定義或計算方法。\n\n正解：A。\n\n- A：4=2²，交換指數可得 n²。\n- B：指數不可改成乘法。\n- C：底數 4 的指數相對 2 是 2。\n- D：並非取對數的式子。",
      "optionExplanations": [
        "4=2²，交換指數可得 n²。",
        "指數不可改成乘法。",
        "底數 4 的指數相對 2 是 2。",
        "並非取對數的式子。"
      ]
    },
    "DS-CH01-S08-Q18M3": {
      "markdown": "提示：先回顧 ds-k18b 的定義或計算方法。\n\n正解：C。\n\n- A：僅保留最後一項並非精確和。\n- B：此為沒有 k 的等比和。\n- C：有限等比和微分再乘 x 得此式。\n- D：此為 k 的和。",
      "optionExplanations": [
        "僅保留最後一項並非精確和。",
        "此為沒有 k 的等比和。",
        "有限等比和微分再乘 x 得此式。",
        "此為 k 的和。"
      ]
    },
    "DS-CH01-S08-Q18M4": {
      "markdown": "提示：先回顧 ds-k18c 的定義或計算方法。\n\n正解：B。\n\n- A：階乘最終快於固定底數指數。\n- B：由 Stirling 公式成立。\n- C：將最大與最小顛倒。\n- D：n^n 比固定底數指數快。",
      "optionExplanations": [
        "階乘最終快於固定底數指數。",
        "由 Stirling 公式成立。",
        "將最大與最小顛倒。",
        "n^n 比固定底數指數快。"
      ]
    },
    "DS-CH01-S08-Q18M5": {
      "markdown": "提示：先回顧 ds-k18a 的定義或計算方法。\n\n正解：D。\n\n- A：令 n=2^t 後結果不是 1。\n- B：指數不是 1。\n- C：指數抵消後不含 n。\n- D：(2^t)^(1/t)=2。",
      "optionExplanations": [
        "令 n=2^t 後結果不是 1。",
        "指數不是 1。",
        "指數抵消後不含 n。",
        "(2^t)^(1/t)=2。"
      ]
    },
    "DS-CH01-S08-Q18W1": {
      "markdown": "提示：先微分，再乘 x。\n\n參考解：令 $F(x)=\\sum_{k=0}^mx^k=(x^{m+1}-1)/(x-1)$。有限項可逐項微分，$xF\\prime(x)=\\sum_{k=0}^mkx^k$。商數法則得 $F\\prime(x)=[(m+1)x^m(x-1)-(x^{m+1}-1)]/(x-1)^2$。代 x=2 再乘 2，得 $(m-1)2^{m+1}+2$。\n\n評分：等比和 2 分、微分 4 分、乘 x 與代值 4 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S08-Q18W2": {
      "markdown": "提示：對數可先換成新變數。\n\n參考解：依列出順序即由慢到快。令 $t=\\log n$，則 $\\log t=o(\\sqrt t)$；固定對數次方慢於任意正次多項式，故 $\\log^2n=o(\\sqrt n)$。中間 $\\sqrt{\\log n}=o(\\log^2n)$ 可直接看比值。\n\n評分：完整排序 4 分、兩項理由各 3 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S09-Q19E1": {
      "markdown": "每一非基底層總成本均為 $n$，有 $k=\\log_2n$ 層；葉節點共 $n$ 個，故猜 $T(n)=n\\log_2n+tn$。基底 $n=1$ 右側為 $t$。歸納：假設較小規模公式成立，代入\n$$2[(n/2)\\log_2(n/2)+t(n/2)]+n=n\\log_2n+tn.$$\n所以精確式成立，也立刻有 $\\Theta(n\\log n)$。錯誤：上界只猜 $cn\\log_2n$ 卻要求它在 $n=1$ 涵蓋正成本。"
    },
    "DS-CH01-S09-Q19E2": {
      "markdown": "上界用強歸納。令 $m=\\lfloor n/2\\rfloor\\le n/2$，猜 $T(n)\\le cn\\log_2n+dn$，取 $c\\ge1,d\\ge t$。因 $x\\log_2x$ 對 $x\\ge1$ 遞增，\n$$T(n)\\le2cm\\log_2m+2dm+n\\le cn\\log_2(n/2)+dn+n\\le cn\\log_2n+dn.$$\n基底成立。下界用遞迴樹：深度 $i$ 的子問題大小為 $\\lfloor n/2^i\\rfloor$，共 $2^i$ 個；若 $2^i\\le n/2$，該層成本至少 $n-2^i\\ge n/2$，且規模至少 2。這樣的非基底層有 $\\Theta(\\log n)$ 層，因此成本至少 $\\Omega(n\\log n)$。合得緊界。錯誤：直接聲稱每層恰為 $n$，忽略奇數的取整損失。"
    },
    "DS-CH01-S09-Q19E3": {
      "markdown": "辨識：兩個上界串接。取兩個門檻的最大值，在該門檻後 $f\\le c_1c_2h$。因 $c_1c_2$ 仍為正常數，符合大 O 定義。錯誤：未統一門檻，或將大 O 錯當作對稱關係。"
    },
    "DS-CH01-S09-Q19M1": {
      "markdown": "提示：先回顧 ds-k19a 的定義或計算方法。\n\n正解：C。\n\n- A：猜測並未保證全部規模成立。\n- B：有限驗證不能證明漸近命題。\n- C：正確，需建立普遍論證。\n- D：實驗可幫猜測，不能取代證明。",
      "optionExplanations": [
        "猜測並未保證全部規模成立。",
        "有限驗證不能證明漸近命題。",
        "正確，需建立普遍論證。",
        "實驗可幫猜測，不能取代證明。"
      ]
    },
    "DS-CH01-S09-Q19M2": {
      "markdown": "提示：先回顧 ds-k19a 的定義或計算方法。\n\n正解：A。\n\n- A：需另選基底或補 dn。\n- B：c 可選足夠大的常數，但乘 0 仍為 0。\n- C：log 常見於遞迴分析。\n- D：許多遞迴可用歸納。",
      "optionExplanations": [
        "需另選基底或補 dn。",
        "c 可選足夠大的常數，但乘 0 仍為 0。",
        "log 常見於遞迴分析。",
        "許多遞迴可用歸納。"
      ]
    },
    "DS-CH01-S09-Q19M3": {
      "markdown": "提示：先回顧 ds-k19b 的定義或計算方法。\n\n正解：B。\n\n- A：大 O 不對稱。\n- B：交換上下界即得到此式。\n- C：緊界需要額外下界。\n- D：小 o 是更強條件。",
      "optionExplanations": [
        "大 O 不對稱。",
        "交換上下界即得到此式。",
        "緊界需要額外下界。",
        "小 o 是更強條件。"
      ]
    },
    "DS-CH01-S09-Q19M4": {
      "markdown": "提示：先回顧 ds-k19b 的定義或計算方法。\n\n正解：D。\n\n- A：方向相反。\n- B：未提供下界。\n- C：比值不一定趨 0。\n- D：相乘常數並取門檻最大值。",
      "optionExplanations": [
        "方向相反。",
        "未提供下界。",
        "比值不一定趨 0。",
        "相乘常數並取門檻最大值。"
      ]
    },
    "DS-CH01-S09-Q19M5": {
      "markdown": "提示：先回顧 ds-k19a 的定義或計算方法。\n\n正解：C。\n\n- A：奇數會造成損失。\n- B：仍須驗基底。\n- C：此法可嚴格證明 n log n 緊界。\n- D：取整不會在此式把階數改成線性。",
      "optionExplanations": [
        "奇數會造成損失。",
        "仍須驗基底。",
        "此法可嚴格證明 n log n 緊界。",
        "取整不會在此式把階數改成線性。"
      ]
    },
    "DS-CH01-S09-Q19W1": {
      "markdown": "提示：先寫包含基底的線性項。\n\n參考解：猜 $T(n)=n\\log_2n+tn$。基底 n=1 得 t；假設 n/2 成立，代入 $2[(n/2)(\\log_2n-1)+tn/2]+n=n\\log_2n+tn$。由歸納得精確式與 $\\Theta(n\\log n)$。\n\n評分：基底 2 分、假設 2 分、代入 4 分、結論 2 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "DS-CH01-S09-Q19W2": {
      "markdown": "提示：常數相乘，門檻取最大。\n\n參考解：若門檻後 $f\\le c_1g$、$g\\le c_2h$，則取兩門檻最大值，有 $f\\le c_1c_2h$，故 $f=O(h)$。例 $n=O(n^2)$，但 $n^2/n=n$ 無界，所以 $n^2\\ne O(n)$。\n\n評分：定義與門檻 3 分、串接 3 分、例子及反方向理由 4 分。\n\n常見錯誤：未交代適用條件、只寫最後階數或省略推導。自評：答對（結論與主要推導正確）／部分正確（方法可用但有缺步或計算錯）／不會（尚不能選擇方法）。"
    },
    "LA-CH02-S01-EX001": {
      "markdown": "辨識：二階直接用 $ad-bc$。$1\\cdot4-2\\cdot3=-2$。提示：先把兩個乘積算完。常錯：交換兩項順序。"
    },
    "LA-CH02-S01-EX002": {
      "markdown": "辨識：二階直接用 $ad-bc$。$(-7)6-4(-3)=-42+12=-30$。提示：先把兩個乘積算完，注意減去負數。常錯：漏寫括號或負號。"
    },
    "LA-CH02-S01-EX003": {
      "markdown": "辨識：第二列固定、第一列是線性組合，因此用單列線性。$\\det[2u-v;w]=2\\det[u;w]-\\det[v;w]=2(3)-(-2)=8$。提示：先拆成兩個行列式。常錯：把負係數漏掉，或把這個性質誤用於整個矩陣相加。"
    },
    "LA-CH02-S01-EX004": {
      "markdown": "單列倍數得 $\\det(B)=3(-2)=-6$；兩列都乘3得 $\\det(3A)=3^2(-2)=-18$。提示：數一共有幾列被乘3。常錯：整體縮放只提出一次。"
    },
    "LA-CH02-S01-EX005": {
      "markdown": "第一列為第二列兩倍，所以行列式為0；直接算為 $6\\cdot4-8\\cdot3=0$。辨識比例列後可直接判斷。"
    },
    "LA-CH02-S01-Q101": {
      "markdown": "**提示：** 用ad−bc\n\nA=5誤把負乘積當正；B=−11是把正確結果反號；C：8−(−3)=11；D=−5也不符兩個乘積相減。",
      "optionExplanations": [
        "5誤把負乘積當正",
        "−11是把正確結果反號",
        "8−(−3)=11",
        "−5也不符兩個乘積相減。"
      ]
    },
    "LA-CH02-S01-Q102": {
      "markdown": "**提示：** 兩列都乘2\n\nA：$2^2\\cdot5=20$；B只提出一次2；C忽略縮放；D誤把原行列式平方。",
      "optionExplanations": [
        "$2^2\\cdot5=20$",
        "只提出一次2",
        "忽略縮放",
        "誤把原行列式平方。"
      ]
    },
    "LA-CH02-S01-Q103": {
      "markdown": "**提示：** 固定第二列\n\nA把減法作加法；B反轉相減結果；C未依係數組合；D：4−3(1)=1。",
      "optionExplanations": [
        "把減法作加法",
        "反轉相減結果",
        "未依係數組合",
        "4−3(1)=1。"
      ]
    },
    "LA-CH02-S01-Q104": {
      "markdown": "**提示：** 看比例列\n\nA為1；B第一列是第二列兩倍，為0；C為−1；D為−1。",
      "optionExplanations": [
        "為1",
        "第一列是第二列兩倍，為0",
        "為−1",
        "為−1。"
      ]
    },
    "LA-CH02-S01-Q105": {
      "markdown": "**提示：** 留意「固定」\n\nA非方陣不適用；B零行列式不代表零矩陣，104的B即反例；C為單列線性；D以兩個$I_2$反駁。",
      "optionExplanations": [
        "非方陣不適用",
        "零行列式不代表零矩陣，104的B即反例",
        "為單列線性",
        "以兩個$I_2$反駁。"
      ]
    },
    "LA-CH02-S01-Q106": {
      "markdown": "提示：先求原行列式，再辨識縮放列數。$\\det A=(-2)1-3(4)=-14$；只第二列乘−2，得28；整體乘−2，得 $(-2)^2(-14)=-56$。配分：原式及計算4分、單列3分、整體3分。常錯：整體乘−2仍只乘一次。"
    },
    "LA-CH02-S01-Q107": {
      "markdown": "提示：把 $u,v,w$ 寫成兩個座標。設 $u=(a,b),v=(c,d),w=(e,f)$，左邊 $=(a+kc)f-(b+kd)e=af-be+k(cf-de)$，即右邊。取 $A=B=I_2$，左4右2。配分：設符號2分、用二階定義2分、正確分配合併3分、反例及兩側計算3分。只寫公式未推導不得拿證明部分滿分。"
    },
    "LA-CH02-S02-EX006": {
      "markdown": "辨識：題目分別問矩陣與數值，須分步。刪第一列、第二行得 $A_{12}=\\begin{bmatrix}0&5\\\\1&6\\end{bmatrix}$；$M_{12}=0\\cdot6-5\\cdot1=-5$；$C_{12}=(-1)^3(-5)=5$。提示：先刪除，再取行列式。常錯：把 $M_{12}$ 也乘棋盤符號。"
    },
    "LA-CH02-S02-EX007": {
      "markdown": "辨識：第一列有0，沿它展開。$\\det A=0-1[(-2)4-(-5)4]+3[(-2)(-4)-(-3)4]=-12+60=48$。提示：中間項的棋盤符號為負。常錯：子式的數值負號與棋盤符號混淆。"
    },
    "LA-CH02-S02-EX008": {
      "markdown": "辨識：第一列有三個0；先提出第一個元素2，得到 $\\begin{vmatrix}3&4&0\\\\0&5&0\\\\1&0&-1\\end{vmatrix}$。再沿第三行（縱向）展開，只有位置 $(3,3)$ 的 $-1$：原式 $=2(-1)\\begin{vmatrix}3&4\\\\0&5\\end{vmatrix}=-30$。提示：縮階後重新確認索引。常錯：沿用原矩陣索引判斷新子矩陣的符號。"
    },
    "LA-CH02-S02-EX009": {
      "markdown": "轉置不改值，為2；三階每列乘 $-1$，故 $\\det(-A)=(-1)^3(2)=-2$。取 $A=B=I_2$，$\\det(A+B)=4\\ne2=\\det A+\\det B$。提示：先辨認階數與運算。"
    },
    "LA-CH02-S02-EX010": {
      "markdown": "下三角，雖左下有5仍可乘主對角，$2(-1)4=-8$。提示：先檢查完整零區域，不能以一個左下非零數否定所有三角結構。"
    },
    "LA-CH02-S02-EX011": {
      "markdown": "辨識：元素來自第一列，餘因子來自第二列，屬異列配對。$C_{21}=-12,C_{22}=3,C_{23}=2$，故 $1(-12)+2(3)+3(2)=0$。也可把第二列換第一列，形成重複列後沿第二列展開。提示：區分元素與餘因子的列索引。常錯：誤認為任意配對都等於原行列式。"
    },
    "LA-CH02-S02-EX012": {
      "markdown": "逐列微分得 $\\begin{vmatrix}1&2x\\\\1&3x\\end{vmatrix}+\\begin{vmatrix}x&x^2\\\\0&3\\end{vmatrix}=x+3x=4x$。驗算 $W=3x^2-x^2=2x^2$，故 $W'=4x$。提示：每次只動一列。常錯：只算 $\\det(A')=3$。"
    },
    "LA-CH02-S02-EX013": {
      "markdown": "第一列微分等於第二列，第二列微分等於第三列，因此前兩項為0；最後一列微分為零列，第三項也為0，故 $W'=0$。也可由三角矩陣 $W=2$ 驗證。常錯：把此結論誤記成所有函數行列式只微分最後一列。"
    },
    "LA-CH02-S02-Q201": {
      "markdown": "**提示：** 棋盤符號\n\nA漏掉$(-1)^5$；B：$(-1)^5(-4)=4$；C無零的依據；D只有符號，沒乘子式。",
      "optionExplanations": [
        "漏掉$(-1)^5$",
        "$(-1)^5(-4)=4$",
        "無零的依據",
        "只有符號，沒乘子式。"
      ]
    },
    "LA-CH02-S02-Q202": {
      "markdown": "**提示：** 確認上三角\n\nA漏負號；B把對角相加；C只取單一元素；D為$(-2)3(4)=-24$。",
      "optionExplanations": [
        "漏負號",
        "把對角相加",
        "只取單一元素",
        "為$(-2)3(4)=-24$。"
      ]
    },
    "LA-CH02-S02-Q203": {
      "markdown": "**提示：** 比較非零項數\n\nA只有一個非零，僅一項；B有三個；C有三個；D有三個。第三行（縱向）也只有一個非零，但未列為選項，故仍為單選。",
      "optionExplanations": [
        "只有一個非零，僅一項",
        "有三個",
        "有三個",
        "有三個。第三行（縱向）也只有一個非零，但未列為選項，故仍為單選。"
      ]
    },
    "LA-CH02-S02-Q204": {
      "markdown": "**提示：** 分清轉置與縮放\n\nA三階應變號，取$I_3$即反例；B異列配對為0，取$I_3$可否定；C轉置性質；D僅三角等特殊條件可直接使用。",
      "optionExplanations": [
        "三階應變號，取$I_3$即反例",
        "異列配對為0，取$I_3$可否定",
        "轉置性質",
        "僅三角等特殊條件可直接使用。"
      ]
    },
    "LA-CH02-S02-Q205": {
      "markdown": "**提示：** 可先展開驗算\n\nA漏一個微分項；B因$W=x^2-x^2=0$故導數0；C把元素全微分後取行列式得到2，方法錯；D為原來的一個乘積，非導數。",
      "optionExplanations": [
        "漏一個微分項",
        "因$W=x^2-x^2=0$故導數0",
        "把元素全微分後取行列式得到2，方法錯",
        "為原來的一個乘積，非導數。"
      ]
    },
    "LA-CH02-S02-Q206": {
      "markdown": "提示：第二列第2、3位置非零。$M_{22}=\\begin{vmatrix}1&0\\\\2&5\\end{vmatrix}=5$，$C_{22}=5$；$M_{23}=\\begin{vmatrix}1&2\\\\2&0\\end{vmatrix}=-4$，$C_{23}=-M_{23}=4$；行列式 $=3C_{22}+4C_{23}=15+16=31$。配分：兩個子矩陣各2分、兩餘因子各1分、展開保留原元素2分、答案2分。常錯：把$4C_{23}$再乘負號。"
    },
    "LA-CH02-S02-Q207": {
      "markdown": "提示：先寫三個行列式，再看重複列。逐列微分得到：第一項列為 $(f',f',f'')$；第二項為 $(f,f'',f'')$；第三項為 $(f,f',f''')$。前兩項各有重複列，為0，故剩第三項。代入 $1,x,x^2$，原行列式是上三角、值2，其導數0；第三項最後一列全0，亦得0。配分：三項寫完整3分、兩個消去原因各2分、保留項1分、數值驗證2分。常錯：只背結論，沒有說明特殊結構。"
    },
    "LA-CH02-S03-E01": {
      "markdown": "- 辨識／方法：第二列是第一列的 2 倍，直接使用相依列零值性質。\n- 提示：比較前兩列對應元素。\n- 答案：行列式為 0，不可逆。\n- 步驟：$R_2=2R_1$，故列相依，$\\det A=0$，由可逆性等價條件得不可逆。\n- 易錯：非零矩陣仍可能行列式為 0。"
    },
    "LA-CH02-S03-E02": {
      "markdown": "- 辨識／方法：第一個樞紐是 0，先交換再消去。\n- 提示：將第一、二列互換。\n- 答案：$-7$。\n- 步驟：交換後 $B=\\begin{bmatrix}1&1&0\\\\0&2&1\\\\2&3&4\\end{bmatrix}$，$\\det B=-\\det A$。做 $R_3\\leftarrow R_3-2R_1$ 得第三列 $(0,1,4)$；再做 $R_3\\leftarrow R_3-\\tfrac12R_2$ 得 $(0,0,7/2)$。兩步均不變，故 $\\det B=1\\cdot2\\cdot7/2=7$，$\\det A=-7$。\n- 易錯：交換的負號忘記補回；誤以為減半倍就要把整個行列式除 2。"
    },
    "LA-CH02-S03-E03": {
      "markdown": "- 辨識／方法：只有第一列含 $t$，可按列線性拆解。\n- 提示：第一列為 $(1,2)+t(1,3)$。\n- 答案：$-3-7t$。\n- 步驟：$D(t)=\\det\\begin{bmatrix}1&2\\\\4&5\\end{bmatrix}+t\\det\\begin{bmatrix}1&3\\\\4&5\\end{bmatrix}=(5-8)+t(5-12)$。固定的第二列在兩項中都保留，因此不是兩個完整矩陣相加的行列式加法規則。\n- 易錯：第二項也把第二列乘 $t$，會多算一次係數。"
    },
    "LA-CH02-S03-E04": {
      "markdown": "- 辨識／方法：先求同一列餘因子，再比較同位與錯位展開。\n- 提示：刪除第二列，按 $-,+,-$ 的符號計算。\n- 答案：$(K_{21},K_{22},K_{23})=(-2,1,4)$；兩個和式依序為 $0,7$。\n- 步驟：$K_{21}=-\\det\\begin{bmatrix}2&0\\\\0&1\\end{bmatrix}=-2$；$K_{22}=\\det\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}=1$；$K_{23}=-\\det\\begin{bmatrix}1&2\\\\2&0\\end{bmatrix}=4$。錯位和為 $1(-2)+2(1)+0(4)=0$，同位和為 $0(-2)+3(1)+1(4)=7=\\det A$。\n- 易錯：忘記餘因子帶正負號，或把 $K_{2j}$ 寫成 $K_{j2}$。"
    },
    "LA-CH02-S03-E05": {
      "markdown": "- 辨識／方法：倍數、反矩陣、轉置、冪各處理一次。\n- 提示：最外層的 2 乘遍三列。\n- 答案：$-4$。\n- 步驟：$2^3\\det((A^{-1})^T)(\\det B)^3=8\\cdot\\tfrac12\\cdot(-1)^3=-4$。\n- 易錯：把 $2^3$ 寫成 2；把倒數忘掉。"
    },
    "LA-CH02-S03-E06": {
      "markdown": "- 辨識／方法：參數可逆性轉成行列式零點。\n- 提示：先展開二階行列式，再因式分解。\n- 答案：$t=-1,2$ 時不可逆。\n- 步驟：$\\det A=t(t-1)-2=t^2-t-2=(t-2)(t+1)$。行列式為 0 恰在兩個根，其餘 $t$ 可逆。\n- 易錯：將零點誤報為可逆參數。"
    },
    "LA-CH02-S03-E07": {
      "markdown": "- 辨識／方法：把 $A^T=-A$ 同時套入轉置與倍數性質。\n- 提示：$\\det(-A)=(-1)^n\\det A$。\n- 答案與步驟：$\\det A=\\det A^T=\\det(-A)=(-1)^n\\det A=-\\det A$；奇數條件用於倒數第二步。故 $2\\det A=0$；實數上 2 非零，$\\det A=0$，不可逆。\n- 易錯：沒有說明奇數階、或把 $\\det(-A)$ 一概當成 $-\\det A$。"
    },
    "LA-CH02-S03-E08": {
      "markdown": "- 辨識／方法：追蹤每個運算的乘數。\n- 提示：最後加倍數不造成新乘數。\n- 答案：$\\det U=-18$；對角線乘積同為 $-18$。\n- 步驟：$6\\to-6\\to-18\\to-18$。若已知 $\\det U$ 求原值，應除以 $-3$。\n- 易錯：把「加 5 倍」誤認成行列式乘 5。"
    },
    "LA-CH02-S03-E09": {
      "markdown": "- 辨識／方法：左上角對角矩陣可逆，Schur 補只剩一階。\n- 提示：$P^{-1}=\\operatorname{diag}(1/2,1/3)$。\n- 答案：17。\n- 步驟：$P=\\operatorname{diag}(2,3),Q=(1,1)^T,R=(1,2),S=4$。$RP^{-1}Q=1/2+2/3=7/6$，Schur 補為 $17/6$；$\\det M=6\\cdot17/6=17$。\n- 易錯：把乘法順序換掉，或忘記再乘 $\\det P$。"
    },
    "LA-CH02-S03-E10": {
      "markdown": "- 辨識／方法：左上與左下區塊皆為對角矩陣，可交換。\n- 提示：先確認 $PR=RP$，再算 $PS-RQ$。\n- 答案：16。\n- 步驟：四個區塊皆為二階，$PR=RP$。$PS-RQ=\\operatorname{diag}(5,12)-\\operatorname{diag}(3,4)=\\operatorname{diag}(2,8)$，行列式為 16。\n- 易錯：認為任意分塊矩陣皆可套二階純量公式。"
    },
    "LA-CH02-S03-E11": {
      "markdown": "- 辨識／方法：左右對角區塊相同、另外兩區塊也相同。\n- 提示：分別求 $A+B$ 與 $A-B$。\n- 答案：24。\n- 步驟：$A+B=\\operatorname{diag}(3,4)$，$A-B=\\operatorname{diag}(1,2)$，故為 $(3\\cdot4)(1\\cdot2)=24$。\n- 易錯：右側是行列式乘積，不是行列式差，也不需檢查可交換。"
    },
    "LA-CH02-S03-E12": {
      "markdown": "- 辨識／方法：$A$ 可逆，提出 $A$ 將加法轉成乘法。\n- 提示：檢查 $I+BA^{-1}$ 的第二個對角元素。\n- 答案：所有 $t$ 均不可逆。\n- 步驟：$BA^{-1}=\\operatorname{diag}(t,-1)$，$I+BA^{-1}=\\operatorname{diag}(1+t,0)$ 永遠不可逆，故 $A+B$ 亦然。和可逆的反例取 $\\operatorname{diag}(1,0)$、$\\operatorname{diag}(0,1)$，各自不可逆、相加為 $I_2$。\n- 易錯：把乘積的可逆條件套到加法。"
    },
    "LA-CH02-S03-E13": {
      "markdown": "- 辨識／方法：每列呈現 $1,x_i,x_i^2$。\n- 提示：按 $i<j$ 列出三個差。\n- 答案：6；交換前兩列後為 $-6$。\n- 步驟：$x_1=1,x_2=2,x_3=4$，故 $(2-1)(4-1)(4-2)=6$；交換一次變號。\n- 易錯：將所有差倒過來卻漏算符號。"
    },
    "LA-CH02-S03-E14": {
      "markdown": "- 辨識／方法：三對角稀疏結構適合沿第一列建立二階遞迴。\n- 提示：副對角項造成 $-5\\cdot5$。\n- 答案：$D_n=(n+1)5^n$。\n- 步驟：$D_0=1,D_1=10$，$D_n=10D_{n-1}-25D_{n-2}$，並可驗 $D_2=100-25=75$。特徵方程 $(r-5)^2=0$，令 $D_n=(u+vn)5^n$。由 $D_0=1$ 得 $u=1$，由 $10=(1+v)5$ 得 $v=1$。故得閉式，代回初值與遞迴皆成立。\n- 易錯：重根只寫 $u5^n$ 而漏掉 $vn5^n$。"
    },
    "LA-CH02-S03-Q01": {
      "markdown": "**提示：** 整個四階矩陣乘常數，要取四次方。\n\nA 的 6 漏掉階數；B 正確，$(-2)^4(-3)=-48$；C 忽略原行列式的負號；D 的 $-6$ 也沒有依四次方計算。",
      "optionExplanations": [
        "的 6 漏掉階數",
        "正確，$(-2)^4(-3)=-48$",
        "忽略原行列式的負號",
        "的 $-6$ 也沒有依四次方計算。"
      ]
    },
    "LA-CH02-S03-Q02": {
      "markdown": "**提示：** 乘法可拆；一般加法不可拆。\n\nA 錯，$A=B=I_2$ 就有 $4\\ne2$；B 錯，$I_2$ 與 $\\operatorname{diag}(2,1)$ 列等價但行列式為 1、2；C 正確，都等於 $\\det A\\det B$；D 錯，$I_2$ 與 $\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ 不同，但行列式都為 1。",
      "optionExplanations": [
        "錯，$A=B=I_2$ 就有 $4\\ne2$",
        "錯，$I_2$ 與 $\\operatorname{diag}(2,1)$ 列等價但行列式為 1、2",
        "正確，都等於 $\\det A\\det B$",
        "錯，$I_2$ 與 $\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ 不同，但行列式都為 1。"
      ]
    },
    "LA-CH02-S03-Q03": {
      "markdown": "**提示：** 比較元素列索引與餘因子列索引。\n\nA、B 是同列正常展開，均為 $\\det A$；C 是同一行的正常展開，也為 $\\det A$。取 $A=I_3$ 時這三者為 1，故不是必為 0。D 是第 1 列元素搭配第 2 列餘因子，錯位展開必為 0。",
      "optionExplanations": [
        "同列正常展開，等於 $\\det A$；取 $A=I_3$ 時為1。",
        "同列正常展開，等於 $\\det A$；取 $A=I_3$ 時為1。",
        "同一行的正常展開，也等於 $\\det A$，不必為0。",
        "第1列元素搭配第2列餘因子，錯位展開必為0。"
      ]
    },
    "LA-CH02-S03-Q04": {
      "markdown": "**提示：** 先把左下角消為 0。\n\nA 是 Schur 補公式；B 乘法順序錯且有時大小不相容，例如 $P$ 二階、$S$ 一階時 $QP^{-1}$ 根本無法相乘；C 錯，取 $Q=R=0,P=I_2,S=[1]$ 時左側為 1、右側為 2；D 缺交換與同階條件。即使全部區塊同階也可能錯：取 $P=\\operatorname{diag}(1,2)$、$R=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$、$Q=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$、$S=I_2$。此時 $RP^{-1}Q=\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}$，$\\det M=0$；$PS-RQ=\\operatorname{diag}(1,1)$，行列式為 1，兩者不同。",
      "optionExplanations": [
        "是 Schur 補公式",
        "乘法順序錯且有時大小不相容，例如 $P$ 二階、$S$ 一階時 $QP^{-1}$ 根本無法相乘",
        "錯，取 $Q=R=0,P=I_2,S=[1]$ 時左側為 1、右側為 2",
        "缺交換與同階條件。即使全部區塊同階也可能錯：取 $P=\\operatorname{diag}(1,2)$、$R=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$、$Q=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$、$S=I_2$。此時 $RP^{-1}Q=\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}$，$\\det M=0$；$PS-RQ=\\operatorname{diag}(1,1)$，行列式為 1，兩者不同。"
      ]
    },
    "LA-CH02-S03-Q05": {
      "markdown": "**提示：** 第二項的餘因子展開符號為負。\n\nA 錯，$D_2=3\\cdot3-1=8$；B 第二項符號錯；C 正確，$a=3,b=c=1$；D 忽略副對角線貢獻，$n=2$ 時 $8\\ne9$。",
      "optionExplanations": [
        "錯，$D_2=3\\cdot3-1=8$",
        "第二項符號錯",
        "正確，$a=3,b=c=1$",
        "忽略副對角線貢獻，$n=2$ 時 $8\\ne9$。"
      ]
    },
    "LA-CH02-S03-H01": {
      "markdown": "提示：先消去第二列的第一個元素，再消第三列。\n\n參考答案：$R_2\\leftarrow R_2-2R_1$ 得 $\\begin{bmatrix}1&2&1\\\\0&1&1\\\\0&1&2\\end{bmatrix}$；$R_3\\leftarrow R_3-R_2$ 得 $\\begin{bmatrix}1&2&1\\\\0&1&1\\\\0&0&1\\end{bmatrix}$。兩步都是加倍數，行列式不變。因此答案為 $1\\cdot1\\cdot1=1\\ne0$，矩陣可逆。\n\n評分：第一步正確 3 分；第二步正確 2 分；說明不變 2 分；對角線連乘 2 分；可逆判斷 1 分。自評：答對／部分正確／不會。"
    },
    "LA-CH02-S03-H02": {
      "markdown": "提示：先對 $AB=-BA$ 取行列式，偶數階反例可用對角矩陣與交換矩陣。\n\n參考答案：$\\det A\\det B=\\det(AB)=\\det(-BA)=(-1)^n\\det B\\det A=-\\det A\\det B$。因此實數上 $2\\det A\\det B=0$，故 $\\det A=0$ 或 $\\det B=0$，至少一個不可逆。二階取 $A=\\operatorname{diag}(1,-1)$、$B=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，則 $AB=\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}$、$BA=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$，確有 $AB=-BA$，但兩者行列式均為 $-1$，皆可逆。\n\n評分：正確使用乘積公式 2 分；用奇數階得到負號 2 分；實數上推出乘積零與結論 2 分；給出並驗證反例 4 分。自評：答對／部分正確／不會。"
    },
    "LA-CH02-S04-E01": {
      "markdown": "**提示：** 先算 $C_{12}$，確認符號後再轉置。\n\n辨識：題目要伴隨，方法是「每項餘因子→轉置」。例如 $C_{12}=-\\det\\begin{bmatrix}5&2\\\\1&-3\\end{bmatrix}=-(-17)=17$。逐項計算：\n\n$$C=\\begin{bmatrix}-18&17&-6\\\\-6&-10&-2\\\\-10&-1&28\\end{bmatrix},\\quad \\operatorname{adj}A=\\begin{bmatrix}-18&-6&-10\\\\17&-10&-1\\\\-6&-2&28\\end{bmatrix}.$$\n\n錯誤：把 $C_{12}$ 放在伴隨的 $(1,2)$；正確應放 $(2,1)$。"
    },
    "LA-CH02-S04-E02": {
      "markdown": "**提示：** 沿第一列展開。\n\n辨識：同一矩陣已知伴隨，可用乘積檢查。沿第一列展開得 $3(-18)+(-2)(17)+1(-6)=-94$。直接相乘得\n\n$$A\\operatorname{adj}A=\\begin{bmatrix}-94&0&0\\\\0&-94&0\\\\0&0&-94\\end{bmatrix}.$$\n\n例如第 $(1,2)$ 項是 $3(-6)+(-2)(-10)+1(-2)=0$；第 $(2,2)$ 項是 $5(-6)+6(-10)+2(-2)=-94$。故計算符合恆等式。錯誤：認為此例不可逆；實際行列式非零。"
    },
    "LA-CH02-S04-E03": {
      "markdown": "**提示：** 先確認行列式不為零。\n\n辨識：二階求逆，可用速算。$\\det D=4-3=1$；$\\operatorname{adj}D=\\begin{bmatrix}2&-1\\\\-3&2\\end{bmatrix}$，故 $D^{-1}$ 就是此矩陣。錯誤：忘了除以行列式，僅本例因行列式為1而看似無差別。"
    },
    "LA-CH02-S04-E04": {
      "markdown": "**提示：** 三階的次方為2。\n\n辨識：只問性質，不需逐項算餘因子。三階時 $\\det(\\operatorname{adj}A)=2^2=4$；$\\operatorname{adj}(2A)=2^2\\operatorname{adj}A=4\\operatorname{adj}A$；$\\det AB=-6$，故 $\\det(\\operatorname{adj}(AB))=(-6)^2=36$。乘積必為 $\\operatorname{adj}B\\operatorname{adj}A$。錯誤：把伴隨純量係數寫成 $2^3$，或不反轉乘法順序。"
    },
    "LA-CH02-S04-E05": {
      "markdown": "**提示：** 先取行列式，注意實立方根。\n\n辨識：由伴隨還原原矩陣。$\\det(2I_4)=2^4=16$；因此 $\\det A=\\sqrt[3]{16}$。再由 $A=\\det(A)(2I_4)^{-1}$ 得 $A=\\sqrt[3]{2}I_4$。檢查：四階純量矩陣 $cI$ 的伴隨為 $c^3I$，代入即 $2I$。錯誤：把 $\\det(2I_4)$ 當成2。"
    },
    "LA-CH02-S04-E06": {
      "markdown": "**提示：** 直接看二階子行列式。\n\n辨識：奇異矩陣不能套逆矩陣公式。三階對角矩陣的伴隨對角為另外兩項的乘積，非對角為0。因此前者伴隨 $\\operatorname{diag}(0,0,1)$、秩1；後者伴隨為零矩陣、秩0。錯誤：將所有奇異矩陣的伴隨都判為0。"
    },
    "LA-CH02-S04-E07": {
      "markdown": "**提示：** 替換 column。\n\n辨識：方形系統且行列式非零。$\\Delta=\\det\\begin{bmatrix}2&1\\\\1&-1\\end{bmatrix}=-3$；$\\Delta_1=\\det\\begin{bmatrix}5&1\\\\1&-1\\end{bmatrix}=-6$；$\\Delta_2=\\det\\begin{bmatrix}2&5\\\\1&1\\end{bmatrix}=-3$。所以 $x=2,y=1$，代回兩式均成立。錯誤：用 $b$ 替換橫列。"
    },
    "LA-CH02-S04-E08": {
      "markdown": "**提示：** 先做行列式因式分解，再分別代回奇異值。\n\n辨識：含參數，須先找分母為零的例外。\n\n$$\\Delta=\\det\\begin{bmatrix}1&1&a\\\\1&a&1\\\\a&1&1\\end{bmatrix}=3a-2-a^3=-(a-1)^2(a+2).$$\n\n三個替換行列式分別為 $\\Delta_1=-2(a-1)^2(a+2)$、$\\Delta_2=-(a-1)(a+2)$、$\\Delta_3=(a-1)(a+2)$。若 $a\\ne1,-2$，相除得唯一解 $x_1=2,x_2=1/(a-1),x_3=-1/(a-1)$。\n\n$a=1$ 時三式左側相同，右側1、3、2不同，無解。\n\n$a=-2$ 時，第三式等於前兩式相加再取負；前兩式係數不成比例，秩為2。令 $x_3=t$，第一式得 $x_1+x_2=1+2t$；第二式得 $x_1-2x_2=3-t$；相減得 $3x_2=-2+3t$，因此\n\n$$x=(5/3+t,\\ -2/3+t,\\ t)^T,\\qquad t\\in\\mathbb R.$$\n\n取 $t=1/3$ 就得到 $(2,-1/3,1/3)^T$，正好是非奇異區公式在 $a=-2$ 的值，但只是無限多解中的一組。錯誤：消去 $a+2$ 後忘記原先唯一解的條件。"
    },
    "LA-CH02-S04-Q01": {
      "markdown": "**提示：** 回想最後一步運算。\n\nA少一次轉置；B符合定義；C是原矩陣的轉置，不是餘因子轉置；D不一定存在，即使存在也通常還差一個行列式係數。",
      "optionExplanations": [
        "少一次轉置",
        "符合定義",
        "是原矩陣的轉置，不是餘因子轉置",
        "不一定存在，即使存在也通常還差一個行列式係數。"
      ]
    },
    "LA-CH02-S04-Q02": {
      "markdown": "**提示：** 從不含除法的恆等式出發。\n\nA的逆根本不存在；B可由 $\\operatorname{diag}(1,1,0)$ 反駁；C行列式為0只代表秩小於3；D直接由核心式成立。",
      "optionExplanations": [
        "的逆根本不存在",
        "可由 $\\operatorname{diag}(1,1,0)$ 反駁",
        "行列式為0只代表秩小於3",
        "直接由核心式成立。"
      ]
    },
    "LA-CH02-S04-Q03": {
      "markdown": "**提示：** 看階數減一。\n\nA正確，$(-2)^{4-1}=-8$；B誤用平方；C誤用四次方；D忘記次方。",
      "optionExplanations": [
        "正確，$(-2)^{4-1}=-8$",
        "誤用平方",
        "誤用四次方",
        "忘記次方。"
      ]
    },
    "LA-CH02-S04-Q04": {
      "markdown": "**提示：** 考慮零係數矩陣。\n\nA違反奇異矩陣不可能有唯一解；B錯，例如零矩陣配零右端有無限多解；C正確；D錯，例如零矩陣配非零右端無解。",
      "optionExplanations": [
        "違反奇異矩陣不可能有唯一解",
        "錯，例如零矩陣配零右端有無限多解",
        "正確",
        "錯，例如零矩陣配非零右端無解。"
      ]
    },
    "LA-CH02-S04-Q05": {
      "markdown": "**提示：** 比較秩和階數差。\n\nA錯，伴隨的每個行向量皆在一維零空間內；B正確，至少一個二階子行列式非零，所以秩恰為1；C與上述非零餘因子矛盾；D錯，三階時重複伴隨為 $\\det(A)A=0$。",
      "optionExplanations": [
        "錯，伴隨的每個行向量皆在一維零空間內",
        "正確，至少一個二階子行列式非零，所以秩恰為1",
        "與上述非零餘因子矛盾",
        "錯，三階時重複伴隨為 $\\det(A)A=0$。"
      ]
    },
    "LA-CH02-S04-Q06": {
      "markdown": "**提示：** 可先利用上三角行列式。\n\n上三角行列式為對角乘積，$\\det A=3$。餘因子矩陣\n\n$$C=\\begin{bmatrix}3&0&0\\\\-6&3&0\\\\0&0&1\\end{bmatrix},\\quad \\operatorname{adj}A=\\begin{bmatrix}3&-6&0\\\\0&3&0\\\\0&0&1\\end{bmatrix}.$$\n\n除以3得\n\n$$A^{-1}=\\begin{bmatrix}1&-2&0\\\\0&1&0\\\\0&0&1/3\\end{bmatrix}.$$\n\n乘積的第一列是 $(3,-6+6,0)$，第二列 $(0,3,0)$，第三列 $(0,0,3)$，故為 $3I_3$。\n\n評分30分：行列式4、餘因子10、正確轉置6、反矩陣5、乘積驗證5。自評：答對／部分正確／不會；錯誤須指出是哪一個餘因子符號或轉置位置。"
    },
    "LA-CH02-S04-Q07": {
      "markdown": "**提示：** 計算 $t-1$，證明用行列式對替換行的線性性。\n\n$\\Delta=t-1$，$\\Delta_1=2t-3$，$\\Delta_2=1$。$t\\ne1$ 時 $x=(2t-3)/(t-1)$、$y=1/(t-1)$。$t=1$ 時左式相同、右端2與3不同，無解，沒有無限多解的參數值。\n\n一般證明：設 $A=[a_1\\cdots a_n]$ 且 $b=\\sum_k x_ka_k$。將第 $i$ 行替換為此線性組合，再按該行線性性展開。$k\\ne i$ 時兩行相同，該項為0；$k=i$ 時留下 $x_i\\det A$。因此 $\\Delta_i=x_i\\Delta$，不需要除以 $\\Delta$，故奇異時也成立。\n\n評分30分：三個行列式8、非奇異解6、奇異值判斷6、線性展開4、重複行論證4、不做非法除法2。自評：答對／部分正確／不會。"
    },
    "LA-CH03-S01-E01": {
      "markdown": "**辨識：**題目指定純量體，先分清集合元素與允許的純量。**提示：**實純量是否包含 $i$？\n\n**方法理由：**向量由 $V$ 決定，純量由 $F$ 決定，兩者不是同一角色。\n\n**步驟：**(1) $i\\in\\mathbb C=V$，故可作向量。(2) 本題 $F=\\mathbb R$，$i\\notin\\mathbb R$，故不可作純量。(3) $\\mathbb Z$ 不是體，因 $2$ 沒有整數倒數，故不符合本節定義。\n\n**常錯：**把所有「數」都當成純量，或因元素不是實數就否定實向量空間。"
    },
    "LA-CH03-S01-E02": {
      "markdown": "**辨識：**特殊純量乘法，只縮放第一座標。**提示：**第二座標在兩側各出現幾次？\n\n**方法理由：**A8 右側做一次向量加法，可讓未縮放的第二座標累加，形成反例。\n\n**步驟：**(1) $(1+1)\\odot(0,1)=(0,1)$。(2) $1\\odot(0,1)=(0,1)$，所以右側是 $(0,1)+(0,1)=(0,2)$。(3) 兩側不等，A8 失敗，不是向量空間。\n\n**常錯：**只驗證 A10 成立就斷言全部成立；或說它違反名為「$0v=0$」的公設，未區分推論與公設。"
    },
    "LA-CH03-S01-E03": {
      "markdown": "**辨識：**非零純量可消去。**提示：**乘純量 $1/3$。\n\n**方法理由：**實數 $3\\ne0$ 有倒數，可用 A9 與 A10。\n\n**步驟：**(1) 兩邊乘 $1/3$，得 $(1/3)(3u)=(1/3)(3v)$。(2) A9 化為 $((1/3)3)u=((1/3)3)v$。(3) A10 得 $u=v$。(4) 若純量為零，取 $V=\\mathbb R$、$u=1,v=2$，有 $0u=0v=0$，但 $u\\ne v$，故不能一般推出。\n\n**常錯：**把零也當成可除的純量。"
    },
    "LA-CH03-S01-E04": {
      "markdown": "**辨識：**固定尺寸矩陣的向量運算。**提示：**逐位置相加。\n\n**方法理由：**此處的加法、純量乘法按元素定義。\n\n**步驟：**$2B=\\begin{pmatrix}4&2\\\\8&-2\\end{pmatrix}$，故 $A+2B=\\begin{pmatrix}5&0\\\\8&1\\end{pmatrix}$。$-A=\\begin{pmatrix}-1&2\\\\0&-3\\end{pmatrix}$；$A+(-A)=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}=0_V$。\n\n**常錯：**把零向量寫成單位矩陣；或使用矩陣乘法代替純量乘法。"
    },
    "LA-CH03-S01-E05": {
      "markdown": "**辨識：**「至多」與「恰好」的差異。**提示：**先乘純量零。\n\n**方法理由：**零與最高次項抵消能迅速否定「恰好」限制。\n\n**步驟：**(1) 至多二次集合是 $P_2(\\mathbb R)$；兩多項式相加係數仍為實數且不出現三次以上項，乘實數也一樣，包含零與反元素，其餘等式由通常多項式運算成立，故為向量空間。(2) 恰好二次集合含 $x^2$，但 $0\\cdot x^2=0$ 不在集合，違反 A2；亦可取 $x^2+(-x^2)=0$ 違反 A1。\n\n**常錯：**把零多項式當成二次多項式，或認為抵消會破壞「至多」限制。"
    },
    "LA-CH03-S01-E06": {
      "markdown": "**辨識：**函數在某點的條件。**提示：**先看零函數。\n\n**方法理由：**逐點定義使限制可直接帶入加法與縮放。\n\n**步驟：**(1) 零函數在 $V_0$。(2) 若 $f,g\\in V_0$，則 $(f+g)(0)=0+0=0$；任意實數 $\\alpha$ 使 $(\\alpha f)(0)=\\alpha\\cdot0=0$；加法反元素 $-f$ 也滿足限制。其餘公設由函數空間逐點繼承，故 $V_0$ 成立。(3) $V_1$ 不含零函數；具體取恆等於 $1$ 的函數 $f$，則 $0f$ 是零函數，不在 $V_1$，違反 A2。\n\n**常錯：**只檢查某個函數，不用任意 $f,g$ 證明封閉；把加法反元素 $-f$ 誤寫為反函數 $f^{-1}$。此處 $(-f)(0)=-f(0)$，不是逆函數。"
    },
    "LA-CH03-S01-E07": {
      "markdown": "**辨識：**位移是終點減起點。**提示：**逐座標相減。\n\n**方法理由：**位移只取決於座標差，平移起終點同一向量不改變差。\n\n**步驟：**$\\overrightarrow{PQ}=(4-1,0-(-2))=(3,2)$；$u+v=(3,4)$；$u-v=(1,-2)$。若同加位移 $a$，$(Q+a)-(P+a)=Q-P$，故代表同一自由向量。\n\n**常錯：**寫成起點減終點，或把箭頭位置當成向量本身的一部分。"
    },
    "LA-CH03-S01-E08": {
      "markdown": "**辨識：**題目重新定義兩種運算。**提示：**解 $4\\oplus e=4$。\n\n**方法理由：**零與反元素由指定加法決定，不能直接套通常數字運算。\n\n**步驟：**(1) $xe=x$ 對所有正實數成立，得 $e=1$。(2) $4r=1$，得 $r=1/4$。(3) $2\\odot4=4^2=16$。(4) 向量 $2$ 的反元素是 $1/2$，所以 $4$ 減 $2$ 為 $4\\oplus(1/2)=2$。\n\n**常錯：**反元素寫成 $-4$（甚至不在集合）；純量乘法誤算為 $2\\times4=8$。"
    },
    "LA-CH03-S01-E09": {
      "markdown": "**辨識：**候選加法為最小值。**提示：**對任意候選單位 $e$，找比它大的數。\n\n**方法理由：**A5 要對所有 $x$ 成立，一個反例足以否定候選單位。\n\n**步驟：**假設有實數 $e$ 為單位元素，則對每個 $x$ 要有 $\\min(x,e)=x$。取 $x=e+1$，得左側 $e$，右側 $e+1$，矛盾。故不存在單位，A5 失敗。\n\n**常錯：**只說「零不是單位」；這只能否定候選 $0$，還須排除所有可能的 $e$。"
    },
    "LA-CH03-S01-E10": {
      "markdown": "**辨識：**通常運算先平移再搬回。**提示：**以 $u-2$ 當新的座標。\n\n**方法理由：**兩運算均繞同一中心 $2$ 設計；直接展開可驗證所有公設。\n\n**步驟：**封閉性由實數加乘成立。交換律由 $u+v-2=v+u-2$；結合律兩側均為 $u+v+w-4$。解 $u+e-2=u$ 得 $e=2$；解 $u+r-2=2$ 得 $r=4-u$。A7 左側為 $2+\\alpha(u+v-4)$，右側為 $[2+\\alpha(u-2)]+[2+\\alpha(v-2)]-2$，相等。A8 左側為 $2+(\\alpha+\\beta)(u-2)$，右側為 $[2+\\alpha(u-2)]+[2+\\beta(u-2)]-2$，相等。A9 兩側均為 $2+\\alpha\\beta(u-2)$。A10 為 $2+1(u-2)=u$。故十項成立。\n\n**常錯：**只改加法而讓純量乘法保持通常形式，便未必仍成立；或把本題零向量寫成 $0$。"
    },
    "LA-CH03-S01-Q01": {
      "markdown": "提示：向量是空間的元素，不限定為箭頭。正解：**C**。\n\n- A 錯：矩陣、多項式、函數都可能是向量。\n- B 錯：非空不足，還要符合指定運算的公設。\n- C 對：函數空間的加法單位元素是零函數。\n- D 錯：可在複數體等其他體上定義向量空間。",
      "optionExplanations": [
        "錯：矩陣、多項式、函數都可能是向量。",
        "錯：非空不足，還要符合指定運算的公設。",
        "對：函數空間的加法單位元素是零函數。",
        "錯：可在複數體等其他體上定義向量空間。"
      ]
    },
    "LA-CH03-S01-Q02": {
      "markdown": "提示：比較 $(\\alpha+\\beta)\\odot v$ 與 $(\\alpha\\odot v)+(\\beta\\odot v)$。正解：**A**。\n\n- A 對：同一組資料使 A8 兩側不同，足以否定。\n- B 錯：這只驗證某元素的 A10，沒有展示 A8 失敗。\n- C 錯：這只展示通常加法交換律，與所問失敗條件不同。\n- D 錯：結果仍在集合內，只顯示一例封閉，沒有分配律矛盾。",
      "optionExplanations": [
        "對：同一組資料使 A8 兩側不同，足以否定。",
        "錯：這只驗證某元素的 A10，沒有展示 A8 失敗。",
        "錯：這只展示通常加法交換律，與所問失敗條件不同。",
        "錯：結果仍在集合內，只顯示一例封閉，沒有分配律矛盾。"
      ]
    },
    "LA-CH03-S01-Q03": {
      "markdown": "提示：把所有係數都取零。正解：**D**。\n\n- A 錯：不含零多項式；乘純量零不封閉。\n- B 錯：零多項式不滿足 $p(0)=1$。\n- C 錯：零不在集合；乘純量 $2$ 也使最高次項係數變成 $2$。\n- D 對：即 $P_3(\\mathbb R)$，含零且加法、縮放均保留形式，其餘公設繼承通常運算。",
      "optionExplanations": [
        "錯：不含零多項式；乘純量零不封閉。",
        "錯：零多項式不滿足 $p(0)=1$。",
        "錯：零不在集合；乘純量 $2$ 也使最高次項係數變成 $2$。",
        "對：即 $P_3(\\mathbb R)$，含零且加法、縮放均保留形式，其餘公設繼承通常運算。"
      ]
    },
    "LA-CH03-S01-Q04": {
      "markdown": "提示：向量加法在此是通常乘法。正解：**B**。\n\n- A 錯：$-9$ 不在正實數集合。\n- B 對：$9\\oplus(1/9)=9(1/9)=1=0_V$。\n- C 錯：通常數字零不在此集合。\n- D 錯：$1$ 是本空間零向量，但 $9\\oplus1=9$，不是 $0_V$。",
      "optionExplanations": [
        "錯：$-9$ 不在正實數集合。",
        "對：$9\\oplus(1/9)=9(1/9)=1=0_V$。",
        "錯：通常數字零不在此集合。",
        "錯：$1$ 是本空間零向量，但 $9\\oplus1=9$，不是 $0_V$。"
      ]
    },
    "LA-CH03-S01-Q05": {
      "markdown": "提示：分成 $\\alpha=0_F$ 與 $\\alpha\\ne0_F$ 討論。正解：**C**。\n\n- A 錯：在 $\\mathbb R$ 取 $\\alpha=1,v=0$ 即可反駁。\n- B 錯：取 $\\alpha=0,v=1$ 即可反駁。\n- C 對：非零 $\\alpha$ 有倒數，乘回可得 $v=0_V$；另一情況為純量零。\n- D 錯：前兩個反例都顯示不必同時為零。「或」是包含兩者同時為零的邏輯或。",
      "optionExplanations": [
        "錯：在 $\\mathbb R$ 取 $\\alpha=1,v=0$ 即可反駁。",
        "錯：取 $\\alpha=0,v=1$ 即可反駁。",
        "對：非零 $\\alpha$ 有倒數，乘回可得 $v=0_V$；另一情況為純量零。",
        "錯：前兩個反例都顯示不必同時為零。「或」是包含兩者同時為零的邏輯或。"
      ]
    },
    "LA-CH03-S01-Q06": {
      "markdown": "提示：分別展開 $(0_F+0_F)v$ 與 $\\alpha(0_V+0_V)$。\n\n參考答案：由 A8，$0_Fv=(0_F+0_F)v=0_Fv+0_Fv$。將左側寫作 $0_V+0_Fv$，消去共同加項 $0_Fv$，得 $0_V=0_Fv$。由 A7，$\\alpha0_V=\\alpha(0_V+0_V)=\\alpha0_V+\\alpha0_V$；左側寫成 $0_V+\\alpha0_V$，同理消去得 $\\alpha0_V=0_V$。\n\n評分：正確使用 A8（2 分）；第一式合法消去及結論（3 分）；正確使用 A7（2 分）；第二式合法消去及結論（3 分）。不能直接用待證式證明自身。\n\n自評：答對＝兩式與理由完整；部分正確＝只有一式完整或未說明消去；不會＝直接假設零乘法結果。"
    },
    "LA-CH03-S01-Q07": {
      "markdown": "提示：先找 $x\\oplus e=x$ 的 $e$，再逐條比較運算兩側。\n\n參考答案：$x,y>0$ 得 $xy>0$，任意實數 $\\alpha$ 得 $x^\\alpha>0$，故兩封閉性成立。通常乘法交換、結合給出 $\\oplus$ 的交換、結合。$x\\oplus1=x$，所以零向量是 $1$；$x\\oplus(1/x)=1$ 且 $1/x>0$，所以反元素是 $1/x$。A7：$\\alpha\\odot(x\\oplus y)=(xy)^\\alpha=x^\\alpha y^\\alpha=(\\alpha\\odot x)\\oplus(\\alpha\\odot y)$。A8：$(\\alpha+\\beta)\\odot x=x^{\\alpha+\\beta}=x^\\alpha x^\\beta=(\\alpha\\odot x)\\oplus(\\beta\\odot x)$。A9：$(\\alpha\\beta)\\odot x=x^{\\alpha\\beta}=(x^\\beta)^\\alpha=\\alpha\\odot(\\beta\\odot x)$。A10：$1\\odot x=x^1=x$。故構成實向量空間。\n\n評分：兩封閉性（2 分）；交換、結合（1 分）；零向量及反元素（2 分）；A7、A8（各 1.5 分，共 3 分）；A9、A10（各 1 分，共 2 分）。\n\n自評：答對＝全項驗證且零向量正確；部分正確＝主要結論對但少驗證；不會＝以通常運算判斷、將零寫成 $0$ 或反元素寫成 $-x$。"
    },
    "LA-CH03-S02-E01": {
      "markdown": "**辨識與方法：**齊次線性限制，使用線性組合封閉。\n\n**提示：** 將任意兩向量的條件代入合成向量。\n\n**詳解（獨立答案區）：** 零向量滿足 $0+2(0)-0=0$，故非空。任取 $u,v\\in W$，則 $u_1+2u_2-u_3=0$、$v_1+2v_2-v_3=0$。$\\alpha u+\\beta v$ 的限制式等於 $\\alpha(u_1+2u_2-u_3)+\\beta(v_1+2v_2-v_3)=0$，故封閉，為子空間。\n\n**常見錯誤：** 只驗證零向量，或只驗證特定兩個向量。"
    },
    "LA-CH03-S02-E02": {
      "markdown": "**辨識與方法：**非線性限制 $\\det A=0$，嘗試找加法反例；非線性外觀本身不是充分否定理由。\n\n**提示：** 找兩個分別只保留一個對角元素的矩陣。\n\n**詳解：** 取 $A=\\operatorname{diag}(1,0)$、$B=\\operatorname{diag}(0,1)$；diag 表示用括號內元素形成對角矩陣。兩者行列式皆為零，但 $A+B=I_2$ 行列式為 1，因此加法不封閉。\n\n**常見錯誤：** 誤以為「含零」或「對倍數封閉」已足夠。參數出現平方或立方也不能直接斷定；例如 $\\{(a,b^3):a,b\\in\\mathbb R\\}=\\mathbb R^2$，仍是子空間。"
    },
    "LA-CH03-S02-E03": {
      "markdown": "**辨識與方法：**同時滿足兩組條件，聯立方程。\n\n**提示：** 以 $y=t$ 表示。\n\n**詳解：** 令 $y=t$，得 $x=-t,z=-t$，故 $U\\cap W=\\{t(-1,1,-1):t\\in\\mathbb R\\}=\\operatorname{span}\\{(-1,1,-1)\\}$。\n\n**常見錯誤：** 把交集改成「滿足其中一個條件」。"
    },
    "LA-CH03-S02-E04": {
      "markdown": "**辨識與方法：**兩者互不包含，找分屬不同軸的向量。\n\n**提示：** 使用 $e_1=(1,0)$ 與 $e_2=(0,1)$。\n\n**詳解：** $e_1,e_2$ 在聯集中，但和 $(1,1)$ 不在任一軸，因此不是子空間。\n\n**常見錯誤：** 認為「兩個都通過原點」就足夠；或把兩個子空間的定理直接套用到任意數量、任意數域的聯集。"
    },
    "LA-CH03-S02-E05": {
      "markdown": "**辨識與方法：**先寫出座標形式，再分別處理「同時屬於」與「相加」。\n\n**提示：** $U$ 是 $z=0$ 平面，$W$ 是 $x=0$ 平面。\n\n**詳解：** 同時滿足 $z=0,x=0$，故交集為 $\\operatorname{span}\\{e_2\\}$。任意 $(a,b,c)=(a,b,0)+(0,0,c)$，故和為 $\\mathbb R^3$。聯集不封閉，因 $e_1+e_3$ 不在任一平面。\n\n**常見錯誤：** 把同時屬於兩者與可分成兩部分混淆。"
    },
    "LA-CH03-S02-E06": {
      "markdown": "**辨識與方法：**先檢查尺寸，再分別取欄、取列、解兩個齊次系統。\n\n**提示：** 解 $x+2y+3z=0,y+z=0$。\n\n**詳解：** 前兩欄 $(1,0)^T,(2,1)^T$ 線性獨立並生成 $\\mathbb R^2$，故 CS 為 $\\mathbb R^2$。RS 為 $\\operatorname{span}\\{(1,2,3),(0,1,1)\\}$。令 $z=t$ 得 $y=-t,x=-t$，故 $\\ker A=\\operatorname{span}\\{(-1,-1,1)^T\\}$。令 $y=(s,t)^T$，$y^TA=(s,2s+t,3s+t)=0$ 得 $s=t=0$，故左核為 $\\{0\\}$。\n\n**常見錯誤：** 寫反所在空間；把零子空間的基底寫成 $\\{0\\}$，其基底其實是空集合。"
    },
    "LA-CH03-S02-E07": {
      "markdown": "**辨識與方法：**列運算保持 RS、kernel；實算 CS 作對照。\n\n**提示：** 原矩陣第一欄為 $(1,2)^T$。\n\n**詳解：** 兩者 RS 均為 $\\operatorname{span}\\{(1,2)\\}$，kernel 均為 $\\operatorname{span}\\{(-2,1)^T\\}$。但 CS 分別為 $\\operatorname{span}\\{(1,2)^T\\}$、$\\operatorname{span}\\{(1,0)^T\\}$，不相同。\n\n**常見錯誤：** 求原矩陣 CS 基底時拿 RREF 的欄。正確做法是用 RREF 找主元欄位置，再回原矩陣取欄。"
    },
    "LA-CH03-S02-E08": {
      "markdown": "**辨識與方法：**用輸入維度減 nullity 求 rank。\n\n**提示：** $6=r+3$。\n\n**詳解：** $r=3$，故 CS、RS 維度皆為 3，左核維度 $4-3=1$。\n\n**常見錯誤：** 用 $m-k$ 當 rank，或以 $n-r$ 當左核維度。"
    },
    "LA-CH03-S02-Q01": {
      "markdown": "**提示：** 先檢查零向量，再看齊次線性限制\n\nA：零向量不滿足。B：$(1,0)$ 乘 $-1$ 後離開集合。C：齊次線性式對線性組合封閉。D：零向量不在單位圓上。",
      "optionExplanations": [
        "零向量不滿足",
        "$(1,0)$ 乘 $-1$ 後離開集合",
        "齊次線性式對線性組合封閉",
        "零向量不在單位圓上。"
      ]
    },
    "LA-CH03-S02-Q02": {
      "markdown": "**提示：** 區分「同時屬於」「至少屬於一個」「可分成兩部分」\n\nA：兩者均含零且交集對線性組合封閉。B：兩座標軸反例。C：兩座標軸的和含 $(1,1)$ 而聯集不含。D：取 $U=W=\\mathbb R^2$，交集不是零子空間。",
      "optionExplanations": [
        "兩者均含零且交集對線性組合封閉",
        "兩座標軸反例",
        "兩座標軸的和含 $(1,1)$ 而聯集不含",
        "取 $U=W=\\mathbb R^2$，交集不是零子空間。"
      ]
    },
    "LA-CH03-S02-Q03": {
      "markdown": "**提示：** 先標出每列、每欄有幾個分量\n\nA：欄長度為 3，CS 在 $\\mathbb R^3$。B：輸入長度為 5，kernel 在 $\\mathbb R^5$。C：左核是 $A^T$ 的核，向量長度為 3。D：列長度為 5，正確。",
      "optionExplanations": [
        "欄長度為 3，CS 在 $\\mathbb R^3$",
        "輸入長度為 5，kernel 在 $\\mathbb R^5$",
        "左核是 $A^T$ 的核，向量長度為 3",
        "列長度為 5，正確。"
      ]
    },
    "LA-CH03-S02-Q04": {
      "markdown": "**提示：** 用 $R=PA$ 與 $P$ 可逆\n\nA：ex07 顯示 CS 可變。B：$PAx=0\\iff Ax=0$。C：ex07 中原矩陣左核為 span$\\{(-2,1)^T\\}$，化簡後為 span$\\{(0,1)^T\\}$，可變。D：列運算會改變欄分量，ex07 即為反例。",
      "optionExplanations": [
        "ex07 顯示 CS 可變",
        "$PAx=0\\iff Ax=0$",
        "ex07 中原矩陣左核為 span$\\{(-2,1)^T\\}$，化簡後為 span$\\{(0,1)^T\\}$，可變",
        "列運算會改變欄分量，ex07 即為反例。"
      ]
    },
    "LA-CH03-S02-Q05": {
      "markdown": "**提示：** 把 $(a,b)$ 分解為兩軸向量之和\n\nA：$(1,1)$ 不在聯集中。B：交集含零，且實際為 $\\{0\\}$。C：$(a,b)=(a,0)+(0,b)$，故正確。D：$(1,0)\\notin W$。",
      "optionExplanations": [
        "$(1,1)$ 不在聯集中",
        "交集含零，且實際為 $\\{0\\}$",
        "$(a,b)=(a,0)+(0,b)$，故正確",
        "$(1,0)\\notin W$。"
      ]
    },
    "LA-CH03-S02-Q06": {
      "markdown": "**提示：** 假設兩者互不包含，選 $u\\in U\\setminus W$ 與 $w\\in W\\setminus U$\n\n假設彼此不包含，取 $u\\in U\\setminus W$、$w\\in W\\setminus U$（2 分）。聯集加法封閉得 $u+w\\in U\\cup W$（2 分）。若屬於 $U$，相減推出 $w\\in U$（2 分）；若屬於 $W$，相減推出 $u\\in W$（2 分）。兩者都矛盾，故必有一方向包含（2 分）。只舉座標軸反例不能證明一般定理。\n\n自評：答對＝涵蓋兩種情況且理由完整；部分正確＝知道反證但漏一種情況；不會＝只寫結論或只舉例。"
    },
    "LA-CH03-S02-Q07": {
      "markdown": "**提示：** 列化簡找主元位置及齊次系統；左核解 $A^Ty=0$\n\n先作 $R_2\\leftarrow R_2-2R_1$ 並交換第二、三列，得非零列 $(1,2,1),(0,1,1)$；再 $R_1\\leftarrow R_1-2R_2$ 得 RREF 非零列 $(1,0,-1),(0,1,1)$。\n\n1. 主元在第 1、2 欄，CS 基底取原矩陣欄 $\\{(1,2,0)^T,(2,4,1)^T\\}$，在 $\\mathbb R^3$（2 分）。\n2. RS 基底可取 $\\{(1,0,-1),(0,1,1)\\}$，在 $\\mathbb R^3$（2 分）。\n3. 方程 $x-z=0,y+z=0$，令 $z=t$，得 kernel 基底 $\\{(1,-1,1)^T\\}$，在 $\\mathbb R^3$（2 分）。\n4. 左核：$s+2t=0$、$2s+4t+u=0$、$s+2t+u=0$，得 $u=0,s=-2t$，基底 $\\{(-2,1,0)^T\\}$，在 $\\mathbb R^3$（2 分）。\n5. 列化簡與所在空間標示各 1 分。等價基底皆可；若 CS 取化簡矩陣欄則該項不給分。\n\n自評：答對＝四空間與依據正確；部分正確＝至少兩空間正確但有計算或取欄錯誤；不會＝無法區分四個求法。"
    },
    "LA-CH03-S03-E01": {
      "markdown": "提示：前兩座標會先決定係數，第三座標負責檢查。\n\n辨識：指定向量是否能生成，使用非齊次方程。設 $au+bv=(a,b,a+b)$。對第一個目標必有 $a=2,b=3$，第三座標等於 5，符合，故 $b=2u+3v$。第二個目標前兩座標仍迫使係數為 2、3，但第三座標只能為 5，不是 6，故無解。常錯：只比較前兩個座標就結束。"
    },
    "LA-CH03-S03-E02": {
      "markdown": "提示：先寫出 span 的全部元素。\n\n辨識：最小子空間證明，需同時證子空間與包含關係。$L=\\{(a,2a):a\\in\\mathbb R\\}$。$0\\in L$；$c(a,2a)+(b,2b)=(ca+b,2(ca+b))\\in L$，故為子空間。任取包含 $(1,2)$ 的子空間 $U$，因純量倍乘封閉，所有 $a(1,2)$ 都在 $U$ 中，故 $L\\subseteq U$。常錯：只證包含 $S$，未證最小性。"
    },
    "LA-CH03-S03-E03": {
      "markdown": "提示：將 $v$ 改寫成 $w-u$。\n\n辨識：兩組生成空間相等，用雙向表示。$u,w$ 均在 span$\\{u,v\\}$ 中，因 $w=u+v$；故一方向包含成立。另一方面，$u$ 本來就在新 span，且 $v=w-u$ 也在新 span，故另一方向成立。由雙向包含得相等。對三向量集合 $\\{u,v,w\\}$，移除 $w$ 不改變 span；移除 $v$ 也可保留 span，但不能一次移除兩者。常錯：將「有一個冗餘」誤認為「可任意全部刪除」。"
    },
    "LA-CH03-S03-E04": {
      "markdown": "提示：基本 row 運算將第三個 row 減去第二個。\n\n辨識：尋找生成空間的獨立生成向量。化簡得 $R=\\begin{bmatrix}1&2&0\\\\0&0&1\\\\0&0&0\\end{bmatrix}$，樞紐在 columns 1、3。回原矩陣取 $(1,0,0)^T,(0,1,1)^T$，為 $CS(A)$ 基底。$R$ 的非零 rows $(1,2,0),(0,0,1)$ 為 $RS(A)$ 基底。常錯：直接取 $R$ 的第三個 column $(0,1,0)^T$ 作原 column space 基底。"
    },
    "LA-CH03-S03-E05": {
      "markdown": "提示：比較第三向量與前兩者的和。\n\n辨識：能直接看出相依關係，不需硬算行列式。令三向量依序為 $v_1,v_2,v_3$，則 $v_1+v_2-v_3=0$，係數 $(1,1,-1)$ 不全為零，因此相依。另 $v_1,v_2$ 的前兩座標已足以證明它們獨立。常錯：把右側是零當作相依的理由，未指出非零係數。"
    },
    "LA-CH03-S03-E06": {
      "markdown": "提示：逐一使用零向量、空集合、向量個數及子集合定理。\n\n第一組含零向量，故相依。空集合獨立。$3\\times4$ 係數矩陣最多 3 個樞紐，必有自由變數，故任意 4 個 $\\mathbb R^3$ 向量皆相依。最後一組本身獨立，任意子集合亦獨立，包含空集合。常錯：以「元素少於維度」當作充分獨立條件。"
    },
    "LA-CH03-S03-E07": {
      "markdown": "提示：每個矩陣都各問兩次，不能只寫一個結論。\n\n$A$ 有兩個獨立標準向量，故 columns 獨立；但只能組出第三座標為 0 的向量，所以不生成 $\\mathbb R^3$。$B$ 已包含 $\\mathbb R^2$ 的兩個標準向量，所以生成 $\\mathbb R^2$；但第三 column 是前兩者之和，所以相依。常錯：將獨立與生成當成同義詞。"
    },
    "LA-CH03-S03-E08": {
      "markdown": "提示：行列式為 $1-t^2$。\n\n辨識：兩個 $\\mathbb R^2$ 向量形成方陣，可用行列式。$\\det\\begin{bmatrix}1&t\\\\t&1\\end{bmatrix}=1-t^2=(1-t)(1+t)$。故 $t\\ne\\pm1$ 時獨立。$t=1$ 時兩向量相同；$t=-1$ 時互為負倍數，皆相依。常錯：消去時除以 $1-t$，只報告 $t\\ne1$ 而漏掉 $t=-1$。"
    },
    "LA-CH03-S03-E09": {
      "markdown": "提示：$(1,1)$ 可用來測聯集是否對加法封閉。\n\n兩軸的和為 $\\mathbb R^2$；交集為 $\\{0\\}$；聯集不是子空間，因 $(1,0),(0,1)$ 在聯集中，但和不在其中。另 $S_1\\cap S_2=\\varnothing$，故其 span 是 $\\{0\\}$；然而各自 span 都是 $x$ 軸，所以兩 span 的交集是整個 $x$ 軸，嚴格大於 $\\{0\\}$。常錯：把向量元素的交集與其可生成元素的交集混同。"
    },
    "LA-CH03-S03-E10": {
      "markdown": "提示：(a) 按常數、$x$、$x^2$ 排係數；(b) 逐位置讀取係數。\n\n(a) 設 $a(1+x)+b(1-x)+cx^2=0$。零多項式的同次項係數全為零，故 $a+b=0,a-b=0,c=0$。在實數域可得 $a=b=c=0$，因此獨立。任意 $r+sx+tx^2$ 可取 $a=(r+s)/2,b=(r-s)/2,c=t$，故生成整個 $P_2(\\mathbb R)$。(b) 所求為 $2E_{11}-E_{12}+0E_{21}+3E_{22}$。若其零線性組合成立，比較四個位置可得各係數零，故四個標準矩陣獨立。常錯：將多項式的取值與係數混淆；忘記純量域使 2 可除。"
    },
    "LA-CH03-S03-E11": {
      "markdown": "提示：依序代入 $x=0$、$x=\\pi/2$。\n\n設 $a\\sin x+b\\cos x=0$ 對所有實數成立。代 0 得 $b=0$；代 $\\pi/2$ 得 $a=0$，因此獨立。若定義域只有 $\\{0\\}$，$\\sin x$ 是該域上的零函數，故相依。常錯：未說明恆等式對所有定義域元素成立，或允許係數隨 $x$ 改變。"
    },
    "LA-CH03-S03-E12": {
      "markdown": "提示：導數矩陣是上三角矩陣。\n\n$$W(1,x,x^2)=\\det\\begin{bmatrix}1&x&x^2\\\\0&1&2x\\\\0&0&2\\end{bmatrix}=2.$$\n由三角矩陣行列式為對角元素乘積得 2；例如在 0 非零，因此三函數獨立。常錯：認為 Wronskian 必須每點非零才能使用判準，或反過來用恆零直接判相依。"
    },
    "LA-CH03-S03-Q01": {
      "markdown": "**提示：** 線性組合的第二座標等於第一與第三座標之和。\n\n任意組合 $au+bv=(a,a+b,b)$，故條件為第二座標等於第一加第三。A：$5=2+3$，在 span；B：$0=1-1$，在 span；C：$2\\ne1+0$，不在 span；D：$4=0+4$，在 span。",
      "optionExplanations": [
        "$5=2+3$，在 span",
        "$0=1-1$，在 span",
        "$2\\ne1+0$，不在 span",
        "$4=0+4$，在 span。"
      ]
    },
    "LA-CH03-S03-Q02": {
      "markdown": "**提示：** 分清楚空集合與含零向量的集合。\n\nA 正確，空集合沒有非平凡有限零線性組合，且空和為零。B 錯，零向量係數可取 1。C 錯，例如 $(1,0),(2,0)$ 皆非零但相依。D 錯，$\\{e_1,e_2,e_1+e_2\\}$ 生成 $\\mathbb R^2$ 卻相依。",
      "optionExplanations": [
        "正確，空集合沒有非平凡有限零線性組合，且空和為零",
        "錯，零向量係數可取 1",
        "錯，例如 $(1,0),(2,0)$ 皆非零但相依",
        "錯，$\\{e_1,e_2,e_1+e_2\\}$ 生成 $\\mathbb R^2$ 卻相依。"
      ]
    },
    "LA-CH03-S03-Q03": {
      "markdown": "**提示：** 分別比較 rank 與 row 數、column 數。\n\nA 錯，rank 4 小於 6，六 columns 相依。B 錯，有 $6-4=2$ 個自由變數。C 錯，rank 等於 row 數，任何 $b\\in\\mathbb R^4$ 均有解。D 正確，分別滿足生成與相依的判準。",
      "optionExplanations": [
        "錯，rank 4 小於 6，六 columns 相依",
        "錯，有 $6-4=2$ 個自由變數",
        "錯，rank 等於 row 數，任何 $b\\in\\mathbb R^4$ 均有解",
        "正確，分別滿足生成與相依的判準。"
      ]
    },
    "LA-CH03-S03-Q04": {
      "markdown": "**提示：** 對 A 可嘗試沒有共同元素但生成同一直線的集合。\n\nA 錯，$S=\\{e_1\\}$、$T=\\{2e_1\\}$ 的原集合交集為空，但各 span 是同一直線。B 正確，將有限線性組合按來源拆開或合併即可。C 正確，$S$ 中每個線性組合也都是 $T$ 中的線性組合。D 正確，新增元素已能由原集合表示，代換後不擴大 span。",
      "optionExplanations": [
        "錯，$S=\\{e_1\\}$、$T=\\{2e_1\\}$ 的原集合交集為空，但各 span 是同一直線",
        "正確，將有限線性組合按來源拆開或合併即可",
        "正確，$S$ 中每個線性組合也都是 $T$ 中的線性組合",
        "正確，新增元素已能由原集合表示，代換後不擴大 span。"
      ]
    },
    "LA-CH03-S03-Q05": {
      "markdown": "**提示：** Wronskian 的一般判準是單向充分條件。\n\nA 錯，一點恰為零不足以判相依，例如 $1,x,x^3$ 獨立但在 0 的 Wronskian 為零。B 正確，使用「相依導致恆零」的逆否命題。C 錯，一般可微函數的恆零 Wronskian 不能反推相依。D 錯，同 A 的反例，獨立不保證處處非零。",
      "optionExplanations": [
        "錯，一點恰為零不足以判相依，例如 $1,x,x^3$ 獨立但在 0 的 Wronskian 為零",
        "正確，使用「相依導致恆零」的逆否命題",
        "錯，一般可微函數的恆零 Wronskian 不能反推相依",
        "錯，同 A 的反例，獨立不保證處處非零。"
      ]
    },
    "LA-CH03-S03-Q06": {
      "markdown": "**提示：** 按 $1,x,x^2$ 寫三個係數向量，行列式為零時代回。\n\n係數矩陣為 $A=\\begin{bmatrix}1&0&1\\\\1&1&0\\\\0&1&t\\end{bmatrix}$，三 columns 依序對應三多項式。沿第一 row 展開得 $\\det A=t+1$，所以 $t\\ne-1$ 時獨立。$t=-1$ 時，$p_1-p_2=1-x^2=p_3$，故 $(1,-1,-1)$ 為非平凡關係。\n\n評分：正確轉係數矩陣 3 分；行列式與計算 3 分；參數範圍 2 分；相依關係式 2 分。自評「答對」須條件與關係式都正確；「部分正確」表示方法正確但漏掉一部分或有可定位計算錯誤；「不會」表示無法建立係數系統或無法解讀獨立性。"
    },
    "LA-CH03-S03-Q07": {
      "markdown": "**提示：** 先寫 $(a,b,a+b)=c(1,1,0)$，再處理任意 $(r,s,t)$。\n\n若 $z\\in U\\cap W$，則 $z=(a,b,a+b)=c(1,1,0)$。比較座標得 $a=b=c$、$a+b=0$，所以 $2c=0$，在實數域得 $c=a=b=0$；故交集只含零。\n\n對任意 $(r,s,t)$，設 $(r,s,t)=(a,b,a+b)+(c,c,0)$。由前兩座標得 $a=r-c,b=s-c$；第三座標給 $r+s-2c=t$，故 $c=(r+s-t)/2$。如此取 $a=(r-s+t)/2$、$b=(-r+s+t)/2$ 即得到分解，因此和為整個 $\\mathbb R^3$。\n\n若 $u_1+w_1=u_2+w_2$，則 $u_1-u_2=w_2-w_1\\in U\\cap W=\\{0\\}$，所以 $u_1=u_2,w_1=w_2$，分解唯一。這也可作後續直和概念的銜接，不需事先使用直和定理。\n\n評分：交集的表示與零解 4 分；對任意目標建立分解並求係數 4 分；唯一性證明 2 分。自評「答對」須三個要求均完成；「部分正確」表示有完成交集或生成證明，但漏算、漏證其餘部分；「不會」表示未能建立空間元素的參數表示。"
    },
    "LA-CH03-S05-E01": {
      "markdown": "辨識：同時問和與交集，先寫座標式，比直接套維度公式清楚。$U$ 是 $(a,b,0)$，$W$ 是 $(0,c,d)$；和可得任意 $(a,b+c,d)$，所以為 $\\mathbb R^3$。交集的第一與第三座標都必須為零，所以是 $\\operatorname{span}(e_2)$。維度為 $2,2,3,1$，驗證 $3=2+2-1$。因交集非零，不是直和。常錯：和覆蓋全空間不代表分解唯一。"
    },
    "LA-CH03-S05-E02": {
      "markdown": "辨識：三個子空間，要分別檢查兩兩與整體。三條直線方向不同，兩兩交集皆為零；但 $(1,0,0)+(0,1,0)-(1,1,0)=0$，三項並非全零，所以整體不獨立。和維度是 2，維度總和是 3，也可反證。常錯：把「兩兩」條件誤當成完整獨立條件。"
    },
    "LA-CH03-S05-E03": {
      "markdown": "辨識：證明直和，要同時處理存在和唯一。解 $(x,y)=a(1,0)+b(1,1)$，比較座標得 $b=y,a=x-y$，所以分解為 $(x-y,0)+(y,y)$，且係數唯一。另若 $(a,0)=(b,b)$，得 $b=0,a=0$，也完成交集檢查。另一個補空間為 $\\operatorname{span}(0,1)$。常錯：補空間不要求固定為垂直方向。"
    },
    "LA-CH03-S05-E04": {
      "markdown": "辨識：轉置對稱性，使用加減轉置。$A^T=\\begin{pmatrix}1&2\\\\4&3\\end{pmatrix}$；故對稱部分 $B=\\begin{pmatrix}1&3\\\\3&3\\end{pmatrix}$，反對稱部分 $C=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$。核對 $B+C=A,B^T=B,C^T=-C$。唯一性來自兩子空間交集為零。常錯：忘記除以 2，或把反對稱矩陣對角線寫成非零。"
    },
    "LA-CH03-S05-E05": {
      "markdown": "辨識：遇到任意函數的奇偶拆分，先算 $f(-x)=e^{-x}+x^2-x$。所以 $f_e=(e^x+e^{-x})/2+x^2$，$f_o=(e^x-e^{-x})/2+x$。代入負值檢查奇偶，相加還原原函數。常錯：直接把 $e^x$ 歸類為奇函數或偶函數。"
    },
    "LA-CH03-S05-Q01": {
      "markdown": "**提示：** 分開想存在與唯一。\n\nA 只保證和空間內分解唯一，未保證覆蓋 $V$；B 只保證存在；C 同時保證兩者；D 沒排除交集非零，例如在 $\\mathbb R^2$ 取 $U=W=x$ 軸。",
      "optionExplanations": [
        "只保證和空間內分解唯一，未保證覆蓋 $V$",
        "只保證存在",
        "同時保證兩者",
        "沒排除交集非零，例如在 $\\mathbb R^2$ 取 $U=W=x$ 軸。"
      ]
    },
    "LA-CH03-S05-Q02": {
      "markdown": "**提示：** 兩個空間與三個空間的條件強度不同。\n\nA、B 被三條共面直線反例否定；C 沒保證覆蓋環境空間；D 對任兩子空間，交集為零就能使其和為直和。",
      "optionExplanations": [
        "被三條共面直線反例否定，兩兩交集為零不足以保證整體獨立。",
        "被三條共面直線反例否定，兩兩交集為零不足以保證整體獨立。",
        "沒有保證覆蓋環境空間。",
        "對任兩子空間，交集為零就能使其和為直和。"
      ]
    },
    "LA-CH03-S05-Q03": {
      "markdown": "**提示：** 相交部分在維度和中數了兩次。\n\nA 為 $3+2-1=4$；B 重複計算交集；C 超出生成組數量上限 5；D 把交集維度當成和維度。",
      "optionExplanations": [
        "為 $3+2-1=4$",
        "重複計算交集",
        "超出生成組數量上限 5",
        "把交集維度當成和維度。"
      ]
    },
    "LA-CH03-S05-Q04": {
      "markdown": "**提示：** 將答案轉置，確認變號且能還原 $A$。\n\nA 少除以 2，雖本身反對稱卻不是指定分解的反對稱部分；B 正確；C 是對稱部分；D 一般不反對稱。",
      "optionExplanations": [
        "少除以 2，雖本身反對稱卻不是指定分解的反對稱部分",
        "正確",
        "是對稱部分",
        "一般不反對稱。"
      ]
    },
    "LA-CH03-S05-Q05": {
      "markdown": "**提示：** 檢查斜線能否與 $x$ 軸張成平面。\n\nA 與原空間交集非零；B 加總仍只是 $x$ 軸；C 與 $x$ 軸交集為零且可張成平面；D 與 $x$ 軸交集仍為 $x$ 軸。",
      "optionExplanations": [
        "與原空間交集非零",
        "加總仍只是 $x$ 軸",
        "與 $x$ 軸交集為零且可張成平面",
        "與 $x$ 軸交集仍為 $x$ 軸。"
      ]
    },
    "LA-CH03-S05-Q06": {
      "markdown": "**提示：** 設 $(x,y)=a(1,1)+b(1,-1)$。\n\n比較座標得 $a+b=x,a-b=y$，因此 $a=(x+y)/2,b=(x-y)/2$，對所有向量均存在且唯一。$(4,2)=3(1,1)+1(1,-1)=(3,3)+(1,-1)$。評分 10 分：正確列式 2、解一般係數 3、存在與唯一說明 3、指定向量 2。"
    },
    "LA-CH03-S05-Q07": {
      "markdown": "**提示：** 先算 $f(-x)$，唯一性從交集證明。\n\n定義 $f_e=(f(x)+f(-x))/2,f_o=(f(x)-f(-x))/2$；代入負值證明奇偶，相加為 $f$。若有兩組分解，其偶部分之差等於奇部分之差，屬交集，故為零。指定例的偶部分是 $x^2+1$，奇部分是 $x^3$。評分 10 分：公式 2、奇偶驗證 2、相加還原 1、唯一性 3、例題 2。"
    },
    "LA-CH03-S06-E01": {
      "markdown": "辨識：三個相異節點求至多二次，套 Lagrange 基底可直接保證條件。\n$$L_0=\\frac{(x-1)(x-2)}2,\\quad L_1=-x(x-2),\\quad L_2=\\frac{x(x-1)}2.$$\n因此 $P=L_0+2L_1+5L_2=x^2+1$。檢查 $P(0)=1,P(1)=2,P(2)=5$。唯一性由兩個候選之差有三個根且次數至多 2 推得。常錯：$L_1$ 分母為 $(1-0)(1-2)=-1$，負號不能漏。"
    },
    "LA-CH03-S06-E02": {
      "markdown": "辨識：Lagrange 座標就是節點值。常數 1 在各節點值皆為 1，所以座標 $(1,1,1)^T$。$S=\\sum_iL_i$ 次數至多 2，在三個節點皆為 1；由唯一性 $S=1$。常錯：誤以為在單項式基底與 Lagrange 基底下座標相同。"
    },
    "LA-CH03-S06-E03": {
      "markdown": "辨識：四個相異節點，求至多三次；先保留乘積形式以降低展開錯誤。\n$$P=\\frac{x(x+7)(x+6)}{660}+\\frac{23x(x-5)(x+6)}{84}+\\frac{9x(x-5)(x+7)}{11}+\\frac{159(x-5)(x+7)(x+6)}{35}.$$\n逐項分母原本為 $660,-84,66,-210$，再乘指定值 $1,-23,-54,-954$ 得上式。展開得到\n$$P(x)=4x^3+35x^2-84x-954.$$\n代入四節點分別得到 $1,-23,-54,-954$；這只驗證上述轉錄數據的內部一致性，不代表原圖轉錄已核實。常錯：把 $-23/(-84)$ 寫成負數，或要求答案恰好三次。"
    },
    "LA-CH03-S06-E04": {
      "markdown": "辨識：矩陣每個元素都是函數取值，將未知係數組成一個多項式。通用證明見 K0306-04，依序用「齊次方程→根數上限→基底獨立→方陣可逆」。數值例的矩陣為 $\\begin{pmatrix}1&1\\\\1&3\\end{pmatrix}$，行列式為 $3-1=2\\ne0$。常錯：只有節點相異還不夠，一般函數族不保證可逆；需本題的多項式基底條件。"
    },
    "LA-CH03-S06-E05": {
      "markdown": "辨識：先檢查條件是否矛盾，不急著代公式。同一輸入不能同時取 1 與 2，所以第一問無解。第二問有 $P(x)=1+cx$（$c$ 任意），不唯一。常錯：把重複條件當作兩個獨立節點條件。"
    },
    "LA-CH03-S06-Q01": {
      "markdown": "**提示：** 節點數比允許的最高次數多 1。\n\nA 次數上限錯；B 結果可能低於三次；C 可加上所有節點因子的倍數而不改變取值，故不唯一；D 正是內插定理。",
      "optionExplanations": [
        "次數上限錯",
        "結果可能低於三次",
        "可加上所有節點因子的倍數而不改變取值，故不唯一",
        "正是內插定理。"
      ]
    },
    "LA-CH03-S06-Q02": {
      "markdown": "**提示：** 基底多項式在非自己的節點應為何？\n\nA 因非自身節點而為零；B 只在自身節點為 1；C 把索引與取值混淆；D 基底性質已能決定。",
      "optionExplanations": [
        "因非自身節點而為零",
        "只在自身節點為 1",
        "把索引與取值混淆",
        "基底性質已能決定。"
      ]
    },
    "LA-CH03-S06-Q03": {
      "markdown": "**提示：** 比較與常數 1 在各節點的值。\n\nA 在節點值不符；B 不是一般恆等式；C 與常數 1 在全部節點相同且次數上限符合；D 把每個多項式誤認為處處等於 1。",
      "optionExplanations": [
        "在節點值不符",
        "不是一般恆等式",
        "與常數 1 在全部節點相同且次數上限符合",
        "把每個多項式誤認為處處等於 1。"
      ]
    },
    "LA-CH03-S06-Q04": {
      "markdown": "**提示：** 使用非零多項式根數上限。\n\nA 一個根不夠；B 四根超過非零三次的根數上限；C 例如 $x(x-1)(x-2)$ 非零；D 只表示次數降低，例如 $p=1$ 仍非零。",
      "optionExplanations": [
        "一個根不夠",
        "四根超過非零三次的根數上限",
        "例如 $x(x-1)(x-2)$ 非零",
        "只表示次數降低，例如 $p=1$ 仍非零。"
      ]
    },
    "LA-CH03-S06-Q05": {
      "markdown": "**提示：** 直接填入四個矩陣元素。\n\nA 相異節點條件不能獨立於多項式空間條件使用；B 此組不構成 $P_1$ 的基底；C 行列式其實是 0；D 直接取值得到正確矩陣。",
      "optionExplanations": [
        "相異節點條件不能獨立於多項式空間條件使用",
        "此組不構成 $P_1$ 的基底",
        "行列式其實是 0",
        "直接取值得到正確矩陣。"
      ]
    },
    "LA-CH03-S06-Q06": {
      "markdown": "**提示：** 三個基底分別只在一個節點留下。\n\n$$L_0=x(x-1)/2,\\quad L_1=1-x^2,\\quad L_2=x(x+1)/2.$$\n$$P=2L_0+L_1+4L_2=2x^2+x+1.$$\n代入 $-1,0,1$ 分別得 $2,1,4$。由唯一性知這是唯一答案。評分 10 分：基底三式 3、權重組合 2、展開 2、代值 2、次數與唯一性 1。"
    },
    "LA-CH03-S06-Q07": {
      "markdown": "**提示：** 將齊次方程的係數組成一個多項式。\n\n設 $Mc=0$，令 $p=\\sum_jc_jf_j$；由各 $f_j\\in P_{n-1}$ 得 $p\\in P_{n-1}$。每列給出 $p(a_i)=0$，相異的 $n$ 個根迫使 $p=0$。基底的線性獨立性再迫使每個 $c_j=0$。因此核只有零，方陣可逆。評分 10 分：設齊次方程 1、組多項式與次數 2、轉成節點零值 2、根數結論 2、基底獨立 2、可逆結論 1。\n\n手寫題自評共通規則：答對＝核心推理完整且計算正確；部分正確＝方法方向正確但條件、證明或計算有缺；不會＝未能建立有效解題方法。評分是參考，不保存使用者實際自評或作答。"
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
  },
  "sourceReviews": [
    {
      "filename": "線性代數_1-1_第一階段審閱稿.md",
      "sha256": "e0c315121b1304eceab487c4518163a17d97cb2ff171472e3c720d5b8d6c2373",
      "contentVersion": "0.1",
      "status": "draft",
      "scope": "LA-CH01-S01",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "考古題摘要缺完整題幹與來源核對，未納入正式題庫。未建立 1-2 或大章綜合測驗。"
    },
    {
      "filename": "線性代數_1-3_基本列運算_第一階段審閱稿.md",
      "sha256": "81eae4a3e32c7f689f6ce1bce3caf41a2579f8eb5290ca5193adeaba94c76f4f",
      "contentVersion": "0.1.0",
      "status": "draft",
      "scope": "LA-CH01-S03",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未核實的考古候選索引不進正式題庫；未製作大章綜合測驗。"
    },
    {
      "filename": "1-4_線性方程組_第一階段審閱稿.md",
      "sha256": "7be931115258acf3154d33506cff995a9b94fcd856da25f5208432950c5e7c76",
      "contentVersion": "0.1",
      "status": "draft",
      "scope": "LA-CH01-S04",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未核實的考古候選索引不進正式題庫；未製作大章綜合測驗。"
    },
    {
      "filename": "線性代數_1-5_可逆矩陣的充要條件_第一階段審閱稿.md",
      "sha256": "7a754eedc9852a6d1985f3506176af3e669f4bcbd7f87d2af5973363205d2591",
      "contentVersion": "1.0",
      "status": "draft",
      "scope": "LA-CH01-S05",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未核實的考古候選索引不進正式題庫；未製作大章綜合測驗。"
    },
    {
      "filename": "線性代數_1-6_LU分解_第一階段審閱稿.md",
      "sha256": "800395ac671de60986ef7df89dfe1aeb43d03a994b1c1ed51e6e1812fcd5cd0b",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "LA-CH01-S06",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "原圖未重讀；教材例 38、39 依先前轉錄，仍待原圖確認，其他缺漏例題未補造。15 筆未核實考古候選不進正式題庫，未製作大章綜合測驗。"
    },
    {
      "filename": "1-7_基本行運算_第一階段審閱稿.md",
      "sha256": "2aba2439f8d0736c79a449feb074483064692c18946c36b90d22f46575bf7372",
      "contentVersion": "0.1.0-review",
      "status": "draft",
      "scope": "LA-CH01-S07",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "三張原圖未提供；原教材用語、題幹及教材歸屬待核對。編寫例題與模擬題清楚標示，前文更正保留。15 筆未核實考古候選不進正式題庫，未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-1至1-2_第一階段審閱稿.md",
      "sha256": "a2fa1f4a01eb600aaf5f11bbb32152478a082e4d7a38d0e635206f991aa7330e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S01",
      "sourceGroup": "資料結構_1-1至1-2_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依前次六張講義整理文字重編，原圖、原例題與章節切分仍待確認。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-1至1-2_第一階段審閱稿.md",
      "sha256": "a2fa1f4a01eb600aaf5f11bbb32152478a082e4d7a38d0e635206f991aa7330e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S02",
      "sourceGroup": "資料結構_1-1至1-2_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依前次六張講義整理文字重編，原圖、原例題與章節切分仍待確認。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-3與1-4_第一階段審閱稿.md",
      "sha256": "ad4d81d19933d6df6af6c8ee9ea668f184f3c70184f29f57abd520144e451a48",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S03",
      "sourceGroup": "資料結構_1-3與1-4_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前教材整理重編，原始五張圖片、英文定義、完整程式及計費表格仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。",
      "additionalSources": [
        {
          "filename": "資料結構_1-1至1-2_第一階段審閱稿.md",
          "sha256": "a2fa1f4a01eb600aaf5f11bbb32152478a082e4d7a38d0e635206f991aa7330e",
          "note": "原 1-3 開頭併入完整 1-3；保留 DS-E14 自編例題，不重複建立 DS-K14。"
        }
      ]
    },
    {
      "filename": "資料結構_1-3與1-4_第一階段審閱稿.md",
      "sha256": "ad4d81d19933d6df6af6c8ee9ea668f184f3c70184f29f57abd520144e451a48",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S04",
      "sourceGroup": "資料結構_1-3與1-4_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前教材整理重編，原始五張圖片、英文定義、完整程式及計費表格仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "sha256": "24803beeda468968a396e18129f3ce6b1112620e7f1f065214ed0ab3da7a045e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S05",
      "sourceGroup": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "sha256": "24803beeda468968a396e18129f3ce6b1112620e7f1f065214ed0ab3da7a045e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S06",
      "sourceGroup": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "sha256": "24803beeda468968a396e18129f3ce6b1112620e7f1f065214ed0ab3da7a045e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S07",
      "sourceGroup": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "sha256": "24803beeda468968a396e18129f3ce6b1112620e7f1f065214ed0ab3da7a045e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S08",
      "sourceGroup": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "sha256": "24803beeda468968a396e18129f3ce6b1112620e7f1f065214ed0ab3da7a045e",
      "status": "draft",
      "contentVersion": "0.1-review",
      "scope": "DS-CH01-S09",
      "sourceGroup": "資料結構_1-5至1-9_課程內容審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。"
    },
    {
      "filename": "2-1_2-2_行列式_第一階段審閱稿.md",
      "sha256": "a4a254ff2fde5e9e68c734fb3f65429c33edf8c2dc7a92995f70b10b9b55502c",
      "contentVersion": "0.1-review",
      "status": "draft",
      "scope": "LA-CH02-S01",
      "sourceGroup": "2-1_2-2_行列式_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未取得九張原圖，原教材完整性待核。缺少完整矩陣或題幹的課本例7、實例1、2、6未補造。同份跨節稿件共用候選索引，不逐節加總為獨立考古題數；未製作大章綜合測驗。"
    },
    {
      "filename": "2-1_2-2_行列式_第一階段審閱稿.md",
      "sha256": "a4a254ff2fde5e9e68c734fb3f65429c33edf8c2dc7a92995f70b10b9b55502c",
      "contentVersion": "0.1-review",
      "status": "draft",
      "scope": "LA-CH02-S02",
      "sourceGroup": "2-1_2-2_行列式_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未取得九張原圖，原教材完整性待核。缺少完整矩陣或題幹的課本例7、實例1、2、6未補造。同份跨節稿件共用候選索引，不逐節加總為獨立考古題數；未製作大章綜合測驗。"
    },
    {
      "filename": "2-3_行列式的性質_第一階段審閱稿.md",
      "sha256": "2db22e022880dbdd1f30b3d22c48df42fd5beb22fa3aedd4e8476b2e5c52195a",
      "contentVersion": "0.1-review",
      "status": "draft",
      "scope": "LA-CH02-S03",
      "sourceGroup": "2-3_行列式的性質_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未取得前次記載的14張原圖；完整原題、頁數及原矩陣仍待核對。本節餘因子記為 Kᵢⱼ，與前節記號不同，請先讀符號表。同份跨節稿件共用候選索引，不逐節加總為獨立考古題數；未製作大章綜合測驗。"
    },
    {
      "filename": "2-4_古典伴隨矩陣與克拉瑪法則_第一階段審閱稿.md",
      "sha256": "91e733219a58a860bf05b9bff984b0cd0db92f738c2772fcda0f20822d0109f8",
      "contentVersion": "0.1-review",
      "status": "draft",
      "scope": "LA-CH02-S04",
      "sourceGroup": "2-4_古典伴隨矩陣與克拉瑪法則_第一階段審閱稿.md",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "note": "未取得七張原圖；例23、例7的矩陣依文字轉述，原例號待核。原例28缺少矩陣未重建，另以自編例題練習。前文標成不可逆的矩陣已更正，其行列式為 −94，實際可逆。同份跨節稿件共用候選索引，不逐節加總為獨立考古題數；未製作大章綜合測驗。"
    },
    {
      "filename": "3-1_向量空間_第一階段內容審閱稿.md",
      "sha256": "bf0b76be9b5822319b7dfc05f5dc54e62ba3bb7243c14277444987240a2ecfed",
      "scope": "LA-CH03-S01",
      "contentVersion": "0.1.0",
      "status": "draft",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "sourceGroup": "3-1_向量空間_第一階段內容審閱稿.md",
      "note": "未取得原始五張教材圖片，考古題僅有候選摘要。候選索引不列正式題庫；跨節共用索引不重複加總。"
    },
    {
      "filename": "3-2_子空間_第一階段內容審閱稿.md",
      "sha256": "a423bc9f000a0ab8e2fcabadf54177638eeb01131bfe63c4b169b8f815775a9d",
      "scope": "LA-CH03-S02",
      "contentVersion": "1.0-draft",
      "status": "draft",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "sourceGroup": "3-2_子空間_第一階段內容審閱稿.md",
      "note": "未取得原始十張教材圖片，八道教學例題皆為自編，十五筆考古題只有摘要。候選索引不列正式題庫；跨節共用索引不重複加總。"
    },
    {
      "filename": "3-3_生成與線性獨立_第一階段內容稿.md",
      "sha256": "615638223fce3e7c4a70e63c8e2394d02e77ec8964c2eafb1b96f715436ffeb5",
      "scope": "LA-CH03-S03",
      "contentVersion": "0.1.0",
      "status": "draft",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "sourceGroup": "3-3_生成與線性獨立_第一階段內容稿.md",
      "note": "未取得原始十四張教材照片。八道彙編轉錄另置待原卷核對閱讀區，不列正式題庫與作答統計；其餘候選只有摘要。候選索引不列正式題庫；跨節共用索引不重複加總。",
      "readableTranscriptCount": 8
    },
    {
      "filename": "3-5_3-6_直和與Lagrange內插法_第一階段審閱稿.md",
      "sha256": "8987a01eff6e69b8179b9b0009c6c16436efd954989cbcafeac1dc1699c60773",
      "scope": "LA-CH03-S05",
      "contentVersion": "0.1.0",
      "status": "draft",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "sourceGroup": "3-5_3-6_直和與Lagrange內插法_第一階段審閱稿.md",
      "note": "未取得原始八張教材圖片；教材轉錄例題及四點內插數據待原圖核對。候選索引不列正式題庫；跨節共用索引不重複加總。"
    },
    {
      "filename": "3-5_3-6_直和與Lagrange內插法_第一階段審閱稿.md",
      "sha256": "8987a01eff6e69b8179b9b0009c6c16436efd954989cbcafeac1dc1699c60773",
      "scope": "LA-CH03-S06",
      "contentVersion": "0.1.0",
      "status": "draft",
      "pendingExamCount": 15,
      "pendingExamImported": false,
      "sourceGroup": "3-5_3-6_直和與Lagrange內插法_第一階段審閱稿.md",
      "note": "未取得原始八張教材圖片；教材轉錄例題及四點內插數據待原圖核對。候選索引不列正式題庫；跨節共用索引不重複加總。"
    }
  ],
  "pendingExamTranscripts": [
    {
      "id": "PY-NCTU-105-02",
      "groupId": "PY-NCTU-105-02",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 105 第2題",
      "examSubject": "線性代數與離散數學",
      "knowledgePointIds": [
        "LA-CH03-S03-K05"
      ],
      "text": "2. (4%) Let $\\{x_1,x_2,x_3\\}$ be linearly independent (LID) vectors in $R^n$. Determine and explain whether each of the following vector sets is LID.\n\n(a) $y_1=x_1+x_2$, $y_2=x_2+x_3$ and $y_3=x_3+x_1$.\n\n(b) $z_1=x_2-x_1$, $z_2=x_3-x_2$ and $z_3=x_3-x_1$.",
      "editorialSolution": "(a) 獨立。設 $\\sum a_iy_i=0$，按 $x_1,x_2,x_3$ 整理得 $a_1+a_3=a_1+a_2=a_2+a_3=0$，在實數域推出全零。(b) 相依，因 $z_1+z_2-z_3=0$。評分重點：使用已知獨立性比較係數；相依需有非平凡關係。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "45",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-102-05",
      "groupId": "PY-NCTU-102-05",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 102 第5題",
      "examSubject": "離散數學與線性代數",
      "knowledgePointIds": [
        "LA-CH03-S03-K05",
        "LA-CH03-S03-K07"
      ],
      "text": "5. (5%) The $a_1,a_2,\\ldots,a_n$ be $n$ columns vectors in $R^n$ and let $A=[a_1\\ a_2\\ \\cdots\\ a_n]$.\n\n(a) The vectors $a_1,a_2,\\ldots,a_n$ will be linearly independent if and only if $A$ is singular.\n\n(b) The vectors $a_1,a_2,\\ldots,a_n$ will be linearly independent if and only if $Ax=0$ has only the trivial solution $x=[0\\ 0\\ \\cdots\\ 0]^T$.\n\n(c) The rank if $A$ plus the nullity of $A$ equals $n$.\n\n(d) The rank of $A$ equals the rank of $A^T$.\n\n(e) All of the above are true.",
      "editorialSolution": "正確為 (b)(c)(d)。(a) 把 nonsingular 寫成 singular，故錯；(b) 是定義的矩陣形式；(c) rank-nullity 定理的欄數為 $n$；(d) row rank 等於 column rank；(e) 因 (a) 錯而錯。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "32",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-101-05",
      "groupId": "PY-NCTU-101-05",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 101 第5題",
      "examSubject": "卷名待核對",
      "knowledgePointIds": [
        "LA-CH03-S03-K06",
        "LA-CH03-S03-K07"
      ],
      "text": "5. (5%) In a vector space $V$, we have two sets $S=\\{u_1,\\ldots,u_n\\}$ and $Q=\\{v_1,\\ldots,v_m\\}$. Which of these statements can be true?\n\n(a) $S$ is linearly independent, $Q$ spans $V$, and $n>m$.\n\n(b) $V$ has dimension $n$, $Q$ spans $V$, and $m\\ge n$.\n\n(c) $S$ and $Q$ are bases for $V$, and $n=m$.\n\n(d) $S$ is linearly independent, $Q$ is a subset of $S$ and $Q$ is linearly dependent.\n\n(e) $S$ is linearly dependent, $Q$ is a subset of $S$ and $Q$ is linearly independent.",
      "editorialSolution": "可成立者為 (b)(c)(e)。(a) 獨立集大小不得大於有限生成集大小，正確不等式為 $n\\le m$，來源解答寫成嚴格不等式並不精確。(b) 生成集可含冗餘元素；(c) 基底大小一致；(d) 獨立集子集不會相依；(e) 相依集合可含獨立子集，例如 $\\{e_1,2e_1\\}$ 含 $\\{e_1\\}$。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "26",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-100-06",
      "groupId": "PY-NCTU-100-06",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 100 第6題",
      "examSubject": "卷名待核對",
      "knowledgePointIds": [
        "LA-CH03-S03-K04"
      ],
      "text": "6. (5%) Let $A$, $B$ and $C$ be three matrices, and $AB=C$. Which of the followings are true?\n\n(a) The row space of $C$ is a subspace of the row space of $A$.\n\n(b) The column space of $C$ is a subspace of the column space of $A$.\n\n(c) The row space of $C$ is a subspace of the row space of $B$.\n\n(d) If the column vectors of $A$ are linearly dependent, then the column vectors of $C$ are linearly dependent.\n\n(e) If the row vectors of $A$ are linearly dependent, then the row vectors of $C$ are linearly dependent.\n\n編輯狀態：首句與選項已對照來源頁面，原文沒有指定矩陣尺寸。row／column 空間若所在維度不同，也會使 (a) 的普遍敘述不成立。",
      "editorialSolution": "(b)(c)(e) 正確。(a) 一般只保證 $RS(AB)\\subseteq RS(B)$，不是 $RS(A)$。(b) $AB$ 的每個 column 都是 $A$ 的 columns 的線性組合。(c) 每個乘積 row 都是 $B$ 的 rows 的線性組合。(d) 反例取 $A=\\begin{bmatrix}1&0&0\\\\0&1&0\\end{bmatrix}$、$B=(1,0,0)^T$，$A$ columns 相依但 $AB=(1,0)^T$ 單向量獨立。(e) 若非零 row 係數 $z^T$ 使 $z^TA=0$，則 $z^TAB=0$，保留相依。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "19",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-102-08",
      "groupId": "PY-NCTU-102-08",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 102 第8題",
      "examSubject": "離散數學與線性代數",
      "knowledgePointIds": [
        "LA-CH03-S03-K03",
        "LA-CH03-S03-K04"
      ],
      "text": "8. (5%) Given a matrix $A=\\begin{bmatrix}2&3&1&5\\\\2&3&0&4\\\\0&0&1&1\\end{bmatrix}$, which of the following statements are TRUE?\n\n(a) $A$ has a column space of dimension 3.\n\n(b) The column space of $A$ is identical to the column space of matrix $\\begin{bmatrix}1&1&5\\\\1&0&4\\\\0&1&1\\end{bmatrix}$.\n\n(c) The left nullspace of $A$ is a line in $R^3$.\n\n(d) $A^TA$ is invertible.\n\n(e) If the two system $Ax=b$ and $Ax=c$ have the same shortest (minimal 2-norm) least-squares solution, then the projections of $b$ and $c$ onto the column space of $A$ must be identical.",
      "editorialSolution": "(b)(c)(e) 正確。令 $a=(1,1,0)^T$、$b=(1,0,1)^T$，原矩陣 columns 為 $2a,3a,b,4a+b$，故 column space 維度為 2，(a) 錯。比較矩陣 columns 為 $a,b,4a+b$，span 相同，(b) 對。(c) 左零空間維度 $3-2=1$，對。(d) 四 columns 相依，故 $A^TA$ 奇異。(e) 同一最小平方解 $x$ 給出相同 $Ax$，亦即兩者在 column space 的投影相同。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "34",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-103-04",
      "groupId": "PY-NCTU-103-04",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 103 第4題",
      "examSubject": "線性代數與離散數學",
      "knowledgePointIds": [
        "LA-CH03-S03-K04",
        "LA-CH03-S03-K07"
      ],
      "text": "4. Consider the matrix $A=\\begin{bmatrix}1&2&1&2\\\\1&2&2&5\\\\0&0&1&3\\end{bmatrix}$.\n\n(a) (2%) Compute the dimensions of the column space $C(A)$ and the null-space $N(A)$.\n\n(b) (2%) Give and orthogonal basis for $C(A)$ and $N(A)$, respectively.\n\n(c) (2%) Find a projection matrix that projects any vector $b\\in R^3$ onto the column space $C(A)$.\n\n(d) (4%) Find the least-squares solutions to the problem $Ax=(-1,3,1)^T$.\n\n(e) (5%) Find the minimum-length, least-squares solutions to the problem $Ax=(-1,3,1)^T$.",
      "editorialSolution": "(a) rank=2，nullity=2。(b) column space 可取正交基底 $(1,1,0)^T,(-1,1,2)^T$；null space 可取 $(-2,1,0,0)^T,(1/5,2/5,-3,1)^T$。前者由原矩陣 columns 1、3 做正交化；後者由化簡方程 $x_1+2x_2-x_4=0,x_3+3x_4=0$ 求出後正交化。(c) 投影矩陣 $P=\\frac16\\begin{bmatrix}4&2&-2\\\\2&4&2\\\\-2&2&4\\end{bmatrix}$，可用兩正交基底各自外積除以長度平方相加求得。(d) 先算 $P(-1,3,1)^T=(0,2,2)^T$，解 $Ax=(0,2,2)^T$ 得 $x=(-2-2s+t,s,2-3t,t)^T$。(e) 使此解與零空間正交：$5s-2t+4=0$、$2s-11t+8=0$，解得 $s=-28/51,t=32/51$，故最短解為 $(-14,-28,6,32)^T/51$。本題 (c)～(e) 屬後續內積與最小平方內容，初學本節先做 (a)，(b) 先找任意基底即可，勿冒稱已完成原題的正交要求。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "38–39",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-104-05",
      "groupId": "PY-NCTU-104-05",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 104 第5題",
      "examSubject": "線性代數與離散數學",
      "knowledgePointIds": [
        "LA-CH03-S03-K07"
      ],
      "text": "5. (10%) Let $A$ be an $m\\times n$ matrix, $x\\in R^n$ denote a vector, and $L(x)=Ax$ be a linear transformation. row($A$), col($A$), and $N(A)$ respectively represent the row space, the column space, and the null space of $A$, rank($A$) and nullity($A$) respectively represent the rank and nullity of $A$. kernel($L$) and range($L$) respectively represent the kernel and the range of $L$. If $V$ is a vector space/subspace, dim($V$) denotes the dimension of $V$. Consider the following statements:\n\n(A) row($A$)$=R^n$.\n(B) col($A$)$=R^m$.\n(C) dim(col($A$))$<m$.\n(D) $Ax=0$ has infinite solutions.\n(E) $Ax=0$ has exactly one solution.\n(F) $Ax=0$ has no solutions.\n(G) $Ax=0$ is an inconsistent system.\n(H) $Ax=0$ is a consistent system.\n(I) $N(A)=\\varnothing$.\n(J) rank($A$)$=m$.\n(K) nullity($A$)$=m$.\n(L) kernel($L$)$=R^n$.\n(M) Range($L$)$=R^m$.\n(N) $AA^T$ is not symmetric.\n\n(a) (2%) which statements are always false?\n(b) (2%) which statements are always true?\n(c) (2%) Which statements are equivalent to the statement (B)?\n(d) (2%) What does the statement (L) imply about $L$?",
      "editorialSolution": "(a) F、G、I、N 永遠錯：齊次方程有零解，零空間非空，$AA^T$ 對稱。(b) H 永遠對。(c) J、M 與 B 等價。(d) 應回答 $L$ 為零映射，因所有 $x$ 均在 kernel 中。來源只寫 D、H 未直接回答題目；若 $n\\ge1$，零映射確實有無限多齊次解。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "41",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    },
    {
      "id": "PY-NCTU-106-08",
      "groupId": "PY-NCTU-106-08",
      "subjectId": "linear-algebra",
      "sectionId": "LA-CH03-S03",
      "title": "交大資工 106 第8題",
      "examSubject": "線性代數與離散數學",
      "knowledgePointIds": [
        "LA-CH03-S03-K05",
        "LA-CH03-S03-K07"
      ],
      "text": "8. (10%)\n\n(a) (5%) Suppose $A$ is a 4 by 5 matrix and $B$ is a 5 by 7 matrix and $AB=0$. If rank($B$)=2, what is the maximum possible rank($A$)? and why?\n\n(b) (5%) Let $u,v$ and $w$ be vectors in $R^n$. Suppose $A$ is the sum of three matrices: $A=uv^T+vw^T+wu^T$. If $x_1u+x_2v+x_3w=0$ has a nonzero solution $(x_1,x_2,x_3)$, what is the maximum possible rank($A$)? And why?",
      "editorialSolution": "(a) $CS(B)\\subseteq N(A)$，故 $2\\le5-\\operatorname{rank}(A)$，上界 3 可達：$A=[I_3\\ 0]$，$B$ 取只有第 4、5 rows 非零且互相獨立的矩陣。(b) 所有 $Ax=u(v^Tx)+v(w^Tx)+w(u^Tx)$ 都在 span$\\{u,v,w\\}$ 中，而已知三向量相依，故 rank 不超過 2，也不超過 $n$。$n\\ge2$ 時取 $u=e_1,v=e_2,w=e_1$，在前兩維得到 $\\begin{bmatrix}1&1\\\\1&0\\end{bmatrix}$，行列式為 -1，rank=2；$n=1$ 時最大為 1。因此一般答案為 $\\min(n,2)$（$n$ 為正整數）。來源推導不足以作正式詳解，已更正。",
      "status": "pending_original",
      "source": {
        "kind": "unverified_compilation",
        "title": "102～106年各校線代解答.zip／102-106線代題庫解答.pdf",
        "pages": "50",
        "pageConvention": "PDF 頁序，非頁尾頁碼",
        "note": "使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。",
        "filename": "3-3_生成與線性獨立_第一階段內容稿.md"
      }
    }
  ]
};
