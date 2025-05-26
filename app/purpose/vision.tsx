"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiExpress,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobefonts,
} from "react-icons/si";
import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandFigma } from "react-icons/tb";
import logo from "@/public/Logo/wheelbox-logo.svg";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import TextPressure from "@/components/ui/text-pressure";
import ShinyText from "@/components/ui/shiny-text";

export default function VisionSection() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
            <div
              role="presentation"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
            ></div>
            <div>
              <InfiniteSlider gap={24}>
                <IntegrationCard>
                  <SiNextdotjs />
                </IntegrationCard>
                <IntegrationCard>
                  <SiTypescript />
                </IntegrationCard>
                <IntegrationCard>
                  <SiTailwindcss />
                </IntegrationCard>
                <IntegrationCard>
                  <SiJavascript />
                </IntegrationCard>
                <IntegrationCard>
                  <SiDocker />
                </IntegrationCard>
                <IntegrationCard>
                  <SiExpress />
                </IntegrationCard>
              </InfiniteSlider>
            </div>

            <div>
              <InfiniteSlider gap={24} reverse>
                <IntegrationCard>
                  <SlSocialInstagram />
                </IntegrationCard>
                <IntegrationCard>
                  <SlSocialGoogle />
                </IntegrationCard>
                <IntegrationCard>
                  <SlSocialFacebook />
                </IntegrationCard>
                <IntegrationCard>
                  <SlSocialLinkedin />
                </IntegrationCard>
                <IntegrationCard>
                  <BsTwitterX />
                </IntegrationCard>
                <IntegrationCard>
                  <SlSocialYoutube />
                </IntegrationCard>
              </InfiniteSlider>
            </div>
            <div>
              <InfiniteSlider gap={24}>
                <IntegrationCard>
                  <SiAdobeillustrator />
                </IntegrationCard>
                <IntegrationCard>
                  <SiAdobelightroom />
                </IntegrationCard>
                <IntegrationCard>
                  <SiAdobephotoshop />
                </IntegrationCard>
                <IntegrationCard>
                  <SiAdobepremierepro />
                </IntegrationCard>
                <IntegrationCard>
                  <SiAdobefonts />
                </IntegrationCard>
                <IntegrationCard>
                  <TbBrandFigma />
                </IntegrationCard>
              </InfiniteSlider>
            </div>
            <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
              <IntegrationCard
                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                isCenter={true}
              >
                <Image src={logo} alt="Wheelbox" width={50} height={50} />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              <TextPressure
                text="Vission"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </h2>
            <ShinyText
              text="Become a leading innovator in the world of technology, driving
              change through revolutionary solutions that integrate software,
              artificial intelligence, data analytics and advanced connectivity"
              disabled={false}
              speed={3}
              className="text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative z-20 flex size-12 rounded-full border",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};
