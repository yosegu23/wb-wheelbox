"use client";

import React from "react";
import HeroSection from "../components/hero-section";
import { ClientsSection } from "../components/clients-section";
import { MarqueeClients } from "../components/marquee-client";
import { AboutUs } from "../components/about-wb";
import { Showcase } from "../components/showcase";
import Services from "../components/services";
import Footer from "../components/footer";
import Faq02 from "../components/faq";

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
