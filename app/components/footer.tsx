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
      { href: "/app/Teams", label: "Teams" },
      { href: "/app/corevalues", label: "Core Values" },
      { href: "/app/wheelboxstory", label: "Wheelbox Story" },
      { href: "/app/wheelboxstory", label: "Contact Us" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "/app/landing-page", label: "Modern Landing Page" },
      { href: "/app/custom-app", label: "Web App & Mobile App Custom" },
      { href: "/app/smm", label: "Social Media Management" },
      { href: "/app/creative-brands", label: "Creative Brands" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { href: "/app/landing-page", label: "LinkedIn" },
      { href: "/app/custom-app", label: "Instagram" },
      { href: "/app/smm", label: "Facebook" },
      { href: "/app/creative-brands", label: "WhatsApp" },
    ],
  },
];

export function Content() {
  return (
    <div className="py-8 px-12 h-full w-full flex flex-col justify-between">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-14">
      {links.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-white">{section.title}</h3>
          {section.items.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.01 }}
              className="w-fit"
            >
              <Link
                href={link.href}
                className="relative inline-block text-white"
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
