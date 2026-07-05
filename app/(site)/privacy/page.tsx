import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Miracoiウェブサイトのプライバシーポリシーです。個人情報の取得・利用目的・管理方法、Cookieの利用等について定めています。",
  openGraph: {
    title: "プライバシーポリシー | Miracoi",
    description:
      "Miracoiウェブサイトのプライバシーポリシーです。個人情報の取得・利用目的・管理方法、Cookieの利用等について定めています。",
    url: "https://miracoi.jp/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyPageContent />
    </main>
  );
}
