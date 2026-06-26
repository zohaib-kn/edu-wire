export interface DestinationHeroData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCTA: string;
}

export interface DestinationBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface DestinationCourse {
  name: string;
  duration: string;
  annualTuitionFee: string;
}

export interface DestinationUniversity {
  name: string;
  image: string;
  imageAlt: string;
  ranking: string;
  courses: DestinationCourse[];
  eligibility: string[];
  careers: string[];
}

export interface DestinationJourneyStep {
  label: string;
}

export interface DestinationProcessStep {
  number: number;
  title: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    items?: string[];
    paragraphs2?: string[];
    items2?: string[];
  }[];
}

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface StudyDestination {
  slug: string;
  countryName: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: DestinationHeroData;
  about: {
    title: string;
    image: string;
    imageAlt: string;
    points: string[];
  };
  benefits: DestinationBenefit[];
  universities: DestinationUniversity[];
  universityNote?: string;
  journey: {
    title: string;
    disclaimer: string;
    steps: DestinationJourneyStep[];
  };
  applicationProcess: DestinationProcessStep[];
  faqs: DestinationFAQ[];
}
