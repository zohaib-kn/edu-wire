export interface ServicePageHighlight {
  title: string;
  description: string;
  iconName?: string;
}

export interface ServicePageBenefit {
  title: string;
  description: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ImatSubject {
  name: string;
  topics: string[];
  questions: string;
  color: string;
  bgColor: string;
}

export interface ImatPhase {
  num: string;
  title: string;
  points: string[];
  iconName: string;
}

export interface ImatFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ImatBatch {
  label: string;
  name: string;
  badge?: string;
  rows: string[];
  ctaText: string;
}

export interface ImatData {
  heroBadge: string;
  heroStats: { num: string; label: string }[];
  keyDates: { label: string; value: string; iconName: string }[];
  countdownTarget: string;
  whatIsImat: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
    facts: { value: string; label: string }[];
  };
  syllabus: {
    eyebrow: string;
    heading: string;
    description: string;
    subjects: ImatSubject[];
  };
  program: {
    eyebrow: string;
    heading: string;
    description: string;
    phases: ImatPhase[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    description: string;
    features: ImatFeature[];
    comparison: {
      eyebrow: string;
      heading: string;
      table: TableData;
    };
  };
  batches: {
    eyebrow: string;
    heading: string;
    description: string;
    items: ImatBatch[];
  };
  finalCta: {
    heading: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    trustItems: string[];
  };
}

export interface AdmissionStep {
  step: string;
  title: string;
  description: string;
  buttonText: string;
  imagePath: string;
}

export interface FinancialPartner {
  name: string;
  imagePath: string;
}

export interface FloatingCard {
  label: string;
  iconName?: string;
  position?: "top-right" | "middle-left" | "bottom-left" | "bottom-right";
}

export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    heading: string;
    description: string;
    ctaText: string;
    imagePath: string;
    floatingCards?: FloatingCard[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    imagePath: string;
  };
  highlights: {
    heading: string;
    items: ServicePageHighlight[];
  };
  benefits: {
    heading: string;
    items: ServicePageBenefit[];
  };
  testDetails: {
    heading: string;
    types: {
      heading: string;
      description: string;
      table: TableData;
    };
    format: {
      heading: string;
      description: string;
      table: TableData;
      totalTime: string;
    };
    scoring: {
      heading: string;
      description: string;
      table: TableData;
      example: string;
    };
  };
  faqs: {
    heading: string;
    items: FAQItem[];
  };
  imatData?: ImatData;
  admissionSteps?: AdmissionStep[];
  financialPartners?: FinancialPartner[];
}
