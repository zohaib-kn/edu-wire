import { StudyDestination } from "../types";

export const spainDestination: StudyDestination = {
  slug: "spain",
  countryName: "Spain",
  metadata: {
    title: "Study in Spain for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in Spain with Edu-Wire.",
  },
  hero: {
    title: "Study in Spain with EduWire",
    description:
      "Experience high-quality education in one of Europe’s most vibrant and welcoming countries.\n\nSpain offers a wide range of internationally recognized programs in English and Spanish, with affordable tuition fees and a lively student culture.\n\nFrom historic universities to modern campuses, enjoy academic excellence alongside rich traditions, sunny weather, and global networking opportunities.\n\n**EduWire Overseas Education** is your trusted partner in starting your educational journey in Spain.",
    image: "/images/destinations/spain/hero/spain-hero-image.webp",
    imageAlt: "Study MBBS in Spain",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About Spain",
    image: "/images/destinations/spain/about/about-spain.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "Spain, located in Southwestern Europe, is famous for its vibrant culture, historic cities, and Mediterranean climate.",
      "It offers a range of high-quality universities and academic programs, attracting students from all over the world.",
      "Spain provides affordable tuition fees and a welcoming environment with a rich cultural and social life for international students.",
      "As a member of the European Union and the Schengen Area, Spain enables easy travel across Europe for study and internships.",
      "Students can enjoy Spain’s diverse cultural heritage, including famous festivals like La Tomatina and Running of the Bulls, as well as iconic architecture such as the Sagrada Familia.",
    ],
  },
  benefits: [
    {
      title: "Affordable Tuition Fees",
      description:
        "Spain offers lower tuition fees compared to other major European countries, making it a cost-effective option for quality education.",
      icon: "wallet",
    },
    {
      title: "English-Taught Programs",
      description:
        "Many universities in Spain offer undergraduate and postgraduate programs taught entirely in English, making them accessible to international students.",
      icon: "language",
    },
    {
      title: "Part-Time Work Opportunities",
      description:
        "International students are allowed to work up to 30 hours per week during their studies, helping them gain experience and support their living costs.",
      icon: "briefcase",
    },
    {
      title: "Global Exposure & Networking",
      description:
        "Studying in Spain provides access to a vibrant international student community and travel opportunities across Europe, expanding your global perspective.",
      icon: "globe",
    },
    {
      title: "Mediterranean Lifestyle",
      description:
        "Enjoy Spain’s sunny weather, rich culture, and relaxed lifestyle while pursuing your academic goals in a warm and welcoming environment.",
      icon: "sun",
    },
  ],
  educationSystem: {
    title: "Spain’s Education System",
    description:
      "Spain’s higher education system is recognized globally for its quality and diversity. Universities in Spain offer programs in English and Spanish, catering to a wide range of disciplines.",
    subtitle: "Types of Institutions in Spain:",
    institutions: [
      {
        icon: "university",
        title: "Public Universities",
        description: "Lower tuition, highly reputed",
      },
      {
        icon: "briefcase",
        title: "Private Universities & Business Schools",
        description:
          "Excellent international programs, flexible intakes, smaller class sizes",
      },
      {
        icon: "tools",
        title: "Technical Institutes",
        description: "Practical training for specific industries",
      },
    ],
  },
  popularCourses: {
    title: "Popular Courses in Spain",
    description:
      "Spain has strong academic programs across many fields. Popular courses among international students include:",
    courses: [
      {
        name: "Business & Management Studies",
        image: "/images/destinations/spain/courses/business-management.jpg",
        imageAlt: "Business & Management Studies",
      },
      {
        name: "Tourism & Hospitality Management",
        image: "/images/destinations/spain/courses/tourism-hospitality.jpg",
        imageAlt: "Tourism & Hospitality Management",
      },
      {
        name: "Data Science & Artificial Intelligence",
        image: "/images/destinations/spain/courses/datascience-ai.jpg",
        imageAlt: "Data Science & AI",
      },
      {
        name: "Health & Social Care Management",
        image: "/images/destinations/spain/courses/health-socialcare.jpg",
        imageAlt: "Health & Social Care Management",
      },
      {
        name: "Engineering & Technology",
        image: "/images/destinations/spain/courses/engineering-technology.jpg",
        imageAlt: "Engineering & Technology",
      },
      {
        name: "Project Management",
        image: "", // empty path indicates icon or text fallback
        imageAlt: "Project Management",
      },
      {
        name: "Logistics & Supply Chain Management",
        image: "/images/destinations/spain/courses/logistics-supplychain.jpg",
        imageAlt: "Logistics & Supply Chain",
      },
      {
        name: "Spanish Language & Culture",
        image: "/images/destinations/spain/courses/spanish-culture.jpg",
        imageAlt: "Spanish Language & Culture",
      },
    ],
  },
  studyCosts: {
    title: "Cost Of Studying In Spain",
    description:
      "The cost of studying in Spain for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.",
    groups: [
      {
        title: "Tuition Fees (Average per annum)",
        costs: [
          { label: "Bachelor's", value: "€6,000 – €10,000" },
          { label: "Master's", value: "€7,000 – €14,000" },
        ],
      },
      {
        title: "Living Expenses (Average per month)",
        valueLarge: "€700 – €1,000",
      },
    ],
  },
  workOpportunities: {
    title: "Work Opportunities in Spain",
    description:
      "International students in Spain can work up to 30 hours per week during their studies. After graduation, many programs allow students to apply for a two-year post-study work visa to seek employment in Spain.",
    opportunities: [
      {
        name: "Hospitality & Tourism",
        image:
          "/images/destinations/spain/work-opportunities/hospitality-tourism.jpg",
        imageAlt: "Hospitality & Tourism",
      },
      {
        name: "Business & Consulting",
        image:
          "/images/destinations/spain/work-opportunities/business-consulting.jpg",
        imageAlt: "Business & Consulting",
      },
      {
        name: "IT & Technology Services",
        image:
          "/images/destinations/spain/work-opportunities/it-technology.jpg",
        imageAlt: "IT & Technology Services",
      },
      {
        name: "Marketing & Digital Media",
        image:
          "/images/destinations/spain/work-opportunities/marketing-digitalmedia.jpg",
        imageAlt: "Marketing and Digital Media",
      },
      {
        name: "Teaching English",
        image:
          "/images/destinations/spain/work-opportunities/teaching-english.jpg",
        imageAlt: "Teaching English",
      },
    ],
  },
  universities: [
    {
      name: "C3S Business School, Barcelona",
      image: "",
      imageAlt: "C3S Business School , Barcelona",
      ranking: "QS World University Rankings: -",
      logo: "/images/destinations/spain/universities/logos/c3s-business-school-logo.png",
      logoAlt: "C3S Business School, Barcelona logo",
      courses: [
        {
          name: "Bachelor",
          duration: "3 Years",
          annualTuitionFee: "7000/year EUR",
        },
        {
          name: "Master",
          duration: "18 Months",
          annualTuitionFee: "10800 EUR",
        },
        {
          name: "Diplomas",
          duration: "12 Months",
          annualTuitionFee: "7500 EUR",
        },
      ],
      eligibility: [
        "Minimum 65% in relevant subjects",
        "DELE B2 / IELTS 6.5 or equivalent",
        "Valid Passport",
      ],
      careers: ["Doctors", "Biotechnologists", "Academicians"],
    },
    {
      name: "University of Barcelona",
      image: "",
      imageAlt: "University of Barcelona",
      ranking: "QS World University Rankings: 164",
      logo: "/images/destinations/spain/universities/logos/university-of-barcelona-logo.svg",
      logoAlt: "University of Barcelona logo",
      courses: [
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "5000 EUR" },
        {
          name: "Biotechnology",
          duration: "4 Years",
          annualTuitionFee: "4000 EUR",
        },
        {
          name: "Philosophy",
          duration: "4 Years",
          annualTuitionFee: "3500 EUR",
        },
      ],
      eligibility: [
        "Minimum 65% in relevant subjects",
        "DELE B2 / IELTS 6.5 or equivalent",
        "Valid Passport",
      ],
      careers: ["Doctors", "Biotechnologists", "Academicians"],
    },
    {
      name: "Autonomous University of Madrid",
      image: "",
      imageAlt: "Autonomous University of Madrid",
      ranking: "QS World University Rankings: 207",
      logo: "/images/destinations/spain/universities/logos/autonomous-university-of-madrid-logo.svg",
      logoAlt: "Autonomous University of Madrid logo",
      courses: [
        { name: "Law", duration: "4 Years", annualTuitionFee: "3900 EUR" },
        { name: "Physics", duration: "4 Years", annualTuitionFee: "4100 EUR" },
        { name: "Economics", duration: "4 Years", annualTuitionFee: "4300 EUR" },
      ],
      eligibility: [
        "Good academic background",
        "Spanish or English proficiency",
        "Valid Passport",
      ],
      careers: ["Lawyers", "Physicists", "Economists"],
    },
    {
      name: "Complutense University of Madrid",
      image: "",
      imageAlt: "Complutense University of Madrid",
      ranking: "QS World University Rankings: 226",
      logo: "/images/destinations/spain/universities/logos/complutense-university-of-madrid-logo.svg",
      logoAlt: "Complutense University of Madrid logo",
      courses: [
        { name: "Dentistry", duration: "5 Years", annualTuitionFee: "4800 EUR" },
        {
          name: "Journalism",
          duration: "4 Years",
          annualTuitionFee: "3700 EUR",
        },
        {
          name: "Political Science",
          duration: "4 Years",
          annualTuitionFee: "3900 EUR",
        },
      ],
      eligibility: [
        "Relevant high school subjects",
        "Language proficiency (DELE B2 / IELTS)",
        "Valid Passport",
      ],
      careers: ["Dentists", "Journalists", "Policy Makers"],
    },
    {
      name: "Pompeu Fabra University",
      image: "",
      imageAlt: "Pompeu Fabra University",
      ranking: "QS World University Rankings: 304",
      logo: "/images/destinations/spain/universities/logos/pompeu-fabra-university-logo.jpg",
      logoAlt: "Pompeu Fabra University logo",
      courses: [
        {
          name: "International Business",
          duration: "4 Years",
          annualTuitionFee: "4500 EUR",
        },
        { name: "Economics", duration: "4 Years", annualTuitionFee: "4300 EUR" },
        { name: "Law", duration: "4 Years", annualTuitionFee: "4000 EUR" },
      ],
      eligibility: [
        "Strong academic record",
        "Language proficiency",
        "Valid Passport",
      ],
      careers: ["Economists", "Corporate Lawyers", "Consultants"],
    },
    {
      name: "University of Granada",
      image: "",
      imageAlt: "University of Granada",
      ranking: "QS World University Rankings: 494",
      logo: "/images/destinations/spain/universities/logos/university-of-granada-logo.png",
      logoAlt: "University of Granada logo",
      courses: [
        { name: "Pharmacy", duration: "5 Years", annualTuitionFee: "3500 EUR" },
        {
          name: "Computer Engineering",
          duration: "4 Years",
          annualTuitionFee: "4000 EUR",
        },
        {
          name: "Tourism Management",
          duration: "4 Years",
          annualTuitionFee: "3600 EUR",
        },
      ],
      eligibility: [
        "Academic qualifications",
        "Spanish or English fluency",
        "Valid Passport",
      ],
      careers: ["Pharmacists", "Engineers", "Tourism Professionals"],
    },
    {
      name: "University of Valencia",
      image: "",
      imageAlt: "University of Valencia",
      ranking: "QS World University Rankings: 571-580",
      logo: "/images/destinations/spain/universities/logos/university-of-valencia-logo.svg",
      logoAlt: "University of Valencia logo",
      courses: [
        { name: "Chemistry", duration: "4 Years", annualTuitionFee: "3700 EUR" },
        {
          name: "Education Sciences",
          duration: "4 Years",
          annualTuitionFee: "3600 EUR",
        },
        { name: "Psychology", duration: "4 Years", annualTuitionFee: "3800 EUR" },
      ],
      eligibility: [
        "60%+ in previous qualifications",
        "DELE B2 or IELTS 6.0+",
        "Valid Passport",
      ],
      careers: ["Teachers", "Researchers", "Psychologists"],
    },
  ],
  journey: {
    title: "Your Journey to Study in Spain",
    disclaimer:
      "Note: Public Universities generally have only a Winter intake. | Timeline details can vary based on official MUR notices and specific university deadlines.",
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
      title: "October – May: University Shortlisting & Application Process",
      sections: [
        {
          heading: "A. Shortlisting Universities & Courses",
          items: [
            "Research universities based on ranking, course, fees, scholarships, and careers.",
            "Check eligibility criteria for Bachelor's, Master's, or PhD.",
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
            "Results between March–June.",
            "Admission letter required for visa application.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "April – October: Pre-Enrolment & Enrollment Fee Payment",
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
      title: "June – October: Scholarship & Documentation Process",
      sections: [
        {
          heading: "A. Scholarship Online Applications",
          paragraphs: [
            "Italian public universities offer multiple scholarship options based on merit and financial need. These include:",
          ],
          items: [
            "Regional Scholarships (e.g. LazioDisco, DSU, EDISU, ERGO, etc.) – Most popular among Indian students",
            "Invest Your Talent in Spain – For selected Master’s programs",
            "University-specific scholarships – Offered directly by universities",
          ],
        },
        {
          heading: "B. Documentation Preparation",
          items: [
            "For regional scholarships, students must follow a 3-step document preparation process:",
            "Legalize your family income and financial documents in English (as per Indian standards) Translate these legalized documents into Italian",
            "Legalize the Italian-translated versions (if required by the scholarship authority)",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "May – October: Visa Application & Documentation",
      sections: [
        {
          heading: "Step 01: Track Visa Appointments Actively",
          paragraphs: [
            "⚠️ Student visa slots (at VFS Global) are extremely limited.",
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
            "A. DOV (Declaration of Value)\nIssued by the Italian Embassy/Consulate after verifying your academic documents. Mandatory for certain universities.",
            "B. CIMEA Certification\nA faster online alternative, widely accepted across Italian public universities.",
            "📌 How to Prepare for DOV/CIMEA:",
          ],
          items: [
            "First, authenticate your highest qualification from the HED (Higher Education Department).",
            "Example: For Master’s students, authenticate Bachelor’s degree + transcript.",
            "Then, Apostille the authenticated documents from MEA India. Submit the apostilled documents to Embassy (for DOV) or CIMEA portal.",
          ],
          paragraphs2: [
            "⏳ Processing Time: 4–8 weeks. Start early to avoid visa delays.",
          ],
        },
        {
          heading: "Step 03: Visa Documentation & Final Submission",
          paragraphs: ["Gather and submit the following to VFS:"],
          items: [
            "✔️ Admission letter from Italian university",
            "✔️ Pre-enrollment summary (from Universitaly portal)",
            "✔️ Financial proof (bank balance, family sponsorship, ITR, etc.)",
            "✔️ Accommodation confirmation in Spain",
            "✔️ Valid travel insurance",
            "✔️ DOV/CIMEA certification",
          ],
          paragraphs2: [
            "Once complete, submit your file at VFS Global and await visa approval.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "August – December: Pre-Departure Preparation",
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
            "Useful if SIM info-card purchase is delayed",
            "Stay in touch with EDU-WIRE, family, and friends easily",
          ],
        },
        {
          heading: "C. Luggage & Essentials Checklist",
          paragraphs: [
            "Carry original academic documents + photocopies",
            "Must haves :",
          ],
          items: [
            "Prescribed medicines + doctor’s note",
            "Voltage adapters & seasonal clothing",
            "Kitchen basics, dry snacks, hygiene kits",
          ],
          paragraphs2: ["Keep printouts of :"],
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
      title: "Upon Arrival in Spain: Post-Arrival Formalities & Enrollment",
      sections: [
        {
          heading: "A. Apply for Codice Fiscale (Tax Code)",
          paragraphs: [
            "Visit Agenzia delle Entrate to apply for your Codice Fiscale.",
            "Required For :",
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
            "Apply within 8 working days of arrival in Spain.",
            "Steps :",
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
            "Visit with :",
          ],
          items: [
            "Original academic documents",
            "Codice Fiscale",
            "Residence permit receipt",
          ],
          paragraphs2: [
            "Complete enrollment & activate student credentials",
          ],
        },
        {
          heading: "D. Orientation & Daily Life Setup",
          paragraphs: [
            "Attend orientation session (if available)",
            "Settle basics: :",
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
            "Important for :",
          ],
          items: [
            "Receiving scholarships",
            "Paying rent and expenses",
            "Financial stability in Spain",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is studying in Spain affordable for international students?",
      answer:
        "Yes, Spain is one of the more affordable study destinations in Europe. Public universities typically charge between €1,000 to €3,000 per year, depending on the program and level.",
    },
    {
      question: "Are there English-taught programs available in Spain?",
      answer:
        "Yes, many universities in Spain offer programs in English, especially at the master's level. However, some undergraduate courses may still require Spanish proficiency.",
    },
    {
      question: "Do I need to know Spanish to study in Spain?",
      answer:
        "For English-taught programs, Spanish is not mandatory. However, learning basic Spanish is highly recommended for daily life and part-time job opportunities.",
    },
    {
      question: "What are the eligibility criteria for studying in Spain?",
      answer:
        "You typically need academic transcripts, a valid passport, proof of language proficiency (English or Spanish), a statement of purpose, and sometimes entrance test scores depending on the program.",
    },
    {
      question: "Is IELTS or TOEFL required to study in Spain?",
      answer:
        "Yes, if you're applying to an English-taught program, IELTS or TOEFL scores are generally required to demonstrate English proficiency.",
    },
    {
      question: "How much are living expenses for students in Spain?",
      answer:
        "Living costs range between €700–€1,100 per month, depending on the city. Madrid and Barcelona are more expensive than smaller cities like Valencia or Granada.",
    },
    {
      question: "Are scholarships available for international students in Spain?",
      answer:
        "Yes, scholarships are offered by the Spanish government, universities, and organizations such as Erasmus+ to support international students financially.",
    },
    {
      question: "Can international students work while studying in Spain?",
      answer:
        "Yes, international students are allowed to work part-time up to 20 hours per week, provided the job does not interfere with their studies.",
    },
    {
      question: "Do I need a visa to study in Spain?",
      answer:
        "Yes, non-EU/EEA students need a student visa for programs longer than 90 days. After arrival, students must also apply for a residence card (TIE).",
    },
    {
      question: "Can I stay in Spain after graduation?",
      answer:
        "Yes, Spain offers a post-study stay option of 12 months to look for employment or start a business after graduation.",
    },
  ],
  listing: {
    title: "Study in Spain",
    description:
      "Explore top universities, courses, tuition fees, eligibility, and study opportunities in Spain.",
    image: "/images/destinations/spain/listing/spain-listing.jpg",
    imageAlt: "Study in Spain",
    flag: "🇪🇸",
    published: true,
  },
};
