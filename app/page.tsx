"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";
import FormEmail from "@/components/forms/form-email";

const words = `Coming Soon..`;

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <Image
          src="/Assets/WheelBox_LogoHorizontal_WithoutBg.svg"
          alt="Logo WheelBox"
          width={300}
          height={300}
          className="w-[200px] h-auto md:w-[350px] lg:w-[450px]"
        />
      </motion.div>
      <TextGenerateEffect words={words} className="font-bold" />
      <div className="flex flex-col items-center px-4 text-center">
        <BlurIn
          word="The Future and Innovation begins here."
          className="text-[12px] md:text-base lg:text-lg font-extralight text-black dark:text-white"
        />
        <BlurIn
          word="Be the first to know, Drop your email below and stay in the loop."
          className="text-[12px] md:text-base lg:text-lg font-extralight text-black dark:text-white"
        />
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center pt-4 px-4 md:pt-5 lg:pt-6"
      >
        <FormEmail />
      </motion.div>
      <p className="absolute bottom-7 sm:bottom-8 inset-x-0 text-center text-sm text-gray-300">
        © 2024-2025 All Right Reserved by
        <span className="font-extrabold text-white text-sm">WheelBox</span>.
      </p>
    </AuroraBackground>
  );
}
