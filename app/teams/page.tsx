'use client'

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

const teamMembers = [
  {
    name: "Yopi Septian",
    role: "Founder & CEO",
    image: yopi,
  },
  {
    name: "Bima Sakti",
    role: "COO",
    image: bima,
  },
  {
    name: "Yayat Ruhiyat",
    role: "CTO",
    image: yayat,
  },
  {
    name: "Audi Adi",
    role: "CMO",
    image: audi,
  },
  {
    name: "Angger Cakra",
    role: "CFO",
    image: angger,
  },
  {
    name: "Muhammad Agri",
    role: "CHRO & Public Relations",
    image: agri,
  },
  {
    name: "Muhammad Abi",
    role: "CPO",
    image: abi,
  },
  {
    name: "Sukma Sukarno",
    role: "Advisor",
    image: sukma,
  },
  {
    name: "Faisal Abdul",
    role: "Secretary",
    image: faisal,
  },
  {
    name: "Hendra Ahmadillah",
    role: "Fullstack Developer",
    image: hendra,
  },
  {
    name: "Elvio Alfadeira",
    role: "Front End Developer",
    image: elvio,
  },
  {
    name: "Ridwan Maulana",
    role: "UI/UX Designer",
    image: ridwan,
  },
  {
    name: "Hafidz Syamsul",
    role: "Visual Designer",
    image: hafidz,
  },
];

const Teams = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start lg:p-[170px] gap-8">
      <span className="text-xs h-auto">Our Team</span>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-slate-500 text-5xl">Meet Our Team</h1>
        <h1 className="text-5xl">Passionate. Innovation. Expert</h1>
      </div>
      <p className="lg:w-[450px] text-base leading-relaxed">
        We lead with care-our core value-and a share passion for connection the
        world.
      </p>

      <TeamWb members={teamMembers} />
    </div>
  );
};

export default Teams;
