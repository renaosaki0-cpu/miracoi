import type { SupporterContent, SupporterId } from "@/data/supporters";
import type { Locale } from "./types";

const ja: Record<SupporterId, SupporterContent> = {
  tanabe: {
    name: "田辺将繁",
    title: "介護支援専門員",
    message:
      "自分たちで考え、行動し、海を越えて想いを届けようとする姿に感動しました。ただ支援するのではなく、「共に学び、共に表現する」という姿勢が本当に素敵だと思います。よさこいの音と笑顔が、モザンビークの子どもたちの未来につながることを期待しています。",
  },
  morita: {
    name: "森田鉄平",
    title: "学生団体トンガリーズ 顧問",
    message:
      "「高校生でも世の中は変えられますか？」という問いから始まったトンガリーズ。モザンビークの子どもたちが、「自分の未来は選んでもいい」と思える社会を、鳴子の響きとともに熱く、泥臭く実現していってください。Miracoiだからこそできる温かな世界の創り方が必ずある。最高にトンガった挑戦を心から応援しています。",
  },
  takemitsu: {
    name: "武満蓮",
    title: "大学生",
    message:
      "子どもたちの声を未来へつなぐという大切なテーマを、よさこいという「人の心に残る表現」を通してモザンビークへ届けようとする挑戦に、大きな可能性を感じています。文化や言葉を越えて、子どもたちが自分らしく生きる希望に触れるきっかけになる活動だと思います。高校生だからこそ生まれる熱意と行動力を、心から応援しています。",
  },
  matsui: {
    name: "松井大輝",
    title: "慶應義塾大学 3年",
    message:
      "国の未来は、今を生きる子どもたちの経験や価値観によって形作られていくものだと思います。だからこそ、子どもたちが新たな選択肢を感じられるような「心に残る体験」を届けるこの活動には大きな意義があると感じました。よさこいを通して子どもたちの未来を広げていく挑戦を心から応援しています。",
  },
  ujiihara: {
    name: "氏原千恵",
    title: "教員",
    message:
      "よさこいと子どもたちの声を掛け合わせるアイデア、そしてそれを実現しようとする行動力に心を動かされました。出会いを大切にしながら、たくさんの人へ想いを届けてください。応援しています。",
  },
  huang: {
    name: "黄華",
    title: "中国・高校教師",
    message:
      "日本のよさこいをモザンビークの子どもたちと踊りながら、子どもたちの声を未来へ届けるというアイデアはとてもユニークで力強いですね。文化の壁を越え、笑顔とリズムの中で伝わるものはきっと大きいと思います。高校生でこのような国際的な挑戦をする尾﨑さんを心から応援しています。",
  },
  tanaka: {
    name: "田中恵美子",
    title: "高知県よさこいアンバサダー 絆国際チーム代表",
    message:
      "尾﨑さんは以前、絆国際チームのメンバーとして、共によさこいを通じた国際交流に取り組んでくれました。高校生ユニットMiracoiの挑戦が、よさこいを通してモザンビークの子どもたちの笑顔と未来につながることを心から願っています。これからの活動を楽しみにしています。",
  },
  zhang: {
    name: "張嵩平",
    title: "元上海魯迅記念館職員",
    message:
      "世界は広いですが、ぜひ「飛び立って」ください。モザンビークへ行くことは、とても魅力的で価値のある挑戦です。子どもたちの声は、未来を託す力でもあります。礼菜さん、頑張ってください。中国から応援しています。",
  },
  hayakawa: {
    name: "早川陽介",
    title: "元上海日本人学校浦東校 教員",
    message:
      "当時、小学校中学年だった尾﨑礼菜さんは、明るく行動力があり、芯の強い子だと感じていました。あれから7年。自らの信念を持って海外へ飛び出し、挑戦する姿に感動しています。その勇気ある一歩を全力で応援しています。",
  },
  cai: {
    name: "蔡ジュン",
    title: "上海協同服飾有限公司 総経理",
    message:
      "モザンビークの子どもたちに、よさこいの踊りで想いを伝える尾﨑さんの挑戦に強く惹かれました。言葉や文化が違っても、よさこいのリズムと笑顔はきっと心に響くはずです。たくさんの笑顔と出会える素晴らしい活動になることを願っています。",
  },
  hibi: {
    name: "日比裕介",
    title: "株式会社日本旅行 首都圏広域営業部",
    message:
      "私が初めて海外へ出たのは19歳の春、台湾への一人旅でした。それだけでも人生の分岐点になりました。だからこそ、強い志を持って挑戦するお二人の姿に胸が高鳴ります。日本の常識が通じない異国の地でも、心が通えば必ず感動が生まれます。現地の子どもたちにとって忘れられない存在になってください。",
  },
  kyakumoto: {
    name: "客本牧子",
    title: "福山市中国帰国者をささえる会 代表",
    message:
      "このプロジェクトには大きな可能性を感じています。礼菜さんと安永さんが力を合わせることで、モザンビークの子どもたちにたくさんの笑顔が生まれることでしょう。福山から心を込めて応援しています。これからも人権と共生をテーマにした活動を大切に進めてください。",
  },
  sato: {
    name: "佐藤裕幸",
    title: "一般社団法人 CAP高等学院 代表理事",
    message:
      "このプロジェクトを応援する理由は、よさこいを通して子どもたちの声を考える機会を生み出しているからです。単によさこいを広める活動ではなく、子どもたちの笑顔と未来につながる取り組みであることに共感しました。ぜひ頑張ってください。",
  },
  doji: {
    name: "土師雄大",
    title: "元 JICA海外協力隊 モザンビーク派遣隊員",
    message:
      "モザンビークで活動した経験があるからこそ、皆さんの挑戦の価値を強く感じています。高校生とは思えない行動力と優しさにいつも感心しています。現地の子どもたちに皆さんの想いが届き、多くの笑顔につながることを心から願っています。",
  },
  tadaki: {
    name: "只木良枝",
    title: "フリーランス編集者・記者",
    message:
      "同じ子どもの立場から想いを伝えたい、「今しかできない対話をしたい」という高校生の熱い想いに心を動かされました。よさこいという高知の力強い文化とともに羽ばたくお二人、そして支える現地と日本の皆さまにエールを送ります。健康と安全に気を付けて、実りある旅となることを願っています。報告会を楽しみにしています。",
  },
  seo: {
    name: "妹尾日呂志",
    title: "明光義塾 教室長",
    message:
      "高校生2人がモザンビークへ渡り、よさこいを通じて「学ぶ・遊ぶ・未来を選ぶ」体験を届ける活動を心から応援します。歌や踊りは言葉の壁を越え、子どもたちの自己表現の可能性を広げる素晴らしい手段です。若き挑戦者たちの情熱が現地に笑顔を届けると信じています。皆様のご支援をお願いいたします。",
  },
  jorden: {
    name: "Rashaad Jorden",
    title: "旅行業界専門メディア「Skift」副編集長",
    message:
      "高校生が国境を越えて、文化と音楽を通じて子どもたちの声に耳を傾ける——そんな挑戦に、世界規模での可能性を感じます。Miracoiの活動が、モザンビークと日本、そして世界をつなぐ架け橋になることを期待しています。",
  },
};

const en: Record<SupporterId, SupporterContent> = {
  tanabe: {
    name: "Masashige Tanabe",
    title: "Care Support Specialist",
    message:
      "I was moved by your determination to think for yourselves, take action, and carry your message across the sea. What I love most is your spirit of learning and expressing together — not one-sided support, but coexistence and mutual learning. I hope the sound of Yosakoi and your smiles will connect to the future of children in Mozambique.",
  },
  morita: {
    name: "Teppei Morita",
    title: "Advisor, Student Group Tongaries",
    message:
      "Tongaries began with the question: \"Can high school students change the world?\" Please keep building, with passion and persistence, a society where children in Mozambique feel they can choose their own future — let the sound of naruko lead the way. Miracoi has its own warm way of shaping the world. I am cheering on this bold, Tongaries-style challenge from the bottom of my heart.",
  },
  takemitsu: {
    name: "Ren Takemitsu",
    title: "University Student",
    message:
      "I see tremendous potential in bringing children's voices to the future through Yosakoi — an expression that stays in people's hearts. This work can give children hope to live authentically across cultures and languages. I wholeheartedly support the passion and drive that only high school students can bring.",
  },
  matsui: {
    name: "Daiki Matsui",
    title: "Keio University, 3rd Year",
    message:
      "A nation's future is shaped by the experiences and values of the children living today. That is why this project — delivering unforgettable experiences that open new possibilities — matters so deeply. I fully support your challenge to broaden children's futures through Yosakoi.",
  },
  ujiihara: {
    name: "Chie Ujiihara",
    title: "Teacher",
    message:
      "I was touched by the idea of combining Yosakoi with children's voices, and by your drive to make it real. Cherish every encounter, and keep sharing your message with many people. I am cheering for you.",
  },
  huang: {
    name: "Hua Huang",
    title: "High School Teacher, China",
    message:
      "Dancing Yosakoi with children in Mozambique while carrying their voices into the future is a uniquely powerful idea. So much can travel across cultural walls through smiles and rhythm. I wholeheartedly support Ozaki's international challenge as a high school student.",
  },
  tanaka: {
    name: "Emiko Tanaka",
    title: "Kochi Yosakoi Ambassador · Kizuna International Team Representative",
    message:
      "Ozaki previously worked with our Kizuna International Team on Yosakoi-based exchange. I sincerely hope Miracoi's challenge will connect to smiles and futures for children in Mozambique through Yosakoi. I look forward to what you do next.",
  },
  zhang: {
    name: "Songping Zhang",
    title: "Former Staff, Shanghai Lu Xun Museum",
    message:
      "The world is wide — please take flight. Going to Mozambique is a deeply meaningful and worthwhile challenge. Children's voices carry the power to entrust the future. Rena, do your best. We are cheering for you from China.",
  },
  hayakawa: {
    name: "Yosuke Hayakawa",
    title: "Former Teacher, Shanghai Japanese School (Pudong)",
    message:
      "When Rena Ozaki was in upper elementary school, I saw a bright, proactive child with a strong core. Seven years later, I am moved to see her step overseas with conviction and take on this challenge. I am fully behind that courageous first step.",
  },
  cai: {
    name: "Jun Cai",
    title: "General Manager, Shanghai Xietong Garments Co., Ltd.",
    message:
      "I was deeply drawn to Ozaki's challenge of sharing her message with children in Mozambique through Yosakoi dance. Even across language and culture, Yosakoi's rhythm and smiles will surely reach hearts. I hope this becomes a wonderful journey filled with smiles and connection.",
  },
  hibi: {
    name: "Yusuke Hibi",
    title: "Metropolitan Sales, Nippon Travel Agency Co., Ltd.",
    message:
      "My first trip abroad was a solo journey to Taiwan at nineteen — and that alone changed the course of my life. That is why the two of you, stepping forward with such conviction, stir something in me. Even where Japanese common sense does not apply, hearts that connect always create something moving. Please become unforgettable to the children on the ground.",
  },
  kyakumoto: {
    name: "Makiko Kyakumoto",
    title: "Representative, Fukuyama Association Supporting Returnees from China",
    message:
      "I feel great potential in this project. When Rena and Momoe join forces, I believe many smiles will bloom for children in Mozambique. Warm support from Fukuyama. Please continue to advance work rooted in human rights and coexistence.",
  },
  sato: {
    name: "Hiroyuki Sato",
    title: "Representative Director, CAP High School Academy",
    message:
      "I support this project because it creates space for children to reflect on their voices through Yosakoi. It is not simply about spreading Yosakoi — it connects to children's smiles and futures. Please give it your all.",
  },
  doji: {
    name: "Yudai Doji",
    title: "Former JICA Volunteer, Mozambique",
    message:
      "Having worked in Mozambique myself, I feel the value of your challenge deeply. Your drive and kindness are hard to believe for high school students. I sincerely hope your message reaches local children and turns into many smiles.",
  },
  tadaki: {
    name: "Yoshie Tadaki",
    title: "Freelance Editor & Journalist",
    message:
      "I was moved by the passion of two high school students who want to share from a child's perspective and have dialogue that can only happen now. I send my cheers to both of you, to Yosakoi as Kochi's powerful culture, and to everyone supporting you in Mozambique and Japan. Travel safely, and I look forward to your report session.",
  },
  seo: {
    name: "Hiroshi Seo",
    title: "Classroom Director, Meiko Gijuku",
    message:
      "I wholeheartedly support two high school students traveling to Mozambique to deliver experiences of learning, playing, and choosing the future through Yosakoi. Song and dance cross language barriers and open wonderful possibilities for children's self-expression. I believe the passion of young challengers will bring smiles on the ground. Thank you for your support.",
  },
  jorden: {
    name: "Rashaad Jorden",
    title: "Deputy Editor-in-Chief, Skift (Travel Industry Media)",
    message:
      "High school students crossing borders to listen to children's voices through culture and music — I see global-scale potential in that challenge. I hope Miracoi's work becomes a bridge connecting Mozambique, Japan, and the world.",
  },
};

const pt: Record<SupporterId, SupporterContent> = {
  tanabe: {
    name: "Masashige Tanabe",
    title: "Especialista em Apoio ao Cuidado",
    message:
      "Fiquei comovido com a vossa determinação em pensar, agir e levar a vossa mensagem além-mar. O que mais admiro é o espírito de aprender e expressar juntos — não apoio unilateral, mas coexistência e aprendizagem mútua. Espero que o som do Yosakoi e os vossos sorrisos se liguem ao futuro das crianças em Moçambique.",
  },
  morita: {
    name: "Teppei Morita",
    title: "Orientador, Grupo Estudantil Tongaries",
    message:
      "Os Tongaries começaram com a pergunta: «Podem os estudantes do ensino secundário mudar o mundo?» Continuem a construir, com paixão e persistência, uma sociedade onde as crianças em Moçambique sintam que podem escolher o seu próprio futuro — deixem o som do naruko guiar o caminho. A Miracoi tem a sua própria forma calorosa de moldar o mundo. Apoio de coração este desafio audaz.",
  },
  takemitsu: {
    name: "Ren Takemitsu",
    title: "Estudante Universitário",
    message:
      "Vejo um enorme potencial em levar a voz das crianças ao futuro através do Yosakoi — uma expressão que permanece no coração das pessoas. Este trabalho pode dar às crianças esperança de viver autenticamente, além de culturas e línguas. Apoio totalmente a paixão que só estudantes do ensino secundário podem trazer.",
  },
  matsui: {
    name: "Daiki Matsui",
    title: "Universidade Keio, 3.º Ano",
    message:
      "O futuro de um país é moldado pelas experiências e valores das crianças que vivem hoje. Por isso, este projecto — oferecer experiências inesquecíveis que abrem novas possibilidades — tem um significado profundo. Apoio plenamente o vosso desafio de alargar o futuro das crianças através do Yosakoi.",
  },
  ujiihara: {
    name: "Chie Ujiihara",
    title: "Professora",
    message:
      "Fiquei tocada pela ideia de combinar Yosakoi com a voz das crianças e pela vossa determinação em concretizá-la. Valorizem cada encontro e continuem a partilhar a vossa mensagem. Estou a torcer por vocês.",
  },
  huang: {
    name: "Hua Huang",
    title: "Professora do Ensino Secundário, China",
    message:
      "Dançar Yosakoi com crianças em Moçambique enquanto levam a sua voz ao futuro é uma ideia singularmente poderosa. Muito pode atravessar barreiras culturais através de sorrisos e ritmo. Apoio de coração o desafio internacional da Ozaki como estudante do ensino secundário.",
  },
  tanaka: {
    name: "Emiko Tanaka",
    title: "Embaixadora Yosakoi de Kochi · Representante da Equipa Kizuna International",
    message:
      "A Ozaki trabalhou anteriormente connosco na equipa Kizuna International em intercâmbio através do Yosakoi. Desejo sinceramente que o desafio da Miracoi se ligue aos sorrisos e ao futuro das crianças em Moçambique. Aguardo com expectativa as próximas actividades.",
  },
  zhang: {
    name: "Songping Zhang",
    title: "Ex-Funcionário, Museu Lu Xun de Xangai",
    message:
      "O mundo é vasto — voem. Ir a Moçambique é um desafio profundamente significativo. A voz das crianças carrega o poder de confiar o futuro. Rena, força. Estamos a torcer por ti desde a China.",
  },
  hayakawa: {
    name: "Yosuke Hayakawa",
    title: "Ex-Professor, Escola Japonesa de Xangai (Pudong)",
    message:
      "Quando a Rena Ozaki estava no ensino primário, vi uma criança alegre, proactiva e com um núcleo forte. Sete anos depois, emociona-me vê-la ir para o estrangeiro com convicção. Apoio totalmente esse primeiro passo corajoso.",
  },
  cai: {
    name: "Jun Cai",
    title: "Director-Geral, Shanghai Xietong Garments Co., Ltd.",
    message:
      "Fiquei profundamente atraído pelo desafio da Ozaki de partilhar a sua mensagem com crianças em Moçambique através da dança Yosakoi. Mesmo através de língua e cultura, o ritmo e os sorrisos do Yosakoi certamente tocarão corações. Espero que seja uma jornada cheia de sorrisos e ligação.",
  },
  hibi: {
    name: "Yusuke Hibi",
    title: "Vendas Metropolitanas, Nippon Travel Agency Co., Ltd.",
    message:
      "A minha primeira viagem ao estrangeiro foi sozinho para Taiwan aos dezanove anos — e isso mudou o rumo da minha vida. Por isso, ver-vos avançar com tanta convicção comove-me. Mesmo onde o senso comum japonês não se aplica, corações que se ligam sempre criam algo profundo. Tornem-se inesquecíveis para as crianças no terreno.",
  },
  kyakumoto: {
    name: "Makiko Kyakumoto",
    title: "Representante, Associação de Fukuyama de Apoio a Repatriados da China",
    message:
      "Sinto um grande potencial neste projecto. Quando a Rena e a Momoe unem forças, acredito que muitos sorrisos florescerão para as crianças em Moçambique. Apoio caloroso de Fukuyama. Continuem a avançar com actividades enraizadas nos direitos humanos e na coexistência.",
  },
  sato: {
    name: "Hiroyuki Sato",
    title: "Director Representante, CAP High School Academy",
    message:
      "Apoio este projecto porque cria espaço para as crianças reflectirem sobre a sua voz através do Yosakoi. Não se trata apenas de difundir Yosakoi — liga-se aos sorrisos e ao futuro das crianças. Força.",
  },
  doji: {
    name: "Yudai Doji",
    title: "Ex-Voluntário JICA, Moçambique",
    message:
      "Tendo trabalhado em Moçambique, sinto profundamente o valor do vosso desafio. A vossa determinação e gentileza são difíceis de crer para estudantes do ensino secundário. Desejo sinceramente que a vossa mensagem chegue às crianças locais e se transforme em muitos sorrisos.",
  },
  tadaki: {
    name: "Yoshie Tadaki",
    title: "Editora e Jornalista Freelance",
    message:
      "Fiquei comovida pela paixão de dois estudantes que querem partilhar da perspectiva de uma criança e ter um diálogo que só pode acontecer agora. Envio os meus votos a ambos, ao Yosakoi como cultura poderosa de Kochi, e a todos que os apoiam em Moçambique e no Japão. Viajem com segurança — aguardo a sessão de relatório.",
  },
  seo: {
    name: "Hiroshi Seo",
    title: "Director de Sala, Meiko Gijuku",
    message:
      "Apoio de coração dois estudantes que vão a Moçambique levar experiências de aprender, brincar e escolher o futuro através do Yosakoi. Canção e dança ultrapassam barreiras linguísticas e abrem possibilidades maravilhosas de autoexpressão. Acredito que a paixão dos jovens desafiantes levará sorrisos ao terreno.",
  },
  jorden: {
    name: "Rashaad Jorden",
    title: "Vice-Editor-Chefe, Skift (Media da Indústria de Viagens)",
    message:
      "Estudantes do ensino secundário a cruzar fronteiras para ouvir a voz das crianças através da cultura e da música — vejo potencial à escala global nesse desafio. Espero que o trabalho da Miracoi se torne uma ponte entre Moçambique, o Japão e o mundo.",
  },
};

export const supporterItemsByLocale: Record<Locale, Record<SupporterId, SupporterContent>> = {
  ja,
  en,
  pt,
};
