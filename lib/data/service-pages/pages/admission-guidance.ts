import { ServicePage } from "../types";

export const admissionGuidanceService: ServicePage = {
  slug: "admission-guidance",
  title: "Admission Guidance",
  metaTitle: "Admission Guidance for Top Universities | Edu-Wire",
  metaDescription: "Get expert admission guidance for top universities from Edu-Wire. Navigate your study abroad journey with course selection, university shortlisting, application support, visa guidance, and pre/post-departure assistance.",
  hero: {
    heading: "Get Expert Admission Guidance for Top Universities",
    description: "Navigate your study abroad journey with confidence. From selecting the right course and university to preparing application documents and securing your admission — we provide complete, personalized guidance every step of the way.",
    ctaText: "Start Your Application",
    imagePath: "/images/services/admission-guidance/hero/admission-guidance.png",
    floatingCards: [
      { label: "University Selection", iconName: "School", position: "top-right" },
      { label: "Document Review", iconName: "FileText", position: "middle-left" },
      { label: "Application Support", iconName: "Award", position: "bottom-left" },
      { label: "Offer Letter Guidance", iconName: "FileText", position: "bottom-right" },
    ],
  },
  about: {
    heading: "",
    paragraphs: [],
    imagePath: "",
  },
  highlights: {
    heading: "",
    items: [],
  },
  benefits: {
    heading: "",
    items: [],
  },
  testDetails: {
    heading: "",
    types: {
      heading: "",
      description: "",
      table: { headers: [], rows: [] },
    },
    format: {
      heading: "",
      description: "",
      table: { headers: [], rows: [] },
      totalTime: "",
    },
    scoring: {
      heading: "",
      description: "",
      table: { headers: [], rows: [] },
      example: "",
    },
  },
  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What documents are required for university applications abroad?",
        answer: "Common documents include academic transcripts, passport, statement of purpose (SOP), letters of recommendation (LORs), English proficiency test scores (IELTS/TOEFL), and a resume or CV.",
      },
      {
        question: "When should I start the admission process?",
        answer: "Ideally, you should start 9–12 months before your intended intake to allow time for exams, applications, and visa processing.",
      },
      {
        question: "Can I apply to multiple universities in different countries at once?",
        answer: "Yes, you can apply to multiple universities across various countries, as long as you meet their individual eligibility and document requirements.",
      },
      {
        question: "How do I choose the right university and course?",
        answer: "Consider your academic interests, career goals, budget, location preferences, and university rankings. Our counsellors can help you shortlist the best options.",
      },
      {
        question: "Do I need to appear for entrance exams like GRE, GMAT, or SAT?",
        answer: "It depends on the course and country. Some programs require GRE/GMAT (for postgraduates) or SAT (for undergraduates), while others do not.",
      },
      {
        question: "What is a Statement of Purpose (SOP) and how important is it?",
        answer: "An SOP is a personal essay explaining your academic goals and reasons for choosing a course/university. It's a critical part of your application and should be compelling and original.",
      },
      {
        question: "How long does it take to get an admission offer?",
        answer: "Offer timelines vary, but most universities take 2 to 6 weeks after receiving a complete application.",
      },
      {
        question: "Can I apply if I have academic gaps or backlogs?",
        answer: "Yes, many universities consider applicants with gaps or backlogs if you provide a valid explanation and meet other criteria. We help position your profile effectively.",
      },
      {
        question: "Do you assist with the entire admission process?",
        answer: "Absolutely. We offer end-to-end guidance — from university shortlisting and application preparation to documentation and interview coaching.",
      },
      {
        question: "Will I get support with application fee waivers?",
        answer: "Yes, we have tie-ups with many universities and can guide you on where fee waivers are available or how to apply for them.",
      },
    ],
  },
  admissionSteps: [
    {
      step: "Step 1",
      title: "Personalized Counseling",
      description: "We begin by understanding your academic background, career goals, and preferences. EduWire experts help you choose the best-fit countries, courses, and universities based on your strengths and aspirations.",
      buttonText: "Book a Free Counseling",
      imagePath: "/images/services/admission-guidance/steps/step1.avif",
    },
    {
      step: "Step 2",
      title: "University & Course Selection",
      description: "We shortlist top-ranked universities and career-aligned courses that match your interests, budget, and academic profile.",
      buttonText: "Explore Universities",
      imagePath: "/images/services/admission-guidance/steps/step2.avif",
    },
    {
      step: "Step 3",
      title: "Test Preparation",
      description: "Join EduWire’s result-focused training for IELTS and other language tests to meet university requirements and visa eligibility.",
      buttonText: "Join IELTS Coaching",
      imagePath: "/images/services/admission-guidance/steps/step3.avif",
    },
    {
      step: "Step 4",
      title: "Application & Documentation",
      description: "We assist in crafting strong SOPs, LORs, resumes, and in accurately filling university applications to boost your chances of acceptance.",
      buttonText: "Start Application",
      imagePath: "/images/services/admission-guidance/steps/step4.webp",
    },
    {
      step: "Step 5",
      title: "Visa Guidance",
      description: "Get complete visa support — from documentation to interview preparation — with high success rates for major study destinations.",
      buttonText: "Apply for Visa",
      imagePath: "/images/services/admission-guidance/steps/step5.jpg",
    },
    {
      step: "Step 6",
      title: "Pre-Departure Assistance",
      description: "We prepare you for life abroad with sessions on travel, accommodation, safety, budgeting, and more to make your transition stress-free.",
      buttonText: "Get Travel Support",
      imagePath: "/images/services/admission-guidance/steps/step6.jpg",
    },
    {
      step: "Step 7",
      title: "Post-arrival Support",
      description: "EduWire helps you settle abroad with on-ground assistance like airport pickup, accommodation guidance, and continued student support.",
      buttonText: "Get Settled Abroad",
      imagePath: "/images/services/admission-guidance/steps/step7.jpg",
    },
  ],
};
