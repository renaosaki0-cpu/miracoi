import { LocaleProvider } from "@/lib/i18n/context";
import { Header, HeaderSpacer } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickySupport, StickySupportSpacer } from "@/components/StickySupport";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <HeaderSpacer />
      {children}
      <StickySupportSpacer />
      <Footer />
      <StickySupport />
    </LocaleProvider>
  );
}
