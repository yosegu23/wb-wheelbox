"use client";
import React from "react";
import IntegrationsSection from "./integration";
import PriceLandingPage from "./price-lp";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start lg:p-[170px] gap-8">
      <IntegrationsSection />
      <PriceLandingPage />
    </div>
  );
};

export default LandingPage;
