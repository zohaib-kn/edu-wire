export interface StudyDestination {
  slug: string;
  country: string;
  intake: string;
  costOfStudy: string;
  postStudyWork: string;
  description: string;
  keyPoints: string[];
  universities: string[];
  eligibility: string[];
}

export const destinationsData: StudyDestination[] = [
  {
    slug: "uk",
    country: "UK",
    intake: "September & January (Some in May)",
    costOfStudy: "£12,000 - £26,000 / Year",
    postStudyWork: "2 Years (Graduate Route)",
    description: "The UK is home to world-leading universities offering high-quality courses that are shorter and more intensive than in other countries. With degrees typically taking 3 years for Bachelor's and 1 year for Master's, it is a highly popular and cost-effective study destination.",
    keyPoints: [
      "Home to historic, top-ranked universities (Oxford, Cambridge, Imperial, UCL, Manchester)",
      "Short course durations: 1-year Master's degree saving cost & time",
      "2-year Post-Study Work (PSW) visa pathway for global graduates",
      "Wide choice of courses in business, science, engineering, and arts",
    ],
    universities: [
      "University of Manchester",
      "University of Birmingham",
      "University of Leeds",
      "Coventry University",
      "King's College London",
    ],
    eligibility: [
      "Minimum 55% - 60% in previous academics",
      "IELTS score of 6.0 - 6.5 (or waiver based on 12th English score for select boards)",
      "Statement of Purpose (SOP) and Letters of Recommendation (LOR)",
    ],
  },
  {
    slug: "australia",
    country: "Australia",
    intake: "February & July (Some in November)",
    costOfStudy: "AUD 20,000 - AUD 45,000 / Year",
    postStudyWork: "2 to 4 Years (depending on course and location)",
    description: "Australia offers world-class education, scenic beauty, and a high quality of life. Famous for its 'Group of Eight' universities, it ranks among the top destinations for technical, business, and research studies, with excellent post-study work and PR pathways.",
    keyPoints: [
      "Top leading universities like ANU, Monash, University of Adelaide, Melbourne",
      "High standard of living and safe, multicultural environment for international students",
      "Part-time work rights: up to 48 hours per fortnight during sessions",
      "Highly structured pathway to Permanent Residency (PR)",
    ],
    universities: [
      "Australian National University (ANU)",
      "Monash University",
      "The University of Adelaide",
      "The University of Melbourne",
      "University of Sydney",
    ],
    eligibility: [
      "60% or higher in 12th class or Bachelor's degree",
      "IELTS score of 6.0 - 6.5 (or equivalent TOEFL/PTE scores)",
      "Demonstrated funds to cover study and living expenses",
    ],
  },
  {
    slug: "usa",
    country: "USA",
    intake: "August (Fall) & January (Spring)",
    costOfStudy: "$20,000 - $55,000 / Year",
    postStudyWork: "1 Year (Standard) / Up to 3 Years (STEM extension)",
    description: "The United States is the gold standard for global higher education, hosting more international students than any other country. Its universities are world-famous for flexibility, academic rigor, and massive research funding, particularly in STEM fields.",
    keyPoints: [
      "Ivy League and world-ranking research universities",
      "Flexible curriculum allowing students to choose majors and electives",
      "Up to 36 months of Optional Practical Training (OPT) for STEM graduates",
      "Abundant graduate assistantships, TA/RA roles, and merit scholarships",
    ],
    universities: [
      "New York University (NYU)",
      "Boston University",
      "University of Southern California (USC)",
      "Arizona State University (ASU)",
      "Northeastern University",
    ],
    eligibility: [
      "GPA equivalent to 60%+ in previous degree",
      "English proficiency (IELTS 6.5+ / TOEFL 80+ / Duolingo 110+)",
      "GRE / GMAT (optional or waived for many programs)",
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    intake: "September (Fall), January (Winter) & May (Spring)",
    costOfStudy: "CAD 15,000 - CAD 35,000 / Year",
    postStudyWork: "Up to 3 Years (Post-Graduation Work Permit - PGWP)",
    description: "Canada is recognized globally for its high-quality education system, affordable tuition, and welcoming immigration policies. With a strong focus on co-op education (paid internships), students gain real industry experience before graduating.",
    keyPoints: [
      "Highly affordable study programs compared to US & UK",
      "PGWP work permit option helps secure valuable Canadian work experience",
      "Strong avenues for Express Entry and Provincial Nominee PR pathways",
      "Safe, diverse cities (Toronto, Vancouver, Montreal, Calgary)",
    ],
    universities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "York University",
      "Conestoga College / Humber College (PGWP eligible)",
    ],
    eligibility: [
      "60%+ in 12th class or undergraduate academics",
      "SDS student visa pathway requires IELTS 6.0 bands in each module",
      "Proof of GIC (Guaranteed Investment Certificate) for living expenses",
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    intake: "October (Winter) & April (Summer)",
    costOfStudy: "Free (Public Universities) / €8,000 - €20,000 (Private)",
    postStudyWork: "18 Months",
    description: "Germany is a powerhouse of technology, engineering, and research. Public universities in Germany do not charge tuition fees for domestic or international students, making it a highly attractive destination for students with a strong academic profile.",
    keyPoints: [
      "Zero tuition fees at public universities (only small semester fees)",
      "Highly advanced engineering and technology courses",
      "18-month post-study visa to search for a career matching your qualifications",
      "Strong economy with high demand for skilled engineers and scientists",
    ],
    universities: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "Karlsruhe Institute of Technology (KIT)",
      "University of Stuttgart",
    ],
    eligibility: [
      "High academic scores (typically 70%+ or equivalent German GPA)",
      "IELTS 6.5+ (for English taught courses) or German language proficiency (for German taught)",
      "German Blocked Account (Sperrkonto) to cover living costs",
    ],
  },
  {
    slug: "ireland",
    country: "Ireland",
    intake: "September & January",
    costOfStudy: "€10,000 - €22,000 / Year",
    postStudyWork: "2 Years (for Master's degree)",
    description: "Ireland is a dynamic, English-speaking European nation known as the European headquarters for major global tech and pharmaceutical companies. Graduates enjoy excellent employment prospects within a highly welcoming culture.",
    keyPoints: [
      "Only English-speaking country in the Eurozone (along with Malta)",
      "Hub for top tech (Google, Meta, Apple) and pharma companies",
      "2-year stay-back post-study visa for postgraduate applicants",
      "Renowned for safe student cities like Dublin, Cork, and Galway",
    ],
    universities: [
      "Trinity College Dublin (TCD)",
      "University College Dublin (UCD)",
      "Dublin City University (DCU)",
      "National University of Ireland Galway (NUIG)",
    ],
    eligibility: [
      "Minimum 60% in previous academic transcripts",
      "IELTS 6.0 - 6.5 or equivalent English test scores",
      "Resume and Statement of Purpose",
    ],
  },
  {
    slug: "new-zealand",
    country: "New Zealand",
    intake: "February & July",
    costOfStudy: "NZD 22,000 - NZD 38,000 / Year",
    postStudyWork: "Up to 3 Years (depending on qualification)",
    description: "New Zealand offers top-class education with all its 8 public universities ranked in the QS World Top 500. Known for stunning landscapes and a relaxed lifestyle, it is a great choice for research, technology, and environment-related studies.",
    keyPoints: [
      "High-quality educational institutions under the British system",
      "Exceptional student safety and welcoming local population",
      "Stay back opportunities up to 3 years post graduation",
      "Part-time work permissions (20 hours/week) during semesters",
    ],
    universities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
    ],
    eligibility: [
      "Minimum 60% in previous course qualifications",
      "IELTS bands of 6.0 - 6.5 with no band less than 5.5",
      "Clear financial status documents for visa application",
    ],
  },
  {
    slug: "france",
    country: "France",
    intake: "September & January/February",
    costOfStudy: "€2,770 - €3,770 / Year (Public) / Up to €20,000 (Business Schools)",
    postStudyWork: "2 Years (APS/Job Seeker visa for Master's)",
    description: "France is a leading destination for arts, fashion, business, and culinary courses. Its elite 'Grandes Écoles' and public universities offer affordable, English-taught programs with excellent industry links.",
    keyPoints: [
      "Very low tuition fees at public universities",
      "World-class Business Schools (HEC Paris, INSEAD, ESSEC) with high global placement rate",
      "5-year post-study tourist visa for alumni who completed Master's in France",
      "Opportunity to learn the French language, a major asset for global corporate careers",
    ],
    universities: [
      "Sorbonne University",
      "HEC Paris",
      "IPSA (Aeronautical Engineering)",
      "University of Strasbourg",
    ],
    eligibility: [
      "Academic scores of 55%+ in bachelor's or high school",
      "English taught programs do not require French proficiency (IELTS 6.0+)",
      "Statement of Purpose (SOP)",
    ],
  },
  {
    slug: "italy",
    country: "Italy",
    intake: "September",
    costOfStudy: "€500 - €4,000 / Year",
    postStudyWork: "1 Year",
    description: "Italy is an incredibly popular student destination in Europe. Beyond MBBS, it offers premium Master's and Bachelor's degrees in design, fashion, architecture, engineering, and economics in English at historical universities.",
    keyPoints: [
      "DSU scholarship offers free accommodation, tuition fee waivers, and up to €7,000 annual cash stipend",
      "Home to the oldest universities in Europe (Bologna, Sapienza, Milan)",
      "Low living cost compared to other Western European countries",
      "Rich cultural heritage, gastronomy, and lifestyle benefits",
    ],
    universities: [
      "Politecnico di Milano",
      "University of Bologna",
      "Sapienza University of Rome",
      "University of Padua",
    ],
    eligibility: [
      "High school diploma (for Bachelor's) or Bachelor's degree (for Master's)",
      "English language certificate (IELTS 6.0 or medium of instruction certificate)",
      "University portal pre-evaluation clearance",
    ],
  },
  {
    slug: "spain",
    country: "Spain",
    intake: "September/October",
    costOfStudy: "€2,000 - €8,000 / Year",
    postStudyWork: "1 Year (Job search visa)",
    description: "Spain is a vibrant, modern country in Southern Europe. Spanish universities offer excellent courses in engineering, business administration, and hospitality, many taught in English with options for paid industrial internships.",
    keyPoints: [
      "Highly affordable living cost and mild Mediterranean climate",
      "Top business schools (IE, ESADE) and public engineering universities",
      "Opportunity to learn Spanish, the second most spoken language in the world",
      "Work-study opportunities with student visa permissions",
    ],
    universities: [
      "Universitat Politècnica de València (UPV) - SEAMIC Program",
      "Autonomous University of Barcelona",
      "Complutense University of Madrid",
    ],
    eligibility: [
      "Relevant academic background",
      "English proficiency certificate",
      "Legalized school/college credentials (Homologation)",
    ],
  },
  {
    slug: "romania",
    country: "Romania",
    intake: "September/October",
    costOfStudy: "€3,000 - €6,000 / Year",
    postStudyWork: "9 Months",
    description: "Romania offers highly practical education in IT, technical fields, and science within the European Union. With affordable fees, easy visa steps, and a rapidly expanding tech ecosystem, Romania is an emerging choice for study.",
    keyPoints: [
      "Affordable fees and living costs in the European Union",
      "Active international student communities and safe environment",
      "Direct entry routes with academic file reviews",
    ],
    universities: [
      "Polytechnic University of Bucharest",
      "Alexandru Ioan Cuza University",
      "West University of Timisoara",
    ],
    eligibility: [
      "Minimum 50% in previous education",
      "English language proficiency confirmation",
      "Valid passport and legal residency docs",
    ],
  },
];
