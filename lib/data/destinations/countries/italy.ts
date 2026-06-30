import { StudyDestination } from "../types";

export const italyDestination: StudyDestination = {
  slug: "italy",
  countryName: "Italy",
  metadata: {
    title: "Study in Italy for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in Italy with Edu-Wire.",
  },
  hero: {
    title: "Study in Italy with EduWire",
    description:
      "with a **100% Scholarship**, including a **Stipend, Meals & Accommodation** of up to **€8500** (based on your family's annual income).\n\nEduWire also guarantees **100% Visa Success**. If your visa is refused, we will refund **100% of your consultancy fees** — subject to the following two conditions:",
    heroBullets: [
      "You must not fail the Visa Interview.",
      "All submitted documents must be genuine (no forged or misleading documents).",
    ],
    image: "/images/destinations/italy/hero/italy-hero-img.webp",
    imageAlt: "Study in Italy with EduWire",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About Italy",
    image: "/images/destinations/italy/about/italy-cities.jpg",
    imageAlt: "About Italy – Cities and Culture",
    points: [
      "Italy, located in Southern Europe, is famed for its rich history, art, and architectural wonders.",
      "It hosts prestigious universities offering diverse programs in humanities, arts, engineering, and sciences.",
      "Italy offers affordable tuition fees at many public universities, combined with a vibrant lifestyle and welcoming atmosphere for international students.",
      "As a member of the European Union and the Schengen Area, Italy provides easy access for travel and study across Europe.",
      "Students enjoy Italy's rich cultural heritage, including world-famous cuisine, historic cities like Rome and Florence, and renowned museums and festivals.",
    ],
  },
  benefits: [
    {
      title: "World-Class Education",
      description:
        "Italy is home to some of the oldest and most prestigious universities in the world. Institutions like the University of Bologna, Sapienza University of Rome, and Politecnico di Milano are globally recognized for their academic excellence and research contributions.",
      icon: "graduation-cap",
    },
    {
      title: "Affordable Living",
      description:
        "With scholarships covering tuition fees, accommodation, and even daily expenses, studying in Italy is incredibly affordable. The cost of living is also lower compared to other European countries, making it a budget-friendly option for students.",
      icon: "wallet",
    },
    {
      title: "Rich Cultural Experience",
      description:
        "From the ancient ruins of Rome to the Renaissance art of Florence, Italy is a living museum. Studying here means immersing yourself in a culture that has shaped the world's history, art, and cuisine.",
      icon: "landmark",
    },
    {
      title: "Work Opportunities",
      description:
        "International students can work part-time while studying and explore post-study work visas to kickstart their careers in Italy or other European countries.",
      icon: "briefcase",
    },
    {
      title: "Schengen Advantage",
      description:
        "With a student visa, you can travel freely across all 27 Schengen countries. This opens up endless opportunities for travel, networking, and cultural exploration.",
      icon: "passport",
    },
    {
      title: "Exchange Programs",
      description:
        "Many Italian universities offer exchange programs with other top European institutions, giving you the chance to gain international exposure and build a global career.",
      icon: "graduation-cap",
    },
  ],
  universities: [
    {
      name: "University of Bologna",
      image: "",
      imageAlt: "University of Bologna",
      ranking: "QS World University Rankings: 112",
      logo: "/images/destinations/italy/universities/logos/university-of-bologna.svg",
      logoAlt: "University of Bologna logo",
      courses: [
        { name: "Law", duration: "5 Years", annualTuitionFee: "3000 EUR" },
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "4000 EUR" },
        {
          name: "Computer Science",
          duration: "3 Years",
          annualTuitionFee: "2800 EUR",
        },
      ],
      eligibility: [
        "High school diploma or equivalent",
        "IMAT qualification (for Medicine)",
        "Valid Passport",
      ],
      careers: ["Lawyers", "Doctors", "Software Developers"],
    },
    {
      name: "Politecnico di Milano",
      image: "",
      imageAlt: "Politecnico di Milano",
      ranking: "QS World University Rankings: 123",
      logo: "/images/destinations/italy/universities/logos/politecnico-di-milano.svg",
      logoAlt: "Politecnico di Milano logo",
      courses: [
        {
          name: "Mechanical Engineering",
          duration: "3 Years",
          annualTuitionFee: "3500 EUR",
        },
        {
          name: "Architecture",
          duration: "5 Years",
          annualTuitionFee: "4000 EUR",
        },
        {
          name: "Industrial Design",
          duration: "3 Years",
          annualTuitionFee: "3000 EUR",
        },
      ],
      eligibility: [
        "Relevant academic background",
        "English or Italian language proficiency",
        "Valid Passport",
      ],
      careers: ["Engineers", "Architects", "Designers"],
    },
    {
      name: "Sapienza University of Rome",
      image: "",
      imageAlt: "Sapienza University of Rome",
      ranking: "QS World University Rankings: 134",
      logo: "/images/destinations/italy/universities/logos/sapienza-university-of-rome.svg",
      logoAlt: "Sapienza University of Rome logo",
      courses: [
        { name: "Physics", duration: "3 Years", annualTuitionFee: "2800 EUR" },
        {
          name: "Economics",
          duration: "3 Years",
          annualTuitionFee: "2900 EUR",
        },
        {
          name: "Civil Engineering",
          duration: "3 Years",
          annualTuitionFee: "3000 EUR",
        },
      ],
      eligibility: [
        "High school certificate",
        "Language proficiency (IELTS/Italian)",
        "Valid Passport",
      ],
      careers: ["Researchers", "Economists", "Civil Engineers"],
    },
    {
      name: "University of Padua",
      image: "",
      imageAlt: "University of Padua",
      ranking: "QS World University Rankings: 116",
      logo: "/images/destinations/italy/universities/logos/university-of-padua.svg",
      logoAlt: "University of Padua logo",
      courses: [
        {
          name: "Medicine and Surgery",
          duration: "6 Years",
          annualTuitionFee: "4200 EUR",
        },
        { name: "Biology", duration: "3 Years", annualTuitionFee: "2800 EUR" },
        { name: "Law", duration: "5 Years", annualTuitionFee: "3100 EUR" },
      ],
      eligibility: [
        "IMAT (for Medicine)",
        "High school diploma",
        "Valid Passport",
      ],
      careers: ["Doctors", "Biologists", "Legal Experts"],
    },
    {
      name: "Bocconi University",
      image: "",
      imageAlt: "Bocconi University",
      ranking: "QS World University Rankings: 91",
      logo: "/images/destinations/italy/universities/logos/bocconi-university.svg",
      logoAlt: "Bocconi University logo",
      courses: [
        {
          name: "Business Administration",
          duration: "3 Years",
          annualTuitionFee: "13000 EUR",
        },
        {
          name: "Economics and Finance",
          duration: "3 Years",
          annualTuitionFee: "13500 EUR",
        },
        {
          name: "International Politics",
          duration: "3 Years",
          annualTuitionFee: "12500 EUR",
        },
      ],
      eligibility: [
        "High school academic merit",
        "English proficiency (TOEFL/IELTS)",
        "Valid Passport",
      ],
      careers: ["Managers", "Financial Analysts", "Diplomats"],
    },
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in Italy",
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
            "Invest Your Talent in Italy – For selected Master's programs",
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
            "Example: For Master's students, authenticate Bachelor's degree + transcript.",
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
            "✔️ Accommodation confirmation in Italy",
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
          paragraphs: ["Carry original academic documents + photocopies", "Must haves:"],
          items: [
            "Prescribed medicines + doctor's note",
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
      title: "Upon Arrival in Italy: Post-Arrival Formalities & Enrollment",
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
            "Apply within 8 working days of arrival in Italy.",
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
          paragraphs: ["Attend orientation session (if available)", "Settle basics:"],
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
            "Financial stability in Italy",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is education in Italy affordable for international students?",
      answer:
        "Yes, Italy offers high-quality education at relatively low tuition fees, especially in public universities. Tuition can range from €1,000 to €4,000 per year, and many scholarships are available.",
    },
    {
      question: "Are there English-taught programs in Italy?",
      answer:
        "Yes, many Italian universities offer programs taught entirely in English, especially at the master's and postgraduate levels.",
    },
    {
      question: "What are the eligibility requirements to study in Italy?",
      answer:
        "You need academic transcripts, proof of language proficiency (English or Italian), a passport, a motivation letter, and possibly letters of recommendation. Some programs may also require entrance exams.",
    },
    {
      question: "Do I need to know Italian to study in Italy?",
      answer:
        "Not necessarily. If you enroll in an English-taught program, Italian is not required. However, learning basic Italian is helpful for daily life and part-time jobs.",
    },
    {
      question: "Is IELTS or TOEFL required to study in Italy?",
      answer:
        "Yes, for English-taught programs, universities typically require proof of English proficiency through exams like IELTS or TOEFL.",
    },
    {
      question: "What are the living expenses for students in Italy?",
      answer:
        "Living costs vary by city. In cities like Milan or Rome, you may need €800–€1,200/month, while smaller cities may cost around €600–€900/month.",
    },
    {
      question: "Are scholarships available for international students in Italy?",
      answer:
        "Yes, Italian universities and the government offer scholarships like the DSU and MAECI scholarships, which can cover tuition, accommodation, and living expenses.",
    },
    {
      question: "Can international students work while studying in Italy?",
      answer:
        "Yes, international students can work part-time for up to 20 hours per week during the semester and full-time during holidays.",
    },
    {
      question: "Do I need a visa to study in Italy?",
      answer:
        "Yes, non-EU students require a long-stay student visa (type D). After arriving in Italy, you must also apply for a residence permit (Permesso di Soggiorno).",
    },
    {
      question: "Can I stay in Italy after graduation?",
      answer:
        "Yes, international students can apply for a temporary residence permit (Permesso per Attesa Occupazione) to stay for up to 12 months and search for work.",
    },
  ],
  listing: {
    title: "Italy",
    description:
      "World-class universities, 100% scholarship opportunities, Schengen travel access, and affordable living in the heart of Europe.",
    image: "/images/destinations/italy/listing/italy-listing.webp",
    imageAlt: "Study in Italy",
    flag: "/images/flags/italy.png",
    published: true,
  },
};
