import type { Metadata } from "next";
import { TermsPageContent } from "@/components/TermsPageContent";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "Miracoiウェブサイトの利用規約です。サイトのご利用にあたっての条件、禁止事項、著作権、免責事項等について定めています。",
  openGraph: {
    title: "利用規約 | Miracoi",
    description:
      "Miracoiウェブサイトの利用規約です。サイトのご利用にあたっての条件、禁止事項、著作権、免責事項等について定めています。",
    url: "https://miracoi.jp/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <TermsPageContent />
    </main>
  );
}
