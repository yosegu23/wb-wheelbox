"use client";
import React from "react";
import IntegrationsSection from "./integration";
import PriceLandingPage from "./price-lp";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full flex flex-col items-start justify-start pt-11 lg:p-[170px] gap-8">
        <IntegrationsSection />
        <PriceLandingPage />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
