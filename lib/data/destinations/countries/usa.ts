import { StudyDestination } from "../types";

export const usaDestination: StudyDestination = {
  slug: "usa",
  countryName: "USA",
  metadata: {
    title: "Study in the USA for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in the USA with Edu-Wire.",
  },
  hero: {
    title: "Study in the USA with EduWire",
    description:
      "Discover top-quality education in the USA, home to leading universities and a diverse academic environment. Let EduWire Overseas Education assist you in achieving your educational goals in the USA.",
    image: "/images/destinations/usa/hero/usa-hero-img.webp",
    imageAlt: "Study in USA",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About the USA",
    image: "/images/destinations/usa/about/about-usa.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "The United States of America is known for its world-leading universities and diverse educational opportunities across all fields.",
      "The USA offers cutting-edge research facilities, innovative programs, and a dynamic academic environment.",
      "It provides students with access to a multicultural society, vibrant campus life, and numerous extracurricular activities.",
      "International students benefit from various scholarships, internships, and career opportunities in many industries.",
      "Students can explore iconic landmarks such as the Statue of Liberty, national parks, and bustling cities like New York and San Francisco.",
    ],
  },
  benefits: [
    {
      title: "Work While You Study",
      description:
        "The USA offers excellent on-campus and off-campus job options. Work up to 20 hours/week during semesters and full-time during holidays. Through CPT and OPT, gain real-world experience and earn while learning.",
      icon: "briefcase",
    },
    {
      title: "OPT & CPT Opportunities",
      description:
        "OPT lets you work in the US for 12\u201336 months after graduation (STEM fields eligible for extension), while CPT allows internships during study. These programs boost employability and prepare you for full-time roles post-study.",
      icon: "graduation-cap",
    },
    {
      title: "World-Class Education & Research",
      description:
        "Study at top-ranked US universities offering cutting-edge programs across Engineering, Business, Medicine, AI, and more. Learn from Nobel Laureates and industry leaders while accessing advanced labs and research centers.",
      icon: "graduation-cap",
    },
    {
      title: "Fast Visa Interview Process",
      description:
        "The F1 visa system is quick and straightforward. Most students get a decision immediately after their interview. Once approved, the passport is returned in just a few days\u2014no long delays or hidden steps.",
      icon: "id-card",
    },
    {
      title: "Diverse Campus Life & Exposure",
      description:
        "With over 1 million international students, US universities offer vibrant multicultural communities, clubs, and activities. Enjoy a globally enriching student life while building lifelong international connections.",
      icon: "passport",
    },
    {
      title: "Pathway to Work Visas & Residency",
      description:
        "After OPT, many students transition to the H-1B work visa with employer sponsorship. With experience, you can also explore pathways to Green Card (PR) and long-term settlement in the USA.",
      icon: "briefcase",
    },
  ],
  universities: [
    {
      name: "Princeton University",
      image: "/images/destinations/usa/universities/princeton-university.png",
      imageAlt: "Princeton University",
      ranking: "QS Rank: 22",
      courses: [
        { name: "Engineering", duration: "6 Years", annualTuitionFee: "3500 EUR" },
        { name: "Data Science", duration: "5 Years", annualTuitionFee: "4000 EUR" },
        { name: "Business Analytics", duration: "5 Years", annualTuitionFee: "4000 EUR" },
      ],
      eligibility: [
        "Minimum 60% in relevant subjects",
        "English/German language proficiency",
        "Valid Passport",
      ],
      careers: ["Engineers", "Data Scientists", "Analysts"],
    },
    {
      name: "John Hopkins University",
      image: "/images/destinations/usa/universities/john-hopkins-university.png",
      imageAlt: "John Hopkins University",
      ranking: "QS Rank: 32",
      courses: [
        { name: "Mechanical Engineering", duration: "6 Years", annualTuitionFee: "3600 EUR" },
        { name: "Artificial Intelligence", duration: "5 Years", annualTuitionFee: "3800 EUR" },
        { name: "Robotics", duration: "5 Years", annualTuitionFee: "4000 EUR" },
      ],
      eligibility: [
        "Strong background in math and science",
        "Language proficiency",
        "Valid Passport",
      ],
      careers: ["Automotive Engineers", "Robotics Experts"],
    },
    {
      name: "University of Chicago",
      image: "/images/destinations/usa/universities/university-of-chicago.webp",
      imageAlt: "University of Chicago",
      ranking: "QS Rank: 21",
      courses: [
        { name: "Mechatronics", duration: "6 Years", annualTuitionFee: "3400 EUR" },
        { name: "Computer Science", duration: "5 Years", annualTuitionFee: "3700 EUR" },
        { name: "Civil Engineering", duration: "5 Years", annualTuitionFee: "3500 EUR" },
      ],
      eligibility: [
        "Relevant academic background",
        "Language certification",
        "Valid Passport",
      ],
      careers: ["System Engineers", "Software Developers"],
    },
    {
      name: "Northwestern University",
      image: "/images/destinations/usa/universities/northwestern-university.png",
      imageAlt: "Northwestern University",
      ranking: "QS Rank: 50",
      courses: [
        { name: "Life Sciences", duration: "6 Years", annualTuitionFee: "3900 EUR" },
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "5000 EUR" },
        { name: "Chemistry", duration: "5 Years", annualTuitionFee: "4100 EUR" },
      ],
      eligibility: [
        "Strong science background",
        "NEET qualification (for Medicine)",
        "Valid Passport",
      ],
      careers: ["Researchers", "Medical Professionals"],
    },
    {
      name: "Purdue University",
      image: "/images/destinations/usa/universities/purdue-university.webp",
      imageAlt: "Purdue University",
      ranking: "QS Rank: 89",
      courses: [
        { name: "Social Sciences", duration: "4 Years", annualTuitionFee: "3200 EUR" },
        { name: "Economics", duration: "5 Years", annualTuitionFee: "3300 EUR" },
        { name: "Law", duration: "5 Years", annualTuitionFee: "4000 EUR" },
      ],
      eligibility: [
        "Minimum 60% in qualifying subjects",
        "Language proficiency",
        "Valid Passport",
      ],
      careers: ["Economists", "Policy Makers", "Lawyers"],
    },
    {
      name: "Ohio State University",
      image: "/images/destinations/usa/universities/ohio-state-university.png",
      imageAlt: "Ohio State University",
      ranking: "QS Rank: 208",
      courses: [
        { name: "Humanities", duration: "4 Years", annualTuitionFee: "3100 EUR" },
        { name: "Physics", duration: "5 Years", annualTuitionFee: "3900 EUR" },
        { name: "Neurosciences", duration: "5 Years", annualTuitionFee: "4200 EUR" },
      ],
      eligibility: [
        "Academic excellence",
        "Subject relevance",
        "Valid Passport",
      ],
      careers: ["Researchers", "Professors", "Psychologists"],
    },
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in USA",
    disclaimer:
      "Timeline details can vary based on official MUR notices and specific university deadlines.",
    steps: [
      { label: "Apply" },
      { label: "Pre-Enrol" },
      { label: "Funding" },
      { label: "Visa" },
      { label: "Depart" },
      { label: "Arrive" },
    ],
  },
  applicationProcess: [
    {
      number: 1,
      title: "October \u2013 May: University Shortlisting & Application Process",
      sections: [
        {
          heading: "A. Shortlisting Universities & Courses",
          items: [
            "Research universities based on ranking, course, fees, scholarships, and careers.",
            "Check eligibility criteria for Bachelor\u2019s, Master\u2019s, or PhD.",
            "Consider English/Italian language requirements.",
          ],
        },
        {
          heading: "B. University Application",
          paragraphs: [
            "Apply through university websites or Universitaly platform.",
            "Required documents:",
          ],
          items: [
            "Transcripts",
            "Passport",
            "Motivation letter",
            "CV/Resume",
            "Recommendation letters",
            "Language certificate",
          ],
        },
        {
          heading: "C. Entrance Exam / Interview",
          paragraphs: ["Exams may include:"],
          items: ["IMAT, TOLC-I, GRE/GMAT, Aptitude Tests"],
          paragraphs2: ["Some programs require online interviews."],
        },
        {
          heading: "D. Admission Results",
          paragraphs: [
            "Admission results are announced between March\u2013June.",
            "Admission letter required for visa application.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "April \u2013 October: Pre-Enrolment & Enrollment Fee Payment",
      sections: [
        {
          heading: "A. Pre-Enrolment on Universitaly",
          items: [
            "All non-EU students must pre-enroll through Universitaly.it.",
            "This is a mandatory step for initiating the student visa process through the Italian Embassy or Consulate in your country.",
            "Ensure your personal and academic details match your official documents to avoid delays or rejections.",
          ],
        },
        {
          heading: "B. Fee Payment for Some Universities",
          items: [
            "Some universities request students to pay the first installment of tuition fees during the enrollment phase.",
            "These payments confirm your intent to join and are often required to activate your admission. Payment receipts are essential for your visa application and university onboarding procedures.",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "June \u2013 October: Scholarship & Documentation Process",
      sections: [
        {
          heading: "A. Scholarship Online Applications",
          paragraphs: [
            "Italian public universities offer multiple scholarship options based on merit and financial need. These include:",
          ],
          items: [
            "Regional Scholarships (e.g. LazioDisco, DSU, EDISU, ERGO, etc.) \u2013 Most popular among Indian students",
            "Invest Your Talent in USA \u2013 For selected Master\u2019s programs",
            "University-specific scholarships \u2013 Offered directly by universities",
          ],
        },
        {
          heading: "B. Documentation Preparation",
          items: [
            "For regional scholarships, students must follow a 3-step document preparation process:",
            "Legalize your family income and financial documents in English (as per Indian standards)",
            "Translate these legalized documents into Italian",
            "Legalize the Italian-translated versions (if required by the scholarship authority)",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "May \u2013 October: Visa Application & Documentation",
      sections: [
        {
          heading: "Step 01: Track Visa Appointments Actively",
          paragraphs: [
            "\u26a0\ufe0f Student visa slots (at VFS Global) are extremely limited.",
          ],
          items: [
            "Regularly check the VFS portal for appointment availability.",
            "Be flexible and ready to book as soon as slots open.",
          ],
        },
        {
          heading: "Step 02: Prepare DOV/CIMEA Certification",
          paragraphs: [
            "To validate your academic qualifications, choose one of the two:",
            "A. DOV (Declaration of Value)",
            "Issued by the Italian Embassy/Consulate after verifying your academic documents. Mandatory for certain universities.",
            "B. CIMEA Certification",
            "A faster online alternative, widely accepted across Italian public universities.",
            "\ud83d\udccc How to Prepare for DOV/CIMEA:",
          ],
          items: [
            "First, authenticate your highest qualification from the HED (Higher Education Department).",
            "Example: For Master\u2019s students, authenticate Bachelor\u2019s degree + transcript.",
            "Then, Apostille the authenticated documents from MEA India. Submit the apostilled documents to Embassy (for DOV) or CIMEA portal.",
          ],
          paragraphs2: ["\u23f3 Processing Time: 4\u20138 weeks. Start early to avoid visa delays."],
        },
        {
          heading: "Step 03: Visa Documentation & Final Submission",
          paragraphs: ["Gather and submit the following to VFS:"],
          items: [
            "\u2714\ufe0f Admission letter from Italian university",
            "\u2714\ufe0f Pre-enrollment summary (from Universitaly portal)",
            "\u2714\ufe0f Financial proof (bank balance, family sponsorship, ITR, etc.)",
            "\u2714\ufe0f Accommodation confirmation in USA",
            "\u2714\ufe0f Valid travel insurance",
            "\u2714\ufe0f DOV/CIMEA certification",
          ],
          paragraphs2: [
            "Once complete, submit your file at VFS Global and await visa approval.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "August \u2013 December: Pre-Departure Preparation",
      sections: [
        {
          heading: "A. Flight Booking & Travel Readiness",
          items: [
            "Book your flight only after getting your D-Type Student Visa",
            "Some may need a refundable ticket for visa application",
            "Choose a travel date that gives you time to settle before classes",
          ],
        },
        {
          heading: "B. Activate International Roaming Pack (IMPORTANT)",
          items: [
            "Activate a 1-week international roaming pack before you fly",
            "Stay connected during travel & after arrival",
            "Useful if Italian SIM purchase is delayed",
            "Stay in touch with EDU-WIRE, family, and friends easily",
          ],
        },
        {
          heading: "C. Luggage & Essentials Checklist",
          paragraphs: [
            "Carry original academic documents + photocopies",
            "Must haves:",
          ],
          items: [
            "Prescribed medicines + doctor\u2019s note",
            "Voltage adapters & seasonal clothing",
            "Kitchen basics, dry snacks, hygiene kits",
          ],
          paragraphs2: ["Keep printouts of:"],
          items2: [
            "Visa & travel insurance",
            "Accommodation confirmation",
            "Flight itinerary & offer letter",
          ],
        },
        {
          heading: "D. Airport Pickup & Transit Planning",
          items: [
            "Arrange pickup with family, friends, or KALINGAEURO",
            "Know your arrival address & transit options in advance",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Upon Arrival in USA: Post-Arrival Formalities & Enrollment",
      sections: [
        {
          heading: "A. Apply for Codice Fiscale (Tax Code)",
          paragraphs: [
            "Visit Agenzia delle Entrate to apply for your Codice Fiscale.",
            "Required For:",
          ],
          items: [
            "Opening a bank account",
            "Signing a rental contract",
            "Applying for a residence permit",
          ],
        },
        {
          heading: "B. Permesso di Soggiorno (Residence Permit)",
          paragraphs: [
            "Apply within 8 working days of arrival in USA.",
            "Steps:",
          ],
          items: [
            "Collect the kit from your local Post Office",
            "Fill and submit with documents + payment",
            "Attend biometric appointment at the Questura",
          ],
        },
        {
          heading: "C. University Physical Enrollment (if required)",
          paragraphs: [
            "Some universities require in-person verification",
            "Visit with:",
          ],
          items: [
            "Original academic documents",
            "Codice Fiscale",
            "Residence permit receipt",
          ],
          paragraphs2: ["Complete enrollment & activate student credentials"],
        },
        {
          heading: "D. Orientation & Daily Life Setup",
          paragraphs: [
            "Attend orientation session (if available)",
            "Settle basics:",
          ],
          items: [
            "Buy & activate Italian SIM",
            "Apply for transport pass",
            "Explore your neighborhood",
            "Use student discounts, try mensa, join student groups",
          ],
        },
        {
          heading: "E. Open an Italian Bank Account",
          paragraphs: [
            "With Codice Fiscale & residence proof, visit a bank",
            "Important for:",
          ],
          items: [
            "Receiving scholarships",
            "Paying rent and expenses",
            "Financial stability in USA",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why choose the USA for higher education?",
      answer:
        "The USA is home to many of the world\u2019s top-ranked universities, offers a wide range of programs, cutting-edge research opportunities, and global career prospects.",
    },
    {
      question: "How does EduWire support students applying to the USA?",
      answer:
        "EduWire provides end-to-end support including university shortlisting, application assistance, SOP & LOR guidance, visa counselling, and pre-departure sessions.",
    },
    {
      question: "What are the academic requirements to study in the USA?",
      answer:
        "Requirements include academic transcripts, standardized test scores (SAT, GRE, GMAT as applicable), English proficiency scores (IELTS/TOEFL), SOPs, and recommendation letters.",
    },
    {
      question: "Is IELTS or TOEFL mandatory to study in the USA?",
      answer:
        "Yes, most US universities require proof of English proficiency. TOEFL and IELTS are widely accepted. Some universities may also accept Duolingo or PTE.",
    },
    {
      question: "What are the tuition fees in the USA for international students?",
      answer:
        "Tuition fees vary by university and program. On average, undergraduate courses cost USD 20,000\u201340,000 per year and postgraduate courses range from USD 25,000\u201350,000 per year.",
    },
    {
      question: "How much does it cost to live in the USA as a student?",
      answer:
        "Living expenses range from USD 800 to 1,500 per month depending on the city, lifestyle, and accommodation choice. EduWire helps students estimate and plan their budget.",
    },
    {
      question: "Are scholarships available for studying in the USA?",
      answer:
        "Yes, many US universities offer scholarships for international students based on academic merit, need, or extracurricular achievements. EduWire assists in finding and applying for them.",
    },
    {
      question: "Can international students work while studying in the USA?",
      answer:
        "Yes, students on an F-1 visa can work up to 20 hours per week on-campus during the academic year. Off-campus work options are available under CPT and OPT programs.",
    },
    {
      question: "What type of visa is required to study in the USA?",
      answer:
        "You need an F-1 Student Visa to study full-time in the USA. EduWire guides you through the entire visa application process, including interview preparation and documentation.",
    },
    {
      question: "Can I stay in the USA after graduation?",
      answer:
        "Yes, international students can work under OPT (Optional Practical Training) for up to 12 months after graduation. STEM graduates may be eligible for a 24-month OPT extension.",
    },
  ],
};
