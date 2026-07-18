import type { Dictionary } from "./types";
import { supporterItemsByLocale } from "./supporterItems";
import { memberProfilesByLocale } from "./memberProfiles";

/** English locale */
const en: Dictionary = {
  meta: {
    title: "Miracoi | Connecting Children's Voices to the Future",
    description:
      "Miracoi is a high school unit connecting children's voices in Mozambique to the future through Yosakoi. Support our ¥770,000 crowdfunding campaign.",
  },
  nav: {
    project: "Project",
    gallery: "Gallery",
    returns: "Returns",
    supporters: "Messages",
    faq: "FAQ",
    contact: "Contact",
    support: "Support us on READYFOR",
    menu: "Open menu",
    viewMore: "View more",
    language: "Language",
    languageSelect: "Select display language",
  },
  footer: {
    tagline: "Connecting children's voices to the future",
    subtitle: "High School Unit Miracoi",
    project: "Project",
    supporters: "Messages",
    contact: "Contact",
    instagram: "Miracoi Official Instagram",
    terms: "Terms",
    privacy: "Privacy",
    copyright: "Miracoi. All rights reserved.",
    supportCta: "Support on READYFOR",
  },
  readyfor: {
    support: "Support us on READYFOR",
    viewProject: "View the project on READYFOR",
    readStory: "Read the full story on READYFOR",
    note: "Schedules, budget breakdown, and return perks are on our READYFOR project page.",
    detailsOnReadyfor: "Full details for this page are on our READYFOR project page.",
  },
  projectSummary: {
    title: "September 2026, in Mozambique",
    description:
      "Two high school students will listen to each child's voice through Yosakoi and dialogue — and connect those voices to the future.",
    points: [
      "Visit three schools and villages for Yosokoi workshops",
      "Listen to children's dreams and turn them into an original song",
      "Keep exchanging and sharing after returning to Japan",
    ],
    readyforNote: "Visit locations, schedule, budget, and support perks are all on READYFOR.",
    cta: "View the project on READYFOR",
  },
  hero: {
    eyebrow: "High School International Cooperation Project",
    titleLine1: "That promise—",
    titleLine2: "we want to keep it this time",
    subtitle: "September 2026: we go to Mozambique to listen to children's voices.",
    description:
      "Two high school students need ¥770,000 and your support to make this happen. Every contribution helps change children's futures.",
    ctaSupport: "Support us on READYFOR",
    ctaExplore: "View the project on READYFOR",
    ctaNote: "Full details and how to support are on our READYFOR project page.",
    scroll: "Scroll",
  },
  story: {
    label: "Story",
    title: '"See you in Japan."',
    description: "The story of Miracoi, born from an unfulfilled promise.",
    quote: "What did she truly want? We may never know the answer.",
    p1: "At 14, Co-Representative Yasunaga met a girl her age in Mozambique. She was supposed to train in Japan, but the promise was never kept — and she could no longer attend school.",
    p2: "At 15, Co-Representative Osaki met street children in Africa. She was too afraid to reach out. They smiled and spoke to her first.",
    p3: "This time, we go to listen to each child's voice.",
    highlight: "Even without words, hearts connect — 11 years of Yosakoi is our bridge.",
    sharedVision: {
      line1: "Two different experiences.",
      line2: "One shared vision.",
      body: "Mozambique and Zambia. An unkept promise—and children who reached out first. Our paths were different, but together they became Miracoi.",
    },
    cta: "Read the full story on READYFOR",
    learningPhoto: {
      alt: "Learning together with local children on site",
      caption:
        "Learning how to use a sewing machine from local community members. We value time learning from each other — not teaching or being taught, but learning together.",
    },
  },
  mission: {
    label: "",
    title: "What matters to us",
    description: "What two high school students hold dear when meeting children in Mozambique as equals.",
    cards: [
      { label: "", title: "Voices to the future", description: "Through Yosakoi, we want to receive each child's voice and connect it to the future." },
      { label: "", title: "Together, not teaching", description: "Not aid, but symbiosis — singing, dancing, and learning in the same space." },
      { label: "", title: "Not a one-time visit", description: "We want to keep the exchange we've built over five years going." },
    ],
  },
  projectCore: {
    label: "Why",
    title: "Why Mozambique. Why Yosakoi.",
    subtitle: "The heart of Miracoi's challenge — three perspectives, front and center.",
    cta: "See full project details",
  },
  project: {
    label: "Project",
    title: "Activities",
    description: "Three themes of what we will do on the ground in Mozambique.",
    tabs: {
      "why-mozambique": {
        title: "Why Mozambique?",
        description: "Yasunaga has maintained exchange with Mozambique for over 5 years. We know the schools, villages, and faces of the children. We chose Mozambique because we can continue connecting their voices after returning home.",
        quote: "Not a one-time visit — we can keep building relationships and sharing voices after returning to Japan.",
        points: ["5+ years of continuous exchange", "Connections with local schools & villages", "We know the children's names and faces", "Ongoing relationships after return"],
      },
      "why-yosakoi": {
        title: "Why Yosakoi?",
        description: "Yosakoi is already familiar locally. We bring real naruko instruments and share the energy of Yosakoi in the same space. Music and dance connect hearts beyond language.",
        quote: "Even without words, hearts connect.",
        points: ["Familiar culture locally", "Community-wide unity", "Naruko as a symbol of voice", "Transform learning into unforgettable experience"],
      },
      "about-miracoi": {
        title: "About Miracoi",
        description: "Mirai (Future) × Yosakoi. Born from exchange through Shikoku Global Network, a two-person high school international cooperation unit.",
        quote: "Not changing the world — delivering each child's voice to the future.",
        points: ["Mirai × Yosakoi", "High school-led challenge", "Symbiosis over aid", "From Shikoku to the world"],
      },
      goals: {
        title: "What We Want to Achieve",
        description: "Starting from children's voices, we connect to the future through Yosakoi and music.",
        points: [
          "Create a space for 80–100 children to express their voices through Yosakoi",
          "Listen to 10–20 children's dreams and connect their voices to the future",
          "Give Japanese children opportunities to hear peers around the world",
          "Create original songs from children's voices, building cross-border teams",
        ],
      },
      "local-activities": {
        title: "Activities in Mozambique",
        description: "Three activities with local children: Yosakoi workshop, dream message workshop, and original song production.",
      },
      "post-return": {
        title: "After Returning to Japan",
        description: "Share voices and learnings from Mozambique with schools and communities in Japan.",
        points: ["Fall 2026: Report sessions & screenings", "Continued SNS & online exchange", "Keep connecting Japan and Mozambique"],
      },
      "original-song": {
        title: "About the Original Song",
        description: "We create an original Yosakoi song based on each child's voice gathered through dream message workshops.",
      },
      "why-listen": {
        title: "Why Listen to Children",
        description: "We are still high school students. We dialogue as peers, not as teachers.",
        quote: "We want equal dialogue that can only happen now.",
        points: ["Voices only peers can hear", "About dreams, worries, and future", "Free expression through words and art"],
      },
      "five-years": {
        title: "5+ Years of Local Exchange",
        description: "Since elementary school, Yasunaga has led an NGO with classmates, maintaining exchange with Mozambique for over 5 years.",
        points: ["NGO activity year 5+", "Local visits & online exchange", "Partnership with SGN", "Trusted schools & communities"],
      },
      budget: {
        title: "How ¥770,000 Will Be Used",
        description: "Every yen supports activities for children in Mozambique.",
        points: ["Travel: ¥480,000", "Accommodation: ¥90,000", "Yosakoi goods: ¥60,740", "Fees: ¥139,260"],
      },
      schedule: {
        title: "Activity Schedule",
        description: "Visit schedule in Mozambique from September 6–10, 2026.",
        note: "*Schedule subject to change.",
      },
      "impact-future": {
        title: "Future Created by Support",
        description: "Your support directly helps Mozambican children choose their own future.",
        points: ["80–100 children express their voices", "10–20 dreams connected to the future", "Japanese children connect globally", "Cross-border team born"],
      },
      vision: {
        title: "Future Vision",
        description: "Mozambique is not the end — it's the beginning of a story spreading to Japan and the world.",
        quote: "We dream of inviting Mozambican children to Kochi to dance together at the Yosakoi festival.",
        points: ["Japan-Mozambique Yosakoi team", "Documentary production & screening", "Expanding the circle worldwide"],
      },
    },
    panels: {
      localHighlights: [
        { id: "schools", label: "3 schools visited" },
        { id: "participants", label: "80–100 participants expected" },
      ],
      localActivityItems: [
        {
          id: "workshop",
          title: "Yosakoi Workshop: \"Kono Chi e~\"",
          paragraphs: [
            "We sing and dance Kochi's Yosakoi song \"Kono Chi e~\" together with the children.",
            "Moving our bodies with naruko in hand, we take the first step toward trust across language and cultural differences.",
            "Sharing the message in the lyrics — \"Let's all draw our dreams and speak of love today\" — we laugh and enjoy together, aiming to create a safe space where children feel they can share their voice.",
          ],
        },
        {
          id: "dialogue",
          title: "Dream Message Workshop",
          paragraphs: [
            "After building relationships through Yosakoi, we listen to each child's voice.",
            "We dialogue about dreams, hopes, worries, the future, and what matters most to them.",
            "Beyond words, children express themselves freely through drawings, message cards, and whatever feels natural to them.",
            "We receive each voice with care and connect it to the future.",
          ],
        },
        {
          id: "song",
          title: "Original Song from Children's Voices",
          paragraphs: [
            "Based on each child's voice gathered in dream message workshops, we create an original Miracoi Yosakoi song.",
            "Not only dreams and hopes, but worries and aspirations for the future are reflected in the lyrics and melody, turning children's own words into one work.",
            "We carry forward the feelings born from singing and dancing \"Kono Chi e~\" together as we create the song.",
            "The completed song will be sung and danced in both Japan and Mozambique, living on as a work for the future.",
          ],
        },
      ],
      songHeadline: "Children's voices become one song.",
      songIntro: "From dream message workshops, each child's",
      songThemes: ["dreams", "hopes", "worries", "aspirations for the future"],
      songClosing: "become the foundation for an original Yosakoi song.",
      songFlowTitle: "3 Steps: Voices Connected to the Future",
      songFlow: [
        { id: "voice", title: "① Listen to voices", description: "We dialogue about dreams and the future." },
        { id: "lyrics", title: "② Turn into lyrics", description: "Children's own words become song lyrics." },
        { id: "complete", title: "③ Leave as a song for the future", description: "We dance together, creating a work that connects to the future." },
      ],
      songGoalsTitle: "What We Aim to Achieve",
      songGoals: [
        "Give shape to children's own words",
        "Help them feel their voice has value",
        "Leave a lasting presence in schools and communities after we return",
      ],
      scheduleDateRange: "September 6–10, 2026",
      scheduleItems: [
        {
          date: "September 6, 2026",
          details: ["Arrival in Mozambique", "Meetings with local staff"],
        },
        { date: "September 7, 2026", title: "Visit to Sinyangwine Village" },
        { date: "September 8, 2026", title: "Visit to Bondia Village" },
        { date: "September 9, 2026", title: "Visit to Benfica Nova Secondary School" },
        { date: "September 10, 2026", title: "Reflection & return" },
      ],
      postReturnTitle: "After Returning",
      postReturnItems: [
        { id: "documentary", label: "Documentary production" },
        { id: "song", label: "Original song completion" },
        { id: "report", label: "Report sessions across Japan" },
        { id: "exchange", label: "Ongoing exchange activities" },
      ],
    },
  },
  impact: {
    label: "Impact",
    title: "Miracoi by the Numbers",
    description: "A two-person high school challenge backed by real experience and conviction.",
    stats: [
      { value: "5", unit: "yr+", label: "Exchange with Mozambique" },
      { value: "3", unit: "schools", label: "Planned visits" },
      { value: "80", unit: "–100", label: "Expected participants" },
      { value: "2", unit: "leaders", label: "High school co-representatives" },
    ],
  },
  progress: {
    label: "Progress",
    title: "Campaign Progress",
    description: "Every contribution helps two high school students reach their ¥770,000 goal.",
    goal: "Goal",
    current: "Raised",
    remaining: "Remaining",
    rate: "Progress",
    people: "supporters",
    yen: "yen",
    cta: "Support on READYFOR",
  },
  projectPage: {
    label: "Project",
    title: "The Miracoi Project",
    intro:
      "In September 2026, we visit three schools and villages in Mozambique, meet children through Yosakoi, listen to each voice, and connect those feelings to the future.",
    visits: {
      label: "Destinations",
      heading: "Three Schools & Villages We Visit",
      description: "September 7–9, 2026 — visiting three regions in Mozambique in sequence.",
    },
    schools: [
      {
        id: "sinyangwine",
        name: "Sinyangwine Village Elementary",
        place: "Sinyangwine Village",
        date: "9/7",
        note: "A village where Yasunaga has exchanged for over 5 years — creating a Yosakoi space for the whole community.",
      },
      {
        id: "bondia",
        name: "Bondia Village Elementary",
        place: "Bondia Village",
        date: "9/8",
        note: "Building on trusted local ties to connect with children at eye level.",
      },
      {
        id: "benfica",
        name: "Benfica Nova Secondary School",
        place: "Maputo",
        date: "9/9",
        note: "An urban school where we reach more children through Yosakoi exchange.",
      },
    ],
    sharedActivities: {
      label: "Activities",
      heading: "Three activities at every destination.",
      description:
        "At all three schools and villages, we carry out activities leading to Yosakoi workshops, dream message workshops, and original song production.",
      items: [
        {
          id: "workshop",
          title: "Yosakoi Workshop: \"Kono Chi e~\"",
          paragraphs: [
            "We sing and dance Kochi's Yosakoi song \"Kono Chi e~\" together with the children.",
            "Moving our bodies with naruko in hand, we take the first step toward trust across language and cultural differences.",
          ],
        },
        {
          id: "dialogue",
          title: "Dream Message Workshop",
          paragraphs: [
            "After building relationships through Yosakoi, we listen to each child's dreams, hopes, worries, and aspirations for the future.",
            "Beyond words, children express themselves freely through drawings, message cards, and whatever feels natural to them.",
          ],
        },
        {
          id: "song",
          title: "Original Song from Children's Voices",
          paragraphs: [
            "Based on each child's voice gathered in dream message workshops, we create an original Miracoi Yosakoi song.",
            "The completed song is sung and danced with local children, and also shared in Japan through report sessions and outreach after we return.",
          ],
        },
      ],
    },
    scheduleSection: {
      label: "Schedule",
      heading: "Activity Schedule",
      note: "*Schedule subject to change.",
      items: [
        { date: "September 6, 2026", title: "Arrival in Mozambique & meetings with local staff" },
        { date: "September 7, 2026", title: "Visit to Sinyangwine Village" },
        { date: "September 8, 2026", title: "Visit to Bondia Village" },
        { date: "September 9, 2026", title: "Visit to Benfica Nova Secondary School" },
        { date: "September 10, 2026", title: "Reflection & return" },
      ],
      postReturnTitle: "After Returning",
      postReturnItems: [
        { id: "documentary", label: "Documentary production" },
        { id: "song", label: "Original song completion" },
        { id: "report", label: "Report sessions across Japan" },
        { id: "exchange", label: "Ongoing exchange activities" },
      ],
    },
    localActivities: {
      schoolsLabel: "Visit",
      schoolsHeading: "Three Schools We Visit",
      schoolsSubheading: "September 7–9, 2026 — visiting three schools on site.",
      activityItems: [
        {
          id: "workshop",
          title: "Yosakoi Workshop",
          description: "Teaching 'Kono Chi e~' and dancing together with 80–100 children.",
        },
        {
          id: "dialogue",
          title: "Exchange & Dialogue",
          description: "Listening to dreams and voices of 10–20 children through dream message workshops.",
        },
        {
          id: "song",
          title: "Original Song Performance",
          description: "Singing and dancing to an original song created from children's voices.",
        },
      ],
    },
    cta: "Support This Challenge",
  },
  returnsPage: {
    label: "Returns",
    title: "Support Rewards",
    description: "Choose the support option that fits you.",
    recommendedHint: "Not sure? ¥10,000 · ¥30,000 · ¥100,000 tiers are our most popular",
    badgePopular: "Popular",
    badgeRecommended: "Recommended",
    badgePremium: "Premium",
    impactPrefix: "",
    support: "Support this tier",
    items: {
      "tier-3000": { title: "Message of thanks", description: "A thank-you message on READYFOR expressing our gratitude for your support.", impact: "Support Yosakoi workshops for about 7 children." },
      "tier-5000": { title: "Message cards from children", description: "Handwritten cards from children in Mozambique.", impact: "Support message card creation carrying children's dreams." },
      "tier-10000": { title: "Documentary early screening", description: "Watch the documentary before public release.", impact: "Support dream workshops and Yosakoi exchange." },
      "tier-30000": { title: "Supporter-only online briefing", description: "Join the post-return online briefing.", impact: "Share voices born on site with supporters." },
      "tier-50000": { title: "Deliver your message to children", description: "Your questions delivered on site.", impact: "Support two-way exchange with children." },
      "tier-100000": { title: "Supporter credit in the documentary", description: "Your name listed in the end credits of the finished documentary.", impact: "Support documentary production." },
      "tier-140000": { title: "Corporate outreach class", description: "Yosakoi outreach at schools or companies.", impact: "Support bringing learnings back to Japan." },
    },
  },
  supportImpact: {
    label: "Your Impact",
    title: "Your support shapes the future",
    subtitle: "What your contribution makes possible",
    yen: "yen",
    items: [
      { amount: 3000, description: "Support exchange activities with about 7 children." },
      { amount: 5000, description: "Support creating message cards carrying children's dreams and voices." },
      { amount: 10000, description: "Support dream message workshops and Yosakoi exchange activities." },
      {
        amount: 30000,
        description: "Share voices born on site through a supporter-only online briefing.",
      },
      {
        amount: 50000,
        description: "Deliver questions and messages to children and support two-way exchange.",
      },
      {
        amount: 100000,
        description:
          "Support documentary production by listing your name in the end credits of the finished film.",
      },
      {
        amount: 140000,
        description: "Support outreach classes at schools and companies, bringing learnings back to Japan.",
      },
    ],
  },
  schedule: {
    label: "Schedule",
    title: "Activity Timeline",
    description: "Five days of activities in Mozambique, September 2026.",
    note: "*Schedule may change due to local conditions.",
    items: [
      { date: "Sep 6 (Sun)", place: "Maputo", activity: "Team reunion and meetings with school contacts" },
      { date: "Sep 7 (Mon)", place: "Sinyangwine Village", activity: "Visit elementary school and run activities" },
      { date: "Sep 8 (Tue)", place: "Bondia Village", activity: "Visit elementary school and run activities" },
      { date: "Sep 9 (Wed)", place: "Maputo", activity: "Visit Benfica Nova Secondary School and run activities" },
      { date: "Sep 10 (Thu)", place: "Maputo", activity: "Reflection and return to Japan" },
    ],
  },
  gallery: {
    label: "Activity",
    title: "Recent Activities",
    description: "The latest on Miracoi's activities and events.",
    reportsLabel: "Latest reports",
    comingSoon: {
      badge: "Coming Soon",
      sectionTitle: "Publishing soon",
      lead: "Activity records will be added to this page over time.",
      closing: "Please check back soon.",
      cardTitle: "Publishing soon",
      cardNote: "Activity records coming soon",
    },
    viewOnInstagram: "View on Instagram",
    closeModal: "Close",
    readMore: "Read more",
    records: [
      {
        title: "Pitch at Aoyama Gakuin University — Professor Eric's Seminar",
        date: "2026.06.21",
        body: "We presented Miracoi's activities at Professor Eric's seminar in the Department of Global Studies for Intercultural Cooperation and Co-creation. We shared our vision of connecting children's voices in Mozambique to the future, and why we take on this challenge as high school students.",
        alt: "Pitch presentation at Aoyama Gakuin University",
      },
    ],
  },
  supporters: {
    label: "Supporters",
    title: "Messages of Support",
    description: "Warm messages from supporters.",
    descriptionCount: " supporters have sent warm messages.",
    readMore: "Read more",
    close: "Close",
    ctaTitle: "Join us in connecting children's voices to the future.",
    ctaSubtitle: "Many people are cheering for Miracoi's challenge.",
    ctaSupport: "Support us on READYFOR",
    viewAll: "View All",
    submitTitle: "Send a Message of Support",
    submitDescription:
      "We welcome messages of support for Miracoi. After review, your message may be featured on our website or social media.",
    submitButton: "Submit via Google Form",
    items: supporterItemsByLocale.en,
  },
  members: {
    label: "Members",
    title: "Co-Representatives",
    description: "Two leaders from Kochi and Ehime with different origins, united in Miracoi.",
    profiles: memberProfilesByLocale.en,
  },
  support: {
    label: "Support",
    title: "Your Support Changes the Future",
    description: "A ¥770,000 challenge. Each contribution connects Mozambican children's voices to the future.",
    goal: "Goal",
    current: "Raised",
    remaining: "Remaining",
    supporters: "Supporters",
    yen: "yen",
    people: "people",
    period: "Campaign period",
    countdownRemaining: "",
    countdownUntilStart: "Starts in ",
    countdownEnded: "Project ended",
    countdownDays: " days left!",
    countdownHours: " hours left!",
    countdownDaysUntilStart: " days",
    beforeStartNote: "Support totals will update once the campaign begins",
    goalRemaining: { before: "", after: " left to reach our goal", amountFirst: true },
    goalAchieved: "Goal reached!",
    whatChanges: "What Your Support Enables",
    changes: [
      "Mozambican children express their voices through Yosakoi",
      "Dreams become songs and records connected to the future",
      "Japanese children connect with peers worldwide",
    ],
    usage: "How ¥770,000 Will Be Used",
    cta: "Support on READYFOR",
    budgetTotalLabel: "Total",
    budgetTotalSuffix: " (Total)",
    budgetChartLabel: "Budget breakdown: travel, accommodation, Yosakoi goods, and fees",
    budgetItems: [
      { label: "Travel" },
      { label: "Accommodation" },
      { label: "Yosakoi goods" },
      { label: "Fees" },
    ],
  },
  returns: {
    label: "Returns",
    title: "Support Rewards",
    description:
      "Choose the support option that fits you. Both reward and no-reward (Course B) options are available on READYFOR.",
    tabWithReturn: "With reward",
    tabNoReturn: "No reward (Course B)",
    viewDetails: "View details",
    closeDetails: "Close",
    support: "Support",
    scrollHint: "Swipe to see all rewards",
    noReturnNote: "Course B supports the project overall without selecting a physical reward.",
    bCourse: {
      title: "Message of thanks",
      description:
        "For supporters who prefer no reward and want their contribution to go directly to on-site activities. Your support will be used carefully for local activity costs. We will send a thank-you message on READYFOR expressing our gratitude.",
    },
    items: {
      "tier-3000": {
        title: "Message of thanks",
        benefits: ["Thank-you message on READYFOR"],
        details: "We will send a thank-you message on READYFOR expressing our gratitude for your support.",
      },
      "tier-5000": {
        title: "Message cards from children",
        benefits: ["Handwritten message cards from children in Mozambique", "Thank-you message"],
        details:
          "After we return, receive message cards written by children in Mozambique — their words and drawings, delivered to you.",
      },
      "tier-10000": {
        title: "Documentary early screening",
        benefits: [
          "Early online viewing of the documentary",
          "Invite to supporter-only screening",
          "Thank-you message",
        ],
        details:
          "Watch our documentary before public release. Experience Yosakoi with the children and the atmosphere of Mozambique firsthand.",
      },
      "tier-30000": {
        title: "Supporter-only online briefing",
        benefits: [
          "Join the post-return online briefing",
          "Q&A with Miracoi members",
          "Early access to photos and videos",
        ],
        details:
          "After we return, join an online session where Miracoi members share experiences and children's voices directly, with time for Q&A.",
      },
      "tier-50000": {
        title: "Deliver your message to children",
        benefits: [
          "Your questions/messages delivered on site",
          "Responses from children sent to you",
          "Thank-you message",
        ],
        details:
          "Send questions or messages that we deliver to children in Mozambique. Receive their responses and reactions in a report after we return.",
      },
      "tier-100000": {
        title: "Supporter credit in the documentary",
        benefits: ["Your name in the end credits of the finished documentary"],
        details:
          "Your name will appear in the end credits of the finished documentary as a supporter.\n\nIf you prefer not to be listed, please write \"No listing\" when you apply.",
      },
      "tier-140000": {
        title: "Corporate outreach class",
        benefits: [
          "One Yosakoi outreach session (school or company)",
          "Activity presentation by Miracoi",
          "Yosakoi experience workshop",
        ],
        details:
          "For organizations: Miracoi visits your school or company for a Yosakoi experience and activity report. Ideal for CSR, training, or global education. Schedule and format by consultation.",
      },
    },
  },
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    description: "More answers are on our READYFOR project page.",
    items: [
      { q: "What is Miracoi?", a: "A high school unit connecting children's voices in Mozambique to the future through Yosakoi." },
      { q: "How are funds used?", a: "For travel, accommodation, Yosakoi goods, and on-the-ground activities. See READYFOR for the full breakdown." },
      { q: "Who can support?", a: "Anyone — individuals or organizations — via our READYFOR project page." },
    ],
  },
  cta: {
    label: "",
    title: '"See you in Japan"—now it is our turn to go meet them.',
    description: "Your support connects children's voices to the future.",
    support: "Support us on READYFOR",
    messages: "View Messages",
    quote: "",
  },
  contact: {
    label: "Contact",
    title: "Contact Us",
    description: "Questions, media inquiries, and messages of support are welcome.",
    mediaTitle: "Media Inquiries",
    mediaDescription:
      "We welcome media inquiries regarding interviews and coverage of Miracoi's activities.\nWe hope this can be an opportunity to share the perspectives and challenges that only high school students can deliver with more people. Please feel free to contact us.",
    mediaNote:
      "*For outreach classes at schools and companies, please see the ¥140,000 support return on our crowdfunding page rather than using this contact form.",
    inquiryForm: {
      title: "Send an Inquiry",
      name: "Your Name",
      email: "Email Address",
      message: "Your Message",
      submit: "Send",
      note: "*Opens your email app.",
    },
    form: {
      title: "Send a Message of Support",
      description:
        "We welcome messages of support for Miracoi. After review, your message may be featured on our website or social media.",
      submit: "Submit via Google Form",
    },
    emailSubject: "Miracoi Inquiry",
  },
};

export default en;
