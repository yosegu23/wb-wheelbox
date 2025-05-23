"use client";

import React from "react";
import { TeamWb } from "../components/team-wb";
import yopi from "@/public/Team/1.png";
import bima from "@/public/Team/2.png";
import yayat from "@/public/Team/3.png";
import audi from "@/public/Team/4.png";
import angger from "@/public/Team/5.png";
import agri from "@/public/Team/6.png";
import abi from "@/public/Team/7.png";
import sukma from "@/public/Team/8.png";
import faisal from "@/public/Team/9.png";
import hendra from "@/public/Team/10.png";
import elvio from "@/public/Team/11.png";
import ridwan from "@/public/Team/12.png";
import hafidz from "@/public/Team/13.png";
import GradientText from "@/components/ui/gradient-text";
import BlurText from "@/components/ui/blur-text";
import ShinyText from "@/components/ui/shiny-text";

const teamMembers = [
  {
    name: "Yopi Septian",
    role: "Founder & CEO",
    image: yopi,
    linkedin: "https://www.linkedin.com/in/yopi-septian/",
  },
  {
    name: "Bima Sakti",
    role: "COO",
    image: bima,
    linkedin: "https://www.linkedin.com/in/bimasaktip27/",
  },
  {
    name: "Yayat Ruhiyat",
    role: "CTO",
    image: yayat,
    linkedin: "https://www.linkedin.com/company/wheelbox-tech/",
  },
  {
    name: "Audi Adi",
    role: "CMO",
    image: audi,
    linkedin: "https://www.linkedin.com/in/audiadf/",
  },
  {
    name: "Angger Cakra",
    role: "CFO",
    image: angger,
    linkedin: "https://www.linkedin.com/company/wheelbox-tech/",
  },
  {
    name: "Muhammad Agri",
    role: "CHRO & Public Relations",
    image: agri,
    linkedin: "https://www.linkedin.com/in/agri-zulfiqorramadhan-184931365/",
  },
  {
    name: "Muhammad Abi",
    role: "CPO",
    image: abi,
    linkedin:
      "https://www.linkedin.com/in/muhammad-abi-fata-asshidiqi-bbba0926b/",
  },
  {
    name: "Sukma Sukarno",
    role: "Advisor",
    image: sukma,
    linkedin: "https://www.linkedin.com/company/wheelbox-tech/",
  },
  {
    name: "Faisal Abdul",
    role: "Secretary",
    image: faisal,
    linkedin: "https://www.linkedin.com/in/faisal-abdul-halim-582414131/",
  },
  {
    name: "Hendra Ahmadillah",
    role: "Fullstack Developer",
    image: hendra,
    linkedin: "https://www.linkedin.com/in/hendrayna55/",
  },
  {
    name: "Elvio Alfadeira",
    role: "Front End Developer",
    image: elvio,
    linkedin: "https://www.linkedin.com/company/wheelbox-tech/",
  },
  {
    name: "Ridwan Maulana",
    role: "UI/UX Designer",
    image: ridwan,
    linkedin: "https://www.linkedin.com/company/wheelbox-tech/",
  },
  {
    name: "Hafidz Syamsul",
    role: "Visual Designer",
    image: hafidz,
    linkedin: "https://www.linkedin.com/in/hafidz-syamsul-anwari-6060a52b9/",
  },
];

const Teams = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start lg:p-[170px] gap-8">
        <span className="text-xs h-auto">Our Team</span>
        <div className="flex flex-col items-start justify-start gap-2 text-5xl">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="flex items-start justify-start"
          >
            Meet Our Team
          </GradientText>
          <BlurText
            text="Passionate. Innovation. Expert"
            delay={150}
            animateBy="words"
            direction="top"
          />
        </div>
        <ShinyText
          text="We lead with care-our core value-and a share passion for connection
          the world."
          disabled={false}
          speed={3}
          className="lg:w-[450px] text-base leading-relaxed"
        />

        <TeamWb members={teamMembers} />
      </div>
    </>
  );
};

export default Teams;
