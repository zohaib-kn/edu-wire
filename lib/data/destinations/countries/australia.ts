import { StudyDestination } from "../types";

export const australiaDestination: StudyDestination = {
  slug: "australia",
  countryName: "Australia",
  metadata: {
    title: "Study in Australia for Indian Students | Edu-Wire",
    description: "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in Australia with Edu-Wire.",
  },
  hero: {
    title: "Study in Australia with EduWire",
    description: "Discover top-ranked universities, world-class education, and a vibrant lifestyle in Australia. Let EduWire Overseas Education help you unlock global opportunities through an Australian degree.",
    image: "/images/destinations/australia/hero/Australia-hero-img.webp",
    imageAlt: "Study MBBS in Australia",
    primaryCTA: "Get Free Counselling"
  },
  about: {
    title: "About Austria",
    image: "/images/destinations/australia/about/Australia-Cities.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "Australia, officially the Commonwealth of Australia, is a vast island country and continent known for its diverse landscapes, unique wildlife, and high quality of life.",
      "Australia is recognized globally for its top-ranking education system, with leading universities offering a wide range of programs in fields such as science, technology, business, and the arts.",
      "Australian universities provide excellent facilities, globally respected qualifications, and various scholarships for international students to help offset tuition and living expenses.",
      "As a popular destination for international students, Australia offers a multicultural society, a safe environment, and work opportunities for students during and after their studies.",
      "Students in Australia benefit from a dynamic lifestyle, with vibrant cities like Sydney and Melbourne, stunning natural wonders such as the Great Barrier Reef, and numerous cultural and sporting events throughout the year."
    ]
  },
  benefits: [
    {
      title: "A World Leader in Education",
      description: "Australia is home to top-ranked universities known for innovation, research, and academic excellence. Degrees are globally recognized, opening doors to international career opportunities.",
      icon: "graduation-cap"
    },
    {
      title: "A Lifetime Experience: Study, Work & Grow",
      description: "Study and work part-time during semesters, and full-time during holidays. Gain practical skills, financial independence, and cultural exposure while pursuing your degree.",
      icon: "graduation-cap"
    },
    {
      title: "Post-Study Work & PR Pathway",
      description: "Graduates can apply for a Temporary Graduate Visa (Subclass 485) to stay and work for 2–4 years. Many transition to Permanent Residency and secure stable jobs in high-demand sectors.",
      icon: "id-card"
    },
    {
      title: "Thriving Career Opportunities",
      description: "Australia's strong economy and skilled workforce demand offer graduates high-paying jobs in fields like IT, healthcare, engineering, and business, ensuring long-term success.",
      icon: "briefcase"
    },
    {
      title: "Favorable Climate & Lifestyle",
      description: "Enjoy a perfect blend of quality education and lifestyle. From sunny beaches to national parks and vibrant cities, students thrive in a safe, scenic, and culturally rich environment.",
      icon: "passport"
    },
    {
      title: "Study, Work & Settle in Australia",
      description: "Australia offers international students a complete package: world-class education, part-time work rights, post-study visas, and a clear PR pathway for long-term settlement.",
      icon: "briefcase"
    }
  ],
  universities: [
    {
      name: "Australian National University (ANU)",
      image: "",
      imageAlt: "Australian National University (ANU)",
      ranking: "QS World University Rankings: 30",
      courses: [
        { name: "Engineering", duration: "6 Years", annualTuitionFee: "3500 AUD" },
        { name: "Data Science", duration: "5 Years", annualTuitionFee: "4000 AUD" },
        { name: "Business Analytics", duration: "5 Years", annualTuitionFee: "4000 AUD" }
      ],
      eligibility: [
        "Minimum 60% in relevant subjects",
        "English language proficiency",
        "Valid Passport"
      ],
      careers: ["Engineers", "Data Scientists", "Analysts"]
    },
    {
      name: "Monash University",
      image: "",
      imageAlt: "Monash University",
      ranking: "QS World University Rankings: 37",
      courses: [
        { name: "Mechanical Engineering", duration: "6 Years", annualTuitionFee: "3600 AUD" },
        { name: "Artificial Intelligence", duration: "5 Years", annualTuitionFee: "3800 AUD" },
        { name: "Robotics", duration: "5 Years", annualTuitionFee: "4000 AUD" }
      ],
      eligibility: [
        "Strong background in math and science",
        "Language proficiency",
        "Valid Passport"
      ],
      careers: ["Automotive Engineers", "Robotics Experts"]
    },
    {
      name: "The University of Adelaide",
      image: "",
      imageAlt: "The University of Adelaide",
      ranking: "QS World University Rankings: 82",
      courses: [
        { name: "Mechatronics", duration: "6 Years", annualTuitionFee: "3400 AUD" },
        { name: "Computer Science", duration: "5 Years", annualTuitionFee: "3700 AUD" },
        { name: "Civil Engineering", duration: "5 Years", annualTuitionFee: "3500 AUD" }
      ],
      eligibility: [
        "Relevant academic background",
        "Language certification",
        "Valid Passport"
      ],
      careers: ["System Engineers", "Software Developers"]
    },
    {
      name: "The University of Melbourne",
      image: "/images/destinations/australia/universities/university-of-melbourne.webp",
      imageAlt: "The University of Melbourne",
      ranking: "QS World University Rankings: 13",
      courses: [
        { name: "Life Sciences", duration: "6 Years", annualTuitionFee: "3900 AUD" },
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "5000 AUD" },
        { name: "Chemistry", duration: "5 Years", annualTuitionFee: "4100 AUD" }
      ],
      eligibility: [
        "Strong science background",
        "NEET qualification (for Medicine)",
        "Valid Passport"
      ],
      careers: ["Researchers", "Medical Professionals"]
    },
    {
      name: "The University of Queensland",
      image: "/images/destinations/australia/universities/university-of-queensland.webp",
      imageAlt: "The University of Queensland",
      ranking: "QS World University Rankings: 40",
      courses: [
        { name: "Social Sciences", duration: "4 Years", annualTuitionFee: "3200 AUD" },
        { name: "Economics", duration: "5 Years", annualTuitionFee: "3300 AUD" },
        { name: "Law", duration: "5 Years", annualTuitionFee: "4000 AUD" }
      ],
      eligibility: [
        "Minimum 60% in qualifying subjects",
        "Language proficiency",
        "Valid Passport"
      ],
      careers: ["Economists", "Policy Makers", "Lawyers"]
    },
    {
      name: "The University of Sydney",
      image: "/images/destinations/australia/universities/university-of-sydney.webp",
      imageAlt: "The University of Sydney",
      ranking: "QS World University Rankings: 18",
      courses: [
        { name: "Humanities", duration: "4 Years", annualTuitionFee: "3100 AUD" },
        { name: "Physics", duration: "5 Years", annualTuitionFee: "3900 AUD" },
        { name: "Neurosciences", duration: "5 Years", annualTuitionFee: "4200 AUD" }
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
    title: "Your Journey to Study in Australia",
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
            "Admission results are announced between March–June.",
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
            "This is a mandatory step for initiating the student visa process through the Italian Embassy or Consulate in your country.",
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
            "Invest Your Talent in Australia – For selected Master’s programs",
            "University-specific scholarships – Offered directly by universities"
          ]
        },
        {
          heading: "B. Documentation Preparation",
          items: [
            "For regional scholarships, students must follow a 3-step document preparation process:",
            "Legalize your family income and financial documents in English (as per Indian standards)",
            "Translate these legalized documents into Italian",
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
            "Example: For Master's students, authenticate Bachelor's degree + transcript.",
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
            "✔️ Accommodation confirmation in Australia",
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
            "Must haves:"
          ],
          items: [
            "Prescribed medicines + doctor's note",
            "Voltage adapters & seasonal clothing",
            "Kitchen basics, dry snacks, hygiene kits"
          ],
          paragraphs2: [
            "Keep printouts of:"
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
      title: "Upon Arrival in Australia: Post-Arrival Formalities & Enrollment",
      sections: [
        {
          heading: "A. Apply for Codice Fiscale (Tax Code)",
          paragraphs: [
            "Visit Agenzia delle Entrate to apply for your Codice Fiscale.",
            "Required For:"
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
            "Apply within 8 working days of arrival in Australia.",
            "Steps:"
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
            "Visit with:"
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
            "Settle basics:"
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
            "Important for:"
          ],
          items: [
            "Receiving scholarships",
            "Paying rent and expenses",
            "Financial stability in Australia"
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Why choose Australia for higher education?",
      answer: "Australia is home to top-ranked universities, offers globally recognized degrees, a multicultural environment, and excellent post-study work opportunities."
    },
    {
      question: "How can EduWire help me study in Australia?",
      answer: "EduWire provides end-to-end support — from university shortlisting and application preparation to visa assistance, accommodation guidance, and post-arrival support."
    },
    {
      question: "What are the basic eligibility requirements to study in Australia?",
      answer: "You’ll need academic transcripts, English proficiency test scores (IELTS/TOEFL/PTE), a valid passport, a statement of purpose, and financial documents. Some programs may require additional documents."
    },
    {
      question: "Is IELTS required for studying in Australia?",
      answer: "Yes, most Australian institutions require IELTS or equivalent proof of English proficiency. Minimum score requirements vary by course and university."
    },
    {
      question: "What are the tuition fees for international students in Australia?",
      answer: "Tuition fees range from AUD 20,000–45,000 per year, depending on the course and university. Vocational courses tend to be more affordable than postgraduate degrees."
    },
    {
      question: "What is the cost of living for students in Australia?",
      answer: "Living costs typically range from AUD 1,400 to 2,500 per month, depending on the city. This includes accommodation, food, transport, and personal expenses."
    },
    {
      question: "Are scholarships available for international students in Australia?",
      answer: "Yes, many universities offer merit-based and need-based scholarships. EduWire also guides you in applying for government-funded scholarships like Australia Awards."
    },
    {
      question: "Can I work while studying in Australia?",
      answer: "Yes, international students can work up to 48 hours per fortnight during the semester and full-time during breaks. EduWire can also guide you on part-time job options."
    },
    {
      question: "Do I need a visa to study in Australia?",
      answer: "Yes, you’ll need a Subclass 500 Student Visa. EduWire assists with the entire visa application process, including GTE (Genuine Temporary Entrant) documentation."
    },
    {
      question: "Can I stay in Australia after completing my studies?",
      answer: "Yes, eligible graduates can apply for a Temporary Graduate Visa (subclass 485), allowing them to stay and work in Australia for 2 to 4 years based on their qualification."
    }
  ]
};
