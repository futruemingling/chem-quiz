 const QUESTION_BANK = [
  // =========================
  // CH1 緒論（1-30）
  // =========================
  {
    id:"CH1-001",
    chapter:"CH1 緒論",
    section:"生物化學的定義",
    difficulty:"easy",
    tags:["定義","基礎"],
    question:"下列何者最符合生物化學的核心定義？",
    options:[
      "只研究細胞型態與組織切片",
      "研究生物體內化學組成、分子結構與生命活動中的化學變化",
      "只研究遺傳與染色體分離",
      "只研究藥物臨床療效"
    ],
    answer:1,
    explanation:"生物化學重點在於從分子層次研究生物體的化學組成、結構與生命過程中的化學反應。"
  },
  {
    id:"CH1-002",
    chapter:"CH1 緒論",
    section:"研究對象",
    difficulty:"easy",
    tags:["生物大分子"],
    question:"下列哪一組最符合生物化學常見研究的生物大分子？",
    options:["蛋白質、核酸、多糖、脂質","血球、骨骼、肌肉、器官","病毒、細菌、真菌、寄生蟲","心臟、肝臟、腎臟、肺臟"],
    answer:0,
    explanation:"生物化學常聚焦於蛋白質、核酸、多糖與脂質等生物大分子及其代謝。"
  },
  {
    id:"CH1-003",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["歷史"],
    question:"1926 年 Sumner 的重要貢獻是什麼？",
    options:["提出中心法則","證明 DNA 是遺傳物質","從刀豆提取脲酶結晶，證明酶是蛋白質","建立 DNA 雙螺旋模型"],
    answer:2,
    explanation:"Sumner 從刀豆中提取脲酶結晶，證明酶的化學本質是蛋白質。"
  },
  {
    id:"CH1-004",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["DNA","歷史"],
    question:"下列哪一項屬於 1953 年的重要里程碑？",
    options:["Crick 提出中心法則","Watson 與 Crick 提出 DNA 雙螺旋模型","Avery 證明 DNA 是遺傳物質","Sanger 建立 DNA 定序方法"],
    answer:1,
    explanation:"1953 年 Watson 與 Crick 提出 DNA 雙螺旋模型。"
  },
  {
    id:"CH1-005",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["遺傳物質","歷史"],
    question:"Avery 等人的研究主要證明了什麼？",
    options:["RNA 是遺傳物質","DNA 是遺傳物質","蛋白質是遺傳物質","脂質是遺傳物質"],
    answer:1,
    explanation:"Avery 等人的經典實驗支持 DNA 是遺傳物質。"
  },
  {
    id:"CH1-006",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"easy",
    tags:["中心法則"],
    question:"正常遺傳資訊流動的主要方向為何？",
    options:["RNA → DNA → 蛋白質","DNA → RNA → 蛋白質","蛋白質 → DNA → RNA","DNA → 蛋白質 → RNA"],
    answer:1,
    explanation:"中心法則的核心是 DNA 先轉錄成 RNA，再翻譯成蛋白質。"
  },
  {
    id:"CH1-007",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"medium",
    tags:["逆轉錄","病毒"],
    question:"哪一個現象屬於對中心法則的重要補充？",
    options:["糖解作用","逆轉錄","氧化磷酸化","轉胺基作用"],
    answer:1,
    explanation:"某些 RNA 病毒可利用逆轉錄酶把 RNA 轉成 DNA。"
  },
  {
    id:"CH1-008",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"easy",
    tags:["複製"],
    question:"DNA → DNA 這個過程稱為什麼？",
    options:["轉錄","翻譯","複製","逆轉錄"],
    answer:2,
    explanation:"DNA 以自身為模板合成新的 DNA，稱為複製。"
  },
  {
    id:"CH1-009",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"easy",
    tags:["轉錄"],
    question:"DNA → RNA 這個過程稱為什麼？",
    options:["複製","轉錄","翻譯","水解"],
    answer:1,
    explanation:"以 DNA 為模板合成 RNA 的過程叫轉錄。"
  },
  {
    id:"CH1-010",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"easy",
    tags:["翻譯"],
    question:"RNA → 蛋白質 這個過程稱為什麼？",
    options:["複製","轉錄","翻譯","氧化"],
    answer:2,
    explanation:"mRNA 上的密碼資訊在核糖體被翻譯成蛋白質。"
  },
  {
    id:"CH1-011",
    chapter:"CH1 緒論",
    section:"元素",
    difficulty:"easy",
    tags:["元素"],
    question:"生命常見六大元素為何？",
    options:["C、H、O、N、P、S","Ca、K、Na、Mg、Fe、Zn","C、H、Na、Cl、K、P","O、N、Fe、Cu、Zn、S"],
    answer:0,
    explanation:"生命常見六大元素為 C、H、O、N、P、S。"
  },
  {
    id:"CH1-012",
    chapter:"CH1 緒論",
    section:"元素",
    difficulty:"medium",
    tags:["元素","基礎"],
    question:"下列何者不屬於最常被列為生命六大元素？",
    options:["C","N","P","Ca"],
    answer:3,
    explanation:"Ca 雖然重要，但通常不列入 C、H、O、N、P、S 六大元素中。"
  },
  {
    id:"CH1-013",
    chapter:"CH1 緒論",
    section:"化學鍵",
    difficulty:"easy",
    tags:["共價鍵"],
    question:"下列哪一種鍵通常被視為最強且較穩固？",
    options:["共價鍵","氫鍵","凡得瓦力","疏水性交互作用"],
    answer:0,
    explanation:"共價鍵為較強且穩定的鍵結。"
  },
  {
    id:"CH1-014",
    chapter:"CH1 緒論",
    section:"化學鍵",
    difficulty:"easy",
    tags:["非共價作用力"],
    question:"下列何者屬於非共價作用力？",
    options:["肽鍵","磷酸二酯鍵","氫鍵","雙硫鍵"],
    answer:2,
    explanation:"氫鍵屬於非共價作用力，其餘皆屬共價鍵。"
  },
  {
    id:"CH1-015",
    chapter:"CH1 緒論",
    section:"化學鍵",
    difficulty:"medium",
    tags:["非共價作用力"],
    question:"下列哪一組全部都屬於非共價作用力？",
    options:[
      "氫鍵、凡得瓦力、離子鍵、疏水性交互作用",
      "肽鍵、雙硫鍵、離子鍵、氫鍵",
      "磷酸二酯鍵、肽鍵、疏水作用、氫鍵",
      "雙硫鍵、凡得瓦力、肽鍵、離子鍵"
    ],
    answer:0,
    explanation:"非共價作用力常包括氫鍵、凡得瓦力、離子鍵與疏水性交互作用。"
  },
  {
    id:"CH1-016",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"easy",
    tags:["水分子"],
    question:"水分子的鍵角約為多少？",
    options:["90°","104.5°","120°","180°"],
    answer:1,
    explanation:"水分子為彎曲構型，O-H 鍵角約 104.5°。"
  },
  {
    id:"CH1-017",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"easy",
    tags:["高比熱"],
    question:"水具有高比熱，對生物的主要意義是什麼？",
    options:["容易蒸發","維持溫度相對穩定","容易導電","增加黏滯度"],
    answer:1,
    explanation:"高比熱使水在吸熱放熱時溫度變化較小，有助維持體溫穩定。"
  },
  {
    id:"CH1-018",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"medium",
    tags:["密度"],
    question:"水在幾度時密度最大？",
    options:["0°C","4°C","25°C","100°C"],
    answer:1,
    explanation:"水在 4°C 時密度最大。"
  },
  {
    id:"CH1-019",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"easy",
    tags:["表面張力"],
    question:"水具有高表面張力，主要與下列哪個特性最相關？",
    options:["水分子黏性強","電子很多","分子量大","一定帶負電"],
    answer:0,
    explanation:"水分子之間的內聚力使水具有高表面張力。"
  },
  {
    id:"CH1-020",
    chapter:"CH1 緒論",
    section:"酸鹼",
    difficulty:"easy",
    tags:["pH"],
    question:"pH 的計算公式為何？",
    options:["pH = log[H+]","pH = -log[H+]","pH = [OH-]/[H+]","pH = [H+] + [OH-]"],
    answer:1,
    explanation:"pH 定義為氫離子濃度的負對數。"
  },
  {
    id:"CH1-021",
    chapter:"CH1 緒論",
    section:"酸鹼",
    difficulty:"medium",
    tags:["血液","pH"],
    question:"人體正常血液 pH 大約為哪個範圍？",
    options:["6.8–7.0","7.35–7.45","7.8–8.2","8.5–9.0"],
    answer:1,
    explanation:"人體正常血液 pH 約 7.35–7.45。"
  },
  {
    id:"CH1-022",
    chapter:"CH1 緒論",
    section:"酸鹼",
    difficulty:"easy",
    tags:["酸","鹼"],
    question:"下列對酸的描述何者正確？",
    options:["可接受 H+","可解離出 H+","只能解離出 OH-","一定呈中性"],
    answer:1,
    explanation:"酸可在水溶液中提供或解離出 H+。"
  },
  {
    id:"CH1-023",
    chapter:"CH1 緒論",
    section:"酸鹼",
    difficulty:"easy",
    tags:["酸","鹼"],
    question:"下列對鹼的描述何者正確？",
    options:["只能提供 H+","只能提供電子","可接受 H+ 或解離出 OH-","一定帶負電"],
    answer:2,
    explanation:"鹼可接受質子，或在水中解離出 OH-。"
  },
  {
    id:"CH1-024",
    chapter:"CH1 緒論",
    section:"緩衝系統",
    difficulty:"medium",
    tags:["重碳酸鹽"],
    question:"細胞外液中最重要的緩衝系統為何？",
    options:["磷酸鹽緩衝系統","蛋白質緩衝系統","重碳酸鹽-碳酸緩衝系統","血紅素-氧基血紅素緩衝系統"],
    answer:2,
    explanation:"細胞外液最重要的緩衝系統是重碳酸鹽-碳酸系統。"
  },
  {
    id:"CH1-025",
    chapter:"CH1 緒論",
    section:"緩衝系統",
    difficulty:"medium",
    tags:["磷酸鹽"],
    question:"磷酸鹽緩衝系統在人體中常與哪項功能關聯較大？",
    options:["細胞外液主要緩衝","腎臟排酸","運送氧氣","肽鍵形成"],
    answer:1,
    explanation:"磷酸鹽緩衝系統常與細胞內液及腎臟排酸有關。"
  },
  {
    id:"CH1-026",
    chapter:"CH1 緒論",
    section:"緩衝系統",
    difficulty:"medium",
    tags:["蛋白質緩衝"],
    question:"人體最大的緩衝系統常被認為是哪一種？",
    options:["重碳酸鹽系統","蛋白質緩衝系統","磷酸鹽緩衝系統","乳酸緩衝系統"],
    answer:1,
    explanation:"蛋白質因數量多、官能基多，被視為人體重要且龐大的緩衝系統。"
  },
  {
    id:"CH1-027",
    chapter:"CH1 緒論",
    section:"代謝",
    difficulty:"medium",
    tags:["合成代謝"],
    question:"合成代謝（anabolism）的特徵為何？",
    options:["大分子分解成小分子並釋能","小分子合成大分子並耗能","只發生在細胞外","不涉及 ATP"],
    answer:1,
    explanation:"合成代謝是建構分子的過程，通常需要能量。"
  },
  {
    id:"CH1-028",
    chapter:"CH1 緒論",
    section:"代謝",
    difficulty:"medium",
    tags:["分解代謝"],
    question:"分解代謝（catabolism）的特徵為何？",
    options:["小分子合成大分子","大分子分解成小分子並釋放能量","一定只在肝臟發生","不需要酶"],
    answer:1,
    explanation:"分解代謝會把大分子拆解成小分子，同時釋放能量。"
  },
  {
    id:"CH1-029",
    chapter:"CH1 緒論",
    section:"能量代謝",
    difficulty:"easy",
    tags:["ATP"],
    question:"ATP 常被稱為細胞的什麼？",
    options:["遺傳密碼","能量貨幣","結構骨架","緩衝主體"],
    answer:1,
    explanation:"ATP 是細胞最常用的直接能量載體，因此被稱為能量貨幣。"
  },
  {
    id:"CH1-030",
    chapter:"CH1 緒論",
    section:"臨床",
    difficulty:"medium",
    tags:["鐮刀型貧血"],
    question:"鐮刀型貧血與哪一種胺基酸取代最相關？",
    options:["甘胺酸取代離胺酸","麩胺酸取代纈胺酸","纈胺酸取代麩胺酸","絲胺酸取代半胱胺酸"],
    answer:2,
    explanation:"鐮刀型貧血是血紅蛋白 β 鏈中麩胺酸被纈胺酸取代所致。"
  },

  // =========================
  // CH2 蛋白質（31-65）
  // =========================
  {
    id:"CH2-001",
    chapter:"CH2 蛋白質",
    section:"胺基酸結構",
    difficulty:"easy",
    tags:["胺基酸"],
    question:"標準 α-胺基酸中央碳通常連接哪四種基團？",
    options:["羥基、磷酸基、R基、H","胺基、羧基、R基、H","胺基、甲基、羥基、H","羧基、醣基、R基、H"],
    answer:1,
    explanation:"典型 α-胺基酸含有胺基、羧基、R 基側鏈與氫原子。"
  },
  {
    id:"CH2-002",
    chapter:"CH2 蛋白質",
    section:"立體異構",
    difficulty:"easy",
    tags:["L型","D型"],
    question:"地球上生物蛋白質中的胺基酸主要是哪一型？",
    options:["D 型","L 型","DL 混合型","都不是"],
    answer:1,
    explanation:"生物蛋白質主要使用 L 型胺基酸。"
  },
  {
    id:"CH2-003",
    chapter:"CH2 蛋白質",
    section:"立體異構",
    difficulty:"easy",
    tags:["甘胺酸"],
    question:"下列哪個胺基酸因 R 基為 H，因此沒有光學異構？",
    options:["丙胺酸","脯胺酸","甘胺酸","纈胺酸"],
    answer:2,
    explanation:"甘胺酸側鏈是氫，因此 α 碳不具手性。"
  },
  {
    id:"CH2-004",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"easy",
    tags:["胺基酸數量"],
    question:"蛋白質常見標準胺基酸共有幾種？",
    options:["4 種","9 種","20 種","64 種"],
    answer:2,
    explanation:"一般生物化學基礎課程中，標準胺基酸共 20 種。"
  },
  {
    id:"CH2-005",
    chapter:"CH2 蛋白質",
    section:"必需胺基酸",
    difficulty:"medium",
    tags:["必需胺基酸"],
    question:"下列哪一個屬於必需胺基酸？",
    options:["Asp","Glu","Leu","Ser"],
    answer:2,
    explanation:"Leu 為必需胺基酸。"
  },
  {
    id:"CH2-006",
    chapter:"CH2 蛋白質",
    section:"必需胺基酸",
    difficulty:"medium",
    tags:["必需胺基酸"],
    question:"下列哪一組全部都是必需胺基酸？",
    options:[
      "Val、Leu、Ile",
      "Gly、Ala、Ser",
      "Asp、Glu、Asn",
      "Cys、Tyr、Gln"
    ],
    answer:0,
    explanation:"Val、Leu、Ile 都屬必需胺基酸。"
  },
  {
    id:"CH2-007",
    chapter:"CH2 蛋白質",
    section:"分類",
    difficulty:"medium",
    tags:["酸性胺基酸"],
    question:"下列何者屬於酸性胺基酸？",
    options:["Lys","Arg","Asp","His"],
    answer:2,
    explanation:"Asp 與 Glu 屬酸性胺基酸。"
  },
  {
    id:"CH2-008",
    chapter:"CH2 蛋白質",
    section:"分類",
    difficulty:"medium",
    tags:["鹼性胺基酸"],
    question:"下列何者屬於鹼性胺基酸？",
    options:["Tyr","His","Cys","Glu"],
    answer:1,
    explanation:"His、Lys、Arg 為鹼性胺基酸。"
  },
  {
    id:"CH2-009",
    chapter:"CH2 蛋白質",
    section:"分類",
    difficulty:"medium",
    tags:["非極性"],
    question:"下列何者屬於非極性中性胺基酸？",
    options:["Val","Asp","Lys","Asn"],
    answer:0,
    explanation:"Val 為非極性中性胺基酸。"
  },
  {
    id:"CH2-010",
    chapter:"CH2 蛋白質",
    section:"分類",
    difficulty:"medium",
    tags:["極性不帶電"],
    question:"下列何者屬於極性但不帶電的胺基酸？",
    options:["Ser","Arg","Glu","Val"],
    answer:0,
    explanation:"Ser 屬極性不帶電胺基酸。"
  },
  {
    id:"CH2-011",
    chapter:"CH2 蛋白質",
    section:"特殊結構",
    difficulty:"medium",
    tags:["脯胺酸"],
    question:"脯胺酸常讓 α-螺旋中斷，主要因為它具有哪項特徵？",
    options:["帶負電","環狀結構且為次級胺基酸","可形成雙硫鍵","帶有吲哚環"],
    answer:1,
    explanation:"脯胺酸為環狀、次級胺基酸，容易造成肽鏈彎折。"
  },
  {
    id:"CH2-012",
    chapter:"CH2 蛋白質",
    section:"半胱胺酸",
    difficulty:"medium",
    tags:["雙硫鍵"],
    question:"蛋白質中的雙硫鍵主要由哪種胺基酸形成？",
    options:["Ser","Thr","Cys","Gly"],
    answer:2,
    explanation:"兩個 Cys 的 -SH 可被氧化形成雙硫鍵。"
  },
  {
    id:"CH2-013",
    chapter:"CH2 蛋白質",
    section:"芳香族胺基酸",
    difficulty:"medium",
    tags:["芳香族"],
    question:"下列何者屬於芳香族胺基酸？",
    options:["Phe","Lys","Asp","Gly"],
    answer:0,
    explanation:"Phe、Tyr、Trp 常列為芳香族胺基酸。"
  },
  {
    id:"CH2-014",
    chapter:"CH2 蛋白質",
    section:"功能相關",
    difficulty:"medium",
    tags:["磷酸化"],
    question:"下列哪個胺基酸常因含有 -OH 而成為磷酸化位點？",
    options:["Ser","Val","Gly","Leu"],
    answer:0,
    explanation:"Ser、Thr、Tyr 常見為蛋白質磷酸化位點。"
  },
  {
    id:"CH2-015",
    chapter:"CH2 蛋白質",
    section:"功能相關",
    difficulty:"medium",
    tags:["磷酸化"],
    question:"下列哪一組都常見於蛋白質磷酸化位點？",
    options:["Ser、Thr、Tyr","Asp、Glu、Arg","Val、Leu、Ile","Gly、Ala、Pro"],
    answer:0,
    explanation:"Ser、Thr、Tyr 因側鏈含可被磷酸化的官能基，最常被提到。"
  },
  {
    id:"CH2-016",
    chapter:"CH2 蛋白質",
    section:"特殊胺基酸",
    difficulty:"medium",
    tags:["His"],
    question:"哪一種胺基酸因 pKa 接近生理 pH，常在酶活化位中扮演重要角色？",
    options:["Val","His","Phe","Gly"],
    answer:1,
    explanation:"His 的 pKa 接近中性，常作為質子供受體。"
  },
  {
    id:"CH2-017",
    chapter:"CH2 蛋白質",
    section:"兩性離子",
    difficulty:"easy",
    tags:["zwitterion"],
    question:"胺基酸在水中常呈現帶正負電的形式，稱為什麼？",
    options:["自由基","兩性離子","同位素","酯鍵"],
    answer:1,
    explanation:"胺基酸在適當 pH 下常形成兩性離子（zwitterion）。"
  },
  {
    id:"CH2-018",
    chapter:"CH2 蛋白質",
    section:"等電點",
    difficulty:"easy",
    tags:["pI"],
    question:"等電點（pI）的意義為何？",
    options:["分子總電荷為零時的 pH","蛋白質開始變性時的 pH","酸性最強時的 pH","鹼性最強時的 pH"],
    answer:0,
    explanation:"pI 是分子淨電荷為零時所對應的 pH。"
  },
  {
    id:"CH2-019",
    chapter:"CH2 蛋白質",
    section:"等電點",
    difficulty:"medium",
    tags:["pI"],
    question:"當溶液 pH 大於胺基酸的 pI 時，該胺基酸整體通常呈現何種電荷？",
    options:["正電","負電","中性","一定不帶電"],
    answer:1,
    explanation:"pH > pI 時通常去質子化較多，因此整體偏負電。"
  },
  {
    id:"CH2-020",
    chapter:"CH2 蛋白質",
    section:"等電點",
    difficulty:"medium",
    tags:["pI"],
    question:"當溶液 pH 小於胺基酸的 pI 時，該胺基酸整體通常呈現何種電荷？",
    options:["正電","負電","完全中性","一定沉澱"],
    answer:0,
    explanation:"pH < pI 時較容易帶有較多質子，因此整體偏正電。"
  },
  {
    id:"CH2-021",
    chapter:"CH2 蛋白質",
    section:"肽鍵",
    difficulty:"easy",
    tags:["肽鍵"],
    question:"肽鍵是由哪兩個基團脫水縮合形成？",
    options:["胺基與羧基","羥基與磷酸基","醛基與酮基","甲基與羧基"],
    answer:0,
    explanation:"一個胺基酸的胺基與另一個胺基酸的羧基脫水縮合形成肽鍵。"
  },
  {
    id:"CH2-022",
    chapter:"CH2 蛋白質",
    section:"肽鍵",
    difficulty:"medium",
    tags:["肽鍵"],
    question:"下列對肽鍵的敘述何者正確？",
    options:[
      "屬非共價鍵，容易自由旋轉",
      "本質是醯胺鍵，具有部分雙鍵特性",
      "通常為順式結構為主",
      "不涉及脫水縮合"
    ],
    answer:1,
    explanation:"肽鍵屬醯胺鍵，具有部分雙鍵性質，因此不易自由旋轉。"
  },
  {
    id:"CH2-023",
    chapter:"CH2 蛋白質",
    section:"一級結構",
    difficulty:"easy",
    tags:["蛋白質結構"],
    question:"蛋白質的一級結構主要是指什麼？",
    options:["α-螺旋排列","β-摺板排列","胺基酸線性序列","多條鏈聚合方式"],
    answer:2,
    explanation:"一級結構就是胺基酸的線性排列順序。"
  },
  {
    id:"CH2-024",
    chapter:"CH2 蛋白質",
    section:"二級結構",
    difficulty:"easy",
    tags:["二級結構"],
    question:"下列何者屬於蛋白質二級結構？",
    options:["α-螺旋","胺基酸序列","多亞基聚合","糖化修飾"],
    answer:0,
    explanation:"α-螺旋與 β-摺板屬於二級結構。"
  },
  {
    id:"CH2-025",
    chapter:"CH2 蛋白質",
    section:"二級結構",
    difficulty:"medium",
    tags:["氫鍵"],
    question:"蛋白質二級結構主要靠哪種作用力穩定？",
    options:["肽鍵","氫鍵","疏水作用","雙硫鍵"],
    answer:1,
    explanation:"二級結構如 α-螺旋與 β-摺板主要靠氫鍵穩定。"
  },
  {
    id:"CH2-026",
    chapter:"CH2 蛋白質",
    section:"α-螺旋",
    difficulty:"medium",
    tags:["α-螺旋"],
    question:"下列何者最符合 α-螺旋的特性？",
    options:["通常為左手螺旋","每圈約 3.6 個胺基酸","由多條肽鏈形成","主要靠雙硫鍵穩定"],
    answer:1,
    explanation:"α-螺旋通常為右手螺旋，每圈約 3.6 個胺基酸。"
  },
  {
    id:"CH2-027",
    chapter:"CH2 蛋白質",
    section:"β-摺板",
    difficulty:"medium",
    tags:["β-sheet"],
    question:"β-摺板的穩定主要也來自哪種作用力？",
    options:["氫鍵","共價雙硫鍵","離子幫浦","ATP 水解"],
    answer:0,
    explanation:"β-摺板同樣主要由主鏈之間的氫鍵穩定。"
  },
  {
    id:"CH2-028",
    chapter:"CH2 蛋白質",
    section:"三級結構",
    difficulty:"easy",
    tags:["三級結構"],
    question:"蛋白質三級結構主要指什麼？",
    options:["單條肽鏈整體三維構形","多條鏈的組裝","胺基酸序列","只有 α-螺旋部分"],
    answer:0,
    explanation:"三級結構指單條多肽鏈整體摺疊後的三維構形。"
  },
  {
    id:"CH2-029",
    chapter:"CH2 蛋白質",
    section:"三級結構",
    difficulty:"medium",
    tags:["疏水作用"],
    question:"穩定蛋白質三級結構最主要的力量通常是什麼？",
    options:["疏水性交互作用","肽鍵","磷酸二酯鍵","金屬鍵"],
    answer:0,
    explanation:"蛋白質三級結構中最重要的穩定力通常是疏水作用。"
  },
  {
    id:"CH2-030",
    chapter:"CH2 蛋白質",
    section:"三級結構",
    difficulty:"medium",
    tags:["穩定力"],
    question:"下列何者可穩定蛋白質三級結構？",
    options:["疏水作用、氫鍵、離子鍵、雙硫鍵","只有肽鍵","只有共價鍵","只有凡得瓦力"],
    answer:0,
    explanation:"三級結構可由多種作用力共同穩定。"
  },
  {
    id:"CH2-031",
    chapter:"CH2 蛋白質",
    section:"四級結構",
    difficulty:"easy",
    tags:["四級結構"],
    question:"蛋白質四級結構是指什麼？",
    options:["單一肽鏈序列","局部 α-螺旋與 β-摺板","單條肽鏈的三維構形","多條肽鏈組成的複合體"],
    answer:3,
    explanation:"四級結構指多條多肽鏈之間的組合。"
  },
  {
    id:"CH2-032",
    chapter:"CH2 蛋白質",
    section:"四級結構",
    difficulty:"medium",
    tags:["血紅蛋白"],
    question:"下列何者最典型具有四級結構？",
    options:["單一小胜肽","血紅蛋白","單一胺基酸","脂肪酸"],
    answer:1,
    explanation:"血紅蛋白由多個亞基組成，是四級結構典型例子。"
  },
  {
    id:"CH2-033",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["變性"],
    question:"蛋白質變性時，通常最不會被破壞的是哪個層次？",
    options:["一級結構","二級結構","三級結構","四級結構"],
    answer:0,
    explanation:"變性通常不會破壞一級結構中的肽鍵。"
  },
  {
    id:"CH2-034",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["變性因子"],
    question:"下列何者常是造成蛋白質變性的因素？",
    options:["高溫","適量氧氣","中性水","穩定緩衝液一定會造成變性"],
    answer:0,
    explanation:"高溫、極端 pH、有機溶劑、界面活性劑等都可能造成變性。"
  },
  {
    id:"CH2-035",
    chapter:"CH2 蛋白質",
    section:"錯誤折疊",
    difficulty:"medium",
    tags:["prion"],
    question:"Prion 蛋白病變常伴隨哪種結構轉變？",
    options:["β-摺板轉成 α-螺旋","α-螺旋轉成 β-摺板","一級結構完全消失","形成 DNA 雙股"],
    answer:1,
    explanation:"Prion 異常折疊常與 β-摺板增加有關。"
  },

  // =========================
  // CH3 酶（66-100）
  // =========================
  {
    id:"CH3-001",
    chapter:"CH3 酶",
    section:"定義",
    difficulty:"easy",
    tags:["酶"],
    question:"酶在生物體內最主要的角色是什麼？",
    options:["儲存遺傳資訊","作為生物催化劑","形成細胞膜主體","長期儲存能量"],
    answer:1,
    explanation:"酶是生物催化劑，能加速反應進行。"
  },
  {
    id:"CH3-002",
    chapter:"CH3 酶",
    section:"特性",
    difficulty:"easy",
    tags:["酶特性"],
    question:"下列何者不是酶的典型特性？",
    options:["高度專一性","可調節性","降低活化能","改變反應平衡常數"],
    answer:3,
    explanation:"酶不改變平衡常數與 ΔG，只降低活化能。"
  },
  {
    id:"CH3-003",
    chapter:"CH3 酶",
    section:"特性",
    difficulty:"easy",
    tags:["活化能"],
    question:"酶促反應變快的主要原因是什麼？",
    options:["增加反應物總量","降低活化能","提高產物穩定性到無限大","改變最終平衡位置"],
    answer:1,
    explanation:"酶的核心功能是降低活化能，使反應更容易進行。"
  },
  {
    id:"CH3-004",
    chapter:"CH3 酶",
    section:"特性",
    difficulty:"medium",
    tags:["專一性"],
    question:"酶的高度專一性主要反映在哪裡？",
    options:["任何底物都能作用","只對特定底物或反應具有較高選擇性","只存在細胞外","只受溫度影響"],
    answer:1,
    explanation:"酶通常只辨識特定底物，並催化特定反應。"
  },
  {
    id:"CH3-005",
    chapter:"CH3 酶",
    section:"輔助因子",
    difficulty:"medium",
    tags:["全酶"],
    question:"全酶（Holoenzyme）是由什麼組成？",
    options:["酶蛋白 + 輔助因子","底物 + 輔酶","酶蛋白 + 抑制劑","酶原 + 金屬離子"],
    answer:0,
    explanation:"全酶由酶蛋白與輔助因子共同組成。"
  },
  {
    id:"CH3-006",
    chapter:"CH3 酶",
    section:"輔助因子",
    difficulty:"medium",
    tags:["apoenzyme"],
    question:"若酶失去輔助因子而只剩蛋白質部分，常稱為什麼？",
    options:["全酶","酶原","酶蛋白（apoenzyme）","同工酶"],
    answer:2,
    explanation:"去掉輔助因子後的蛋白質部分常稱為 apoenzyme。"
  },
  {
    id:"CH3-007",
    chapter:"CH3 酶",
    section:"輔基",
    difficulty:"medium",
    tags:["prosthetic group"],
    question:"下列哪一項最符合輔基（prosthetic group）的特徵？",
    options:["通常與酶緊密結合，不易分離","一定是金屬離子","一定存在於活化位置","移除後酶活性不變"],
    answer:0,
    explanation:"輔基通常與酶結合緊密。"
  },
  {
    id:"CH3-008",
    chapter:"CH3 酶",
    section:"輔酶",
    difficulty:"medium",
    tags:["coenzyme"],
    question:"輔酶（coenzyme）通常具有哪種特徵？",
    options:["只能是蛋白質","常為有機小分子","一定是無機鹽","一定與酶永久共價結合"],
    answer:1,
    explanation:"輔酶常為有機小分子，協助酶進行催化。"
  },
  {
    id:"CH3-009",
    chapter:"CH3 酶",
    section:"蛋白質-配體結合",
    difficulty:"easy",
    tags:["親和力"],
    question:"親和力（affinity）是指什麼？",
    options:["蛋白質總量","蛋白質結合區與配體的結合能力","底物消耗速度","酶的降解程度"],
    answer:1,
    explanation:"親和力描述的是蛋白質與配體結合的強弱。"
  },
  {
    id:"CH3-010",
    chapter:"CH3 酶",
    section:"蛋白質-配體結合",
    difficulty:"easy",
    tags:["飽和度"],
    question:"飽和度（saturation）最貼近下列哪個概念？",
    options:["酶被破壞程度","結合區能接受配體的上限","反應熱變化","產物抑制程度"],
    answer:1,
    explanation:"飽和度反映結合位點被配體佔滿的程度。"
  },
  {
    id:"CH3-011",
    chapter:"CH3 酶",
    section:"蛋白質-配體結合",
    difficulty:"medium",
    tags:["飽和"],
    question:"當配體濃度很高且幾乎所有結合位點都被占據時，可說此系統接近什麼狀態？",
    options:["變性","飽和","逆轉錄","去活化"],
    answer:1,
    explanation:"當結合位點接近全部被占據時，稱為接近飽和。"
  },
  {
    id:"CH3-012",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["EC分類"],
    question:"氧化還原酶屬於 EC 幾類？",
    options:["EC 1","EC 2","EC 3","EC 4"],
    answer:0,
    explanation:"Oxidoreductase 為 EC 1。"
  },
  {
    id:"CH3-013",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["EC分類"],
    question:"轉移酶屬於 EC 幾類？",
    options:["EC 1","EC 2","EC 3","EC 6"],
    answer:1,
    explanation:"Transferase 為 EC 2。"
  },
  {
    id:"CH3-014",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["EC分類"],
    question:"水解酶屬於 EC 幾類？",
    options:["EC 1","EC 2","EC 3","EC 5"],
    answer:2,
    explanation:"Hydrolase 為 EC 3。"
  },
  {
    id:"CH3-015",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["EC分類"],
    question:"裂解酶（lyase）屬於 EC 幾類？",
    options:["EC 3","EC 4","EC 5","EC 6"],
    answer:1,
    explanation:"Lyase 為 EC 4。"
  },
  {
    id:"CH3-016",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["EC分類"],
    question:"異構酶（isomerase）屬於 EC 幾類？",
    options:["EC 2","EC 4","EC 5","EC 6"],
    answer:2,
    explanation:"Isomerase 為 EC 5。"
  },
  {
    id:"CH3-017",
    chapter:"CH3 酶",
    section:"分類",
    difficulty:"medium",
    tags:["Ligase"],
    question:"連接酶（ligase）的主要功能為何？",
    options:["氧化還原","官能基轉移","兩分子結合，常需 ATP","分子內異構化"],
    answer:2,
    explanation:"Ligase 的重點是把兩個分子連接起來，通常需要 ATP。"
  },
  {
    id:"CH3-018",
    chapter:"CH3 酶",
    section:"模型",
    difficulty:"easy",
    tags:["鎖鑰模型"],
    question:"鎖-鑰匙模型主要強調什麼概念？",
    options:["酶結構完全不重要","底物與活化位置形狀互補","所有酶都能彈性改變形狀","酶會變成產物"],
    answer:1,
    explanation:"鎖-鑰匙模型強調底物與酶活化位置的互補性。"
  },
  {
    id:"CH3-019",
    chapter:"CH3 酶",
    section:"模型",
    difficulty:"easy",
    tags:["誘導契合"],
    question:"哪個模型主張活化位置會隨受質接近而調整形狀？",
    options:["鎖-鑰匙模型","誘導-配合模型","雙螺旋模型","流體鑲嵌模型"],
    answer:1,
    explanation:"誘導-配合模型認為活化位置會因底物接近而調整。"
  },
  {
    id:"CH3-020",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"easy",
    tags:["ΔG"],
    question:"下列對酶與 ΔG 的敘述何者正確？",
    options:["酶會讓 ΔG 由正變負","酶會改變反應平衡","酶不改變 ΔG，只降低活化能","酶提高活化能以增加專一性"],
    answer:2,
    explanation:"酶只改變反應速率，不改變總自由能變化與平衡位置。"
  },
  {
    id:"CH3-021",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["速率"],
    question:"當底物濃度逐漸升高時，酶促反應速率通常會如何變化？",
    options:["先上升後趨近平臺","一直線性無限上升","立刻降為零","與底物無關"],
    answer:0,
    explanation:"底物增加時速率先上升，但達飽和後接近 Vmax。"
  },
  {
    id:"CH3-022",
    chapter:"CH3 酶",
    section:"Michaelis-Menten",
    difficulty:"easy",
    tags:["Km","Vmax"],
    question:"Km 的定義最適合下列哪一項？",
    options:["反應完全停止時的受質濃度","達到 1/2 Vmax 時的受質濃度","最大產物量","酶濃度的一半"],
    answer:1,
    explanation:"Km 為速率達到 1/2 Vmax 時的底物濃度。"
  },
  {
    id:"CH3-023",
    chapter:"CH3 酶",
    section:"Michaelis-Menten",
    difficulty:"medium",
    tags:["Km","親和力"],
    question:"若某酶的 Km 很小，通常表示什麼？",
    options:["親和力低","親和力高","Vmax 低","一定受到抑制"],
    answer:1,
    explanation:"Km 小表示較低底物濃度就能達半最大速率，通常代表親和力較高。"
  },
  {
    id:"CH3-024",
    chapter:"CH3 酶",
    section:"Michaelis-Menten",
    difficulty:"easy",
    tags:["Vmax"],
    question:"Vmax 代表什麼？",
    options:["最小反應速率","底物為零時的速率","酶完全飽和時的最大反應速率","反應停止時的速率"],
    answer:2,
    explanation:"Vmax 為酶被底物完全飽和時可達到的最大速率。"
  },
  {
    id:"CH3-025",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"easy",
    tags:["溫度"],
    question:"酶活性通常隨溫度上升而如何變化？",
    options:["一定持續上升不下降","先上升到最適溫度，再因變性而下降","完全不變","立刻歸零"],
    answer:1,
    explanation:"溫度升高可先加快反應，但太高會使酶變性、活性下降。"
  },
  {
    id:"CH3-026",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"easy",
    tags:["pH"],
    question:"下列對 pH 與酶活性的描述何者正確？",
    options:["所有酶最適 pH 都相同","每種酶通常有其最適 pH","pH 不會影響酶","只有鹼性才有活性"],
    answer:1,
    explanation:"不同酶具有不同最適 pH。"
  },
  {
    id:"CH3-027",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["底物濃度"],
    question:"當底物濃度持續上升，為何反應速率最後不再明顯增加？",
    options:["酶全部被破壞","反應一定逆轉","酶的活化位置逐漸被底物占滿","底物全部變成抑制劑"],
    answer:2,
    explanation:"當酶逐漸飽和時，即使再增加底物，速率也難再明顯上升。"
  },
  {
    id:"CH3-028",
    chapter:"CH3 酶",
    section:"調節",
    difficulty:"medium",
    tags:["異位酶"],
    question:"異位酶的調節特色是什麼？",
    options:["只能在活化位置被抑制","只接受共價抑制","可在異位位置接受活化或抑制訊號","一定不受終產物影響"],
    answer:2,
    explanation:"異位酶可在 allosteric site 接受正向或負向調節。"
  },
  {
    id:"CH3-029",
    chapter:"CH3 酶",
    section:"調節",
    difficulty:"easy",
    tags:["feedback"],
    question:"終產物抑制前端酶，屬於哪種調節？",
    options:["誘導適應","回饋控制","變性作用","可逆競爭"],
    answer:1,
    explanation:"終產物抑制代謝路徑前端酶，是典型的回饋控制。"
  },
  {
    id:"CH3-030",
    chapter:"CH3 酶",
    section:"酶原",
    difficulty:"medium",
    tags:["酶原活化"],
    question:"胰蛋白酶原轉為胰蛋白酶，最適合歸類為下列哪種概念？",
    options:["共價修飾","非競爭抑制","疏水折疊","逆轉錄"],
    answer:0,
    explanation:"酶原活化涉及切割與結構變化，屬共價修飾的一種。"
  },
  {
    id:"CH3-031",
    chapter:"CH3 酶",
    section:"抑制劑",
    difficulty:"medium",
    tags:["競爭型抑制"],
    question:"競爭型抑制劑的典型特徵為何？",
    options:["Km 不變，Vmax 降低","Km 增大，Vmax 不變","Km 降低，Vmax 降低","Km 不變，Vmax 不變"],
    answer:1,
    explanation:"競爭型抑制劑與底物競爭活化位置，使 Km 上升但 Vmax 不變。"
  },
  {
    id:"CH3-032",
    chapter:"CH3 酶",
    section:"抑制劑",
    difficulty:"medium",
    tags:["競爭型抑制"],
    question:"競爭型抑制通常可藉由哪種方式部分克服？",
    options:["降低溫度","增加底物濃度","降低酶濃度","加入更多抑制劑"],
    answer:1,
    explanation:"增加底物濃度可讓底物更有機會與抑制劑競爭活化位置。"
  },
  {
    id:"CH3-033",
    chapter:"CH3 酶",
    section:"抑制劑",
    difficulty:"medium",
    tags:["非競爭型抑制"],
    question:"非競爭型抑制的典型結果為何？",
    options:["Km 增大，Vmax 不變","Km 不變，Vmax 降低","Km 降低，Vmax 不變","Km 與 Vmax 都不變"],
    answer:1,
    explanation:"非競爭型抑制通常降低 Vmax，而 Km 常視為不變。"
  },
  {
    id:"CH3-034",
    chapter:"CH3 酶",
    section:"抑制劑",
    difficulty:"medium",
    tags:["不競爭型抑制"],
    question:"不競爭型抑制劑主要與哪個複合物結合？",
    options:["游離酶 E","底物 S","ES 複合物","產物 P"],
    answer:2,
    explanation:"不競爭型抑制只與 ES 複合物結合。"
  },
  {
    id:"CH3-035",
    chapter:"CH3 酶",
    section:"抑制劑",
    difficulty:"easy",
    tags:["不可逆抑制"],
    question:"不可逆抑制通常具有哪個特徵？",
    options:["只短暫佔據活化位置","共價鍵結合使酶失活","一定可被高濃度底物克服","只影響 Km 不影響 Vmax"],
    answer:1,
    explanation:"不可逆抑制常透過共價結合使酶永久失活。"
  },
  {
    id:"CH1-031",
    chapter:"CH1 緒論",
    section:"生物大分子",
    difficulty:"easy",
    tags:["蛋白質"],
    question:"下列何者是由胺基酸聚合而成的大分子？",
    options:["核酸","蛋白質","脂質","多醣"],
    answer:1,
    explanation:"蛋白質是由胺基酸透過肽鍵連接而成。"
  },
  {
    id:"CH1-032",
    chapter:"CH1 緒論",
    section:"生物大分子",
    difficulty:"easy",
    tags:["核酸"],
    question:"DNA 的單體構件主要是什麼？",
    options:["胺基酸","脂肪酸","去氧核苷酸","單醣"],
    answer:2,
    explanation:"DNA 由去氧核苷酸聚合而成。"
  },
  {
    id:"CH1-033",
    chapter:"CH1 緒論",
    section:"生物大分子",
    difficulty:"easy",
    tags:["多醣"],
    question:"多醣的基本構件主要是什麼？",
    options:["單醣","脂肪酸","核苷酸","胺基酸"],
    answer:0,
    explanation:"多醣由單醣聚合而成。"
  },
  {
    id:"CH1-034",
    chapter:"CH1 緒論",
    section:"生物大分子",
    difficulty:"medium",
    tags:["脂質"],
    question:"脂質常見的基本構件包含下列何者？",
    options:["胺基酸與核苷酸","脂肪酸與甘油","葡萄糖與果糖","RNA 與 DNA"],
    answer:1,
    explanation:"脂質常由脂肪酸與甘油等構成。"
  },
  {
    id:"CH1-035",
    chapter:"CH1 緒論",
    section:"生物分子特點",
    difficulty:"medium",
    tags:["結構決定功能"],
    question:"下列何者最符合生物分子的基本觀念？",
    options:["功能決定結構","結構決定功能","分子功能與形狀無關","分子只看組成不看構型"],
    answer:1,
    explanation:"生物化學強調結構決定功能。"
  },
  {
    id:"CH1-036",
    chapter:"CH1 緒論",
    section:"生物分子特點",
    difficulty:"medium",
    tags:["動態更新"],
    question:"生物分子在體內通常處於什麼狀態？",
    options:["完全靜止","不斷合成與分解更新","只會分解不會合成","只會合成不會分解"],
    answer:1,
    explanation:"生物分子在體內會持續進行代謝更新。"
  },
  {
    id:"CH1-037",
    chapter:"CH1 緒論",
    section:"代謝",
    difficulty:"medium",
    tags:["糖代謝"],
    question:"下列何者屬於糖代謝的重要路徑？",
    options:["尿素循環","糖解作用","脂肪酸合成","轉胺基作用"],
    answer:1,
    explanation:"糖解作用是糖代謝的重要基礎路徑。"
  },
  {
    id:"CH1-038",
    chapter:"CH1 緒論",
    section:"代謝",
    difficulty:"medium",
    tags:["脂類代謝"],
    question:"脂肪酸 β-氧化屬於哪一類代謝？",
    options:["糖代謝","脂類代謝","核酸代謝","礦物質代謝"],
    answer:1,
    explanation:"脂肪酸 β-氧化屬於脂類代謝的重要內容。"
  },
  {
    id:"CH1-039",
    chapter:"CH1 緒論",
    section:"代謝",
    difficulty:"medium",
    tags:["胺基酸代謝"],
    question:"轉胺基作用通常歸類於哪種代謝？",
    options:["脂類代謝","胺基酸代謝","糖代謝","核酸複製"],
    answer:1,
    explanation:"轉胺基作用是胺基酸代謝的重要反應。"
  },
  {
    id:"CH1-040",
    chapter:"CH1 緒論",
    section:"能量代謝",
    difficulty:"medium",
    tags:["ATP"],
    question:"ATP 水解成 ADP + Pi 時，通常代表什麼？",
    options:["消耗氧氣","釋放可用能量","生成蛋白質","DNA 複製停止"],
    answer:1,
    explanation:"ATP 水解可釋放能量供細胞活動使用。"
  },

  {
    id:"CH2-036",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Met"],
    question:"哪個必需胺基酸含硫，且常被視為蛋白質合成起始的重要胺基酸？",
    options:["Met","Val","Phe","His"],
    answer:0,
    explanation:"Met 為含硫必需胺基酸，與蛋白質合成起始有關。"
  },
  {
    id:"CH2-037",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Trp"],
    question:"哪個胺基酸含有吲哚環，且與血清素前驅物有關？",
    options:["Tyr","Trp","Phe","His"],
    answer:1,
    explanation:"Trp 含吲哚環，常被提到與血清素前驅物有關。"
  },
  {
    id:"CH2-038",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Tyr"],
    question:"哪個胺基酸含酚基，且常被提到與黑色素前驅物有關？",
    options:["Tyr","Ser","Gln","Asp"],
    answer:0,
    explanation:"Tyr 含酚基，並常與黑色素生合成相關。"
  },
  {
    id:"CH2-039",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Arg"],
    question:"哪個胺基酸常被提到是一氧化氮（NO）的來源？",
    options:["Arg","Gly","Ala","Cys"],
    answer:0,
    explanation:"Arg 常被視為一氧化氮的重要來源。"
  },
  {
    id:"CH2-040",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Gln"],
    question:"哪個胺基酸在筆記中被提到是骨骼肌最豐富的游離胺基酸之一？",
    options:["Gln","Asp","Val","His"],
    answer:0,
    explanation:"Gln 常被提到是骨骼肌中很豐富的游離胺基酸。"
  },
  {
    id:"CH2-041",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Glu","GABA"],
    question:"哪個胺基酸常被提到與 GABA 前驅物有關？",
    options:["Glu","Leu","Ser","Asn"],
    answer:0,
    explanation:"Glu 常與 GABA 前驅物的概念一起出現。"
  },
  {
    id:"CH2-042",
    chapter:"CH2 蛋白質",
    section:"pI",
    difficulty:"medium",
    tags:["等電點公式"],
    question:"中性或酸性胺基酸的 pI 常用哪個公式表示？",
    options:[
      "pI = (pKa1 + pKa2) / 2",
      "pI = (pKa2 + pKa3) / 2",
      "pI = pKa1 × pKa2",
      "pI = pKa1 - pKa2"
    ],
    answer:0,
    explanation:"中性或酸性胺基酸常用前兩個 pKa 平均求 pI。"
  },
  {
    id:"CH2-043",
    chapter:"CH2 蛋白質",
    section:"pI",
    difficulty:"medium",
    tags:["等電點公式"],
    question:"鹼性胺基酸的 pI 常用哪個公式表示？",
    options:[
      "pI = (pKa1 + pKa2) / 2",
      "pI = (pKa2 + pKa3) / 2",
      "pI = pKa1 + pKa2 + pKa3",
      "pI = pKa3 - pKa1"
    ],
    answer:1,
    explanation:"鹼性胺基酸常用後兩個相關 pKa 的平均值求 pI。"
  },
  {
    id:"CH2-044",
    chapter:"CH2 蛋白質",
    section:"肽與多肽",
    difficulty:"easy",
    tags:["胜肽"],
    question:"兩個胺基酸連接後形成的最基本產物可稱為什麼？",
    options:["核苷酸","二肽","脂肪酸","單醣"],
    answer:1,
    explanation:"兩個胺基酸以肽鍵連接後可形成二肽。"
  },
  {
    id:"CH2-045",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["結構層次"],
    question:"下列哪一項是由同一條肽鏈局部規則摺疊形成？",
    options:["一級結構","二級結構","四級結構","共價變性"],
    answer:1,
    explanation:"二級結構反映局部規則排列，如 α-螺旋與 β-摺板。"
  },
  {
    id:"CH2-046",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["三級結構"],
    question:"單條肽鏈的整體立體折疊最對應哪個層次？",
    options:["一級結構","二級結構","三級結構","四級結構"],
    answer:2,
    explanation:"單條肽鏈整體三維構形屬三級結構。"
  },
  {
    id:"CH2-047",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["四級結構"],
    question:"多條多肽鏈之間的組裝關係最對應哪個層次？",
    options:["一級結構","二級結構","三級結構","四級結構"],
    answer:3,
    explanation:"多條多肽鏈之間的聚合屬四級結構。"
  },
  {
    id:"CH2-048",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["SDS"],
    question:"SDS 常被用來作為哪一類物質以幫助蛋白質變性？",
    options:["界面活性劑","核酸鹼基","單醣","金屬螯合劑"],
    answer:0,
    explanation:"SDS 是常見界面活性劑，可破壞疏水作用協助蛋白質變性。"
  },
  {
    id:"CH2-049",
    chapter:"CH2 蛋白質",
    section:"結構與疾病",
    difficulty:"medium",
    tags:["膠原蛋白"],
    question:"缺乏維生素 C 時，較容易影響哪類蛋白質的穩定與強度？",
    options:["膠原蛋白","胰島素","DNA 聚合酶","核糖體 RNA"],
    answer:0,
    explanation:"維生素 C 與膠原蛋白的正常形成與穩定有關。"
  },
  {
    id:"CH2-050",
    chapter:"CH2 蛋白質",
    section:"結構與疾病",
    difficulty:"medium",
    tags:["prion"],
    question:"Prion 異常折疊後，哪種結構比例通常增加？",
    options:["α-螺旋","β-摺板","核酸雙股","脂質雙層"],
    answer:1,
    explanation:"Prion 病變常與 β-摺板比例增加有關。"
  },

  {
    id:"CH3-036",
    chapter:"CH3 酶",
    section:"活化能",
    difficulty:"easy",
    tags:["活化能"],
    question:"下列何者最能描述酶降低活化能的效果？",
    options:["讓反應更容易進行","改變最終產物種類","改變反應平衡方向","讓底物永久消失"],
    answer:0,
    explanation:"降低活化能會讓反應較容易跨越能障而進行。"
  },
  {
    id:"CH3-037",
    chapter:"CH3 酶",
    section:"酶分類",
    difficulty:"medium",
    tags:["oxidoreductase"],
    question:"下列哪一類酶主要負責氧化還原反應？",
    options:["Oxidoreductase","Hydrolase","Isomerase","Ligase"],
    answer:0,
    explanation:"Oxidoreductase 主要催化氧化還原反應。"
  },
  {
    id:"CH3-038",
    chapter:"CH3 酶",
    section:"酶分類",
    difficulty:"medium",
    tags:["transferase"],
    question:"官能基轉移反應通常由哪類酶催化？",
    options:["Transferase","Ligase","Lyase","Hydrolase"],
    answer:0,
    explanation:"Transferase 的核心是轉移官能基。"
  },
  {
    id:"CH3-039",
    chapter:"CH3 酶",
    section:"酶分類",
    difficulty:"medium",
    tags:["hydrolase"],
    question:"利用水分解化學鍵的酶主要屬於哪一類？",
    options:["Hydrolase","Isomerase","Ligase","Oxidoreductase"],
    answer:0,
    explanation:"Hydrolase 主要進行水解反應。"
  },
  {
    id:"CH3-040",
    chapter:"CH3 酶",
    section:"酶分類",
    difficulty:"medium",
    tags:["lyase"],
    question:"不經水解或氧化還原而使基團脫離，常與哪類酶有關？",
    options:["Lyase","Transferase","Ligase","Hydrolase"],
    answer:0,
    explanation:"Lyase 常催化去除或加成形成雙鍵等反應。"
  },
  {
    id:"CH3-041",
    chapter:"CH3 酶",
    section:"酶分類",
    difficulty:"medium",
    tags:["isomerase"],
    question:"促進分子內部重排的酶通常屬於哪一類？",
    options:["Isomerase","Hydrolase","Oxidoreductase","Ligase"],
    answer:0,
    explanation:"Isomerase 主要催化同分異構轉換。"
  },
  {
    id:"CH3-042",
    chapter:"CH3 酶",
    section:"模型",
    difficulty:"medium",
    tags:["鎖鑰模型","誘導契合"],
    question:"相較於鎖-鑰匙模型，誘導-配合模型更強調什麼？",
    options:["酶完全 rigid","活化位置具有可調整性","底物不需要結合","反應與形狀無關"],
    answer:1,
    explanation:"誘導-配合模型強調酶與底物接近時，活化位置可進一步調整。"
  },
  {
    id:"CH3-043",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["Km"],
    question:"若兩種酶相比，A 的 Km 小於 B，通常可推論什麼？",
    options:["A 的親和力較高","A 的親和力較低","A 一定 Vmax 較高","A 一定受抑制"],
    answer:0,
    explanation:"Km 較小通常代表酶與底物親和力較高。"
  },
  {
    id:"CH3-044",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["Vmax"],
    question:"當酶已完全飽和時，再增加底物濃度通常會如何？",
    options:["速率大幅再上升","速率接近不再增加","Km 變成 0","酶自動失活"],
    answer:1,
    explanation:"完全接近飽和時，速率已接近 Vmax，不會再明顯增加。"
  },
  {
    id:"CH3-045",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["競爭型抑制"],
    question:"競爭型抑制劑通常最常與酶的哪個位置競爭？",
    options:["活化位置","異位位置","產物位置","核糖體"],
    answer:0,
    explanation:"競爭型抑制劑通常與底物競爭酶的活化位置。"
  },
  {
    id:"CH3-046",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["非競爭型抑制"],
    question:"非競爭型抑制劑較常結合在哪裡？",
    options:["只會結合底物本身","常不在活化位置","一定在 DNA 上","只在產物上"],
    answer:1,
    explanation:"非競爭型抑制通常不是直接與活化位置競爭。"
  },
  {
    id:"CH3-047",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["不可逆抑制"],
    question:"下列何者最符合不可逆抑制的概念？",
    options:["暫時性結合後很快離開","與酶形成穩定共價結合使其失活","可完全靠高濃度底物克服","只影響溫度不影響酶"],
    answer:1,
    explanation:"不可逆抑制常讓酶受到永久性失活。"
  },
  {
    id:"CH3-048",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["最適溫度"],
    question:"為什麼酶活性不會隨溫度無限上升？",
    options:["因為底物會全部消失","因為高溫可能造成酶變性","因為 ATP 變成 DNA","因為 pH 一定下降"],
    answer:1,
    explanation:"溫度過高會破壞酶蛋白結構，導致活性下降。"
  },
  {
    id:"CH3-049",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["最適pH"],
    question:"胃蛋白酶常被拿來說明什麼觀念？",
    options:["所有酶都在中性最活躍","酶具有特定最適 pH","酶完全不受 pH 影響","酶只受底物影響"],
    answer:1,
    explanation:"胃蛋白酶適合較酸環境，常用來說明酶有其最適 pH。"
  },
  {
    id:"CH3-050",
    chapter:"CH3 酶",
    section:"疾病與藥物",
    difficulty:"medium",
    tags:["G6PD"],
    question:"蠶豆症與哪種酶缺乏有關？",
    options:["丙酮酸激酶","葡萄糖-6-磷酸去氫酶","ACE","神經氨酸酶"],
    answer:1,
    explanation:"蠶豆症與 G6PD 缺乏有關。"
  },
  {
    id:"CH3-051",
    chapter:"CH3 酶",
    section:"疾病與藥物",
    difficulty:"medium",
    tags:["Tamiflu"],
    question:"Tamiflu 主要對應哪一種酶抑制？",
    options:["ACE 抑制","神經氨酸酶抑制","HMG-CoA 還原酶抑制","DNA 連接酶抑制"],
    answer:1,
    explanation:"Tamiflu 是神經氨酸酶抑制劑。"
  },
  {
    id:"CH3-052",
    chapter:"CH3 酶",
    section:"疾病與藥物",
    difficulty:"medium",
    tags:["Enalapril"],
    question:"Enalapril 最常與哪種酶抑制概念有關？",
    options:["ACE 抑制","神經氨酸酶抑制","ATP 合成酶抑制","胰蛋白酶活化"],
    answer:0,
    explanation:"Enalapril 常見於 ACE 抑制劑的例子。"
  },
  {
    id:"CH3-053",
    chapter:"CH3 酶",
    section:"疾病與藥物",
    difficulty:"medium",
    tags:["Lipitor"],
    question:"Lipitor 常對應哪種酶抑制？",
    options:["HMG-CoA 還原酶抑制","ACE 抑制","神經氨酸酶抑制","DNA 聚合酶抑制"],
    answer:0,
    explanation:"Lipitor 常對應 HMG-CoA 還原酶抑制。"
  },
  {
    id:"CH3-054",
    chapter:"CH3 酶",
    section:"疾病與藥物",
    difficulty:"medium",
    tags:["Aliskiren"],
    question:"Aliskiren 常被歸類為哪種相關抑制？",
    options:["renin 相關抑制","神經氨酸酶抑制","DNA 解旋酶抑制","轉錄酶抑制"],
    answer:0,
    explanation:"Aliskiren 是與 renin 系統相關的抑制例子。"
  },
  {
    id:"CH3-055",
    chapter:"CH3 酶",
    section:"綜合觀念",
    difficulty:"medium",
    tags:["affinity","saturation"],
    question:"下列哪一項最能區分親和力與飽和度？",
    options:[
      "親和力是結合強弱；飽和度是位點被占據程度",
      "親和力是位點數量；飽和度是蛋白質總量",
      "兩者完全相同",
      "兩者都只與溫度有關"
    ],
    answer:0,
    explanation:"親和力強調結合能力，飽和度強調位點佔據比例。"
  },
  {
    id:"CH1-041",
    chapter:"CH1 緒論",
    section:"生物化學與醫學",
    difficulty:"medium",
    tags:["醫學"],
    question:"生物化學之所以在醫學上重要，最核心的原因是什麼？",
    options:[
      "疾病本質常可從分子層次理解",
      "只因為要背很多公式",
      "只研究藥物名稱",
      "只與外科手術有關"
    ],
    answer:0,
    explanation:"生物化學強調從分子與代謝層次理解正常生理與疾病機制，因此與醫學密切相關。"
  },
  {
    id:"CH1-042",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["Neuberg"],
    question:"「Biochemistry」一詞正式被提出，常與哪位科學家有關？",
    options:["Watson","Crick","Neuberg","Sanger"],
    answer:2,
    explanation:"筆記中提到 1903 年由 Neuberg 正式提出「生物化學」名稱。"
  },
  {
    id:"CH1-043",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["中心法則","Crick"],
    question:"中心法則（Central Dogma）是由誰提出的？",
    options:["Crick","Watson","Jacob","Monod"],
    answer:0,
    explanation:"中心法則由 Francis Crick 提出。"
  },
  {
    id:"CH1-044",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["DNA 雙螺旋"],
    question:"DNA 雙螺旋結構模型最常與哪一組科學家連結？",
    options:["Avery 與 Sumner","Watson 與 Crick","Jacob 與 Monod","Sanger 與 Berg"],
    answer:1,
    explanation:"DNA 雙螺旋模型由 Watson 與 Crick 提出。"
  },
  {
    id:"CH1-045",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["Sanger"],
    question:"Sanger 的經典貢獻之一是什麼？",
    options:["提出操縱子模型","完成胰島素的一級結構測定","發現 RNA 病毒","提出酶促模型"],
    answer:1,
    explanation:"Sanger 完成胰島素一級結構測定，是蛋白質研究的重要里程碑。"
  },

  {
    id:"CH2-051",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Lys"],
    question:"下列哪個胺基酸屬於鹼性且為必需胺基酸？",
    options:["Lys","Asp","Ser","Gln"],
    answer:0,
    explanation:"Lys 屬鹼性胺基酸，且為必需胺基酸。"
  },
  {
    id:"CH2-052",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["His"],
    question:"哪個胺基酸常被視為唯一 pKa 接近中性的鹼性胺基酸？",
    options:["Arg","His","Lys","Glu"],
    answer:1,
    explanation:"His 的 pKa 接近中性，因此在生理條件下很有特色。"
  },
  {
    id:"CH2-053",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Arg"],
    question:"哪個胺基酸的側鏈 pKa 在常見鹼性胺基酸中通常最高？",
    options:["His","Arg","Lys","Tyr"],
    answer:1,
    explanation:"Arg 側鏈的 pKa 很高，因此常穩定帶正電。"
  },
  {
    id:"CH2-054",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Asp","Glu"],
    question:"下列哪一組都屬於酸性胺基酸？",
    options:["Asp、Glu","Lys、Arg","Ser、Thr","Val、Leu"],
    answer:0,
    explanation:"Asp 與 Glu 都是酸性胺基酸。"
  },
  {
    id:"CH2-055",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Ser","Thr"],
    question:"下列哪一組都含有羥基（-OH）側鏈？",
    options:["Ser、Thr","Val、Leu","Asp、Glu","Lys、Arg"],
    answer:0,
    explanation:"Ser 與 Thr 都含有羥基。"
  },
  {
    id:"CH2-056",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Phe","Trp","Tyr"],
    question:"下列何者最符合芳香族胺基酸的組合？",
    options:["Phe、Trp、Tyr","Gly、Ala、Val","Asp、Glu、Asn","Lys、Arg、His"],
    answer:0,
    explanation:"Phe、Trp、Tyr 常被列為芳香族胺基酸。"
  },
  {
    id:"CH2-057",
    chapter:"CH2 蛋白質",
    section:"兩性離子",
    difficulty:"medium",
    tags:["zwitterion"],
    question:"兩性離子狀態下的胺基酸通常具備何種特徵？",
    options:[
      "同時帶有正負電荷",
      "完全不帶任何電荷",
      "只有負電沒有正電",
      "只有正電沒有負電"
    ],
    answer:0,
    explanation:"兩性離子代表分子中同時存在正負電荷，但淨電荷可為零。"
  },
  {
    id:"CH2-058",
    chapter:"CH2 蛋白質",
    section:"肽鍵",
    difficulty:"medium",
    tags:["肽鍵方向"],
    question:"蛋白質鏈通常可描述為具有哪種方向性？",
    options:["N 端到 C 端","C 端到 N 端 only","左到右固定無意義","沒有方向性"],
    answer:0,
    explanation:"蛋白質多肽鏈通常以 N 端到 C 端來描述方向。"
  },
  {
    id:"CH2-059",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["一級結構"],
    question:"若蛋白質中某一個胺基酸被替換，最直接改變的是哪個層次？",
    options:["一級結構","二級結構","三級結構","四級結構"],
    answer:0,
    explanation:"胺基酸序列改變，最直接就是一級結構改變。"
  },
  {
    id:"CH2-060",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["二級結構","α-螺旋"],
    question:"下列何者最可能破壞 α-螺旋局部形成？",
    options:["過多脯胺酸","增加單醣濃度","加入核苷酸","增加鈣離子一定會形成螺旋"],
    answer:0,
    explanation:"脯胺酸特殊環狀結構常讓 α-螺旋中斷。"
  },
  {
    id:"CH2-061",
    chapter:"CH2 蛋白質",
    section:"結構層次",
    difficulty:"medium",
    tags:["疏水作用"],
    question:"蛋白質摺疊時，疏水性側鏈常傾向如何分布？",
    options:["埋在內部","全部暴露在水中","只出現在 N 端","只出現在 C 端"],
    answer:0,
    explanation:"在水溶液中，疏水性側鏈常傾向埋在蛋白質內部。"
  },
  {
    id:"CH2-062",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["變性"],
    question:"蛋白質變性後常出現哪種情況？",
    options:["活性下降或消失","肽鍵全部斷裂","一定自動恢復","分子量變成 0"],
    answer:0,
    explanation:"變性常造成結構改變，進而使蛋白質功能下降。"
  },
  {
    id:"CH2-063",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["pH","變性"],
    question:"極端 pH 為何可能造成蛋白質變性？",
    options:[
      "改變側鏈帶電狀態與分子間作用力",
      "讓胺基酸全部蒸發",
      "讓肽鍵一定變成糖苷鍵",
      "讓蛋白質轉成脂質"
    ],
    answer:0,
    explanation:"極端 pH 會影響側鏈電荷與氫鍵、離子鍵等穩定作用力。"
  },
  {
    id:"CH2-064",
    chapter:"CH2 蛋白質",
    section:"結構與功能",
    difficulty:"medium",
    tags:["雙硫鍵"],
    question:"雙硫鍵在蛋白質中的主要功能之一是什麼？",
    options:["穩定高階結構","取代肽鍵","形成核酸雙股","直接提供 ATP"],
    answer:0,
    explanation:"雙硫鍵可幫助穩定蛋白質三級或四級結構。"
  },
  {
    id:"CH2-065",
    chapter:"CH2 蛋白質",
    section:"蛋白質總論",
    difficulty:"easy",
    tags:["蛋白質功能"],
    question:"下列何者不是蛋白質常見功能？",
    options:["催化","運輸","免疫","儲存遺傳資訊為主要功能"],
    answer:3,
    explanation:"儲存遺傳資訊主要是核酸的核心功能，不是蛋白質的主要功能。"
  },

  {
    id:"CH3-056",
    chapter:"CH3 酶",
    section:"酶特性",
    difficulty:"easy",
    tags:["催化"],
    question:"酶在反應結束後通常會如何？",
    options:["被完全消耗掉","通常可再被使用","一定變成產物","一定變成抑制劑"],
    answer:1,
    explanation:"酶作為催化劑，反應後通常不被消耗，可再參與下一次反應。"
  },
  {
    id:"CH3-057",
    chapter:"CH3 酶",
    section:"酶特性",
    difficulty:"medium",
    tags:["平衡"],
    question:"酶對化學平衡的主要影響為何？",
    options:["改變平衡位置","加快到達平衡的速度","讓反應永遠不平衡","讓產物完全消失"],
    answer:1,
    explanation:"酶不改變平衡位置，但能加快反應到達平衡。"
  },
  {
    id:"CH3-058",
    chapter:"CH3 酶",
    section:"輔助因子",
    difficulty:"medium",
    tags:["金屬離子"],
    question:"下列哪一項可能作為酶的輔助因子？",
    options:["金屬離子","只有蛋白質","只有脂肪酸","只有 DNA"],
    answer:0,
    explanation:"某些酶需要金屬離子作為輔助因子。"
  },
  {
    id:"CH3-059",
    chapter:"CH3 酶",
    section:"結合模型",
    difficulty:"medium",
    tags:["ES complex"],
    question:"底物與酶結合後形成的中間狀態通常寫作什麼？",
    options:["EP","ES","SP","SE2"],
    answer:1,
    explanation:"酶-底物複合物通常寫作 ES complex。"
  },
  {
    id:"CH3-060",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["Michaelis-Menten"],
    question:"Michaelis-Menten 模型最常用來描述哪一類關係？",
    options:["反應速率與底物濃度關係","pH 與溫度關係","蛋白質與 DNA 配對","脂質與膜厚度關係"],
    answer:0,
    explanation:"Michaelis-Menten 主要描述酶促反應速率與底物濃度的關係。"
  },
  {
    id:"CH3-061",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["1/2 Vmax"],
    question:"當反應速率為 1/2 Vmax 時，底物濃度等於什麼？",
    options:["Km","Vmax","Ki","pI"],
    answer:0,
    explanation:"在 Michaelis-Menten 模型中，當速率為 1/2 Vmax 時，[S] = Km。"
  },
  {
    id:"CH3-062",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["Km","Vmax"],
    question:"下列哪一組最符合競爭型抑制的變化？",
    options:["Km ↑，Vmax 不變","Km 不變，Vmax ↓","Km ↓，Vmax ↓","Km 不變，Vmax 不變"],
    answer:0,
    explanation:"競爭型抑制會讓表觀 Km 上升，但 Vmax 不變。"
  },
  {
    id:"CH3-063",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["Km","Vmax"],
    question:"下列哪一組最符合非競爭型抑制的變化？",
    options:["Km ↑，Vmax 不變","Km 不變，Vmax ↓","Km ↓，Vmax ↑","Km ↑，Vmax ↑"],
    answer:1,
    explanation:"非競爭型抑制常導致 Vmax 下降而 Km 近似不變。"
  },
  {
    id:"CH3-064",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["不可逆抑制"],
    question:"若抑制劑直接與酶形成強穩定鍵結並造成永久失活，最可能是哪類抑制？",
    options:["競爭型抑制","非競爭型抑制","不可逆抑制","回饋活化"],
    answer:2,
    explanation:"永久性失活最符合不可逆抑制。"
  },
  {
    id:"CH3-065",
    chapter:"CH3 酶",
    section:"調節",
    difficulty:"medium",
    tags:["allosteric"],
    question:"異位調節最核心的概念是什麼？",
    options:[
      "調節分子只能結合底物",
      "調節分子可結合活化位置以外的位置",
      "酶一定被永久破壞",
      "酶一定只能被抑制不能被活化"
    ],
    answer:1,
    explanation:"異位調節是指調節分子作用在活化位置以外的調節位點。"
  },
  {
    id:"CH3-066",
    chapter:"CH3 酶",
    section:"調節",
    difficulty:"medium",
    tags:["feedback inhibition"],
    question:"回饋抑制對細胞有什麼主要意義？",
    options:[
      "避免產物過度累積，節省資源",
      "讓所有反應都變慢",
      "讓酶全部失活",
      "只為了增加溫度"
    ],
    answer:0,
    explanation:"回饋抑制能幫助細胞調控代謝流量，避免不必要的過度合成。"
  },
  {
    id:"CH3-067",
    chapter:"CH3 酶",
    section:"酶原",
    difficulty:"medium",
    tags:["zymogen"],
    question:"酶原（zymogen）的設計對生理有何好處？",
    options:[
      "避免酶過早在不該作用的位置活化",
      "讓酶永遠失活",
      "讓蛋白質全部變成脂質",
      "增加 DNA 複製"
    ],
    answer:0,
    explanation:"酶原可避免具破壞性的酶在錯誤時間或位置被活化。"
  },
  {
    id:"CH3-068",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["底物濃度"],
    question:"在底物極低時，增加底物濃度通常會如何影響反應速率？",
    options:["通常上升","通常下降","完全不變","一定歸零"],
    answer:0,
    explanation:"在低底物條件下，增加底物通常可提高反應速率。"
  },
  {
    id:"CH3-069",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["酶濃度"],
    question:"在底物充足時，增加酶濃度通常會如何影響反應速率？",
    options:["通常上升","通常下降","完全不變","一定變成負值"],
    answer:0,
    explanation:"底物充足時，增加酶濃度通常可提高反應速率。"
  },
  {
    id:"CH3-070",
    chapter:"CH3 酶",
    section:"綜合觀念",
    difficulty:"medium",
    tags:["affinity","Km"],
    question:"下列哪個敘述最合理？",
    options:[
      "親和力高常對應較小 Km",
      "親和力高一定 Vmax 較高",
      "親和力與 Km 完全無關",
      "親和力高代表一定受到不可逆抑制"
    ],
    answer:0,
    explanation:"一般基礎生化中常用較小 Km 表示較高親和力。"
  },
  {
    id:"CH1-046",
    chapter:"CH1 緒論",
    section:"研究內容",
    difficulty:"easy",
    tags:["研究內容"],
    question:"下列何者屬於生物化學主要研究內容之一？",
    options:["物質代謝","星象觀測","地層分析","純文學批評"],
    answer:0,
    explanation:"生物化學的重要研究內容包含化學組成、物質代謝、能量代謝與遺傳資訊傳遞。"
  },
  {
    id:"CH1-047",
    chapter:"CH1 緒論",
    section:"研究內容",
    difficulty:"medium",
    tags:["能量代謝"],
    question:"能量代謝研究最常關注哪一種分子作為能量貨幣？",
    options:["ATP","DNA","膽固醇","尿素"],
    answer:0,
    explanation:"ATP 是細胞中最重要的能量貨幣。"
  },
  {
    id:"CH1-048",
    chapter:"CH1 緒論",
    section:"研究內容",
    difficulty:"medium",
    tags:["遺傳資訊"],
    question:"下列何者最符合遺傳資訊傳遞的研究範圍？",
    options:["DNA 複製、轉錄、翻譯","脂肪酸 β-氧化","膠原蛋白摺疊","尿素排泄"],
    answer:0,
    explanation:"遺傳資訊傳遞主要關注 DNA 複製、轉錄與翻譯等過程。"
  },
  {
    id:"CH1-049",
    chapter:"CH1 緒論",
    section:"生命化學基礎",
    difficulty:"easy",
    tags:["有機分子"],
    question:"下列何者不屬於生物體四大主要有機分子？",
    options:["蛋白質","核酸","脂質","金屬單質"],
    answer:3,
    explanation:"蛋白質、核酸、脂質、醣類是主要有機分子，金屬單質不屬於此分類。"
  },
  {
    id:"CH1-050",
    chapter:"CH1 緒論",
    section:"生命化學基礎",
    difficulty:"medium",
    tags:["微量元素"],
    question:"除了六大元素外，生物體還需要微量元素，主要原因是什麼？",
    options:["維持正常生理功能","提供遺傳密碼","取代蛋白質功能","讓所有酶失活"],
    answer:0,
    explanation:"微量元素雖量少，但對正常生理功能維持很重要。"
  },
  {
    id:"CH1-051",
    chapter:"CH1 緒論",
    section:"化學鍵",
    difficulty:"medium",
    tags:["極性共價鍵"],
    question:"極性共價鍵最主要的特徵是什麼？",
    options:["電子平均共享完全對稱","電子偏向陰電性較大的原子","一定完全解離成離子","只存在於金屬中"],
    answer:1,
    explanation:"極性共價鍵中，電子分布會偏向陰電性較大的那一端。"
  },
  {
    id:"CH1-052",
    chapter:"CH1 緒論",
    section:"化學鍵",
    difficulty:"medium",
    tags:["陰電性"],
    question:"下列元素中，常見陰電性較大的排列方向最合理的是哪個？",
    options:["F > O > N","N > O > F","O > F > N","C > O > F"],
    answer:0,
    explanation:"常見比較中，F 的陰電性最高，其次 O，再來 N。"
  },
  {
    id:"CH1-053",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"medium",
    tags:["潤滑"],
    question:"水被稱為良好潤滑劑，最常與哪種生理情境連結？",
    options:["關節潤滑","DNA 複製","神經傳導一定停止","脂質完全取代"],
    answer:0,
    explanation:"水在身體中可作為良好潤滑介質，例如關節液相關環境。"
  },
  {
    id:"CH1-054",
    chapter:"CH1 緒論",
    section:"水",
    difficulty:"medium",
    tags:["黏滯度"],
    question:"水的低黏滯度特性，常被拿來連結哪種生理現象？",
    options:["血球流動","蛋白質定序","DNA 定序","雙硫鍵形成"],
    answer:0,
    explanation:"低黏滯度有助於流體順利流動，常與血液流動概念連結。"
  },
  {
    id:"CH1-055",
    chapter:"CH1 緒論",
    section:"緩衝系統",
    difficulty:"medium",
    tags:["血紅素"],
    question:"下列哪個緩衝系統與血液中碳酸緩衝特別有關？",
    options:["血紅素-氧基血紅素緩衝系統","脂肪酸緩衝系統","核苷酸緩衝系統","膽鹽緩衝系統"],
    answer:0,
    explanation:"血紅素-氧基血紅素系統在血液酸鹼平衡中相當重要。"
  },

  {
    id:"CH2-066",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Val","Leu","Ile"],
    question:"下列哪一組最符合支鏈胺基酸（BCAA）的概念？",
    options:["Val、Leu、Ile","Asp、Glu、Asn","Ser、Thr、Tyr","Lys、Arg、His"],
    answer:0,
    explanation:"Val、Leu、Ile 為典型支鏈胺基酸。"
  },
  {
    id:"CH2-067",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Gly"],
    question:"甘胺酸在結構上最突出的特徵是什麼？",
    options:["R 基為 H","一定帶正電","含有苯環","一定為必需胺基酸"],
    answer:0,
    explanation:"Gly 的側鏈最簡單，只有一個 H。"
  },
  {
    id:"CH2-068",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Pro"],
    question:"脯胺酸之所以特殊，最主要因為它是什麼？",
    options:["次級胺基酸","酸性胺基酸","芳香族胺基酸","含硫胺基酸"],
    answer:0,
    explanation:"脯胺酸為特殊的次級胺基酸，常影響肽鏈彎曲。"
  },
  {
    id:"CH2-069",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Cys"],
    question:"半胱胺酸側鏈最具代表性的官能基是什麼？",
    options:["-SH","-OH","-COO-","胍基"],
    answer:0,
    explanation:"Cys 最重要的特色之一是帶有硫醇基（-SH）。"
  },
  {
    id:"CH2-070",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Met","Cys"],
    question:"下列哪一組胺基酸都與硫有關？",
    options:["Met、Cys","Val、Leu","Asp、Glu","Arg、His"],
    answer:0,
    explanation:"Met 與 Cys 都屬含硫胺基酸。"
  },
  {
    id:"CH2-071",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["Asn","Gln"],
    question:"下列哪一組都屬於醯胺類側鏈的極性胺基酸？",
    options:["Asn、Gln","Asp、Glu","Ser、Thr","Val、Ile"],
    answer:0,
    explanation:"Asn 與 Gln 都屬於極性不帶電且具有醯胺側鏈的胺基酸。"
  },
  {
    id:"CH2-072",
    chapter:"CH2 蛋白質",
    section:"等電點",
    difficulty:"medium",
    tags:["pI"],
    question:"胺基酸在等電點時最常見的敘述是什麼？",
    options:["淨電荷為零","完全不帶局部電荷","一定不能溶於水","一定為酸性最強"],
    answer:0,
    explanation:"在 pI 時，分子的淨電荷通常為零。"
  },
  {
    id:"CH2-073",
    chapter:"CH2 蛋白質",
    section:"肽鍵",
    difficulty:"medium",
    tags:["部分雙鍵"],
    question:"肽鍵不易自由旋轉，主要原因是什麼？",
    options:["具有部分雙鍵特性","分子量太大","完全沒有電子","一定被雙硫鍵鎖住"],
    answer:0,
    explanation:"肽鍵具有部分雙鍵特性，因此旋轉受限。"
  },
  {
    id:"CH2-074",
    chapter:"CH2 蛋白質",
    section:"二級結構",
    difficulty:"medium",
    tags:["氫鍵"],
    question:"α-螺旋與 β-摺板共同的重要穩定力是什麼？",
    options:["氫鍵","磷酸二酯鍵","金屬鍵","糖苷鍵"],
    answer:0,
    explanation:"這兩種二級結構都主要依賴氫鍵穩定。"
  },
  {
    id:"CH2-075",
    chapter:"CH2 蛋白質",
    section:"變性",
    difficulty:"medium",
    tags:["高階結構"],
    question:"蛋白質變性最直接影響的是什麼？",
    options:["高階結構與功能","元素組成完全改變","所有肽鍵立刻水解","DNA 序列"],
    answer:0,
    explanation:"變性主要影響蛋白質高階結構，進而影響功能。"
  },

  {
    id:"CH3-071",
    chapter:"CH3 酶",
    section:"酶特性",
    difficulty:"medium",
    tags:["專一性"],
    question:"酶的專一性高，代表什麼意思？",
    options:["對特定底物或反應較有選擇性","任何底物都能作用","完全不需要活化位置","一定沒有調節性"],
    answer:0,
    explanation:"酶的專一性表示它偏好特定底物與特定反應。"
  },
  {
    id:"CH3-072",
    chapter:"CH3 酶",
    section:"酶特性",
    difficulty:"medium",
    tags:["反應平衡"],
    question:"下列何者最符合酶對反應平衡的影響？",
    options:["不改變平衡位置，只改變到達速度","一定讓平衡偏向產物","一定讓平衡偏向反應物","讓平衡消失"],
    answer:0,
    explanation:"酶只加快反應到達平衡，不改變平衡常數。"
  },
  {
    id:"CH3-073",
    chapter:"CH3 酶",
    section:"輔助因子",
    difficulty:"medium",
    tags:["全酶","apoenzyme"],
    question:"若酶蛋白本身沒有輔助因子而無法正常發揮作用，最合理的說法是什麼？",
    options:["只有 apoenzyme，未形成完整全酶","已完全形成 holoenzyme","一定是不可逆抑制","一定是 DNA 酶"],
    answer:0,
    explanation:"沒有輔助因子時，只有 apoenzyme，未形成完整可作用的 holoenzyme。"
  },
  {
    id:"CH3-074",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["底物濃度"],
    question:"在其他條件固定下，底物濃度升高但速率趨近平臺，最合理原因是什麼？",
    options:["酶逐漸飽和","DNA 複製中斷","所有底物變成抑制劑","溫度一定下降"],
    answer:0,
    explanation:"當酶活化位置接近全被占滿時，反應速率會趨近 Vmax。"
  },
  {
    id:"CH3-075",
    chapter:"CH3 酶",
    section:"動力學",
    difficulty:"medium",
    tags:["親和力"],
    question:"若某酶需要很高底物濃度才達到 1/2 Vmax，通常代表什麼？",
    options:["Km 較大，親和力較低","Km 較小，親和力較高","Vmax 一定最高","一定不可逆失活"],
    answer:0,
    explanation:"需要較高底物濃度達到半最大速率，通常表示 Km 較大、親和力較低。"
  },
  {
    id:"CH3-076",
    chapter:"CH3 酶",
    section:"模型",
    difficulty:"medium",
    tags:["鎖鑰模型"],
    question:"鎖-鑰匙模型比較強調哪一種觀念？",
    options:["底物與酶形狀預先互補","酶一定先變形後再結合","酶不需要活化位置","酶只靠溫度決定功能"],
    answer:0,
    explanation:"鎖-鑰匙模型強調底物與酶活化位置原本就有互補性。"
  },
  {
    id:"CH3-077",
    chapter:"CH3 酶",
    section:"模型",
    difficulty:"medium",
    tags:["誘導契合"],
    question:"誘導-契合模型相較於鎖-鑰匙模型，最大的不同點是什麼？",
    options:["酶可在結合過程中調整構形","酶完全沒有專一性","底物不需接觸酶","反應不需要能量變化"],
    answer:0,
    explanation:"誘導-契合模型認為酶在底物接近時可產生構形調整。"
  },
  {
    id:"CH3-078",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["競爭型抑制"],
    question:"下列何者最符合競爭型抑制？",
    options:["抑制劑與底物爭奪活化位置","抑制劑只會與 ES 複合物結合","抑制劑一定永久失活酶","抑制劑一定讓 Km 不變"],
    answer:0,
    explanation:"競爭型抑制的核心就是與底物競爭活化位置。"
  },
  {
    id:"CH3-079",
    chapter:"CH3 酶",
    section:"抑制",
    difficulty:"medium",
    tags:["非競爭型抑制"],
    question:"非競爭型抑制最典型的觀念是什麼？",
    options:["不直接和底物搶同一活化位置","一定增加 Vmax","只會增加親和力","只能在高溫發生"],
    answer:0,
    explanation:"非競爭型抑制通常不是與底物直接競爭同一活化位置。"
  },
  {
    id:"CH3-080",
    chapter:"CH3 酶",
    section:"影響因素",
    difficulty:"medium",
    tags:["pH","溫度"],
    question:"下列哪一組都屬於常見影響酶活性的因素？",
    options:["溫度與 pH","顏色與氣味","地層與季風","國籍與身高"],
    answer:0,
    explanation:"溫度、pH、底物濃度等都常影響酶活性。"
  },

  {
    id:"CH1-056",
    chapter:"CH1 緒論",
    section:"水與酸鹼",
    difficulty:"medium",
    tags:["離子化"],
    question:"水的離子化與哪個概念最直接相關？",
    options:["pH 值","胺基酸序列","DNA 螺旋圈數","脂質雙層厚度"],
    answer:0,
    explanation:"水的離子化與酸鹼平衡及 pH 概念直接相關。"
  },
  {
    id:"CH1-057",
    chapter:"CH1 緒論",
    section:"代謝總論",
    difficulty:"medium",
    tags:["代謝"],
    question:"新陳代謝最基本的意義是什麼？",
    options:[
      "生物體與外界進行物質與能量交換",
      "只有蛋白質分解",
      "只有 DNA 複製",
      "只發生在病理狀態"
    ],
    answer:0,
    explanation:"新陳代謝本質上就是生物體持續進行物質與能量交換。"
  },
  {
    id:"CH1-058",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["Jacob","Monod"],
    question:"操縱子模型（Operon model）最常與哪一組科學家有關？",
    options:["Jacob 與 Monod","Watson 與 Crick","Sumner 與 Avery","Berg 與 Sanger"],
    answer:0,
    explanation:"操縱子模型常與 Jacob 與 Monod 連結。"
  },
  {
    id:"CH1-059",
    chapter:"CH1 緒論",
    section:"發展史",
    difficulty:"medium",
    tags:["基因工程"],
    question:"DNA 重組技術的建立，最重要帶動了哪個領域發展？",
    options:["現代基因工程","古典解剖學","純礦物學","只有食品烹飪"],
    answer:0,
    explanation:"DNA 重組技術是現代基因工程的重要基礎。"
  },
  {
    id:"CH1-060",
    chapter:"CH1 緒論",
    section:"中心法則",
    difficulty:"medium",
    tags:["逆轉錄"],
    question:"下列哪一條資訊流動方向最能代表逆轉錄？",
    options:["RNA → DNA","DNA → RNA","蛋白質 → RNA","脂質 → DNA"],
    answer:0,
    explanation:"逆轉錄是以 RNA 為模板合成 DNA。"
  },

  {
    id:"CH2-076",
    chapter:"CH2 蛋白質",
    section:"結構與功能",
    difficulty:"medium",
    tags:["蛋白質摺疊"],
    question:"蛋白質若無法正確摺疊，最常先影響什麼？",
    options:["功能表現","元素種類","原子序號","DNA 鹼基數"],
    answer:0,
    explanation:"蛋白質結構與功能密切相關，摺疊異常常先影響功能。"
  },
  {
    id:"CH2-077",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["疏水性"],
    question:"下列哪個胺基酸最符合疏水性非極性的特徵？",
    options:["Leu","Asp","Asn","Lys"],
    answer:0,
    explanation:"Leu 屬於典型非極性疏水性胺基酸。"
  },
  {
    id:"CH2-078",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["親水性"],
    question:"下列哪個胺基酸最符合極性親水性的特徵？",
    options:["Ser","Val","Leu","Phe"],
    answer:0,
    explanation:"Ser 為極性且親水性的胺基酸。"
  },
  {
    id:"CH2-079",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["帶電側鏈"],
    question:"下列哪個胺基酸在生理條件下較常帶正電？",
    options:["Lys","Glu","Asp","Val"],
    answer:0,
    explanation:"Lys 為鹼性胺基酸，在生理條件下常帶正電。"
  },
  {
    id:"CH2-080",
    chapter:"CH2 蛋白質",
    section:"胺基酸分類",
    difficulty:"medium",
    tags:["帶電側鏈"],
    question:"下列哪個胺基酸在生理條件下較常帶負電？",
    options:["Glu","Lys","Arg","His"],
    answer:0,
    explanation:"Glu 為酸性胺基酸，在生理條件下較常帶負電。"
  },

  {
    id:"CH3-081",
    chapter:"CH3 酶",
    section:"酶與疾病",
    difficulty:"medium",
    tags:["臨床"],
    question:"為什麼酶缺乏常會導致疾病？",
    options:[
      "因為代謝反應可能受阻或失衡",
      "因為酶會變成 DNA",
      "因為酶只存在細胞外",
      "因為酶本身一定是病毒"
    ],
    answer:0,
    explanation:"酶是代謝關鍵催化者，缺乏時會影響正常生理代謝。"
  },
  {
    id:"CH3-082",
    chapter:"CH3 酶",
    section:"藥物與抑制",
    difficulty:"medium",
    tags:["酶抑制"],
    question:"許多藥物能發揮作用，常與哪個概念最有關？",
    options:["抑制特定酶活性","改變原子種類","增加核酸密度","只改變顏色"],
    answer:0,
    explanation:"很多藥物的作用機制就是抑制特定酶，改變代謝或訊號路徑。"
  },
  {
    id:"CH3-083",
    chapter:"CH3 酶",
    section:"底物與活化位",
    difficulty:"medium",
    tags:["活化位置"],
    question:"酶活化位置（active site）的主要功能是什麼？",
    options:["與底物結合並進行催化","儲存 DNA","直接合成細胞膜","取代核糖體"],
    answer:0,
    explanation:"活化位置是底物結合與催化反應的核心區域。"
  },
  {
    id:"CH3-084",
    chapter:"CH3 酶",
    section:"底物與活化位",
    difficulty:"medium",
    tags:["專一性"],
    question:"活化位置的化學環境與形狀，最主要決定了什麼？",
    options:["底物辨識與專一性","元素週期表排序","體溫絕對值","血型種類"],
    answer:0,
    explanation:"活化位置的結構與化學特性會影響酶對底物的辨識。"
  },
  {
    id:"CH3-085",
    chapter:"CH3 酶",
    section:"綜合觀念",
    difficulty:"medium",
    tags:["Km","Vmax","抑制"],
    question:"下列何者最能說明為何要學 Km、Vmax 與抑制型態？",
    options:[
      "可幫助理解酶效率、親和力與藥物作用方式",
      "只是單純背公式，沒有應用",
      "只用來計算 DNA 長度",
      "只和天氣有關"
    ],
    answer:0,
    explanation:"Km、Vmax 與抑制型態是理解酶功能、藥物設計與代謝調控的核心。"
  },
  {
    id:"CASE-001",
    chapter:"CH1-CH3 整合",
    section:"發燒與酶活性",
    difficulty:"medium",
    tags:["酶","溫度","蛋白質"],
    question:"某病人高燒多日，醫師擔心體內部分酶活性異常。下列哪一個解釋最合理？",
    options:[
      "高溫可能改變酶的高階結構，導致活性下降",
      "高溫會直接改變 DNA 鹼基種類",
      "高溫一定讓所有酶活性永久上升",
      "高溫只影響脂質，不影響蛋白質"
    ],
    answer:0,
    explanation:"酶本質多為蛋白質，溫度過高可能造成變性，影響其二、三、四級結構與活性。"
  },
  {
    id:"CASE-002",
    chapter:"CH1-CH3 整合",
    section:"胃部酸鹼與酶",
    difficulty:"medium",
    tags:["pH","酶","胃蛋白酶"],
    question:"某人長期服用大量制酸劑後，發現某些胃內消化功能變差。最合理的原因是什麼？",
    options:[
      "胃內 pH 改變，影響適合酸性環境作用的酶活性",
      "制酸劑會讓所有蛋白質變成脂質",
      "胃酸下降會讓 DNA 無法複製",
      "胃酸下降只影響水分子鍵角"
    ],
    answer:0,
    explanation:"酶通常有最適 pH，胃內某些酶適合酸性環境，pH 改變會影響其催化效率。"
  },
  {
    id:"CASE-003",
    chapter:"CH1-CH3 整合",
    section:"鐮刀型貧血",
    difficulty:"medium",
    tags:["胺基酸","蛋白質","臨床"],
    question:"某患者被診斷為鐮刀型貧血，其分子基礎與下列何者最相關？",
    options:[
      "蛋白質一級結構中胺基酸發生替換",
      "蛋白質四級結構完全消失但序列不變",
      "DNA 完全不存在",
      "脂質雙層變成單層"
    ],
    answer:0,
    explanation:"鐮刀型貧血是經典的胺基酸替換案例，屬於蛋白質一級結構改變，進而影響高階結構與功能。"
  },
  {
    id:"CASE-004",
    chapter:"CH1-CH3 整合",
    section:"酶抑制與用藥",
    difficulty:"medium",
    tags:["酶抑制","藥物"],
    question:"某藥物的設計目標是『模仿底物結構並搶先卡住酶的活化位置』，這最符合哪一種抑制？",
    options:[
      "競爭型抑制",
      "非競爭型抑制",
      "不可逆抑制",
      "回饋活化"
    ],
    answer:0,
    explanation:"若藥物模仿底物並和底物競爭活化位置，最符合競爭型抑制。"
  },
  {
    id:"CASE-005",
    chapter:"CH1-CH3 整合",
    section:"底物濃度與速率",
    difficulty:"medium",
    tags:["Km","Vmax","酶動力學"],
    question:"研究人員觀察到某酶在低底物濃度時，反應速率隨底物增加而明顯上升；但高底物濃度時速率趨近平臺。最合理的解釋是什麼？",
    options:[
      "酶的活化位置逐漸被底物占滿，接近飽和",
      "底物在高濃度時全部變成抑制劑",
      "高濃度底物會讓 ATP 消失",
      "表示該酶不是蛋白質"
    ],
    answer:0,
    explanation:"這是典型 Michaelis-Menten 行為，底物逐漸使酶飽和，速率接近 Vmax。"
  },
  {
    id:"CASE-006",
    chapter:"CH1-CH3 整合",
    section:"維生素 C 與膠原蛋白",
    difficulty:"medium",
    tags:["蛋白質","膠原蛋白","臨床"],
    question:"某人長期營養失衡，出現牙齦脆弱、傷口癒合差等現象。若考慮膠原蛋白相關問題，最合理的說法是什麼？",
    options:[
      "蛋白質結構穩定性可能受影響",
      "DNA 雙螺旋一定斷裂",
      "所有胺基酸都會消失",
      "水分子一定失去極性"
    ],
    answer:0,
    explanation:"膠原蛋白是重要結構蛋白，相關營養不足會影響其形成與穩定性。"
  },
  {
    id:"CASE-007",
    chapter:"CH1-CH3 整合",
    section:"Prion 異常折疊",
    difficulty:"medium",
    tags:["蛋白質折疊","β-摺板"],
    question:"某神經退化性疾病與蛋白質錯誤折疊有關，檢測發現異常蛋白 β-摺板比例升高。這最符合哪種觀念？",
    options:[
      "蛋白質高階結構異常會影響功能",
      "只有一級結構重要，摺疊無關",
      "所有疾病都與脂質有關",
      "酶一定不是蛋白質"
    ],
    answer:0,
    explanation:"蛋白質錯誤折疊會影響其功能，Prion 類疾病就是典型例子。"
  },
  {
    id:"CASE-008",
    chapter:"CH1-CH3 整合",
    section:"親和力比較",
    difficulty:"medium",
    tags:["Km","親和力"],
    question:"研究兩種酶 A 與 B，發現 A 的 Km 比 B 小。若其他條件相近，下列推論何者較合理？",
    options:[
      "A 對底物親和力較高",
      "A 一定有更高 Vmax",
      "A 一定受到不可逆抑制",
      "A 一定不是蛋白質"
    ],
    answer:0,
    explanation:"在基礎生化中，Km 較小通常表示酶與底物親和力較高。"
  },
  {
    id:"CASE-009",
    chapter:"CH1-CH3 整合",
    section:"高鹽環境與蛋白質",
    difficulty:"medium",
    tags:["蛋白質","離子鍵","變性"],
    question:"某蛋白質被放入極端鹽濃度環境後，活性顯著下降。最合理的原因是什麼？",
    options:[
      "分子間離子作用與高階結構可能受到干擾",
      "蛋白質一級結構一定全部被切斷",
      "所有肽鍵立刻變成糖苷鍵",
      "表示蛋白質本來就是核酸"
    ],
    answer:0,
    explanation:"極端離子環境可能干擾蛋白質中離子作用與整體摺疊，進而影響活性。"
  },
  {
    id:"CASE-010",
    chapter:"CH1-CH3 整合",
    section:"缺乏輔助因子",
    difficulty:"medium",
    tags:["全酶","輔助因子"],
    question:"某酶蛋白本身存在，但因缺乏特定金屬離子而幾乎沒有活性。這最能說明什麼？",
    options:[
      "該酶可能需要輔助因子才能形成有效全酶",
      "酶蛋白一定已被完全分解",
      "該反應一定與 pH 無關",
      "金屬離子只和 DNA 有關"
    ],
    answer:0,
    explanation:"有些酶需要金屬離子或其他輔助因子，才能形成具有活性的 holoenzyme。"
  },
  {
    id:"CASE-011",
    chapter:"CH1-CH3 整合",
    section:"酸性胺基酸與電荷",
    difficulty:"medium",
    tags:["胺基酸","pI","電荷"],
    question:"某胺基酸在生理條件下常呈現負電，研究者推測它可能屬於哪一類？",
    options:[
      "酸性胺基酸",
      "鹼性胺基酸",
      "非極性胺基酸",
      "芳香族一定帶正電"
    ],
    answer:0,
    explanation:"酸性胺基酸如 Asp、Glu 在生理條件下常帶負電。"
  },
  {
    id:"CASE-012",
    chapter:"CH1-CH3 整合",
    section:"鹼性胺基酸與活性位",
    difficulty:"medium",
    tags:["His","酶活化位"],
    question:"某酶活化位中有一個殘基在生理 pH 附近可靈活接受或提供質子，因此對催化很重要。最可能是哪種胺基酸？",
    options:[
      "His",
      "Val",
      "Gly",
      "Phe"
    ],
    answer:0,
    explanation:"His 因 pKa 接近中性，常在酶活化位中扮演質子轉移角色。"
  },
  {
    id:"CASE-013",
    chapter:"CH1-CH3 整合",
    section:"酶原活化",
    difficulty:"medium",
    tags:["酶原","共價修飾"],
    question:"胰蛋白酶若一開始就以活性型存在，可能會傷害自身組織。因此身體先合成酶原。這最主要是在避免什麼？",
    options:[
      "酶在錯誤時間或位置提前作用",
      "蛋白質無法合成",
      "DNA 不能複製",
      "ATP 不能形成"
    ],
    answer:0,
    explanation:"酶原設計可避免具有破壞力的酶在不適當時間或部位提早活化。"
  },
  {
    id:"CASE-014",
    chapter:"CH1-CH3 整合",
    section:"回饋抑制",
    difficulty:"medium",
    tags:["代謝調節","回饋控制"],
    question:"某代謝路徑的終產物累積後，會回頭抑制第一個關鍵酶。這種機制對細胞最主要的好處是什麼？",
    options:[
      "避免過度生產、節省資源",
      "讓所有反應完全停止",
      "讓所有酶不可逆失活",
      "直接改變 DNA 序列"
    ],
    answer:0,
    explanation:"回饋抑制能避免終產物過量生成，是代謝調節的重要方式。"
  },
  {
    id:"CASE-015",
    chapter:"CH1-CH3 整合",
    section:"競爭型抑制判讀",
    difficulty:"medium",
    tags:["Km","Vmax","競爭型抑制"],
    question:"某抑制劑加入後，實驗顯示 Vmax 不變，但需要更高底物濃度才能達到相同速率。這最符合哪一種情況？",
    options:[
      "競爭型抑制",
      "非競爭型抑制",
      "不可逆抑制",
      "酶原活化"
    ],
    answer:0,
    explanation:"Vmax 不變、Km 增加，是競爭型抑制的典型特徵。"
  },
  {
    id:"CASE-016",
    chapter:"CH1-CH3 整合",
    section:"非競爭型抑制判讀",
    difficulty:"medium",
    tags:["Km","Vmax","非競爭型抑制"],
    question:"某抑制劑加入後，即使增加底物濃度，最大反應速率仍下降，但 Km 近似不變。這最符合哪一種抑制？",
    options:[
      "非競爭型抑制",
      "競爭型抑制",
      "底物活化",
      "不可逆合成"
    ],
    answer:0,
    explanation:"Vmax 下降、Km 近似不變，是非競爭型抑制的典型表現。"
  },
  {
    id:"CASE-017",
    chapter:"CH1-CH3 整合",
    section:"活化位置與專一性",
    difficulty:"medium",
    tags:["active site","專一性"],
    question:"研究人員把酶活化位置中的一個關鍵胺基酸換掉後，發現酶幾乎不再辨識原本底物。最合理的解釋是什麼？",
    options:[
      "活化位置的化學環境改變，影響專一性",
      "蛋白質一定變成核酸",
      "所有高階結構都與功能無關",
      "酶只看溫度不看結構"
    ],
    answer:0,
    explanation:"酶的專一性與活化位置形狀、電荷、官能基等密切相關。"
  },
  {
    id:"CASE-018",
    chapter:"CH1-CH3 整合",
    section:"等電點應用",
    difficulty:"medium",
    tags:["pI","電荷"],
    question:"研究者想讓某蛋白質在電場中移動方向改變，因此調整溶液 pH。這個想法最主要是利用蛋白質的哪個性質？",
    options:[
      "pH 與 pI 會影響分子淨電荷",
      "蛋白質一定不受 pH 影響",
      "所有蛋白質都永久帶正電",
      "蛋白質沒有等電點"
    ],
    answer:0,
    explanation:"蛋白質或胺基酸在不同 pH 下，淨電荷會變化，這與 pI 密切相關。"
  },
  {
    id:"CASE-019",
    chapter:"CH1-CH3 整合",
    section:"疏水作用與摺疊",
    difficulty:"medium",
    tags:["疏水作用","三級結構"],
    question:"某球狀蛋白質在水中自然摺疊後，許多非極性側鏈集中到分子內部。這最主要反映哪種力量？",
    options:[
      "疏水性交互作用",
      "磷酸二酯鍵",
      "糖苷鍵",
      "逆轉錄作用"
    ],
    answer:0,
    explanation:"蛋白質在水中摺疊時，疏水性側鏈常往內埋藏，這是疏水作用的典型表現。"
  },
  {
    id:"CASE-020",
    chapter:"CH1-CH3 整合",
    section:"雙硫鍵穩定",
    difficulty:"medium",
    tags:["Cys","雙硫鍵","蛋白質"],
    question:"某蛋白質在氧化條件下更穩定，分析發現其中兩個半胱胺酸之間形成鍵結。這種鍵最可能是什麼？",
    options:[
      "雙硫鍵",
      "氫鍵",
      "肽鍵",
      "磷酸二酯鍵"
    ],
    answer:0,
    explanation:"兩個 Cys 氧化後可形成雙硫鍵，幫助穩定蛋白質結構。"
  },
  {
    id:"CASE-021",
    chapter:"CH1-CH3 整合",
    section:"水與體溫穩定",
    difficulty:"medium",
    tags:["水","高比熱"],
    question:"某生物能在外界溫度短暫變化下仍維持較穩定體內溫度，這與水的哪項性質最有關？",
    options:[
      "高比熱",
      "低分子量",
      "一定帶負電",
      "完全不形成氫鍵"
    ],
    answer:0,
    explanation:"水的高比熱讓它吸熱放熱時溫度變化較不劇烈，有助體溫穩定。"
  },
  {
    id:"CASE-022",
    chapter:"CH1-CH3 整合",
    section:"水與表面張力",
    difficulty:"medium",
    tags:["水","氫鍵"],
    question:"水能表現出高表面張力，最核心的分子原因是什麼？",
    options:[
      "水分子之間有氫鍵與內聚力",
      "水具有大量肽鍵",
      "水是非極性分子",
      "水分子之間完全沒有作用力"
    ],
    answer:0,
    explanation:"水分子之間氫鍵形成的內聚力是高表面張力的重要基礎。"
  },
  {
    id:"CASE-023",
    chapter:"CH1-CH3 整合",
    section:"酸鹼與緩衝",
    difficulty:"medium",
    tags:["緩衝系統","血液"],
    question:"病人短時間內產生較多酸性代謝物，但血液 pH 沒有立刻大幅偏移，最合理的解釋是什麼？",
    options:[
      "體內緩衝系統在發揮作用",
      "血液中沒有任何離子",
      "所有酶完全停止",
      "酸不會影響 pH"
    ],
    answer:0,
    explanation:"血液中有多種緩衝系統，可暫時抵抗 pH 劇烈改變。"
  },
  {
    id:"CASE-024",
    chapter:"CH1-CH3 整合",
    section:"胺基酸與磷酸化",
    difficulty:"medium",
    tags:["Ser","Thr","Tyr","磷酸化"],
    question:"某蛋白質接受訊號刺激後快速被磷酸化。下列哪一組胺基酸最可能是主要修飾位點？",
    options:[
      "Ser、Thr、Tyr",
      "Val、Leu、Ile",
      "Asp、Glu、Asn",
      "Gly、Ala、Pro"
    ],
    answer:0,
    explanation:"Ser、Thr、Tyr 因含有可接受磷酸基的官能基，常作為磷酸化位點。"
  },
  {
    id:"CASE-025",
    chapter:"CH1-CH3 整合",
    section:"芳香族胺基酸",
    difficulty:"medium",
    tags:["Trp","Phe","Tyr"],
    question:"某蛋白質活化位置特別適合與芳香環配體進行堆疊作用，研究者推測其中可能富含哪類胺基酸？",
    options:[
      "Phe、Tyr、Trp",
      "Asp、Glu、Asn",
      "Gly、Ala、Val",
      "Ser、Thr、Cys"
    ],
    answer:0,
    explanation:"Phe、Tyr、Trp 具有芳香環，常參與相關分子作用。"
  },
  {
    id:"CASE-026",
    chapter:"CH1-CH3 整合",
    section:"G6PD 缺乏",
    difficulty:"medium",
    tags:["酶缺乏","臨床"],
    question:"某人平時健康，但在接觸特定食物或氧化壓力後出現溶血問題，醫師懷疑是某酶缺乏。這最有可能屬於哪種情境？",
    options:[
      "酶缺乏導致代謝防禦能力下降",
      "蛋白質一定全部變性",
      "DNA 雙股一定斷裂",
      "所有水分子都離子化"
    ],
    answer:0,
    explanation:"G6PD 缺乏就是典型的酶缺乏與臨床表現連結案例。"
  },
  {
    id:"CASE-027",
    chapter:"CH1-CH3 整合",
    section:"藥物設計",
    difficulty:"medium",
    tags:["酶抑制","藥物"],
    question:"若研究者想設計一種藥物，讓病毒相關酶無法正常作用，但人體代謝路徑受影響較少，最重要的設計原則是什麼？",
    options:[
      "提高對目標酶的專一性",
      "讓藥物抑制所有酶",
      "完全不考慮活化位置差異",
      "讓藥物只溶於脂質不與蛋白質接觸"
    ],
    answer:0,
    explanation:"藥物設計重點之一就是對目標酶具高專一性，以減少副作用。"
  },
  {
    id:"CASE-028",
    chapter:"CH1-CH3 整合",
    section:"蛋白質層次判讀",
    difficulty:"medium",
    tags:["一級結構","高階結構"],
    question:"若某蛋白質胺基酸序列不變，但經高溫處理後活性消失，最合理的判斷是什麼？",
    options:[
      "高階結構受損，但一級結構可能仍在",
      "一級結構一定全部切斷",
      "DNA 一定被破壞",
      "代表這個分子不是蛋白質"
    ],
    answer:0,
    explanation:"高溫常造成蛋白質變性，影響高階結構與功能，但不一定切斷肽鍵。"
  },
  {
    id:"CASE-029",
    chapter:"CH1-CH3 整合",
    section:"胺基酸替換後果",
    difficulty:"medium",
    tags:["胺基酸性質","蛋白質功能"],
    question:"若蛋白質內部原本一個疏水性胺基酸被換成帶電胺基酸，最可能造成什麼結果？",
    options:[
      "摺疊與穩定性可能受影響",
      "一定讓 DNA 複製加快",
      "所有肽鍵消失",
      "一定使 Vmax 變成 0 不需實驗"
    ],
    answer:0,
    explanation:"胺基酸性質改變可能影響蛋白質內部作用力與整體摺疊。"
  },
  {
    id:"CASE-030",
    chapter:"CH1-CH3 整合",
    section:"總整合判斷",
    difficulty:"medium",
    tags:["整合題","蛋白質","酶","pH","溫度"],
    question:"下列哪一個敘述最能整合生物化學中『結構、環境、功能』三者的關係？",
    options:[
      "蛋白質或酶的結構會受 pH、溫度等環境影響，而結構改變又會影響功能",
      "只要知道分子名稱，就不需要考慮結構",
      "酶功能只看底物量，和結構無關",
      "pH 與溫度只會影響水，不會影響蛋白質"
    ],
    answer:0,
    explanation:"這是生物化學很核心的觀念：環境會影響分子結構，而結構又決定功能。"
  },
{
  id:"NEW-013",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者屬於必需胺基酸？",
  options:["Glycine","Leucine","Alanine","Serine"],
  answer:1,
  explanation:"Leucine 為必需胺基酸，需由飲食攝取。"
},
{
  id:"NEW-014",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列哪一種胺基酸含有芳香環？",
  options:["Valine","Phenylalanine","Alanine","Glycine"],
  answer:1,
  explanation:"Phenylalanine 含有苯環，屬芳香族胺基酸。"
},
{
  id:"NEW-015",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["極性"],
  question:"下列何者為極性不帶電胺基酸？",
  options:["Leucine","Serine","Valine","Isoleucine"],
  answer:1,
  explanation:"Serine 含 -OH，為極性不帶電。"
},
{
  id:"NEW-016",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["酸鹼"],
  question:"下列何者為酸性胺基酸？",
  options:["Aspartate","Lysine","Arginine","Histidine"],
  answer:0,
  explanation:"Aspartate 為酸性胺基酸，帶負電。"
},
{
  id:"NEW-017",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["鹼性"],
  question:"下列何者為鹼性胺基酸？",
  options:["Glutamate","Aspartate","Lysine","Serine"],
  answer:2,
  explanation:"Lysine 為鹼性胺基酸，帶正電。"
},
{
  id:"NEW-018",
  chapter:"CH2 蛋白質",
  section:"鍵結",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"肽鍵形成的本質為何？",
  options:["氧化反應","縮合反應","水解反應","還原反應"],
  answer:1,
  explanation:"肽鍵為脫水縮合形成。"
},
{
  id:"NEW-019",
  chapter:"CH2 蛋白質",
  section:"鍵結",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"肽鍵的形成涉及哪兩個官能基？",
  options:["羧基與胺基","羧基與羥基","胺基與磷酸基","羥基與磷酸基"],
  answer:0,
  explanation:"胺基與羧基形成肽鍵。"
},
{
  id:"NEW-020",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["一級結構"],
  question:"蛋白質的一級結構是指什麼？",
  options:["胺基酸序列","α螺旋","β摺疊","多聚體"],
  answer:0,
  explanation:"一級結構為胺基酸排列順序。"
},
{
  id:"NEW-021",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["三級結構"],
  question:"蛋白質三級結構主要由哪些作用力維持？",
  options:["僅共價鍵","僅氫鍵","多種非共價作用力","僅離子鍵"],
  answer:2,
  explanation:"包含氫鍵、疏水作用、離子鍵等。"
},
{
  id:"NEW-022",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["雙硫鍵"],
  question:"雙硫鍵通常由哪兩個胺基酸形成？",
  options:["Serine","Cysteine","Glycine","Alanine"],
  answer:1,
  explanation:"Cysteine 形成 -S-S- 鍵。"
},
{
  id:"NEW-023",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"easy",
  tags:["酶"],
  question:"酶屬於哪一類生物分子？",
  options:["核酸","蛋白質","脂質","醣類"],
  answer:1,
  explanation:"大多數酶為蛋白質。"
},
{
  id:"NEW-024",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["專一性"],
  question:"酶的專一性主要來自哪個結構？",
  options:["活性位","R基","核酸","細胞膜"],
  answer:0,
  explanation:"活性位決定底物結合。"
},
{
  id:"NEW-025",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["induced fit"],
  question:"誘導契合模型（induced fit）強調什麼？",
  options:["酶結構固定","酶結構會改變","底物變形","酶被破壞"],
  answer:1,
  explanation:"酶會因底物改變構形。"
},
{
  id:"NEW-026",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["Vmax"],
  question:"當底物濃度很高時，反應速率趨近於？",
  options:["Km","Vmax","0","無限大"],
  answer:1,
  explanation:"達飽和後接近最大速率。"
},
{
  id:"NEW-027",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["Km"],
  question:"Km 的定義為何？",
  options:["最大速率","半最大速率時的底物濃度","酶濃度","產物濃度"],
  answer:1,
  explanation:"Km 為 Vmax/2 時的底物濃度。"
},
{
  id:"NEW-028",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["競爭"],
  question:"競爭性抑制的作用位置為？",
  options:["活性位","酶外部","核酸","細胞膜"],
  answer:0,
  explanation:"與底物競爭活性位。"
},
{
  id:"NEW-029",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["非競爭"],
  question:"非競爭性抑制的特性為何？",
  options:["影響Km","影響Vmax","提高Km","增加酶量"],
  answer:1,
  explanation:"Vmax下降，Km不變。"
},
{
  id:"NEW-030",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"easy",
  tags:["溫度"],
  question:"溫度過高會導致酶什麼變化？",
  options:["活性增加","變性","結構固定","不影響"],
  answer:1,
  explanation:"高溫會破壞蛋白質結構。"
},
{
  id:"NEW-031",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"easy",
  tags:["pH"],
  question:"酶最適 pH 的意義為何？",
  options:["最低活性","最高活性","無影響","完全失活"],
  answer:1,
  explanation:"最適pH時活性最高。"
},
{
  id:"NEW-032",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["濃度"],
  question:"底物濃度增加時，反應速率如何變化？",
  options:["一直增加","先增加後飽和","一直下降","不變"],
  answer:1,
  explanation:"達到飽和後不再增加。"
},
{
  id:"NEW-033",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["陰電性"],
  question:"下列元素中陰電性最大的是？",
  options:["C","N","O","F"],
  answer:3,
  explanation:"F 陰電性最高。"
},
{
  id:"NEW-034",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["極性"],
  question:"O-H 鍵屬於哪種類型？",
  options:["非極性共價鍵","極性共價鍵","離子鍵","氫鍵"],
  answer:1,
  explanation:"因陰電性差異形成極性。"
},
{
  id:"NEW-035",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"水的高比熱主要來自什麼？",
  options:["共價鍵","氫鍵","離子鍵","電子數"],
  answer:1,
  explanation:"氫鍵需大量能量破壞。"
},
{
  id:"NEW-036",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["溶解"],
  question:"水可溶解極性物質的主要原因為？",
  options:["高密度","極性","高重量","高黏度"],
  answer:1,
  explanation:"極性使其能與溶質作用。"
},
{
  id:"NEW-037",
  chapter:"CH1 緒論",
  section:"緩衝",
  difficulty:"medium",
  tags:["系統"],
  question:"血紅素緩衝系統主要作用在哪？",
  options:["細胞內","血液","腎臟","肝臟"],
  answer:1,
  explanation:"在血液中調節酸鹼。"
},
{
  id:"NEW-038",
  chapter:"CH1 緒論",
  section:"疾病",
  difficulty:"medium",
  tags:["鐮刀型"],
  question:"鐮刀型貧血是由什麼造成？",
  options:["蛋白質缺乏","點突變","病毒感染","缺氧"],
  answer:1,
  explanation:"單一胺基酸突變。"
},
{
  id:"NEW-039",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"easy",
  tags:["功能"],
  question:"酵素的主要功能屬於哪一類？",
  options:["結構","催化","運輸","免疫"],
  answer:1,
  explanation:"酵素為催化功能蛋白。"
},
{
  id:"NEW-040",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["運輸"],
  question:"血紅素的主要功能為？",
  options:["催化","運輸氧氣","免疫","儲存脂質"],
  answer:1,
  explanation:"血紅素負責氧氣運輸。"
},
{
  id:"NEW-041",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["免疫"],
  question:"抗體屬於哪一類蛋白？",
  options:["運輸蛋白","酵素","免疫蛋白","結構蛋白"],
  answer:2,
  explanation:"抗體屬免疫蛋白。"
},
{
  id:"NEW-042",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["不可逆"],
  question:"不可逆抑制的特徵為何？",
  options:["可恢復","永久失活","Km不變","Vmax上升"],
  answer:1,
  explanation:"酶永久失去活性。"
},
{
  id:"NEW-043",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["輔酶"],
  question:"輔酶通常屬於哪類分子？",
  options:["蛋白質","脂質","有機分子","核酸"],
  answer:2,
  explanation:"輔酶為有機小分子。"
},
{
  id:"NEW-044",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["金屬"],
  question:"金屬離子在酶中通常扮演什麼角色？",
  options:["抑制","結構或催化輔助","破壞酶","儲存能量"],
  answer:1,
  explanation:"為輔因子。"
},
{
  id:"NEW-045",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["再利用"],
  question:"酶在反應後的狀態為何？",
  options:["被消耗","改變","可再利用","變成產物"],
  answer:2,
  explanation:"酶不被消耗。"
},
{
  id:"NEW-046",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["圖像"],
  question:"米氏曲線呈現何種形狀？",
  options:["直線","雙曲線","拋物線","指數下降"],
  answer:1,
  explanation:"為雙曲線。"
},
{
  id:"NEW-047",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver-Burk 圖為何種圖？",
  options:["半對數","雙倒數","線性回歸","指數圖"],
  answer:1,
  explanation:"為雙倒數圖。"
},
{
  id:"NEW-048",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性會破壞哪一結構？",
  options:["一級","二級以上","只有四級","全部"],
  answer:1,
  explanation:"不影響一級結構。"
},
{
  id:"NEW-049",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["因素"],
  question:"下列何者不會造成蛋白質變性？",
  options:["高溫","強酸","強鹼","適當pH"],
  answer:3,
  explanation:"適當pH不會破壞結構。"
},
{
  id:"NEW-050",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["疏水"],
  question:"疏水性胺基酸通常位於蛋白質哪裡？",
  options:["表面","內部","細胞外","核內"],
  answer:1,
  explanation:"疏水胺基酸多在內部。"
},
{
  id:"NEW-051",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["親水"],
  question:"親水性胺基酸通常位於蛋白質哪裡？",
  options:["內部","表面","膜內","細胞核"],
  answer:1,
  explanation:"與水接觸在表面。"
},
{
  id:"NEW-052",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶降低反應活化能的作用為何？",
  options:["降低產物量","增加能量需求","加快反應速率","破壞反應"],
  answer:2,
  explanation:"降低活化能使反應更快。"
},
{
  id:"NEW-053",
  chapter:"CH1 緒論",
  section:"生物大分子",
  difficulty:"medium",
  tags:["比較"],
  question:"下列何者主要負責催化生物反應？",
  options:["脂質","蛋白質","核酸","醣類"],
  answer:1,
  explanation:"酶為蛋白質，負責催化反應。"
},
{
  id:"NEW-054",
  chapter:"CH1 緒論",
  section:"元素",
  difficulty:"medium",
  tags:["元素"],
  question:"下列何者最可能參與能量轉移（ATP）？",
  options:["C","N","P","S"],
  answer:2,
  explanation:"ATP 含磷酸基。"
},
{
  id:"NEW-055",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["鍵結"],
  question:"陰電性差距大於1.8通常形成？",
  options:["共價鍵","極性共價鍵","離子鍵","氫鍵"],
  answer:2,
  explanation:"差距大易形成離子鍵。"
},
{
  id:"NEW-056",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["作用力"],
  question:"疏水作用的本質為何？",
  options:["電子轉移","水排斥非極性分子","氫鍵形成","共價鍵"],
  answer:1,
  explanation:"非極性分子聚集避免水。"
},
{
  id:"NEW-057",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["性質"],
  question:"水的高蒸發熱主要功能為何？",
  options:["降溫","增加密度","增加黏度","增加溶解度"],
  answer:0,
  explanation:"蒸發帶走熱量。"
},
{
  id:"NEW-058",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"medium",
  tags:["計算"],
  question:"若[H+] = 1×10⁻⁷，pH為？",
  options:["6","7","8","9"],
  answer:1,
  explanation:"pH = 7。"
},
{
  id:"NEW-059",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["判斷"],
  question:"pH=6 的溶液相較於 pH=7 的溶液？",
  options:["酸性低10倍","酸性高10倍","酸性高100倍","無差"],
  answer:1,
  explanation:"pH差1為10倍。"
},
{
  id:"NEW-060",
  chapter:"CH1 緒論",
  section:"緩衝",
  difficulty:"medium",
  tags:["系統"],
  question:"蛋白質緩衝系統的主要原因為？",
  options:["大量存在且具可電離基團","含脂質","含核酸","含水"],
  answer:0,
  explanation:"蛋白質含多種官能基。"
},
{
  id:"NEW-061",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為疏水性胺基酸？",
  options:["Serine","Valine","Aspartate","Lysine"],
  answer:1,
  explanation:"Valine 為非極性。"
},
{
  id:"NEW-062",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為帶正電胺基酸？",
  options:["Glutamate","Aspartate","Arginine","Serine"],
  answer:2,
  explanation:"Arginine 為鹼性。"
},
{
  id:"NEW-063",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["功能"],
  question:"哪一胺基酸可形成雙硫鍵？",
  options:["Serine","Cysteine","Glycine","Alanine"],
  answer:1,
  explanation:"Cysteine 含-SH。"
},
{
  id:"NEW-064",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["二級"],
  question:"β-摺疊主要由何種作用力穩定？",
  options:["共價鍵","氫鍵","離子鍵","疏水作用"],
  answer:1,
  explanation:"氫鍵維持。"
},
{
  id:"NEW-065",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["比較"],
  question:"蛋白質三級結構與四級結構差異在於？",
  options:["是否有氫鍵","是否有多條多肽鏈","是否有胺基酸","是否有共價鍵"],
  answer:1,
  explanation:"四級結構為多鏈。"
},
{
  id:"NEW-066",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性後通常會？",
  options:["活性增加","失去功能","產生DNA","變成脂質"],
  answer:1,
  explanation:"結構破壞導致失活。"
},
{
  id:"NEW-067",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["分類"],
  question:"膠原蛋白屬於哪類蛋白？",
  options:["酵素","結構蛋白","運輸蛋白","免疫蛋白"],
  answer:1,
  explanation:"提供結構支撐。"
},
{
  id:"NEW-068",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["催化"],
  question:"酶能加速反應但不改變什麼？",
  options:["速率","平衡位置","活化能","溫度"],
  answer:1,
  explanation:"不改變平衡。"
},
{
  id:"NEW-069",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["機制"],
  question:"酶降低活化能的方式不包含？",
  options:["穩定過渡態","提供替代路徑","增加溫度","正確定位底物"],
  answer:2,
  explanation:"酶不改變溫度。"
},
{
  id:"NEW-070",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km"],
  question:"Km 高代表什麼？",
  options:["高親和力","低親和力","高速率","高Vmax"],
  answer:1,
  explanation:"Km高→親和力低。"
},
{
  id:"NEW-071",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["濃度"],
  question:"增加酶濃度會使？",
  options:["Km改變","Vmax增加","Km下降","反應停止"],
  answer:1,
  explanation:"Vmax與酶量相關。"
},
{
  id:"NEW-072",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["競爭"],
  question:"競爭性抑制會使Lineweaver圖？",
  options:["斜率不變","斜率增加","Y截距下降","X截距不變"],
  answer:1,
  explanation:"Km增加→斜率增加。"
},
{
  id:"NEW-073",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["非競爭"],
  question:"非競爭抑制Lineweaver圖變化？",
  options:["斜率不變","Y截距上升","X截距變化","Km下降"],
  answer:1,
  explanation:"Vmax下降→Y截距↑。"
},
{
  id:"NEW-074",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["輔酶"],
  question:"NAD+ 屬於？",
  options:["酶","輔酶","脂質","核酸"],
  answer:1,
  explanation:"為輔酶。"
},
{
  id:"NEW-075",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["再利用"],
  question:"酶在反應中被消耗嗎？",
  options:["是","否","部分","只有高溫"],
  answer:1,
  explanation:"酶可重複使用。"
},
{
  id:"NEW-076",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["密度"],
  question:"冰浮於水上的原因為？",
  options:["密度較大","密度較小","溫度高","極性低"],
  answer:1,
  explanation:"冰密度較低。"
},
{
  id:"NEW-077",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["作用力"],
  question:"凡得瓦力屬於？",
  options:["共價鍵","非共價作用力","離子鍵","氫鍵"],
  answer:1,
  explanation:"弱作用力。"
},
{
  id:"NEW-078",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["結構"],
  question:"Proline 的特殊性為何？",
  options:["含硫","環狀結構","帶電","含芳香環"],
  answer:1,
  explanation:"環狀造成彎曲。"
},
{
  id:"NEW-079",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"Tyrosine 的特性為？",
  options:["完全非極性","含酚基","帶負電","無反應性"],
  answer:1,
  explanation:"含酚基。"
},
{
  id:"NEW-080",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["酵素"],
  question:"酵素與底物結合後形成？",
  options:["產物","酶-底物複合體","RNA","脂質"],
  answer:1,
  explanation:"ES complex。"
},
{
  id:"NEW-081",
  chapter:"CH3 酶",
  section:"機制",
  difficulty:"medium",
  tags:["ES"],
  question:"ES complex 的意義為？",
  options:["酶失活","酶與底物結合","酶與產物","底物消失"],
  answer:1,
  explanation:"暫時結合。"
},
{
  id:"NEW-082",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶效率高的原因不包含？",
  options:["定位底物","降低活化能","增加能量","穩定過渡態"],
  answer:2,
  explanation:"不增加能量。"
},
{
  id:"NEW-083",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["抑制"],
  question:"重金屬通常會？",
  options:["活化酶","抑制酶","增加Km","增加Vmax"],
  answer:1,
  explanation:"破壞結構。"
},
{
  id:"NEW-084",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["因素"],
  question:"下列何者最可能導致蛋白質變性？",
  options:["低溫","適中pH","高溫","低鹽"],
  answer:2,
  explanation:"高溫破壞結構。"
},
{
  id:"NEW-085",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["計算"],
  question:"pH=3 的溶液比 pH=5 酸性？",
  options:["10倍","100倍","1000倍","無法比較"],
  answer:1,
  explanation:"差2→100倍。"
},
{
  id:"NEW-086",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km"],
  question:"當底物濃度等於Km時，速率為？",
  options:["Vmax","1/2 Vmax","2Vmax","0"],
  answer:1,
  explanation:"定義。"
},
{
  id:"NEW-087",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["疏水"],
  question:"蛋白質折疊的主要驅動力為？",
  options:["離子鍵","氫鍵","疏水作用","共價鍵"],
  answer:2,
  explanation:"疏水效應。"
},
{
  id:"NEW-088",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"氫鍵常出現在？",
  options:["R基","主鏈","脂質","DNA外部"],
  answer:1,
  explanation:"主鏈。"
},
{
  id:"NEW-089",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["模型"],
  question:"lock and key 模型假設？",
  options:["酶可變形","酶固定","底物改變","酶失活"],
  answer:1,
  explanation:"固定模型。"
},
{
  id:"NEW-090",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["比較"],
  question:"競爭 vs 非競爭差異？",
  options:["是否影響Km","是否有酶","是否有底物","是否有產物"],
  answer:0,
  explanation:"競爭影響Km。"
},
{
  id:"NEW-091",
  chapter:"CH1 緒論",
  section:"元素",
  difficulty:"medium",
  tags:["元素"],
  question:"下列何者最常存在於蛋白質中？",
  options:["Na","Cl","N","Fe"],
  answer:2,
  explanation:"蛋白質含胺基。"
},
{
  id:"NEW-092",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為芳香族？",
  options:["Gly","Val","Trp","Ala"],
  answer:2,
  explanation:"Trp。"
},
{
  id:"NEW-093",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["必需"],
  question:"下列何者為必需胺基酸？",
  options:["Ala","Gly","Leu","Ser"],
  answer:2,
  explanation:"Leu。"
},
{
  id:"NEW-094",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["催化"],
  question:"酶作用後產物會？",
  options:["與酶結合","釋放","消失","變酶"],
  answer:1,
  explanation:"產物釋放。"
},
{
  id:"NEW-095",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["pH"],
  question:"pH影響酶的主要原因？",
  options:["改變序列","改變電荷","改變DNA","改變脂質"],
  answer:1,
  explanation:"影響離子狀態。"
},
{
  id:"NEW-096",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["儲存"],
  question:"Ferritin 屬於？",
  options:["運輸","儲存","免疫","酵素"],
  answer:1,
  explanation:"儲存鐵。"
},
{
  id:"NEW-097",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["圖"],
  question:"Lineweaver圖中X截距代表？",
  options:["1/Vmax","-1/Km","Km","Vmax"],
  answer:1,
  explanation:"X截距=-1/Km。"
},
{
  id:"NEW-098",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["圖"],
  question:"Y截距代表？",
  options:["1/Vmax","Km","Vmax","-Km"],
  answer:0,
  explanation:"Y截距=1/Vmax。"
},
{
  id:"NEW-099",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["R基"],
  question:"胺基酸差異主要來自？",
  options:["胺基","羧基","R基","H"],
  answer:2,
  explanation:"R基決定性質。"
},
{
  id:"NEW-100",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["潤滑"],
  question:"水作為潤滑劑主要在？",
  options:["血液","關節","腦","肌肉"],
  answer:1,
  explanation:"關節液。"
},
{
  id:"NEW-101",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶可重複使用原因？",
  options:["不參與反應","不被消耗","產生新酶","固定不動"],
  answer:1,
  explanation:"反應後恢復。"
},
{
  id:"NEW-102",
  chapter:"CH2 蛋白質",
  section:"總結",
  difficulty:"medium",
  tags:["整合"],
  question:"蛋白質功能最主要取決於？",
  options:["數量","序列與結構","位置","大小"],
  answer:1,
  explanation:"結構決定功能。"
},
{
  id:"NEW-103",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["生物化學定義","整合"],
  question:"老師說：「生物化學不是只背器官名稱，而是要從分子角度理解生命現象。」這句話最符合下列哪一個觀念？",
  options:["生物化學主要研究組織切片外觀","生物化學重點在生物體內化學組成、結構與反應","生物化學只研究遺傳病","生物化學只研究藥物治療"],
  answer:1,
  explanation:"生物化學核心在於從分子層次理解生命體內的化學組成、結構與反應。"
},
{
  id:"NEW-104",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["大分子","功能"],
  question:"某學生整理表格時，把 DNA、酵素、三酸甘油酯都寫成「主要負責催化」。下列哪一項修正最正確？",
  options:["DNA與脂質都主要負責催化","酵素主要負責催化，DNA主要負責遺傳資訊儲存","三酸甘油酯主要負責催化，酵素主要儲存能量","DNA、酵素、脂質三者功能相同"],
  answer:1,
  explanation:"酵素主要負責催化；DNA負責遺傳資訊；脂質偏向儲能與膜結構。"
},
{
  id:"NEW-105",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["中心法則"],
  question:"研究生觀察某細胞先將 DNA 資訊轉成 mRNA，再依序合成蛋白質。這個流程最符合下列何者？",
  options:["DNA→蛋白質→RNA","RNA→DNA→蛋白質","DNA→RNA→蛋白質","蛋白質→RNA→DNA"],
  answer:2,
  explanation:"中心法則主要流程為 DNA 轉錄成 RNA，再翻譯成蛋白質。"
},
{
  id:"NEW-106",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["中心法則","逆轉錄"],
  question:"某病毒的遺傳物質為 RNA，進入宿主後可先形成 DNA 再整合到宿主基因組。此現象最能說明什麼？",
  options:["中心法則完全錯誤","存在逆轉錄現象","蛋白質可直接變成DNA","DNA無法作為遺傳物質"],
  answer:1,
  explanation:"RNA先轉成DNA屬逆轉錄，是對中心法則的重要補充。"
},
{
  id:"NEW-107",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["元素"],
  question:"某學生活動中被問到：『生命常見六大元素是哪一組？』下列哪一組回答最正確？",
  options:["C、H、O、N、P、S","Na、K、Cl、Ca、Fe、Zn","C、H、Na、O、Ca、P","O、N、Fe、Cu、S、K"],
  answer:0,
  explanation:"生命常見六大元素為 C、H、O、N、P、S。"
},
{
  id:"NEW-108",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["鍵結","陰電性"],
  question:"在化學鍵比較題中，老師問：『兩原子之間若陰電性差很小，通常最可能形成哪種鍵？』",
  options:["共價鍵","離子鍵","氫鍵","疏水作用"],
  answer:0,
  explanation:"陰電性差小通常形成共價鍵；差較大則偏向離子鍵。"
},
{
  id:"NEW-109",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["非共價作用力"],
  question:"某藥物與受體之間是以較弱、可逆的吸引力互相辨識，且便於快速結合與分離。這最可能屬於？",
  options:["非共價作用力","磷酸二酯鍵","肽鍵","雙硫鍵"],
  answer:0,
  explanation:"生物辨識常依賴可逆的非共價作用力。"
},
{
  id:"NEW-110",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水"],
  question:"運動後大量流汗可以幫助體溫下降，這主要反映水的哪一項性質？",
  options:["高表面張力","高蒸發熱","高密度","低極性"],
  answer:1,
  explanation:"汗液蒸發帶走大量熱能，與水的高蒸發熱有關。"
},
{
  id:"NEW-111",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","高比熱"],
  question:"海邊地區白天夜晚溫差通常較小，生物體內液也有助於維持溫度穩定。這與水的哪一性質最相關？",
  options:["高比熱","高密度","低蒸發熱","非極性"],
  answer:0,
  explanation:"水的高比熱使吸熱放熱時溫度變化較小。"
},
{
  id:"NEW-112",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","結構"],
  question:"水分子具有極性且分子形狀彎曲，O-H 鍵角大約為多少？",
  options:["90°","104.5°","120°","180°"],
  answer:1,
  explanation:"水分子呈彎曲結構，鍵角約 104.5°。"
},
{
  id:"NEW-113",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["pH","計算"],
  question:"實驗室中某溶液 [H+] = 1×10⁻⁶ M，該溶液的 pH 最接近下列何者？",
  options:["5","6","7","8"],
  answer:1,
  explanation:"pH = -log[H+] = 6。"
},
{
  id:"NEW-114",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["pH","比較"],
  question:"某兩杯溶液分別為 pH 4 與 pH 6，則 pH 4 的酸性相較於 pH 6？",
  options:["高 2 倍","高 10 倍","高 100 倍","高 1000 倍"],
  answer:2,
  explanation:"pH 差 2，酸性差 10² = 100 倍。"
},
{
  id:"NEW-115",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["緩衝系統"],
  question:"臨床上若談到『細胞外液中最重要的緩衝系統』，下列哪一項最正確？",
  options:["蛋白質緩衝系統","重碳酸鹽-碳酸緩衝系統","磷酸鹽緩衝系統","乳酸緩衝系統"],
  answer:1,
  explanation:"細胞外液最重要的緩衝系統為重碳酸鹽-碳酸系統。"
},
{
  id:"NEW-116",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["緩衝系統","腎臟"],
  question:"老師出題：『哪一種緩衝系統與腎臟排酸關係較密切？』",
  options:["磷酸鹽緩衝系統","血紅素緩衝系統","脂質緩衝系統","ATP緩衝系統"],
  answer:0,
  explanation:"磷酸鹽緩衝系統與腎臟排酸功能密切相關。"
},
{
  id:"NEW-117",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["疾病","鐮刀型貧血"],
  question:"某病患的血紅素因單一胺基酸改變而導致紅血球變形、微血管阻塞。這最可能是哪一種疾病？",
  options:["血友病","鐮刀型貧血","白血病","地中海型貧血"],
  answer:1,
  explanation:"鐮刀型貧血由血紅素中的點突變造成。"
},
{
  id:"NEW-118",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["疾病","胺基酸"],
  question:"鐮刀型貧血中，血紅素某位置的麩胺酸被哪一種胺基酸取代？",
  options:["甘胺酸","纈胺酸","絲胺酸","酪胺酸"],
  answer:1,
  explanation:"典型鐮刀型貧血為 glutamic acid 被 valine 取代。"
},
{
  id:"NEW-119",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","結構"],
  question:"老師指著胺基酸通式問：『哪一部分決定不同胺基酸的性質差異？』",
  options:["胺基","羧基","氫原子","R 基側鏈"],
  answer:3,
  explanation:"各種胺基酸主要差異來自 R 基。"
},
{
  id:"NEW-120",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","光學活性"],
  question:"某同學記得『大多數天然胺基酸都有光學活性，但有一個例外』。這個例外是？",
  options:["Alanine","Glycine","Valine","Leucine"],
  answer:1,
  explanation:"Glycine 的 α-碳不具四種不同取代基，因此無光學活性。"
},
{
  id:"NEW-121",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","構型"],
  question:"地球上一般生物體蛋白質所使用的胺基酸構型主要為何？",
  options:["D 型","L 型","DL 混合","無固定型態"],
  answer:1,
  explanation:"天然蛋白質中的胺基酸主要為 L 型。"
},
{
  id:"NEW-122",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["必需胺基酸"],
  question:"營養師提醒病患某些胺基酸無法由人體自行充分合成，必須由食物攝取。這些稱為？",
  options:["酸性胺基酸","鹼性胺基酸","必需胺基酸","芳香族胺基酸"],
  answer:2,
  explanation:"必需胺基酸需由飲食供應。"
},
{
  id:"NEW-123",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["必需胺基酸"],
  question:"下列哪一個最可能屬於必需胺基酸？",
  options:["Glycine","Leucine","Alanine","Aspartate"],
  answer:1,
  explanation:"Leucine 為必需胺基酸。"
},
{
  id:"NEW-124",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸分類"],
  question:"若某胺基酸具有疏水性、常藏在蛋白質內部，且側鏈是支鏈烴，最可能是哪一類？",
  options:["非極性胺基酸","酸性胺基酸","鹼性胺基酸","極性帶電胺基酸"],
  answer:0,
  explanation:"疏水、支鏈烴通常屬非極性胺基酸。"
},
{
  id:"NEW-125",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸分類"],
  question:"某胺基酸側鏈含有 -OH，通常可被歸入下列哪一類？",
  options:["非極性中性","極性不帶電","酸性","鹼性"],
  answer:1,
  explanation:"含 -OH 的如 Ser、Thr 常屬極性不帶電胺基酸。"
},
{
  id:"NEW-126",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酸性胺基酸"],
  question:"若題目問『哪一個屬於酸性胺基酸』，下列何者最合理？",
  options:["Lysine","Arginine","Aspartate","Serine"],
  answer:2,
  explanation:"Aspartate 為酸性胺基酸。"
},
{
  id:"NEW-127",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["鹼性胺基酸"],
  question:"在生理 pH 下常帶正電、可歸為鹼性胺基酸者為？",
  options:["Glutamate","Arginine","Tyrosine","Valine"],
  answer:1,
  explanation:"Arginine 為鹼性且常帶正電。"
},
{
  id:"NEW-128",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["芳香族胺基酸"],
  question:"下列哪一個最符合『芳香族胺基酸』的特徵？",
  options:["Trp","Gly","Ala","Cys"],
  answer:0,
  explanation:"Trp 為芳香族胺基酸。"
},
{
  id:"NEW-129",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["含硫胺基酸","雙硫鍵"],
  question:"實驗中某蛋白質因氧化後形成 -S-S- 鍵而更穩定，這通常與哪種胺基酸最有關？",
  options:["Cysteine","Glycine","Serine","Valine"],
  answer:0,
  explanation:"Cysteine 含 -SH，可形成雙硫鍵。"
},
{
  id:"NEW-130",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["Proline"],
  question:"某學生說某胺基酸因特殊環狀結構，常使蛋白質鏈產生彎折。這最可能是？",
  options:["Proline","Alanine","Lysine","Glutamate"],
  answer:0,
  explanation:"Proline 的環狀結構會影響多肽鏈彎曲。"
},
{
  id:"NEW-131",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"兩個胺基酸連接形成二胜肽時，實際上是由哪兩個官能基反應？",
  options:["胺基與胺基","羧基與羧基","胺基與羧基","R基與R基"],
  answer:2,
  explanation:"一個胺基酸的胺基與另一個的羧基脫水縮合形成肽鍵。"
},
{
  id:"NEW-132",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["肽鍵","反應"],
  question:"形成肽鍵的反應本質最接近下列哪一項？",
  options:["水解反應","脫水縮合反應","氧化反應","還原反應"],
  answer:1,
  explanation:"肽鍵形成會去除一分子水，屬脫水縮合。"
},
{
  id:"NEW-133",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","一級"],
  question:"若題目強調『胺基酸排列順序』，它指的是蛋白質哪一級結構？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:0,
  explanation:"胺基酸序列即為蛋白質一級結構。"
},
{
  id:"NEW-134",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","二級"],
  question:"α-螺旋與β-摺疊屬於蛋白質哪一層次結構？",
  options:["一級","二級","三級","四級"],
  answer:1,
  explanation:"α-螺旋與β-摺疊屬二級結構。"
},
{
  id:"NEW-135",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","二級","氫鍵"],
  question:"蛋白質二級結構主要由哪一種作用力穩定？",
  options:["氫鍵","雙硫鍵","磷酸二酯鍵","金屬鍵"],
  answer:0,
  explanation:"二級結構主要靠主鏈間氫鍵穩定。"
},
{
  id:"NEW-136",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["蛋白質結構","三級"],
  question:"某單一多肽鏈已經摺疊成立體構型，內部同時有疏水作用、離子鍵與氫鍵共同穩定。這最符合？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:2,
  explanation:"單一多肽鏈的完整立體摺疊為三級結構。"
},
{
  id:"NEW-137",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["蛋白質結構","四級"],
  question:"血紅素由多條多肽鏈組成，若題目強調『不同亞基組合』，則主要對應哪一級結構？",
  options:["一級","二級","三級","四級"],
  answer:3,
  explanation:"多條多肽鏈組成複合體屬四級結構。"
},
{
  id:"NEW-138",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"老師請學生舉例『運輸蛋白』，下列哪一項最合適？",
  options:["膠原蛋白","血紅素","抗體","胃蛋白酶"],
  answer:1,
  explanation:"血紅素負責運輸氧氣。"
},
{
  id:"NEW-139",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"若某蛋白質主要負責身體防禦、辨識外來抗原，這最可能屬於？",
  options:["結構蛋白","免疫蛋白","運輸蛋白","儲存蛋白"],
  answer:1,
  explanation:"抗體等屬免疫蛋白。"
},
{
  id:"NEW-140",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"膠原蛋白、角蛋白這類通常歸在下列哪一種蛋白功能類別？",
  options:["催化","結構","運輸","免疫"],
  answer:1,
  explanation:"膠原蛋白與角蛋白屬結構蛋白。"
},
{
  id:"NEW-141",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["變性"],
  question:"某酵素經高溫處理後失去活性，但其胜肽鍵大多仍存在。這最適合描述為？",
  options:["蛋白質聚合","蛋白質變性","蛋白質複製","蛋白質翻譯"],
  answer:1,
  explanation:"高溫通常破壞二級以上結構，導致變性失活。"
},
{
  id:"NEW-142",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["變性","結構"],
  question:"蛋白質變性時，一般最不容易直接被破壞的是哪一層次結構？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:0,
  explanation:"變性通常不直接破壞肽鍵，因此一級結構相對保留。"
},
{
  id:"NEW-143",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","本質"],
  question:"老師問：『大多數酶的化學本質是什麼？』下列何者最正確？",
  options:["脂質","蛋白質","核酸","醣類"],
  answer:1,
  explanation:"大多數酶為蛋白質。"
},
{
  id:"NEW-144",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","功能"],
  question:"在細胞內，酶最主要的角色是什麼？",
  options:["儲存遺傳資訊","加速化學反應","形成細胞膜","提供永久能量"],
  answer:1,
  explanation:"酶是生物催化劑，負責加速反應。"
},
{
  id:"NEW-145",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","活化能"],
  question:"酶能加速反應，最核心的原因是因為它可以？",
  options:["提高反應平衡常數","降低活化能","增加產物總量","改變底物種類"],
  answer:1,
  explanation:"酶透過降低活化能提升反應速率。"
},
{
  id:"NEW-146",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","平衡"],
  question:"某學生說『酶會讓反應比較快，所以最後平衡位置也一定改變』。下列哪一個評價最正確？",
  options:["完全正確","完全錯誤，酶不改變平衡位置","只在高溫下正確","只在酸性環境下正確"],
  answer:1,
  explanation:"酶只加快達到平衡的速度，不改變平衡位置。"
},
{
  id:"NEW-147",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","活性位"],
  question:"酶與底物辨識結合最重要的部位通常是？",
  options:["R基","活性位","肽鍵","羧基端"],
  answer:1,
  explanation:"底物主要與酶的活性位結合。"
},
{
  id:"NEW-148",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶專一性","lock and key"],
  question:"若題目說『底物與酶像鎖和鑰匙一樣吻合』，這是在描述酶的哪項特性？",
  options:["可逆性","專一性","抑制作用","變性"],
  answer:1,
  explanation:"鎖鑰模型強調酶對底物的專一性。"
},
{
  id:"NEW-149",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["induced fit"],
  question:"與鎖鑰模型相比，誘導契合模型更強調哪一點？",
  options:["酶完全不會改變","底物完全不接觸酶","酶與底物接近時構形可調整","只有產物會變形"],
  answer:2,
  explanation:"誘導契合模型認為酶可因底物接近而調整構形。"
},
{
  id:"NEW-150",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["ES complex"],
  question:"反應進行過程中，酶先與底物形成暫時複合體，這通常寫作？",
  options:["EP","ES","PS","SE"],
  answer:1,
  explanation:"ES 代表 enzyme-substrate complex。"
},
{
  id:"NEW-151",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶特性"],
  question:"某酶催化完反應後仍可再次使用，這說明酶具有下列哪一特徵？",
  options:["被反應消耗","可重複利用","會變成產物","只能用一次"],
  answer:1,
  explanation:"酶在反應後通常可恢復原狀並再利用。"
},
{
  id:"NEW-152",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["輔酶","輔因子"],
  question:"某酶必須搭配一個小型有機分子才能正常作用，該分子最可能稱為？",
  options:["脂肪酸","輔酶","核酸","抑制劑"],
  answer:1,
  explanation:"小型有機輔助分子通常稱為輔酶。"
},
{
  id:"NEW-153",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["金屬離子","輔因子"],
  question:"若某酶需要 Zn²⁺ 或 Mg²⁺ 才能發揮作用，則這些離子最適合被歸類為？",
  options:["產物","輔因子","抑制劑","底物"],
  answer:1,
  explanation:"金屬離子常作為酶的輔因子。"
},
{
  id:"NEW-154",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["動力學","底物濃度"],
  question:"某酶在低底物濃度時，底物增加會使速率明顯上升；但當底物很高後，速率逐漸趨平。這表示酶反應呈現？",
  options:["線性無上限增加","米氏飽和現象","完全不受底物影響","負相關"],
  answer:1,
  explanation:"典型酶動力學會隨底物增加而接近飽和。"
},
{
  id:"NEW-155",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["Vmax"],
  question:"在酶已被底物幾乎完全佔滿時，反應速率最接近哪一項？",
  options:["Km","Vmax","0","1/Km"],
  answer:1,
  explanation:"所有活性位都接近被佔滿時，速率趨近 Vmax。"
},
{
  id:"NEW-156",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Km"],
  question:"老師說：『Km 可以拿來反映酶與底物親和力。』若某酶的 Km 很小，通常代表？",
  options:["親和力較高","親和力較低","反應一定較慢","酶一定被抑制"],
  answer:0,
  explanation:"Km 小表示較低底物濃度即可達半最大速率，通常代表親和力較高。"
},
{
  id:"NEW-157",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Km","定義"],
  question:"在米氏動力學中，當反應速率等於 1/2 Vmax 時，此時的底物濃度稱為？",
  options:["Vmax","Km","Ki","pKa"],
  answer:1,
  explanation:"Km 定義為反應速率達半最大速率時的底物濃度。"
},
{
  id:"NEW-158",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶濃度","Vmax"],
  question:"若實驗中底物充足，單純增加酶濃度，最可能造成哪個參數上升？",
  options:["Km","Vmax","pH","抑制程度"],
  answer:1,
  explanation:"酶濃度增加時，Vmax 通常上升。"
},
{
  id:"NEW-159",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["溫度","酶"],
  question:"某酶在 37°C 活性最高，但到 80°C 幾乎失活。這最可能是因為高溫造成？",
  options:["底物增加","酶變性","Vmax無限上升","Km變成0"],
  answer:1,
  explanation:"高溫破壞蛋白質結構導致酶變性。"
},
{
  id:"NEW-160",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["pH","酶"],
  question:"胃蛋白酶在強酸環境中活性較高，若把它放到接近中性的環境，活性下降。這最能說明？",
  options:["酶都有相同最適pH","pH 會影響酶活性","酶只受溫度影響","酶不受環境影響"],
  answer:1,
  explanation:"不同酶有不同最適 pH，pH會影響活性位離子化狀態。"
},
{
  id:"NEW-161",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["競爭性抑制"],
  question:"某抑制劑與底物結構相似，會和底物搶同一個活性位。這最符合哪一類抑制？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","回饋抑制"],
  answer:0,
  explanation:"與底物競爭活性位的為競爭性抑制。"
},
{
  id:"NEW-162",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["競爭性抑制","Km","Vmax"],
  question:"競爭性抑制下，若加入大量底物，有機會把抑制效果部分克服。其典型參數變化為？",
  options:["Km下降，Vmax下降","Km上升，Vmax不變","Km不變，Vmax下降","Km下降，Vmax不變"],
  answer:1,
  explanation:"競爭性抑制通常使表觀 Km 上升，但 Vmax 不變。"
},
{
  id:"NEW-163",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制"],
  question:"某抑制劑不和底物搶活性位，而是結合酶其他位置改變酶構形。這最可能屬於？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","酶活化"],
  answer:1,
  explanation:"非競爭性抑制結合活性位以外位置，常造成 Vmax 下降。"
},
{
  id:"NEW-164",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制","Km","Vmax"],
  question:"一般教科書中的非競爭性抑制，最典型的參數變化為何？",
  options:["Km上升，Vmax不變","Km不變，Vmax下降","Km下降，Vmax上升","Km與Vmax都不變"],
  answer:1,
  explanation:"非競爭性抑制常見 Km 不變、Vmax 下降。"
},
{
  id:"NEW-165",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["不可逆抑制"],
  question:"重金屬中毒造成某些酶永久失去活性，最符合哪一種抑制型態？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","短暫活化"],
  answer:2,
  explanation:"重金屬常導致酶不可逆失活。"
},
{
  id:"NEW-166",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk"],
  question:"若題目提到『雙倒數圖』用來分析酶動力學，這通常指的是？",
  options:["米氏曲線","Lineweaver-Burk 圖","散佈圖","滴定曲線"],
  answer:1,
  explanation:"Lineweaver-Burk 為酶動力學的雙倒數圖。"
},
{
  id:"NEW-167",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk","截距"],
  question:"在 Lineweaver-Burk 圖中，Y 截距代表哪一項？",
  options:["Km","-1/Km","1/Vmax","Vmax"],
  answer:2,
  explanation:"雙倒數圖的 Y 截距為 1/Vmax。"
},
{
  id:"NEW-168",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk","截距"],
  question:"在 Lineweaver-Burk 圖中，X 截距代表哪一項？",
  options:["1/Vmax","-1/Km","Km","Vmax"],
  answer:1,
  explanation:"雙倒數圖的 X 截距為 -1/Km。"
},
{
  id:"NEW-169",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["競爭性抑制","雙倒數圖"],
  question:"若加入競爭性抑制劑後，Lineweaver-Burk 圖通常會出現哪種趨勢？",
  options:["Y 截距不變、斜率增加","X 截距不變、Y 截距下降","Y 截距下降、斜率下降","X 截距與Y截距都不變"],
  answer:0,
  explanation:"競爭性抑制 Vmax 不變，因此 Y 截距不變；Km 上升使斜率增加。"
},
{
  id:"NEW-170",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制","雙倒數圖"],
  question:"若加入非競爭性抑制劑後，Lineweaver-Burk 圖通常最可能如何變化？",
  options:["Y 截距上升","Y 截距下降","X 截距變為0","斜率一定變小"],
  answer:0,
  explanation:"非競爭性抑制使 Vmax 下降，因此 1/Vmax 上升，Y 截距上升。"
},
{
  id:"NEW-171",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","蛋白質與酶"],
  question:"某蛋白質因序列改變而失去原本催化功能，這最能說明哪個觀念？",
  options:["功能與結構無關","蛋白質功能取決於其序列與結構","酶不屬於蛋白質","只要有R基就一定有催化能力"],
  answer:1,
  explanation:"蛋白質的結構由序列決定，結構進一步影響功能。"
},
{
  id:"NEW-172",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","疏水作用"],
  question:"蛋白質在水溶液中折疊時，許多疏水性胺基酸傾向埋在內部。最主要原因是？",
  options:["想靠近氧分子","避免與水接觸","容易形成離子鍵","可直接形成DNA"],
  answer:1,
  explanation:"疏水性側鏈通常聚集在內部以減少與水接觸。"
},
{
  id:"NEW-173",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","親水性"],
  question:"若某蛋白質表面大量分布帶電或極性胺基酸，最合理的解釋是？",
  options:["便於與水接觸","代表蛋白質一定失活","代表沒有一級結構","代表一定在膜內部"],
  answer:0,
  explanation:"表面常見親水性胺基酸以利與水環境接觸。"
},
{
  id:"NEW-174",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","專一性","結構"],
  question:"某藥物只會抑制某一類酶而不影響其他酶，這最能反映哪個概念？",
  options:["水的高比熱","酶的專一性與活性位結構","所有酶結構相同","所有蛋白質都能催化"],
  answer:1,
  explanation:"不同酶的活性位結構不同，因此具有專一性。"
},
{
  id:"NEW-175",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","代謝"],
  question:"細胞內若沒有酶，大多數代謝反應會如何？",
  options:["速度過慢難以維持生命","速度更快","完全不需活化能","一定往逆方向進行"],
  answer:0,
  explanation:"沒有酶時，多數生理反應速率太慢，難以支持生命。"
},
{
  id:"NEW-176",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","功能分類"],
  question:"下列哪一組『分子—主要功能』的配對最正確？",
  options:["DNA—催化；酶—遺傳資訊","酶—催化；脂質—儲能與膜結構","脂質—翻譯；RNA—儲存長期能量","蛋白質—只有結構功能"],
  answer:1,
  explanation:"酶催化反應；脂質負責儲能及膜結構。"
},
{
  id:"NEW-177",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","突變"],
  question:"若某蛋白質只改變一個胺基酸，但立體構型與功能都明顯改變，這最能說明什麼？",
  options:["一級結構改變可能影響高階結構與功能","所有突變都沒有影響","只有四級結構才重要","胺基酸種類不影響蛋白質"],
  answer:0,
  explanation:"一級結構改變可能透過摺疊影響整體結構與功能。"
},
{
  id:"NEW-178",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","反應後狀態"],
  question:"酶催化反應後，產物被釋放，酶本身通常？",
  options:["變成底物","恢復原狀可再參與反應","永遠失活","被分解成胺基酸"],
  answer:1,
  explanation:"酶反應後通常能恢復原狀並再利用。"
},
{
  id:"NEW-179",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","極性"],
  question:"水之所以能溶解許多離子與極性物質，主要是因為它本身？",
  options:["分子量大","具有極性","具有雙硫鍵","完全不形成氫鍵"],
  answer:1,
  explanation:"水的極性使其能與離子及極性分子作用。"
},
{
  id:"NEW-180",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","表面張力"],
  question:"昆蟲能短暫停留在水面，最主要與水的哪項性質有關？",
  options:["高表面張力","低比熱","高密度","弱極性"],
  answer:0,
  explanation:"水分子間內聚力造成高表面張力。"
},
{
  id:"NEW-181",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","密度"],
  question:"冬天湖面結冰但水中生物仍可存活，與下列哪項水的特性最相關？",
  options:["冰的密度比液態水小","冰的密度比液態水大","冰完全不含氫鍵","水在0°C密度最大"],
  answer:0,
  explanation:"冰密度較小所以浮在表面，下面仍有液態水。"
},
{
  id:"NEW-182",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","底物濃度","飽和"],
  question:"某學生說：『只要一直加底物，反應速率就會無限增加。』對一般米氏酶而言，這句話最大問題是什麼？",
  options:["忽略了酶會飽和","忽略了酶是脂質","忽略了水不夠","忽略了所有反應都沒有Vmax"],
  answer:0,
  explanation:"當活性位接近全被佔滿後，速率會接近 Vmax，不會無限增加。"
},
{
  id:"NEW-183",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","Km","親和力"],
  question:"比較兩種酶：A 的 Km = 2 μM，B 的 Km = 20 μM。若其他條件相近，哪個敘述較合理？",
  options:["A 對底物親和力較低","B 對底物親和力較高","A 對底物親和力較高","兩者親和力一定相同"],
  answer:2,
  explanation:"Km 較小通常代表底物親和力較高。"
},
{
  id:"NEW-184",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質","酶","分類"],
  question:"下列哪一項最適合作為『蛋白質功能多樣性』的例子？",
  options:["同一種蛋白質同時一定做所有功能","蛋白質可作為結構、運輸、免疫與催化分子","蛋白質只負責儲能","蛋白質只存在肌肉"],
  answer:1,
  explanation:"蛋白質具有結構、運輸、免疫、催化等多種功能。"
},
{
  id:"NEW-185",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","醫學"],
  question:"醫師說某病人的某項代謝疾病與酶缺陷有關，這通常意味著病人體內哪一件事出了問題？",
  options:["代謝反應速率異常","DNA一定消失","脂質一定過多","所有蛋白質都失活"],
  answer:0,
  explanation:"酶缺陷常導致特定代謝途徑反應受阻或失衡。"
},
{
  id:"NEW-186",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","分子層次"],
  question:"『看似只是臨床症狀，背後其實可能是單一分子或單一胺基酸改變』，這種想法最符合哪一學科精神？",
  options:["組織學","生物化學","生態學","地質學"],
  answer:1,
  explanation:"生物化學強調從分子層次理解生命與疾病現象。"
},
{
  id:"NEW-187",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","關係判斷"],
  question:"下列哪一條敘述邏輯最完整？",
  options:["胺基酸序列改變→蛋白質結構可能改變→酶活性可能改變","水是極性→所有分子都不溶於水","酶能降低活化能→因此一定改變平衡常數","脂質可儲能→因此一定有催化能力"],
  answer:0,
  explanation:"胺基酸序列影響結構，結構再影響蛋白功能與酶活性。"
},
{
  id:"NEW-188",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶抑制","臨床"],
  question:"若某藥物設計目的是『模仿底物結構去卡住酶的活性位』，它最可能是利用哪種原理？",
  options:["競爭性抑制","非競爭性抑制","蛋白質變性","雙硫鍵形成"],
  answer:0,
  explanation:"模仿底物、搶活性位是競爭性抑制的典型概念。"
},
{
  id:"NEW-189",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶抑制","判斷"],
  question:"若某抑制劑即使加入大量底物也無法完全克服其效果，則此抑制劑較不可能是？",
  options:["競爭性抑制劑","非競爭性抑制劑","不可逆抑制劑","重金屬抑制劑"],
  answer:0,
  explanation:"競爭性抑制通常可透過提高底物濃度部分克服。"
},
{
  id:"NEW-190",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","最適條件"],
  question:"某酶在不同 pH 下活性變化很大，這通常是因為 pH 會影響？",
  options:["酶與底物相關基團的離子化狀態","酶的一級結構完全消失","DNA序列改變","細胞膜厚度"],
  answer:0,
  explanation:"pH 會改變可電離基團狀態，進而影響結合與催化。"
},
{
  id:"NEW-191",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質","臨床"],
  question:"某醫學檢驗發現蛋白質被強酸處理後沉澱、活性喪失。這最可能是因為？",
  options:["蛋白質被翻譯","蛋白質變性","形成更多肽鍵","變成核酸"],
  answer:1,
  explanation:"強酸可破壞蛋白質高階結構，導致變性與沉澱。"
},
{
  id:"NEW-192",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","定位"],
  question:"某蛋白質內部多數是 Val、Leu、Ile 這類殘基，最合理的推論是？",
  options:["蛋白質內部偏疏水","蛋白質一定帶正電","蛋白質無法摺疊","蛋白質一定在核酸表面"],
  answer:0,
  explanation:"Val、Leu、Ile 為疏水性胺基酸，常位於蛋白質內部。"
},
{
  id:"NEW-193",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","表面"],
  question:"若蛋白質表面富含 Asp、Glu、Lys、Arg 這類殘基，最合理的意義是？",
  options:["便於與水環境互動","一定形成雙硫鍵","代表蛋白質變性","代表蛋白質一定是脂質"],
  answer:0,
  explanation:"帶電胺基酸常有利於與水或其他極性分子互動。"
},
{
  id:"NEW-194",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","比較"],
  question:"下列哪一項最能同時連結 CH2 與 CH3 的核心觀念？",
  options:["酶的功能與其蛋白質結構密切相關","所有蛋白質都是核酸","所有胺基酸都能單獨催化反應","酶作用與蛋白質結構無關"],
  answer:0,
  explanation:"酶是蛋白質，其催化功能高度依賴結構。"
},
{
  id:"NEW-195",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","酶與病理"],
  question:"某基因突變導致酶活性位一個關鍵胺基酸改變，最直接可能造成什麼結果？",
  options:["底物辨識能力下降","DNA自動增加","脂質全部消失","pH變成固定值"],
  answer:0,
  explanation:"活性位胺基酸改變可能直接影響底物結合與催化。"
},
{
  id:"NEW-196",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","序列到功能"],
  question:"老師要求用一句話總結蛋白質：下列哪一個最完整？",
  options:["蛋白質只是能量來源","蛋白質由胺基酸組成，其序列決定結構，結構影響功能","蛋白質與酶無關","蛋白質只能存在血液中"],
  answer:1,
  explanation:"這是蛋白質最核心的整合觀念。"
},
{
  id:"NEW-197",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["綜合判斷"],
  question:"某研究發現一個新抑制劑會讓酶的最大速率下降，但底物親和力指標沒有明顯改變。最可能是哪一種抑制？",
  options:["競爭性抑制","非競爭性抑制","可逆競爭性活化","底物活化"],
  answer:1,
  explanation:"Vmax下降而Km不變，典型對應非競爭性抑制。"
},
{
  id:"NEW-198",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["綜合判斷"],
  question:"某抑制劑加入後，酶對底物看起來『比較不容易結合』，但若底物很多仍可達原本最大速率。這最符合？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","酶變性"],
  answer:0,
  explanation:"Km上升但Vmax不變，符合競爭性抑制。"
},
{
  id:"NEW-199",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","學習重點"],
  question:"若要用一句話區分『親和力』與『飽和度』，哪一項最合理？",
  options:["親和力是結合能力；飽和度是活性位被底物佔滿的程度","親和力就是反應速率；飽和度就是pH","兩者完全相同","兩者都只看溫度"],
  answer:0,
  explanation:"親和力講結合傾向；飽和度講酶被底物佔滿的程度。"
},
{
  id:"NEW-200",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","全章觀念"],
  question:"下列哪一個案例最符合『結構決定功能』？",
  options:["水有高比熱所以能穩定體溫","單一胺基酸突變導致血紅素功能異常","pH公式為-log[H+]","ATP含磷"],
  answer:1,
  explanation:"單一胺基酸改變導致蛋白質功能異常，是結構決定功能的典型例子。"
},
{
  id:"NEW-201",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","全章"],
  question:"下列哪一組配對最正確？",
  options:["Km小—親和力低；競爭性抑制—Vmax下降","Km小—親和力高；非競爭性抑制—Vmax下降","Km大—親和力高；競爭性抑制—Km下降","Km大—親和力低；非競爭性抑制—Vmax上升"],
  answer:1,
  explanation:"Km小代表親和力高；非競爭性抑制典型為Vmax下降。"
},
{
  id:"NEW-202",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["總整合","模擬考壓軸"],
  question:"某病患因基因突變導致酶的一級結構改變，造成活性位構形異常，使底物不易結合，代謝反應受阻。這段描述依序最合理地串聯了哪三個概念？",
  options:[
    "DNA變化→蛋白質結構改變→酶功能改變",
    "脂質變化→水分子改變→DNA複製",
    "pH改變→胺基酸消失→膜流動性改變",
    "ATP增加→蛋白質不折疊→緩衝系統失效"
  ],
  answer:0,
  explanation:"這題整合基因、蛋白質結構與酶功能三層概念，是整章核心。"
},
  {
    id:"EXAM-001",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","溫度","變性"],
    question:"小安感冒發燒到 40°C，媽媽說：「身體裡很多反應速度會先變快，但如果溫度再高太多，反而會出問題。」這句話最適合用下列哪個觀念解釋？",
    options:[
      "高溫會讓所有酶永久保持最高活性",
      "酶活性會隨溫度上升而無限增加",
      "溫度上升初期可能加快反應，但過高會使蛋白質變性而失活",
      "發燒時所有蛋白質都會直接分解成胺基酸"
    ],
    answer:2,
    explanation:"酶活性通常在一定範圍內隨溫度上升而增加，但過高溫度會破壞蛋白質結構。"
  },
  {
    id:"EXAM-002",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","pH","最適環境"],
    question:"胃藥廣告常說某些藥物會降低胃酸。若一種主要在胃中作用的酶原本最適合強酸環境，服藥後胃內 pH 上升，該酶活性最可能如何變化？",
    options:[
      "上升，因為所有酶都喜歡中性環境",
      "下降，因為 pH 改變會影響酶活性位與相關基團的離子化狀態",
      "完全不變，因為酶只受溫度影響",
      "先下降再永久變成脂質"
    ],
    answer:1,
    explanation:"不同酶有不同最適 pH，胃中的酶通常偏好酸性。"
  },
  {
    id:"EXAM-003",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","變性","烹調"],
    question:"煎蛋時，原本透明的蛋白逐漸變白並凝固。若以生物化學觀點解釋，最合理的是下列哪一項？",
    options:[
      "蛋白質被轉錄成 RNA",
      "高溫使蛋白質高階結構被破壞並重新聚集",
      "蛋白質的一級結構全部斷裂",
      "蛋白質被高溫轉變成醣類"
    ],
    answer:1,
    explanation:"加熱使蛋白質變性並聚集，因此呈現白色凝固。"
  },
  {
    id:"EXAM-004",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","疏水作用"],
    question:"某人把豆漿放久後再加熱，表面出現明顯凝結層。若忽略微生物因素，最合理的生化解釋為何？",
    options:[
      "蛋白質疏水區暴露後彼此聚集",
      "胺基酸全部變成無機鹽",
      "蛋白質一級結構完全消失",
      "所有極性胺基酸都轉成非極性"
    ],
    answer:0,
    explanation:"蛋白質變性後疏水區暴露，容易互相聚集沉澱。"
  },
  {
    id:"EXAM-005",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","運動","酸鹼"],
    question:"阿哲跑完高強度衝刺後覺得全身發酸。雖然體內短時間會產生較多酸性代謝物，但血液 pH 不會立刻劇烈崩壞，最主要是因為？",
    options:[
      "血液裡沒有酸性物質",
      "體內有緩衝系統可暫時抵抗 pH 劇烈變動",
      "所有酸都會立刻變成氧氣",
      "血紅素只負責運氧，與酸鹼無關"
    ],
    answer:1,
    explanation:"體內多種緩衝系統可協助穩定 pH。"
  },
  {
    id:"EXAM-006",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","比較"],
    question:"若兩瓶清潔液分別標示 pH 3 與 pH 5，從酸性強度來看，哪個說法最正確？",
    options:[
      "pH 3 只比 pH 5 酸 2 倍",
      "pH 3 比 pH 5 酸 20 倍",
      "pH 3 比 pH 5 酸 100 倍",
      "無法比較，因為 pH 不是對數尺度"
    ],
    answer:2,
    explanation:"pH 每差 1 代表 [H+] 差 10 倍，因此差 2 為 100 倍。"
  },
  {
    id:"EXAM-007",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高比熱"],
    question:"夏天中午，柏油路很快燙到不能踩，但泳池裡的水升溫相對慢得多。這種差異最能反映水的哪種性質？",
    options:[
      "高比熱",
      "低密度",
      "高酸性",
      "不可形成氫鍵"
    ],
    answer:0,
    explanation:"水的高比熱使溫度變化較慢。"
  },
  {
    id:"EXAM-008",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","蒸發熱"],
    question:"運動員在炎熱天氣下流汗後，若有風吹過會覺得更涼。最主要是因為？",
    options:[
      "風會直接把體溫吹成固定值",
      "水蒸發時需要吸收熱量，帶走皮膚表面的熱",
      "汗水本身會產生冷氣效果",
      "風能讓蛋白質全部失活"
    ],
    answer:1,
    explanation:"汗液蒸發需吸收熱量，因此可降溫。"
  },
  {
    id:"EXAM-009",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","競爭性抑制","藥物"],
    question:"某藥物的設計理念是「長得很像底物，先去卡住酶的活性位，讓真正底物比較難進去」。若只從描述判斷，這最可能是哪一類抑制？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "變性作用"
    ],
    answer:0,
    explanation:"與底物相似並搶占活性位，屬競爭性抑制。"
  },
  {
    id:"EXAM-010",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","競爭性抑制","Km","Vmax"],
    question:"承上題，若該藥物確定為競爭性抑制劑，則最典型的酶動力學變化為何？",
    options:[
      "Km 上升，Vmax 不變",
      "Km 不變，Vmax 下降",
      "Km 下降，Vmax 上升",
      "Km 與 Vmax 都一定不變"
    ],
    answer:0,
    explanation:"競爭性抑制通常使表觀 Km 上升，但在足夠底物下 Vmax 不變。"
  },
  {
    id:"EXAM-011",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","非競爭性抑制","藥物"],
    question:"另一種藥物不是去搶活性位，而是黏在酶其他位置，讓酶形狀改變，底物就算進得去也難順利反應。這最符合哪種抑制？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "底物活化",
      "單純增加酶濃度"
    ],
    answer:1,
    explanation:"結合於活性位外並改變酶構形，屬非競爭性抑制。"
  },
  {
    id:"EXAM-012",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","非競爭性抑制","Vmax"],
    question:"若某抑制劑屬非競爭性抑制，下列哪一種結果最可能出現？",
    options:[
      "底物加越多就一定完全恢復原本最大速率",
      "Vmax 下降，因為可正常作用的酶數量等效減少",
      "Km 一定降到 0",
      "酶會直接變成產物"
    ],
    answer:1,
    explanation:"非競爭性抑制典型表現為 Vmax 下降。"
  },
  {
    id:"EXAM-013",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km","親和力"],
    question:"有兩種酶都催化同類反應，A 酶 Km = 2 mM，B 酶 Km = 20 mM。若只比較底物親和力，下列何者最合理？",
    options:[
      "A 親和力較高",
      "B 親和力較高",
      "兩者親和力相同",
      "僅由 Km 可知 A 一定比較快"
    ],
    answer:0,
    explanation:"Km 較小通常代表較高的底物親和力。"
  },
  {
    id:"EXAM-014",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Vmax","酶濃度"],
    question:"某食品工廠想加快一酶促反應，但底物已經非常充足且接近飽和。若只考慮單一因素，最有效的做法通常是？",
    options:[
      "再無限增加底物",
      "增加酶濃度",
      "把 pH 調成任意值都行",
      "讓反應永遠在 0°C 進行"
    ],
    answer:1,
    explanation:"當底物已近飽和時，增加酶濃度較能提高 Vmax。"
  },
  {
    id:"EXAM-015",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","序列到功能"],
    question:"某遺傳疾病只差一個胺基酸，卻讓蛋白質功能大幅改變。這最能說明哪個核心觀念？",
    options:[
      "只要差一個胺基酸就完全不重要",
      "蛋白質的一級結構改變可能影響整體結構與功能",
      "蛋白質功能只取決於數量，不取決於結構",
      "所有突變都只影響脂質"
    ],
    answer:1,
    explanation:"一級結構改變可能透過摺疊影響蛋白質功能。"
  },
  {
    id:"EXAM-016",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鐮刀型貧血","案例"],
    question:"某病人在高海拔缺氧時特別容易出現紅血球變形與循環問題。若從典型教材案例聯想，最可能對應哪種疾病機制？",
    options:[
      "血紅素單一胺基酸改變造成構型與功能異常",
      "所有脂質被分解",
      "水分子鍵角改變",
      "DNA 全部變成 RNA"
    ],
    answer:0,
    explanation:"這是鐮刀型貧血的典型概念。"
  },
  {
    id:"EXAM-017",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["胺基酸","疏水性","折疊"],
    question:"若某蛋白質表面原本一個帶電胺基酸突變成疏水性胺基酸，最可能造成什麼影響？",
    options:[
      "一定完全沒有影響",
      "可能改變蛋白質與水的互動，進而影響折疊或穩定性",
      "會直接讓 DNA 斷裂",
      "會讓所有肽鍵消失"
    ],
    answer:1,
    explanation:"表面殘基由親水轉為疏水，可能影響水溶性與折疊。"
  },
  {
    id:"EXAM-018",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","雙硫鍵","生活"],
    question:"有些洗髮或燙髮相關原理會提到先破壞、再重建角蛋白中的某些鍵，以改變頭髮型態。最相關的鍵為？",
    options:[
      "肽鍵",
      "磷酸二酯鍵",
      "雙硫鍵",
      "糖苷鍵"
    ],
    answer:2,
    explanation:"頭髮角蛋白中的雙硫鍵與形狀穩定性密切相關。"
  },
  {
    id:"EXAM-019",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk","圖形判讀"],
    question:"老師畫出雙倒數圖後說：「加了某抑制劑後，Y 截距明顯往上跑。」在最典型教材情況下，這最支持下列哪一種判斷？",
    options:[
      "Vmax 下降",
      "Km 一定下降",
      "底物濃度變成 0",
      "酶一定增加了"
    ],
    answer:0,
    explanation:"Lineweaver-Burk 圖的 Y 截距為 1/Vmax，往上表示 Vmax 下降。"
  },
  {
    id:"EXAM-020",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["總整合"],
    question:"某病人因基因突變導致酶活性位附近胺基酸被替換，結果底物不易結合、代謝途徑效率下降。這個案例依序整合了哪三層概念？",
    options:[
      "DNA 改變 → 蛋白質結構改變 → 酶功能改變",
      "脂質改變 → 水分子改變 → pH 改變",
      "酶濃度改變 → DNA 消失 → 蛋白質複製",
      "水蒸發 → 蛋白質凝固 → 中心法則改變"
    ],
    answer:0,
    explanation:"這題整合基因、蛋白質結構與酶功能。"
  },
  {
    id:"EXAM-021",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","溫度"],
    question:"某人在泡溫泉時覺得身體代謝似乎加快，但泡太久反而頭暈無力。這最合理的生化解釋為何？",
    options:[
      "溫度越高酶永遠越活躍",
      "適度升溫提升反應速率，但過高會導致酶變性",
      "酶與溫度完全無關",
      "所有酶在高溫會轉變為DNA"
    ],
    answer:1,
    explanation:"適度升溫可提升速率，但過高溫度會使酶失活。"
  },
  {
    id:"EXAM-022",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","氫鍵"],
    question:"冰塊浮在水面上，而不是沉下去，這現象最主要與水的哪種特性有關？",
    options:[
      "水的極性與氫鍵形成特殊結構",
      "水的分子量很小",
      "水無法形成氫鍵",
      "水完全沒有密度差異"
    ],
    answer:0,
    explanation:"冰中氫鍵排列較鬆散，使密度較低。"
  },
  {
    id:"EXAM-023",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","飲料"],
    question:"長期喝酸性飲料可能影響牙齒，若某飲料 pH = 2，另一為 pH = 4，則前者酸性約為後者的多少倍？",
    options:[
      "2倍",
      "4倍",
      "100倍",
      "1000倍"
    ],
    answer:2,
    explanation:"pH 差 2，酸性相差 10²。"
  },
  {
    id:"EXAM-024",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","底物濃度"],
    question:"某餐廳增加食材供應量，但廚房反應速度沒有再明顯提升，最可能原因是？",
    options:[
      "酶已接近飽和",
      "底物越多反應一定越快",
      "酶數量無限制增加",
      "底物會抑制酶"
    ],
    answer:0,
    explanation:"當酶達飽和後，再增加底物效果有限。"
  },
  {
    id:"EXAM-025",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","結構"],
    question:"某蛋白質因環境改變導致三級結構破壞，但胺基酸序列仍在，此現象稱為？",
    options:[
      "轉錄",
      "變性",
      "複製",
      "翻譯"
    ],
    answer:1,
    explanation:"這是蛋白質變性。"
  },
  {
    id:"EXAM-026",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","Km"],
    question:"某酶在低底物濃度下仍能有效作用，表示其 Km 值如何？",
    options:[
      "很高",
      "很低",
      "等於0",
      "不影響"
    ],
    answer:1,
    explanation:"Km 低代表對底物親和力高。"
  },
  {
    id:"EXAM-027",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","疏水"],
    question:"油與水不互溶的現象，與蛋白質折疊中的哪種力最相關？",
    options:[
      "離子鍵",
      "共價鍵",
      "疏水作用",
      "氫鍵"
    ],
    answer:2,
    explanation:"非極性分子傾向彼此聚集、遠離水。"
  },
  {
    id:"EXAM-028",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","抑制"],
    question:"某毒素會永久破壞酶結構，使其無法恢復活性，這屬於？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "可逆抑制"
    ],
    answer:2,
    explanation:"永久失活對應不可逆抑制。"
  },
  {
    id:"EXAM-029",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","極性"],
    question:"水能溶解多種離子物質，主要原因為？",
    options:[
      "水沒有電荷",
      "水為極性分子",
      "水是非極性",
      "水沒有氫"
    ],
    answer:1,
    explanation:"水的極性有利於與離子和極性分子作用。"
  },
  {
    id:"EXAM-030",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","胺基酸"],
    question:"若某蛋白質中大量疏水胺基酸暴露於外，最可能造成什麼結果？",
    options:[
      "更穩定",
      "更易溶於水",
      "容易聚集沉澱",
      "完全不變"
    ],
    answer:2,
    explanation:"疏水區暴露會增加聚集傾向。"
  },
  {
    id:"EXAM-031",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","呼吸"],
    question:"運動後呼吸加快有助於調整血液 pH，主要涉及哪個觀念？",
    options:[
      "緩衝系統與酸鹼平衡調節",
      "DNA複製增加",
      "蛋白質合成停止",
      "脂質自動分解"
    ],
    answer:0,
    explanation:"呼吸可協助調節 CO2，進而影響重碳酸鹽緩衝系統。"
  },
  {
    id:"EXAM-032",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["兩性分子","生活"],
    question:"洗碗精能去油，最主要是因為其分子同時具有親水端與疏水端。這樣的設計最能對應哪個概念？",
    options:[
      "極性與非極性區域協同作用",
      "DNA 雙股螺旋",
      "酶活性位專一性",
      "雙硫鍵重排"
    ],
    answer:0,
    explanation:"親水端與疏水端可同時接觸水與油脂。"
  },
  {
    id:"EXAM-033",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km","突變"],
    question:"某酶突變後，Km 上升但 Vmax 不變，最合理的解讀是？",
    options:[
      "與底物親和力下降",
      "與底物親和力上升",
      "酶數量大幅增加",
      "酶完全失活"
    ],
    answer:0,
    explanation:"Km 上升通常表示底物親和力下降。"
  },
  {
    id:"EXAM-034",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血液","酸鹼"],
    question:"血液 pH 能維持在狹窄範圍，最主要依賴？",
    options:[
      "緩衝系統",
      "蛋白質全部不變性",
      "水完全中性",
      "脂質持續增加"
    ],
    answer:0,
    explanation:"體內緩衝系統可減少 pH 劇烈波動。"
  },
  {
    id:"EXAM-035",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","鹽析"],
    question:"高鹽環境有時會使蛋白質沉澱，最主要原因是？",
    options:[
      "離子強度改變影響蛋白質與水的互動",
      "DNA 被直接破壞",
      "酶被大量生成",
      "水的鍵角變成180度"
    ],
    answer:0,
    explanation:"高鹽可能削弱蛋白質外層水合作用而造成沉澱。"
  },
  {
    id:"EXAM-036",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk"],
    question:"Lineweaver-Burk 圖中的 X 截距最典型代表？",
    options:[
      "-1/Km",
      "1/Vmax",
      "Km",
      "Vmax"
    ],
    answer:0,
    explanation:"雙倒數圖 X 截距為 -1/Km。"
  },
  {
    id:"EXAM-037",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["發燒","蛋白質"],
    question:"發燒過高可能危及生命，最相關的生物化學原因之一是？",
    options:[
      "蛋白質可能大量變性",
      "DNA 一定立刻消失",
      "所有水分子都蒸發",
      "脂質全部氧化完"
    ],
    answer:0,
    explanation:"關鍵蛋白與酶失去功能會嚴重影響生理。"
  },
  {
    id:"EXAM-038",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["缺氧","代謝"],
    question:"高山缺氧時，部分代謝反應效率會受影響，最主要是因為？",
    options:[
      "部分反應與能量代謝流程受阻",
      "水的密度變高",
      "脂質全部固化",
      "pH 一定不再變動"
    ],
    answer:0,
    explanation:"缺氧會影響能量代謝相關反應。"
  },
  {
    id:"EXAM-039",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["四級結構","功能"],
    question:"若某多亞基蛋白質的四級結構組裝錯誤，最可能直接影響？",
    options:[
      "功能表現",
      "水的密度",
      "pH公式",
      "DNA雙螺旋固定消失"
    ],
    answer:0,
    explanation:"多亞基蛋白質功能常依賴正確的四級結構。"
  },
  {
    id:"EXAM-040",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["脂質","能量"],
    question:"油脂每克可提供較高熱量，從化學上最合理的原因是？",
    options:[
      "還原程度高、可提供較多能量",
      "含氧量最高",
      "極性最強",
      "最容易溶於水"
    ],
    answer:0,
    explanation:"脂質分子較還原，可在氧化時釋放較多能量。"
  },
  {
    id:"EXAM-041",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["非競爭性抑制"],
    question:"某藥物會讓 Vmax 下降但 Km 大致不變，這最符合下列哪種抑制？",
    options:[
      "非競爭性抑制",
      "競爭性抑制",
      "單純增加底物",
      "誘導契合"
    ],
    answer:0,
    explanation:"這是非競爭性抑制的典型特徵。"
  },
  {
    id:"EXAM-042",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["汗液","蒸發"],
    question:"汗蒸發能幫助身體散熱，關鍵在於？",
    options:[
      "蒸發吸熱",
      "氫鍵完全消失",
      "DNA 自動修復",
      "酶濃度上升"
    ],
    answer:0,
    explanation:"蒸發過程需吸收能量，因此帶走熱。"
  },
  {
    id:"EXAM-043",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["變性"],
    question:"蛋白質失去原本功能，但未完全分解成胺基酸，這通常稱為？",
    options:[
      "變性",
      "水解",
      "複製",
      "翻譯"
    ],
    answer:0,
    explanation:"變性是高階結構與功能喪失，不一定斷開肽鍵。"
  },
  {
    id:"EXAM-044",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["專一性","活性位"],
    question:"酶的專一性最主要源自於？",
    options:[
      "活性位的立體與化學特性",
      "水的極性",
      "pH 恆定不變",
      "溫度完全固定"
    ],
    answer:0,
    explanation:"酶活性位決定其對底物的辨識能力。"
  },
  {
    id:"EXAM-045",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["底物飽和"],
    question:"在高底物濃度下，反應速率幾乎不再上升，最合理的原因是？",
    options:[
      "酶的活性位已接近全被佔滿",
      "酶全部被分解",
      "水不再存在",
      "pH 一定變成 0"
    ],
    answer:0,
    explanation:"這是酶接近飽和的典型現象。"
  },
  {
    id:"EXAM-046",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["摺疊錯誤","疾病"],
    question:"蛋白質摺疊錯誤最可能造成什麼後果？",
    options:[
      "疾病或功能異常",
      "水直接變鹼性",
      "脂質全部增加",
      "DNA 一定變短"
    ],
    answer:0,
    explanation:"錯誤摺疊可能導致聚集、失能與疾病。"
  },
  {
    id:"EXAM-047",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血紅素","突變"],
    question:"血紅素突變會影響氧運輸，最直接的生化原因通常是？",
    options:[
      "蛋白質結構改變導致功能改變",
      "pH公式改寫",
      "水密度變低",
      "脂質轉為核酸"
    ],
    answer:0,
    explanation:"蛋白質結構與功能密切相關。"
  },
  {
    id:"EXAM-048",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["頭髮","雙硫鍵"],
    question:"燙髮與定型常與頭髮蛋白中的哪種鍵最相關？",
    options:[
      "雙硫鍵",
      "氫鍵",
      "肽鍵",
      "磷酸二酯鍵"
    ],
    answer:0,
    explanation:"角蛋白中的雙硫鍵與頭髮形狀穩定密切相關。"
  },
  {
    id:"EXAM-049",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高比熱"],
    question:"水的高比熱對生物最重要的意義之一是？",
    options:[
      "有助於維持環境與體內溫度相對穩定",
      "使水變成非極性",
      "讓水一定無法蒸發",
      "使所有酶永久活化"
    ],
    answer:0,
    explanation:"高比熱可緩衝溫度波動。"
  },
  {
    id:"EXAM-050",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Vmax","反應速率"],
    question:"酶效率在底物充足下接近最高時，反應速率最接近哪一項？",
    options:[
      "Vmax",
      "Km",
      "0",
      "pKa"
    ],
    answer:0,
    explanation:"底物充足時速率會趨近 Vmax。"
  },
  {
    id:"EXAM-051",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["中心法則","生活"],
    question:"疫苗衛教提到細胞會先讀取核酸資訊，再製造特定蛋白。這最符合哪個流程？",
    options:[
      "DNA → RNA → 蛋白質",
      "蛋白質 → RNA → DNA",
      "RNA → 脂質 → 蛋白質",
      "DNA → 脂質 → RNA"
    ],
    answer:0,
    explanation:"這是中心法則的基本流程。"
  },
  {
    id:"EXAM-052",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["逆轉錄"],
    question:"某病毒以 RNA 為遺傳物質，但可在宿主內先轉成 DNA。這說明哪個現象？",
    options:[
      "逆轉錄",
      "翻譯停止",
      "蛋白質複製",
      "脂質代謝"
    ],
    answer:0,
    explanation:"RNA 先轉成 DNA 的過程為逆轉錄。"
  },
  {
    id:"EXAM-053",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["生物大分子","功能"],
    question:"某老師說：「同一門課會同時談 DNA、酶、脂質，因為它們都是生物大分子，但功能不同。」下列配對何者正確？",
    options:[
      "DNA—遺傳資訊；酶—催化；脂質—儲能與膜結構",
      "DNA—催化；酶—遺傳資訊；脂質—翻譯",
      "DNA—儲能；酶—膜結構；脂質—轉錄",
      "三者功能完全一樣"
    ],
    answer:0,
    explanation:"這是三類大分子的核心功能配對。"
  },
  {
    id:"EXAM-054",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["元素","ATP"],
    question:"保健品廣告常提到能量代謝與 ATP，有學生問 ATP 中哪個元素特別關鍵。下列何者最合理？",
    options:[
      "P",
      "Cl",
      "Fe",
      "Zn"
    ],
    answer:0,
    explanation:"ATP 含有重要的磷酸基團。"
  },
  {
    id:"EXAM-055",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鍵結","陰電性"],
    question:"若兩原子間陰電性差異很大，最可能形成哪種類型的鍵？",
    options:[
      "離子鍵",
      "非極性共價鍵",
      "肽鍵",
      "雙硫鍵"
    ],
    answer:0,
    explanation:"陰電性差異大時，較偏向形成離子鍵。"
  },
  {
    id:"EXAM-056",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["疏水作用"],
    question:"油滴在水中會彼此聚集，不願意分散開來。最主要的原因是？",
    options:[
      "疏水作用使非極性分子傾向聚集以減少與水接觸",
      "所有油脂都帶正電",
      "水會主動破壞共價鍵",
      "油滴會自動形成DNA"
    ],
    answer:0,
    explanation:"這是疏水作用的典型表現。"
  },
  {
    id:"EXAM-057",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高蒸發熱"],
    question:"夏天把酒精與水分別塗在皮膚上，兩者都會感到涼，但水的散熱效果對生理調節特別重要，最主要與哪項特性相關？",
    options:[
      "高蒸發熱",
      "低表面張力",
      "低比熱",
      "無極性"
    ],
    answer:0,
    explanation:"水蒸發時可帶走大量熱能。"
  },
  {
    id:"EXAM-058",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","計算"],
    question:"若某溶液 [H+] = 1×10⁻⁸ M，則其 pH 最接近？",
    options:[
      "8",
      "6",
      "4",
      "2"
    ],
    answer:0,
    explanation:"pH = -log[H+] = 8。"
  },
  {
    id:"EXAM-059",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血液","pH"],
    question:"醫學檢驗中若血液 pH 偏離正常值太多，常代表生理狀態異常。正常血液 pH 約為？",
    options:[
      "7.35–7.45",
      "5.0–5.5",
      "8.5–9.0",
      "6.0–6.5"
    ],
    answer:0,
    explanation:"正常血液 pH 約 7.35–7.45。"
  },
  {
    id:"EXAM-060",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","細胞外液"],
    question:"若題目問「細胞外液中最重要的緩衝系統」，最合理答案為？",
    options:[
      "重碳酸鹽-碳酸緩衝系統",
      "脂質緩衝系統",
      "RNA緩衝系統",
      "葡萄糖緩衝系統"
    ],
    answer:0,
    explanation:"細胞外液主要緩衝系統為重碳酸鹽-碳酸系統。"
  },
  {
    id:"EXAM-061",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","腎臟"],
    question:"若題目特別提到與腎臟排酸關係較大，最應優先想到哪個緩衝系統？",
    options:[
      "磷酸鹽緩衝系統",
      "脂肪酸系統",
      "膽固醇系統",
      "ATP 系統"
    ],
    answer:0,
    explanation:"磷酸鹽緩衝系統與腎臟排酸關聯較大。"
  },
  {
    id:"EXAM-062",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["胺基酸","基本結構"],
    question:"若要用一句話向學弟妹解釋胺基酸的共同結構，最合理的是？",
    options:[
      "都具有 α-碳、胺基、羧基、H 與 R 基",
      "都具有兩個磷酸基",
      "都不含氫原子",
      "都沒有側鏈差異"
    ],
    answer:0,
    explanation:"這是胺基酸的基本通式。"
  },
  {
    id:"EXAM-063",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Glycine","光學活性"],
    question:"老師問：「哪個胺基酸是天然胺基酸中的特殊例外，因不具光學活性而常被記住？」",
    options:[
      "Glycine",
      "Valine",
      "Leucine",
      "Tyrosine"
    ],
    answer:0,
    explanation:"Glycine 的 α-碳不具四種不同取代基。"
  },
  {
    id:"EXAM-064",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["L型","天然蛋白質"],
    question:"天然蛋白質中的胺基酸構型主要為？",
    options:[
      "L 型",
      "D 型",
      "L 與 D 各半",
      "完全不固定"
    ],
    answer:0,
    explanation:"天然蛋白質主要由 L 型胺基酸組成。"
  },
  {
    id:"EXAM-065",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["必需胺基酸"],
    question:"若營養補充品強調「人體無法自行充分合成、必須由飲食取得」，它在描述哪一類胺基酸？",
    options:[
      "必需胺基酸",
      "非極性胺基酸",
      "芳香族胺基酸",
      "酸性胺基酸"
    ],
    answer:0,
    explanation:"必需胺基酸需由食物提供。"
  },
  {
    id:"EXAM-066",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Leucine","必需"],
    question:"下列何者最可能是必需胺基酸？",
    options:[
      "Leucine",
      "Glycine",
      "Alanine",
      "Aspartate"
    ],
    answer:0,
    explanation:"Leucine 為必需胺基酸。"
  },
  {
    id:"EXAM-067",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酸性胺基酸"],
    question:"若某胺基酸在生理 pH 下常帶負電，最可能屬於哪一類？",
    options:[
      "酸性胺基酸",
      "鹼性胺基酸",
      "芳香族胺基酸",
      "必需胺基酸"
    ],
    answer:0,
    explanation:"酸性胺基酸如 Asp、Glu 常帶負電。"
  },
  {
    id:"EXAM-068",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鹼性胺基酸"],
    question:"若某胺基酸在生理 pH 下常帶正電，最合理的分類為？",
    options:[
      "鹼性胺基酸",
      "酸性胺基酸",
      "非極性胺基酸",
      "脂肪酸"
    ],
    answer:0,
    explanation:"鹼性胺基酸如 Lys、Arg 常帶正電。"
  },
  {
    id:"EXAM-069",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Cysteine","雙硫鍵"],
    question:"某蛋白質需要形成 -S-S- 鍵以增加穩定性，這最直接依賴哪種胺基酸？",
    options:[
      "Cysteine",
      "Glycine",
      "Valine",
      "Aspartate"
    ],
    answer:0,
    explanation:"Cysteine 含 -SH，可形成雙硫鍵。"
  },
  {
    id:"EXAM-070",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Proline","結構"],
    question:"某胺基酸因特殊環狀結構，容易使蛋白質鏈出現轉折，最可能是？",
    options:[
      "Proline",
      "Serine",
      "Alanine",
      "Lysine"
    ],
    answer:0,
    explanation:"Proline 的環狀結構會影響多肽鏈彎曲。"
  },
  {
    id:"EXAM-071",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["肽鍵"],
    question:"兩個胺基酸形成肽鍵時，本質上最接近哪種反應？",
    options:[
      "脫水縮合反應",
      "直接氧化反應",
      "脂質水解",
      "DNA 複製"
    ],
    answer:0,
    explanation:"肽鍵形成會去除一分子水。"
  },
  {
    id:"EXAM-072",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["肽鍵","官能基"],
    question:"肽鍵形成時，實際參與反應的兩個官能基為？",
    options:[
      "胺基與羧基",
      "羧基與磷酸基",
      "R基與R基",
      "羥基與羥基"
    ],
    answer:0,
    explanation:"一個胺基酸的胺基與另一個的羧基相連。"
  },
  {
    id:"EXAM-073",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["一級結構"],
    question:"若題目強調「胺基酸的排列順序」，它在描述蛋白質哪一級結構？",
    options:[
      "一級結構",
      "二級結構",
      "三級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"胺基酸序列即一級結構。"
  },
  {
    id:"EXAM-074",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["二級結構"],
    question:"α-螺旋與 β-摺疊都屬於蛋白質哪一層級？",
    options:[
      "二級結構",
      "一級結構",
      "三級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"這兩者皆屬蛋白質二級結構。"
  },
  {
    id:"EXAM-075",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["二級結構","氫鍵"],
    question:"蛋白質二級結構最主要依賴哪種作用力穩定？",
    options:[
      "氫鍵",
      "雙硫鍵",
      "磷酸二酯鍵",
      "金屬鍵"
    ],
    answer:0,
    explanation:"二級結構主要靠主鏈間氫鍵穩定。"
  },
  {
    id:"EXAM-076",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["三級結構"],
    question:"單一多肽鏈完成立體折疊，並由疏水作用、離子作用與氫鍵共同維持，這最符合？",
    options:[
      "三級結構",
      "一級結構",
      "二級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"這是單一多肽鏈的完整立體結構。"
  },
  {
    id:"EXAM-077",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["四級結構"],
    question:"若題目強調「不同多肽亞基彼此組裝成功能性複合體」，這最符合？",
    options:[
      "四級結構",
      "三級結構",
      "二級結構",
      "一級結構"
    ],
    answer:0,
    explanation:"多條多肽鏈的組裝為四級結構。"
  },
  {
    id:"EXAM-078",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質功能","運輸"],
    question:"若題目要你舉「運輸蛋白」的例子，最合理的是？",
    options:[
      "血紅素",
      "膠原蛋白",
      "角蛋白",
      "胰蛋白酶"
    ],
    answer:0,
    explanation:"血紅素負責運輸氧氣。"
  },
  {
    id:"EXAM-079",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質功能","免疫"],
    question:"若某蛋白質主要負責辨識外來抗原並協助防禦，它最可能屬於哪一類？",
    options:[
      "免疫蛋白",
      "運輸蛋白",
      "結構蛋白",
      "脂質"
    ],
    answer:0,
    explanation:"如抗體屬免疫蛋白。"
  },
  {
    id:"EXAM-080",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["結構蛋白"],
    question:"膠原蛋白與角蛋白最適合被歸在哪種功能類別？",
    options:[
      "結構蛋白",
      "催化蛋白",
      "遺傳物質",
      "代謝中間物"
    ],
    answer:0,
    explanation:"兩者皆主要負責結構支撐。"
  },
  {
    id:"EXAM-081",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","本質"],
    question:"若題目問「大多數酶的化學本質是什麼」，最正確的答案為？",
    options:[
      "蛋白質",
      "脂質",
      "核酸",
      "單糖"
    ],
    answer:0,
    explanation:"大多數酶為蛋白質。"
  },
  {
    id:"EXAM-082",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","功能"],
    question:"酶在細胞中的主要角色為？",
    options:[
      "加速化學反應",
      "長期儲存遺傳資訊",
      "形成細胞膜雙層",
      "固定提高平衡常數"
    ],
    answer:0,
    explanation:"酶是生物催化劑。"
  },
  {
    id:"EXAM-083",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["活化能"],
    question:"酶能加速反應，最核心的原因是因為它能？",
    options:[
      "降低活化能",
      "提高產物總量",
      "永久改變平衡位置",
      "將底物變成基因"
    ],
    answer:0,
    explanation:"酶透過降低活化能來提升速率。"
  },
  {
    id:"EXAM-084",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["平衡","酶"],
    question:"某學生說：「酶會讓反應更快，所以最後平衡位置也一定改變。」這句話最大問題是？",
    options:[
      "酶不改變平衡位置，只改變達平衡的速度",
      "酶只改變顏色",
      "酶一定是脂質",
      "酶只能在高溫下作用"
    ],
    answer:0,
    explanation:"酶不改變平衡常數與平衡位置。"
  },
  {
    id:"EXAM-085",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["活性位"],
    question:"底物與酶發生特異性辨識，最關鍵的結構部位是？",
    options:[
      "活性位",
      "羧基端",
      "脂肪酸尾端",
      "DNA骨架"
    ],
    answer:0,
    explanation:"活性位決定底物辨識與催化。"
  },
  {
    id:"EXAM-086",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["lock and key"],
    question:"若題目說「底物與酶像鎖與鑰匙一樣吻合」，主要是在描述？",
    options:[
      "酶的專一性",
      "酶的變性",
      "酸鹼滴定",
      "蛋白質合成"
    ],
    answer:0,
    explanation:"鎖鑰模型強調專一性。"
  },
  {
    id:"EXAM-087",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["induced fit"],
    question:"相較於鎖鑰模型，誘導契合模型更強調哪個概念？",
    options:[
      "酶構形可在底物接近時調整",
      "酶完全不會變形",
      "底物不需要接觸酶",
      "只有產物會改變"
    ],
    answer:0,
    explanation:"誘導契合模型認為酶可動態調整構形。"
  },
  {
    id:"EXAM-088",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["ES complex"],
    question:"反應進行時，酶先與底物形成暫時複合體，通常記作？",
    options:[
      "ES",
      "EP",
      "SE2",
      "DS"
    ],
    answer:0,
    explanation:"ES 表示 enzyme-substrate complex。"
  },
  {
    id:"EXAM-089",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["輔酶"],
    question:"若某酶必須搭配一個小型有機分子才能發揮功能，該分子最可能稱為？",
    options:[
      "輔酶",
      "脂肪酸",
      "抑制劑",
      "模板DNA"
    ],
    answer:0,
    explanation:"小型有機輔助分子稱為輔酶。"
  },
  {
    id:"EXAM-090",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["金屬離子","輔因子"],
    question:"若某酶需要 Mg2+ 或 Zn2+ 才能正常作用，這些離子最合理被稱為？",
    options:[
      "輔因子",
      "產物",
      "底物",
      "核酸"
    ],
    answer:0,
    explanation:"金屬離子常作為酶的輔因子。"
  },
  {
    id:"EXAM-091",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶再利用"],
    question:"酶在催化反應後通常仍可再次使用，這最能說明？",
    options:[
      "酶通常不被反應永久消耗",
      "酶一定轉成產物",
      "酶沒有結構",
      "酶不需要底物"
    ],
    answer:0,
    explanation:"酶催化後通常可恢復原狀再參與反應。"
  },
  {
    id:"EXAM-092",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["米氏曲線"],
    question:"一般米氏酶的反應速率對底物濃度關係，圖形最常呈現？",
    options:[
      "雙曲線",
      "完全直線且無上限",
      "拋物線開口向下",
      "鋸齒狀曲線"
    ],
    answer:0,
    explanation:"典型米氏曲線為雙曲線型。"
  },
  {
    id:"EXAM-093",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km 定義"],
    question:"當反應速率等於 1/2 Vmax 時，所對應的底物濃度稱為？",
    options:[
      "Km",
      "Ki",
      "pKa",
      "V0"
    ],
    answer:0,
    explanation:"這是 Km 的定義。"
  },
  {
    id:"EXAM-094",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk","Y截距"],
    question:"在 Lineweaver-Burk 圖中，Y 截距最典型代表？",
    options:[
      "1/Vmax",
      "-1/Km",
      "Km",
      "Vmax"
    ],
    answer:0,
    explanation:"雙倒數圖 Y 截距為 1/Vmax。"
  },
  {
    id:"EXAM-095",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["整合","序列與功能"],
    question:"某蛋白質因序列改變而失去催化功能，這最能支持哪個觀念？",
    options:[
      "蛋白質功能高度依賴其結構與序列",
      "蛋白質與功能無關",
      "只要是蛋白質就都能催化",
      "突變只影響脂質"
    ],
    answer:0,
    explanation:"結構決定功能，而序列影響結構。"
  },
  {
    id:"EXAM-096",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["疏水作用","折疊"],
    question:"蛋白質在水中折疊時，許多疏水性胺基酸傾向埋在內部。最主要原因是？",
    options:[
      "減少與水接觸",
      "主動吸引氧氣",
      "增加DNA穩定性",
      "形成更多磷酸鍵"
    ],
    answer:0,
    explanation:"疏水性殘基通常聚集於內部。"
  },
  {
    id:"EXAM-097",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["親水性","表面"],
    question:"若蛋白質表面大量出現帶電或極性胺基酸，最合理的解釋是？",
    options:[
      "有利於與水環境互動",
      "表示蛋白質一定失活",
      "表示沒有一級結構",
      "表示一定屬脂質"
    ],
    answer:0,
    explanation:"表面常富含親水性殘基以增加溶解性。"
  },
  {
    id:"EXAM-098",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["抑制","比較"],
    question:"若某抑制劑使酶對底物「看起來較不容易結合」，但在高底物下仍可達原本最大速率，這最符合？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "蛋白質變性"
    ],
    answer:0,
    explanation:"這是競爭性抑制的典型描述。"
  },
  {
    id:"EXAM-099",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["親和力","飽和度"],
    question:"若要區分「親和力」與「飽和度」，哪個說法最合理？",
    options:[
      "親和力指結合傾向；飽和度指活性位被底物佔滿的程度",
      "親和力就是 pH；飽和度就是溫度",
      "兩者完全相同",
      "兩者都只看酶濃度"
    ],
    answer:0,
    explanation:"兩者是不同概念：一個是結合能力，一個是佔位程度。"
  },
  {
    id:"EXAM-100",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["總整合","壓軸"],
    question:"某病患因基因突變導致酶的一級結構改變，造成活性位構形異常，使底物不易結合，代謝反應受阻。這段描述依序最合理地串聯了哪三個概念？",
    options:[
      "DNA變化 → 蛋白質結構改變 → 酶功能改變",
      "脂質變化 → 水分子改變 → DNA複製",
      "pH改變 → 胺基酸消失 → 膜流動性改變",
      "ATP增加 → 蛋白質不折疊 → 緩衝系統失效"
    ],
    answer:0,
    explanation:"這題整合基因、蛋白質結構與酶功能，是整章核心。"
  },
{
  id:"CHEM-001",
  chapter:"CH2 蛋白質",
  section:"胺基酸結構",
  difficulty:"hard",
  tags:["化學結構","α碳"],
  question:"一般 α-胺基酸的中心碳原子通常連接哪四種基團？",
  options:[
    "胺基、羧基、磷酸基、R基",
    "胺基、羧基、氫原子、R基",
    "羥基、羧基、氫原子、R基",
    "胺基、甲基、氫原子、R基"
  ],
  answer:1,
  explanation:"一般 α-胺基酸的中心 α-碳連接胺基(-NH2)、羧基(-COOH)、氫原子與R基。"
},
{
  id:"CHEM-002",
  chapter:"CH2 蛋白質",
  section:"胺基酸結構",
  difficulty:"hard",
  tags:["光學活性","例外"],
  question:"下列哪一個胺基酸因 R 基為 H，所以不具有 D/L 光學異構物？",
  options:[
    "Alanine",
    "Valine",
    "Glycine",
    "Serine"
  ],
  answer:2,
  explanation:"Glycine 的 α-碳不具四種不同取代基，因此沒有 D/L 異構。"
},
{
  id:"CHEM-003",
  chapter:"CH2 蛋白質",
  section:"胺基酸結構",
  difficulty:"hard",
  tags:["L型","D型"],
  question:"地球上一般生物蛋白質中的胺基酸主要採用哪一種構型？",
  options:[
    "D 型",
    "L 型",
    "D/L 各半",
    "沒有固定構型"
  ],
  answer:1,
  explanation:"天然蛋白質中的胺基酸主要為 L 型。"
},
{
  id:"CHEM-004",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["非極性","結構"],
  question:"下列哪一個胺基酸的 R 基最符合「只有 H」的描述？",
  options:[
    "Glycine",
    "Alanine",
    "Valine",
    "Proline"
  ],
  answer:0,
  explanation:"Glycine 的 R 基就是 H。"
},
{
  id:"CHEM-005",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["非極性","結構"],
  question:"若某胺基酸的 R 基為 -CH3，則最可能是哪一個？",
  options:[
    "Alanine",
    "Serine",
    "Cysteine",
    "Aspartate"
  ],
  answer:0,
  explanation:"Alanine 的 R 基為甲基 (-CH3)。"
},
{
  id:"CHEM-006",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["硫","官能基"],
  question:"下列哪一個胺基酸的側鏈含有硫氫基 (-SH)？",
  options:[
    "Methionine",
    "Cysteine",
    "Tyrosine",
    "Histidine"
  ],
  answer:1,
  explanation:"Cysteine 側鏈含 -SH，可形成雙硫鍵。"
},
{
  id:"CHEM-007",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["含硫","必需胺基酸"],
  question:"下列哪一個是唯一的含硫必需胺基酸？",
  options:[
    "Cysteine",
    "Methionine",
    "Tyrosine",
    "Glutamine"
  ],
  answer:1,
  explanation:"Methionine 是含硫且屬必需胺基酸。"
},
{
  id:"CHEM-008",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["芳香族","結構"],
  question:"下列哪一個胺基酸的側鏈含有苯環，且屬疏水性芳香族？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Histidine"
  ],
  answer:0,
  explanation:"Phenylalanine 含苯環，屬芳香族且偏疏水。"
},
{
  id:"CHEM-009",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["芳香族","官能基"],
  question:"下列哪一個胺基酸具有酚基，因此比苯丙胺酸更具親水性？",
  options:[
    "Tryptophan",
    "Tyrosine",
    "Valine",
    "Leucine"
  ],
  answer:1,
  explanation:"Tyrosine 含酚基 (-Ph-OH)，比 Phe 更具親水性。"
},
{
  id:"CHEM-010",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["吲哚環","結構"],
  question:"下列哪一個胺基酸的側鏈具有吲哚環 (indole ring)？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Histidine"
  ],
  answer:2,
  explanation:"Tryptophan 具有吲哚環。"
},
{
  id:"CHEM-011",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["環狀","脯胺酸"],
  question:"哪一個胺基酸因側鏈形成環狀結構，且其胺基為環的一部分，因此常中止 α-螺旋？",
  options:[
    "Proline",
    "Glycine",
    "Serine",
    "Methionine"
  ],
  answer:0,
  explanation:"Proline 為特殊環狀結構，常中止 α-螺旋。"
},
{
  id:"CHEM-012",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["羥基","磷酸化"],
  question:"下列哪一組胺基酸都因側鏈含 -OH 而常可被磷酸化？",
  options:[
    "Ser、Thr",
    "Val、Leu",
    "Asp、Glu",
    "Lys、Arg"
  ],
  answer:0,
  explanation:"Serine 與 Threonine 皆含 -OH，常是磷酸化位點。"
},
{
  id:"CHEM-013",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["酸性胺基酸","pKa"],
  question:"下列哪一組屬於酸性胺基酸，且在生理 pH 下常帶負電？",
  options:[
    "Asp、Glu",
    "Lys、Arg",
    "Ser、Thr",
    "Val、Leu"
  ],
  answer:0,
  explanation:"Asp 與 Glu 為酸性胺基酸。"
},
{
  id:"CHEM-014",
  chapter:"CH2 蛋白質",
  section:"胺基酸分類",
  difficulty:"hard",
  tags:["鹼性胺基酸","pKa"],
  question:"下列哪一組屬於鹼性胺基酸，且在生理 pH 下常帶正電？",
  options:[
    "Asp、Glu、His",
    "Lys、Arg、His",
    "Ser、Cys、Tyr",
    "Val、Ile、Leu"
  ],
  answer:1,
  explanation:"Lys、Arg、His 為鹼性胺基酸。"
},
{
  id:"CHEM-015",
  chapter:"CH2 蛋白質",
  section:"等電點",
  difficulty:"hard",
  tags:["zwitterion","化學式"],
  question:"胺基酸在水溶液中最常見的兩性離子形式，最合理的表示為何？",
  options:[
    "H2N-CHR-COOH",
    "H3N+-CHR-COO-",
    "H2N-CHR-COO-",
    "H3N+-CHR-COOH"
  ],
  answer:1,
  explanation:"兩性離子形式同時具有帶正電的胺基與帶負電的羧酸根。"
},
{
  id:"CHEM-016",
  chapter:"CH2 蛋白質",
  section:"等電點",
  difficulty:"hard",
  tags:["pI","電荷判斷"],
  question:"若某胺基酸所在環境 pH > pI，則該胺基酸整體最可能呈現何種電荷？",
  options:[
    "帶正電",
    "不帶電",
    "帶負電",
    "一定是兩性離子"
  ],
  answer:2,
  explanation:"pH > pI 時，胺基酸傾向失去更多質子，整體偏負電。"
},
{
  id:"CHEM-017",
  chapter:"CH2 蛋白質",
  section:"等電點",
  difficulty:"hard",
  tags:["pI","電荷判斷"],
  question:"若某胺基酸所在環境 pH < pI，則該胺基酸整體最可能呈現何種電荷？",
  options:[
    "帶正電",
    "帶負電",
    "完全中性",
    "一定無法存在"
  ],
  answer:0,
  explanation:"pH < pI 時，胺基酸傾向保留較多質子，整體偏正電。"
},
{
  id:"CHEM-018",
  chapter:"CH2 蛋白質",
  section:"等電點",
  difficulty:"hard",
  tags:["pI公式","酸性或中性"],
  question:"對於中性或酸性胺基酸，其等電點 pI 的常用公式為何？",
  options:[
    "pI = (pKa1 + pKa2) / 2",
    "pI = (pKa2 + pKa3) / 2",
    "pI = pKa1 + pKa2",
    "pI = pKa1 × pKa2"
  ],
  answer:0,
  explanation:"中性或酸性胺基酸常用 pI = (pKa1 + pKa2) / 2。"
},
{
  id:"CHEM-019",
  chapter:"CH2 蛋白質",
  section:"等電點",
  difficulty:"hard",
  tags:["pI公式","鹼性"],
  question:"對於鹼性胺基酸，其等電點 pI 的常用公式為何？",
  options:[
    "pI = (pKa1 + pKa2) / 2",
    "pI = (pKa2 + pKa3) / 2",
    "pI = pKa2 - pKa1",
    "pI = pKa1 + pKa3"
  ],
  answer:1,
  explanation:"鹼性胺基酸需取較高的兩個 pKa 平均。"
},
{
  id:"CHEM-020",
  chapter:"CH2 蛋白質",
  section:"胜肽鍵",
  difficulty:"hard",
  tags:["化學式","醯胺鍵"],
  question:"胜肽鍵的化學本質最正確的描述為何？",
  options:[
    "酯鍵 (-COO-)",
    "醯胺鍵 (-CO-NH-)",
    "醚鍵 (-C-O-C-)",
    "雙硫鍵 (-S-S-)"
  ],
  answer:1,
  explanation:"胜肽鍵本質上是醯胺鍵 (-CO-NH-)。"
},
{
  id:"CHEM-021",
  chapter:"CH2 蛋白質",
  section:"胜肽鍵",
  difficulty:"hard",
  tags:["脫水縮合","ATP"],
  question:"兩個胺基酸形成胜肽鍵時，最主要屬於哪一類反應？",
  options:[
    "水解反應",
    "脫水縮合反應",
    "氧化還原反應",
    "酯化反應"
  ],
  answer:1,
  explanation:"胜肽鍵由胺基與羧基脫水縮合形成。"
},
{
  id:"CHEM-022",
  chapter:"CH2 蛋白質",
  section:"胜肽鍵",
  difficulty:"hard",
  tags:["共振","平面結構"],
  question:"胜肽鍵不易自由旋轉，主要原因為何？",
  options:[
    "因為它完全是單鍵",
    "因為 C-N 具有部分雙鍵特性",
    "因為它一定帶正電",
    "因為它是離子鍵"
  ],
  answer:1,
  explanation:"C-N 共振使胜肽鍵具有部分雙鍵性質。"
},
{
  id:"CHEM-023",
  chapter:"CH2 蛋白質",
  section:"胜肽鍵",
  difficulty:"hard",
  tags:["反式","構型"],
  question:"一般蛋白質中的胜肽鍵構型以哪一種為主？",
  options:[
    "cis",
    "trans",
    "順反各半",
    "完全隨機"
  ],
  answer:1,
  explanation:"胜肽鍵通常以 trans 構型為主。"
},
{
  id:"CHEM-024",
  chapter:"CH2 蛋白質",
  section:"胜肽鍵",
  difficulty:"hard",
  tags:["平面","六原子"],
  question:"下列關於胜肽鍵平面性的敘述，何者正確？",
  options:[
    "只有 C 與 N 共平面",
    "只有羧基兩個氧原子共平面",
    "與胜肽鍵相關的 6 個原子常近乎共平面",
    "胜肽鍵一定形成四面體結構"
  ],
  answer:2,
  explanation:"由於共振，胜肽鍵附近常形成近乎平面的 6 原子結構。"
},
{
  id:"CHEM-025",
  chapter:"CH2 蛋白質",
  section:"重要胜肽",
  difficulty:"hard",
  tags:["GSH","結構"],
  question:"麩胱甘肽（GSH）的組成為何？",
  options:[
    "Gly-Cys-Glu",
    "Glu-Cys-Gly",
    "Glu-Gly-Cys",
    "Cys-Glu-Gly"
  ],
  answer:1,
  explanation:"GSH = Glu-Cys-Gly。"
},
{
  id:"CHEM-026",
  chapter:"CH2 蛋白質",
  section:"二級結構",
  difficulty:"hard",
  tags:["α螺旋","氫鍵"],
  question:"α-螺旋最主要由哪一種作用力穩定？",
  options:[
    "雙硫鍵",
    "離子鍵",
    "氫鍵",
    "磷酸二酯鍵"
  ],
  answer:2,
  explanation:"α-螺旋主要由主鏈之間的氫鍵穩定。"
},
{
  id:"CHEM-027",
  chapter:"CH2 蛋白質",
  section:"二級結構",
  difficulty:"hard",
  tags:["α螺旋","數值"],
  question:"右手 α-螺旋每一圈大約包含多少個胺基酸殘基？",
  options:[
    "2.0",
    "3.6",
    "4.5",
    "5.4"
  ],
  answer:1,
  explanation:"α-螺旋每圈約 3.6 個胺基酸。"
},
{
  id:"CHEM-028",
  chapter:"CH2 蛋白質",
  section:"二級結構",
  difficulty:"hard",
  tags:["α螺旋","中止"],
  question:"哪一個胺基酸最常因其特殊環狀結構而中止 α-螺旋？",
  options:[
    "Valine",
    "Tyrosine",
    "Proline",
    "Aspartate"
  ],
  answer:2,
  explanation:"Proline 會中止 α-螺旋。"
},
{
  id:"CHEM-029",
  chapter:"CH2 蛋白質",
  section:"二級結構",
  difficulty:"hard",
  tags:["β摺板","氫鍵"],
  question:"β-摺板的穩定主要依賴哪一類作用力？",
  options:[
    "氫鍵",
    "雙硫鍵",
    "共價鍵",
    "疏水鍵"
  ],
  answer:0,
  explanation:"β-摺板同樣主要依賴氫鍵穩定。"
},
{
  id:"CHEM-030",
  chapter:"CH2 蛋白質",
  section:"三級結構",
  difficulty:"hard",
  tags:["疏水作用","主因"],
  question:"穩定蛋白質三級結構的作用力中，最主要的是哪一項？",
  options:[
    "雙硫鍵",
    "疏水性交互作用",
    "離子鍵",
    "氫鍵"
  ],
  answer:1,
  explanation:"疏水性交互作用是三級結構穩定的主因。"
},
{
  id:"CHEM-031",
  chapter:"CH2 蛋白質",
  section:"三級結構",
  difficulty:"hard",
  tags:["雙硫鍵","氧化"],
  question:"兩個 Cys 的 -SH 被氧化後形成何種鍵結？",
  options:[
    "氫鍵",
    "離子鍵",
    "雙硫鍵",
    "酯鍵"
  ],
  answer:2,
  explanation:"兩個半胱胺酸可氧化形成 -S-S-。"
},
{
  id:"CHEM-032",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"hard",
  tags:["結構層次","保留"],
  question:"蛋白質變性時，通常哪一個結構層次最不會被直接破壞？",
  options:[
    "一級結構",
    "二級結構",
    "三級結構",
    "四級結構"
  ],
  answer:0,
  explanation:"變性通常不直接斷開肽鍵，所以一級結構多半保留。"
},
{
  id:"CHEM-033",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"hard",
  tags:["高溫","機制"],
  question:"高溫造成蛋白質變性時，最主要先破壞哪些作用力？",
  options:[
    "肽鍵與磷酸二酯鍵",
    "氫鍵與疏水性交互作用",
    "只有雙硫鍵",
    "只有離子鍵"
  ],
  answer:1,
  explanation:"高溫常先破壞較弱的非共價作用力。"
},
{
  id:"CHEM-034",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"hard",
  tags:["強酸強鹼","pH"],
  question:"強酸或強鹼使蛋白質變性的主要原因為何？",
  options:[
    "改變 pH，破壞氫鍵與電荷分布",
    "直接把所有肽鍵切斷",
    "讓胺基酸變成單糖",
    "讓蛋白質轉成DNA"
  ],
  answer:0,
  explanation:"pH 劇變會改變側鏈電荷與氫鍵情況，導致變性。"
},
{
  id:"CHEM-035",
  chapter:"CH2 蛋白質",
  section:"化學結構判讀",
  difficulty:"hard",
  tags:["結構辨認","芳香族"],
  question:"若某胺基酸結構圖中可看到苯環直接接在 -CH2- 之後，再連到 α-碳，最可能是哪一個？",
  options:[
    "Tyrosine",
    "Phenylalanine",
    "Tryptophan",
    "Histidine"
  ],
  answer:1,
  explanation:"Phe 的典型側鏈為 -CH2-Ph。"
},
{
  id:"CHEM-036",
  chapter:"CH2 蛋白質",
  section:"化學結構判讀",
  difficulty:"hard",
  tags:["結構辨認","酚基"],
  question:"若某胺基酸結構圖中可看到苯環上再接一個 -OH，最可能是哪一個？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Methionine"
  ],
  answer:1,
  explanation:"Tyrosine 為帶酚基的芳香族胺基酸。"
},
{
  id:"CHEM-037",
  chapter:"CH2 蛋白質",
  section:"化學結構判讀",
  difficulty:"hard",
  tags:["結構辨認","His"],
  question:"若某胺基酸的側鏈具有可接受/提供質子的含氮五員環，且 pKa 接近中性，最可能是哪一個？",
  options:[
    "Histidine",
    "Lysine",
    "Arginine",
    "Aspartate"
  ],
  answer:0,
  explanation:"Histidine 的咪唑環 pKa 約接近中性。"
},
{
  id:"CHEM-038",
  chapter:"CH2 蛋白質",
  section:"化學結構判讀",
  difficulty:"hard",
  tags:["結構辨認","Arg"],
  question:"下列哪一個鹼性胺基酸因側鏈帶有胍基，而具有很高 pKa？",
  options:[
    "Lysine",
    "Histidine",
    "Arginine",
    "Glutamine"
  ],
  answer:2,
  explanation:"Arginine 的胍基使其 pKa 很高。"
},
{
  id:"CHEM-039",
  chapter:"CH2 蛋白質",
  section:"化學結構判讀",
  difficulty:"hard",
  tags:["結構辨認","Lys"],
  question:"哪一個鹼性胺基酸的側鏈可視為長鏈末端帶胺基，因此 pKa 約 10.5？",
  options:[
    "Arginine",
    "Histidine",
    "Lysine",
    "Asparagine"
  ],
  answer:2,
  explanation:"Lysine 側鏈末端帶 ε-amino group。"
},
{
  id:"CHEM-040",
  chapter:"CH2 蛋白質",
  section:"整合",
  difficulty:"hard",
  tags:["結構決定功能","化學結構"],
  question:"若將蛋白質表面的 Asp 突變成 Val，最可能造成哪種性質改變？",
  options:[
    "由親水帶負電改成疏水中性",
    "由疏水改成帶正電",
    "由芳香族改成含硫",
    "由不帶電改成雙硫鍵"
  ],
  answer:0,
  explanation:"Asp 為酸性帶負電；Val 為疏水性中性胺基酸。"
},
{
  id:"NEW-001",
  chapter:"CH1 緒論",
  section:"生物大分子",
  difficulty:"medium",
  tags:["功能"],
  question:"下列哪一種生物大分子主要負責儲存遺傳資訊？",
  options:[
    "蛋白質",
    "核酸",
    "脂質",
    "醣類"
  ],
  answer:1,
  explanation:"核酸（DNA、RNA）負責儲存與傳遞遺傳資訊。"
},
{
  id:"NEW-002",
  chapter:"CH1 緒論",
  section:"生物大分子",
  difficulty:"medium",
  tags:["功能"],
  question:"下列哪一項最主要與能量儲存及細胞膜結構有關？",
  options:[
    "蛋白質",
    "核酸",
    "脂質",
    "酵素"
  ],
  answer:2,
  explanation:"脂質負責能量儲存與細胞膜結構。"
},
{
  id:"NEW-003",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"easy",
  tags:["結構"],
  question:"胺基酸的中心結構不包含下列哪一項？",
  options:[
    "胺基 (-NH2)",
    "羧基 (-COOH)",
    "R 基側鏈",
    "磷酸基"
  ],
  answer:3,
  explanation:"胺基酸基本結構為 α碳、胺基、羧基、R基與H。"
},
{
  id:"NEW-004",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列哪一個胺基酸不具光學活性？",
  options:[
    "Alanine",
    "Valine",
    "Glycine",
    "Leucine"
  ],
  answer:2,
  explanation:"Glycine 沒有不對稱碳，因此無光學活性。"
},
{
  id:"NEW-005",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者屬於含硫胺基酸？",
  options:[
    "Serine",
    "Cysteine",
    "Tyrosine",
    "Aspartate"
  ],
  answer:1,
  explanation:"Cysteine 含有 -SH，可形成雙硫鍵。"
},
{
  id:"NEW-006",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["蛋白質結構"],
  question:"蛋白質的二級結構主要由哪一種作用力穩定？",
  options:[
    "共價鍵",
    "氫鍵",
    "離子鍵",
    "雙硫鍵"
  ],
  answer:1,
  explanation:"α-螺旋與β-摺疊主要由氫鍵維持。"
},
{
  id:"NEW-007",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["蛋白質結構"],
  question:"蛋白質四級結構的定義為何？",
  options:[
    "單一胺基酸排列",
    "局部摺疊結構",
    "多條多肽鏈組合",
    "R基交互作用"
  ],
  answer:2,
  explanation:"四級結構為多個多肽鏈的組合。"
},
{
  id:"NEW-008",
  chapter:"CH3 酶",
  section:"基本特性",
  difficulty:"easy",
  tags:["酶"],
  question:"酶的主要功能為何？",
  options:[
    "提供能量",
    "儲存資訊",
    "加速化學反應",
    "傳遞遺傳訊息"
  ],
  answer:2,
  explanation:"酶為生物催化劑，加速反應速率。"
},
{
  id:"NEW-009",
  chapter:"CH3 酶",
  section:"專一性",
  difficulty:"medium",
  tags:["模型"],
  question:"「鎖與鑰模型」主要描述哪種特性？",
  options:[
    "酶變性",
    "酶專一性",
    "酶抑制",
    "酶活性調節"
  ],
  answer:1,
  explanation:"描述酶與底物高度專一的結合。"
},
{
  id:"NEW-010",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["Km"],
  question:"Km 值越小代表什麼？",
  options:[
    "酶活性低",
    "酶容易變性",
    "酶與底物親和力高",
    "反應速率慢"
  ],
  answer:2,
  explanation:"Km 小代表親和力高。"
},
{
  id:"NEW-011",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["抑制"],
  question:"競爭性抑制的特徵為何？",
  options:[
    "Km 不變",
    "Vmax 不變",
    "無法被底物克服",
    "永久失活"
  ],
  answer:1,
  explanation:"競爭性抑制會讓 Km ↑，但 Vmax 不變。"
},
{
  id:"NEW-012",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["抑制"],
  question:"非競爭性抑制會造成什麼變化？",
  options:[
    "Km 上升",
    "Km 不變",
    "Vmax 上升",
    "底物無法結合"
  ],
  answer:1,
  explanation:"非競爭性抑制 Km 不變，但 Vmax 下降。"
},
{
  id:"NEW-013",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者屬於必需胺基酸？",
  options:["Glycine","Leucine","Alanine","Serine"],
  answer:1,
  explanation:"Leucine 為必需胺基酸，需由飲食攝取。"
},
{
  id:"NEW-014",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列哪一種胺基酸含有芳香環？",
  options:["Valine","Phenylalanine","Alanine","Glycine"],
  answer:1,
  explanation:"Phenylalanine 含有苯環，屬芳香族胺基酸。"
},
{
  id:"NEW-015",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["極性"],
  question:"下列何者為極性不帶電胺基酸？",
  options:["Leucine","Serine","Valine","Isoleucine"],
  answer:1,
  explanation:"Serine 含 -OH，為極性不帶電。"
},
{
  id:"NEW-016",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["酸鹼"],
  question:"下列何者為酸性胺基酸？",
  options:["Aspartate","Lysine","Arginine","Histidine"],
  answer:0,
  explanation:"Aspartate 為酸性胺基酸，帶負電。"
},
{
  id:"NEW-017",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["鹼性"],
  question:"下列何者為鹼性胺基酸？",
  options:["Glutamate","Aspartate","Lysine","Serine"],
  answer:2,
  explanation:"Lysine 為鹼性胺基酸，帶正電。"
},
{
  id:"NEW-018",
  chapter:"CH2 蛋白質",
  section:"鍵結",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"肽鍵形成的本質為何？",
  options:["氧化反應","縮合反應","水解反應","還原反應"],
  answer:1,
  explanation:"肽鍵為脫水縮合形成。"
},
{
  id:"NEW-019",
  chapter:"CH2 蛋白質",
  section:"鍵結",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"肽鍵的形成涉及哪兩個官能基？",
  options:["羧基與胺基","羧基與羥基","胺基與磷酸基","羥基與磷酸基"],
  answer:0,
  explanation:"胺基與羧基形成肽鍵。"
},
{
  id:"NEW-020",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["一級結構"],
  question:"蛋白質的一級結構是指什麼？",
  options:["胺基酸序列","α螺旋","β摺疊","多聚體"],
  answer:0,
  explanation:"一級結構為胺基酸排列順序。"
},
{
  id:"NEW-021",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["三級結構"],
  question:"蛋白質三級結構主要由哪些作用力維持？",
  options:["僅共價鍵","僅氫鍵","多種非共價作用力","僅離子鍵"],
  answer:2,
  explanation:"包含氫鍵、疏水作用、離子鍵等。"
},
{
  id:"NEW-022",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["雙硫鍵"],
  question:"雙硫鍵通常由哪兩個胺基酸形成？",
  options:["Serine","Cysteine","Glycine","Alanine"],
  answer:1,
  explanation:"Cysteine 形成 -S-S- 鍵。"
},
{
  id:"NEW-023",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"easy",
  tags:["酶"],
  question:"酶屬於哪一類生物分子？",
  options:["核酸","蛋白質","脂質","醣類"],
  answer:1,
  explanation:"大多數酶為蛋白質。"
},
{
  id:"NEW-024",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["專一性"],
  question:"酶的專一性主要來自哪個結構？",
  options:["活性位","R基","核酸","細胞膜"],
  answer:0,
  explanation:"活性位決定底物結合。"
},
{
  id:"NEW-025",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["induced fit"],
  question:"誘導契合模型（induced fit）強調什麼？",
  options:["酶結構固定","酶結構會改變","底物變形","酶被破壞"],
  answer:1,
  explanation:"酶會因底物改變構形。"
},
{
  id:"NEW-026",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["Vmax"],
  question:"當底物濃度很高時，反應速率趨近於？",
  options:["Km","Vmax","0","無限大"],
  answer:1,
  explanation:"達飽和後接近最大速率。"
},
{
  id:"NEW-027",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["Km"],
  question:"Km 的定義為何？",
  options:["最大速率","半最大速率時的底物濃度","酶濃度","產物濃度"],
  answer:1,
  explanation:"Km 為 Vmax/2 時的底物濃度。"
},
{
  id:"NEW-028",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["競爭"],
  question:"競爭性抑制的作用位置為？",
  options:["活性位","酶外部","核酸","細胞膜"],
  answer:0,
  explanation:"與底物競爭活性位。"
},
{
  id:"NEW-029",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["非競爭"],
  question:"非競爭性抑制的特性為何？",
  options:["影響Km","影響Vmax","提高Km","增加酶量"],
  answer:1,
  explanation:"Vmax下降，Km不變。"
},
{
  id:"NEW-030",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"easy",
  tags:["溫度"],
  question:"溫度過高會導致酶什麼變化？",
  options:["活性增加","變性","結構固定","不影響"],
  answer:1,
  explanation:"高溫會破壞蛋白質結構。"
},
{
  id:"NEW-031",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"easy",
  tags:["pH"],
  question:"酶最適 pH 的意義為何？",
  options:["最低活性","最高活性","無影響","完全失活"],
  answer:1,
  explanation:"最適pH時活性最高。"
},
{
  id:"NEW-032",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["濃度"],
  question:"底物濃度增加時，反應速率如何變化？",
  options:["一直增加","先增加後飽和","一直下降","不變"],
  answer:1,
  explanation:"達到飽和後不再增加。"
},
{
  id:"NEW-033",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["陰電性"],
  question:"下列元素中陰電性最大的是？",
  options:["C","N","O","F"],
  answer:3,
  explanation:"F 陰電性最高。"
},
{
  id:"NEW-034",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["極性"],
  question:"O-H 鍵屬於哪種類型？",
  options:["非極性共價鍵","極性共價鍵","離子鍵","氫鍵"],
  answer:1,
  explanation:"因陰電性差異形成極性。"
},
{
  id:"NEW-035",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"水的高比熱主要來自什麼？",
  options:["共價鍵","氫鍵","離子鍵","電子數"],
  answer:1,
  explanation:"氫鍵需大量能量破壞。"
},
{
  id:"NEW-036",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["溶解"],
  question:"水可溶解極性物質的主要原因為？",
  options:["高密度","極性","高重量","高黏度"],
  answer:1,
  explanation:"極性使其能與溶質作用。"
},
{
  id:"NEW-037",
  chapter:"CH1 緒論",
  section:"緩衝",
  difficulty:"medium",
  tags:["系統"],
  question:"血紅素緩衝系統主要作用在哪？",
  options:["細胞內","血液","腎臟","肝臟"],
  answer:1,
  explanation:"在血液中調節酸鹼。"
},
{
  id:"NEW-038",
  chapter:"CH1 緒論",
  section:"疾病",
  difficulty:"medium",
  tags:["鐮刀型"],
  question:"鐮刀型貧血是由什麼造成？",
  options:["蛋白質缺乏","點突變","病毒感染","缺氧"],
  answer:1,
  explanation:"單一胺基酸突變。"
},
{
  id:"NEW-039",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"easy",
  tags:["功能"],
  question:"酵素的主要功能屬於哪一類？",
  options:["結構","催化","運輸","免疫"],
  answer:1,
  explanation:"酵素為催化功能蛋白。"
},
{
  id:"NEW-040",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["運輸"],
  question:"血紅素的主要功能為？",
  options:["催化","運輸氧氣","免疫","儲存脂質"],
  answer:1,
  explanation:"血紅素負責氧氣運輸。"
},
{
  id:"NEW-041",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["免疫"],
  question:"抗體屬於哪一類蛋白？",
  options:["運輸蛋白","酵素","免疫蛋白","結構蛋白"],
  answer:2,
  explanation:"抗體屬免疫蛋白。"
},
{
  id:"NEW-042",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["不可逆"],
  question:"不可逆抑制的特徵為何？",
  options:["可恢復","永久失活","Km不變","Vmax上升"],
  answer:1,
  explanation:"酶永久失去活性。"
},
{
  id:"NEW-043",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["輔酶"],
  question:"輔酶通常屬於哪類分子？",
  options:["蛋白質","脂質","有機分子","核酸"],
  answer:2,
  explanation:"輔酶為有機小分子。"
},
{
  id:"NEW-044",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["金屬"],
  question:"金屬離子在酶中通常扮演什麼角色？",
  options:["抑制","結構或催化輔助","破壞酶","儲存能量"],
  answer:1,
  explanation:"為輔因子。"
},
{
  id:"NEW-045",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["再利用"],
  question:"酶在反應後的狀態為何？",
  options:["被消耗","改變","可再利用","變成產物"],
  answer:2,
  explanation:"酶不被消耗。"
},
{
  id:"NEW-046",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["圖像"],
  question:"米氏曲線呈現何種形狀？",
  options:["直線","雙曲線","拋物線","指數下降"],
  answer:1,
  explanation:"為雙曲線。"
},
{
  id:"NEW-047",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver-Burk 圖為何種圖？",
  options:["半對數","雙倒數","線性回歸","指數圖"],
  answer:1,
  explanation:"為雙倒數圖。"
},
{
  id:"NEW-048",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性會破壞哪一結構？",
  options:["一級","二級以上","只有四級","全部"],
  answer:1,
  explanation:"不影響一級結構。"
},
{
  id:"NEW-049",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["因素"],
  question:"下列何者不會造成蛋白質變性？",
  options:["高溫","強酸","強鹼","適當pH"],
  answer:3,
  explanation:"適當pH不會破壞結構。"
},
{
  id:"NEW-050",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["疏水"],
  question:"疏水性胺基酸通常位於蛋白質哪裡？",
  options:["表面","內部","細胞外","核內"],
  answer:1,
  explanation:"疏水胺基酸多在內部。"
},
{
  id:"NEW-051",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["親水"],
  question:"親水性胺基酸通常位於蛋白質哪裡？",
  options:["內部","表面","膜內","細胞核"],
  answer:1,
  explanation:"與水接觸在表面。"
},
{
  id:"NEW-052",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶降低反應活化能的作用為何？",
  options:["降低產物量","增加能量需求","加快反應速率","破壞反應"],
  answer:2,
  explanation:"降低活化能使反應更快。"
},
{
  id:"NEW-053",
  chapter:"CH1 緒論",
  section:"生物大分子",
  difficulty:"medium",
  tags:["比較"],
  question:"下列何者主要負責催化生物反應？",
  options:["脂質","蛋白質","核酸","醣類"],
  answer:1,
  explanation:"酶為蛋白質，負責催化反應。"
},
{
  id:"NEW-054",
  chapter:"CH1 緒論",
  section:"元素",
  difficulty:"medium",
  tags:["元素"],
  question:"下列何者最可能參與能量轉移（ATP）？",
  options:["C","N","P","S"],
  answer:2,
  explanation:"ATP 含磷酸基。"
},
{
  id:"NEW-055",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["鍵結"],
  question:"陰電性差距大於1.8通常形成？",
  options:["共價鍵","極性共價鍵","離子鍵","氫鍵"],
  answer:2,
  explanation:"差距大易形成離子鍵。"
},
{
  id:"NEW-056",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["作用力"],
  question:"疏水作用的本質為何？",
  options:["電子轉移","水排斥非極性分子","氫鍵形成","共價鍵"],
  answer:1,
  explanation:"非極性分子聚集避免水。"
},
{
  id:"NEW-057",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["性質"],
  question:"水的高蒸發熱主要功能為何？",
  options:["降溫","增加密度","增加黏度","增加溶解度"],
  answer:0,
  explanation:"蒸發帶走熱量。"
},
{
  id:"NEW-058",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"medium",
  tags:["計算"],
  question:"若[H+] = 1×10⁻⁷，pH為？",
  options:["6","7","8","9"],
  answer:1,
  explanation:"pH = 7。"
},
{
  id:"NEW-059",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["判斷"],
  question:"pH=6 的溶液相較於 pH=7 的溶液？",
  options:["酸性低10倍","酸性高10倍","酸性高100倍","無差"],
  answer:1,
  explanation:"pH差1為10倍。"
},
{
  id:"NEW-060",
  chapter:"CH1 緒論",
  section:"緩衝",
  difficulty:"medium",
  tags:["系統"],
  question:"蛋白質緩衝系統的主要原因為？",
  options:["大量存在且具可電離基團","含脂質","含核酸","含水"],
  answer:0,
  explanation:"蛋白質含多種官能基。"
},
{
  id:"NEW-061",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為疏水性胺基酸？",
  options:["Serine","Valine","Aspartate","Lysine"],
  answer:1,
  explanation:"Valine 為非極性。"
},
{
  id:"NEW-062",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為帶正電胺基酸？",
  options:["Glutamate","Aspartate","Arginine","Serine"],
  answer:2,
  explanation:"Arginine 為鹼性。"
},
{
  id:"NEW-063",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["功能"],
  question:"哪一胺基酸可形成雙硫鍵？",
  options:["Serine","Cysteine","Glycine","Alanine"],
  answer:1,
  explanation:"Cysteine 含-SH。"
},
{
  id:"NEW-064",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["二級"],
  question:"β-摺疊主要由何種作用力穩定？",
  options:["共價鍵","氫鍵","離子鍵","疏水作用"],
  answer:1,
  explanation:"氫鍵維持。"
},
{
  id:"NEW-065",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["比較"],
  question:"蛋白質三級結構與四級結構差異在於？",
  options:["是否有氫鍵","是否有多條多肽鏈","是否有胺基酸","是否有共價鍵"],
  answer:1,
  explanation:"四級結構為多鏈。"
},
{
  id:"NEW-066",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性後通常會？",
  options:["活性增加","失去功能","產生DNA","變成脂質"],
  answer:1,
  explanation:"結構破壞導致失活。"
},
{
  id:"NEW-067",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["分類"],
  question:"膠原蛋白屬於哪類蛋白？",
  options:["酵素","結構蛋白","運輸蛋白","免疫蛋白"],
  answer:1,
  explanation:"提供結構支撐。"
},
{
  id:"NEW-068",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["催化"],
  question:"酶能加速反應但不改變什麼？",
  options:["速率","平衡位置","活化能","溫度"],
  answer:1,
  explanation:"不改變平衡。"
},
{
  id:"NEW-069",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["機制"],
  question:"酶降低活化能的方式不包含？",
  options:["穩定過渡態","提供替代路徑","增加溫度","正確定位底物"],
  answer:2,
  explanation:"酶不改變溫度。"
},
{
  id:"NEW-070",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km"],
  question:"Km 高代表什麼？",
  options:["高親和力","低親和力","高速率","高Vmax"],
  answer:1,
  explanation:"Km高→親和力低。"
},
{
  id:"NEW-071",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"medium",
  tags:["濃度"],
  question:"增加酶濃度會使？",
  options:["Km改變","Vmax增加","Km下降","反應停止"],
  answer:1,
  explanation:"Vmax與酶量相關。"
},
{
  id:"NEW-072",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["競爭"],
  question:"競爭性抑制會使Lineweaver圖？",
  options:["斜率不變","斜率增加","Y截距下降","X截距不變"],
  answer:1,
  explanation:"Km增加→斜率增加。"
},
{
  id:"NEW-073",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["非競爭"],
  question:"非競爭抑制Lineweaver圖變化？",
  options:["斜率不變","Y截距上升","X截距變化","Km下降"],
  answer:1,
  explanation:"Vmax下降→Y截距↑。"
},
{
  id:"NEW-074",
  chapter:"CH3 酶",
  section:"輔因子",
  difficulty:"medium",
  tags:["輔酶"],
  question:"NAD+ 屬於？",
  options:["酶","輔酶","脂質","核酸"],
  answer:1,
  explanation:"為輔酶。"
},
{
  id:"NEW-075",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["再利用"],
  question:"酶在反應中被消耗嗎？",
  options:["是","否","部分","只有高溫"],
  answer:1,
  explanation:"酶可重複使用。"
},
{
  id:"NEW-076",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["密度"],
  question:"冰浮於水上的原因為？",
  options:["密度較大","密度較小","溫度高","極性低"],
  answer:1,
  explanation:"冰密度較低。"
},
{
  id:"NEW-077",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["作用力"],
  question:"凡得瓦力屬於？",
  options:["共價鍵","非共價作用力","離子鍵","氫鍵"],
  answer:1,
  explanation:"弱作用力。"
},
{
  id:"NEW-078",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["結構"],
  question:"Proline 的特殊性為何？",
  options:["含硫","環狀結構","帶電","含芳香環"],
  answer:1,
  explanation:"環狀造成彎曲。"
},
{
  id:"NEW-079",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"medium",
  tags:["分類"],
  question:"Tyrosine 的特性為？",
  options:["完全非極性","含酚基","帶負電","無反應性"],
  answer:1,
  explanation:"含酚基。"
},
{
  id:"NEW-080",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["酵素"],
  question:"酵素與底物結合後形成？",
  options:["產物","酶-底物複合體","RNA","脂質"],
  answer:1,
  explanation:"ES complex。"
},
{
  id:"NEW-081",
  chapter:"CH3 酶",
  section:"機制",
  difficulty:"medium",
  tags:["ES"],
  question:"ES complex 的意義為？",
  options:["酶失活","酶與底物結合","酶與產物","底物消失"],
  answer:1,
  explanation:"暫時結合。"
},
{
  id:"NEW-082",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶效率高的原因不包含？",
  options:["定位底物","降低活化能","增加能量","穩定過渡態"],
  answer:2,
  explanation:"不增加能量。"
},
{
  id:"NEW-083",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["抑制"],
  question:"重金屬通常會？",
  options:["活化酶","抑制酶","增加Km","增加Vmax"],
  answer:1,
  explanation:"破壞結構。"
},
{
  id:"NEW-084",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["因素"],
  question:"下列何者最可能導致蛋白質變性？",
  options:["低溫","適中pH","高溫","低鹽"],
  answer:2,
  explanation:"高溫破壞結構。"
},
{
  id:"NEW-085",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["計算"],
  question:"pH=3 的溶液比 pH=5 酸性？",
  options:["10倍","100倍","1000倍","無法比較"],
  answer:1,
  explanation:"差2→100倍。"
},
{
  id:"NEW-086",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km"],
  question:"當底物濃度等於Km時，速率為？",
  options:["Vmax","1/2 Vmax","2Vmax","0"],
  answer:1,
  explanation:"定義。"
},
{
  id:"NEW-087",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["疏水"],
  question:"蛋白質折疊的主要驅動力為？",
  options:["離子鍵","氫鍵","疏水作用","共價鍵"],
  answer:2,
  explanation:"疏水效應。"
},
{
  id:"NEW-088",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"氫鍵常出現在？",
  options:["R基","主鏈","脂質","DNA外部"],
  answer:1,
  explanation:"主鏈。"
},
{
  id:"NEW-089",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["模型"],
  question:"lock and key 模型假設？",
  options:["酶可變形","酶固定","底物改變","酶失活"],
  answer:1,
  explanation:"固定模型。"
},
{
  id:"NEW-090",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"medium",
  tags:["比較"],
  question:"競爭 vs 非競爭差異？",
  options:["是否影響Km","是否有酶","是否有底物","是否有產物"],
  answer:0,
  explanation:"競爭影響Km。"
},
{
  id:"NEW-091",
  chapter:"CH1 緒論",
  section:"元素",
  difficulty:"medium",
  tags:["元素"],
  question:"下列何者最常存在於蛋白質中？",
  options:["Na","Cl","N","Fe"],
  answer:2,
  explanation:"蛋白質含胺基。"
},
{
  id:"NEW-092",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["分類"],
  question:"下列何者為芳香族？",
  options:["Gly","Val","Trp","Ala"],
  answer:2,
  explanation:"Trp。"
},
{
  id:"NEW-093",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"medium",
  tags:["必需"],
  question:"下列何者為必需胺基酸？",
  options:["Ala","Gly","Leu","Ser"],
  answer:2,
  explanation:"Leu。"
},
{
  id:"NEW-094",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["催化"],
  question:"酶作用後產物會？",
  options:["與酶結合","釋放","消失","變酶"],
  answer:1,
  explanation:"產物釋放。"
},
{
  id:"NEW-095",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["pH"],
  question:"pH影響酶的主要原因？",
  options:["改變序列","改變電荷","改變DNA","改變脂質"],
  answer:1,
  explanation:"影響離子狀態。"
},
{
  id:"NEW-096",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["儲存"],
  question:"Ferritin 屬於？",
  options:["運輸","儲存","免疫","酵素"],
  answer:1,
  explanation:"儲存鐵。"
},
{
  id:"NEW-097",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["圖"],
  question:"Lineweaver圖中X截距代表？",
  options:["1/Vmax","-1/Km","Km","Vmax"],
  answer:1,
  explanation:"X截距=-1/Km。"
},
{
  id:"NEW-098",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["圖"],
  question:"Y截距代表？",
  options:["1/Vmax","Km","Vmax","-Km"],
  answer:0,
  explanation:"Y截距=1/Vmax。"
},
{
  id:"NEW-099",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["R基"],
  question:"胺基酸差異主要來自？",
  options:["胺基","羧基","R基","H"],
  answer:2,
  explanation:"R基決定性質。"
},
{
  id:"NEW-100",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["潤滑"],
  question:"水作為潤滑劑主要在？",
  options:["血液","關節","腦","肌肉"],
  answer:1,
  explanation:"關節液。"
},
{
  id:"NEW-101",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["效率"],
  question:"酶可重複使用原因？",
  options:["不參與反應","不被消耗","產生新酶","固定不動"],
  answer:1,
  explanation:"反應後恢復。"
},
{
  id:"NEW-102",
  chapter:"CH2 蛋白質",
  section:"總結",
  difficulty:"medium",
  tags:["整合"],
  question:"蛋白質功能最主要取決於？",
  options:["數量","序列與結構","位置","大小"],
  answer:1,
  explanation:"結構決定功能。"
},
{
  id:"NEW-103",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["生物化學定義","整合"],
  question:"老師說：「生物化學不是只背器官名稱，而是要從分子角度理解生命現象。」這句話最符合下列哪一個觀念？",
  options:["生物化學主要研究組織切片外觀","生物化學重點在生物體內化學組成、結構與反應","生物化學只研究遺傳病","生物化學只研究藥物治療"],
  answer:1,
  explanation:"生物化學核心在於從分子層次理解生命體內的化學組成、結構與反應。"
},
{
  id:"NEW-104",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["大分子","功能"],
  question:"某學生整理表格時，把 DNA、酵素、三酸甘油酯都寫成「主要負責催化」。下列哪一項修正最正確？",
  options:["DNA與脂質都主要負責催化","酵素主要負責催化，DNA主要負責遺傳資訊儲存","三酸甘油酯主要負責催化，酵素主要儲存能量","DNA、酵素、脂質三者功能相同"],
  answer:1,
  explanation:"酵素主要負責催化；DNA負責遺傳資訊；脂質偏向儲能與膜結構。"
},
{
  id:"NEW-105",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["中心法則"],
  question:"研究生觀察某細胞先將 DNA 資訊轉成 mRNA，再依序合成蛋白質。這個流程最符合下列何者？",
  options:["DNA→蛋白質→RNA","RNA→DNA→蛋白質","DNA→RNA→蛋白質","蛋白質→RNA→DNA"],
  answer:2,
  explanation:"中心法則主要流程為 DNA 轉錄成 RNA，再翻譯成蛋白質。"
},
{
  id:"NEW-106",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["中心法則","逆轉錄"],
  question:"某病毒的遺傳物質為 RNA，進入宿主後可先形成 DNA 再整合到宿主基因組。此現象最能說明什麼？",
  options:["中心法則完全錯誤","存在逆轉錄現象","蛋白質可直接變成DNA","DNA無法作為遺傳物質"],
  answer:1,
  explanation:"RNA先轉成DNA屬逆轉錄，是對中心法則的重要補充。"
},
{
  id:"NEW-107",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["元素"],
  question:"某學生活動中被問到：『生命常見六大元素是哪一組？』下列哪一組回答最正確？",
  options:["C、H、O、N、P、S","Na、K、Cl、Ca、Fe、Zn","C、H、Na、O、Ca、P","O、N、Fe、Cu、S、K"],
  answer:0,
  explanation:"生命常見六大元素為 C、H、O、N、P、S。"
},
{
  id:"NEW-108",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["鍵結","陰電性"],
  question:"在化學鍵比較題中，老師問：『兩原子之間若陰電性差很小，通常最可能形成哪種鍵？』",
  options:["共價鍵","離子鍵","氫鍵","疏水作用"],
  answer:0,
  explanation:"陰電性差小通常形成共價鍵；差較大則偏向離子鍵。"
},
{
  id:"NEW-109",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["非共價作用力"],
  question:"某藥物與受體之間是以較弱、可逆的吸引力互相辨識，且便於快速結合與分離。這最可能屬於？",
  options:["非共價作用力","磷酸二酯鍵","肽鍵","雙硫鍵"],
  answer:0,
  explanation:"生物辨識常依賴可逆的非共價作用力。"
},
{
  id:"NEW-110",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水"],
  question:"運動後大量流汗可以幫助體溫下降，這主要反映水的哪一項性質？",
  options:["高表面張力","高蒸發熱","高密度","低極性"],
  answer:1,
  explanation:"汗液蒸發帶走大量熱能，與水的高蒸發熱有關。"
},
{
  id:"NEW-111",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","高比熱"],
  question:"海邊地區白天夜晚溫差通常較小，生物體內液也有助於維持溫度穩定。這與水的哪一性質最相關？",
  options:["高比熱","高密度","低蒸發熱","非極性"],
  answer:0,
  explanation:"水的高比熱使吸熱放熱時溫度變化較小。"
},
{
  id:"NEW-112",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","結構"],
  question:"水分子具有極性且分子形狀彎曲，O-H 鍵角大約為多少？",
  options:["90°","104.5°","120°","180°"],
  answer:1,
  explanation:"水分子呈彎曲結構，鍵角約 104.5°。"
},
{
  id:"NEW-113",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["pH","計算"],
  question:"實驗室中某溶液 [H+] = 1×10⁻⁶ M，該溶液的 pH 最接近下列何者？",
  options:["5","6","7","8"],
  answer:1,
  explanation:"pH = -log[H+] = 6。"
},
{
  id:"NEW-114",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["pH","比較"],
  question:"某兩杯溶液分別為 pH 4 與 pH 6，則 pH 4 的酸性相較於 pH 6？",
  options:["高 2 倍","高 10 倍","高 100 倍","高 1000 倍"],
  answer:2,
  explanation:"pH 差 2，酸性差 10² = 100 倍。"
},
{
  id:"NEW-115",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["緩衝系統"],
  question:"臨床上若談到『細胞外液中最重要的緩衝系統』，下列哪一項最正確？",
  options:["蛋白質緩衝系統","重碳酸鹽-碳酸緩衝系統","磷酸鹽緩衝系統","乳酸緩衝系統"],
  answer:1,
  explanation:"細胞外液最重要的緩衝系統為重碳酸鹽-碳酸系統。"
},
{
  id:"NEW-116",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["緩衝系統","腎臟"],
  question:"老師出題：『哪一種緩衝系統與腎臟排酸關係較密切？』",
  options:["磷酸鹽緩衝系統","血紅素緩衝系統","脂質緩衝系統","ATP緩衝系統"],
  answer:0,
  explanation:"磷酸鹽緩衝系統與腎臟排酸功能密切相關。"
},
{
  id:"NEW-117",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["疾病","鐮刀型貧血"],
  question:"某病患的血紅素因單一胺基酸改變而導致紅血球變形、微血管阻塞。這最可能是哪一種疾病？",
  options:["血友病","鐮刀型貧血","白血病","地中海型貧血"],
  answer:1,
  explanation:"鐮刀型貧血由血紅素中的點突變造成。"
},
{
  id:"NEW-118",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["疾病","胺基酸"],
  question:"鐮刀型貧血中，血紅素某位置的麩胺酸被哪一種胺基酸取代？",
  options:["甘胺酸","纈胺酸","絲胺酸","酪胺酸"],
  answer:1,
  explanation:"典型鐮刀型貧血為 glutamic acid 被 valine 取代。"
},
{
  id:"NEW-119",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","結構"],
  question:"老師指著胺基酸通式問：『哪一部分決定不同胺基酸的性質差異？』",
  options:["胺基","羧基","氫原子","R 基側鏈"],
  answer:3,
  explanation:"各種胺基酸主要差異來自 R 基。"
},
{
  id:"NEW-120",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","光學活性"],
  question:"某同學記得『大多數天然胺基酸都有光學活性，但有一個例外』。這個例外是？",
  options:["Alanine","Glycine","Valine","Leucine"],
  answer:1,
  explanation:"Glycine 的 α-碳不具四種不同取代基，因此無光學活性。"
},
{
  id:"NEW-121",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","構型"],
  question:"地球上一般生物體蛋白質所使用的胺基酸構型主要為何？",
  options:["D 型","L 型","DL 混合","無固定型態"],
  answer:1,
  explanation:"天然蛋白質中的胺基酸主要為 L 型。"
},
{
  id:"NEW-122",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["必需胺基酸"],
  question:"營養師提醒病患某些胺基酸無法由人體自行充分合成，必須由食物攝取。這些稱為？",
  options:["酸性胺基酸","鹼性胺基酸","必需胺基酸","芳香族胺基酸"],
  answer:2,
  explanation:"必需胺基酸需由飲食供應。"
},
{
  id:"NEW-123",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["必需胺基酸"],
  question:"下列哪一個最可能屬於必需胺基酸？",
  options:["Glycine","Leucine","Alanine","Aspartate"],
  answer:1,
  explanation:"Leucine 為必需胺基酸。"
},
{
  id:"NEW-124",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸分類"],
  question:"若某胺基酸具有疏水性、常藏在蛋白質內部，且側鏈是支鏈烴，最可能是哪一類？",
  options:["非極性胺基酸","酸性胺基酸","鹼性胺基酸","極性帶電胺基酸"],
  answer:0,
  explanation:"疏水、支鏈烴通常屬非極性胺基酸。"
},
{
  id:"NEW-125",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸分類"],
  question:"某胺基酸側鏈含有 -OH，通常可被歸入下列哪一類？",
  options:["非極性中性","極性不帶電","酸性","鹼性"],
  answer:1,
  explanation:"含 -OH 的如 Ser、Thr 常屬極性不帶電胺基酸。"
},
{
  id:"NEW-126",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酸性胺基酸"],
  question:"若題目問『哪一個屬於酸性胺基酸』，下列何者最合理？",
  options:["Lysine","Arginine","Aspartate","Serine"],
  answer:2,
  explanation:"Aspartate 為酸性胺基酸。"
},
{
  id:"NEW-127",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["鹼性胺基酸"],
  question:"在生理 pH 下常帶正電、可歸為鹼性胺基酸者為？",
  options:["Glutamate","Arginine","Tyrosine","Valine"],
  answer:1,
  explanation:"Arginine 為鹼性且常帶正電。"
},
{
  id:"NEW-128",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["芳香族胺基酸"],
  question:"下列哪一個最符合『芳香族胺基酸』的特徵？",
  options:["Trp","Gly","Ala","Cys"],
  answer:0,
  explanation:"Trp 為芳香族胺基酸。"
},
{
  id:"NEW-129",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["含硫胺基酸","雙硫鍵"],
  question:"實驗中某蛋白質因氧化後形成 -S-S- 鍵而更穩定，這通常與哪種胺基酸最有關？",
  options:["Cysteine","Glycine","Serine","Valine"],
  answer:0,
  explanation:"Cysteine 含 -SH，可形成雙硫鍵。"
},
{
  id:"NEW-130",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["Proline"],
  question:"某學生說某胺基酸因特殊環狀結構，常使蛋白質鏈產生彎折。這最可能是？",
  options:["Proline","Alanine","Lysine","Glutamate"],
  answer:0,
  explanation:"Proline 的環狀結構會影響多肽鏈彎曲。"
},
{
  id:"NEW-131",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["肽鍵"],
  question:"兩個胺基酸連接形成二胜肽時，實際上是由哪兩個官能基反應？",
  options:["胺基與胺基","羧基與羧基","胺基與羧基","R基與R基"],
  answer:2,
  explanation:"一個胺基酸的胺基與另一個的羧基脫水縮合形成肽鍵。"
},
{
  id:"NEW-132",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["肽鍵","反應"],
  question:"形成肽鍵的反應本質最接近下列哪一項？",
  options:["水解反應","脫水縮合反應","氧化反應","還原反應"],
  answer:1,
  explanation:"肽鍵形成會去除一分子水，屬脫水縮合。"
},
{
  id:"NEW-133",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","一級"],
  question:"若題目強調『胺基酸排列順序』，它指的是蛋白質哪一級結構？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:0,
  explanation:"胺基酸序列即為蛋白質一級結構。"
},
{
  id:"NEW-134",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","二級"],
  question:"α-螺旋與β-摺疊屬於蛋白質哪一層次結構？",
  options:["一級","二級","三級","四級"],
  answer:1,
  explanation:"α-螺旋與β-摺疊屬二級結構。"
},
{
  id:"NEW-135",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質結構","二級","氫鍵"],
  question:"蛋白質二級結構主要由哪一種作用力穩定？",
  options:["氫鍵","雙硫鍵","磷酸二酯鍵","金屬鍵"],
  answer:0,
  explanation:"二級結構主要靠主鏈間氫鍵穩定。"
},
{
  id:"NEW-136",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["蛋白質結構","三級"],
  question:"某單一多肽鏈已經摺疊成立體構型，內部同時有疏水作用、離子鍵與氫鍵共同穩定。這最符合？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:2,
  explanation:"單一多肽鏈的完整立體摺疊為三級結構。"
},
{
  id:"NEW-137",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["蛋白質結構","四級"],
  question:"血紅素由多條多肽鏈組成，若題目強調『不同亞基組合』，則主要對應哪一級結構？",
  options:["一級","二級","三級","四級"],
  answer:3,
  explanation:"多條多肽鏈組成複合體屬四級結構。"
},
{
  id:"NEW-138",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"老師請學生舉例『運輸蛋白』，下列哪一項最合適？",
  options:["膠原蛋白","血紅素","抗體","胃蛋白酶"],
  answer:1,
  explanation:"血紅素負責運輸氧氣。"
},
{
  id:"NEW-139",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"若某蛋白質主要負責身體防禦、辨識外來抗原，這最可能屬於？",
  options:["結構蛋白","免疫蛋白","運輸蛋白","儲存蛋白"],
  answer:1,
  explanation:"抗體等屬免疫蛋白。"
},
{
  id:"NEW-140",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質功能"],
  question:"膠原蛋白、角蛋白這類通常歸在下列哪一種蛋白功能類別？",
  options:["催化","結構","運輸","免疫"],
  answer:1,
  explanation:"膠原蛋白與角蛋白屬結構蛋白。"
},
{
  id:"NEW-141",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["變性"],
  question:"某酵素經高溫處理後失去活性，但其胜肽鍵大多仍存在。這最適合描述為？",
  options:["蛋白質聚合","蛋白質變性","蛋白質複製","蛋白質翻譯"],
  answer:1,
  explanation:"高溫通常破壞二級以上結構，導致變性失活。"
},
{
  id:"NEW-142",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["變性","結構"],
  question:"蛋白質變性時，一般最不容易直接被破壞的是哪一層次結構？",
  options:["一級結構","二級結構","三級結構","四級結構"],
  answer:0,
  explanation:"變性通常不直接破壞肽鍵，因此一級結構相對保留。"
},
{
  id:"NEW-143",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","本質"],
  question:"老師問：『大多數酶的化學本質是什麼？』下列何者最正確？",
  options:["脂質","蛋白質","核酸","醣類"],
  answer:1,
  explanation:"大多數酶為蛋白質。"
},
{
  id:"NEW-144",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","功能"],
  question:"在細胞內，酶最主要的角色是什麼？",
  options:["儲存遺傳資訊","加速化學反應","形成細胞膜","提供永久能量"],
  answer:1,
  explanation:"酶是生物催化劑，負責加速反應。"
},
{
  id:"NEW-145",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","活化能"],
  question:"酶能加速反應，最核心的原因是因為它可以？",
  options:["提高反應平衡常數","降低活化能","增加產物總量","改變底物種類"],
  answer:1,
  explanation:"酶透過降低活化能提升反應速率。"
},
{
  id:"NEW-146",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","平衡"],
  question:"某學生說『酶會讓反應比較快，所以最後平衡位置也一定改變』。下列哪一個評價最正確？",
  options:["完全正確","完全錯誤，酶不改變平衡位置","只在高溫下正確","只在酸性環境下正確"],
  answer:1,
  explanation:"酶只加快達到平衡的速度，不改變平衡位置。"
},
{
  id:"NEW-147",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","活性位"],
  question:"酶與底物辨識結合最重要的部位通常是？",
  options:["R基","活性位","肽鍵","羧基端"],
  answer:1,
  explanation:"底物主要與酶的活性位結合。"
},
{
  id:"NEW-148",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶專一性","lock and key"],
  question:"若題目說『底物與酶像鎖和鑰匙一樣吻合』，這是在描述酶的哪項特性？",
  options:["可逆性","專一性","抑制作用","變性"],
  answer:1,
  explanation:"鎖鑰模型強調酶對底物的專一性。"
},
{
  id:"NEW-149",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["induced fit"],
  question:"與鎖鑰模型相比，誘導契合模型更強調哪一點？",
  options:["酶完全不會改變","底物完全不接觸酶","酶與底物接近時構形可調整","只有產物會變形"],
  answer:2,
  explanation:"誘導契合模型認為酶可因底物接近而調整構形。"
},
{
  id:"NEW-150",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["ES complex"],
  question:"反應進行過程中，酶先與底物形成暫時複合體，這通常寫作？",
  options:["EP","ES","PS","SE"],
  answer:1,
  explanation:"ES 代表 enzyme-substrate complex。"
},
{
  id:"NEW-151",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶特性"],
  question:"某酶催化完反應後仍可再次使用，這說明酶具有下列哪一特徵？",
  options:["被反應消耗","可重複利用","會變成產物","只能用一次"],
  answer:1,
  explanation:"酶在反應後通常可恢復原狀並再利用。"
},
{
  id:"NEW-152",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["輔酶","輔因子"],
  question:"某酶必須搭配一個小型有機分子才能正常作用，該分子最可能稱為？",
  options:["脂肪酸","輔酶","核酸","抑制劑"],
  answer:1,
  explanation:"小型有機輔助分子通常稱為輔酶。"
},
{
  id:"NEW-153",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["金屬離子","輔因子"],
  question:"若某酶需要 Zn²⁺ 或 Mg²⁺ 才能發揮作用，則這些離子最適合被歸類為？",
  options:["產物","輔因子","抑制劑","底物"],
  answer:1,
  explanation:"金屬離子常作為酶的輔因子。"
},
{
  id:"NEW-154",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["動力學","底物濃度"],
  question:"某酶在低底物濃度時，底物增加會使速率明顯上升；但當底物很高後，速率逐漸趨平。這表示酶反應呈現？",
  options:["線性無上限增加","米氏飽和現象","完全不受底物影響","負相關"],
  answer:1,
  explanation:"典型酶動力學會隨底物增加而接近飽和。"
},
{
  id:"NEW-155",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["Vmax"],
  question:"在酶已被底物幾乎完全佔滿時，反應速率最接近哪一項？",
  options:["Km","Vmax","0","1/Km"],
  answer:1,
  explanation:"所有活性位都接近被佔滿時，速率趨近 Vmax。"
},
{
  id:"NEW-156",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Km"],
  question:"老師說：『Km 可以拿來反映酶與底物親和力。』若某酶的 Km 很小，通常代表？",
  options:["親和力較高","親和力較低","反應一定較慢","酶一定被抑制"],
  answer:0,
  explanation:"Km 小表示較低底物濃度即可達半最大速率，通常代表親和力較高。"
},
{
  id:"NEW-157",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Km","定義"],
  question:"在米氏動力學中，當反應速率等於 1/2 Vmax 時，此時的底物濃度稱為？",
  options:["Vmax","Km","Ki","pKa"],
  answer:1,
  explanation:"Km 定義為反應速率達半最大速率時的底物濃度。"
},
{
  id:"NEW-158",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶濃度","Vmax"],
  question:"若實驗中底物充足，單純增加酶濃度，最可能造成哪個參數上升？",
  options:["Km","Vmax","pH","抑制程度"],
  answer:1,
  explanation:"酶濃度增加時，Vmax 通常上升。"
},
{
  id:"NEW-159",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["溫度","酶"],
  question:"某酶在 37°C 活性最高，但到 80°C 幾乎失活。這最可能是因為高溫造成？",
  options:["底物增加","酶變性","Vmax無限上升","Km變成0"],
  answer:1,
  explanation:"高溫破壞蛋白質結構導致酶變性。"
},
{
  id:"NEW-160",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["pH","酶"],
  question:"胃蛋白酶在強酸環境中活性較高，若把它放到接近中性的環境，活性下降。這最能說明？",
  options:["酶都有相同最適pH","pH 會影響酶活性","酶只受溫度影響","酶不受環境影響"],
  answer:1,
  explanation:"不同酶有不同最適 pH，pH會影響活性位離子化狀態。"
},
{
  id:"NEW-161",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["競爭性抑制"],
  question:"某抑制劑與底物結構相似，會和底物搶同一個活性位。這最符合哪一類抑制？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","回饋抑制"],
  answer:0,
  explanation:"與底物競爭活性位的為競爭性抑制。"
},
{
  id:"NEW-162",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["競爭性抑制","Km","Vmax"],
  question:"競爭性抑制下，若加入大量底物，有機會把抑制效果部分克服。其典型參數變化為？",
  options:["Km下降，Vmax下降","Km上升，Vmax不變","Km不變，Vmax下降","Km下降，Vmax不變"],
  answer:1,
  explanation:"競爭性抑制通常使表觀 Km 上升，但 Vmax 不變。"
},
{
  id:"NEW-163",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制"],
  question:"某抑制劑不和底物搶活性位，而是結合酶其他位置改變酶構形。這最可能屬於？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","酶活化"],
  answer:1,
  explanation:"非競爭性抑制結合活性位以外位置，常造成 Vmax 下降。"
},
{
  id:"NEW-164",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制","Km","Vmax"],
  question:"一般教科書中的非競爭性抑制，最典型的參數變化為何？",
  options:["Km上升，Vmax不變","Km不變，Vmax下降","Km下降，Vmax上升","Km與Vmax都不變"],
  answer:1,
  explanation:"非競爭性抑制常見 Km 不變、Vmax 下降。"
},
{
  id:"NEW-165",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["不可逆抑制"],
  question:"重金屬中毒造成某些酶永久失去活性，最符合哪一種抑制型態？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","短暫活化"],
  answer:2,
  explanation:"重金屬常導致酶不可逆失活。"
},
{
  id:"NEW-166",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk"],
  question:"若題目提到『雙倒數圖』用來分析酶動力學，這通常指的是？",
  options:["米氏曲線","Lineweaver-Burk 圖","散佈圖","滴定曲線"],
  answer:1,
  explanation:"Lineweaver-Burk 為酶動力學的雙倒數圖。"
},
{
  id:"NEW-167",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk","截距"],
  question:"在 Lineweaver-Burk 圖中，Y 截距代表哪一項？",
  options:["Km","-1/Km","1/Vmax","Vmax"],
  answer:2,
  explanation:"雙倒數圖的 Y 截距為 1/Vmax。"
},
{
  id:"NEW-168",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["Lineweaver-Burk","截距"],
  question:"在 Lineweaver-Burk 圖中，X 截距代表哪一項？",
  options:["1/Vmax","-1/Km","Km","Vmax"],
  answer:1,
  explanation:"雙倒數圖的 X 截距為 -1/Km。"
},
{
  id:"NEW-169",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["競爭性抑制","雙倒數圖"],
  question:"若加入競爭性抑制劑後，Lineweaver-Burk 圖通常會出現哪種趨勢？",
  options:["Y 截距不變、斜率增加","X 截距不變、Y 截距下降","Y 截距下降、斜率下降","X 截距與Y截距都不變"],
  answer:0,
  explanation:"競爭性抑制 Vmax 不變，因此 Y 截距不變；Km 上升使斜率增加。"
},
{
  id:"NEW-170",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["非競爭性抑制","雙倒數圖"],
  question:"若加入非競爭性抑制劑後，Lineweaver-Burk 圖通常最可能如何變化？",
  options:["Y 截距上升","Y 截距下降","X 截距變為0","斜率一定變小"],
  answer:0,
  explanation:"非競爭性抑制使 Vmax 下降，因此 1/Vmax 上升，Y 截距上升。"
},
{
  id:"NEW-171",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","蛋白質與酶"],
  question:"某蛋白質因序列改變而失去原本催化功能，這最能說明哪個觀念？",
  options:["功能與結構無關","蛋白質功能取決於其序列與結構","酶不屬於蛋白質","只要有R基就一定有催化能力"],
  answer:1,
  explanation:"蛋白質的結構由序列決定，結構進一步影響功能。"
},
{
  id:"NEW-172",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","疏水作用"],
  question:"蛋白質在水溶液中折疊時，許多疏水性胺基酸傾向埋在內部。最主要原因是？",
  options:["想靠近氧分子","避免與水接觸","容易形成離子鍵","可直接形成DNA"],
  answer:1,
  explanation:"疏水性側鏈通常聚集在內部以減少與水接觸。"
},
{
  id:"NEW-173",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","親水性"],
  question:"若某蛋白質表面大量分布帶電或極性胺基酸，最合理的解釋是？",
  options:["便於與水接觸","代表蛋白質一定失活","代表沒有一級結構","代表一定在膜內部"],
  answer:0,
  explanation:"表面常見親水性胺基酸以利與水環境接觸。"
},
{
  id:"NEW-174",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","專一性","結構"],
  question:"某藥物只會抑制某一類酶而不影響其他酶，這最能反映哪個概念？",
  options:["水的高比熱","酶的專一性與活性位結構","所有酶結構相同","所有蛋白質都能催化"],
  answer:1,
  explanation:"不同酶的活性位結構不同，因此具有專一性。"
},
{
  id:"NEW-175",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","代謝"],
  question:"細胞內若沒有酶，大多數代謝反應會如何？",
  options:["速度過慢難以維持生命","速度更快","完全不需活化能","一定往逆方向進行"],
  answer:0,
  explanation:"沒有酶時，多數生理反應速率太慢，難以支持生命。"
},
{
  id:"NEW-176",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","功能分類"],
  question:"下列哪一組『分子—主要功能』的配對最正確？",
  options:["DNA—催化；酶—遺傳資訊","酶—催化；脂質—儲能與膜結構","脂質—翻譯；RNA—儲存長期能量","蛋白質—只有結構功能"],
  answer:1,
  explanation:"酶催化反應；脂質負責儲能及膜結構。"
},
{
  id:"NEW-177",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","突變"],
  question:"若某蛋白質只改變一個胺基酸，但立體構型與功能都明顯改變，這最能說明什麼？",
  options:["一級結構改變可能影響高階結構與功能","所有突變都沒有影響","只有四級結構才重要","胺基酸種類不影響蛋白質"],
  answer:0,
  explanation:"一級結構改變可能透過摺疊影響整體結構與功能。"
},
{
  id:"NEW-178",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","反應後狀態"],
  question:"酶催化反應後，產物被釋放，酶本身通常？",
  options:["變成底物","恢復原狀可再參與反應","永遠失活","被分解成胺基酸"],
  answer:1,
  explanation:"酶反應後通常能恢復原狀並再利用。"
},
{
  id:"NEW-179",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","極性"],
  question:"水之所以能溶解許多離子與極性物質，主要是因為它本身？",
  options:["分子量大","具有極性","具有雙硫鍵","完全不形成氫鍵"],
  answer:1,
  explanation:"水的極性使其能與離子及極性分子作用。"
},
{
  id:"NEW-180",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","表面張力"],
  question:"昆蟲能短暫停留在水面，最主要與水的哪項性質有關？",
  options:["高表面張力","低比熱","高密度","弱極性"],
  answer:0,
  explanation:"水分子間內聚力造成高表面張力。"
},
{
  id:"NEW-181",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["水","密度"],
  question:"冬天湖面結冰但水中生物仍可存活，與下列哪項水的特性最相關？",
  options:["冰的密度比液態水小","冰的密度比液態水大","冰完全不含氫鍵","水在0°C密度最大"],
  answer:0,
  explanation:"冰密度較小所以浮在表面，下面仍有液態水。"
},
{
  id:"NEW-182",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","底物濃度","飽和"],
  question:"某學生說：『只要一直加底物，反應速率就會無限增加。』對一般米氏酶而言，這句話最大問題是什麼？",
  options:["忽略了酶會飽和","忽略了酶是脂質","忽略了水不夠","忽略了所有反應都沒有Vmax"],
  answer:0,
  explanation:"當活性位接近全被佔滿後，速率會接近 Vmax，不會無限增加。"
},
{
  id:"NEW-183",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶","Km","親和力"],
  question:"比較兩種酶：A 的 Km = 2 μM，B 的 Km = 20 μM。若其他條件相近，哪個敘述較合理？",
  options:["A 對底物親和力較低","B 對底物親和力較高","A 對底物親和力較高","兩者親和力一定相同"],
  answer:2,
  explanation:"Km 較小通常代表底物親和力較高。"
},
{
  id:"NEW-184",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質","酶","分類"],
  question:"下列哪一項最適合作為『蛋白質功能多樣性』的例子？",
  options:["同一種蛋白質同時一定做所有功能","蛋白質可作為結構、運輸、免疫與催化分子","蛋白質只負責儲能","蛋白質只存在肌肉"],
  answer:1,
  explanation:"蛋白質具有結構、運輸、免疫、催化等多種功能。"
},
{
  id:"NEW-185",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","醫學"],
  question:"醫師說某病人的某項代謝疾病與酶缺陷有關，這通常意味著病人體內哪一件事出了問題？",
  options:["代謝反應速率異常","DNA一定消失","脂質一定過多","所有蛋白質都失活"],
  answer:0,
  explanation:"酶缺陷常導致特定代謝途徑反應受阻或失衡。"
},
{
  id:"NEW-186",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","分子層次"],
  question:"『看似只是臨床症狀，背後其實可能是單一分子或單一胺基酸改變』，這種想法最符合哪一學科精神？",
  options:["組織學","生物化學","生態學","地質學"],
  answer:1,
  explanation:"生物化學強調從分子層次理解生命與疾病現象。"
},
{
  id:"NEW-187",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","關係判斷"],
  question:"下列哪一條敘述邏輯最完整？",
  options:["胺基酸序列改變→蛋白質結構可能改變→酶活性可能改變","水是極性→所有分子都不溶於水","酶能降低活化能→因此一定改變平衡常數","脂質可儲能→因此一定有催化能力"],
  answer:0,
  explanation:"胺基酸序列影響結構，結構再影響蛋白功能與酶活性。"
},
{
  id:"NEW-188",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶抑制","臨床"],
  question:"若某藥物設計目的是『模仿底物結構去卡住酶的活性位』，它最可能是利用哪種原理？",
  options:["競爭性抑制","非競爭性抑制","蛋白質變性","雙硫鍵形成"],
  answer:0,
  explanation:"模仿底物、搶活性位是競爭性抑制的典型概念。"
},
{
  id:"NEW-189",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["酶抑制","判斷"],
  question:"若某抑制劑即使加入大量底物也無法完全克服其效果，則此抑制劑較不可能是？",
  options:["競爭性抑制劑","非競爭性抑制劑","不可逆抑制劑","重金屬抑制劑"],
  answer:0,
  explanation:"競爭性抑制通常可透過提高底物濃度部分克服。"
},
{
  id:"NEW-190",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["酶","最適條件"],
  question:"某酶在不同 pH 下活性變化很大，這通常是因為 pH 會影響？",
  options:["酶與底物相關基團的離子化狀態","酶的一級結構完全消失","DNA序列改變","細胞膜厚度"],
  answer:0,
  explanation:"pH 會改變可電離基團狀態，進而影響結合與催化。"
},
{
  id:"NEW-191",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["蛋白質","臨床"],
  question:"某醫學檢驗發現蛋白質被強酸處理後沉澱、活性喪失。這最可能是因為？",
  options:["蛋白質被翻譯","蛋白質變性","形成更多肽鍵","變成核酸"],
  answer:1,
  explanation:"強酸可破壞蛋白質高階結構，導致變性與沉澱。"
},
{
  id:"NEW-192",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","定位"],
  question:"某蛋白質內部多數是 Val、Leu、Ile 這類殘基，最合理的推論是？",
  options:["蛋白質內部偏疏水","蛋白質一定帶正電","蛋白質無法摺疊","蛋白質一定在核酸表面"],
  answer:0,
  explanation:"Val、Leu、Ile 為疏水性胺基酸，常位於蛋白質內部。"
},
{
  id:"NEW-193",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["胺基酸","表面"],
  question:"若蛋白質表面富含 Asp、Glu、Lys、Arg 這類殘基，最合理的意義是？",
  options:["便於與水環境互動","一定形成雙硫鍵","代表蛋白質變性","代表蛋白質一定是脂質"],
  answer:0,
  explanation:"帶電胺基酸常有利於與水或其他極性分子互動。"
},
{
  id:"NEW-194",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","比較"],
  question:"下列哪一項最能同時連結 CH2 與 CH3 的核心觀念？",
  options:["酶的功能與其蛋白質結構密切相關","所有蛋白質都是核酸","所有胺基酸都能單獨催化反應","酶作用與蛋白質結構無關"],
  answer:0,
  explanation:"酶是蛋白質，其催化功能高度依賴結構。"
},
{
  id:"NEW-195",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","酶與病理"],
  question:"某基因突變導致酶活性位一個關鍵胺基酸改變，最直接可能造成什麼結果？",
  options:["底物辨識能力下降","DNA自動增加","脂質全部消失","pH變成固定值"],
  answer:0,
  explanation:"活性位胺基酸改變可能直接影響底物結合與催化。"
},
{
  id:"NEW-196",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","序列到功能"],
  question:"老師要求用一句話總結蛋白質：下列哪一個最完整？",
  options:["蛋白質只是能量來源","蛋白質由胺基酸組成，其序列決定結構，結構影響功能","蛋白質與酶無關","蛋白質只能存在血液中"],
  answer:1,
  explanation:"這是蛋白質最核心的整合觀念。"
},
{
  id:"NEW-197",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["綜合判斷"],
  question:"某研究發現一個新抑制劑會讓酶的最大速率下降，但底物親和力指標沒有明顯改變。最可能是哪一種抑制？",
  options:["競爭性抑制","非競爭性抑制","可逆競爭性活化","底物活化"],
  answer:1,
  explanation:"Vmax下降而Km不變，典型對應非競爭性抑制。"
},
{
  id:"NEW-198",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["綜合判斷"],
  question:"某抑制劑加入後，酶對底物看起來『比較不容易結合』，但若底物很多仍可達原本最大速率。這最符合？",
  options:["競爭性抑制","非競爭性抑制","不可逆抑制","酶變性"],
  answer:0,
  explanation:"Km上升但Vmax不變，符合競爭性抑制。"
},
{
  id:"NEW-199",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","學習重點"],
  question:"若要用一句話區分『親和力』與『飽和度』，哪一項最合理？",
  options:["親和力是結合能力；飽和度是活性位被底物佔滿的程度","親和力就是反應速率；飽和度就是pH","兩者完全相同","兩者都只看溫度"],
  answer:0,
  explanation:"親和力講結合傾向；飽和度講酶被底物佔滿的程度。"
},
{
  id:"NEW-200",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["整合","全章觀念"],
  question:"下列哪一個案例最符合『結構決定功能』？",
  options:["水有高比熱所以能穩定體溫","單一胺基酸突變導致血紅素功能異常","pH公式為-log[H+]","ATP含磷"],
  answer:1,
  explanation:"單一胺基酸改變導致蛋白質功能異常，是結構決定功能的典型例子。"
},
{
  id:"NEW-201",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"medium",
  tags:["整合","全章"],
  question:"下列哪一組配對最正確？",
  options:["Km小—親和力低；競爭性抑制—Vmax下降","Km小—親和力高；非競爭性抑制—Vmax下降","Km大—親和力高；競爭性抑制—Km下降","Km大—親和力低；非競爭性抑制—Vmax上升"],
  answer:1,
  explanation:"Km小代表親和力高；非競爭性抑制典型為Vmax下降。"
},
{
  id:"NEW-202",
  chapter:"CH1-CH3 整合",
  section:"情境整合",
  difficulty:"hard",
  tags:["總整合","模擬考壓軸"],
  question:"某病患因基因突變導致酶的一級結構改變，造成活性位構形異常，使底物不易結合，代謝反應受阻。這段描述依序最合理地串聯了哪三個概念？",
  options:[
    "DNA變化→蛋白質結構改變→酶功能改變",
    "脂質變化→水分子改變→DNA複製",
    "pH改變→胺基酸消失→膜流動性改變",
    "ATP增加→蛋白質不折疊→緩衝系統失效"
  ],
  answer:0,
  explanation:"這題整合基因、蛋白質結構與酶功能三層概念，是整章核心。"
},
{
  id:"HARD-001",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","溫度","變性"],
  question:"小安感冒發燒到 40°C，媽媽說：「身體裡很多反應速度會先變快，但如果溫度再高太多，反而會出問題。」這句話最適合用下列哪個觀念解釋？",
  options:[
    "高溫會讓所有酶永久保持最高活性",
    "酶活性會隨溫度上升而無限增加",
    "溫度上升初期可能加快反應，但過高會使蛋白質變性而失活",
    "發燒時所有蛋白質都會直接分解成胺基酸"
  ],
  answer:2,
  explanation:"酶活性通常在一定範圍內隨溫度上升而增加，但過高溫度會破壞蛋白質結構，造成變性與活性下降。"
},
{
  id:"HARD-002",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","pH","最適環境"],
  question:"胃藥廣告常說某些藥物會降低胃酸。若一種主要在胃中作用的酶原本最適合強酸環境，服藥後胃內 pH 上升，該酶活性最可能如何變化？",
  options:[
    "上升，因為所有酶都喜歡中性環境",
    "下降，因為 pH 改變會影響酶活性位與相關基團的離子化狀態",
    "完全不變，因為酶只受溫度影響",
    "先下降再永久變成脂質"
  ],
  answer:1,
  explanation:"不同酶有不同最適 pH。胃中的酶通常偏好酸性，pH 上升可能使其活性下降。"
},
{
  id:"HARD-003",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["蛋白質","變性","烹調"],
  question:"煎蛋時，原本透明的蛋白逐漸變白並凝固。若以生物化學觀點解釋，最合理的是下列哪一項？",
  options:[
    "蛋白質被轉錄成 RNA",
    "高溫使蛋白質高階結構被破壞並重新聚集",
    "蛋白質的一級結構全部斷裂",
    "蛋白質被高溫轉變成醣類"
  ],
  answer:1,
  explanation:"加熱使蛋白質變性，高階結構被破壞並暴露疏水區，進一步造成聚集與凝固。"
},
{
  id:"HARD-004",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["蛋白質","疏水作用","生活"],
  question:"有人把洗好的豆漿放太久後加熱，發現上面出現明顯蛋白質凝結層。若忽略微生物因素，從蛋白質本身來看，最可能與哪個現象有關？",
  options:[
    "蛋白質疏水區暴露後彼此聚集",
    "胺基酸全部變成無機鹽",
    "蛋白質一級結構完全消失",
    "所有極性胺基酸都轉為非極性"
  ],
  answer:0,
  explanation:"蛋白質變性後疏水區域暴露，容易彼此聚集沉澱。"
},
{
  id:"HARD-005",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["緩衝系統","運動","酸鹼"],
  question:"阿哲跑完高強度衝刺後覺得全身發酸。雖然體內會短時間產生較多酸性代謝物，但血液 pH 不會立刻劇烈崩壞，最主要是因為？",
  options:[
    "血液裡沒有酸性物質",
    "體內有緩衝系統可暫時抵抗 pH 劇烈變動",
    "所有酸都會立刻變成氧氣",
    "血紅素只負責運氧，與酸鹼無關"
  ],
  answer:1,
  explanation:"體內多種緩衝系統可協助抵抗短時間內的 pH 劇烈改變。"
},
{
  id:"HARD-006",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["pH","比較","生活化"],
  question:"若兩瓶清潔液分別標示 pH 3 與 pH 5，店員說兩者「只差 2 而已」。從酸性強度來看，哪個說法最正確？",
  options:[
    "pH 3 只比 pH 5 酸 2 倍",
    "pH 3 比 pH 5 酸 20 倍",
    "pH 3 比 pH 5 酸 100 倍",
    "無法比較，因為 pH 不是對數尺度"
  ],
  answer:2,
  explanation:"pH 每差 1 代表 [H+] 差 10 倍，因此差 2 代表酸性差 100 倍。"
},
{
  id:"HARD-007",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["水","高比熱","生活"],
  question:"夏天中午，柏油路很快燙到不能踩，但泳池裡的水升溫相對慢得多。這種差異最能反映水的哪種性質？",
  options:[
    "高比熱",
    "低密度",
    "高酸性",
    "不可形成氫鍵"
  ],
  answer:0,
  explanation:"水的高比熱使溫度變化較慢，因此可緩衝環境溫度劇烈變化。"
},
{
  id:"HARD-008",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["水","蒸發熱","生活"],
  question:"運動員在炎熱天氣下流汗後，若有風吹過會覺得更涼。從分子角度看，最主要是因為？",
  options:[
    "風會直接把體溫吹成固定值",
    "水蒸發時需要吸收熱量，帶走皮膚表面的熱",
    "汗水本身會產生冷氣效果",
    "風能讓蛋白質全部失活"
  ],
  answer:1,
  explanation:"汗液蒸發需吸收熱量，因此能帶走皮膚表面熱能，造成降溫。"
},
{
  id:"HARD-009",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","競爭性抑制","藥物"],
  question:"某藥物的設計理念是「長得很像底物，先去卡住酶的活性位，讓真正底物比較難進去」。若只從描述判斷，這最可能是哪一類抑制？",
  options:[
    "競爭性抑制",
    "非競爭性抑制",
    "不可逆抑制",
    "變性作用"
  ],
  answer:0,
  explanation:"與底物相似並搶占活性位，屬競爭性抑制。"
},
{
  id:"HARD-010",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","競爭性抑制","Km","Vmax"],
  question:"承上題，若該藥物確定為競爭性抑制劑，則在酶動力學上最典型的變化為何？",
  options:[
    "Km 上升，Vmax 不變",
    "Km 不變，Vmax 下降",
    "Km 下降，Vmax 上升",
    "Km 與 Vmax 都一定不變"
  ],
  answer:0,
  explanation:"競爭性抑制會使表觀 Km 上升，但在足夠高底物下仍可達原本 Vmax。"
},
{
  id:"HARD-011",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","非競爭性抑制","藥物"],
  question:"另一種藥物不是去搶活性位，而是黏在酶其他位置，讓酶形狀改變，底物就算進得去也難順利反應。這最符合哪種抑制？",
  options:[
    "競爭性抑制",
    "非競爭性抑制",
    "底物活化",
    "單純增加酶濃度"
  ],
  answer:1,
  explanation:"結合於活性位外、改變酶構形的典型描述為非競爭性抑制。"
},
{
  id:"HARD-012",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["酶","非競爭性抑制","Vmax"],
  question:"若某抑制劑屬非競爭性抑制，下列哪一種結果最可能出現？",
  options:[
    "底物加越多就一定完全恢復原本最大速率",
    "Vmax 下降，因為可正常作用的酶數量等效減少",
    "Km 一定降到 0",
    "酶會直接變成產物"
  ],
  answer:1,
  explanation:"非競爭性抑制通常使 Vmax 下降，且無法單靠增加底物完全克服。"
},
{
  id:"HARD-013",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["Km","親和力","比較"],
  question:"有兩種酶都催化同類反應，A 酶 Km = 2 mM，B 酶 Km = 20 mM。若只比較底物親和力，下列何者最合理？",
  options:[
    "A 親和力較高",
    "B 親和力較高",
    "兩者親和力相同",
    "僅由 Km 可知 A 一定比較快"
  ],
  answer:0,
  explanation:"Km 較小通常代表酶對底物的親和力較高。"
},
{
  id:"HARD-014",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["Vmax","酶濃度"],
  question:"某食品工廠想加快一酶促反應，但底物已經非常充足且接近飽和。若只考慮單一因素，最有效的做法通常是？",
  options:[
    "再無限增加底物",
    "增加酶濃度",
    "把 pH 調成任意值都行",
    "讓反應永遠在 0°C 進行"
  ],
  answer:1,
  explanation:"在底物已近飽和時，增加酶濃度較能提高 Vmax 與整體反應速率。"
},
{
  id:"HARD-015",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["蛋白質","序列到功能","生活疾病"],
  question:"某遺傳疾病只差一個胺基酸，卻讓蛋白質功能大幅改變。這最能說明哪個核心觀念？",
  options:[
    "只要差一個胺基酸就完全不重要",
    "蛋白質的一級結構改變可能影響整體結構與功能",
    "蛋白質功能只取決於數量，不取決於結構",
    "所有突變都只影響脂質"
  ],
  answer:1,
  explanation:"胺基酸序列改變可能導致折疊改變，進而影響蛋白質功能。"
},
{
  id:"HARD-016",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["鐮刀型貧血","案例"],
  question:"某病人在高海拔缺氧時特別容易出現紅血球變形與循環問題。若從課本典型案例聯想，最可能對應哪種疾病機制？",
  options:[
    "血紅素單一胺基酸改變造成構型與功能異常",
    "所有脂質被分解",
    "水分子鍵角改變",
    "DNA 全部變成 RNA"
  ],
  answer:0,
  explanation:"這是鐮刀型貧血的典型概念：單一胺基酸突變影響血紅素性質。"
},
{
  id:"HARD-017",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["胺基酸","疏水性","折疊"],
  question:"若某蛋白質表面原本一個帶電胺基酸突變成疏水性胺基酸，最可能造成什麼影響？",
  options:[
    "一定完全沒有影響",
    "可能改變蛋白質與水的互動，進而影響折疊或穩定性",
    "會直接讓 DNA 斷裂",
    "會讓所有肽鍵消失"
  ],
  answer:1,
  explanation:"表面殘基若由親水轉為疏水，可能改變蛋白質的水溶性與結構穩定性。"
},
{
  id:"HARD-018",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["蛋白質","雙硫鍵","生活"],
  question:"有些洗髮或燙髮相關原理會提到先破壞、再重建角蛋白中的某些鍵，以改變頭髮型態。若對應到蛋白質化學，最相關的鍵為？",
  options:[
    "肽鍵",
    "磷酸二酯鍵",
    "雙硫鍵",
    "糖苷鍵"
  ],
  answer:2,
  explanation:"頭髮角蛋白中的雙硫鍵與形狀穩定性密切相關。"
},
{
  id:"HARD-019",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["Lineweaver-Burk","圖形判讀"],
  question:"老師畫出雙倒數圖後說：「加了某抑制劑後，Y 截距明顯往上跑。」在最典型教材情況下，這最支持下列哪一種判斷？",
  options:[
    "Vmax 下降",
    "Km 一定下降",
    "底物濃度變成 0",
    "酶一定增加了"
  ],
  answer:0,
  explanation:"Lineweaver-Burk 圖的 Y 截距為 1/Vmax，往上表示 Vmax 下降。"
},
{
  id:"HARD-020",
  chapter:"CH1-CH3 整合",
  section:"高難度生活情境",
  difficulty:"hard",
  tags:["總整合","生活案例"],
  question:"某病人因基因突變導致酶活性位附近胺基酸被替換，結果底物不易結合、代謝途徑效率下降。這個案例依序整合了哪三層概念？",
  options:[
    "DNA 改變 → 蛋白質結構改變 → 酶功能改變",
    "脂質改變 → 水分子改變 → pH 改變",
    "酶濃度改變 → DNA 消失 → 蛋白質複製",
    "水蒸發 → 蛋白質凝固 → 中心法則改變"
  ],
  answer:0,
  explanation:"這題整合了基因、蛋白質結構與酶功能，是高層次情境題的典型。"
},
{
  id:"HARD-021",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["酶","溫度"],
  question:"某人在泡溫泉時覺得身體代謝似乎加快，但泡太久反而頭暈無力。這最合理的生化解釋為何？",
  options:[
    "溫度越高酶永遠越活躍",
    "適度升溫提升反應速率，但過高會導致酶變性",
    "酶與溫度完全無關",
    "所有酶在高溫會轉變為DNA"
  ],
  answer:1,
  explanation:"溫度升高初期增加酶活性，但過高會造成蛋白質變性。"
},
{
  id:"HARD-022",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["水","氫鍵"],
  question:"冰塊浮在水面上，而不是沉下去，這現象最主要與水的哪種特性有關？",
  options:[
    "水的極性與氫鍵形成特殊結構",
    "水的分子量很小",
    "水無法形成氫鍵",
    "水完全沒有密度差異"
  ],
  answer:0,
  explanation:"氫鍵使冰形成較鬆散結構，密度較低而浮起。"
},
{
  id:"HARD-023",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["pH","飲料"],
  question:"長期喝酸性飲料可能影響牙齒，若某飲料 pH = 2，另一為 pH = 4，則前者酸性約為後者的多少倍？",
  options:[
    "2倍",
    "4倍",
    "100倍",
    "1000倍"
  ],
  answer:2,
  explanation:"pH 差2代表氫離子濃度差100倍。"
},
{
  id:"HARD-024",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["酶","底物濃度"],
  question:"某餐廳增加食材供應量，但廚房反應速度沒有再明顯提升，最可能原因是？",
  options:[
    "酶已接近飽和",
    "底物越多反應一定越快",
    "酶數量無限制增加",
    "底物會抑制酶"
  ],
  answer:0,
  explanation:"當酶飽和時，再增加底物無法顯著提升速率。"
},
{
  id:"HARD-025",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["蛋白質","結構"],
  question:"某蛋白質因環境改變導致三級結構破壞，但胺基酸序列仍在，此現象稱為？",
  options:[
    "轉錄",
    "變性",
    "複製",
    "翻譯"
  ],
  answer:1,
  explanation:"變性指高階結構破壞但一級結構仍存在。"
},
{
  id:"HARD-026",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["酶","Km"],
  question:"某酶在低底物濃度下仍能有效作用，表示其Km值如何？",
  options:[
    "很高",
    "很低",
    "等於0",
    "不影響"
  ],
  answer:1,
  explanation:"Km低代表高親和力。"
},
{
  id:"HARD-027",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["蛋白質","疏水"],
  question:"油與水不互溶的現象，與蛋白質折疊中的哪種力最相關？",
  options:[
    "離子鍵",
    "共價鍵",
    "疏水作用",
    "氫鍵"
  ],
  answer:2,
  explanation:"疏水作用會使非極性分子遠離水。"
},
{
  id:"HARD-028",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["酶","抑制"],
  question:"某毒素會永久破壞酶結構，使其無法恢復活性，這屬於？",
  options:[
    "競爭性抑制",
    "非競爭性抑制",
    "不可逆抑制",
    "可逆抑制"
  ],
  answer:2,
  explanation:"不可逆抑制會永久失活酶。"
},
{
  id:"HARD-029",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["水","極性"],
  question:"水能溶解多種離子物質，主要原因為？",
  options:[
    "水沒有電荷",
    "水為極性分子",
    "水是非極性",
    "水沒有氫"
  ],
  answer:1,
  explanation:"水的極性使其能與離子互動。"
},
{
  id:"HARD-030",
  chapter:"整合",
  section:"生活情境",
  difficulty:"hard",
  tags:["蛋白質","胺基酸"],
  question:"若某蛋白質中大量疏水胺基酸暴露於外，最可能造成什麼結果？",
  options:[
    "更穩定",
    "更易溶於水",
    "容易聚集沉澱",
    "完全不變"
  ],
  answer:2,
  explanation:"疏水區暴露會導致聚集。"
}
];

const HIGH_DIFFICULTY_EXAM = [
  {
    id:"EXAM-001",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","溫度","變性"],
    question:"小安感冒發燒到 40°C，媽媽說：「身體裡很多反應速度會先變快，但如果溫度再高太多，反而會出問題。」這句話最適合用下列哪個觀念解釋？",
    options:[
      "高溫會讓所有酶永久保持最高活性",
      "酶活性會隨溫度上升而無限增加",
      "溫度上升初期可能加快反應，但過高會使蛋白質變性而失活",
      "發燒時所有蛋白質都會直接分解成胺基酸"
    ],
    answer:2,
    explanation:"酶活性通常在一定範圍內隨溫度上升而增加，但過高溫度會破壞蛋白質結構。"
  },
  {
    id:"EXAM-002",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","pH","最適環境"],
    question:"胃藥廣告常說某些藥物會降低胃酸。若一種主要在胃中作用的酶原本最適合強酸環境，服藥後胃內 pH 上升，該酶活性最可能如何變化？",
    options:[
      "上升，因為所有酶都喜歡中性環境",
      "下降，因為 pH 改變會影響酶活性位與相關基團的離子化狀態",
      "完全不變，因為酶只受溫度影響",
      "先下降再永久變成脂質"
    ],
    answer:1,
    explanation:"不同酶有不同最適 pH，胃中的酶通常偏好酸性。"
  },
  {
    id:"EXAM-003",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","變性","烹調"],
    question:"煎蛋時，原本透明的蛋白逐漸變白並凝固。若以生物化學觀點解釋，最合理的是下列哪一項？",
    options:[
      "蛋白質被轉錄成 RNA",
      "高溫使蛋白質高階結構被破壞並重新聚集",
      "蛋白質的一級結構全部斷裂",
      "蛋白質被高溫轉變成醣類"
    ],
    answer:1,
    explanation:"加熱使蛋白質變性並聚集，因此呈現白色凝固。"
  },
  {
    id:"EXAM-004",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","疏水作用"],
    question:"某人把豆漿放久後再加熱，表面出現明顯凝結層。若忽略微生物因素，最合理的生化解釋為何？",
    options:[
      "蛋白質疏水區暴露後彼此聚集",
      "胺基酸全部變成無機鹽",
      "蛋白質一級結構完全消失",
      "所有極性胺基酸都轉成非極性"
    ],
    answer:0,
    explanation:"蛋白質變性後疏水區暴露，容易互相聚集沉澱。"
  },
  {
    id:"EXAM-005",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","運動","酸鹼"],
    question:"阿哲跑完高強度衝刺後覺得全身發酸。雖然體內短時間會產生較多酸性代謝物，但血液 pH 不會立刻劇烈崩壞，最主要是因為？",
    options:[
      "血液裡沒有酸性物質",
      "體內有緩衝系統可暫時抵抗 pH 劇烈變動",
      "所有酸都會立刻變成氧氣",
      "血紅素只負責運氧，與酸鹼無關"
    ],
    answer:1,
    explanation:"體內多種緩衝系統可協助穩定 pH。"
  },
  {
    id:"EXAM-006",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","比較"],
    question:"若兩瓶清潔液分別標示 pH 3 與 pH 5，從酸性強度來看，哪個說法最正確？",
    options:[
      "pH 3 只比 pH 5 酸 2 倍",
      "pH 3 比 pH 5 酸 20 倍",
      "pH 3 比 pH 5 酸 100 倍",
      "無法比較，因為 pH 不是對數尺度"
    ],
    answer:2,
    explanation:"pH 每差 1 代表 [H+] 差 10 倍，因此差 2 為 100 倍。"
  },
  {
    id:"EXAM-007",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高比熱"],
    question:"夏天中午，柏油路很快燙到不能踩，但泳池裡的水升溫相對慢得多。這種差異最能反映水的哪種性質？",
    options:[
      "高比熱",
      "低密度",
      "高酸性",
      "不可形成氫鍵"
    ],
    answer:0,
    explanation:"水的高比熱使溫度變化較慢。"
  },
  {
    id:"EXAM-008",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","蒸發熱"],
    question:"運動員在炎熱天氣下流汗後，若有風吹過會覺得更涼。最主要是因為？",
    options:[
      "風會直接把體溫吹成固定值",
      "水蒸發時需要吸收熱量，帶走皮膚表面的熱",
      "汗水本身會產生冷氣效果",
      "風能讓蛋白質全部失活"
    ],
    answer:1,
    explanation:"汗液蒸發需吸收熱量，因此可降溫。"
  },
  {
    id:"EXAM-009",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","競爭性抑制","藥物"],
    question:"某藥物的設計理念是「長得很像底物，先去卡住酶的活性位，讓真正底物比較難進去」。若只從描述判斷，這最可能是哪一類抑制？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "變性作用"
    ],
    answer:0,
    explanation:"與底物相似並搶占活性位，屬競爭性抑制。"
  },
  {
    id:"EXAM-010",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","競爭性抑制","Km","Vmax"],
    question:"承上題，若該藥物確定為競爭性抑制劑，則最典型的酶動力學變化為何？",
    options:[
      "Km 上升，Vmax 不變",
      "Km 不變，Vmax 下降",
      "Km 下降，Vmax 上升",
      "Km 與 Vmax 都一定不變"
    ],
    answer:0,
    explanation:"競爭性抑制通常使表觀 Km 上升，但在足夠底物下 Vmax 不變。"
  },
  {
    id:"EXAM-011",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","非競爭性抑制","藥物"],
    question:"另一種藥物不是去搶活性位，而是黏在酶其他位置，讓酶形狀改變，底物就算進得去也難順利反應。這最符合哪種抑制？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "底物活化",
      "單純增加酶濃度"
    ],
    answer:1,
    explanation:"結合於活性位外並改變酶構形，屬非競爭性抑制。"
  },
  {
    id:"EXAM-012",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","非競爭性抑制","Vmax"],
    question:"若某抑制劑屬非競爭性抑制，下列哪一種結果最可能出現？",
    options:[
      "底物加越多就一定完全恢復原本最大速率",
      "Vmax 下降，因為可正常作用的酶數量等效減少",
      "Km 一定降到 0",
      "酶會直接變成產物"
    ],
    answer:1,
    explanation:"非競爭性抑制典型表現為 Vmax 下降。"
  },
  {
    id:"EXAM-013",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km","親和力"],
    question:"有兩種酶都催化同類反應，A 酶 Km = 2 mM，B 酶 Km = 20 mM。若只比較底物親和力，下列何者最合理？",
    options:[
      "A 親和力較高",
      "B 親和力較高",
      "兩者親和力相同",
      "僅由 Km 可知 A 一定比較快"
    ],
    answer:0,
    explanation:"Km 較小通常代表較高的底物親和力。"
  },
  {
    id:"EXAM-014",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Vmax","酶濃度"],
    question:"某食品工廠想加快一酶促反應，但底物已經非常充足且接近飽和。若只考慮單一因素，最有效的做法通常是？",
    options:[
      "再無限增加底物",
      "增加酶濃度",
      "把 pH 調成任意值都行",
      "讓反應永遠在 0°C 進行"
    ],
    answer:1,
    explanation:"當底物已近飽和時，增加酶濃度較能提高 Vmax。"
  },
  {
    id:"EXAM-015",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","序列到功能"],
    question:"某遺傳疾病只差一個胺基酸，卻讓蛋白質功能大幅改變。這最能說明哪個核心觀念？",
    options:[
      "只要差一個胺基酸就完全不重要",
      "蛋白質的一級結構改變可能影響整體結構與功能",
      "蛋白質功能只取決於數量，不取決於結構",
      "所有突變都只影響脂質"
    ],
    answer:1,
    explanation:"一級結構改變可能透過摺疊影響蛋白質功能。"
  },
  {
    id:"EXAM-016",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鐮刀型貧血","案例"],
    question:"某病人在高海拔缺氧時特別容易出現紅血球變形與循環問題。若從典型教材案例聯想，最可能對應哪種疾病機制？",
    options:[
      "血紅素單一胺基酸改變造成構型與功能異常",
      "所有脂質被分解",
      "水分子鍵角改變",
      "DNA 全部變成 RNA"
    ],
    answer:0,
    explanation:"這是鐮刀型貧血的典型概念。"
  },
  {
    id:"EXAM-017",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["胺基酸","疏水性","折疊"],
    question:"若某蛋白質表面原本一個帶電胺基酸突變成疏水性胺基酸，最可能造成什麼影響？",
    options:[
      "一定完全沒有影響",
      "可能改變蛋白質與水的互動，進而影響折疊或穩定性",
      "會直接讓 DNA 斷裂",
      "會讓所有肽鍵消失"
    ],
    answer:1,
    explanation:"表面殘基由親水轉為疏水，可能影響水溶性與折疊。"
  },
  {
    id:"EXAM-018",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","雙硫鍵","生活"],
    question:"有些洗髮或燙髮相關原理會提到先破壞、再重建角蛋白中的某些鍵，以改變頭髮型態。最相關的鍵為？",
    options:[
      "肽鍵",
      "磷酸二酯鍵",
      "雙硫鍵",
      "糖苷鍵"
    ],
    answer:2,
    explanation:"頭髮角蛋白中的雙硫鍵與形狀穩定性密切相關。"
  },
  {
    id:"EXAM-019",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk","圖形判讀"],
    question:"老師畫出雙倒數圖後說：「加了某抑制劑後，Y 截距明顯往上跑。」在最典型教材情況下，這最支持下列哪一種判斷？",
    options:[
      "Vmax 下降",
      "Km 一定下降",
      "底物濃度變成 0",
      "酶一定增加了"
    ],
    answer:0,
    explanation:"Lineweaver-Burk 圖的 Y 截距為 1/Vmax，往上表示 Vmax 下降。"
  },
  {
    id:"EXAM-020",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["總整合"],
    question:"某病人因基因突變導致酶活性位附近胺基酸被替換，結果底物不易結合、代謝途徑效率下降。這個案例依序整合了哪三層概念？",
    options:[
      "DNA 改變 → 蛋白質結構改變 → 酶功能改變",
      "脂質改變 → 水分子改變 → pH 改變",
      "酶濃度改變 → DNA 消失 → 蛋白質複製",
      "水蒸發 → 蛋白質凝固 → 中心法則改變"
    ],
    answer:0,
    explanation:"這題整合基因、蛋白質結構與酶功能。"
  },
  {
    id:"EXAM-021",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","溫度"],
    question:"某人在泡溫泉時覺得身體代謝似乎加快，但泡太久反而頭暈無力。這最合理的生化解釋為何？",
    options:[
      "溫度越高酶永遠越活躍",
      "適度升溫提升反應速率，但過高會導致酶變性",
      "酶與溫度完全無關",
      "所有酶在高溫會轉變為DNA"
    ],
    answer:1,
    explanation:"適度升溫可提升速率，但過高溫度會使酶失活。"
  },
  {
    id:"EXAM-022",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","氫鍵"],
    question:"冰塊浮在水面上，而不是沉下去，這現象最主要與水的哪種特性有關？",
    options:[
      "水的極性與氫鍵形成特殊結構",
      "水的分子量很小",
      "水無法形成氫鍵",
      "水完全沒有密度差異"
    ],
    answer:0,
    explanation:"冰中氫鍵排列較鬆散，使密度較低。"
  },
  {
    id:"EXAM-023",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","飲料"],
    question:"長期喝酸性飲料可能影響牙齒，若某飲料 pH = 2，另一為 pH = 4，則前者酸性約為後者的多少倍？",
    options:[
      "2倍",
      "4倍",
      "100倍",
      "1000倍"
    ],
    answer:2,
    explanation:"pH 差 2，酸性相差 10²。"
  },
  {
    id:"EXAM-024",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","底物濃度"],
    question:"某餐廳增加食材供應量，但廚房反應速度沒有再明顯提升，最可能原因是？",
    options:[
      "酶已接近飽和",
      "底物越多反應一定越快",
      "酶數量無限制增加",
      "底物會抑制酶"
    ],
    answer:0,
    explanation:"當酶達飽和後，再增加底物效果有限。"
  },
  {
    id:"EXAM-025",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","結構"],
    question:"某蛋白質因環境改變導致三級結構破壞，但胺基酸序列仍在，此現象稱為？",
    options:[
      "轉錄",
      "變性",
      "複製",
      "翻譯"
    ],
    answer:1,
    explanation:"這是蛋白質變性。"
  },
  {
    id:"EXAM-026",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","Km"],
    question:"某酶在低底物濃度下仍能有效作用，表示其 Km 值如何？",
    options:[
      "很高",
      "很低",
      "等於0",
      "不影響"
    ],
    answer:1,
    explanation:"Km 低代表對底物親和力高。"
  },
  {
    id:"EXAM-027",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","疏水"],
    question:"油與水不互溶的現象，與蛋白質折疊中的哪種力最相關？",
    options:[
      "離子鍵",
      "共價鍵",
      "疏水作用",
      "氫鍵"
    ],
    answer:2,
    explanation:"非極性分子傾向彼此聚集、遠離水。"
  },
  {
    id:"EXAM-028",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","抑制"],
    question:"某毒素會永久破壞酶結構，使其無法恢復活性，這屬於？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "可逆抑制"
    ],
    answer:2,
    explanation:"永久失活對應不可逆抑制。"
  },
  {
    id:"EXAM-029",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","極性"],
    question:"水能溶解多種離子物質，主要原因為？",
    options:[
      "水沒有電荷",
      "水為極性分子",
      "水是非極性",
      "水沒有氫"
    ],
    answer:1,
    explanation:"水的極性有利於與離子和極性分子作用。"
  },
  {
    id:"EXAM-030",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","胺基酸"],
    question:"若某蛋白質中大量疏水胺基酸暴露於外，最可能造成什麼結果？",
    options:[
      "更穩定",
      "更易溶於水",
      "容易聚集沉澱",
      "完全不變"
    ],
    answer:2,
    explanation:"疏水區暴露會增加聚集傾向。"
  },
  {
    id:"EXAM-031",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","呼吸"],
    question:"運動後呼吸加快有助於調整血液 pH，主要涉及哪個觀念？",
    options:[
      "緩衝系統與酸鹼平衡調節",
      "DNA複製增加",
      "蛋白質合成停止",
      "脂質自動分解"
    ],
    answer:0,
    explanation:"呼吸可協助調節 CO2，進而影響重碳酸鹽緩衝系統。"
  },
  {
    id:"EXAM-032",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["兩性分子","生活"],
    question:"洗碗精能去油，最主要是因為其分子同時具有親水端與疏水端。這樣的設計最能對應哪個概念？",
    options:[
      "極性與非極性區域協同作用",
      "DNA 雙股螺旋",
      "酶活性位專一性",
      "雙硫鍵重排"
    ],
    answer:0,
    explanation:"親水端與疏水端可同時接觸水與油脂。"
  },
  {
    id:"EXAM-033",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km","突變"],
    question:"某酶突變後，Km 上升但 Vmax 不變，最合理的解讀是？",
    options:[
      "與底物親和力下降",
      "與底物親和力上升",
      "酶數量大幅增加",
      "酶完全失活"
    ],
    answer:0,
    explanation:"Km 上升通常表示底物親和力下降。"
  },
  {
    id:"EXAM-034",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血液","酸鹼"],
    question:"血液 pH 能維持在狹窄範圍，最主要依賴？",
    options:[
      "緩衝系統",
      "蛋白質全部不變性",
      "水完全中性",
      "脂質持續增加"
    ],
    answer:0,
    explanation:"體內緩衝系統可減少 pH 劇烈波動。"
  },
  {
    id:"EXAM-035",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質","鹽析"],
    question:"高鹽環境有時會使蛋白質沉澱，最主要原因是？",
    options:[
      "離子強度改變影響蛋白質與水的互動",
      "DNA 被直接破壞",
      "酶被大量生成",
      "水的鍵角變成180度"
    ],
    answer:0,
    explanation:"高鹽可能削弱蛋白質外層水合作用而造成沉澱。"
  },
  {
    id:"EXAM-036",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk"],
    question:"Lineweaver-Burk 圖中的 X 截距最典型代表？",
    options:[
      "-1/Km",
      "1/Vmax",
      "Km",
      "Vmax"
    ],
    answer:0,
    explanation:"雙倒數圖 X 截距為 -1/Km。"
  },
  {
    id:"EXAM-037",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["發燒","蛋白質"],
    question:"發燒過高可能危及生命，最相關的生物化學原因之一是？",
    options:[
      "蛋白質可能大量變性",
      "DNA 一定立刻消失",
      "所有水分子都蒸發",
      "脂質全部氧化完"
    ],
    answer:0,
    explanation:"關鍵蛋白與酶失去功能會嚴重影響生理。"
  },
  {
    id:"EXAM-038",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["缺氧","代謝"],
    question:"高山缺氧時，部分代謝反應效率會受影響，最主要是因為？",
    options:[
      "部分反應與能量代謝流程受阻",
      "水的密度變高",
      "脂質全部固化",
      "pH 一定不再變動"
    ],
    answer:0,
    explanation:"缺氧會影響能量代謝相關反應。"
  },
  {
    id:"EXAM-039",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["四級結構","功能"],
    question:"若某多亞基蛋白質的四級結構組裝錯誤，最可能直接影響？",
    options:[
      "功能表現",
      "水的密度",
      "pH公式",
      "DNA雙螺旋固定消失"
    ],
    answer:0,
    explanation:"多亞基蛋白質功能常依賴正確的四級結構。"
  },
  {
    id:"EXAM-040",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["脂質","能量"],
    question:"油脂每克可提供較高熱量，從化學上最合理的原因是？",
    options:[
      "還原程度高、可提供較多能量",
      "含氧量最高",
      "極性最強",
      "最容易溶於水"
    ],
    answer:0,
    explanation:"脂質分子較還原，可在氧化時釋放較多能量。"
  },
  {
    id:"EXAM-041",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["非競爭性抑制"],
    question:"某藥物會讓 Vmax 下降但 Km 大致不變，這最符合下列哪種抑制？",
    options:[
      "非競爭性抑制",
      "競爭性抑制",
      "單純增加底物",
      "誘導契合"
    ],
    answer:0,
    explanation:"這是非競爭性抑制的典型特徵。"
  },
  {
    id:"EXAM-042",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["汗液","蒸發"],
    question:"汗蒸發能幫助身體散熱，關鍵在於？",
    options:[
      "蒸發吸熱",
      "氫鍵完全消失",
      "DNA 自動修復",
      "酶濃度上升"
    ],
    answer:0,
    explanation:"蒸發過程需吸收能量，因此帶走熱。"
  },
  {
    id:"EXAM-043",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["變性"],
    question:"蛋白質失去原本功能，但未完全分解成胺基酸，這通常稱為？",
    options:[
      "變性",
      "水解",
      "複製",
      "翻譯"
    ],
    answer:0,
    explanation:"變性是高階結構與功能喪失，不一定斷開肽鍵。"
  },
  {
    id:"EXAM-044",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["專一性","活性位"],
    question:"酶的專一性最主要源自於？",
    options:[
      "活性位的立體與化學特性",
      "水的極性",
      "pH 恆定不變",
      "溫度完全固定"
    ],
    answer:0,
    explanation:"酶活性位決定其對底物的辨識能力。"
  },
  {
    id:"EXAM-045",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["底物飽和"],
    question:"在高底物濃度下，反應速率幾乎不再上升，最合理的原因是？",
    options:[
      "酶的活性位已接近全被佔滿",
      "酶全部被分解",
      "水不再存在",
      "pH 一定變成 0"
    ],
    answer:0,
    explanation:"這是酶接近飽和的典型現象。"
  },
  {
    id:"EXAM-046",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["摺疊錯誤","疾病"],
    question:"蛋白質摺疊錯誤最可能造成什麼後果？",
    options:[
      "疾病或功能異常",
      "水直接變鹼性",
      "脂質全部增加",
      "DNA 一定變短"
    ],
    answer:0,
    explanation:"錯誤摺疊可能導致聚集、失能與疾病。"
  },
  {
    id:"EXAM-047",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血紅素","突變"],
    question:"血紅素突變會影響氧運輸，最直接的生化原因通常是？",
    options:[
      "蛋白質結構改變導致功能改變",
      "pH公式改寫",
      "水密度變低",
      "脂質轉為核酸"
    ],
    answer:0,
    explanation:"蛋白質結構與功能密切相關。"
  },
  {
    id:"EXAM-048",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["頭髮","雙硫鍵"],
    question:"燙髮與定型常與頭髮蛋白中的哪種鍵最相關？",
    options:[
      "雙硫鍵",
      "氫鍵",
      "肽鍵",
      "磷酸二酯鍵"
    ],
    answer:0,
    explanation:"角蛋白中的雙硫鍵與頭髮形狀穩定密切相關。"
  },
  {
    id:"EXAM-049",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高比熱"],
    question:"水的高比熱對生物最重要的意義之一是？",
    options:[
      "有助於維持環境與體內溫度相對穩定",
      "使水變成非極性",
      "讓水一定無法蒸發",
      "使所有酶永久活化"
    ],
    answer:0,
    explanation:"高比熱可緩衝溫度波動。"
  },
  {
    id:"EXAM-050",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Vmax","反應速率"],
    question:"酶效率在底物充足下接近最高時，反應速率最接近哪一項？",
    options:[
      "Vmax",
      "Km",
      "0",
      "pKa"
    ],
    answer:0,
    explanation:"底物充足時速率會趨近 Vmax。"
  },
  {
    id:"EXAM-051",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["中心法則","生活"],
    question:"疫苗衛教提到細胞會先讀取核酸資訊，再製造特定蛋白。這最符合哪個流程？",
    options:[
      "DNA → RNA → 蛋白質",
      "蛋白質 → RNA → DNA",
      "RNA → 脂質 → 蛋白質",
      "DNA → 脂質 → RNA"
    ],
    answer:0,
    explanation:"這是中心法則的基本流程。"
  },
  {
    id:"EXAM-052",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["逆轉錄"],
    question:"某病毒以 RNA 為遺傳物質，但可在宿主內先轉成 DNA。這說明哪個現象？",
    options:[
      "逆轉錄",
      "翻譯停止",
      "蛋白質複製",
      "脂質代謝"
    ],
    answer:0,
    explanation:"RNA 先轉成 DNA 的過程為逆轉錄。"
  },
  {
    id:"EXAM-053",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["生物大分子","功能"],
    question:"某老師說：「同一門課會同時談 DNA、酶、脂質，因為它們都是生物大分子，但功能不同。」下列配對何者正確？",
    options:[
      "DNA—遺傳資訊；酶—催化；脂質—儲能與膜結構",
      "DNA—催化；酶—遺傳資訊；脂質—翻譯",
      "DNA—儲能；酶—膜結構；脂質—轉錄",
      "三者功能完全一樣"
    ],
    answer:0,
    explanation:"這是三類大分子的核心功能配對。"
  },
  {
    id:"EXAM-054",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["元素","ATP"],
    question:"保健品廣告常提到能量代謝與 ATP，有學生問 ATP 中哪個元素特別關鍵。下列何者最合理？",
    options:[
      "P",
      "Cl",
      "Fe",
      "Zn"
    ],
    answer:0,
    explanation:"ATP 含有重要的磷酸基團。"
  },
  {
    id:"EXAM-055",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鍵結","陰電性"],
    question:"若兩原子間陰電性差異很大，最可能形成哪種類型的鍵？",
    options:[
      "離子鍵",
      "非極性共價鍵",
      "肽鍵",
      "雙硫鍵"
    ],
    answer:0,
    explanation:"陰電性差異大時，較偏向形成離子鍵。"
  },
  {
    id:"EXAM-056",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["疏水作用"],
    question:"油滴在水中會彼此聚集，不願意分散開來。最主要的原因是？",
    options:[
      "疏水作用使非極性分子傾向聚集以減少與水接觸",
      "所有油脂都帶正電",
      "水會主動破壞共價鍵",
      "油滴會自動形成DNA"
    ],
    answer:0,
    explanation:"這是疏水作用的典型表現。"
  },
  {
    id:"EXAM-057",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["水","高蒸發熱"],
    question:"夏天把酒精與水分別塗在皮膚上，兩者都會感到涼，但水的散熱效果對生理調節特別重要，最主要與哪項特性相關？",
    options:[
      "高蒸發熱",
      "低表面張力",
      "低比熱",
      "無極性"
    ],
    answer:0,
    explanation:"水蒸發時可帶走大量熱能。"
  },
  {
    id:"EXAM-058",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["pH","計算"],
    question:"若某溶液 [H+] = 1×10⁻⁸ M，則其 pH 最接近？",
    options:[
      "8",
      "6",
      "4",
      "2"
    ],
    answer:0,
    explanation:"pH = -log[H+] = 8。"
  },
  {
    id:"EXAM-059",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["血液","pH"],
    question:"醫學檢驗中若血液 pH 偏離正常值太多，常代表生理狀態異常。正常血液 pH 約為？",
    options:[
      "7.35–7.45",
      "5.0–5.5",
      "8.5–9.0",
      "6.0–6.5"
    ],
    answer:0,
    explanation:"正常血液 pH 約 7.35–7.45。"
  },
  {
    id:"EXAM-060",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","細胞外液"],
    question:"若題目問「細胞外液中最重要的緩衝系統」，最合理答案為？",
    options:[
      "重碳酸鹽-碳酸緩衝系統",
      "脂質緩衝系統",
      "RNA緩衝系統",
      "葡萄糖緩衝系統"
    ],
    answer:0,
    explanation:"細胞外液主要緩衝系統為重碳酸鹽-碳酸系統。"
  },
  {
    id:"EXAM-061",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["緩衝系統","腎臟"],
    question:"若題目特別提到與腎臟排酸關係較大，最應優先想到哪個緩衝系統？",
    options:[
      "磷酸鹽緩衝系統",
      "脂肪酸系統",
      "膽固醇系統",
      "ATP 系統"
    ],
    answer:0,
    explanation:"磷酸鹽緩衝系統與腎臟排酸關聯較大。"
  },
  {
    id:"EXAM-062",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["胺基酸","基本結構"],
    question:"若要用一句話向學弟妹解釋胺基酸的共同結構，最合理的是？",
    options:[
      "都具有 α-碳、胺基、羧基、H 與 R 基",
      "都具有兩個磷酸基",
      "都不含氫原子",
      "都沒有側鏈差異"
    ],
    answer:0,
    explanation:"這是胺基酸的基本通式。"
  },
  {
    id:"EXAM-063",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Glycine","光學活性"],
    question:"老師問：「哪個胺基酸是天然胺基酸中的特殊例外，因不具光學活性而常被記住？」",
    options:[
      "Glycine",
      "Valine",
      "Leucine",
      "Tyrosine"
    ],
    answer:0,
    explanation:"Glycine 的 α-碳不具四種不同取代基。"
  },
  {
    id:"EXAM-064",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["L型","天然蛋白質"],
    question:"天然蛋白質中的胺基酸構型主要為？",
    options:[
      "L 型",
      "D 型",
      "L 與 D 各半",
      "完全不固定"
    ],
    answer:0,
    explanation:"天然蛋白質主要由 L 型胺基酸組成。"
  },
  {
    id:"EXAM-065",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["必需胺基酸"],
    question:"若營養補充品強調「人體無法自行充分合成、必須由飲食取得」，它在描述哪一類胺基酸？",
    options:[
      "必需胺基酸",
      "非極性胺基酸",
      "芳香族胺基酸",
      "酸性胺基酸"
    ],
    answer:0,
    explanation:"必需胺基酸需由食物提供。"
  },
  {
    id:"EXAM-066",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Leucine","必需"],
    question:"下列何者最可能是必需胺基酸？",
    options:[
      "Leucine",
      "Glycine",
      "Alanine",
      "Aspartate"
    ],
    answer:0,
    explanation:"Leucine 為必需胺基酸。"
  },
  {
    id:"EXAM-067",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酸性胺基酸"],
    question:"若某胺基酸在生理 pH 下常帶負電，最可能屬於哪一類？",
    options:[
      "酸性胺基酸",
      "鹼性胺基酸",
      "芳香族胺基酸",
      "必需胺基酸"
    ],
    answer:0,
    explanation:"酸性胺基酸如 Asp、Glu 常帶負電。"
  },
  {
    id:"EXAM-068",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["鹼性胺基酸"],
    question:"若某胺基酸在生理 pH 下常帶正電，最合理的分類為？",
    options:[
      "鹼性胺基酸",
      "酸性胺基酸",
      "非極性胺基酸",
      "脂肪酸"
    ],
    answer:0,
    explanation:"鹼性胺基酸如 Lys、Arg 常帶正電。"
  },
  {
    id:"EXAM-069",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Cysteine","雙硫鍵"],
    question:"某蛋白質需要形成 -S-S- 鍵以增加穩定性，這最直接依賴哪種胺基酸？",
    options:[
      "Cysteine",
      "Glycine",
      "Valine",
      "Aspartate"
    ],
    answer:0,
    explanation:"Cysteine 含 -SH，可形成雙硫鍵。"
  },
  {
    id:"EXAM-070",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Proline","結構"],
    question:"某胺基酸因特殊環狀結構，容易使蛋白質鏈出現轉折，最可能是？",
    options:[
      "Proline",
      "Serine",
      "Alanine",
      "Lysine"
    ],
    answer:0,
    explanation:"Proline 的環狀結構會影響多肽鏈彎曲。"
  },
  {
    id:"EXAM-071",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["肽鍵"],
    question:"兩個胺基酸形成肽鍵時，本質上最接近哪種反應？",
    options:[
      "脫水縮合反應",
      "直接氧化反應",
      "脂質水解",
      "DNA 複製"
    ],
    answer:0,
    explanation:"肽鍵形成會去除一分子水。"
  },
  {
    id:"EXAM-072",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["肽鍵","官能基"],
    question:"肽鍵形成時，實際參與反應的兩個官能基為？",
    options:[
      "胺基與羧基",
      "羧基與磷酸基",
      "R基與R基",
      "羥基與羥基"
    ],
    answer:0,
    explanation:"一個胺基酸的胺基與另一個的羧基相連。"
  },
  {
    id:"EXAM-073",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["一級結構"],
    question:"若題目強調「胺基酸的排列順序」，它在描述蛋白質哪一級結構？",
    options:[
      "一級結構",
      "二級結構",
      "三級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"胺基酸序列即一級結構。"
  },
  {
    id:"EXAM-074",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["二級結構"],
    question:"α-螺旋與 β-摺疊都屬於蛋白質哪一層級？",
    options:[
      "二級結構",
      "一級結構",
      "三級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"這兩者皆屬蛋白質二級結構。"
  },
  {
    id:"EXAM-075",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["二級結構","氫鍵"],
    question:"蛋白質二級結構最主要依賴哪種作用力穩定？",
    options:[
      "氫鍵",
      "雙硫鍵",
      "磷酸二酯鍵",
      "金屬鍵"
    ],
    answer:0,
    explanation:"二級結構主要靠主鏈間氫鍵穩定。"
  },
  {
    id:"EXAM-076",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["三級結構"],
    question:"單一多肽鏈完成立體折疊，並由疏水作用、離子作用與氫鍵共同維持，這最符合？",
    options:[
      "三級結構",
      "一級結構",
      "二級結構",
      "四級結構"
    ],
    answer:0,
    explanation:"這是單一多肽鏈的完整立體結構。"
  },
  {
    id:"EXAM-077",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["四級結構"],
    question:"若題目強調「不同多肽亞基彼此組裝成功能性複合體」，這最符合？",
    options:[
      "四級結構",
      "三級結構",
      "二級結構",
      "一級結構"
    ],
    answer:0,
    explanation:"多條多肽鏈的組裝為四級結構。"
  },
  {
    id:"EXAM-078",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質功能","運輸"],
    question:"若題目要你舉「運輸蛋白」的例子，最合理的是？",
    options:[
      "血紅素",
      "膠原蛋白",
      "角蛋白",
      "胰蛋白酶"
    ],
    answer:0,
    explanation:"血紅素負責運輸氧氣。"
  },
  {
    id:"EXAM-079",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["蛋白質功能","免疫"],
    question:"若某蛋白質主要負責辨識外來抗原並協助防禦，它最可能屬於哪一類？",
    options:[
      "免疫蛋白",
      "運輸蛋白",
      "結構蛋白",
      "脂質"
    ],
    answer:0,
    explanation:"如抗體屬免疫蛋白。"
  },
  {
    id:"EXAM-080",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["結構蛋白"],
    question:"膠原蛋白與角蛋白最適合被歸在哪種功能類別？",
    options:[
      "結構蛋白",
      "催化蛋白",
      "遺傳物質",
      "代謝中間物"
    ],
    answer:0,
    explanation:"兩者皆主要負責結構支撐。"
  },
  {
    id:"EXAM-081",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","本質"],
    question:"若題目問「大多數酶的化學本質是什麼」，最正確的答案為？",
    options:[
      "蛋白質",
      "脂質",
      "核酸",
      "單糖"
    ],
    answer:0,
    explanation:"大多數酶為蛋白質。"
  },
  {
    id:"EXAM-082",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶","功能"],
    question:"酶在細胞中的主要角色為？",
    options:[
      "加速化學反應",
      "長期儲存遺傳資訊",
      "形成細胞膜雙層",
      "固定提高平衡常數"
    ],
    answer:0,
    explanation:"酶是生物催化劑。"
  },
  {
    id:"EXAM-083",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["活化能"],
    question:"酶能加速反應，最核心的原因是因為它能？",
    options:[
      "降低活化能",
      "提高產物總量",
      "永久改變平衡位置",
      "將底物變成基因"
    ],
    answer:0,
    explanation:"酶透過降低活化能來提升速率。"
  },
  {
    id:"EXAM-084",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["平衡","酶"],
    question:"某學生說：「酶會讓反應更快，所以最後平衡位置也一定改變。」這句話最大問題是？",
    options:[
      "酶不改變平衡位置，只改變達平衡的速度",
      "酶只改變顏色",
      "酶一定是脂質",
      "酶只能在高溫下作用"
    ],
    answer:0,
    explanation:"酶不改變平衡常數與平衡位置。"
  },
  {
    id:"EXAM-085",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["活性位"],
    question:"底物與酶發生特異性辨識，最關鍵的結構部位是？",
    options:[
      "活性位",
      "羧基端",
      "脂肪酸尾端",
      "DNA骨架"
    ],
    answer:0,
    explanation:"活性位決定底物辨識與催化。"
  },
  {
    id:"EXAM-086",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["lock and key"],
    question:"若題目說「底物與酶像鎖與鑰匙一樣吻合」，主要是在描述？",
    options:[
      "酶的專一性",
      "酶的變性",
      "酸鹼滴定",
      "蛋白質合成"
    ],
    answer:0,
    explanation:"鎖鑰模型強調專一性。"
  },
  {
    id:"EXAM-087",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["induced fit"],
    question:"相較於鎖鑰模型，誘導契合模型更強調哪個概念？",
    options:[
      "酶構形可在底物接近時調整",
      "酶完全不會變形",
      "底物不需要接觸酶",
      "只有產物會改變"
    ],
    answer:0,
    explanation:"誘導契合模型認為酶可動態調整構形。"
  },
  {
    id:"EXAM-088",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["ES complex"],
    question:"反應進行時，酶先與底物形成暫時複合體，通常記作？",
    options:[
      "ES",
      "EP",
      "SE2",
      "DS"
    ],
    answer:0,
    explanation:"ES 表示 enzyme-substrate complex。"
  },
  {
    id:"EXAM-089",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["輔酶"],
    question:"若某酶必須搭配一個小型有機分子才能發揮功能，該分子最可能稱為？",
    options:[
      "輔酶",
      "脂肪酸",
      "抑制劑",
      "模板DNA"
    ],
    answer:0,
    explanation:"小型有機輔助分子稱為輔酶。"
  },
  {
    id:"EXAM-090",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["金屬離子","輔因子"],
    question:"若某酶需要 Mg2+ 或 Zn2+ 才能正常作用，這些離子最合理被稱為？",
    options:[
      "輔因子",
      "產物",
      "底物",
      "核酸"
    ],
    answer:0,
    explanation:"金屬離子常作為酶的輔因子。"
  },
  {
    id:"EXAM-091",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["酶再利用"],
    question:"酶在催化反應後通常仍可再次使用，這最能說明？",
    options:[
      "酶通常不被反應永久消耗",
      "酶一定轉成產物",
      "酶沒有結構",
      "酶不需要底物"
    ],
    answer:0,
    explanation:"酶催化後通常可恢復原狀再參與反應。"
  },
  {
    id:"EXAM-092",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["米氏曲線"],
    question:"一般米氏酶的反應速率對底物濃度關係，圖形最常呈現？",
    options:[
      "雙曲線",
      "完全直線且無上限",
      "拋物線開口向下",
      "鋸齒狀曲線"
    ],
    answer:0,
    explanation:"典型米氏曲線為雙曲線型。"
  },
  {
    id:"EXAM-093",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Km 定義"],
    question:"當反應速率等於 1/2 Vmax 時，所對應的底物濃度稱為？",
    options:[
      "Km",
      "Ki",
      "pKa",
      "V0"
    ],
    answer:0,
    explanation:"這是 Km 的定義。"
  },
  {
    id:"EXAM-094",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["Lineweaver-Burk","Y截距"],
    question:"在 Lineweaver-Burk 圖中，Y 截距最典型代表？",
    options:[
      "1/Vmax",
      "-1/Km",
      "Km",
      "Vmax"
    ],
    answer:0,
    explanation:"雙倒數圖 Y 截距為 1/Vmax。"
  },
  {
    id:"EXAM-095",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["整合","序列與功能"],
    question:"某蛋白質因序列改變而失去催化功能，這最能支持哪個觀念？",
    options:[
      "蛋白質功能高度依賴其結構與序列",
      "蛋白質與功能無關",
      "只要是蛋白質就都能催化",
      "突變只影響脂質"
    ],
    answer:0,
    explanation:"結構決定功能，而序列影響結構。"
  },
  {
    id:"EXAM-096",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["疏水作用","折疊"],
    question:"蛋白質在水中折疊時，許多疏水性胺基酸傾向埋在內部。最主要原因是？",
    options:[
      "減少與水接觸",
      "主動吸引氧氣",
      "增加DNA穩定性",
      "形成更多磷酸鍵"
    ],
    answer:0,
    explanation:"疏水性殘基通常聚集於內部。"
  },
  {
    id:"EXAM-097",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["親水性","表面"],
    question:"若蛋白質表面大量出現帶電或極性胺基酸，最合理的解釋是？",
    options:[
      "有利於與水環境互動",
      "表示蛋白質一定失活",
      "表示沒有一級結構",
      "表示一定屬脂質"
    ],
    answer:0,
    explanation:"表面常富含親水性殘基以增加溶解性。"
  },
  {
    id:"EXAM-098",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["抑制","比較"],
    question:"若某抑制劑使酶對底物「看起來較不容易結合」，但在高底物下仍可達原本最大速率，這最符合？",
    options:[
      "競爭性抑制",
      "非競爭性抑制",
      "不可逆抑制",
      "蛋白質變性"
    ],
    answer:0,
    explanation:"這是競爭性抑制的典型描述。"
  },
  {
    id:"EXAM-099",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["親和力","飽和度"],
    question:"若要區分「親和力」與「飽和度」，哪個說法最合理？",
    options:[
      "親和力指結合傾向；飽和度指活性位被底物佔滿的程度",
      "親和力就是 pH；飽和度就是溫度",
      "兩者完全相同",
      "兩者都只看酶濃度"
    ],
    answer:0,
    explanation:"兩者是不同概念：一個是結合能力，一個是佔位程度。"
  },
  {
    id:"EXAM-100",
    chapter:"CH1-CH3 整合",
    section:"高難度生活情境",
    difficulty:"hard",
    tags:["總整合","壓軸"],
    question:"某病患因基因突變導致酶的一級結構改變，造成活性位構形異常，使底物不易結合，代謝反應受阻。這段描述依序最合理地串聯了哪三個概念？",
    options:[
      "DNA變化 → 蛋白質結構改變 → 酶功能改變",
      "脂質變化 → 水分子改變 → DNA複製",
      "pH改變 → 胺基酸消失 → 膜流動性改變",
      "ATP增加 → 蛋白質不折疊 → 緩衝系統失效"
    ],
    answer:0,
    explanation:"這題整合基因、蛋白質結構與酶功能，是整章核心。"
  },
{
  id:"CHEM-A-041",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Gly"],
  question:"若某胺基酸的側鏈只有一個 H，結構最簡單，則該胺基酸最可能為何？",
  options:[
    "Alanine",
    "Glycine",
    "Serine",
    "Valine"
  ],
  answer:1,
  explanation:"Glycine 的側鏈只有 H，是最簡單的胺基酸。"
},
{
  id:"CHEM-A-042",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Ala"],
  question:"若某胺基酸的側鏈為 -CH3，最可能是下列哪一個？",
  options:[
    "Alanine",
    "Valine",
    "Leucine",
    "Methionine"
  ],
  answer:0,
  explanation:"Alanine 的 R 基為甲基 (-CH3)。"
},
{
  id:"CHEM-A-043",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Val"],
  question:"若某胺基酸的側鏈為 -CH(CH3)2，最可能是哪一個？",
  options:[
    "Valine",
    "Leucine",
    "Isoleucine",
    "Proline"
  ],
  answer:0,
  explanation:"Valine 的典型支鏈結構為 isopropyl。"
},
{
  id:"CHEM-A-044",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Leu"],
  question:"若某胺基酸的側鏈為 -CH2-CH(CH3)2，最可能是哪一個？",
  options:[
    "Valine",
    "Leucine",
    "Isoleucine",
    "Methionine"
  ],
  answer:1,
  explanation:"Leucine 的側鏈為 -CH2-CH(CH3)2。"
},
{
  id:"CHEM-A-045",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Ile"],
  question:"若某胺基酸的側鏈為 -CH(CH3)-CH2-CH3，最可能是哪一個？",
  options:[
    "Leucine",
    "Isoleucine",
    "Valine",
    "Alanine"
  ],
  answer:1,
  explanation:"Isoleucine 與 Leucine 互為常見混淆題，Ile 為 β-碳分支。"
},
{
  id:"CHEM-A-046",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Met"],
  question:"若某胺基酸的側鏈含有硫原子，但不具 -SH，而是 thioether 結構，最可能是哪一個？",
  options:[
    "Cysteine",
    "Methionine",
    "Tyrosine",
    "Histidine"
  ],
  answer:1,
  explanation:"Methionine 含硫，但不是硫氫基，而是 thioether。"
},
{
  id:"CHEM-A-047",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Cys"],
  question:"若側鏈為 -CH2-SH，最可能是哪一個胺基酸？",
  options:[
    "Methionine",
    "Serine",
    "Cysteine",
    "Threonine"
  ],
  answer:2,
  explanation:"Cysteine 的側鏈帶硫氫基 (-SH)。"
},
{
  id:"CHEM-A-048",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Ser"],
  question:"若側鏈為 -CH2-OH，最可能是哪一個胺基酸？",
  options:[
    "Serine",
    "Threonine",
    "Tyrosine",
    "Asparagine"
  ],
  answer:0,
  explanation:"Serine 的側鏈為 -CH2-OH。"
},
{
  id:"CHEM-A-049",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Thr"],
  question:"若側鏈含有 -OH，且同時具有額外甲基，使其比 Serine 多一個手性差異，最可能是哪一個？",
  options:[
    "Serine",
    "Threonine",
    "Tyrosine",
    "Glycine"
  ],
  answer:1,
  explanation:"Threonine 側鏈為 -CH(OH)-CH3。"
},
{
  id:"CHEM-A-050",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Asp"],
  question:"若側鏈為 -CH2-COO-，最可能是哪一個胺基酸？",
  options:[
    "Asparagine",
    "Aspartate",
    "Glutamate",
    "Glutamine"
  ],
  answer:1,
  explanation:"Aspartate 比 Glutamate 少一個 -CH2。"
},
{
  id:"CHEM-A-051",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Glu"],
  question:"若側鏈為 -CH2-CH2-COO-，最可能是哪一個胺基酸？",
  options:[
    "Aspartate",
    "Glutamate",
    "Asparagine",
    "Glutamine"
  ],
  answer:1,
  explanation:"Glutamate 比 Aspartate 多一個 -CH2。"
},
{
  id:"CHEM-A-052",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Asn"],
  question:"若側鏈為 -CH2-CONH2，最可能是哪一個胺基酸？",
  options:[
    "Aspartate",
    "Asparagine",
    "Glutamine",
    "Glutamate"
  ],
  answer:1,
  explanation:"Asparagine 是 Aspartate 的醯胺型。"
},
{
  id:"CHEM-A-053",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Gln"],
  question:"若側鏈為 -CH2-CH2-CONH2，最可能是哪一個胺基酸？",
  options:[
    "Asparagine",
    "Glutamine",
    "Glutamate",
    "Lysine"
  ],
  answer:1,
  explanation:"Glutamine 為 Glutamate 的醯胺型，且多一個 -CH2。"
},
{
  id:"CHEM-A-054",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Lys"],
  question:"若某胺基酸的側鏈為長鏈 -(CH2)4-NH3+，最可能是哪一個？",
  options:[
    "Lysine",
    "Arginine",
    "Histidine",
    "Methionine"
  ],
  answer:0,
  explanation:"Lysine 的側鏈末端帶 ε-amino group。"
},
{
  id:"CHEM-A-055",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Arg"],
  question:"若某胺基酸側鏈末端帶有胍基 (guanidino group)，最可能是哪一個？",
  options:[
    "Lysine",
    "Histidine",
    "Arginine",
    "Tryptophan"
  ],
  answer:2,
  explanation:"Arginine 以胍基側鏈聞名。"
},
{
  id:"CHEM-A-056",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","His"],
  question:"若某胺基酸的側鏈含有咪唑環 (imidazole ring)，最可能是哪一個？",
  options:[
    "Histidine",
    "Tyrosine",
    "Phenylalanine",
    "Proline"
  ],
  answer:0,
  explanation:"Histidine 的咪唑環是其重要特徵。"
},
{
  id:"CHEM-A-057",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Phe"],
  question:"若某胺基酸的側鏈為 -CH2-苯環，最可能是哪一個？",
  options:[
    "Tyrosine",
    "Phenylalanine",
    "Tryptophan",
    "Histidine"
  ],
  answer:1,
  explanation:"Phenylalanine 的典型側鏈為 benzyl group。"
},
{
  id:"CHEM-A-058",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Tyr"],
  question:"若某胺基酸的側鏈為 -CH2-苯環-OH，最可能是哪一個？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Serine"
  ],
  answer:1,
  explanation:"Tyrosine 比 Phe 多了一個酚基 -OH。"
},
{
  id:"CHEM-A-059",
  chapter:"CH2 蛋白質",
  section:"結構辨識",
  difficulty:"hard",
  tags:["看化學式","Trp"],
  question:"若某胺基酸帶有雙環芳香結構，且其中包含含氮的吲哚環，最可能是哪一個？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Histidine"
  ],
  answer:2,
  explanation:"Tryptophan 的特徵是吲哚環。"
},
{
  id:"CHEM-A-060",
  chapter:"CH2 蛋白質",
  section:"官能基比較",
  difficulty:"hard",
  tags:["官能基","比較"],
  question:"下列哪一組胺基酸都具有可形成氫鍵的側鏈，但不屬於酸性或鹼性胺基酸？",
  options:[
    "Ser、Thr、Asn、Gln",
    "Asp、Glu、Lys、Arg",
    "Val、Leu、Ile、Met",
    "Phe、Trp、Val、Ala"
  ],
  answer:0,
  explanation:"Ser、Thr、Asn、Gln 屬極性不帶電胺基酸。"
},
{
  id:"CHEM-A-061",
  chapter:"CH2 蛋白質",
  section:"結構比較",
  difficulty:"hard",
  tags:["Asp vs Asn"],
  question:"Aspartate 與 Asparagine 最大的化學結構差異為何？",
  options:[
    "Asp 多一個 -NH2",
    "Asn 的末端羧基改為醯胺基",
    "Asp 含有芳香環",
    "Asn 含有硫"
  ],
  answer:1,
  explanation:"Asn 是 Asp 側鏈羧基醯胺化後的形式。"
},
{
  id:"CHEM-A-062",
  chapter:"CH2 蛋白質",
  section:"結構比較",
  difficulty:"hard",
  tags:["Glu vs Gln"],
  question:"Glutamate 與 Glutamine 的結構差異最合理的描述為何？",
  options:[
    "Gln 比 Glu 少一個碳",
    "Gln 的末端羧基改為醯胺基",
    "Glu 含咪唑環",
    "Gln 含胍基"
  ],
  answer:1,
  explanation:"Gln 是 Glu 側鏈羧基醯胺化後的形式。"
},
{
  id:"CHEM-A-063",
  chapter:"CH2 蛋白質",
  section:"結構比較",
  difficulty:"hard",
  tags:["Phe vs Tyr"],
  question:"Phenylalanine 與 Tyrosine 的主要差異為何？",
  options:[
    "Tyr 比 Phe 少一個苯環",
    "Tyr 比 Phe 多一個酚基 -OH",
    "Phe 含有吲哚環",
    "Tyr 含有胍基"
  ],
  answer:1,
  explanation:"Tyrosine 的苯環上多了一個 -OH。"
},
{
  id:"CHEM-A-064",
  chapter:"CH2 蛋白質",
  section:"結構比較",
  difficulty:"hard",
  tags:["Cys vs Met"],
  question:"Cysteine 與 Methionine 都含硫，但下列敘述何者正確？",
  options:[
    "兩者都可直接形成雙硫鍵",
    "只有 Cys 具有 -SH，可形成雙硫鍵",
    "只有 Met 具有 -SH，可形成雙硫鍵",
    "兩者都不屬於胺基酸"
  ],
  answer:1,
  explanation:"Met 含 thioether，不是硫氫基；Cys 才能形成雙硫鍵。"
},
{
  id:"CHEM-A-065",
  chapter:"CH2 蛋白質",
  section:"結構比較",
  difficulty:"hard",
  tags:["Val Leu Ile","支鏈"],
  question:"Val、Leu、Ile 都屬支鏈胺基酸，下列何者敘述正確？",
  options:[
    "三者都帶正電",
    "三者都屬疏水性非極性胺基酸",
    "三者都可形成雙硫鍵",
    "三者都含有苯環"
  ],
  answer:1,
  explanation:"Val、Leu、Ile 皆為疏水性支鏈胺基酸。"
},
{
  id:"CHEM-A-066",
  chapter:"CH2 蛋白質",
  section:"電荷判讀",
  difficulty:"hard",
  tags:["Asp","pH"],
  question:"在生理 pH 下，Aspartate 最可能帶何種電荷？",
  options:[
    "正電",
    "負電",
    "完全中性",
    "不穩定無法存在"
  ],
  answer:1,
  explanation:"Asp 為酸性胺基酸，在生理 pH 下多呈負電。"
},
{
  id:"CHEM-A-067",
  chapter:"CH2 蛋白質",
  section:"電荷判讀",
  difficulty:"hard",
  tags:["Lys","pH"],
  question:"在生理 pH 下，Lysine 最可能帶何種電荷？",
  options:[
    "負電",
    "正電",
    "完全中性",
    "雙負電"
  ],
  answer:1,
  explanation:"Lys 為鹼性胺基酸，在生理 pH 下多呈正電。"
},
{
  id:"CHEM-A-068",
  chapter:"CH2 蛋白質",
  section:"官能基與反應",
  difficulty:"hard",
  tags:["磷酸化","Tyr"],
  question:"下列哪一個胺基酸雖屬芳香族，但也常因其側鏈羥基而成為磷酸化位點？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Tryptophan",
    "Histidine"
  ],
  answer:1,
  explanation:"Tyrosine 具有酚基羥基，可被磷酸化。"
},
{
  id:"CHEM-A-069",
  chapter:"CH2 蛋白質",
  section:"結構判讀",
  difficulty:"hard",
  tags:["Proline","二級胺"],
  question:"哪一個胺基酸因其 α-胺基參與成環，因此常被稱為唯一的二級胺基酸？",
  options:[
    "Glycine",
    "Proline",
    "Valine",
    "Serine"
  ],
  answer:1,
  explanation:"Proline 的胺基納入環中，結構特殊。"
},
{
  id:"CHEM-A-070",
  chapter:"CH2 蛋白質",
  section:"整合判讀",
  difficulty:"hard",
  tags:["化學結構","蛋白質折疊"],
  question:"若某側鏈同時具有芳香環與羥基，通常比單純苯環側鏈更容易出現在蛋白質表面。最符合此描述的是哪一個胺基酸？",
  options:[
    "Phenylalanine",
    "Tyrosine",
    "Valine",
    "Methionine"
  ],
  answer:1,
  explanation:"Tyrosine 的酚基使其比 Phe 更具親水性。"
},
];

const MID_DIFFICULTY_EXAM = [
{
  id:"MID-001",
  chapter:"CH1 緒論",
  section:"化學鍵",
  difficulty:"medium",
  tags:["鍵結","情境"],
  question:"某分子中電子偏向陰電性較大的原子，但仍為共享電子，最可能是哪一種鍵結？",
  options:[
    "離子鍵",
    "共價鍵",
    "極性共價鍵",
    "氫鍵"
  ],
  answer:2,
  explanation:"電子不完全轉移但偏移 → 極性共價鍵。"
},
{
  id:"MID-002",
  chapter:"CH1 緒論",
  section:"水的性質",
  difficulty:"medium",
  tags:["水","結構"],
  question:"水分子呈現極性的主要原因為何？",
  options:[
    "氫原子較大",
    "鍵角為104.5°且氧陰電性高",
    "氧較輕",
    "分子線性排列"
  ],
  answer:1,
  explanation:"彎曲結構＋陰電性差形成偶極。"
},
{
  id:"MID-003",
  chapter:"CH1 緒論",
  section:"代謝",
  difficulty:"medium",
  tags:["ATP"],
  question:"細胞將 ATP 水解為 ADP 的主要目的是？",
  options:[
    "製造蛋白質",
    "儲存DNA",
    "釋放能量",
    "生成脂質"
  ],
  answer:2,
  explanation:"ATP 是能量貨幣。"
},
{
  id:"MID-004",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"medium",
  tags:["pH"],
  question:"當血液 pH 下降至 7.1 時，最可能發生什麼？",
  options:[
    "鹼中毒",
    "酸中毒",
    "無變化",
    "蛋白質合成增加"
  ],
  answer:1,
  explanation:"pH下降代表酸性增加。"
},
{
  id:"MID-005",
  chapter:"CH1 緒論",
  section:"生物分子",
  difficulty:"easy",
  tags:["基本概念"],
  question:"下列哪一項是蛋白質的基本單位？",
  options:[
    "核苷酸",
    "脂肪酸",
    "胺基酸",
    "單糖"
  ],
  answer:2,
  explanation:"蛋白質由胺基酸構成。"
},
{
  id:"MID-006",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"hard",
  tags:["結構"],
  question:"某胺基酸的側鏈為 H，且不具光學活性，最可能是哪一個？",
  options:[
    "Alanine",
    "Glycine",
    "Valine",
    "Serine"
  ],
  answer:1,
  explanation:"Gly 無手性。"
},
{
  id:"MID-007",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"hard",
  tags:["極性"],
  question:"下列哪一組屬於極性但不帶電的胺基酸？",
  options:[
    "Ser、Thr",
    "Asp、Glu",
    "Lys、Arg",
    "Val、Leu"
  ],
  answer:0,
  explanation:"Ser、Thr 為極性不帶電。"
},
{
  id:"MID-008",
  chapter:"CH2 蛋白質",
  section:"pI",
  difficulty:"hard",
  tags:["pI"],
  question:"當 pH 高於胺基酸 pI 時，其淨電荷為何？",
  options:[
    "正電",
    "負電",
    "中性",
    "雙正電"
  ],
  answer:1,
  explanation:"pH > pI → 負電。"
},
{
  id:"MID-009",
  chapter:"CH2 蛋白質",
  section:"胜肽",
  difficulty:"hard",
  tags:["肽鍵"],
  question:"4 個胺基酸形成一條胜肽鏈時，共形成幾個肽鍵？",
  options:[
    "2",
    "3",
    "4",
    "5"
  ],
  answer:1,
  explanation:"n-1 → 3。"
},
{
  id:"MID-010",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"medium",
  tags:["α螺旋"],
  question:"α-螺旋結構主要由什麼穩定？",
  options:[
    "氫鍵",
    "共價鍵",
    "離子鍵",
    "雙硫鍵"
  ],
  answer:0,
  explanation:"氫鍵維持。"
},
{
  id:"MID-011",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["Proline"],
  question:"哪一個胺基酸最可能破壞 α-螺旋？",
  options:[
    "Valine",
    "Proline",
    "Alanine",
    "Serine"
  ],
  answer:1,
  explanation:"Pro 中斷螺旋。"
},
{
  id:"MID-012",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性時通常不會破壞哪一結構？",
  options:[
    "一級",
    "二級",
    "三級",
    "四級"
  ],
  answer:0,
  explanation:"肽鍵不破壞。"
},
{
  id:"MID-013",
  chapter:"CH3 酶",
  section:"基本特性",
  difficulty:"easy",
  tags:["酶"],
  question:"酶的主要功能為何？",
  options:[
    "儲存能量",
    "加速反應",
    "傳遞DNA",
    "產生氧氣"
  ],
  answer:1,
  explanation:"催化反應。"
},
{
  id:"MID-014",
  chapter:"CH3 酶",
  section:"Km",
  difficulty:"hard",
  tags:["Km"],
  question:"Km 越小代表什麼？",
  options:[
    "反應慢",
    "親和力高",
    "Vmax 高",
    "酶變性"
  ],
  answer:1,
  explanation:"Km小＝親和力高。"
},
{
  id:"MID-015",
  chapter:"CH3 酶",
  section:"Vmax",
  difficulty:"hard",
  tags:["Vmax"],
  question:"當底物濃度非常高時，反應速率接近？",
  options:[
    "0",
    "Km",
    "Vmax",
    "負值"
  ],
  answer:2,
  explanation:"達飽和。"
},
{
  id:"MID-016",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["競爭"],
  question:"競爭性抑制會造成？",
  options:[
    "Km上升",
    "Km下降",
    "Vmax上升",
    "Vmax下降"
  ],
  answer:0,
  explanation:"Km↑。"
},
{
  id:"MID-017",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["非競爭"],
  question:"非競爭性抑制會造成？",
  options:[
    "Km變化",
    "Vmax下降",
    "Km下降",
    "無影響"
  ],
  answer:1,
  explanation:"Vmax↓。"
},
{
  id:"MID-018",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["模型"],
  question:"誘導契合模型強調什麼？",
  options:[
    "酶固定",
    "酶構形改變",
    "底物不變",
    "反應停止"
  ],
  answer:1,
  explanation:"酶會調整形狀。"
},
{
  id:"MID-019",
  chapter:"CH3 酶",
  section:"圖形",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver-Burk 圖中 y 軸代表？",
  options:[
    "v",
    "1/v",
    "[S]",
    "Km"
  ],
  answer:1,
  explanation:"y=1/v。"
},
{
  id:"MID-020",
  chapter:"CH3 酶",
  section:"圖形",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver-Burk 圖中 x 軸代表？",
  options:[
    "[S]",
    "1/[S]",
    "Vmax",
    "Km"
  ],
  answer:1,
  explanation:"x=1/[S]。"
}
,
{
  id:"MID-021",
  chapter:"CH1 緒論",
  section:"弱作用力",
  difficulty:"hard",
  tags:["非共價"],
  question:"蛋白質摺疊過程中，哪一種作用力最容易被溫度破壞？",
  options:[
    "共價鍵",
    "氫鍵",
    "肽鍵",
    "雙硫鍵"
  ],
  answer:1,
  explanation:"氫鍵屬弱作用力，易受熱影響。"
},
{
  id:"MID-022",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["水"],
  question:"水具有高比熱的主要原因為何？",
  options:[
    "共價鍵強",
    "氫鍵網絡",
    "氧原子大",
    "密度高"
  ],
  answer:1,
  explanation:"氫鍵吸收能量。"
},
{
  id:"MID-023",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["緩衝"],
  question:"緩衝液的主要功能為何？",
  options:[
    "提升溫度",
    "維持pH穩定",
    "增加酶活性",
    "產生ATP"
  ],
  answer:1,
  explanation:"抵抗pH變化。"
},
{
  id:"MID-024",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"hard",
  tags:["離子鍵"],
  question:"NaCl中電子完全轉移形成的鍵為何？",
  options:[
    "共價鍵",
    "氫鍵",
    "離子鍵",
    "范德瓦力"
  ],
  answer:2,
  explanation:"電子轉移→離子鍵。"
},
{
  id:"MID-025",
  chapter:"CH1 緒論",
  section:"能量",
  difficulty:"medium",
  tags:["反應"],
  question:"下列哪一種反應需要輸入能量？",
  options:[
    "放熱反應",
    "吸熱反應",
    "氧化反應",
    "水解反應"
  ],
  answer:1,
  explanation:"吸熱需能量。"
},
{
  id:"MID-026",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"hard",
  tags:["結構"],
  question:"胺基酸的α-碳通常連接幾種不同基團？",
  options:[
    "2",
    "3",
    "4",
    "5"
  ],
  answer:2,
  explanation:"四種基團。"
},
{
  id:"MID-027",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"hard",
  tags:["帶電"],
  question:"在生理pH下，哪個胺基酸帶正電？",
  options:[
    "Asp",
    "Glu",
    "Lys",
    "Val"
  ],
  answer:2,
  explanation:"Lys帶正電。"
},
{
  id:"MID-028",
  chapter:"CH2 蛋白質",
  section:"疏水性",
  difficulty:"medium",
  tags:["疏水"],
  question:"哪一類胺基酸最可能位於蛋白質內部？",
  options:[
    "極性",
    "帶電",
    "疏水性",
    "酸性"
  ],
  answer:2,
  explanation:"疏水藏內部。"
},
{
  id:"MID-029",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["β-sheet"],
  question:"β-摺板主要由何種作用力穩定？",
  options:[
    "氫鍵",
    "離子鍵",
    "共價鍵",
    "疏水作用"
  ],
  answer:0,
  explanation:"氫鍵。"
},
{
  id:"MID-030",
  chapter:"CH2 蛋白質",
  section:"結構層級",
  difficulty:"medium",
  tags:["層級"],
  question:"蛋白質的四級結構代表什麼？",
  options:[
    "胺基酸序列",
    "單鏈摺疊",
    "多亞基組合",
    "氫鍵形成"
  ],
  answer:2,
  explanation:"多亞基組成。"
},

{
  id:"MID-031",
  chapter:"CH2 蛋白質",
  section:"鍵結",
  difficulty:"hard",
  tags:["雙硫鍵"],
  question:"雙硫鍵通常由哪兩個胺基酸形成？",
  options:[
    "Gly-Gly",
    "Cys-Cys",
    "Ala-Val",
    "Ser-Thr"
  ],
  answer:1,
  explanation:"Cys形成S-S。"
},
{
  id:"MID-032",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"蛋白質變性後最可能喪失？",
  options:[
    "分子量",
    "生物活性",
    "胺基酸數",
    "元素組成"
  ],
  answer:1,
  explanation:"失去功能。"
},
{
  id:"MID-033",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km"],
  question:"當Km = [S] 時，反應速率為？",
  options:[
    "Vmax",
    "Vmax/2",
    "2Vmax",
    "0"
  ],
  answer:1,
  explanation:"米氏關係。"
},
{
  id:"MID-034",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["曲線"],
  question:"米氏曲線呈現何種型態？",
  options:[
    "直線",
    "S型",
    "雙曲線",
    "指數"
  ],
  answer:2,
  explanation:"雙曲線。"
},
{
  id:"MID-035",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["競爭"],
  question:"增加底物濃度可克服哪種抑制？",
  options:[
    "非競爭",
    "競爭",
    "不可逆",
    "變性"
  ],
  answer:1,
  explanation:"競爭性可克服。"
},
{
  id:"MID-036",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["不可逆"],
  question:"重金屬抑制酶通常屬於？",
  options:[
    "競爭",
    "非競爭",
    "不可逆",
    "弱作用"
  ],
  answer:2,
  explanation:"永久失活。"
},

{
  id:"MID-037",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["溫度"],
  question:"溫度過高會導致酶活性下降的原因是？",
  options:[
    "底物減少",
    "酶變性",
    "pH改變",
    "ATP增加"
  ],
  answer:1,
  explanation:"蛋白質結構破壞。"
},
{
  id:"MID-038",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["pH"],
  question:"酶的最佳pH反映什麼？",
  options:[
    "最大穩定性",
    "最大活性",
    "最低溫度",
    "最低能量"
  ],
  answer:1,
  explanation:"最佳催化。"
},
{
  id:"MID-039",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"hard",
  tags:["鎖鑰"],
  question:"鎖鑰模型強調？",
  options:[
    "酶改變",
    "底物改變",
    "形狀互補",
    "反應逆轉"
  ],
  answer:2,
  explanation:"結構匹配。"
},
{
  id:"MID-040",
  chapter:"CH3 酶",
  section:"效率",
  difficulty:"hard",
  tags:["催化"],
  question:"酶如何加速反應？",
  options:[
    "提高溫度",
    "降低活化能",
    "增加能量",
    "改變pH"
  ],
  answer:1,
  explanation:"降低Ea。"
},

{
  id:"MID-041",
  chapter:"CH1 緒論",
  section:"分子",
  difficulty:"hard",
  tags:["極性"],
  question:"哪種分子最可能形成氫鍵？",
  options:[
    "CH4",
    "CO2",
    "H2O",
    "O2"
  ],
  answer:2,
  explanation:"需H與高電負原子。"
},
{
  id:"MID-042",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["密度"],
  question:"冰比水密度低的原因為何？",
  options:[
    "分子變小",
    "氫鍵形成開放結構",
    "電子增加",
    "氧減少"
  ],
  answer:1,
  explanation:"晶格鬆散。"
},
{
  id:"MID-043",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"hard",
  tags:["芳香族"],
  question:"哪一個屬於芳香族胺基酸？",
  options:[
    "Gly",
    "Phe",
    "Ala",
    "Ser"
  ],
  answer:1,
  explanation:"Phe含苯環。"
},
{
  id:"MID-044",
  chapter:"CH2 蛋白質",
  section:"電荷",
  difficulty:"hard",
  tags:["pH"],
  question:"在低pH環境中，蛋白質傾向？",
  options:[
    "帶負電",
    "帶正電",
    "無電荷",
    "分解"
  ],
  answer:1,
  explanation:"質子增加。"
},
{
  id:"MID-045",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["速率"],
  question:"當酶被底物完全佔據時，速率？",
  options:[
    "增加",
    "減少",
    "達最大",
    "停止"
  ],
  answer:2,
  explanation:"達Vmax。"
},

{
  id:"MID-046",
  chapter:"CH3 酶",
  section:"圖形",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver-Burk圖中截距與何有關？",
  options:[
    "Km",
    "Vmax",
    "1/Vmax",
    "[S]"
  ],
  answer:2,
  explanation:"y截距=1/Vmax。"
},
{
  id:"MID-047",
  chapter:"CH2 蛋白質",
  section:"摺疊",
  difficulty:"hard",
  tags:["疏水"],
  question:"蛋白質內部穩定的重要因素為？",
  options:[
    "氫鍵",
    "疏水作用",
    "共價鍵",
    "電子轉移"
  ],
  answer:1,
  explanation:"疏水核心。"
},
{
  id:"MID-048",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["專一性"],
  question:"酶具有高度專一性的原因為？",
  options:[
    "能量高",
    "結構特異",
    "pH低",
    "溫度高"
  ],
  answer:1,
  explanation:"活性位專一。"
},
{
  id:"MID-049",
  chapter:"CH1 緒論",
  section:"分子",
  difficulty:"medium",
  tags:["作用力"],
  question:"范德瓦力屬於？",
  options:[
    "強作用",
    "弱作用",
    "共價鍵",
    "離子鍵"
  ],
  answer:1,
  explanation:"弱作用力。"
},
{
  id:"MID-050",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["整合"],
  question:"若酶同時受高溫與低pH影響，最可能結果？",
  options:[
    "活性增加",
    "完全穩定",
    "活性下降",
    "無變化"
  ],
  answer:2,
  explanation:"雙重變性。"
},
,
{
  id:"MID-051",
  chapter:"CH3 酶",
  section:"動力學",
  difficulty:"hard",
  tags:["Km","情境"],
  question:"某酶在低底物濃度下仍有高反應速率，最可能代表什麼？",
  options:[
    "Km很大",
    "親和力低",
    "Km很小",
    "酶濃度低"
  ],
  answer:2,
  explanation:"低[S]仍快→Km小→親和力高。"
},
{
  id:"MID-052",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["競爭"],
  question:"若加入競爭性抑制劑，Lineweaver-Burk圖會如何變化？",
  options:[
    "y截距改變",
    "x截距右移",
    "斜率不變",
    "直線消失"
  ],
  answer:1,
  explanation:"Km↑→x截距右移。"
},
{
  id:"MID-053",
  chapter:"CH3 酶",
  section:"抑制",
  difficulty:"hard",
  tags:["非競爭"],
  question:"非競爭性抑制的特徵為？",
  options:[
    "Km改變",
    "Vmax下降",
    "可被底物克服",
    "只作用活性位"
  ],
  answer:1,
  explanation:"Vmax下降。"
},
{
  id:"MID-054",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["誘導契合"],
  question:"誘導契合模型中，主要改變的是？",
  options:[
    "底物形狀",
    "酶構形",
    "反應方向",
    "溫度"
  ],
  answer:1,
  explanation:"酶會變形。"
},
{
  id:"MID-055",
  chapter:"CH3 酶",
  section:"能量",
  difficulty:"hard",
  tags:["活化能"],
  question:"酶降低活化能的本質是？",
  options:[
    "改變ΔG",
    "穩定過渡態",
    "增加熱量",
    "改變平衡"
  ],
  answer:1,
  explanation:"穩定過渡態。"
},

{
  id:"MID-056",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["二級結構"],
  question:"α-螺旋中每圈約包含幾個胺基酸？",
  options:[
    "2.6",
    "3.6",
    "4.6",
    "5.6"
  ],
  answer:1,
  explanation:"約3.6。"
},
{
  id:"MID-057",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["β-sheet"],
  question:"β-摺板可以呈現哪兩種排列？",
  options:[
    "平行與反平行",
    "直線與曲線",
    "單鏈與雙鏈",
    "內外排列"
  ],
  answer:0,
  explanation:"parallel / antiparallel。"
},
{
  id:"MID-058",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["變性"],
  question:"尿素破壞蛋白質結構主要是影響？",
  options:[
    "肽鍵",
    "氫鍵與疏水作用",
    "DNA結構",
    "磷酸鍵"
  ],
  answer:1,
  explanation:"破壞非共價作用。"
},
{
  id:"MID-059",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["蛋白質"],
  question:"血紅素屬於哪一類蛋白？",
  options:[
    "酶",
    "結構蛋白",
    "運輸蛋白",
    "儲存蛋白"
  ],
  answer:2,
  explanation:"運輸氧氣。"
},
{
  id:"MID-060",
  chapter:"CH2 蛋白質",
  section:"結構層級",
  difficulty:"hard",
  tags:["層級"],
  question:"三級結構主要由什麼決定？",
  options:[
    "胺基酸序列",
    "亞基數量",
    "DNA序列",
    "RNA"
  ],
  answer:0,
  explanation:"一級決定三級。"
},

{
  id:"MID-061",
  chapter:"CH1 緒論",
  section:"酸鹼",
  difficulty:"hard",
  tags:["Henderson"],
  question:"當pH = pKa 時，緩衝液中酸鹼比例為？",
  options:[
    "1:1",
    "2:1",
    "1:2",
    "10:1"
  ],
  answer:0,
  explanation:"log(1)=0。"
},
{
  id:"MID-062",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["溶解"],
  question:"水能溶解離子化合物主要因為？",
  options:[
    "高密度",
    "極性",
    "重量輕",
    "低溫"
  ],
  answer:1,
  explanation:"極性溶解。"
},
{
  id:"MID-063",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"hard",
  tags:["共價"],
  question:"下列哪種鍵結最強？",
  options:[
    "氫鍵",
    "范德瓦力",
    "共價鍵",
    "疏水作用"
  ],
  answer:2,
  explanation:"共價最強。"
},
{
  id:"MID-064",
  chapter:"CH1 緒論",
  section:"反應",
  difficulty:"medium",
  tags:["代謝"],
  question:"分解代謝通常伴隨？",
  options:[
    "吸能",
    "放能",
    "無能量變化",
    "DNA增加"
  ],
  answer:1,
  explanation:"分解放能。"
},
{
  id:"MID-065",
  chapter:"CH1 緒論",
  section:"分子",
  difficulty:"hard",
  tags:["極性"],
  question:"CO2 為何為非極性分子？",
  options:[
    "無鍵結",
    "線性對稱",
    "無氧",
    "電子少"
  ],
  answer:1,
  explanation:"對稱抵消。"
},

{
  id:"MID-066",
  chapter:"CH3 酶",
  section:"速率",
  difficulty:"hard",
  tags:["飽和"],
  question:"酶速率達平台時表示？",
  options:[
    "酶過少",
    "底物耗盡",
    "酶已飽和",
    "反應停止"
  ],
  answer:2,
  explanation:"活性位全滿。"
},
{
  id:"MID-067",
  chapter:"CH3 酶",
  section:"圖形",
  difficulty:"hard",
  tags:["Lineweaver"],
  question:"Lineweaver圖中斜率代表？",
  options:[
    "Km/Vmax",
    "Vmax/Km",
    "Km",
    "Vmax"
  ],
  answer:0,
  explanation:"斜率=Km/Vmax。"
},
{
  id:"MID-068",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["綜合"],
  question:"若Km不變但Vmax下降，最可能原因？",
  options:[
    "競爭抑制",
    "非競爭抑制",
    "底物增加",
    "pH最佳"
  ],
  answer:1,
  explanation:"非競爭。"
},
{
  id:"MID-069",
  chapter:"CH2 蛋白質",
  section:"胺基酸",
  difficulty:"hard",
  tags:["酸性"],
  question:"Asp在生理pH下帶什麼電？",
  options:[
    "正",
    "負",
    "中性",
    "雙正"
  ],
  answer:1,
  explanation:"酸性→負電。"
},
{
  id:"MID-070",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["蛋白質"],
  question:"膠原蛋白主要功能？",
  options:[
    "催化",
    "運輸",
    "結構支撐",
    "免疫"
  ],
  answer:2,
  explanation:"結構蛋白。"
},

{
  id:"MID-071",
  chapter:"CH2 蛋白質",
  section:"構形",
  difficulty:"hard",
  tags:["摺疊"],
  question:"蛋白質自發摺疊主要受什麼驅動？",
  options:[
    "共價鍵",
    "疏水效應",
    "電子轉移",
    "DNA控制"
  ],
  answer:1,
  explanation:"疏水核心形成。"
},
{
  id:"MID-072",
  chapter:"CH2 蛋白質",
  section:"電荷",
  difficulty:"hard",
  tags:["pI"],
  question:"當pH < pI 時蛋白質？",
  options:[
    "負電",
    "正電",
    "無電",
    "變性"
  ],
  answer:1,
  explanation:"帶正電。"
},
{
  id:"MID-073",
  chapter:"CH1 緒論",
  section:"緩衝",
  difficulty:"hard",
  tags:["buffer"],
  question:"緩衝能力最強時為？",
  options:[
    "pH=pKa",
    "pH最大",
    "pH最小",
    "溫度最高"
  ],
  answer:0,
  explanation:"最穩定。"
},
{
  id:"MID-074",
  chapter:"CH3 酶",
  section:"效率",
  difficulty:"hard",
  tags:["kcat"],
  question:"kcat代表什麼？",
  options:[
    "酶量",
    "每秒轉換數",
    "Km",
    "底物量"
  ],
  answer:1,
  explanation:"turnover number。"
},
{
  id:"MID-075",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["效率"],
  question:"最有效酶的特徵為？",
  options:[
    "Km高",
    "Km低且kcat高",
    "Vmax低",
    "底物少"
  ],
  answer:1,
  explanation:"效率最高。"
},

{
  id:"MID-076",
  chapter:"CH1 緒論",
  section:"分子",
  difficulty:"medium",
  tags:["作用力"],
  question:"脂質不溶於水主要因為？",
  options:[
    "重量大",
    "非極性",
    "溫度低",
    "密度高"
  ],
  answer:1,
  explanation:"疏水性。"
},
{
  id:"MID-077",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["穩定"],
  question:"蛋白質穩定性最高來自？",
  options:[
    "單一作用力",
    "多重弱作用力",
    "DNA",
    "RNA"
  ],
  answer:1,
  explanation:"多種交互作用。"
},
{
  id:"MID-078",
  chapter:"CH3 酶",
  section:"特性",
  difficulty:"medium",
  tags:["專一"],
  question:"酶專一性主要取決於？",
  options:[
    "溫度",
    "活性位形狀",
    "pH",
    "濃度"
  ],
  answer:1,
  explanation:"結構決定。"
},
{
  id:"MID-079",
  chapter:"CH3 酶",
  section:"反應",
  difficulty:"hard",
  tags:["ΔG"],
  question:"酶是否改變反應平衡？",
  options:[
    "會",
    "不會",
    "部分改變",
    "只改變pH"
  ],
  answer:1,
  explanation:"只影響速率。"
},
{
  id:"MID-080",
  chapter:"CH1 緒論",
  section:"鍵結",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"氫鍵形成條件為？",
  options:[
    "H與C",
    "H與高電負原子",
    "兩金屬",
    "電子轉移"
  ],
  answer:1,
  explanation:"O/N/F。"
},

{
  id:"MID-081",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"hard",
  tags:["疏水"],
  question:"哪個胺基酸最疏水？",
  options:[
    "Leu",
    "Asp",
    "Lys",
    "Ser"
  ],
  answer:0,
  explanation:"Leu疏水。"
},
{
  id:"MID-082",
  chapter:"CH2 蛋白質",
  section:"功能",
  difficulty:"medium",
  tags:["酶"],
  question:"酶本質上屬於？",
  options:[
    "脂質",
    "蛋白質",
    "醣類",
    "核酸"
  ],
  answer:1,
  explanation:"多為蛋白質。"
},
{
  id:"MID-083",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["複合"],
  question:"酶活性下降但Km不變代表？",
  options:[
    "競爭抑制",
    "非競爭抑制",
    "底物減少",
    "溫度增加"
  ],
  answer:1,
  explanation:"典型非競爭。"
},
{
  id:"MID-084",
  chapter:"CH3 酶",
  section:"速率",
  difficulty:"hard",
  tags:["初速"],
  question:"測量初速的目的為？",
  options:[
    "避免底物耗盡",
    "增加Km",
    "增加Vmax",
    "降低溫度"
  ],
  answer:0,
  explanation:"避免變數干擾。"
},
{
  id:"MID-085",
  chapter:"CH1 緒論",
  section:"分子",
  difficulty:"hard",
  tags:["結構"],
  question:"極性分子通常具有？",
  options:[
    "對稱結構",
    "不對稱電荷分布",
    "無電子",
    "無鍵"
  ],
  answer:1,
  explanation:"電荷不均。"
},

{
  id:"MID-086",
  chapter:"CH2 蛋白質",
  section:"構形",
  difficulty:"hard",
  tags:["Ramachandran"],
  question:"蛋白質構形受限於什麼角度？",
  options:[
    "φ與ψ角",
    "α與β角",
    "X與Y",
    "Z角"
  ],
  answer:0,
  explanation:"主鏈角度。"
},
{
  id:"MID-087",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["效率"],
  question:"當kcat/Km很大代表？",
  options:[
    "效率低",
    "效率高",
    "無反應",
    "變性"
  ],
  answer:1,
  explanation:"催化效率指標。"
},
{
  id:"MID-088",
  chapter:"CH3 酶",
  section:"因素",
  difficulty:"medium",
  tags:["濃度"],
  question:"增加酶濃度會如何影響Vmax？",
  options:[
    "下降",
    "上升",
    "不變",
    "消失"
  ],
  answer:1,
  explanation:"酶多→Vmax高。"
},
{
  id:"MID-089",
  chapter:"CH2 蛋白質",
  section:"變性",
  difficulty:"medium",
  tags:["熱"],
  question:"熱變性最先破壞？",
  options:[
    "肽鍵",
    "氫鍵",
    "DNA",
    "RNA"
  ],
  answer:1,
  explanation:"弱作用先壞。"
},
{
  id:"MID-090",
  chapter:"CH1 緒論",
  section:"作用力",
  difficulty:"medium",
  tags:["范德瓦"],
  question:"范德瓦力來源為？",
  options:[
    "電子瞬時偏移",
    "共價鍵",
    "離子交換",
    "熱能"
  ],
  answer:0,
  explanation:"瞬時偶極。"
},

{
  id:"MID-091",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["綜合"],
  question:"若Km與Vmax皆下降，最可能為？",
  options:[
    "競爭抑制",
    "非競爭抑制",
    "混合型抑制",
    "無抑制"
  ],
  answer:2,
  explanation:"混合型影響兩者。"
},
{
  id:"MID-092",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["層級"],
  question:"蛋白質功能最直接相關於？",
  options:[
    "一級",
    "二級",
    "三級",
    "四級"
  ],
  answer:2,
  explanation:"三級決定功能。"
},
{
  id:"MID-093",
  chapter:"CH1 緒論",
  section:"能量",
  difficulty:"medium",
  tags:["ATP"],
  question:"ATP水解釋放能量主要來自？",
  options:[
    "氫鍵",
    "磷酸鍵",
    "肽鍵",
    "雙鍵"
  ],
  answer:1,
  explanation:"高能磷酸鍵。"
},
{
  id:"MID-094",
  chapter:"CH3 酶",
  section:"模型",
  difficulty:"medium",
  tags:["模型"],
  question:"鎖鑰模型適用於？",
  options:[
    "酶變形",
    "完全匹配",
    "底物變形",
    "溫度改變"
  ],
  answer:1,
  explanation:"固定互補。"
},
{
  id:"MID-095",
  chapter:"CH2 蛋白質",
  section:"結構",
  difficulty:"hard",
  tags:["穩定"],
  question:"蛋白質最穩定結構來自？",
  options:[
    "單一鍵",
    "多重交互作用",
    "DNA",
    "ATP"
  ],
  answer:1,
  explanation:"多種作用。"
},

{
  id:"MID-096",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["極難"],
  question:"若酶親和力高但速率低，可能原因？",
  options:[
    "Km低但kcat低",
    "Km高",
    "Vmax高",
    "底物過多"
  ],
  answer:0,
  explanation:"結合強但轉換慢。"
},
{
  id:"MID-097",
  chapter:"CH1 緒論",
  section:"水",
  difficulty:"medium",
  tags:["氫鍵"],
  question:"水的表面張力主要來自？",
  options:[
    "共價鍵",
    "氫鍵",
    "離子鍵",
    "電子轉移"
  ],
  answer:1,
  explanation:"氫鍵作用。"
},
{
  id:"MID-098",
  chapter:"CH2 蛋白質",
  section:"分類",
  difficulty:"hard",
  tags:["極性"],
  question:"哪一個為極性胺基酸？",
  options:[
    "Leu",
    "Ser",
    "Val",
    "Ile"
  ],
  answer:1,
  explanation:"Ser極性。"
},
{
  id:"MID-099",
  chapter:"CH3 酶",
  section:"整合",
  difficulty:"hard",
  tags:["綜合"],
  question:"酶最重要的特性為？",
  options:[
    "能量高",
    "專一性與催化能力",
    "重量大",
    "DNA控制"
  ],
  answer:1,
  explanation:"核心特性。"
},
{
  id:"MID-100",
  chapter:"CH1-3 綜合",
  section:"整合",
  difficulty:"extreme",
  tags:["整合","最難"],
  question:"蛋白質結構、酶活性與環境條件三者關係最正確為？",
  options:[
    "結構不影響功能",
    "環境不影響酶",
    "結構決定功能且受環境影響",
    "酶不需蛋白質"
  ],
  answer:2,
  explanation:"核心整合概念。"
}
];
