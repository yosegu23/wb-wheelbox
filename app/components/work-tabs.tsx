/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs } from "@/components/ui/tabs";
import { TabsLP } from "./tabs-lp";
import { TabsCustomApp } from "./tabs-custom-app";
import GradientText from "@/components/ui/gradient-text";

export function WorksTab() {
  const tabs = [
    {
      title: "Modern Landing Page",
      value: "landing-page",
      content: (
        <div className="w-full h-full rounded-2xl text-white bg-gradient-to-br from-purple-700 to-violet-900 flex flex-col">
          <div className="p-6 text-xl md:text-4xl font-bold shrink-0">
            <p>Modern Landing Page</p>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6">
            <TabsLP />
          </div>
        </div>
      ),
    },
    {
      title: "Social Media Management",
      value: "smm",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Social Media Management</p>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class">
            Still Progress
          </GradientText>
        </div>
      ),
    },
    {
      title: "Custom App",
      value: "custom-app",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Custom App</p>
          <TabsCustomApp />
        </div>
      ),
    },
    {
      title: "Creative Brands",
      value: "creative-brands",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Creative Brands</p>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class">
            Still Progress
          </GradientText>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
