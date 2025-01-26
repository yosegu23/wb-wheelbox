import React from 'react'
import Image from 'next/image'
import SukmaSukarno from "@/public/Team/SukmaSukarno.svg";
import { SVGProps } from "react";
import { Cursor } from "../ui/cursor";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={31}
        fill="none"
        {...props}>
        <g clipPath="url(#a)">
          <path
            fill={"#181C14"}
            fillRule="evenodd"
            stroke={"#fff"}
            strokeLinecap="square"
            strokeWidth={2}
            d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={"#181C14"} d="M0 0h26v31H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  };

export default function Sukma() {
  return (
    <div className="overflow-hidden rounded-[12px] bg-white p-2 shadow-md dark:bg-black">
          <Cursor
            attachToParent
            variants={{
              initial: { scale: 0.3, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.3, opacity: 0 },
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.15,
            }}
            className="left-12 top-4">
            <div>
              <MouseIcon className="h-6 w-6" />
              <div className="flex flex-col ml-4 mt-1 rounded-[4px] bg-[rgba(255,255,255,0.1)] px-2 py-0.5 text-neutral-50 backdrop-blur-md shadow-md">
                <span>Sukma Sukarno</span>
                <span>😜 Advisor</span>
              </div>
            </div>
          </Cursor>
          <Image
            src={SukmaSukarno}
            alt="Sukma Sukarno"
            className="grayscale hover:grayscale-0 transition"
          />
        </div>
  )
}
