"use client";
import React from "react";
import { CardCoreValues } from "../components/card-cv";
import BlurText from "@/components/ui/blur-text";
import GradientText from "@/components/ui/gradient-text";
import CircularText from "@/components/ui/circular-text";
import Footer from "../components/footer";

const CoreValuePage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full flex flex-col items-start justify-start pt-11 lg:p-[170px] gap-8">
        <span className="text-xs h-auto">Core Values</span>
        <div className="flex flex-col items-start justify-start gap-2">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl h-auto">
            Navigating the Digital Maze
          </GradientText>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <BlurText
              text="At WheelBox,guide every decision and action we
          take, shaping our identity and driving our success."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
            />
            <CircularText
              text="*WHEELBOX*CORE"
              onHover="speedUp"
              spinDuration={20}
              className="hidden lg:block"
            />
          </div>
          <CardCoreValues />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoreValuePage;
