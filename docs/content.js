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
    }
  ]
};
