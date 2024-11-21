"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src="/Assets/WheelBox_LogoOnly_WithoutBg.svg"
              alt="Logo WheelBox"
              width={25}
              height={25}
            />
            <div className="text-white text-lg font-bold">👋 Hi there!</div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
