/** ロケール共通の辞書型 — 文字列リテラルではなく string を使用 */
export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    ourStory: string;
    project: string;
    gallery: string;
    returns: string;
    supporters: string;
    faq: string;
    contact: string;
    support: string;
    menu: string;
    viewMore: string;
    language: string;
    languageSelect: string;
  };
  footer: {
    tagline: string;
    subtitle: string;
    project: string;
    supporters: string;
    contact: string;
    instagram: string;
    terms: string;
    privacy: string;
    copyright: string;
    supportCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitleLines: string[];
    cta: string;
  };
  readyfor: {
    support: string;
    viewProject: string;
    readStory: string;
    ctaLearnMore: string;
    ctaReadStory: string;
    ctaFullProject: string;
    note: string;
    detailsOnReadyfor: string;
  };
  home: {
    whoWeAre: HomeNarrativeSection;
    whyMozambique: HomeNarrativeSection;
    whatWeHope: HomeNarrativeIdeasSection;
    whatMakesDifferent: HomeNarrativeSection;
    afterProject: HomeNarrativeSection;
  };
  projectSummary: {
    title: string;
    description: string;
    points: string[];
    readyforNote: string;
    cta: string;
  };
  story: {
    label: string;
    title: string;
    description: string;
    quote: string;
    p1: string;
    p2: string;
    p3: string;
    highlight: string;
    cta: string;
    /** Short, personal, handwritten-style statement marking the emotional turning point */
    turningPoint: string;
    sharedVision: {
      line1: string;
      line2: string;
      body: string;
    };
    learningPhoto: { alt: string; caption: string };
  };
  mission: {
    label: string;
    title: string;
    description: string;
    cards: { label: string; title: string; description: string }[];
  };
  projectCore: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  project: {
    label: string;
    title: string;
    description: string;
    tabs: Record<
      string,
      {
        title: string;
        description: string;
        quote?: string;
        points?: string[];
        note?: string;
      }
    >;
    panels: {
      localHighlights: { id: string; label: string }[];
      localActivityItems: { id: string; title: string; paragraphs: string[] }[];
      songHeadline: string;
      songIntro: string;
      songThemes: string[];
      songClosing: string;
      songFlowTitle: string;
      songFlow: { id: string; title: string; description: string }[];
      songGoalsTitle: string;
      songGoals: string[];
      scheduleDateRange: string;
      scheduleItems: { date: string; title?: string; details?: string[] }[];
      postReturnTitle: string;
      postReturnItems: { id: string; label: string }[];
    };
  };
  impact: {
    label: string;
    title: string;
    description: string;
    stats: { value: string; unit: string; label: string }[];
  };
  progress: {
    label: string;
    title: string;
    description: string;
    goal: string;
    current: string;
    remaining: string;
    rate: string;
    people: string;
    yen: string;
    cta: string;
  };
  projectPage: {
    label: string;
    title: string;
    intro: string;
    visits: {
      label: string;
      heading: string;
      description: string;
    };
    schools: { id: string; name: string; place: string; date: string; note?: string }[];
    sharedActivities: {
      label: string;
      heading: string;
      description: string;
      items: { id: string; title: string; paragraphs: string[] }[];
    };
    scheduleSection: {
      label: string;
      heading: string;
      note: string;
      items: { date: string; title: string }[];
      postReturnTitle: string;
      postReturnItems: { id: string; label: string }[];
    };
    localActivities: {
      schoolsLabel: string;
      schoolsHeading: string;
      schoolsSubheading?: string;
      activityItems: { id: string; title: string; description: string }[];
    };
    cta: string;
  };
  returnsPage: {
    label: string;
    title: string;
    description: string;
    recommendedHint: string;
    badgePopular: string;
    badgeRecommended: string;
    badgePremium: string;
    impactPrefix: string;
    support: string;
    items: Record<string, { title: string; description: string; impact: string }>;
  };
  supportImpact: {
    label: string;
    title: string;
    subtitle: string;
    yen: string;
    items: { amount: number; description: string }[];
  };
  schedule: {
    label: string;
    title: string;
    description: string;
    note: string;
    items: { date: string; place: string; activity: string }[];
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    reportsLabel: string;
    comingSoon: {
      badge: string;
      sectionTitle: string;
      lead: string;
      closing: string;
      cardTitle: string;
      cardNote: string;
    };
    viewOnInstagram: string;
    closeModal: string;
    readMore: string;
    records: { title: string; date: string; body: string; alt: string }[];
  };
  supporters: {
    label: string;
    title: string;
    description: string;
    descriptionCount: string;
    readMore: string;
    close: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaSupport: string;
    viewAll: string;
    submitTitle: string;
    submitDescription: string;
    submitButton: string;
    items: Record<string, { name: string; title: string; message: string }>;
  };
  members: {
    label: string;
    title: string;
    description: string;
    profiles: Record<
      string,
      {
        name: string;
        role: string;
        origin: string;
        bio: string[];
        message: string;
      }
    >;
  };
  support: {
    label: string;
    title: string;
    description: string;
    goal: string;
    current: string;
    remaining: string;
    supporters: string;
    yen: string;
    people: string;
    period: string;
    countdownRemaining: string;
    countdownUntilStart: string;
    countdownEnded: string;
    countdownDays: string;
    countdownHours: string;
    countdownDaysUntilStart: string;
    beforeStartNote: string;
    goalRemaining: { before: string; after: string; amountFirst: boolean };
    goalAchieved: string;
    whatChanges: string;
    changes: string[];
    usage: string;
    cta: string;
    budgetTotalLabel: string;
    budgetTotalSuffix: string;
    budgetChartLabel: string;
    budgetItems: { label: string }[];
  };
  returns: {
    label: string;
    title: string;
    description: string;
    tabWithReturn: string;
    tabNoReturn: string;
    viewDetails: string;
    closeDetails: string;
    support: string;
    scrollHint: string;
    noReturnNote: string;
    bCourse: {
      title: string;
      description: string;
    };
    items: Record<
      string,
      {
        title: string;
        benefits: string[];
        details: string;
      }
    >;
  };
  faq: {
    label: string;
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  cta: {
    label: string;
    title: string;
    description: string;
    support: string;
    messages: string;
    quote: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    mediaTitle: string;
    mediaDescription: string;
    mediaNote: string;
    inquiryForm: {
      title: string;
      name: string;
      email: string;
      message: string;
      submit: string;
      note: string;
    };
    form: {
      title: string;
      description: string;
      submit: string;
    };
    emailSubject: string;
  };
};

export type HomeNarrativeSection = {
  label: string;
  title: string;
  lines: string[];
  cta: string;
  /** Optional short, personal, handwritten-style statement (Japanese only) */
  emphasis?: string;
};

export type HomeNarrativeIdeasSection = {
  label: string;
  title: string;
  intro: string;
  ideas: string[];
  cta: string;
};

export type Locale = "ja" | "en" | "pt";

export const LOCALES: Locale[] = ["ja", "en", "pt"];

export const LOCALE_LABELS: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  pt: "Português",
};

export type LocalizedString = Record<Locale, string>;

export type ProjectTabContent = {
  id: string;
  image: string;
  icon: string;
};
