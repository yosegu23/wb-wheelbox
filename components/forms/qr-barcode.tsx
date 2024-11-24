"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function QrBarcode() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-white/30 backdrop-blur-sm shadow-lg relative group/card dark:bg-black/30 dark:backdrop-blur-sm dark:border-white/[0.2] border-black/[0.1] w-full max-w-[20rem] sm:max-w-[30rem] h-auto rounded-xl p-6 border hidden lg:block" // Hide on mobile and tablet portrait
      >
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-white text-center"
        >
          Explore WheelBox on Instagram
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 text-sm sm:text-base mt-2 text-center dark:text-neutral-300"
        >
          Scan the QR code below to visit our official Instagram account and
          stay updated with the latest innovations and updates!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/Images/qr-barcode.svg"
              fill
              sizes="(max-width: 640px) 8rem, 10rem"
              className="object-contain rounded-xl group-hover/card:shadow-xl"
              alt="QR Code for WheelBox Instagram"
            />
          </div>
        </CardItem>
        <div className="flex justify-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.instagram.com/wheelbox.id/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white flex flex-row gap-1 items-center justify-center bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-md hover:shadow-lg"
          >
            <Image
              src="/Logo/instagram-icon.svg"
              alt="Instagram Account"
              width={20}
              height={20}
            />
            <span>Click This to Visit Instagram</span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
