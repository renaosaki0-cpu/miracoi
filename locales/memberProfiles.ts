import type { Locale } from "./types";

export type MemberId = "ozaki" | "yasunaga";

export type MemberProfile = {
  name: string;
  role: string;
  origin: string;
  bio: string[];
  message: string;
};

const ja: Record<MemberId, MemberProfile> = {
  ozaki: {
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
  },
  yasunaga: {
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
  },
};

const en: Record<MemberId, MemberProfile> = {
  ozaki: {
    name: "Rena Ozaki",
    role: "Co-Representative",
    origin: "From Kochi Prefecture · High school senior (Grade 12)",
    bio: [
      "The film School on the Move sparked her interest in poverty and inequality in developing countries.",
      "As a Kumon International Scholar, she visited 15 countries and experienced support work in Zambia.",
      "Her work centers on coexistence — meeting others as equals, not one-sided support, but coexistence and mutual learning.",
      "Selected for Tobitate! Study Abroad JAPAN (Cohort 11), with plans to travel to Tanzania.",
      "Eleven years of Yosakoi experience, including sharing Japanese traditional culture overseas.",
    ],
    message:
      "Even without words, hearts connect. I want to bring 11 years of Yosakoi — and a chance to share what we feel — to children in Africa.",
  },
  yasunaga: {
    name: "Momoe Yasunaga",
    role: "Co-Representative",
    origin: "From Ehime Prefecture · High school sophomore (Grade 11)",
    bio: [
      "A classroom exchange in elementary school sparked her interest in Mozambique.",
      "She co-founded an NGO with classmates for exchange with Mozambique — now in its fifth year.",
      "She visited Mozambique in her second year of junior high and witnessed child marriage and child labor.",
      "She continues working toward a society where children can choose their own future.",
      "Selected for Tobitate! Study Abroad JAPAN (Cohort 11), with plans to travel to Mozambique.",
    ],
    message:
      "\"See you in Japan.\" — That promise did not disappear. This time, we go to listen to each child's voice.",
  },
};

const pt: Record<MemberId, MemberProfile> = {
  ozaki: {
    name: "Rena Ozaki",
    role: "Co-Representante",
    origin: "Da Prefeitura de Kochi · 3.º ano do ensino secundário",
    bio: [
      "O filme School on the Move despertou o seu interesse pela pobreza e desigualdade nos países em desenvolvimento.",
      "Como Bolseira Internacional Kumon, visitou 15 países e experienciou trabalho de apoio na Zâmbia.",
      "O seu trabalho centra-se na coexistência — encontrar os outros como iguais, não apoio unilateral, mas coexistência e aprendizagem mútua.",
      "Seleccionada para Tobitate! Study Abroad JAPAN (11.ª edição), com planos de viajar para a Tanzânia.",
      "Onze anos de experiência em Yosakoi, incluindo partilha da cultura tradicional japonesa no estrangeiro.",
    ],
    message:
      "Mesmo sem palavras, os corações ligam-se. Quero levar 11 anos de Yosakoi — e uma oportunidade de partilhar o que sentimos — às crianças em África.",
  },
  yasunaga: {
    name: "Momoe Yasunaga",
    role: "Co-Representante",
    origin: "Da Prefeitura de Ehime · 2.º ano do ensino secundário",
    bio: [
      "Um intercâmbio na sala de aula no ensino primário despertou o seu interesse por Moçambique.",
      "Co-fundou uma ONG com colegas para intercâmbio com Moçambique — agora no 5.º ano.",
      "Visitou Moçambique no segundo ano do ensino secundário e testemunhou casamentos infantis e trabalho infantil.",
      "Continua a trabalhar por uma sociedade onde as crianças possam escolher o seu próprio futuro.",
      "Seleccionada para Tobitate! Study Abroad JAPAN (11.ª edição), com planos de viajar para Moçambique.",
    ],
    message:
      "«Vejo-te no Japão.» — Essa promessa não desapareceu. Desta vez, vamos ouvir a voz de cada criança.",
  },
};

export const memberProfilesByLocale: Record<Locale, Record<MemberId, MemberProfile>> = {
  ja,
  en,
  pt,
};

export const MEMBER_ORDER: MemberId[] = ["ozaki", "yasunaga"];
