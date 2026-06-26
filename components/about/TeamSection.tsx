"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Athar Khan",
    role: "Founder and Director",
    image: "/images/Athar-khan.jpeg",
    bio: "Athar Khan, our director and founder, is a senior professional with over twelve years of experience and a proven track record in the education field. Many students have successfully settled in the UK, USA, Canada, Germany, Italy, New Zealand, and Australia thanks to his experience and research-based knowledge. His reputation in the market stems from his ability to provide students with need-based international education. He walks students through the process of selecting the correct university, managing their applications, assists them in procuring loans, securing visas and finally achieving admission to their preferred university."
  },
  {
    name: "Rubina Khan",
    role: "Managing Director – Dubai",
    image: "/images/Rubina-Khan-counsellor.jpeg",
    bio: "Rubina Khan, Managing Director – Dubai branch at Edu-Wire, is a seasoned Canadian educationist with over twenty-five years of teaching, counseling, and administrative experience across Canada and the UAE. With a Master's degree in English Literature and a Diploma in TESOL from the Canadian College of Educators, she brings exceptional academic expertise and global educational insight to the organization. As the head of the Dubai branch, she efficiently manages operations oversight, team supervision, student counseling, and workflow management, ensuring the highest quality of service delivery. Her specialization in guiding students aspiring to pursue higher education in Canada, the US, the UK, Italy, Australia, Germany, and New Zealand has empowered countless learners to build successful international careers."
  },
  {
    name: "Tabinda Khan",
    role: "Director of Operations",
    image: "/images/team3.jpg",
    bio: "Tabinda Khan, Director of Operations at Edu-Wire, is a CELTA-certified (Cambridge) international education expert who drives strategic and operational management across the Bhopal, Indore, and Dubai branches. She oversees every facet of the organization — from team leadership, performance supervision, and process efficiency to departmental coordination. Tabinda manages the student lifecycle with precision, including profile assessment, course and university mapping, documentation accuracy, financial planning, scholarship guidance, visa processing, and delivering high-impact IELTS training that consistently produces top band scores."
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-slate-50/50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Meet Our <span className="relative inline-block px-1">
              Leadership Team
              <svg className="absolute w-full h-2.5 -bottom-2 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Backed by decades of collective education and counseling expertise, our leadership guides your study abroad journey.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Photo Frame */}
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          unoptimized={true}
        />
      </div>

      {/* Details Container */}
      <div className="flex-grow flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-3 py-1 rounded-full">
            {member.role}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-3">{member.name}</h3>
          
          <p className="mt-3 text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            {isExpanded ? member.bio : `${member.bio.substring(0, 160)}...`}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-[#0D6493] text-xs font-bold hover:text-[#0c5982] transition-colors self-start select-none"
        >
          <span>{isExpanded ? "Show Less" : "Read Biography"}</span>
          {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

    </div>
  );
}
