"use client";

import React from "react";
import HeroSection from "./components/hero-section";
import { AboutUs } from "./components/about-wb";
import Services from "./components/services";
import { ClientsSection } from "./components/clients-section";
import { MarqueeClients } from "./components/marquee-client";
import { Showcase } from "./components/showcase";
import Faq02 from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <ClientsSection />
      <MarqueeClients />
      <Showcase />
      <Faq02 />
      <Footer />
    </>
  );
}
