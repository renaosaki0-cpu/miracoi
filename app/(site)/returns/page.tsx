"use client";

import { useLocale } from "@/lib/i18n/context";
import { ReadyforPageIntro } from "@/components/ReadyforPageIntro";

export default function ReturnsPage() {
  const { t } = useLocale();

  return (
    <main>
      <ReadyforPageIntro
        title={t.nav.returns}
        description={t.readyfor.note}
      />
    </main>
  );
}
