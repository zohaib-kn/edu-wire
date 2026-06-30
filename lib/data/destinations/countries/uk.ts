import { StudyDestination } from "../types";

export const ukDestination: StudyDestination = {
  slug: "uk",
  countryName: "UK",
  metadata: {
    title: "Study in the UK for Indian Students | Edu-Wire",
    description: "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in the UK with Edu-Wire.",
  },
  hero: {
    title: "Study in the UK with EduWire",
    description: "Experience world-renowned education in the UK, home to prestigious universities and diverse learning opportunities. Let EduWire Overseas Education help you take the first step toward a successful academic journey in the UK.",
    image: "/images/destinations/uk/hero/UK-hero-img.webp",
    imageAlt: "Study MBBS in UK",
    primaryCTA: "Get Free Counselling"
  },
  about: {
    title: "About the UK",
    image: "/images/destinations/uk/about/UK-Cities.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "The United Kingdom, comprising England, Scotland, Wales, and Northern Ireland, is renowned for its prestigious universities and rich cultural heritage.",
      "The UK offers world-class education with diverse programs in fields such as arts, sciences, business, and technology.",
      "It provides a vibrant student life with access to historic cities, cultural landmarks, and a multicultural environment.",
      "The UK has strong connections to industries, offering excellent internship and employment opportunities for students.",
      "Students enjoy iconic sites such as the Palace of Westminster, museums, theaters, and numerous festivals throughout the year."
    ]
  },
  benefits: [
    {
      title: "Flexible Study Options",
      description: "The UK offers a wide variety of programs across all fields—from Law, Medicine, and Engineering to AI, Data Science, and Creative Arts. Choose from 3-year bachelor’s degrees, 1-year master’s programs, or research-based PhDs tailored to your goals.",
      icon: "graduation-cap"
    },
    {
      title: "Work While Studying",
      description: "International students can work up to 20 hours per week during term and full-time on holidays. Gain hands-on experience, support your finances, and build a professional network in thriving UK cities like London, Manchester, and Edinburgh.",
      icon: "briefcase"
    },
    {
      title: "Post-Study Work Visa (PSW)",
      description: "The Graduate Route Visa allows you to stay in the UK for 2 years (3 years for PhDs) post-graduation. It's a great opportunity to work, gain global experience, and potentially transition to permanent residency via skilled visa pathways.",
      icon: "id-card"
    },
    {
      title: "Fast & Easy Visa Process",
      description: "The UK’s visa process is transparent and efficient. Most student visas are processed in 3–4 weeks, with priority services available. High approval rates and clear documentation make applying straightforward with the right guidance.",
      icon: "passport"
    },
    {
      title: "Top-Ranked Universities",
      description: "Study at globally renowned institutions like Imperial College London, UCL, and University of Edinburgh. These universities offer top-quality teaching, cutting-edge research, and strong ties with industry leaders across sectors.",
      icon: "university"
    },
    {
      title: "Scholarships & Financial Assistance",
      description: "Funding your UK education is easier with university scholarships, Chevening and Commonwealth programs, and external grants. We help you discover and apply for the best financial aid options tailored to your profile.",
      icon: "hand-holding-usd"
    }
  ],
  universities: [
    {
      name: "University of Bristol",
      image: "/images/destinations/uk/universities/university-of-bristol.webp",
      imageAlt: "University of Bristol",
      ranking: "QS World University Rankings: 54",
      logo: "/images/destinations/uk/universities/logos/university-of-bristol-logo.svg",
      logoAlt: "University of Bristol logo",
      courses: [
        { name: "Engineering", duration: "6 Years", annualTuitionFee: "3500 EUR" },
        { name: "Data Science", duration: "5 Years", annualTuitionFee: "4000 EUR" },
        { name: "Business Analytics", duration: "5 Years", annualTuitionFee: "4000 EUR" }
      ],
      eligibility: [
        "Minimum 60% in relevant subjects",
        "English/German language proficiency",
        "Valid Passport"
      ],
      careers: ["Engineers", "Data Scientists", "Analysts"]
    },
    {
      name: "University of Leeds",
      image: "/images/destinations/uk/universities/university-of-leeds.webp",
      imageAlt: "University of Leeds",
      ranking: "QS World University Rankings: 82",
      logo: "/images/destinations/uk/universities/logos/university-of-leeds-logo.svg",
      logoAlt: "University of Leeds logo",
      courses: [
        { name: "Mechanical Engineering", duration: "6 Years", annualTuitionFee: "3600 EUR" },
        { name: "Artificial Intelligence", duration: "5 Years", annualTuitionFee: "3800 EUR" },
        { name: "Robotics", duration: "5 Years", annualTuitionFee: "4000 EUR" }
      ],
      eligibility: [
        "Strong background in math and science",
        "Language proficiency",
        "Valid Passport"
      ],
      careers: ["Automotive Engineers", "Robotics Experts"]
    },
    {
      name: "Imperial College London",
      image: "",
      imageAlt: "Imperial College London",
      ranking: "QS World University Rankings: 2",
      logo: "/images/destinations/uk/universities/logos/imperial-college-london-logo.png",
      logoAlt: "Imperial College London logo",
      courses: [
        { name: "Mechatronics", duration: "6 Years", annualTuitionFee: "3400 EUR" },
        { name: "Computer Science", duration: "5 Years", annualTuitionFee: "3700 EUR" },
        { name: "Civil Engineering", duration: "5 Years", annualTuitionFee: "3500 EUR" }
      ],
      eligibility: [
        "Relevant academic background",
        "Language certification",
        "Valid Passport"
      ],
      careers: ["System Engineers", "Software Developers"]
    },
    {
      name: "University of Sheffield",
      image: "",
      imageAlt: "University of Sheffield",
      ranking: "QS World University Rankings: 105",
      logo: "/images/destinations/uk/universities/logos/university-of-sheffield-logo.svg",
      logoAlt: "University of Sheffield logo",
      courses: [
        { name: "Life Sciences", duration: "6 Years", annualTuitionFee: "3900 EUR" },
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "5000 EUR" },
        { name: "Chemistry", duration: "5 Years", annualTuitionFee: "4100 EUR" }
      ],
      eligibility: [
        "Strong science background",
        "NEET qualification (for Medicine)",
        "Valid Passport"
      ],
      careers: ["Researchers", "Medical Professionals"]
    },
    {
      name: "University of Birmingham",
      image: "",
      imageAlt: "University of Birmingham",
      ranking: "QS World University Rankings: 80",
      logo: "/images/destinations/uk/universities/logos/university-of-birmingham-logo.svg",
      logoAlt: "University of Birmingham logo",
      courses: [
        { name: "Social Sciences", duration: "4 Years", annualTuitionFee: "3200 EUR" },
        { name: "Economics", duration: "5 Years", annualTuitionFee: "3300 EUR" },
        { name: "Law", duration: "5 Years", annualTuitionFee: "4000 EUR" }
      ],
      eligibility: [
        "Minimum 60% in qualifying subjects",
        "Language proficiency",
        "Valid Passport"
      ],
      careers: ["Economists", "Policy Makers", "Lawyers"]
    },
    {
      name: "University of Exeter",
      image: "/images/destinations/uk/universities/university-of-exeter.webp",
      imageAlt: "University of Exeter",
      ranking: "QS World University Rankings: 169",
      logo: "/images/destinations/uk/universities/logos/university-of-exeter-logo.png",
      logoAlt: "University of Exeter logo",
      courses: [
        { name: "Humanities", duration: "4 Years", annualTuitionFee: "3100 EUR" },
        { name: "Physics", duration: "5 Years", annualTuitionFee: "3900 EUR" },
        { name: "Neurosciences", duration: "5 Years", annualTuitionFee: "4200 EUR" }
      ],
      eligibility: [
        "Academic excellence",
        "Subject relevance",
        "Valid Passport"
      ],
      careers: ["Researchers", "Professors", "Psychologists"]
    }
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in UK",
    disclaimer: "Timeline details can vary based on official MUR notices and specific university deadlines.",
    steps: [
      { label: "Apply" },
      { label: "Pre-Enrol" },
      { label: "Funding" },
      { label: "Visa" },
      { label: "Depart" },
      { label: "Arrive" }
    ]
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
            "Consider English/Italian language requirements."
          ]
        },
        {
          heading: "B. University Application",
          paragraphs: [
            "Apply through university websites or Universitaly platform.",
            "Required documents:"
          ],
          items: [
            "Transcripts",
            "Passport",
            "Motivation letter",
            "CV/Resume",
            "Recommendation letters",
            "Language certificate"
          ]
        },
        {
          heading: "C. Entrance Exam / Interview",
          paragraphs: [
            "Exams may include:"
          ],
          items: [
            "IMAT, TOLC-I, GRE/GMAT, Aptitude Tests"
          ],
          paragraphs2: [
            "Some programs require online interviews."
          ]
        },
        {
          heading: "D. Admission Results",
          paragraphs: [
            "Results between March–June.",
            "Admission letter required for visa application."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "April – October: Pre-Enrolment & Enrollment Fee Payment",
      sections: [
        {
          heading: "A. Pre-Enrolment on Universitaly",
          items: [
            "All non-EU students must pre-enroll through Universitaly.it.",
            "This is a mandatory step for initiating the student student visa process through the Italian Embassy or Consulate in your country.",
            "Ensure your personal and academic details match your official documents to avoid delays or rejections."
          ]
        },
        {
          heading: "B. Fee Payment for Some Universities",
          items: [
            "Some universities request students to pay the first installment of tuition fees during the enrollment phase.",
            "These payments confirm your intent to join and are often required to activate your admission. Payment receipts are essential for your visa application and university onboarding procedures."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "June – October: Scholarship & Documentation Process",
      sections: [
        {
          heading: "A. Scholarship Online Applications",
          paragraphs: [
            "Italian public universities offer multiple scholarship options based on merit and financial need. These include:"
          ],
          items: [
            "Regional Scholarships (e.g. LazioDisco, DSU, EDISU, ERGO, etc.) – Most popular among Indian students",
            "Invest Your Talent in UK – For selected Master’s programs",
            "University-specific scholarships – Offered directly by universities"
          ]
        },
        {
          heading: "B. Documentation Preparation",
          items: [
            "For regional scholarships, students must follow a 3-step document preparation process:",
            "Legalize your family income and financial documents in English (as per Indian standards) Translate these legalized documents into Italian",
            "Legalize the Italian-translated versions (if required by the scholarship authority)"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "May – October: Visa Application & Documentation",
      sections: [
        {
          heading: "Step 01: Track Visa Appointments Actively",
          paragraphs: [
            "⚠️ Student visa slots (at VFS Global) are extremely limited."
          ],
          items: [
            "Regularly check the VFS portal for appointment availability.",
            "Be flexible and ready to book as soon as slots open."
          ]
        },
        {
          heading: "Step 02: Prepare DOV/CIMEA Certification",
          paragraphs: [
            "To validate your academic qualifications, choose one of the two:",
            "A. DOV (Declaration of Value)",
            "Issued by the Italian Embassy/Consulate after verifying your academic documents. Mandatory for certain universities.",
            "B. CIMEA Certification",
            "A faster online alternative, widely accepted across Italian public universities.",
            "📌 How to Prepare for DOV/CIMEA:"
          ],
          items: [
            "First, authenticate your highest qualification from the HED (Higher Education Department).",
            "Example: For Master’s students, authenticate Bachelor’s degree + transcript.",
            "Then, Apostille the authenticated documents from MEA India. Submit the apostilled documents to Embassy (for DOV) or CIMEA portal."
          ],
          paragraphs2: [
            "⏳ Processing Time: 4–8 weeks. Start early to avoid visa delays."
          ]
        },
        {
          heading: "Step 03: Visa Documentation & Final Submission",
          paragraphs: [
            "Gather and submit the following to VFS:"
          ],
          items: [
            "✔️ Admission letter from Italian university",
            "✔️ Pre-enrollment summary (from Universitaly portal)",
            "✔️ Financial proof (bank balance, family sponsorship, ITR, etc.)",
            "✔️ Accommodation confirmation in UK",
            "✔️ Valid travel insurance",
            "✔️ DOV/CIMEA certification"
          ],
          paragraphs2: [
            "Once complete, submit your file at VFS Global and await visa approval."
          ]
        }
      ]
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
            "Choose a travel date that gives you time to settle before classes"
          ]
        },
        {
          heading: "B. Activate International Roaming Pack (IMPORTANT)",
          items: [
            "Activate a 1-week international roaming pack before you fly",
            "Stay connected during travel & after arrival",
            "Useful if SIM info-card purchase is delayed",
            "Stay in touch with EDU-WIRE, family, and friends easily"
          ]
        },
        {
          heading: "C. Luggage & Essentials Checklist",
          paragraphs: [
            "Carry original academic documents + photocopies",
            "Must haves :"
          ],
          items: [
            "Prescribed medicines + doctor’s note",
            "Voltage adapters & seasonal clothing",
            "Kitchen basics, dry snacks, hygiene kits"
          ],
          paragraphs2: [
            "Keep printouts of :"
          ],
          items2: [
            "Visa & travel insurance",
            "Accommodation confirmation",
            "Flight itinerary & offer letter"
          ]
        },
        {
          heading: "D. Airport Pickup & Transit Planning",
          items: [
            "Arrange pickup with family, friends, or KALINGAEURO",
            "Know your arrival address & transit options in advance"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Upon Arrival in UK: Post-Arrival Formalities & Enrollment",
      sections: [
        {
          heading: "A. Apply for Codice Fiscale (Tax Code)",
          paragraphs: [
            "Visit Agenzia delle Entrate to apply for your Codice Fiscale.",
            "Required For :"
          ],
          items: [
            "Opening a bank account",
            "Signing a rental contract",
            "Applying for a residence permit"
          ]
        },
        {
          heading: "B. Permesso di Soggiorno (Residence Permit)",
          paragraphs: [
            "Apply within 8 working days of arrival in UK.",
            "Steps :"
          ],
          items: [
            "Collect the kit from your local Post Office",
            "Fill and submit with documents + payment",
            "Attend biometric appointment at the Questura"
          ]
        },
        {
          heading: "C. University Physical Enrollment (if required)",
          paragraphs: [
            "Some universities require in-person verification",
            "Visit with :"
          ],
          items: [
            "Original academic documents",
            "Codice Fiscale",
            "Residence permit receipt"
          ],
          paragraphs2: [
            "Complete enrollment & activate student credentials"
          ]
        },
        {
          heading: "D. Orientation & Daily Life Setup",
          paragraphs: [
            "Attend orientation session (if available)",
            "Settle basics: :"
          ],
          items: [
            "Buy & activate Italian SIM",
            "Apply for transport pass",
            "Explore your neighborhood",
            "Use student discounts, try mensa, join student groups"
          ]
        },
        {
          heading: "E. Open an Italian Bank Account",
          paragraphs: [
            "With Codice Fiscale & residence proof, visit a bank",
            "Important for :"
          ],
          items: [
            "Receiving scholarships",
            "Paying rent and expenses",
            "Financial stability in UK"
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Why choose the UK for higher education?",
      answer: "The UK is home to some of the world’s top universities, offers globally recognized degrees, diverse culture, and a wide variety of courses with strong academic and research support."
    },
    {
      question: "What are the basic eligibility requirements to study in the UK?",
      answer: "You need academic transcripts, a valid passport, an English proficiency test score (IELTS/TOEFL), a statement of purpose (SOP), letters of recommendation, and in some cases, entrance exam scores or interviews."
    },
    {
      question: "Is IELTS mandatory to study in the UK?",
      answer: "Yes, most UK universities require proof of English proficiency, typically through IELTS or equivalent tests like TOEFL or PTE."
    },
    {
      question: "What are the tuition fees for international students in the UK?",
      answer: "Tuition fees vary depending on the program and university. Undergraduate programs typically cost between £10,000–£20,000 per year, while postgraduate programs range from £12,000–£25,000 or more."
    },
    {
      question: "What are the living expenses for students in the UK?",
      answer: "Living costs depend on the city. In London, students may need around £1,200/month, while in other cities it can range from £800–£1,000/month for accommodation, food, and other expenses."
    },
    {
      question: "Are scholarships available for international students in the UK?",
      answer: "Yes, scholarships are available from universities, the UK government (e.g., Chevening, Commonwealth), and private organizations based on academic merit and financial need."
    },
    {
      question: "Can international students work while studying in the UK?",
      answer: "Yes, international students on a student visa can work up to 20 hours per week during term time and full-time during holidays."
    },
    {
      question: "Do I need a visa to study in the UK?",
      answer: "Yes, international students need a Student visa (formerly Tier 4). You must have an unconditional offer from a UK university and meet financial and language requirements."
    },
    {
      question: "Can I stay in the UK after graduation?",
      answer: "Yes, under the Graduate Route, international students can stay and work in the UK for up to 2 years (3 years for PhD graduates) after completing their degree."
    },
    {
      question: "Is there an age limit to study in the UK?",
      answer: "There is no upper age limit to study in the UK. As long as you meet the academic and visa requirements, you can apply at any age."
    }
  ],
  listing: {
    title: "United Kingdom",
    description: "Home to Oxford, Cambridge, and world-leading research universities. Complete a Master's in just one year with a 2-year Graduate Route visa.",
    image: "/images/destinations/[country]/listing/UK img.jpg",
    imageAlt: "Study in the United Kingdom",
    flag: "/images/flags/uk.jpeg",
    published: true,
  },
};
