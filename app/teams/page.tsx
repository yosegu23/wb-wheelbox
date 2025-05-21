'use client'

import TiltedCard from "@/components/ui/titled-card";
import React from "react";

const Teams = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start lg:p-[170px] gap-8">
      <span className="text-xs h-auto">Our Team</span>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-slate-500 text-5xl">Meet Our Team</h1>
        <h1 className="text-5xl">Passionate. Innovation. Expert</h1>
      </div>
      <p className="lg:w-[450px] text-base leading-relaxed">
        We lead with care-our core value-and a share passion for connection the
        world.
      </p>

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
        }
      />
    </div>
  );
};

export default Teams;
