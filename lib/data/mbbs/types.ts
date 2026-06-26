export interface MBBSCountry {
  slug: string;
  country: string;
  duration: string;
  feeRange: string;
  intake: string;
  language: string;
  description: string;
  keyPoints: string[];
  universities: string[];
  eligibility: string[];
  heroTitle?: string;
  heroParagraph?: string;
  heroBgImage?: string;
  heroCutoutImage?: string;
  flagIcon?: string;
  floatingBadges?: { label: string; sublabel: string; iconName: string }[];
  aboutTitle?: string;
  aboutImage?: string;
  aboutParagraphs?: string[];
  aboutHighlights?: string[];
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChoose?: { title: string; description: string; iconName: string }[];
  universitiesDetailed?: {
    name: string;
    description: string[];
    image: string;
    badges?: string[];
    fees: {
      year: string;
      tuitionFee: string;
      administrativeFee: string;
      applicationFee: string;
      total: string;
    }[];
  }[];
  eligibilityDetailed?: {
    subtitle?: string;
    criteria: string[];
    entranceTest?: {
      title: string;
      description: string;
    };
    documents: string[];
  };
  applicationProcess?: {
    timelineDisclaimer?: string;
    steps: {
      title: string;
      shortDesc: string;
      detailedContent: {
        title: string;
        items: string[];
      }[];
    }[];
  };
  achievers?: {
    image: string;
    name?: string;
    university?: string;
    visaYear?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  seoTitle?: string;
  seoDescription?: string;
}

