import FuzzyText from "@/components/ui/fuzzy-text";
import LetterGlitch from "@/components/ui/letter-glitch";
import React from "react";

const UplusbePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#222222", "#61dca3", "#61b3dc"]}
        />
      </div>
      <div className="relative z-50 w-full h-full flex flex-col justify-center items-center text-white">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontFamily="inherit">
          404
        </FuzzyText>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontFamily="inherit">
          not found
        </FuzzyText>
      </div>
    </div>
  );
};

export default UplusbePage;
