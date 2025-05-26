"use client";

import { BiLogoVisualStudio, BiLogoMicrosoft } from "react-icons/bi";
import { SiAdobe } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { TbBrandFigma } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { cn } from "@/lib/utils";
import logo from "@/public/Logo/wheelbox-logo.svg";
import Image from "next/image";
import TextPressure from "@/components/ui/text-pressure";
import ShinyText from "@/components/ui/shiny-text";

export default function MissionSection() {
  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center sm:grid-cols-2">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 z-10 from-transparent to-75%"></div>
              <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <BiLogoVisualStudio />
                </IntegrationCard>
                <IntegrationCard>
                  <FcGoogle />
                </IntegrationCard>
              </div>
              <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <BiLogoMicrosoft />
                </IntegrationCard>
                <IntegrationCard
                  borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                  className="dark:bg-white/10"
                >
                  <Image src={logo} alt="Wheelbox" width={50} height={50} />
                </IntegrationCard>
                <IntegrationCard>
                  <SiAdobe />
                </IntegrationCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <TbBrandFigma />
                </IntegrationCard>

                <IntegrationCard>
                  <BsLinkedin />
                </IntegrationCard>
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                <TextPressure
                  text="Mission"
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
                text="We develop innovative technologies that provide intuitive solutions, seamless connectivity, and advanced data insights. Security, privacy, inclusivity, and sustainability are at the core of our products, ensuring they benefit all users efficiently and responsibly."
                disabled={false}
                speed={3}
                className="text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};
