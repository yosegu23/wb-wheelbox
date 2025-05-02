import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Agross from "@/public/Logo/agross.svg";
import Bale from "@/public/Logo/bale.svg";
import Juku from "@/public/Logo/juku.svg";
import Logo from "@/public/Logo/logo-teuing.svg";
import Bhsi from "@/public/Logo/bhsi.svg";
import Best from "@/public/Logo/best.svg";
import Gemaria from "@/public/Logo/gemaria.svg";
import Image from "next/image";

export function ClientsSection() {
  const { theme } = useTheme();

  const images = [
    { src: Agross, alt: "Agro Selaras Sinergi", width: 50, height: 50 },
    { src: Gemaria, alt: "Gemaria", width: 50, height: 50 },
    { src: Bhsi, alt: "Bhsi", width: 50, height: 50 },
    { src: Bale, alt: "Bale", width: 50, height: 50 },
    { src: Juku, alt: "Juku", width: 50, height: 50 },
    { src: Logo, alt: "Logo Teuing", width: 50, height: 50 },
    { src: Best, alt: "Best", width: 52, height: 52 },
  ];


  return (
    <div className="h-screen w-full overflow-hidden mt-24">
      <div className="mx-auto mt-32 w-full max-w-2xl">
        <div className="text-center text-foreground text-balance">
          <span className="text-indigo-900 text-5xl dark:text-indigo-200">
            Trusted by forward-thinking brands.
          </span>
          <br />
          <span className="text-2xl mt-5">We&apos;re proud to work with innovators and leaders.</span>
        </div>

        <div className="relative mt-7 h-[100px] max-w-2xl">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={30}
            gap={48}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[100px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[100px]"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div>
    </div>
  );
}
