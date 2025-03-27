import Image from "next/image";
import { Marquee } from "../ui/marquee";
import one from '@/public/Mobile/AirtableiOS23.png'
import two from '@/public/Mobile/DharmaiOS8.png'
import three from '@/public/Mobile/DimensionaliOS18.png'
import four from '@/public/Mobile/DisneyiOS38.png'
import five from '@/public/Mobile/IRLiOS33.png'
import six from '@/public/Mobile/Life360iOS2.png'

const logos = [
  {
    name: "Airtable",
    img: one,
  },
  {
    name: "Dharma",
    img: two,
  },
  {
    name: "Dimensional",
    img: three,
  },
  {
    name: "Disney",
    img: four,
  },
  {
    name: "IRL",
    img: five,
  },
  {
    name: "Life360",
    img: six,
  },
];

type MarqueMobileProps = {
    className?: string;
}

export function MarqueMobile({ className }: MarqueMobileProps) {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg px-10 md:shadow-xl ${className}`}>
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
           className="h-auto w-auto justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <Image
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
