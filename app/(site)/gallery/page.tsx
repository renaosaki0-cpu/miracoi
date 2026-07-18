"use client";

import { useLocale } from "@/lib/i18n/context";
import { ReadyforPageIntro } from "@/components/ReadyforPageIntro";

export default function GalleryPage() {
  const { t } = useLocale();

  return (
    <main>
      <ReadyforPageIntro title={t.nav.gallery} description={t.readyfor.note} />
    </main>
  );
}
