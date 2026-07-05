/** プロジェクト本文データ — READYFOR プロジェクト #171875 / miracoi-mozambique より */

export type MissionCard = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type WhyBlock = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type ProjectStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  details?: string[];
  image: string;
};

export type ScheduleItem = {
  id: string;
  date: string;
  place: string;
  activity: string;
};

export type BudgetItem = {
  id: string;
  label: string;
  amount: number;
  note: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  origin: string;
  bio: string[];
  message: string;
  instagram?: string;
  instagramHandle?: string;
};

export const missionCards: MissionCard[] = [
  {
    id: "connect",
    label: "01",
    title: "よさこいでつながる",
    description:
      "よさこいを通して信頼関係を築き、安心して自分を表現できる環境をつくります。",
  },
  {
    id: "listen",
    label: "02",
    title: "子どもたちの声を聞く",
    description:
      "夢や希望、悩みや想いに耳を傾け、一人ひとりの声を大切にします。",
  },
  {
    id: "bridge",
    label: "03",
    title: "声を未来へつなぐ",
    description:
      "子どもたちの声を、音楽や発信を通して届け、未来へつないでいきます。",
  },
  {
    id: "society",
    label: "04",
    title: "夢や未来を語れる社会へ",
    description:
      "子どもたち一人ひとりが、自分の声を大切にされ、夢や未来を安心して語れる社会をつくります。",
  },
];

export const whyBlocks: WhyBlock[] = [
  {
    id: "mozambique",
    title: "なぜモザンビークなのか",
    subtitle: "5年以上続く交流があるから",
    description:
      "安永が小学生の頃からモザンビークに関心を持ち、同級生とNGOを立ち上げ、5年以上にわたって交流を続けてきました。現地の学校や村とのつながりがあり、子どもたちの名前や顔を知っています。一度きりではなく、その後も関係を築き続けることができます。",
    image: "/images/why-mozambique.jpg",
  },
  {
    id: "yosakoi",
    title: "なぜよさこいなのか",
    subtitle: "言葉が通じなくても、心は通じる",
    description:
      "現地ではすでによさこいの馴染みがあり、本物の鳴子を持ち込み、同じ空間でよさこいの熱量を子どもたちと一緒に感じたいと考えています。よさこいは村全体を巻き込む一体感を作れ、鳴子の音が重なったとき、子どもたち一人ひとりの声が集まった大きなメッセージになります。",
    image: "/images/why-yosakoi.jpg",
  },
  {
    id: "now",
    title: "なぜ「今」チャレンジするのか",
    subtitle: "同世代の仲間として対話するから",
    description:
      "私たち自身もまだ高校生です。教える側ではなく、同じ子ども世代の仲間としてフラットに対話できると考えています。「大人になってから」ではなく、今しかできない対等な対話をするために、私たちは「今」、挑戦します。",
    image: "/images/why-now.jpg",
  },
];

export const projectSteps: ProjectStep[] = [
  {
    id: "step1",
    step: 1,
    title: "『この地へ〜』よさこいワークショップ",
    description:
      "高知よさこい総踊り「この地へ〜」を通して、合計約80〜100名の子どもたちと交流します。「みんな夢を描いて 今日も愛を語ろう」という歌詞に込められた想いを、活動の発点とします。",
    details: [
      "よさこいの歌や踊りを通して、一緒に楽しみ、交流",
      "子どもたちと出会い、信頼関係を築く",
      "「自分の声を話してもいい」と思える環境をつくる",
    ],
    image: "/images/project-workshop.jpg",
  },
  {
    id: "step2",
    step: 2,
    title: "夢メッセージワーク",
    description:
      "よさこいを通して打ち解けた後、発信に同意いただいた10〜20名程度の子どもたち一人ひとりの声を聞く時間を設けます。",
    details: [
      "どんなことに悩んでいるのか、やってみたいこと",
      "言葉や絵、メッセージカードで自由に表現",
      "同意を得た上で、報告会やSNS等を通して届ける",
    ],
    image: "/images/project-dream.jpg",
  },
  {
    id: "step3",
    step: 3,
    title: "オリジナル楽曲制作",
    description:
      "夢メッセージワークで集めた声をもとに、子どもたち一人ひとりの夢・希望・悩み・未来への想いを歌詞に反映し、オリジナルのよさこい楽曲を制作します。",
    details: [
      "子どもたちの声 → 歌詞に反映 → 楽曲制作",
      "帰国後も現地に残り、歌い踊り続けられる形に",
      "鳴子を学校や地域へ寄贈",
    ],
    image: "/images/project-song.jpg",
  },
  {
    id: "step4",
    step: 4,
    title: "一緒に歌い、踊る",
    description:
      "オリジナル楽曲を、モザンビークの子どもたちと一緒に歌い、踊ります。自分たちの声や想いが歌や踊りになった喜びを感じ、表現する楽しさや自信につなげます。",
    details: [
      "歌う・踊る・鳴子を鳴らす・笑顔を分かち合う",
      "聞くだけではなく、歌い踊ることで心に残る体験へ",
      "自分の声が大切にされる経験が自信につながる",
    ],
    image: "/images/project-dance.jpg",
  },
];

export const scheduleItems: ScheduleItem[] = [
  {
    id: "d1",
    date: "9/6（日）",
    place: "マプト",
    activity: "尾﨑・安永が合流。訪問予定先の学校関係者との打ち合わせ",
  },
  {
    id: "d2",
    date: "9/7（月）",
    place: "シニャングァニーネ村",
    activity: "シニャングァニーネ村の小学校を訪問し、活動を実施",
  },
  {
    id: "d3",
    date: "9/8（火）",
    place: "ボンドイア村",
    activity: "ボンドイア村の小学校を訪問し、活動を実施",
  },
  {
    id: "d4",
    date: "9/9（水）",
    place: "マプト",
    activity: "ベンフィカノヴァ中等教育学校を訪問し、活動を実施",
  },
  {
    id: "d5",
    date: "9/10（木）",
    place: "マプト",
    activity: "現地での活動の振り返り。尾﨑・安永が日本へ帰国",
  },
];

export const budgetItems: BudgetItem[] = [
  { id: "travel", label: "旅費", amount: 480000, note: "渡航費（自費を含む）" },
  {
    id: "stay",
    label: "滞在費",
    amount: 90000,
    note: "ホテル、現地移動の車、ガソリン、運転手、現地通訳 等",
  },
  {
    id: "goods",
    label: "よさこいグッズ",
    amount: 60740,
    note: "子どもたちに届ける鳴子、はっぴ、法被の装飾材料 等",
  },
  {
    id: "fee",
    label: "手数料等",
    amount: 139260,
    note: "READYFORの利用手数料、決済手数料 等",
  },
];

export const impactGoals = [
  {
    id: "g1",
    text: "80〜100名の子どもたちが、よさこいで自分の声を表現できる場をつくる",
  },
  {
    id: "g2",
    text: "10〜20名の子どもたちの夢や悩みに耳を傾け、その声を未来へつなぐ",
  },
  {
    id: "g3",
    text: "日本の子どもたちが、世界の同世代の声に触れる機会をつくる",
  },
  {
    id: "g4",
    text: "子どもたちの声をもとにした楽曲を制作し、国境を越えた仲間が一つのチームになるきっかけをつくる",
  },
];

export const members: Member[] = [
  {
    id: "ozaki",
    name: "尾﨑礼菜",
    role: "共同代表",
    origin: "高知県出身・高校3年",
    bio: [
      "映画「世界の通学路」を機に発展途上国の貧困格差に関心を持つ。",
      "公文国際奨学生として15か国を訪問し、ザンビアでの支援活動を経験。",
      "一方的な支援ではなく、対等に向き合う「共生」をテーマに活動。",
      "トビタテ！留学JAPAN第11期生としてタンザニア渡航予定。",
      "よさこい歴11年目。海外で日本の伝統文化を伝える活動にも携わる。",
    ],
    message:
      "言葉が通じなくても、心は通じる。11年間向き合ってきたよさこいを、アフリカの子どもたちと想いを共有するきっかけとして届けたいです。",
    instagram: "https://www.instagram.com/rena.osaki?igsh=ZThrcG8wcDhneGNt&utm_source=qr",
    instagramHandle: "rena.osaki",
  },
  {
    id: "yasunaga",
    name: "安永百恵",
    role: "共同代表",
    origin: "愛媛県出身・高校2年",
    bio: [
      "小学校の授業での交流をきっかけにモザンビークに関心を持つ。",
      "同級生とモザンビークとの交流活動を行うNGOを立ち上げ、活動5年目。",
      "中学2年時に現地を訪問。児童婚や児童労働などを目の当たりに。",
      "「子どもが自ら未来を選択できる社会」の実現に向け活動を続ける。",
      "トビタテ！留学JAPAN第11期生としてモザンビーク渡航予定。",
    ],
    message:
      "「次は日本で会おう。」——あの約束が消えたわけではありません。今度は、子どもたち一人ひとりの声を聞きに行きます。",
    instagram: "https://www.instagram.com/hoyo_mm3?igsh=MW41OGxvYzJqM3FpdQ==",
    instagramHandle: "hoyo_mm3",
  },
];

export const mozambiqueStats = [
  { label: "18歳未満での結婚・事実婚（20〜24歳女性）", value: "約48%" },
  { label: "児童労働（農村部は都市部の約3倍）", value: "—" },
  { label: "出生登録されていない子ども", value: "10人に3人" },
];

export const postReturnActivities = [
  {
    period: "2026年秋",
    title: "報告会・上映会",
    description: "現地で聞いた子どもたちの声や学びを、日本の学校や地域へ届けます。",
  },
  {
    period: "帰国後〜継続",
    title: "継続的な発信と交流",
    description: "SNSやオンライン交流を通して、日本とモザンビークをつなぎ続けます。",
  },
  {
    period: "将来的な目標",
    title: "よさこいチームの結成",
    description:
      "日本とモザンビークの子どもたちが共に参加できるチームづくりを目指します。",
  },
];
