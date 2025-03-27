/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { MarketingList } from "../ui/MarketingList";
import { MarqueMobile } from "./marque-mobile";
import { CompareWeb } from "./compare-web";

const features = [
  {
    Icon: InputIcon,
    name: "Mobile App",
    description: "From concept to launch, we design apps that delight users and elevate brands on iOS and Android.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <MarqueMobile className="h-full w-auto opacity-60" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileTextIcon,
    name: "Web App",
    description: "Build fast, secure, and scalable web applications tailored to your business needs.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <CompareWeb />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Creative Marketing",
    description: "Maximize your online presence with tailored strategies that connect, engage, and convert.",
    href: "/",
    cta: "Learn more",
    background: (
        <MarketingList className="absolute -top-10 opacity-50" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "UI/UX Design",
    description: "Seamlessly blend functionality and aesthetics with user-centered designs that keep your audience engaged.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Creative Brand",
    description:
      "Define your identity and make an unforgettable impression with our creative branding expertise.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function AboutCompany() {
  return (
    <div className="w-full p-8 bg-black">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
