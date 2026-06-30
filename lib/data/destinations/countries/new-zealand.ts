import { StudyDestination } from "../types";

export const newZealandDestination: StudyDestination = {
  slug: "new-zealand",
  countryName: "New Zealand",
  metadata: {
    title: "Study in New Zealand for Indian Students | Edu-Wire",
    description:
      "Explore universities, courses, eligibility, tuition fees, scholarships, visa guidance and study opportunities in New Zealand with Edu-Wire.",
  },
  hero: {
    title: "Study in New Zealand with EduWire",
    description:
      "Experience world-class education in New Zealand, known for its high-quality universities and welcoming, multicultural environment.\n\nLet **EduWire Overseas Education** help you take the first step toward a successful academic journey in New Zealand.",
    image: "/images/destinations/new-zealand/hero/newzealand-hero-image.webp",
    imageAlt: "Study MBBS in New Zealand",
    primaryCTA: "Get Free Counselling",
  },
  about: {
    title: "About New Zealand",
    image: "/images/destinations/new-zealand/about/wellington-cityscape.jpg",
    imageAlt: "About Edu-Wire",
    points: [
      "New Zealand, consisting of two main islands, is known for its stunning natural landscapes and progressive, inclusive society.",
      "It offers top-quality education with globally recognized universities and institutes in areas such as engineering, agriculture, health sciences, and business.",
      "Students enjoy a relaxed and safe environment, with a focus on innovation and research-based learning.",
      "New Zealand provides strong pathways to post-study work and permanent residency options for international graduates.",
      "Explore breathtaking destinations like Fiordland, Rotorua, and Queenstown, while experiencing rich Māori culture and welcoming communities.",
    ],
  },
  benefits: [
    {
      title: "Globally Recognized Qualifications",
      description:
        "New Zealand’s universities are ranked among the best globally and offer qualifications recognized worldwide. Programs are known for academic excellence, practical learning, and a student-centered approach.",
      icon: "graduation-cap",
    },
    {
      title: "Work While Studying",
      description:
        "International students can work up to 20 hours per week during term time and full-time during holidays. This helps you gain valuable work experience and manage your living expenses.",
      icon: "briefcase",
    },
    {
      title: "Post-Study Work Opportunities",
      description:
        "After graduation, students may be eligible for a post-study work visa valid for up to 3 years, depending on qualification and location. This opens pathways to employment and potential residency.",
      icon: "id-card",
    },
    {
      title: "Simple Visa Process",
      description:
        "New Zealand’s student visa process is straightforward with clear requirements and support. Visa processing times are typically efficient with a high acceptance rate for genuine students.",
      icon: "passport",
    },
    {
      title: "Innovative & Research-Driven Institutions",
      description:
        "Universities like the University of Auckland, University of Otago, and Victoria University of Wellington are known for cutting-edge research, strong academic programs, and modern facilities.",
      icon: "university",
    },
    {
      title: "Scholarships & Support",
      description:
        "New Zealand offers a range of scholarships for international students, including government-funded and university-specific awards. We guide you in finding and applying for the right funding options.",
      icon: "hand-holding-usd",
    },
  ],
  universities: [
    {
      name: "University of Auckland",
      image: "",
      imageAlt: "University of Auckland",
      ranking: "QS World University Rankings: 68",
      logo: "/images/destinations/new-zealand/universities/logos/university-of-auckland-logo.svg",
      logoAlt: "University of Auckland logo",
      courses: [
        {
          name: "Computer Science",
          duration: "3 Years",
          annualTuitionFee: "4500 NZD",
        },
        {
          name: "Business Administration",
          duration: "3 Years",
          annualTuitionFee: "4700 NZD",
        },
        {
          name: "Biomedical Science",
          duration: "3 Years",
          annualTuitionFee: "4900 NZD",
        },
      ],
      eligibility: [
        "Minimum 65% in relevant subjects",
        "IELTS 6.5 or equivalent English test",
        "Valid Passport",
      ],
      careers: ["IT Professionals", "Business Analysts", "Biotechnologists"],
    },
    {
      name: "University of Otago",
      image: "",
      imageAlt: "University of Otago",
      ranking: "QS World University Rankings: 206",
      logo: "/images/destinations/new-zealand/universities/logos/university-of-otago-logo.svg",
      logoAlt: "University of Otago logo",
      courses: [
        { name: "Medicine", duration: "6 Years", annualTuitionFee: "7000 NZD" },
        { name: "Law", duration: "4 Years", annualTuitionFee: "5500 NZD" },
        {
          name: "Psychology",
          duration: "3 Years",
          annualTuitionFee: "5200 NZD",
        },
      ],
      eligibility: [
        "Strong academic record",
        "English language proficiency",
        "Valid Passport",
      ],
      careers: ["Doctors", "Lawyers", "Clinical Psychologists"],
    },
    {
      name: "University of Canterbury",
      image: "",
      imageAlt: "University of Canterbury",
      ranking: "QS World University Rankings: 256",
      logo: "/images/destinations/new-zealand/universities/logos/university-of-canterbury-logo.svg",
      logoAlt: "University of Canterbury logo",
      courses: [
        {
          name: "Civil Engineering",
          duration: "4 Years",
          annualTuitionFee: "5600 NZD",
        },
        {
          name: "Environmental Science",
          duration: "3 Years",
          annualTuitionFee: "5000 NZD",
        },
        {
          name: "Data Science",
          duration: "3 Years",
          annualTuitionFee: "5300 NZD",
        },
      ],
      eligibility: [
        "Math and Science background",
        "English proficiency certificate",
        "Valid Passport",
      ],
      careers: [
        "Civil Engineers",
        "Data Scientists",
        "Environmental Consultants",
      ],
    },
    {
      name: "Victoria University of Wellington",
      image: "",
      imageAlt: "Victoria University of Wellington",
      ranking: "QS World University Rankings: 241",
      logo: "/images/destinations/new-zealand/universities/logos/victoria-university-of-wellington-logo.svg",
      logoAlt: "Victoria University of Wellington logo",
      courses: [
        {
          name: "Political Science",
          duration: "3 Years",
          annualTuitionFee: "4900 NZD",
        },
        { name: "Law", duration: "4 Years", annualTuitionFee: "5400 NZD" },
        {
          name: "International Relations",
          duration: "3 Years",
          annualTuitionFee: "5100 NZD",
        },
      ],
      eligibility: [
        "Academic merit",
        "IELTS/TOEFL score",
        "Valid Passport",
      ],
      careers: ["Policy Makers", "Law Professionals", "Diplomats"],
    },
    {
      name: "Massey University",
      image: "",
      imageAlt: "Massey University",
      ranking: "QS World University Rankings: 284",
      logo: "/images/destinations/new-zealand/universities/logos/massey-university-logo.svg",
      logoAlt: "Massey University logo",
      courses: [
        {
          name: "Agricultural Science",
          duration: "3 Years",
          annualTuitionFee: "4800 NZD",
        },
        {
          name: "Aviation Management",
          duration: "3 Years",
          annualTuitionFee: "6500 NZD",
        },
        { name: "Marketing", duration: "3 Years", annualTuitionFee: "4700 NZD" },
      ],
      eligibility: [
        "Relevant academic stream",
        "English test (IELTS 6.0+)",
        "Valid Passport",
      ],
      careers: [
        "Agricultural Experts",
        "Aviation Managers",
        "Marketing Consultants",
      ],
    },
  ],
  journey: {
    title: "Your Journey to Study in New Zealand",
    disclaimer:
      "Timeline details can vary based on Immigration New Zealand policies and university-specific deadlines.",
    steps: [
      { label: "Apply" },
      { label: "Offer" },
      { label: "Tuition & Docs" },
      { label: "Visa" },
      { label: "Travel" },
      { label: "Arrive" },
    ],
  },
  applicationProcess: [
    {
      number: 1,
      title: "August – December: Course Selection & Application",
      sections: [
        {
          heading: "A. Research & Shortlisting",
          items: [
            "Explore universities in New Zealand (e.g. University of Auckland, Otago, Canterbury).",
            "Check eligibility criteria, course modules, fees, and scholarships.",
            "Ensure English proficiency with IELTS/TOEFL/PTE scores.",
          ],
        },
        {
          heading: "B. Submit Applications",
          items: [
            "Apply via university portals or through education consultants.",
            "Submit transcripts, passport, SOP, CV, recommendation letters, and English test scores.",
          ],
        },
        {
          heading: "C. Attend Interviews (if applicable)",
          items: [
            "Some courses (especially healthcare or PG programs) may require interviews or entrance tests.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "October – January: Conditional/Unconditional Offer Letters",
      sections: [
        {
          heading: "A. Receive Offer Letter",
          items: [
            "Universities issue a Conditional or Unconditional Offer based on your application.",
            "Unconditional offers are needed for visa applications.",
          ],
        },
        {
          heading: "B. Accept Offer",
          items: [
            "Accept the offer by confirming via email and paying any initial fees if required.",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "November – February: Tuition Payment & Visa Documentation",
      sections: [
        {
          heading: "A. Pay Tuition Fees",
          items: [
            "Pay the first year’s tuition to receive the Fee Receipt – a mandatory document for visa filing.",
          ],
        },
        {
          heading: "B. Prepare Financial Documents",
          items: [
            "Show proof of funds for at least 1 year (tuition + living costs ≈ NZD 20,000).",
            "Provide education loan documents, bank statements, ITRs, and sponsor affidavits if applicable.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "December – March: Student Visa Application",
      sections: [
        {
          heading: "A. Apply for Visa via Immigration NZ",
          items: [
            "Apply online at Immigration New Zealand (INZ) portal.",
            "Upload offer letter, fee receipt, financial docs, medical & police clearance, passport, etc.",
          ],
        },
        {
          heading: "B. Attend Biometrics & Health Check",
          items: [
            "Complete eMedical checkup from a panel physician.",
            "Submit biometrics at a VFS center if required.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "February – April: Pre-Departure Planning",
      sections: [
        {
          heading: "A. Flight Booking",
          items: [
            "Book flights only after visa approval.",
            "Arrive at least 1–2 weeks before course commencement.",
          ],
        },
        {
          heading: "B. Essentials Packing",
          items: [
            "Original documents + photocopies",
            "Medical prescriptions",
            "Voltage adapters, clothing, and toiletries",
          ],
        },
        {
          heading: "C. Accommodation Arrangement",
          items: [
            "Book university hostel or private rental before arrival.",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Upon Arrival in New Zealand",
      sections: [
        {
          heading: "A. IRD Number & Bank Account",
          items: [
            "Apply for an IRD (tax) number",
            "Open a bank account with passport and visa",
          ],
        },
        {
          heading: "B. SIM Card & Transport",
          items: [
            "Buy a local SIM (Spark, Vodafone NZ)",
            "Apply for public transport student concession cards",
          ],
        },
        {
          heading: "C. Orientation & Enrollment",
          items: [
            "Attend orientation sessions",
            "Complete university enrollment formalities",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why choose New Zealand for higher education?",
      answer:
        "New Zealand offers a world-class education system, affordable tuition fees, and a safe, welcoming environment. Its universities are globally ranked and emphasize research and practical learning.",
    },
    {
      question: "What are the basic eligibility requirements to study in New Zealand?",
      answer:
        "You typically need academic transcripts, a valid passport, an English proficiency score (IELTS/TOEFL), a statement of purpose (SOP), and proof of funds. Some programs may require interviews or entrance tests.",
    },
    {
      question: "Is IELTS mandatory to study in New Zealand?",
      answer:
        "Yes, most institutions require IELTS or equivalent tests (TOEFL, PTE) to prove English language proficiency.",
    },
    {
      question: "What are the tuition fees for international students in New Zealand?",
      answer:
        "Tuition fees vary by course and institution. On average, undergraduate programs cost between NZD 22,000–32,000 per year, and postgraduate programs range from NZD 26,000–37,000 per year.",
    },
    {
      question: "What are the living expenses for students in New Zealand?",
      answer:
        "Living expenses generally range between NZD 15,000–20,000 per year, depending on location and lifestyle. Auckland and Wellington tend to be more expensive.",
    },
    {
      question: "Are scholarships available for international students in New Zealand?",
      answer:
        "Yes, New Zealand offers various scholarships including New Zealand Excellence Awards, university-specific scholarships, and government-funded programs.",
    },
    {
      question: "Can international students work while studying in New Zealand?",
      answer:
        "Yes, international students can work up to 20 hours per week during term time and full-time during scheduled breaks.",
    },
    {
      question: "Do I need a visa to study in New Zealand?",
      answer:
        "Yes, international students need a Student Visa. You must have an offer of place from an approved institution and meet health, character, and financial requirements.",
    },
    {
      question: "Can I stay in New Zealand after graduation?",
      answer:
        "Yes, graduates can apply for a Post-Study Work Visa, allowing them to work in New Zealand for up to 3 years, depending on the qualification and location of study.",
    },
    {
      question: "Is there an age limit to study in New Zealand?",
      answer:
        "There is no upper age limit. As long as you meet the academic and visa criteria, you can apply to study in New Zealand at any age.",
    },
  ],
  listing: {
    title: "New Zealand",
    description:
      "Experience high-quality education, beautiful natural landscapes, excellent post-study work rights, and welcoming, safe environment.",
    image: "/images/destinations/new-zealand/listing/new-zealand-listing.webp",
    imageAlt: "Study in New Zealand",
    flag: "/images/flags/New-Zealand.png",
    published: true,
  },
};
