import { StudyDestination } from "../types";

export const irelandDestination: StudyDestination = {
  slug: "ireland",
  countryName: "Ireland",
  metadata: {
    title: "Study in Ireland for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in Ireland with Edu-Wire.",
  },
  hero: {
    title: "Study in Ireland with EduWire",
    description:
      "Ireland is Europe's English-speaking tech hub, home to global giants like Google, Meta, and Apple. Let Edu-Wire guide you toward a world-class education and a rewarding career in one of Europe's most welcoming countries.",
    image: "/images/Ireland-hero-image.webp",
    imageAlt: "Study in Ireland",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About Ireland",
    image: "/images/Ireland-hero-image.webp",
    imageAlt: "Ireland Cityscape",
    points: [
      "Ireland is the only English-speaking country in the Eurozone, making it uniquely accessible for international students.",
      "The country serves as the European headquarters for leading global tech companies including Google, Meta, Apple, and Microsoft.",
      "Irish universities offer world-ranked programmes in technology, business, pharmaceuticals, and the humanities.",
      "Graduates can avail of a 2-year stay-back visa for Master's degree holders, enabling direct entry into Ireland's booming job market.",
      "Safe, vibrant cities like Dublin, Cork, and Galway offer a welcoming atmosphere and a rich cultural heritage.",
    ],
  },
  benefits: [
    {
      title: "English-Speaking Eurozone",
      description:
        "Study and communicate entirely in English while enjoying EU membership benefits and access to the broader European job market.",
    },
    {
      title: "Global Tech Hub",
      description:
        "Ireland hosts European HQs of companies like Google, Meta, and Apple — offering unmatched internship and graduate opportunities.",
    },
    {
      title: "2-Year Post-Study Visa",
      description:
        "Master's graduates can remain in Ireland for up to 2 years to seek employment in their field of study.",
    },
    {
      title: "Quality-Assured Universities",
      description:
        "All Irish universities are accredited by QQI and many feature in the QS World University Rankings.",
    },
  ],
  universities: [
    {
      name: "Trinity College Dublin (TCD)",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "Trinity College Dublin",
      ranking: "QS World Rank #98",
      courses: [
        { name: "Computer Science", duration: "4 Years", annualTuitionFee: "€19,525" },
        { name: "Business & Management", duration: "4 Years", annualTuitionFee: "€18,500" },
      ],
      eligibility: ["Minimum 60% in previous academics", "IELTS 6.5+"],
      careers: ["Software Engineer", "Financial Analyst", "Management Consultant"],
    },
    {
      name: "University College Dublin (UCD)",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "University College Dublin",
      ranking: "QS World Rank #181",
      courses: [
        { name: "MBA", duration: "1 Year", annualTuitionFee: "€23,000" },
        { name: "Pharmaceutical Science", duration: "4 Years", annualTuitionFee: "€20,000" },
      ],
      eligibility: ["Minimum 55% in previous academics", "IELTS 6.0+"],
      careers: ["Pharmacist", "Business Manager", "Data Scientist"],
    },
    {
      name: "Dublin City University (DCU)",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "Dublin City University",
      ranking: "QS World Rank #501–550",
      courses: [
        { name: "Information Technology", duration: "4 Years", annualTuitionFee: "€15,000" },
        { name: "Communications & Media", duration: "4 Years", annualTuitionFee: "€14,500" },
      ],
      eligibility: ["Minimum 55% in previous academics", "IELTS 6.0+"],
      careers: ["Software Developer", "Journalist", "Digital Marketer"],
    },
  ],
  journey: {
    title: "Your Journey to Ireland",
    disclaimer:
      "Timelines are approximate and may vary based on university and visa processing times.",
    steps: [
      { label: "Profile Assessment" },
      { label: "University Shortlisting" },
      { label: "Application Submission" },
      { label: "Offer Letter Received" },
      { label: "Visa Application" },
      { label: "Pre-Departure Briefing" },
      { label: "Arrive in Ireland" },
    ],
  },
  applicationProcess: [
    {
      number: 1,
      title: "Academic Eligibility Check",
      sections: [
        {
          heading: "Requirements",
          items: [
            "Minimum 60% aggregate in 10th, 12th, and undergraduate degree",
            "IELTS 6.0 – 6.5 or equivalent (TOEFL, PTE)",
            "Statement of Purpose (SOP) and Letters of Recommendation (LOR)",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "University Application",
      sections: [
        {
          heading: "Process",
          items: [
            "Apply through the university's online portal or CAO (for undergraduates)",
            "Submit academic transcripts, SOP, LOR, and CV",
            "Await conditional or unconditional offer letter",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Student Visa Application",
      sections: [
        {
          heading: "Documents Required",
          items: [
            "Valid passport (minimum 12 months validity)",
            "University offer letter",
            "Proof of sufficient funds (€10,000+ in bank statements)",
            "English language proficiency certificate",
            "Medical insurance",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Ireland a good country to study for Indian students?",
      answer:
        "Yes, Ireland is one of the best countries for Indian students. It offers English-taught programmes, strong employment links with global tech firms, and a 2-year post-study visa for Master's graduates.",
    },
    {
      question: "What is the cost of studying in Ireland?",
      answer:
        "Tuition fees at Irish universities range from €10,000 to €22,000 per year depending on the course and institution. Living costs are approximately €12,000–€15,000 per year.",
    },
    {
      question: "Can I work while studying in Ireland?",
      answer:
        "Yes, international students can work up to 20 hours per week during term time and up to 40 hours per week during summer breaks.",
    },
    {
      question: "What post-study work options are available in Ireland?",
      answer:
        "Master's degree graduates can stay in Ireland for up to 2 years under the Third Level Graduate Scheme to find employment in their field.",
    },
  ],
  listing: {
    title: "Ireland",
    description:
      "Europe's English-speaking tech capital — home to Google, Meta, and Apple HQs. Enjoy a 2-year post-study visa and top-ranked universities.",
    image: "/images/Ireland-hero-image.webp",
    imageAlt: "Study in Ireland",
    flag: "/images/flags/ireland.png",
    published: true,
  },
};
