export interface DestinationHeroData {
  title: string;
  description: string;
  /** Optional richDescription rendered with <strong> formatting (used by Italy) */
  descriptionHtml?: string;
  /** Optional bullet conditions rendered below description (used by Italy) */
  heroBullets?: string[];
  image: string;
  imageAlt: string;
  primaryCTA: string;
}

export interface DestinationBenefit {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
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
  logo?: string;
  logoAlt?: string;
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

export interface DestinationListingMeta {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  flag: string;
  published: boolean;
}

export interface DestinationInstitution {
  icon: string;
  title: string;
  description: string;
}

export interface DestinationEducationSystem {
  title: string;
  description: string;
  subtitle: string;
  institutions: DestinationInstitution[];
}

export interface DestinationPopularCourse {
  name: string;
  image: string;
  imageAlt: string;
}

export interface DestinationPopularCoursesSection {
  title: string;
  description: string;
  courses: DestinationPopularCourse[];
}

export interface DestinationStudyCostItem {
  label: string;
  value: string;
}

export interface DestinationStudyCostGroup {
  title: string;
  costs?: DestinationStudyCostItem[];
  valueLarge?: string;
}

export interface DestinationStudyCostsSection {
  title: string;
  description: string;
  groups: DestinationStudyCostGroup[];
}

export interface DestinationWorkOpportunity {
  name: string;
  image: string;
  imageAlt: string;
}

export interface DestinationWorkOpportunitiesSection {
  title: string;
  description: string;
  opportunities: DestinationWorkOpportunity[];
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
  educationSystem?: DestinationEducationSystem;
  popularCourses?: DestinationPopularCoursesSection;
  studyCosts?: DestinationStudyCostsSection;
  workOpportunities?: DestinationWorkOpportunitiesSection;
  universities: DestinationUniversity[];
  universityNote?: string;
  journey: {
    title: string;
    disclaimer: string;
    steps: DestinationJourneyStep[];
  };
  applicationProcess: DestinationProcessStep[];
  faqs: DestinationFAQ[];
  listing?: DestinationListingMeta;
}

