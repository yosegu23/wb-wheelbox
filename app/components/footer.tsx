'use client';
import React from "react";

import { StickyFooter } from "./sticky-footer";
import Link from "next/link";
import { CallToAction } from "./cta";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="w-full">
      <div className="h-[150dvh] w-full">
        <CallToAction />
      </div>
      <StickyFooter
        heightValue="100dvh"
        className="text-neutral-900 dark:text-neutral-100">
        <Content />
      </StickyFooter>
    </div>
  );
}

export default Footer;

const links = [
  {
    title: "About",
    items: [
      { href: "https://www.wheelbox.tech/teams", label: "Teams" },
      { href: "https://www.wheelbox.tech/purpose", label: "Vision & Mission" },
      { href: "https://www.wheelbox.tech/core-values", label: "Core Values" },
      { href: "https://www.wheelbox.tech/wheelboxstory", label: "Wheelbox Story" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "https://www.wheelbox.tech/landing-page", label: "Modern Landing Page" },
      { href: "https://www.wheelbox.tech/custom-app", label: "Web App & Mobile App Custom" },
      { href: "https://www.wheelbox.tech/smm", label: "Social Media Management" },
      { href: "https://www.wheelbox.tech/creative-brands", label: "Creative Brands" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { href: "https://www.linkedin.com/company/wheelbox-tech/", label: "LinkedIn" },
      { href: "https://www.instagram.com/wheelbox.tech/", label: "Instagram" },
      { href: "https://www.facebook.com/people/WheelBox/61570888655360/?_rdr", label: "Facebook" },
      { href: "https://wa.me/62895335181400", label: "WhatsApp" },
    ],
  },
];

export function Content() {
  return (
    <div className="py-8 px-12 h-full w-full flex flex-col justify-between">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-14">
      {links.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-neutral-900 dark:text-white">{section.title}</h3>
          {section.items.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.01 }}
              className="w-fit"
            >
              <Link
                href={link.href}
                target="_blank"
                className="relative inline-block text-neutral-900 dark:text-white"
              >
                <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-neutral-500 after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      ))}
      </div>

      <div className="flex justify-between flex-col gap-4 sm:flex-row items-end">
        <h1 className="text-[14vw] leading-[0.8] mt-10">Wheelbox</h1>
        <p>© 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
