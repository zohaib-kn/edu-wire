import { ServicePage } from "../types";

export const ieltsService: ServicePage = {
  slug: "ielts",
  title: "IELTS Training",
  metaTitle: "IELTS Training and Preparation | Edu-Wire",
  metaDescription: "Prepare for IELTS with expert trainers, updated study material, mock tests, personalized feedback and flexible online and offline classes at Edu-Wire.",
  hero: {
    heading: "Prepare for IELTS, Study Abroad with Confidence",
    description: "Get expert IELTS coaching to improve your English skills and achieve the scores you need for universities abroad. Join our flexible, result-oriented preparation programs and take the first step toward your global education dream.",
    ctaText: "Get Started Today",
    imagePath: "/images/services/ielts/hero/ielts.png",
    floatingCards: [
      { label: "Expert Guidance", iconName: "Award", position: "top-right" },
      { label: "Practice Tests", iconName: "FileSpreadsheet", position: "middle-left" },
      { label: "Global Universities", iconName: "GraduationCap", position: "bottom-left" },
      { label: "Band Score Support", iconName: "Target", position: "bottom-right" },
    ],
  },
  about: {
    heading: "About Our IELTS Preparation",
    paragraphs: [
      "Our IELTS Preparation program is designed to help you achieve your desired band score with confidence. We offer comprehensive training covering all four modules of the IELTS exam: Listening, Reading, Writing, and Speaking.",
      "Our expert instructors use the latest study materials and proven teaching methods to guide you step-by-step through each section. You will benefit from personalized feedback, mock tests, and flexible learning options including both online and classroom sessions.",
      "Whether you are a beginner or looking to improve your score, our program is tailored to meet your individual needs, helping you build language skills, test strategies, and exam confidence."
    ],
    imagePath: "/images/services/ielts/about/shutterstock_2134867807-scaled-e1734605119775.jpg",
  },
  highlights: {
    heading: "Course Highlights",
    items: [
      {
        title: "Latest Study Material",
        description: "We provide updated study resources, practice papers, and official IELTS materials to keep you prepared with the latest test patterns and question types.",
      },
      {
        title: "Certified IELTS Trainers",
        description: "Learn from experienced, certified trainers who specialize in IELTS coaching and have a proven record of guiding students to high band scores.",
      },
      {
        title: "Mock Tests with Detailed Feedback",
        description: "Regular mock tests under real exam conditions, followed by one-on-one feedback sessions to track your progress and improvement areas.",
      },
      {
        title: "Flexible Online & Offline Classes",
        description: "Choose between classroom sessions at our center or convenient online classes from home, with morning, evening, and weekend batches available.",
      },
      {
        title: "Targeted Band Score Programs",
        description: "Customized preparation plans based on your desired band score, whether you're targeting a 6.5+ for study abroad or a 7.5+ for PR or migration.",
      },
      {
        title: "Personalized Speaking & Writing Practice",
        description: "Dedicated sessions for the Speaking and Writing modules, including daily speaking practice, mock interviews, and personalized writing corrections.",
      },
      {
        title: "IELTS Test Booking Assistance",
        description: "Guidance through the official IELTS test registration process and help selecting test dates and formats that fit your application deadlines.",
      },
    ],
  },
  benefits: {
    heading: "Why IELTS Matters for Your Future",
    items: [
      {
        title: "Trusted Worldwide",
        description: "IELTS is accepted by over 10,000 universities, employers, and governments worldwide as proof of your English proficiency.",
      },
      {
        title: "Academic Success",
        description: "Gain admission to top universities with an internationally recognized test score that validates your English skills.",
      },
      {
        title: "Career Growth",
        description: "Open doors to global job markets and improve your professional opportunities by demonstrating your English language ability.",
      },
      {
        title: "Visa & Immigration",
        description: "Meet language requirements easily for student, work, or immigration visas in English-speaking countries.",
      },
      {
        title: "Boost Your Confidence",
        description: "Prepare thoroughly and perform confidently in academic or professional settings abroad.",
      },
    ],
  },
  testDetails: {
    heading: "About IELTS Test",
    types: {
      heading: "Types of IELTS Tests",
      description: "There are two main versions:",
      table: {
        headers: ["Type", "Purpose"],
        rows: [
          ["IELTS Academic", "For higher education or professional registration in an English-speaking environment"],
          ["IELTS General Training", "For migration to countries like Australia, Canada, New Zealand, UK or for work experience and training programs"],
        ],
      },
    },
    format: {
      heading: "IELTS Test Format",
      description: "The test covers 4 skills:",
      table: {
        headers: ["Module", "Duration", "Details"],
        rows: [
          ["Listening", "30 minutes", "4 audio recordings, 40 questions"],
          ["Reading", "60 minutes", "3 sections, 40 questions (different for Academic & General)"],
          ["Writing", "60 minutes", "2 tasks"],
          ["Speaking", "11–14 minutes", "Face-to-face interview"],
        ],
      },
      totalTime: "Total Test Time: Around 2 hours 45 minutes",
    },
    scoring: {
      heading: "IELTS Scoring",
      description: "Each skill is scored on a Band Scale of 0 to 9. You get an individual band score for each skill and an overall band score (average of the four).",
      table: {
        headers: ["Band", "Skill Level"],
        rows: [
          ["9", "Expert"],
          ["8", "Very Good"],
          ["7", "Good"],
          ["6", "Competent"],
          ["5", "Modest"],
          ["4", "Limited"],
          ["3", "Extremely Limited"],
          ["2", "Intermittent"],
          ["1", "Non-user"],
          ["0", "Did not attempt the test"],
        ],
      },
      example: "Listening: 7.5, Reading: 7, Writing: 6.5, Speaking: 7\nOverall Band Score = (7.5 + 7 + 6.5 + 7) / 4 = 7",
    },
  },
  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is the IELTS test format?",
        answer: "The IELTS test covers four modules: Listening, Reading, Writing, and Speaking, with a total duration of around 2 hours and 45 minutes.",
      },
      {
        question: "What is the IELTS test format?",
        answer: "The IELTS test covers four modules: Listening, Reading, Writing, and Speaking, with a total duration of around 2 hours and 45 minutes.",
      },
      {
        question: "How long is the IELTS score valid?",
        answer: "IELTS scores are valid for 2 years from the date of your test result.",
      },
      {
        question: "Can I retake the IELTS test?",
        answer: "Yes! You can retake the IELTS test as many times as you like. No restrictions.",
      },
      {
        question: "Which countries accept IELTS scores?",
        answer: "IELTS scores are accepted by over 11,000 organizations in countries like the UK, Australia, Canada, New Zealand, USA, and many European and Asian countries.",
      },
      {
        question: "What is the difference between IELTS Academic and IELTS General Training?",
        answer: "IELTS Academic is for study abroad and professional registration, while IELTS General Training is for migration, work experience, and training programs.",
      },
      {
        question: "How is the IELTS Speaking test conducted?",
        answer: "The Speaking test is a face-to-face interview with a certified examiner, lasting 11–14 minutes, divided into three parts: introduction, individual speech, and discussion.",
      },
      {
        question: "How are IELTS scores calculated?",
        answer: "Each section is scored on a Band Scale of 0 to 9. The overall score is the average of the four module scores, rounded to the nearest half or whole band.",
      },
      {
        question: "How can I register for the IELTS test?",
        answer: "You can register online through the official IELTS website or authorized test centers in your city. Choose your date, location, and module type.",
      },
      {
        question: "Is there a minimum score required for visa applications?",
        answer: "Yes — each country and visa type has different minimum IELTS score requirements. Check the official immigration website of the country you're applying to.",
      },
    ],
  },
};
