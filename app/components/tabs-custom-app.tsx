"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";

const pinData = [
  {
    href: "https://www.best-placement-test.com",
    title: "www.best-placement-test.com",
    h3: "Best Edutainment",
    span: "English Course",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
  },
  {
    href: "https://wheelbox-bhsi.vercel.app/",
    title: "wheelbox-bhsi.vercel.app",
    h3: "BHSI Quick Count",
    span: "Quick Count",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
  },
];

export function TabsCustomApp() {
  const [showMore, setShowMore] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-start mt-8 overflow-y-auto no-scrollbar px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-20 justify-items-center relative z-10">
        {pinData.slice(0, 2).map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {item.h3}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{item.span}</span>
              </div>
              <div
                className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${item.gradient}`}
              />
            </div>
          </PinContainer>
        ))}

        <AnimatePresence>
          {showMore &&
            pinData.slice(3).map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                <PinContainer title={item.title} href={item.href}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      {item.h3}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500">{item.span}</span>
                    </div>
                    <div
                      className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${item.gradient}`}
                    />
                  </div>
                </PinContainer>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <Button
        variant="link"
        onClick={() => setShowMore((prev) => !prev)}
        className="pt-6">
        {showMore ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
}
