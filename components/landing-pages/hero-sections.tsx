"use client"
import React from 'react'

import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight  } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { RainbowButton } from '../ui/rainbow-button';

export default function HeroSections() {
    const words = ["Landing Pages", "Web Apps", "Mobile Apps", "Digital Marketing", "Creative Brand"];
  return (
  <>
    <HeroHighlight className="flex flex-col gap-4">
        <div className="w-full h-auto flex items-center justify-center">
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
            <span>The Solutions of Wheelbox ✨</span>
        </HoverBorderGradient>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-lg md:text-4xl lg:text-5xl font-normal text-neutral-600 dark:text-neutral-400">
            <span>
                <span className="font-bold text-white">We</span> delivers<FlipWords words={words} className="font-bold" /></span>
            <span>tailored to your needs.</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
            <span className='w-[55%] text-center text-sm text-slate-200'>Seamless digital experiences that elevate brands and drive success, from concept to execution.</span>
            <RainbowButton>Get Started</RainbowButton>
        </div>
    </HeroHighlight>
    </>
  )
}
