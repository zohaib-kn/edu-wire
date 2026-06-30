import { StudyDestination } from "../types";

export const franceDestination: StudyDestination = {
  slug: "france",
  countryName: "France",
  metadata: {
    title: "Study in France for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in France with Edu-Wire.",
  },
  hero: {
    title: "Study in France with EduWire",
    description:
      "Unlock world-class education opportunities in the heart of Europe!\n\nFrance offers internationally recognized programs across a wide range of fields, combining academic excellence with rich cultural experiences.\n\nWith affordable tuition, global exposure, and vibrant student life, studying in France is a step toward a successful future.\n\nLet **EduWire Overseas Education** be your trusted partner in making your dream of studying in France a reality.",
    image: "/images/destinations/france/hero/France-hero-image.webp",
    imageAlt: "Study MBBS in France",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About France",
    image: "/images/destinations/france/about/france-about.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "France, officially the French Republic, is located in Western Europe. It shares borders with several countries including Germany, Belgium, Romania, and Spain, and is renowned for its rich history, cultural influence, and architectural marvels.",
      "France is globally recognized for its academic excellence, particularly in fields such as business, fashion, arts, science, and technology. It is home to some of the world’s top universities and grandes écoles.",
      "France offers affordable tuition fees at public universities and a high standard of living with strong healthcare and social support systems, making it a popular choice among international students.",
      "As a member of the European Union and the Schengen Area, France allows students to travel freely within Europe and offers numerous opportunities for internships and career growth across the continent.",
      "Students in France enjoy a vibrant cultural life, from world-famous cuisine and wines to iconic fashion, music festivals, museums, and historical landmarks like the Eiffel Tower and the Louvre.",
    ],
  },
  benefits: [
    {
      title: "Top-Tier Education with Global Recognition",
      description:
        "French degrees are recognized worldwide and open doors to international career opportunities. France is home to prestigious universities, engineering schools, and elite business schools (Grandes Écoles).",
      icon: "university",
    },
    {
      title: "Diverse Course Options",
      description:
        "Study Engineering, Management, Fashion, Artificial Intelligence, Hospitality, Public Health, Economics, Literature, and more — all under one educational umbrella.",
      icon: "graduation-cap",
    },
    {
      title: "Affordable Tuition Fees",
      description:
        "Public universities have low tuition fees, and even private institutes offer quality education at reasonable costs compared to other Western countries.",
      icon: "hand-holding-usd",
    },
    {
      title: "Post Study Work Permit – Up to 5 Years",
      description:
        "France offers up to 5 years post-study work permit for international students, giving you ample time to work, settle, or even apply for long-term residency.",
      icon: "id-card",
    },
    {
      title: "Multilingual Advantage",
      description:
        "While many programs are taught in English, you also get the opportunity to learn French, a valuable language spoken in over 29 countries.",
      icon: "language",
    },
    {
      title: "Spouse and Family-Friendly",
      description:
        "You can bring your spouse and children, and spouses have the right to work in most cases depending on your visa type.",
      icon: "users",
    },
    {
      title: "Quality Lifestyle in a Cultural Paradise",
      description:
        "Enjoy fine cuisine, world heritage sites, stunning landscapes, fashion streets, wine valleys, and vibrant nightlife—France is a dream destination to study and live.",
      icon: "passport",
    },
  ],
  universities: [
    {
      name: "Sorbonne University",
      image: "",
      imageAlt: "Sorbonne University",
      ranking: "QS World University Rankings: 85",
      logo: "/images/destinations/france/universities/logos/sorbonne-university-logo.svg",
      logoAlt: "Sorbonne University logo",
      courses: [
        { name: "Philosophy", duration: "3 Years", annualTuitionFee: "2500 EUR" },
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "4500 EUR" },
        { name: "Physics", duration: "4 Years", annualTuitionFee: "3000 EUR" },
      ],
      eligibility: [
        "Baccalauréat or equivalent",
        "French language proficiency",
        "Valid Passport",
      ],
      careers: ["Philosophers", "Medical Professionals", "Physicists"],
    },
    {
      name: "PSL University (Paris Sciences et Lettres)",
      image: "",
      imageAlt: "PSL University (Paris Sciences et Lettres)",
      ranking: "QS World University Rankings: 90",
      logo: "/images/destinations/france/universities/logos/psl-university-logo.svg",
      logoAlt: "PSL University (Paris Sciences et Lettres) logo",
      courses: [
        {
          name: "Computer Science",
          duration: "3 Years",
          annualTuitionFee: "2800 EUR",
        },
        { name: "Economics", duration: "3 Years", annualTuitionFee: "2700 EUR" },
        {
          name: "Art History",
          duration: "3 Years",
          annualTuitionFee: "2600 EUR",
        },
      ],
      eligibility: [
        "High school diploma",
        "French language proficiency",
        "Valid Passport",
      ],
      careers: ["Software Developers", "Economists", "Art Curators"],
    },
    {
      name: "École Centrale de Nantes",
      image: "",
      imageAlt: "École Centrale de Nantes",
      ranking: "QS World University Rankings: 120",
      logo: "/images/destinations/france/universities/logos/ecole-centrale-de-nantes-logo.svg",
      logoAlt: "École Centrale de Nantes logo",
      courses: [
        {
          name: "Mechanical Engineering",
          duration: "5 Years",
          annualTuitionFee: "4500 EUR",
        },
        {
          name: "Electrical Engineering",
          duration: "5 Years",
          annualTuitionFee: "4600 EUR",
        },
        { name: "Robotics", duration: "5 Years", annualTuitionFee: "4700 EUR" },
      ],
      eligibility: [
        "Strong math and science background",
        "French language proficiency",
        "Valid Passport",
      ],
      careers: ["Engineers", "Robotics Specialists"],
    },
    {
      name: "Sciences Po Paris",
      image: "",
      imageAlt: "Sciences Po Paris",
      ranking: "QS World University Rankings: 95",
      logo: "/images/destinations/france/universities/logos/sciences-po-paris-logo.svg",
      logoAlt: "Sciences Po Paris logo",
      courses: [
        {
          name: "Political Science",
          duration: "3 Years",
          annualTuitionFee: "3000 EUR",
        },
        {
          name: "International Relations",
          duration: "3 Years",
          annualTuitionFee: "3200 EUR",
        },
        {
          name: "Public Policy",
          duration: "3 Years",
          annualTuitionFee: "3100 EUR",
        },
      ],
      eligibility: [
        "High school diploma",
        "French or English proficiency",
        "Valid Passport",
      ],
      careers: ["Politicians", "Diplomats", "Policy Analysts"],
    },
    {
      name: "INSEAD Business School",
      image: "",
      imageAlt: "INSEAD Business School",
      ranking: "QS World University Rankings: 75",
      logo: "/images/destinations/france/universities/logos/insead-business-school-logo.svg",
      logoAlt: "INSEAD Business School logo",
      courses: [
        { name: "MBA", duration: "2 Years", annualTuitionFee: "85000 EUR" },
        {
          name: "Executive MBA",
          duration: "1 Year",
          annualTuitionFee: "110000 EUR",
        },
        {
          name: "PhD in Management",
          duration: "4 Years",
          annualTuitionFee: "35000 EUR",
        },
      ],
      eligibility: [
        "Bachelor’s degree or equivalent",
        "Work experience for MBA",
        "English language proficiency",
        "Valid Passport",
      ],
      careers: ["Business Leaders", "Consultants", "Entrepreneurs"],
    },
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in France",
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
            "Invest Your Talent in France – For selected Master’s programs",
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
            "A. DOV (Declaration of Value)",
            "Issued by the Italian Embassy/Consulate after verifying your academic documents. Mandatory for certain universities.",
            "B. CIMEA Certification",
            "A faster online alternative, widely accepted across Italian public universities.",
            "📌 How to Prepare for DOV/CIMEA:",
          ],
          items: [
            "First, authenticate your highest qualification from the HED (Higher Education Department).",
            "Example: For Master’s students, authenticate Bachelor’s degree + transcript.",
            "Then, Apostille the authenticated documents from MEA India. Submit the apostilled documents to Embassy (for DOV) or CIMEA portal.",
          ],
          paragraphs2: ["⏳ Processing Time: 4–8 weeks. Start early to avoid visa delays."],
        },
        {
          heading: "Step 03: Visa Documentation & Final Submission",
          paragraphs: ["Gather and submit the following to VFS:"],
          items: [
            "✔️ Admission letter from Italian university",
            "✔️ Pre-enrollment summary (from Universitaly portal)",
            "✔️ Financial proof (bank balance, family sponsorship, ITR, etc.)",
            "✔️ Accommodation confirmation in France",
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
          paragraphs: ["Carry original academic documents + photocopies", "Must haves :"],
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
      title: "Upon Arrival in France: Post-Arrival Formalities & Enrollment",
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
            "Apply within 8 working days of arrival in France.",
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
          paragraphs2: ["Complete enrollment & activate student credentials"],
        },
        {
          heading: "D. Orientation & Daily Life Setup",
          paragraphs: ["Attend orientation session (if available)", "Settle basics: :"],
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
            "Financial stability in France",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is education in France free for international students?",
      answer:
        "Public universities in France offer low tuition fees for both domestic and international students, especially at the undergraduate level. EU/EEA students pay lower fees, while non-EU students pay slightly higher rates.",
    },
    {
      question: "Are English-taught programs available in France?",
      answer:
        "Yes, many French universities and grandes écoles offer a wide range of programs in English, especially at the master’s and doctoral levels.",
    },
    {
      question: "What are the eligibility requirements to study in France?",
      answer:
        "You need academic transcripts, a valid passport, proof of language proficiency (English or French), a statement of purpose, and letters of recommendation. Some programs may require entrance exams or interviews.",
    },
    {
      question: "Do I need to know French to study in France?",
      answer:
        "For English-taught programs, French is not mandatory. However, basic French knowledge is highly recommended for everyday communication and part-time work. French-taught programs require proof of French proficiency (e.g., DELF, DALF).",
    },
    {
      question: "Is IELTS or TOEFL required for studying in France?",
      answer:
        "Yes, for English-taught programs, IELTS or TOEFL scores are usually required. The required score depends on the university and program.",
    },
    {
      question: "How much are the living expenses for students in France?",
      answer:
        "Living expenses generally range between €700–€1,000/month, including accommodation, food, and transport.",
    },
    {
      question: "Are scholarships available to international students in France?",
      answer:
        "Yes, scholarships are offered by the French government (like Eiffel Scholarships), universities, and organizations such as Campus France to help cover tuition and living costs.",
    },
    {
      question: "Can international students work while studying in France?",
      answer:
        "Yes, international students can work up to 964 hours per year (about 20 hours per week). Many students take part-time jobs or internships.",
    },
    {
      question: "Do I need a visa to study in France?",
      answer:
        "Yes, non-EU/EEA students need a long-stay student visa (VLS-TS). You must also register with OFII upon arrival for residence validation.",
    },
    {
      question: "Can I stay in France after graduation?",
      answer:
        "Yes, international graduates can apply for a temporary residence permit to look for a job or start a business. Once employed, they can transition to a work visa or talent passport.",
    },
  ],
  listing: {
    title: "France",
    description:
      "Unlock world-class education opportunities in the heart of Europe. France combines academic excellence with rich cultural experiences.",
    image: "/images/destinations/france/listing/france-listing.webp",
    imageAlt: "Study in France",
    flag: "/images/flags/france.png",
    published: true,
  },
};
