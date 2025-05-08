/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Modern Landing Page Website",
    content:
      "Create stunning, high-converting landing pages with Wheelbox’s customizable components. Our easy-to-use library allows you to design responsive web and mobile applications that align with your brand.",
    srcImage: "/Images/modern_landing_page.svg",
  },
  {
    title: "Web App & Mobile App Custom",
    content:
      "Streamline your development process with Wheelbox’s pre-built, customizable components for web and mobile apps. Quickly integrate these elements into your project, enhancing functionality without compromising design.",
    srcImage:
      "/Images/custom_app.svg",
  },
  {
    title: "Social Media & Marketing",
    content:
      "Elevate your brand’s digital presence with tailored social media strategies. Integrate Wheelbox’s components to ensure consistency across your web and marketing platforms, from content creation to campaign execution.",
    srcImage:
      "/Images/smm.svg",
  },
  {
    title: "Creative Branding & Design",
    content:
      "Wheelbox offers end-to-end branding and design solutions. Use our library of modern components to craft a cohesive visual identity, ensuring your brand stands out across all digital touchpoints.",
    srcImage:
      "/Images/creative-brand.svg",
  },
];

export function Services() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="w-full px-[200px]">
      <div className="mb-20 text-center">
        <p className=" mb-2 font-medium text-neutral-500 text-sm uppercase">
          What we offer ?
        </p>

        <h2 className="mb-4 font-semibold text-3xl text-neutral-800 tracking-tighter dark:text-neutral-300">
          We could deliver you a lot of things
        </h2>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button">
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]"
            )}>
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : ""
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-neutral-500/10 bg-linear-to-b from-neutral-200/15 to-neutral-200/5 dark:border-neutral-500/15 dark:from-neutral-600/15 dark:to-neutral-600/5 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset] "
          : "scale-90 border-transparent opacity-50 saturate-0"
      )}>
      <div className="flex w-full items-center gap-4 p-4">
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-500/20 text-neutral-600"
          )}>
          {number}
        </p>
        <h2
          className={cn(
            "text-left font-medium text-neutral-800 text-xl dark:text-neutral-200"
          )}>
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500 dark:text-neutral-400",
          isOpen ? " max-h-64" : "max-h-0"
        )}>
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute top-0 left-0 h-1 bg-neutral-500")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
