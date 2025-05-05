"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextReveal } from "@/components/magicui/text-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import Mantap from "@/public/Icons/3d/thumb-up-dynamic-premium.svg"

export function AboutUs() {
  return (
    <div className="relative w-full h-[40rem] mt-[20rem] mb-[20rem] pt-[10rem] flex flex-col items-center justify-center rounded-md">
      <div className="relative flex-col md:flex-row z-10 flex items-center gap-2 md:gap-8">
        <span className="text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Who we are?
        </span>
        <TextReveal className="text-[10px] text-balance text-center">
          We are creative tech agency and builder delivering software, design, and digital marketing solutions. We help startups and businesses grow fast with custom apps, bold branding, and scalable joint venture platforms.
        </TextReveal>
        <motion.div animate={{ y: [0, -10, 0],}} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <Image src={Mantap} alt="Mantap!" width={100} height={100} />
        </motion.div>
        
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
