"use client";

import HeroSections from "@/components/landing-pages/hero-sections";
import { NavbarDemo } from "@/components/landing-pages/navbar";
import React from 'react'

export default function page() {
  return (
    <>
      <div className="w-full h-auto">
        <NavbarDemo />
        <HeroSections />
      </div>
    </>
  )
}