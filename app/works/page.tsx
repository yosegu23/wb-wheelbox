import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CpuArchitecture } from "@/components/ui/wb-architecture";
import { WorksTab } from "../components/work-tabs";
import GradientText from "@/components/ui/gradient-text";
import ShinyText from "@/components/ui/shiny-text";
import { TerminalWorks } from "../components/terminal-works";
import Footer from "../components/footer";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-20 pt-12 md:pb-32 lg:pb-44 lg:pt-44">
            <div className="relative mx-auto flex lg:flex-row max-w-6xl flex-col px-6">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Works 10x Faster with Us
                </GradientText>
                <ShinyText
                  text="Accelerate your workflow and get more done in less time with
                  Wheelbox — smart automation for your business."
                  disabled={false}
                  speed={20}
                  className="mt-8 max-w-2xl text-pretty text-lg"
                />

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <TerminalWorks />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Our Successfull Clients</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider gap={112}>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit text-white"
                      src="/Logo/agross.svg"
                      alt="Nvidia Logo"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit text-white"
                      src="/Logo/best.svg"
                      alt="Column Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit text-white"
                      src="/Logo/bhsi.svg"
                      alt="GitHub Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit text-white"
                      src="/Logo/gemaria.svg"
                      alt="Nike Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit text-white"
                      src="/Logo/juku.svg"
                      alt="Lemon Squeezy Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit text-white"
                      src="/Logo/logo-teuing.svg"
                      alt="Laravel Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-7 w-fit text-white"
                      src="/Logo/bale.svg"
                      alt="Lilly Logo"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-6 w-fit text-white"
                      src="/Logo/logo-teuing.svg"
                      alt="OpenAI Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
        <CpuArchitecture className="p-11" />
        <WorksTab />
      </main>
      <Footer />
    </div>
  );
}
