import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MineCraft from "@/public/Icons/3d/minecraft-dynamic-premium.svg";
import Chess from "@/public/Icons/3d/chess-dynamic-premium.svg";
import Figma from "@/public/Icons/3d/figma-dynamic-premium.svg";
import Thumb from "@/public/Icons/3d/thumb-up-dynamic-premium.svg";
import Teams from "./teams";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { LineShadowText } from "../ui/line-shadow-text";
import { useTheme } from "next-themes";

export default function About() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="relative w-full h-auto bg-black flex flex-col items-center justify-center pt-4">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <AnimatedGradientText>
          👋 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}>
            Introducing About Us
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h2 className="font-bold text-4xl text-center text-white space-y-2 w-1/2 mb-8 z-10">
          Introduce the{" "}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Wheelbox
          </LineShadowText>{" "}
          Team For Best{" "}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Solution
          </LineShadowText>{" "}
          To Your{" "}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Business
          </LineShadowText>
        </h2>
      </div>

      {/* Teams Component */}
      <div className="relative z-10 w-1/2">
        <Teams />
      </div>

      {/* Left Side Images */}
      <motion.div
        className="absolute"
        style={{ top: "30%", left: "7%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}>
        <Image src={MineCraft} alt="MineCraft" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "65%", left: "15%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>
        <Image src={Chess} alt="Chess" />
      </motion.div>

      {/* Right Side Images */}
      <motion.div
        className="absolute"
        style={{ top: "65%", right: "15%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}>
        <Image src={Figma} alt="Figma" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "30%", right: "7%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.9 }}>
        <Image src={Thumb} alt="Thumb" />
      </motion.div>
    </div>
  );
}
