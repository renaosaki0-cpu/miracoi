"use client";

import { useLocale } from "@/lib/i18n/context";
import { FlowDownArrow, FlowRightArrow, SongFlowIcon } from "../ui/ProjectPanelIcons";

/** 活動内容 — オリジナル楽曲について */
export function ProjectOriginalSongPanel() {
  const { t } = useLocale();
  const tab = t.project.tabs["original-song"];
  const {
    songHeadline,
    songIntro,
    songThemes,
    songClosing,
    songFlowTitle,
    songFlow,
    songGoalsTitle,
    songGoals,
  } = t.project.panels;

  return (
    <div className="mx-auto max-w-4xl space-y-10 md:space-y-14">
      <header>
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-4 text-lg font-bold leading-snug text-text md:mt-5 md:text-xl">{songHeadline}</p>
        <p className="mt-5 text-sm leading-[1.9] text-subtext md:text-base">
          {songIntro}
          <span className="mt-3 block">
            {songThemes.map((theme) => (
              <span key={theme} className="block pl-1">
                ・{theme}
              </span>
            ))}
          </span>
          {songClosing}
        </p>
      </header>

      <div>
        <h4 className="text-center text-base font-bold text-text md:text-lg">{songFlowTitle}</h4>

        <div className="mt-6 flex flex-col md:mt-8 md:flex-row md:items-stretch">
          {songFlow.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
              <article className="card-surface flex h-full flex-col gap-4 border border-primary/10 p-5 md:p-6">
                <div className="icon-badge shrink-0">
                  <SongFlowIcon id={step.id} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text md:text-base">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">{step.description}</p>
                </div>
              </article>

              {index < songFlow.length - 1 && (
                <div
                  className="flex shrink-0 items-center justify-center py-3 md:px-3 md:py-0"
                  aria-hidden
                >
                  <span className="md:hidden">
                    <FlowDownArrow />
                  </span>
                  <span className="hidden md:block">
                    <FlowRightArrow />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-6 md:p-8">
        <h4 className="text-base font-bold text-text md:text-lg">{songGoalsTitle}</h4>
        <ul className="mt-5 space-y-3">
          {songGoals.map((goal) => (
            <li key={goal} className="flex gap-3 text-sm text-text md:text-base">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                ✓
              </span>
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
