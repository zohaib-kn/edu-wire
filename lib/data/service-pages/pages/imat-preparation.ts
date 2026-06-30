import { ServicePage } from "../types";

export const imatPreparationService: ServicePage = {
  slug: "imat-preparation",
  title: "IMAT Preparation",
  metaTitle: "IMAT Preparation and Coaching | Edu-Wire",
  metaDescription: "Prepare for the IMAT with structured coaching, expert guidance and exam-focused support from Edu-Wire.",
  hero: {
    heading: "Crack IMAT 2026 & Study MBBS in Italy",
    description: "Expert-led, structured preparation for the International Medical Admissions Test — the single gateway to English-taught MBBS at Italy's top government universities. IMAT 2026 is on 17 September 2026.",
    ctaText: "Get Free Counselling",
    imagePath: "/images/services/imat-preparation/hero/hero.png",
    floatingCards: [
      { label: "IMAT Strategy", iconName: "Target", position: "top-right" },
      { label: "Mock Tests", iconName: "FileSpreadsheet", position: "middle-left" },
      { label: "Medicine Pathway", iconName: "Compass", position: "bottom-left" },
      { label: "Expert Mentors", iconName: "Users", position: "bottom-right" },
    ],
  },
  about: {
    heading: "What Is IMAT?",
    paragraphs: [
      "IMAT — the International Medical Admissions Test — is the official entrance exam for English-taught MBBS (Medicine & Surgery) programs at Italian government universities, administered by the Italian Ministry of University and Research (MUR)."
    ],
    imagePath: "/images/services/imat-preparation/about/about.png",
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
    heading: "Questions About IMAT & Italy MBBS",
    items: [
      {
        question: "Is NEET required to appear for IMAT?",
        answer: "Yes. Under current NMC regulations, Indian students must have a valid NEET qualifying scorecard to pursue MBBS abroad. However, your IMAT score — not your NEET rank — determines admission to Italian universities.",
      },
      {
        question: "Do I need 75% in PCM to apply?",
        answer: "No. The 75% aggregate criterion applies only to JEE/IIT eligibility in India. Italian universities through IMAT do not require 75% PCM — you only need to qualify IMAT based on merit in that exam.",
      },
      {
        question: "When does IMAT 2026 coaching start?",
        answer: "Batches are beginning now. With the IMAT exam on 17 September 2026, early enrolment gives you the maximum preparation time. Contact us today to join the current running batch.",
      },
      {
        question: "What is the DSU scholarship and am I eligible?",
        answer: "DSU (Diritto allo Studio Universitario) is a government scholarship up to €8,500/year including free accommodation and meals. It is income-based. Most Indian middle-class families qualify. We guide you through the full documentation process.",
      },
      {
        question: "How is IMAT different from NEET in difficulty?",
        answer: "IMAT and NEET are both competitive but structurally different. NEET has 200 questions in 200 minutes. IMAT has 60 questions in 100 minutes, with negative marking of −0.4. IMAT rewards strategic thinking and subject depth. With proper coaching, it is very manageable for PCB students.",
      },
      {
        question: "Can I practice medicine in India after MBBS from Italy?",
        answer: "Yes. Graduates from NMC-recognized Italian universities can appear for the NExT (National Exit Test) to practice in India. Italian medical degrees are also valid for USMLE (USA), PLAB (UK), and EU residency programs.",
      },
      {
        question: "Does Edu Wire help with more than just coaching?",
        answer: "Absolutely. We are an authorized admission partner for Italy MBBS. Our services cover IMAT coaching, IMAT registration support, university applications, DSU scholarship documentation, Italian student visa guidance, pre-departure orientation, and post-arrival support in Italy.",
      },
    ],
  },
  imatData: {
    heroBadge: "Edu Wire IMAT Coaching 2026",
    heroStats: [
      { num: "17 Sep", label: "IMAT 2026 Exam Date" },
      { num: "6+", label: "Top Italian Universities" },
      { num: "100%", label: "English Medium" },
      { num: "0₹", label: "Donation / Capitation" },
    ],
    keyDates: [
      { label: "Registration Opens", value: "July 2026", iconName: "Calendar" },
      { label: "IMAT Exam Date", value: "17 September 2026", iconName: "GraduationCap" },
      { label: "Results Declared", value: "October 2026 (Week 2–3)", iconName: "TrendingUp" },
      { label: "Duration", value: "100 Minutes · 60 MCQs", iconName: "Clock" },
      { label: "Marking Scheme", value: "+1.5 Correct · −0.4 Wrong", iconName: "Shield" },
    ],
    countdownTarget: "2026-09-17T09:00:00",
    whatIsImat: {
      eyebrow: "Exam Overview",
      heading: "What Is IMAT?",
      description: "IMAT — the International Medical Admissions Test — is the official entrance exam for English-taught MBBS (Medicine & Surgery) programs at Italian government universities, administered by the Italian Ministry of University and Research (MUR).",
      points: [
        "One exam — gateway to all Italian government medical universities",
        "Conducted globally including test centers in India",
        "Completely in English — no Italian required",
        "75% PCM criterion NOT required (unlike JEE/NEET for IIT)",
        "Rewards strategic thinking — not just rote learning",
        "Degree recognized by NMC India, WHO, ECFMG, USMLE",
      ],
      facts: [
        { value: "60", label: "Multiple Choice Questions" },
        { value: "100", label: "Minutes Duration" },
        { value: "+1.5", label: "Points per Correct Answer" },
        { value: "−0.4", label: "Penalty for Wrong Answer" },
        { value: "17 Sep 2026", label: "Exam Date — Do Not Miss" },
      ],
    },
    syllabus: {
      eyebrow: "IMAT Syllabus",
      heading: "What IMAT Tests — Section by Section",
      description: "IMAT has 5 sections. Each rewards depth of understanding and strategic answering.",
      subjects: [
        {
          name: "Logical Reasoning",
          topics: ["Critical thinking", "Problem solving", "Data analysis", "Pattern recognition"],
          questions: "🎯 10 Questions",
          color: "#f59e0b",
          bgColor: "rgba(245,158,11,.12)",
        },
        {
          name: "General Knowledge",
          topics: ["Science & humanities", "Historical & cultural facts", "Current issues", "Italian/EU context"],
          questions: "🎯 12 Questions",
          color: "#8b5cf6",
          bgColor: "rgba(139,92,246,.12)",
        },
        {
          name: "Biology",
          topics: ["Cell biology & genetics", "Human anatomy", "Physiology", "Ecology & evolution"],
          questions: "🎯 18 Questions",
          color: "#10b981",
          bgColor: "rgba(16,185,129,.12)",
        },
        {
          name: "Chemistry",
          topics: ["Organic chemistry", "Inorganic chemistry", "Chemical reactions", "Stoichiometry"],
          questions: "🎯 12 Questions",
          color: "#3b82f6",
          bgColor: "rgba(59,130,246,.12)",
        },
        {
          name: "Physics & Maths",
          topics: ["Mechanics & thermodynamics", "Waves & electromagnetism", "Algebra & functions", "Calculus basics"],
          questions: "🎯 8 Questions",
          color: "#ef4444",
          bgColor: "rgba(239,68,68,.12)",
        },
      ],
    },
    program: {
      eyebrow: "Our Program",
      heading: "IMAT Preparation Program 2026",
      description: "A structured two-phase approach designed around the 17 September 2026 exam date — covering every section with expert faculty, mock tests, and personal mentorship.",
      phases: [
        {
          num: "01",
          title: "Phase 1 — Foundation",
          points: [
            "Recorded lectures for all 5 IMAT sections",
            "Deep concept clarity in Biology, Chemistry & Physics",
            "Logical Reasoning frameworks & practice sets",
            "IMAT-specific vocabulary for General Knowledge",
            "Chapter-wise topic tests after every module",
          ],
          iconName: "BookOpen",
        },
        {
          num: "02",
          title: "Phase 2 — Advanced Training",
          points: [
            "Live interactive classes with expert faculty",
            "Full-length timed mock tests (exact IMAT format)",
            "Negative marking strategy & question-skip technique",
            "Real-time doubt solving sessions",
            "Individual performance tracking & feedback",
          ],
          iconName: "Sparkles",
        },
        {
          num: "03",
          title: "Mock Tests & Analysis",
          points: [
            "Multiple full-length IMAT mock exams",
            "Section-wise score analysis report",
            "Accuracy vs. speed optimization",
            "Previous years' IMAT paper discussions",
            "Exam-day simulation under real conditions",
          ],
          iconName: "FileText",
        },
        {
          num: "04",
          title: "Admission & Beyond",
          points: [
            "University shortlisting & application support",
            "DSU scholarship application guidance",
            "Italian student visa documentation",
            "Pre-departure orientation session",
            "Post-arrival support network in Italy",
          ],
          iconName: "PhoneCall",
        },
      ],
    },
    whyChoose: {
      eyebrow: "Why Edu Wire",
      heading: "What Makes Our IMAT Coaching Different",
      description: "We don't just teach IMAT content — we train students to think like IMAT toppers.",
      features: [
        {
          title: "Subject-wise Expert Faculty",
          description: "Separate specialists for Biology, Chemistry, Physics, Mathematics, and Logical Reasoning — each trained specifically for IMAT format and depth.",
          iconName: "Users",
        },
        {
          title: "Week-by-Week Study Plan",
          description: "Every week mapped to the 17 September 2026 exam date. No guesswork — just a clear roadmap from enrolment to exam day.",
          iconName: "Calendar",
        },
        {
          title: "Negative Marking Strategy",
          description: "IMAT's −0.4 penalty makes strategy as important as knowledge. We train students specifically on when to answer, skip, or guess intelligently.",
          iconName: "TrendingUp",
        },
        {
          title: "End-to-End Italy MBBS Support",
          description: "Beyond coaching — we handle IMAT registration, university applications, DSU scholarship, visa, and accommodation. One team, complete support.",
          iconName: "Shield",
        },
      ],
      comparison: {
        eyebrow: "IMAT vs NEET",
        heading: "Why IMAT is a Smarter Path",
        table: {
          headers: ["Parameter", "IMAT (Italy)", "NEET (India)"],
          rows: [
            ["Total Aspirants", "~15,000 global", "22+ lakh"],
            ["Seats Available", "~4,000 (Italy)", "~1,08,000 India"],
            ["75% PCM Required", "✓ Not required", "✗ Mandatory"],
            ["Scholarship", "✓ Up to €8,500/yr", "✗ None (pvt)"],
            ["Donation Fees", "✓ Zero", "✗ ₹80L–1.5Cr"],
            ["EU Degree", "✓ Yes", "✗ No"],
            ["Global Practice", "✓ USA, EU, UK, India", "India only"],
            ["NMC Recognition", "✓ Yes", "✓ Yes"],
          ],
        },
      },
    },
    batches: {
      eyebrow: "Enrol Now",
      heading: "Choose Your Batch",
      description: "Limited seats per batch to ensure personal attention. Enrol early — the IMAT exam is on 17 September 2026.",
      items: [
        {
          label: "Online",
          name: "Online Live Batch",
          badge: "Online",
          rows: [
            "Flexible timings — morning & evening slots",
            "Live interactive classes via Zoom/Meet",
            "Recorded sessions for revision",
            "Study material & mock tests included",
            "Open to students <strong>across India</strong>",
          ],
          ctaText: "Enrol in Online Batch",
        },
        {
          label: "Offline",
          name: "Offline Classroom Batch",
          badge: "⭐ Recommended",
          rows: [
            "Bhopal Centre — R-25, GTB Complex, New Market",
            "Daily classes — 5 days a week",
            "Small batch — personal faculty attention",
            "Walk-in counselling — no appointment needed",
            "Printed study material included",
          ],
          ctaText: "Enrol in Classroom Batch",
        },
        {
          label: "Hybrid",
          name: "Hybrid Batch",
          badge: "Hybrid",
          rows: [
            "Attend offline in Bhopal or online from anywhere",
            "All sessions recorded for hybrid access",
            "Best of both worlds — flexibility + interaction",
            "Ideal for working students or those outside Bhopal",
          ],
          ctaText: "Enrol in Hybrid Batch",
        },
      ],
    },
    finalCta: {
      heading: "IMAT 2026 is on 17 September. Don't Wait — Start Today.",
      description: "Every week of preparation matters. Join Edu Wire's IMAT coaching programme now and give yourself the maximum edge on exam day.",
      primaryCtaText: "Get Free Counselling",
      secondaryCtaText: "Call +91 9300812637",
      secondaryCtaHref: "tel:+919300812637",
      trustItems: [
        "Authorized Italy Admission Partner",
        "Trusted Since 2018",
        "Free Initial Consultation",
        "2000+ Visa Approvals",
      ],
    },
  },
};
