"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/website/harmonia-logo.svg";
import GradientText from "@/components/ui/gradient-text";
import ShinyText from "@/components/ui/shiny-text";
import { GradientButton } from "../components/gradient-button";

const HarmoniaPage = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <Image src={logo} alt="Harmonia Logo" width={200} height={50} />
        <div className="flex flex-col items-start justify-center gap-1 lg:gap-3 lg:flex-row-reverse">
          <div className="flex flex-col items-start justify-center lg:gap-4 lg:pt-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-base lg:text-2xl lg:w-[350px]">
              Something powerful is taking shape behind the scenes.
            </GradientText>
            <div className="flex items-start justify-center flex-col lg:gap-2">
              <ShinyText
                text="Harmonia is the joint venture platform built for bold founders and forward-thinking businesses.Limited early access available."
                disabled={false}
                speed={3}
                className="lg:w-[350px] text-balance"
              />
              <GradientButton variant="variant">
                ⚡️ Claim your spot now
              </GradientButton>
            </div>
          </div>
          <video width="320" height="240" autoPlay loop className="rounded-2xl">
            <source src="/website/harmonia.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default HarmoniaPage;
