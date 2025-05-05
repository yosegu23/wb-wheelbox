"use client";

import React from "react";
import HeroSection from "../components/hero-section";
import { ClientsSection } from "../components/clients-section";
import { MarqueeClients } from "../components/marquee-client";
import { AboutUs } from "../components/about-wb";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ClientsSection />
      <MarqueeClients />
    </>
  );
}
