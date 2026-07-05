import type { Metadata } from "next";
import { getOgImageMetadata } from "@/lib/ogImages";

const BASE = "https://miracoi.jp";
const ogImages = getOgImageMetadata();
const ogImagesField = ogImages ? { images: ogImages } : {};

export const PAGE_METADATA: Record<string, Metadata> = {
  home: {
    title: "Miracoi（ミラコイ）| 子どもたちの声を未来へつなぐ",
    description:
      "高校生2人がよさこいでモザンビークの子どもたちの声を未来へつなぐ。77万円のクラウドファンディングにご支援ください。",
    openGraph: {
      title: "Miracoi | 子どもたちの声を未来へつなぐ",
      description: "よさこいを通じて、モザンビークの子どもたちの声を未来へつなぐ高校生の挑戦。",
      url: BASE,
      ...ogImagesField,
    },
  },
  project: {
    title: "プロジェクト",
    description: "モザンビークで実際に行う活動を、3つのテーマに分けてご紹介します。",
    openGraph: { url: `${BASE}/project`, ...ogImagesField },
  },
  gallery: {
    title: "Gallery",
    description: "Miracoiの挑戦を、写真で。モザンビークでのよさこい交流の記録。",
    openGraph: { url: `${BASE}/gallery`, ...ogImagesField },
  },
  returns: {
    title: "支援リターン",
    description: "3,000円から140,000円まで。あなたに合った支援方法をお選びください。",
    openGraph: { url: `${BASE}/returns`, ...ogImagesField },
  },
  supporters: {
    title: "応援メッセージ",
    description: "Miracoiの挑戦を応援してくださった方々からの温かいメッセージ。",
    openGraph: { url: `${BASE}/supporters`, ...ogImagesField },
  },
  faq: {
    title: "よくある質問",
    description: "支援・活動・寄付金控除など、よくいただく質問にお答えします。",
    openGraph: { url: `${BASE}/faq`, ...ogImagesField },
  },
  contact: {
    title: "お問い合わせ",
    description: "活動に関するご質問、メディア取材、応援メッセージの送付はこちらから。",
    openGraph: { url: `${BASE}/contact`, ...ogImagesField },
  },
  terms: {
    title: "利用規約",
    description:
      "Miracoiウェブサイトの利用規約です。サイトのご利用にあたっての条件、禁止事項、著作権、免責事項等について定めています。",
    openGraph: { url: `${BASE}/terms`, ...ogImagesField },
  },
  privacy: {
    title: "プライバシーポリシー",
    description:
      "Miracoiウェブサイトのプライバシーポリシーです。個人情報の取得・利用目的・管理方法、Cookieの利用等について定めています。",
    openGraph: { url: `${BASE}/privacy`, ...ogImagesField },
  },
};
