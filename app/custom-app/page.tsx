"use client";

import Orb from "@/components/ui/orb";
import TrueFocus from "@/components/ui/true-focus";
import React from "react";

const SMMPages = () => {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <TrueFocus
          sentence="Coming Soon"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
    </>
  );
};

export default SMMPages;
