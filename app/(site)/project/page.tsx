"use client";

import { useLocale } from "@/lib/i18n/context";
import { ReadyforPageIntro } from "@/components/ReadyforPageIntro";

export default function ProjectPage() {
  const { t } = useLocale();

  return (
    <main>
      <ReadyforPageIntro title={t.nav.project} description={t.projectSummary.description} />
    </main>
  );
}
