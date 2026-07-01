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
    image: "/images/destinations/ireland/about/about-ireland.jpg",
    imageAlt: "Trinity College Long Room Library, Dublin",
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
      name: "Trinity College Dublin",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "Trinity College Dublin",
      ranking: "QS World Rank #101",
      logo: "/images/destinations/ireland/universities/logos/trinity-college-dublin.svg",
      courses: [
        { name: "Engineering", duration: "4 Years", annualTuitionFee: "22,000 EUR" },
        { name: "Computer Science", duration: "4 Years", annualTuitionFee: "21,000 EUR" },
        { name: "Business and Management", duration: "4 Years", annualTuitionFee: "23,000 EUR" },
      ],
      eligibility: ["Minimum 65% in relevant subjects", "IELTS 6.5 or equivalent", "Valid Passport"],
      careers: ["Engineers", "Software Developers", "Business Analysts"],
    },
    {
      name: "University College Dublin (UCD)",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "University College Dublin (UCD)",
      ranking: "QS World Rank #156",
      logo: "/images/destinations/ireland/universities/logos/university-college-dublin.png",
      courses: [
        { name: "Mechanical Engineering", duration: "4 Years", annualTuitionFee: "20,000 EUR" },
        { name: "Data Science", duration: "4 Years", annualTuitionFee: "21,500 EUR" },
        { name: "Finance", duration: "4 Years", annualTuitionFee: "22,000 EUR" },
      ],
      eligibility: ["Strong academic record", "English language proficiency", "Valid Passport"],
      careers: ["Engineers", "Data Analysts", "Financial Experts"],
    },
    {
      name: "National University of Ireland, Galway",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "National University of Ireland, Galway",
      ranking: "QS World Rank #231",
      logo: "/images/destinations/ireland/universities/logos/national-university-of-ireland-galway.png",
      courses: [
        { name: "Biomedical Science", duration: "4 Years", annualTuitionFee: "19,000 EUR" },
        { name: "Computer Science", duration: "4 Years", annualTuitionFee: "18,500 EUR" },
        { name: "Law", duration: "4 Years", annualTuitionFee: "20,000 EUR" },
      ],
      eligibility: ["Minimum 60% in relevant subjects", "English proficiency", "Valid Passport"],
      careers: ["Biomedical Scientists", "Software Engineers", "Lawyers"],
    },
    {
      name: "Dublin City University",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "Dublin City University",
      ranking: "QS World Rank #351",
      logo: "/images/destinations/ireland/universities/logos/dublin-city-university.svg",
      courses: [
        { name: "Electronic Engineering", duration: "4 Years", annualTuitionFee: "18,000 EUR" },
        { name: "Business Studies", duration: "4 Years", annualTuitionFee: "19,000 EUR" },
        { name: "Information Technology", duration: "4 Years", annualTuitionFee: "17,500 EUR" },
      ],
      eligibility: ["Good academic standing", "English language proficiency", "Valid Passport"],
      careers: ["Engineers", "Business Professionals", "IT Specialists"],
    },
    {
      name: "University College Cork (UCC)",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "University College Cork (UCC)",
      ranking: "QS World Rank #246",
      logo: "/images/destinations/ireland/universities/logos/university-college-cork.png",
      courses: [
        { name: "Medicine", duration: "5 Years", annualTuitionFee: "30,000 EUR" },
        { name: "Environmental Science", duration: "4 Years", annualTuitionFee: "19,500 EUR" },
        { name: "Business Economics", duration: "4 Years", annualTuitionFee: "20,000 EUR" },
      ],
      eligibility: ["Relevant academic qualifications", "English proficiency", "Valid Passport"],
      careers: ["Medical Professionals", "Environmental Scientists", "Economists"],
    },
    {
      name: "Maynooth University",
      image: "/images/destinations/uk/universities/university-college-london.jpg",
      imageAlt: "Maynooth University",
      ranking: "QS World Rank #601-650",
      logo: "/images/destinations/ireland/universities/logos/maynooth-university.png",
      courses: [
        { name: "Psychology", duration: "4 Years", annualTuitionFee: "17,000 EUR" },
        { name: "Computer Science", duration: "4 Years", annualTuitionFee: "16,000 EUR" },
        { name: "Business Studies", duration: "4 Years", annualTuitionFee: "18,000 EUR" },
      ],
      eligibility: ["Academic excellence", "English language proficiency", "Valid Passport"],
      careers: ["Psychologists", "Software Developers", "Business Analysts"],
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
