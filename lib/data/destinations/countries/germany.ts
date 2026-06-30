import { StudyDestination } from "../types";

export const germanyDestination: StudyDestination = {
  slug: "germany",
  countryName: "Germany",
  metadata: {
    title: "Edu Wire: Overseas Consultant Pvt Ltd | Study Abroad Consultancy",
    description: "Looking to study abroad? We offer expert study abroad consultancy services for students wanting to study in USA, UK, Canada, Australia, MBBS in Europe and more."
  },
  hero: {
    title: "Study in Germany with EduWire",
    description: "Discover top-tier education in one of the most innovative and student-friendly countries in the world. Germany offers tuition-free or low-cost programs at globally ranked universities, with options available in English and German. Benefit from cutting-edge research, a strong job market, and an enriching cultural experience. EduWire Overseas Education is here to support you every step of the way in building your academic future in Germany.",
    image: "/images/destinations/germany/hero/Germany.png",
    imageAlt: "Study MBBS in Germany",
    primaryCTA: "Get Free Counselling"
  },
  about: {
    title: "About Germany",
    image: "/images/destinations/germany/about/about-germany.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "Germany, located in Central Europe, is known for its rich history, engineering prowess, and vibrant cultural scene.",
      "It is home to some of the world’s leading universities and research institutions, offering excellent programs in engineering, sciences, business, and humanities.",
      "Germany provides affordable or no tuition fees at public universities, along with a high standard of living and strong social support systems.",
      "As a key member of the European Union and the Schengen Area, Germany allows students easy access to travel and work opportunities across Europe.",
      "Students enjoy a rich cultural life, from historic landmarks like the Brandenburg Gate to world-famous festivals such as Oktoberfest and a thriving arts scene."
    ]
  },
  benefits: [
    {
      title: "Affordable Education with No Tuition Fees",
      description: "Most public universities in Germany charge no tuition fees for international students (except for a nominal semester contribution). This makes studying in Germany highly cost-effective compared to other countries.",
      icon: "university",
      points: [
        "Save thousands of euros on tuition costs.",
        "Access top-quality education without financial burden.",
        "Ideal destination for academically bright students from all backgrounds."
      ]
    },
    {
      title: "Work While You Study",
      description: "Germany allows international students to work while pursuing their studies.",
      icon: "briefcase",
      points: [
        "120 full days or 240 half days per year (part-time jobs).",
        "Gain industry-relevant experience while managing your living expenses.",
        "Build a professional network in German and multinational companies."
      ]
    },
    {
      title: "Stay Back & Post-Study Work Opportunities",
      description: "Germany offers excellent post-study work opportunities.",
      icon: "clipboard-check",
      points: [
        "Apply for a Job-Seeker Visa valid for 18 months.",
        "Secure a job and apply for a Work Permit (Blue Card).",
        "Later transition to Permanent Residency (PR)."
      ]
    },
    {
      title: "Strong Pathway to Permanent Residency",
      description: "Germany offers a transparent and structured pathway to PR:",
      icon: "passport",
      points: [
        "Apply for PR after 2–3 years of working.",
        "Apply for citizenship after 6–8 years of stay.",
        "German education and experience simplify the process."
      ]
    },
    {
      title: "Safe, Secure & High-Quality Living",
      description: "Germany is one of the safest countries in Europe with excellent services.",
      icon: "shield-alt",
      points: [
        "Enjoy a clean, peaceful environment.",
        "Benefit from subsidized student housing and transport.",
        "Live in a multicultural society with global exposure."
      ]
    },
    {
      title: "World-Class Education & Global Recognition",
      description: "Germany is home to some of the world’s top-ranked universities known for research and innovation.",
      icon: "award",
      points: [
        "Degrees are internationally recognized and respected.",
        "Learn from academic leaders and industry professionals.",
        "Access well-equipped labs, libraries, and research centers."
      ]
    },
    {
      title: "Diverse Programs in English",
      description: "Many universities offer English-taught programs at both Bachelor's and Master's levels.",
      icon: "language",
      points: [
        "No need to learn German to begin studying.",
        "Opportunity to learn German for better job prospects."
      ]
    },
    {
      title: "Global Community & Cultural Exchange",
      description: "Germany welcomes students from all over the world.",
      icon: "users",
      points: [
        "Be part of a diverse and inclusive international student network.",
        "Experience German culture, food, festivals, and travel across Europe!"
      ]
    }
  ],
  universities: [
    {
      name: "Technical University of Munich (TUM)",
      image: "/images/destinations/germany/universities/tum-logo.png",
      imageAlt: "Technical University of Munich (TUM)",
      ranking: "QS World University Rankings: 56",
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
      name: "RWTH Aachen University",
      image: "/images/destinations/germany/universities/rwth-logo.png",
      imageAlt: "RWTH Aachen University",
      ranking: "QS World University Rankings: 56",
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
      name: "University of Stuttgart",
      image: "/images/destinations/germany/universities/stuttgart-logo.png",
      imageAlt: "University of Stuttgart",
      ranking: "QS World University Rankings: 56",
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
      name: "Heidelberg University",
      image: "/images/destinations/germany/universities/heidelberg-logo.png",
      imageAlt: "Heidelberg University",
      ranking: "QS World University Rankings: 56",
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
      name: "Humboldt University of Berlin",
      image: "/images/destinations/germany/universities/humboldt-logo.png",
      imageAlt: "Humboldt University of Berlin",
      ranking: "QS World University Rankings: 56",
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
    },
    {
      name: "LMU Munich (Ludwig Maximilian University)",
      image: "/images/destinations/germany/universities/lmu-logo.png",
      imageAlt: "LMU Munich (Ludwig Maximilian University)",
      ranking: "QS World University Rankings: 56",
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
      careers: [
        "Researchers",
        "Professors",
        "Psychologists"
      ]
    }
  ],
  universityNote: "Note: Public Universities generally have only a Winter intake.",
  journey: {
    title: "Your Journey to Study in Germany",
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
      title: "University Shortlisting & Application Process",
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
      title: "Pre-Enrolment & Enrollment Fee Payment",
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
      title: "Scholarship & Documentation Process",
      sections: [
        {
          heading: "A. Scholarship Online Applications",
          paragraphs: [
            "Italian public universities offer multiple scholarship options based on merit and financial need. These include:"
          ],
          items: [
            "Regional Scholarships (e.g. LazioDisco, DSU, EDISU, ERGO, etc.) – Most popular among Indian students",
            "Invest Your Talent in Germany – For selected Master’s programs",
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
      title: "Visa Application & Documentation",
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
            "✔️ Accommodation confirmation in Germany",
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
      title: "Pre-Departure Preparation",
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
      title: "Upon Arrival in Germany: Post-Arrival Formalities & Enrollment",
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
            "Apply within 8 working days of arrival in Germany.",
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
            "Financial stability in Germany"
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Is education in Germany free for international students?",
      answer: "Yes, public universities in Germany generally charge no tuition fees for undergraduate programs, even for international students. However, there is a small semester contribution of around €150–€350."
    },
    {
      question: "Are English-taught programs available in Germany?",
      answer: "Yes, many universities in Germany offer courses, especially at the master's level, that are entirely taught in English."
    },
    {
      question: "What are the basic eligibility criteria to study in Germany?",
      answer: "Eligibility varies by course and level, but generally includes academic transcripts, proof of English/German proficiency, a valid passport, and a motivation letter. Undergraduate applicants may need to attend a foundation course (Studienkolleg)."
    },
    {
      question: "Do I need to know German to study in Germany?",
      answer: "It depends on the program. For English-taught courses, German is not mandatory, but basic knowledge is recommended for daily life. For German-taught programs, proof of German proficiency (e.g., TestDaF, DSH) is required."
    },
    {
      question: "Is IELTS or TOEFL required to study in Germany?",
      answer: "Yes, for English-taught programs, IELTS (usually 6.0–6.5) or TOEFL scores are commonly required to demonstrate English proficiency."
    },
    {
      question: "How much are living expenses for students in Germany?",
      answer: "On average, international students need around €850 to €1,100 per month to cover living expenses including rent, food, transport, and insurance."
    },
    {
      question: "Are scholarships available to international students in Germany?",
      answer: "Yes, scholarships are offered by DAAD, foundations, universities, and other organizations to support international students based on merit or need."
    },
    {
      question: "Can international students work while studying in Germany?",
      answer: "Yes, international students can work up to 120 full days or 240 half days per year. Many students take part-time jobs or internships."
    },
    {
      question: "What is a blocked account and why is it needed?",
      answer: "A blocked account is a special bank account where students deposit proof of financial resources (around €11,208/year) to cover their stay. It is mandatory for visa approval."
    },
    {
      question: "Is it easy to stay in Germany after graduation?",
      answer: "Yes, graduates can apply for an 18-month post-study work visa to find a job. Once employed, they may be eligible for a work permit or EU Blue Card."
    }
  ],
  listing: {
    title: "Germany",
    description: "Free tuition at public universities, world-class engineering programs, and an 18-month job-seeker visa. Europe's top destination for tech and science.",
    image: "/images/destinations/[country]/listing/Germany img.jpg",
    imageAlt: "Study in Germany",
    flag: "/images/flags/germany.png",
    published: true,
  },
};
