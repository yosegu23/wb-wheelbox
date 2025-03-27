"use client";

import About from "@/components/landing-pages/about";
import { AboutCompany } from "@/components/landing-pages/about-company";
import HeroSections from "@/components/landing-pages/hero-sections";
import { NavbarDemo } from "@/components/landing-pages/navbar";
import ScrollText from "@/components/landing-pages/scroll-text";
import React from 'react'

export default function page() {
  return (
    <>
      <div className="w-full h-auto">
        <NavbarDemo />
        <HeroSections />
        <ScrollText />
        <About />
        <AboutCompany />
      </div>
    </>
  )
}