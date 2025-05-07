'use client'

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import getama from "@/public/Images/getama_priadi.png";
import riza from "@/public/Images/riza_kridayana.png";
import karsin from "@/public/Images/karsin.png";
import andry from "@/public/Images/andry_wijaya.png";
import muhammad from "@/public/Images/muhamad_rijal_badru_salim.png";
import zainal from "@/public/Images/zainal_muttaqin.png";
import aip from "@/public/Images/aip_saipul_mubarok.png";

const reviews = [
  {
    name: "Getama Priadi",
    username: "Best Edutainment",
    body: "Wheelbox completely exceeded our expectations. The result is unlike anything we've seen before—innovative, polished, and powerful.",
    img: getama
  },
  {
    name: "Riza Kridayana",
    username: "BHSI",
    body: "The work blew us away. It iss rare to be left speechless, but Wheelbox delivered something truly extraordinary.",
    img: riza
  },
  {
    name: "Karsin",
    username: "PT Agro Selaras Sinergi",
    body: "From start to finish, the experience was seamless. Wheelbox took our vision and made it better than we imagined.",
    img: karsin
  },
  {
    name: "Andry Wijaya",
    username: "CV Gemaria",
    body: "Professional, creative, and deeply committed—Wheelbox delivered beyond our expectations. We are thrilled with the outcome.",
    img: andry
  },
  {
    name: "Muhamad Rijal Badru Salim",
    username: "Bale Zakat Sodaqoh",
    body: "This was more than just a project—it was a transformation. We are proud to have partnered with Wheelbox.",
    img: muhammad
  },
  {
    name: "Zainal Muttaqin",
    username: "Juku Gakuin Center",
    body: "Wheelbox brought clarity, speed, and innovation to the table. What they delivered was simply outstanding.",
    img: zainal
  },
  {
    name: "Aip Saipul Mubarok",
    username: "Ichihara Jaya",
    body: "We have worked with many teams before, but Wheelbox stands apart. They turned our ideas into something remarkable.",
    img: aip
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: StaticImageData;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={img} className="rounded-full" width={32} height={32} alt="Client Say" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-balance">{body}</blockquote>
    </figure>
  );
};

export function MarqueeClients() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
