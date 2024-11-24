"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";
import FormEmail from "@/components/forms/form-email";
import { QrBarcode } from "@/components/forms/qr-barcode";

const words = `Coming Soon..`;

export default function Home() {
  return (
    <AuroraBackground>
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 p-6">
        <div className="w-full lg:w-1/2 h-auto flex flex-col items-center justify-center">
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
              className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
            />
          </motion.div>
          <TextGenerateEffect words={words} className="font-bold text-center" />
          <div className="flex flex-col items-center px-4 text-center mt-4">
            <BlurIn
              word="The Future and Innovation begins here."
              className="text-[14px] md:text-base lg:text-lg font-extralight text-black dark:text-white"
            />
            <BlurIn
              word="Be the first to know, Drop your email below and stay in the loop."
              className="text-[14px] md:text-base lg:text-lg font-extralight text-black dark:text-white"
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
        </div>
        <div className="w-full lg:w-1/2 items-center justify-center hidden md:flex">
          <QrBarcode />
        </div>
      </div>
      <p className="absolute bottom-7 sm:bottom-8 inset-x-0 text-center text-sm text-gray-300">
        © 2024-2025 All Right Reserved by
        <span className="font-extrabold text-white text-sm"> WheelBox</span>.
      </p>
    </AuroraBackground>
  );
}
