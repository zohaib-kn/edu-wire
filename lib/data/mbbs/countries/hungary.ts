import { MBBSCountry } from "../types";

export const hungaryData: MBBSCountry = {
  slug: "hungary",
  country: "Hungary",
  duration: "6 Years",
  feeRange: "€16,500 / Year",
  intake: "September",
  language: "English",
  description: "Study MBBS in Hungary, a central European hub of education. Hungarian medical universities are famous for rigorous training, excellent laboratories, and globally recognized certificates that allow graduates to apply directly for European licenses.",
  keyPoints: [
    "World-class teaching hospital facilities",
    "NMC, WHO, and EU recognized degree",
    "No IELTS required if English medium at school, but university entrance test is mandatory",
    "Stipendium Hungaricum scholarship available for select profiles",
  ],
  universities: [
    "University of Debrecen",
    "Semmelweis University (Budapest)",
    "University of Szeged",
    "University of Pecs",
  ],
  eligibility: [
    "Strong background in Chemistry and Biology",
    "NEET Qualified status",
    "Passing the written & oral entrance exam in Biology, Chemistry, and English",
  ],

  // ── Hero Section ──────────────────────────────────────────────────────────
  heroTitle: "Study MBBS in Hungary with EduWire",
  heroParagraph: "European-Standard Medical Education with Global Recognition! Hungary offers prestigious MBBS programs taught in English, modern facilities, and EU-recognized degrees, making it an excellent choice for international medical aspirants. Let EduWire Overseas Education guide you toward a rewarding career in medicine.",
  heroBgImage: "/images/universities/hungary-hero-image.webp",
  heroCutoutImage: "/images/female-doctor.png",
  flagIcon: "/images/flags/hungary.png",
  floatingBadges: [
    { label: "6 Years", sublabel: "Program", iconName: "Clock" },
    { label: "€16.5k", sublabel: "Fees/Year", iconName: "Wallet" },
    { label: "English", sublabel: "Medium", iconName: "Globe" },
  ],

  // ── About Hungary ──────────────────────────────────────────────────────────
  aboutTitle: "About Hungary",
  aboutImage: "/images/hungary.webp",
  aboutParagraphs: [
    "Hungary, officially the Republic of Hungary, is a landlocked country in Central Europe, bordered by Austria, Slovakia, Ukraine, Romania, Serbia, Croatia, and Slovenia. It is known for its rolling plains, the Danube River, and historic cities like Budapest.",
    "Hungary features a rich cultural heritage with influences from Roman, Ottoman, and Austro-Hungarian periods. Its vibrant traditions are reflected in its music, cuisine, thermal baths, and festivals, offering a unique blend of history and modern culture.",
    "Hungary is a safe and stable country with a high standard of living. Cities like Budapest and Szeged provide a welcoming atmosphere for students, with modern infrastructure, affordable living costs, and diverse social and academic opportunities.",
    "Hungary is a popular destination for MBBS studies, with internationally accredited universities offering affordable tuition fees and English-medium medical programs. The country’s medical education meets European standards, attracting students worldwide.",
    "Students in Hungary can enjoy a vibrant cultural and social life, with numerous cultural events, historic landmarks, and international festivals, allowing them to experience Hungarian traditions alongside their studies."
  ],
  aboutHighlights: [
    "Schengen Zone",
    "EU Standards",
    "Danube Beauty"
  ],

  // ── Why Choose MBBS in Hungary ─────────────────────────────────────────────
  whyChooseTitle: "Why Choose MBBS in Hungary?",
  whyChooseSubtitle: "Hungary offers top-tier medical education, English-taught programs, and European career opportunities.",
  whyChoose: [
    {
      title: "Government Scholarships",
      description: "Public universities in Hungary offer 100% tuition fee waivers and scholarships with monthly stipends, making education affordable for international students.",
      iconName: "GraduationCap"
    },
    {
      title: "Low or No Tuition Fees",
      description: "Many Italian medical universities offer MBBS programs with very low or zero tuition fees for eligible international students, reducing the financial burden.",
      iconName: "Wallet"
    },
    {
      title: "English Medium Instruction",
      description: "Several top universities offer the MBBS (MD) program entirely in English, making it ideal for international students who don’t speak Italian.",
      iconName: "Languages"
    },
    {
      title: "Globally Recognized Degrees",
      description: "Degrees from Italian medical universities are recognized by WHO, NMC (MCI), ECFMG, WFME, and other global bodies, enabling graduates to practice medicine worldwide.",
      iconName: "Globe"
    },
    {
      title: "Cultural & Academic Exposure",
      description: "Studying in Hungary means living in a culturally rich environment with modern infrastructure, historical cities, and access to leading hospitals for clinical exposure.",
      iconName: "Building"
    }
  ],

  // ── Top Universities ───────────────────────────────────────────────────────
  universitiesDetailed: [
    {
      name: "The University of Pécs",
      description: [
        "The University of Pécs (PTE) is one of the largest higher education institutions in Hungary, with roots dating back to 1367, making it the first university in Hungary and the fourth in Central Europe.It has ten faculties and operates an independent faculty in Szekszárd, with training programs in several towns across Hungary.",
        "The university is known for its strong presence in research and education, particularly in the fields of medicine, health sciences, engineering, informatics, natural and social sciences, arts, and sports sciences"
      ],
      image: "https://imgs.search.brave.com/1TCy5UQ_XWHATIARIQXR6ze_JYdAymnfnzyKSNj51x0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0h1bmdhcnlf/UGVjc18yMDA1X0p1/bmVfMDc2VW5pdmVy/c2l0eS5qcGc",
      badges: ["Public University", "Founded 1367", "Pécs, Hungary"],
      fees: [
        { year: "1st Year", tuitionFee: "--", administrativeFee: "--", applicationFee: "--", total: "€ 16500" },
        { year: "2nd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "3rd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "4th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "5th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "6th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" }
      ]
    },
    {
      name: "Debrecen University",
      description: [
        "The University of Debrecen is a prestigious higher education institution located in Debrecen, Hungary. It was established in 1538 and is the oldest continuously operating institute of higher learning in Hungary.",
        "The University of Debrecen offers a wide range of English-taught degree programs, including both undergraduate and graduate studies, attracting a large number of international students. It comprises fourteen faculties and is known for its research in molecular science, physical, computational, and material science, medical, health, environmental, and agricultural science, as well as linguistics, culture, and bioethics."
      ],
      image: "https://imgs.search.brave.com/5nNLGeVXC0tpdXKO7aqPV-9chNJLUIjiJ1FE_1vPBQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdWx4am94/VkdjeWo0Ri1zNWc0/MFhRR1ItbXpjTDI5/SUdhRU83RE5NdmZu/NC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/YUhWdC9Zbk11WkhK/bFlXMXpkR2x0L1pT/NWpiMjB2WWk5MWJt/bDIvWlhKemFYUjVM/V1JsWW5KbC9ZMlZ1/TFdOcGRIa3RhSFZ1/L1oyRnllUzExYm1s/MlpYSnovYVhSNUxX/UmxZbkpsWTJWdS9M/V05wZEhrdGFIVnVa/MkZ5L2VTMTJMVEkx/T0RVek5qVTAvTkM1/cWNHYw",
      badges: ["Public University", "Oldest Institute", "Debrecen, Hungary"],
      fees: [
        { year: "1st Year", tuitionFee: "--", administrativeFee: "--", applicationFee: "--", total: "€ 16500" },
        { year: "2nd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "3rd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "4th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "5th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "6th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" }
      ]
    },
    {
      name: "",
      description: [
        "Semmelweis University, founded in 1769, is one of the oldest and most prestigious medical universities in Central Europe, located in Budapest, Hungary.",
        "The university specializes in medicine and health sciences, offering internationally accredited programs in general medicine, dentistry, pharmacy, health sciences, and public health."
      ],
      image: "https://imgs.search.brave.com/a33ibhHtBWzjt5SoM5R2tuty-A826K1Lh8M1x3Hjw64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZ1M3TEIx/Mm9ydlV2OUxNZGdZ/NWJ5Q3hzM3JHQ2gt/Z1d2cktFVjBWdmtV/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9iV1ZrYkds/dWEzTjBkV1JsL2Ju/UnpMbU52YlM5M2ND/MWovYjI1MFpXNTBM/M1Z3Ykc5aC9aSE12/TWpBeU1TOHdNaTlU/L1pXMXRaV3gzWlds/ekxWVnUvYVhabGNu/TnBkSGt0YjJZdC9U/V1ZrYVdOcGJtVXRR/MkZ0L2NIVnpMVU5w/ZEhrdFUydDUvTFZa/cFpYY3VhbkJu",
      badges: ["Founded 1769", "Specialized Medicine", "Budapest, Hungary"],
      fees: [
        { year: "1st Year", tuitionFee: "--", administrativeFee: "--", applicationFee: "--", total: "€ 16500" },
        { year: "2nd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "3rd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "4th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "5th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "6th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" }
      ]
    },
    {
      name: "The University of Szeged",
      description: [
        "The University of Szeged (SZTE) is one of Hungary's most prestigious and historically rich institutions, with roots dating back to 1581. Its modern foundation began in 1872 as the University of Kolozsvár, later relocating to Szeged in 1921.",
        "Over the decades, SZTE has evolved into a dynamic, research-driven university with a strong commitment to scientific innovation, academic freedom, and international collaboration."
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Szegedi_Tudom%C3%A1nyegyetem.jpg",
      badges: ["Public University", "Founded 1581", "Szeged, Hungary"],
      fees: [
        { year: "1st Year", tuitionFee: "--", administrativeFee: "--", applicationFee: "--", total: "€ 16500" },
        { year: "2nd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "3rd Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "4th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "5th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" },
        { year: "6th Year", tuitionFee: "--", administrativeFee: "-", applicationFee: "-", total: "--" }
      ]
    }
  ],

  // ── Eligibility ───────────────────────────────────────────────────────────
  eligibilityDetailed: {
    subtitle: "MBBS in Hungary 2025 – for Indian Students",
    criteria: [
      "Completed 10+2 with Physics, Chemistry, and Biology from a recognized board.",
      "Minimum 60% aggregate marks in PCB subjects.",
      "Applicant must be at least 17 years old by 31st December of the admission year."
    ],
    entranceTest: {
      title: "Entrance Test Requirement",
      description: "NEET qualification is mandatory for Indian students as per NMC guidelines. Some Hungarian universities may conduct entrance exams or interviews in Biology, Chemistry, and English. English language proficiency may be required (IELTS/TOEFL), depending on the university."
    },
    documents: [
      "10th and 12th mark sheets and certificates (original + copies)",
      "Valid Passport",
      "NEET Scorecard",
      "Passport-size photographs (as per university/visa specs)",
      "Birth Certificate (translated to English if required)",
      "Medical Fitness Certificate",
      "HIV and COVID-19 test reports",
      "Admission Letter from the Hungarian university",
      "Student Visa for Hungary",
      "Bank Statement/Proof of financial capability",
      "Police Clearance Certificate"
    ]
  },

  // ── Application Process / Study Journey ────────────────────────────────────
  applicationProcess: {
    timelineDisclaimer: "Timeline details can vary based on official MUR notices and specific university deadlines.",
    steps: [
      {
        title: "University Shortlisting & Application Process",
        shortDesc: "Shortlist universities, prepare your application files, and get your admission offer letter.",
        detailedContent: [
          {
            title: "A. Shortlisting Universities & Courses",
            items: [
              "Top universities: Semmelweis University (Budapest), University of Debrecen, University of Szeged.",
              "Check eligibility: Class 12 with PCB (60% min), NEET qualification (for Indian students).",
              "English proficiency (IELTS 6.5+/TOEFL 90+ or university exam)"
            ]
          },
          {
            title: "B. University Application",
            items: [
              "Apply directly via university portals or authorized representatives.",
              "Required documents:",
              "High school transcripts and diploma",
              "NEET scorecard (for Indians)",
              "Passport copy(valid 2+ years)",
              "Motivation letter",
              "Birth certificate",
              "Letters of recommendation (2–3)",
              "English proficiency certificate"
            ]
          },
          {
            title: "C. Entrance Exam / Interview",
            items: [
              "Exams may include:",
              "Mandatory entrance tests for most universities:",
              "Biology, Chemistry, Physics (written/oral)",
              "Some universities conduct online interviews",
              "Example: University of Debrecen's written entrance exam"
            ]
          },
          {
            title: "D. Admission Results",
            items: [
              "Offer letters issued within 4-8 weeks of application.",
              "Conditional offer letters issued first, followed by final admission"
            ]
          }
        ]
      },
      {
        title: "Pre-Enrolment & Enrollment Fee Payment",
        shortDesc: "Complete mandatory pre-enrolment and pay the initial academic/tuition fees.",
        detailedContent: [
          {
            title: "A. Pre-Enrolment on Universitaly",
            items: [
              "All non-EU students must pre-enroll through University.",
              "This is a mandatory step for initiating the student visa process through the Hungary Embassy or Consulate in your country.",
              "Ensure your personal and academic details match your official documents to avoid delays or rejections."
            ]
          },
          {
            title: "B. Fee Payment for Some Universities",
            items: [
              "Pay first year tuition fees (€12,000-€18,000)",
              "Payment confirms your seat",
              "Receive final admission letter (required for visa)."
            ]
          }
        ]
      },
      {
        title: "Scholarship & Documentation Process",
        shortDesc: "Prepare and legalize all required academic and visa documents.",
        detailedContent: [
          {
            title: "A. Documentation Preparation",
            items: [
              "Get academic documents apostilled (MEA India + state authentication).",
              "Some universities may require Hungarian translation"
            ]
          }
        ]
      },
      {
        title: "Visa Application & Documentation",
        shortDesc: "Book visa appointments, gather checklists, and submit your student visa files.",
        detailedContent: [
          {
            title: "Step 01: Track Visa Appointments Actively",
            items: [
              "⚠️ Student visa slots (at VFS Global) are extremely limited.",
              "Schedule at Hungarian Embassy/VFS Global.",
              "Limited slots available - book early"
            ]
          },
          {
            title: "Step 02: Prepare DOV/CIMEA Certification",
            items: [
              "Checklist",
              "Admission letter + fee payment receipt",
              "Apostilled academic documents",
              "Passport (valid for 3+ years)",
              "Health insurance (minimum €30,000 coverage)",
              "Proof of funds (€10,000/year in bank)",
              "Accommodation proof (university dorm/rental agreement)",
              "⏳ Processing Time: 4–8 weeks. Start early to avoid visa delays."
            ]
          },
          {
            title: "Step 03: Visa Documentation & Final Submission",
            items: [
              "Processing time: 30-45 days.",
              "D-type long-stay visa issued",
              "Once complete, submit your file at VFS Global and await visa approval."
            ]
          }
        ]
      },
      {
        title: "Pre-Departure Preparation",
        shortDesc: "Book flights, activate roaming, pack winter clothes and essential printouts.",
        detailedContent: [
          {
            title: "A. Flight Booking & Travel Readiness",
            items: [
              "Book flights after visa approval(to Budapest).",
              "Arrange dormitory/hostel via university (€300–€500/month)."
            ]
          },
          {
            title: "B. Activate International Roaming Pack (IMPORTANT)",
            items: [
              "Activate a 1-week international roaming pack before you fly",
              "Stay connected during travel & after arrival",
              "Useful if SIM info-card purchase is delayed",
              "Stay in touch with EDU-WIRE, family, and friends easily"
            ]
          },
          {
            title: "C. Luggage & Essentials Checklist",
            items: [
              "Carry original academic documents + 5 photocopies",
              "Must haves :",
              "Prescribed medicines + doctor’s note.",
              "€1000 cash + international debit card.",
              "Laptop with EU power adapter (Type F, 230V).",
              "Keep printouts of :",
              "Visa & travel insurance",
              "Accommodation confirmation",
              "Flight itinerary & offer letter"
            ]
          },
          {
            title: "D. Airport Pickup & Transit Planning",
            items: [
              "Pre-book pickup or use public transport (metro/bus).",
              "Budapest Airport (BUD) is main entry point",
              "Arrange university pickup or use public transport"
            ]
          }
        ]
      },
      {
        title: "Upon Arrival in Poland: Post-Arrival Formalities & Enrollment",
        shortDesc: "Complete post-arrival registrations, open bank accounts, buy SIM cards, and start orientation.",
        detailedContent: [
          {
            title: "A. Bank Account & SIM Card",
            items: [
              "Visit Agenzia delle Entrate to apply for your Codice Fiscale.",
              "Required For :",
              "Open account at OTP Bank , Erste Bank(need passport + residence proof).",
              "Buy local SIM (Vodafone,Telekom)."
            ]
          },
          {
            title: "B. Residence Permit",
            items: [
              "Apply at Immigration Office within 15 days",
              "Documents :",
              "Visa + passport",
              "University confirmation letter",
              "Health insurance",
              "Proof of address (rental contract/dorm letter)",
              "Biometric appointment required."
            ]
          },
          {
            title: "C. University Physical Enrollment (if required)",
            items: [
              "Complete within 7 working days:Submit original documents,Recieve student ID ."
            ]
          },
          {
            title: "D. Orientation & Daily Life Setup",
            items: [
              "Attend orientation session (if available)",
              "Settle basics: :",
              "Buy & activate Hungary SIM",
              "Apply for transport pass",
              "Explore your neighborhood",
              "Use student discounts, try mensa, join student groups"
            ]
          },
          {
            title: "E. Open an Hungary Bank Account",
            items: [
              "With Codice Fiscale & residence proof, visit a bank",
              "Important for :",
              "Receiving scholarships",
              "Paying rent and expenses",
              "Financial stability in Hungary",
              "Important tips :",
              "Learn basic Hungary phrases",
              "Register with local police if staying off-campus"
            ]
          }
        ]
      }
    ]
  },

  // ── Achievers ─────────────────────────────────────────────────────────────
  achievers: undefined,

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "Is MBBS in Hungary taught in English?",
      answer: "Yes, MBBS programs in Hungary are offered in English by top medical universities to cater to international students."
    },
    {
      question: "What is the duration of the MBBS program in Hungary?",
      answer: "The MBBS program in Hungary typically spans 6 years, which includes pre-clinical studies, clinical training, and internships."
    },
    {
      question: "Is NEET required to study MBBS in Hungary for Indian students?",
      answer: "Yes, NEET qualification is mandatory for Indian students to be eligible for MBBS admission in Hungary, as per NMC rules."
    },
    {
      question: "Are Hungarian medical degrees recognized internationally?",
      answer: "Yes, medical degrees from Hungary are recognized by WHO, ECFMG, FAIMER, and the National Medical Commission (NMC) of India."
    },
    {
      question: "What is the tuition fee for MBBS in Hungary?",
      answer: "The annual tuition fee for MBBS in Hungary ranges from €12,000 to €16,000, depending on the university."
    },
    {
      question: "What are the living expenses for students in Hungary?",
      answer: "Living expenses in Hungary are moderate, with students typically spending around €400 to €700 per month including accommodation and personal expenses."
    },
    {
      question: "Are scholarships available for MBBS in Hungary?",
      answer: "Yes, some universities and the Hungarian government offer scholarships or fee waivers based on academic merit and financial need."
    },
    {
      question: "What are the eligibility criteria for MBBS in Hungary?",
      answer: "Students must have completed 10+2 with Physics, Chemistry, and Biology, secured at least 60% in PCB, and qualified NEET (for Indian applicants). Some universities may also conduct entrance exams."
    },
    {
      question: "Is knowledge of Hungarian language necessary?",
      answer: "The MBBS program is taught in English, but learning basic Hungarian is recommended for interacting with local patients during clinical practice."
    },
    {
      question: "Can international students work part-time while studying in Hungary?",
      answer: "Yes, students are allowed to work part-time up to 24 hours per week during studies and full-time during vacations."
    }
  ]
};
