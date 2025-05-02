"use client";

import React from "react";
import HeroSection from "../components/hero-section";
import { ClientsSection } from "../components/clients-section";
import { MarqueeClients } from "../components/marquee-client";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <MarqueeClients />
    </>
  );
}
