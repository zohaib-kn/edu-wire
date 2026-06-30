import { StudyDestination } from "../types";

export const canadaDestination: StudyDestination = {
  slug: "canada",
  countryName: "Canada",
  metadata: {
    title: "Edu Wire: Overseas Consultant Pvt Ltd | Study Abroad Consultancy",
    description: "Looking to study abroad? We offer expert study abroad consultancy services for students wanting to study in USA, UK, Canada, Australia, MBBS in Europe and more."
  },
  hero: {
    title: "Study in Canada with EduWire",
    description: "Explore world-class education opportunities in Canada, a country known for its quality education system and diverse culture. Let EduWire Overseas Education guide you to a successful academic future in Canada.",
    image: "/images/destinations/canada/hero/canada-hero-img.webp",
    imageAlt: "Study MBBS in Canada",
    primaryCTA: "Get Free Counselling"
  },
  about: {
    title: "About Canada",
    image: "/images/destinations/canada/about/about-canada.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "Canada is a vast country in North America known for its natural beauty, multicultural cities, and welcoming communities.",
      "It is home to some of the world’s top universities and colleges, offering diverse academic programs across many fields.",
      "Canada provides affordable education options and a high standard of living, along with strong healthcare and social support for students.",
      "International students in Canada benefit from a safe environment and opportunities for work during and after their studies, including pathways to permanent residency.",
      "Students enjoy vibrant cultural experiences, from festivals and arts to outdoor activities like hiking and skiing in stunning landscapes."
    ]
  },
  benefits: [
    {
      title: "Work While You Study",
      description: "Work up to 20 hours/week during classes and full-time during holidays. Earn while you learn, gain industry experience, and grow your professional network.",
      icon: "briefcase"
    },
    {
      title: "Best Post-Study Work Permit",
      description: "Apply for a Post-Graduation Work Permit (PGWP) and work in Canada for up to 3 years. Gain experience that boosts your chances for permanent residency and career growth.",
      icon: "id-card"
    },
    {
      title: "Fast & Easy PR Pathway",
      description: "Benefit from friendly immigration programs like Express Entry, PNPs, and Canadian Experience Class. A Canadian degree + work experience = strong PR advantage.",
      icon: "road"
    },
    {
      title: "Safe & Peaceful Atmosphere",
      description: "Ranked among the safest countries globally, Canada offers a high quality of life, top healthcare, and a multicultural environment that embraces diversity.",
      icon: "shield-alt"
    },
    {
      title: "World-Class Education",
      description: "Study at top-ranked institutions known for innovation and academic excellence. Choose from a wide range of programs and learn from expert faculty.",
      icon: "university"
    },
    {
      title: "Join a Global Community",
      description: "Be part of a vibrant international student network. Build lifelong global friendships, explore new cultures, and gain a global mindset valued by employers worldwide.",
      icon: "users"
    }
  ],
  universities: [
    {
      name: "Dalhousie University",
      image: "/images/destinations/canada/universities/dalhousie-university.png",
      imageAlt: "Dalhousie University",
      ranking: "QS World University Rankings: 275",
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
      careers: [
        "Engineers",
        "Data Scientists",
        "Analysts"
      ]
    },
    {
      name: "Cape Breton University",
      image: "/images/destinations/canada/universities/cape-breton-university.png",
      imageAlt: "Cape Breton University",
      ranking: "QS World University Rankings: --",
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
      careers: [
        "Automotive Engineers",
        "Robotics Experts"
      ]
    },
    {
      name: "Yorkville University",
      image: "/images/destinations/canada/universities/yorkville-university.png",
      imageAlt: "Yorkville University",
      ranking: "QS World University Rankings: --",
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
      careers: [
        "System Engineers",
        "Software Developers"
      ]
    },
    {
      name: "University of Alberta",
      image: "/images/destinations/canada/universities/university-of-alberta.png",
      imageAlt: "University of Alberta",
      ranking: "QS World University Rankings: 96",
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
      careers: [
        "Researchers",
        "Medical Professionals"
      ]
    },
    {
      name: "Lakehead University",
      image: "/images/destinations/canada/universities/lakehead-university.png",
      imageAlt: "Lakehead University",
      ranking: "QS World University Rankings: --",
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
      careers: [
        "Economists",
        "Policy Makers",
        "Lawyers"
      ]
    }
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in Canada",
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
            "Invest Your Talent in Canada – For selected Master’s programs",
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
            "To validate your academic qualifications, choose one of the two:"
          ],
          items: [
            "A. DOV (Declaration of Value): Issued by the Italian Embassy/Consulate after verifying your academic documents. Mandatory for certain universities.",
            "B. CIMEA Certification: A faster online alternative, widely accepted across Italian public universities."
          ],
          paragraphs2: [
            "📌 How to Prepare for DOV/CIMEA:",
            "First, authenticate your highest qualification from the HED (Higher Education Department).",
            "Example: For Master’s students, authenticate Bachelor’s degree + transcript.",
            "Then, Apostille the authenticated documents from MEA India. Submit the apostilled documents to Embassy (for DOV) or CIMEA portal.",
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
            "✔️ Accommodation confirmation in Canada",
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
            "Keep printouts of :",
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
      title: "Upon Arrival in Canada: Post-Arrival Formalities & Enrollment",
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
            "Apply within 8 working days of arrival in Canada.",
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
            "Financial stability in Canada"
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Is Canada a good destination for international students?",
      answer: "Yes, Canada is known for its high-quality education, multicultural environment, and strong post-study work opportunities, making it a top choice for international students."
    },
    {
      question: "What are the basic eligibility requirements to study in Canada?",
      answer: "Requirements include academic transcripts, English proficiency test scores (IELTS/TOEFL), a valid passport, a statement of purpose (SOP), and a letter of acceptance from a Designated Learning Institution (DLI)."
    },
    {
      question: "Is IELTS mandatory to study in Canada?",
      answer: "Yes, most Canadian institutions require IELTS or TOEFL scores as proof of English proficiency. A minimum IELTS band score of 6.0–6.5 is commonly accepted."
    },
    {
      question: "What are the tuition fees for studying in Canada?",
      answer: "Tuition fees vary by program and institution. On average, undergraduate programs cost CAD 15,000–CAD 25,000 per year, and postgraduate programs cost CAD 18,000–CAD 30,000 per year."
    },
    {
      question: "How much are living expenses for international students in Canada?",
      answer: "Living expenses typically range from CAD 10,000 to CAD 15,000 per year, depending on the city and lifestyle."
    },
    {
      question: "Are scholarships available for international students in Canada?",
      answer: "Yes, many Canadian universities offer merit-based scholarships, and there are also government-funded and private scholarships available for international students."
    },
    {
      question: "Can international students work while studying in Canada?",
      answer: "Yes, international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks without a separate work permit."
    },
    {
      question: "Do I need a study permit to study in Canada?",
      answer: "Yes, a study permit is required for programs longer than 6 months. You must have an acceptance letter from a DLI to apply for it."
    },
    {
      question: "Can I stay in Canada after graduation?",
      answer: "Yes, graduates from eligible programs can apply for a Post-Graduation Work Permit (PGWP), which allows them to work in Canada for up to 3 years."
    },
    {
      question: "Is it possible to get permanent residency in Canada after studying?",
      answer: "Yes, international graduates can apply for permanent residency through pathways like the Canadian Experience Class (CEC) under the Express Entry system."
    }
  ],
  listing: {
    title: "Canada",
    description: "Affordable tuition, co-op programs with paid internships, and a clear PGWP pathway to permanent residency. A top choice for global students.",
    image: "/images/destinations/[country]/listing/Canada img.jpg",
    imageAlt: "Study in Canada",
    flag: "/images/flags/canada.png",
    published: true,
  },
};
