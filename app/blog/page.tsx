import FuzzyText from "@/components/ui/fuzzy-text";
import Image from "next/image";
import React from "react";
import WheelboxLogo from "@/public/Logo/wheelbox-logo.svg";

const Blog = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <Image src={WheelboxLogo} alt="Wheelbox" width={250} height={250} />
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}>
        404 Not Found
      </FuzzyText>
    </div>
  );
};

export default Blog;
