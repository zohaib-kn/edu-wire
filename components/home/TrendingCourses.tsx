"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop, Brain, Lock, Terminal,
  Briefcase, CircleDollarSign, Globe, Megaphone,
  HeartPulse, Pill, UserCheck, Activity,
  Home, Scissors, Palette, Grid,
  Dna, Leaf, UtensilsCrossed, Atom,
  BookOpen, ArrowRight
} from "lucide-react";

interface Course {
  title: string;
  description: string;
  image: string;
  category: string;
  iconName: string;
}

const CATEGORIES = [
  { id: "tech", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "health", label: "Health" },
  { id: "design", label: "Design" },
  { id: "science", label: "Science" },
];

const COURSES: Course[] = [
  // Technology
  {
    title: "Computer Science & IT",
    description: "Study software design, systems, and global information technology.",
    image: "https://images.ctfassets.net/2htm8llflwdx/1LEJIT9KGRC4nwTJ5vuS6H/a912e31c468fd32986f2818816135cc4/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg",
    category: "tech",
    iconName: "Laptop",
  },
  {
    title: "Data Science & AI",
    description: "Master machine learning, statistics, and big data systems.",
    image: "https://cochincollege.edu.in/wp-content/uploads/2023/05/Data-science-AI-machine-learning.jpg",
    category: "tech",
    iconName: "Brain",
  },
  {
    title: "Cybersecurity",
    description: "Protect digital infrastructure, network channels, and data.",
    image: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg",
    category: "tech",
    iconName: "Lock",
  },
  {
    title: "Software Engineering",
    description: "Learn agile development, system architecture, and coding.",
    image: "https://skipsuniversity.edu.in/wp-content/uploads/2024/03/html-system-website-concept-1170x752.jpg",
    category: "tech",
    iconName: "Terminal",
  },
  // Business
  {
    title: "MBA & Executive Programs",
    description: "Accelerate your executive leadership and corporate strategy.",
    image: "https://emeritus.org/in/wp-content/uploads/sites/3/2022/04/March_Executive-MBA-from-IIM-1-1024x684.jpg.optimal.jpg",
    category: "business",
    iconName: "Briefcase",
  },
  {
    title: "Finance & Accounting",
    description: "Analyze business finance, audits, and investment metrics.",
    image: "https://media.istockphoto.com/id/1805460468/photo/group-of-confident-business-people-point-to-graphs-and-charts-to-analyze-market-data-balance.webp?b=1&s=612x612&w=0&k=20&c=CQUY5vy9h4NRkhSS_n2Br6TeywP5DHuKs_hpbbAljLo=",
    category: "business",
    iconName: "CircleDollarSign",
  },
  {
    title: "International Business",
    description: "Navigate cross-border trade, markets, and supply chains.",
    image: "https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060287.jpg?semt=ais_hybrid&w=740",
    category: "business",
    iconName: "Globe",
  },
  {
    title: "Marketing & HR",
    description: "Optimize organizational talent and digital brand systems.",
    image: "https://media.istockphoto.com/id/1460907602/photo/handshake-for-the-new-agreement.jpg?s=612x612&w=0&k=20&c=NygBa9i8h-kq4ththlqcMQEsRD2v2kLegFnH4PAQFuQ=",
    category: "business",
    iconName: "Megaphone",
  },
  // Health
  {
    title: "MBBS / MD",
    description: "Pursue clinical training and medical surgery degrees abroad.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "health",
    iconName: "HeartPulse",
  },
  {
    title: "Pharmacy",
    description: "Explore pharmacology, drug analysis, and clinical pharmacy.",
    image: "https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
    category: "health",
    iconName: "Pill",
  },
  {
    title: "Nursing",
    description: "Develop hands-on nursing, patient care, and healthcare systems.",
    image: "https://cdn.prod.website-files.com/5babc11099f97ea5dbcf24d5/653ad10165a9716ee31bd67d_64de3ec56db3d89c7d78cab0_med-surg-nurse.jpeg",
    category: "health",
    iconName: "UserCheck",
  },
  {
    title: "Public Health",
    description: "Address community health, health policy, and epidemiology.",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6qfKqQqkmcmvS5SCBT8cAP/9a20a8c1494196472321b7bac4157c1a/GettyImages-2094113542.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
    category: "health",
    iconName: "Activity",
  },
  // Design
  {
    title: "Architecture",
    description: "Design sustainable structural spaces and modern city layouts.",
    image: "https://media.istockphoto.com/id/120475399/photo/architectural-project.jpg?s=612x612&w=0&k=20&c=8IHir8gm1OjTUouT7nO6txObpLcWSdakWgPumwV_mq8=",
    category: "design",
    iconName: "Home",
  },
  {
    title: "Fashion Design",
    description: "Create clothing lines, fabric designs, and brand concepts.",
    image: "https://eduleem.com/wp-content/uploads/2024/10/fashion-design-6-months.jpeg", // Broken/blocked domain; will trigger fallback
    category: "design",
    iconName: "Scissors",
  },
  {
    title: "Graphic Design",
    description: "Master digital branding, layout design, and typography.",
    image: "https://images.shiksha.com/mediadata/images/articles/1708410614phpnjbsFG.jpeg",
    category: "design",
    iconName: "Palette",
  },
  {
    title: "Interior Design",
    description: "Plan aesthetic and functional indoor living spaces.",
    image: "https://jarednolan.wordpress.com/wp-content/uploads/2020/07/jarednolan-why-interior-desiging-is-a-profitable-career.jpg",
    category: "design",
    iconName: "Grid",
  },
  // Science
  {
    title: "Biotechnology",
    description: "Research gene editing, therapeutics, and laboratory science.",
    image: "https://www.swamivivekanandauniversity.ac.in/backend/resource/assets/images/blogs/bsc-biotechnology-colleges-near-me-08-04-2024.jpg",
    category: "science",
    iconName: "Dna",
  },
  {
    title: "Environmental Science",
    description: "Study conservation, ecology, and climate risk factors.",
    image: "https://www.owlguru.com/wp-content/uploads/wpallimport/files/environmental-scientists-and-specialists-including-health/__(1).jpg",
    category: "science",
    iconName: "Leaf",
  },
  {
    title: "Food Technology",
    description: "Optimize food manufacturing, safety, and bio-processing.",
    image: "https://img.freepik.com/free-photo/front-view-woman-researcher-analyzing-petri-dish-with-vegan-meat-typing-biological-expertise-computer_482257-2127.jpg?semt=ais_hybrid&w=740",
    category: "science",
    iconName: "UtensilsCrossed",
  },
  {
    title: "Physics & Chemistry",
    description: "Explore molecular structures, kinetic energy, and research.",
    image: "https://content.app-sources.com/s/83876451628773905/uploads/Management_Pictures/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview-8083971.jpg",
    category: "science",
    iconName: "Atom",
  },
];

export default function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("tech");

  const filteredCourses = COURSES.filter((c) => c.category === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#E1EDF8]/20 to-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 select-none">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Popular Study Paths
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Explore{" "}
            <span className="relative inline-block px-1">
              Trending Courses
              <svg className="absolute w-full h-2.5 -bottom-2 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            by Interest
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Browse high-demand programs across technology, business, healthcare, design, and science.
          </p>
        </div>

        {/* Scrollable Tabs */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 md:pb-0 scrollbar-none gap-2 md:gap-3 max-w-full select-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 relative ${
                activeTab === cat.id
                  ? "bg-[#0D6493] text-white shadow-md shadow-[#0D6493]/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Animated Course Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12"
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  const [imgError, setImgError] = useState(false);

  const getFallbackGradient = (category: string) => {
    switch (category) {
      case "tech": return "from-[#0D6493]/20 to-[#E1EDF8]";
      case "business": return "from-emerald-500/10 to-emerald-50";
      case "health": return "from-rose-500/10 to-rose-50";
      case "design": return "from-amber-500/10 to-amber-50";
      case "science": return "from-indigo-500/10 to-indigo-50";
      default: return "from-slate-100 to-slate-50";
    }
  };

  const getFallbackIcon = (iconName: string) => {
    const iconClass = "h-10 w-10 text-[#0D6493] opacity-80";
    switch (iconName) {
      case "Laptop": return <Laptop className={iconClass} />;
      case "Brain": return <Brain className={iconClass} />;
      case "Lock": return <Lock className={iconClass} />;
      case "Terminal": return <Terminal className={iconClass} />;
      case "Briefcase": return <Briefcase className={iconClass} />;
      case "CircleDollarSign": return <CircleDollarSign className={iconClass} />;
      case "Globe": return <Globe className={iconClass} />;
      case "Megaphone": return <Megaphone className={iconClass} />;
      case "HeartPulse": return <HeartPulse className={iconClass} />;
      case "Pill": return <Pill className={iconClass} />;
      case "UserCheck": return <UserCheck className={iconClass} />;
      case "Activity": return <Activity className={iconClass} />;
      case "Home": return <Home className={iconClass} />;
      case "Scissors": return <Scissors className={iconClass} />;
      case "Palette": return <Palette className={iconClass} />;
      case "Grid": return <Grid className={iconClass} />;
      case "Dna": return <Dna className={iconClass} />;
      case "Leaf": return <Leaf className={iconClass} />;
      case "UtensilsCrossed": return <UtensilsCrossed className={iconClass} />;
      case "Atom": return <Atom className={iconClass} />;
      default: return <BookOpen className={iconClass} />;
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden">
      {/* Image / Fallback block */}
      <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-50">
        {!imgError ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            unoptimized={true} // Safe bypass for external redirects/hotlinking optimizations
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getFallbackGradient(course.category)} flex flex-col items-center justify-center p-6 text-center select-none`}>
            {getFallbackIcon(course.iconName)}
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mt-2">
              Course Pathway
            </span>
          </div>
        )}
      </div>

      {/* Details body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#0D6493] transition-colors">
            {course.title}
          </h3>
          <p className="mt-2 text-slate-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[#0D6493] text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore options <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
