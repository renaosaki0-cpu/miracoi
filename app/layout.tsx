import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Zen_Kurenaido } from "next/font/google";
import { getMiracoiIconSrc } from "@/lib/miracoiIcon";
import { getOgImageMetadata, getOgImageUrls } from "@/lib/ogImages";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zenKurenaido = Zen_Kurenaido({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ogImages = getOgImageMetadata();
const ogImageUrls = getOgImageUrls();
const miracoiIconSrc = getMiracoiIconSrc();

export const metadata: Metadata = {
  title: {
    default: "Miracoi（ミラコイ）| 子どもたちの声を未来へつなぐ",
    template: "%s | Miracoi",
  },
  description:
    "高校生ユニットMiracoiは、よさこいを通じてモザンビークの子どもたちの声を聞き、未来へつなぐ国際協力プロジェクト。77万円のクラウドファンディングにご支援ください。",
  keywords: ["Miracoi", "ミラコイ", "よさこい", "モザンビーク", "クラウドファンディング", "高校生", "国際協力"],
  metadataBase: new URL("https://miracoi.jp"),
  icons: {
    icon: [{ url: miracoiIconSrc, type: "image/png" }],
    apple: [{ url: miracoiIconSrc, type: "image/png", sizes: "180x180" }],
    shortcut: miracoiIconSrc,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://miracoi.jp",
    siteName: "Miracoi",
    title: "Miracoi | 子どもたちの声を未来へつなぐ",
    description: "よさこいを通じて、モザンビークの子どもたちの声を未来へつなぐ。高校生2人の挑戦を、あなたの支援で。",
    ...(ogImages ? { images: ogImages } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracoi | 子どもたちの声を未来へつなぐ",
    description: "よさこいを通じて、モザンビークの子どもたちの声を未来へつなぐ高校生ユニット。",
    ...(ogImageUrls ? { images: ogImageUrls } : {}),
  },
  verification: {
    google: "8LY9TmO1SyqWr6S1Gb6PQFcEe07czDgRUvN-O-INXTc",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${notoSansJP.variable} ${inter.variable} ${zenKurenaido.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
