export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  duration?: string;
  fees?: string;
  careerPaths?: string[];
}

export const servicesData: Service[] = [
  {
    slug: "ielts-training",
    title: "IELTS Training",
    shortDesc: "Achieve a high band score with certified trainers and proven exam strategies.",
    description: "The International English Language Testing System (IELTS) is the world's most popular English language proficiency test for higher education and global migration. Our structured training program is designed to build your skills across all four sections: Listening, Reading, Writing, and Speaking, ensuring you hit your target band score.",
    highlights: [
      "Experienced Cambridge/British Council certified trainers",
      "Comprehensive study materials and mock tests",
      "Regular individual speaking evaluations & writing feedback",
      "Flexible weekday & weekend batch timings",
      "Personalized focus on weak modules to boost overall score",
    ],
    duration: "4 - 8 Weeks",
    fees: "Varies by course type (Academic/General)",
    careerPaths: ["Study Abroad Eligibility", "Work Visa Clearance", "Immigration & PR Requirements"],
  },
  {
    slug: "imat-preparation",
    title: "IMAT Preparation",
    shortDesc: "Ace the Italian Medical Admission Test and secure a seat in top tuition-free public universities.",
    description: "The International Medical Admissions Test (IMAT) is a 100-minute subject-specific admissions test for English-taught Medicine and Surgery courses in Italy. Our specialized IMAT course equips students with rigorous knowledge in Logical Reasoning, General Knowledge, Biology, Chemistry, Physics, and Mathematics.",
    highlights: [
      "Comprehensive coverage of the official Cambridge syllabus",
      "Detailed past paper analyses and weekly mock exams",
      "Special emphasis on Logical Reasoning and General Science",
      "Guidance from expert coaches and IMAT alumni in Italy",
      "Help with the Italian pre-enrollment and university selection process",
    ],
    duration: "3 - 6 Months",
    fees: "Competitive packages with complete study material included",
    careerPaths: ["Admission to English MD courses in Italy", "Global Residency Options", "European MD Certification"],
  },
  {
    slug: "scholarship-guidance",
    title: "Scholarship Guidance",
    shortDesc: "Unlock fully-funded scholarships and tuition waivers to make your global education affordable.",
    description: "Studying abroad does not have to be a heavy financial burden. At Edu-Wire, we specialize in identifying and securing government, university, and private scholarships. From Italian DSU scholarships (offering up to €7,000/year plus free tuition) to Commonwealth and Chevening programs, we cover it all.",
    highlights: [
      "Profile assessment for academic and need-based scholarships",
      "Step-by-step assistance with DSU, regional, and merit-based grants",
      "Vetting of scholarship essays, Statements of Purpose (SOPs), and recommendation letters",
      "Documentation support including income certificates and family economic indicators",
      "Over 90% success rate in securing tuition-fee waivers for students",
      "Comprehensive profiles of available global scholarships",
      "Personalized mapping of scholarship criteria to student credentials",
      "Document legalization and translation guidance",
    ],
    careerPaths: ["Affordable Education", "No-debt Graduation", "Research Grants eligibility"],
  },
  {
    slug: "admission-guidance",
    title: "Admission Guidance",
    shortDesc: "End-to-end guidance from course selection to final offer letter reception.",
    description: "With thousands of universities worldwide, selecting the right fit is crucial. Our admissions consultants evaluate your academic profile, budget, career aspirations, and preferred destination to suggest the best courses and guide you through the complex application process.",
    highlights: [
      "Profiling and shortlist of top-ranking universities matching your eligibility",
      "Expert assistance in writing/editing SOPs, Resume/CV, and Reference Letters",
      "Error-free online application submissions and timeline tracking",
      "Direct representations with partner universities for fast-tracked offers",
      "Interview preparation sessions for university admissions panels",
    ],
    careerPaths: ["Direct Entry to Top Universities", "Academic Career Placement", "Scholarship Alignment"],
  },
  {
    slug: "financial-assistance",
    title: "Financial Assistance",
    shortDesc: "Hassle-free student loan options and budget planning advice.",
    description: "Financing your studies is one of the most critical steps in the study abroad journey. Edu-Wire assists you in obtaining educational loans from leading public and private banks. We help streamline documents, compare interest rates, and secure speedy sanctions.",
    highlights: [
      "Tie-ups with nationalized and private banks for competitive interest rates",
      "Guidance on collateral-free (unsecured) loan options up to Rs. 40 Lakhs",
      "Assistance in drafting financial statements, proof of funds, and sponsor documents",
      "Pre-visa loan sanction facilitation",
      "Complete transparency with zero hidden processing charges",
    ],
    careerPaths: ["Secure Funding for Student Visas", "Sponsorship & Blocked Account setup", "Financial Planning & ROI analysis"],
  },
];
