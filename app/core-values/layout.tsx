import type { Metadata } from "next";
import { HeroHeader } from "../components/hero-header";


export const metadata: Metadata = {
  title: "WheelBox | Core Values",
  description:
    "Startup Cianjur - WheelBox, a startup based in Cianjur, Indonesia, focusing on innovation and technology.",
  keywords: [
    "Startup Cianjur",
    "WheelBox",
    "Startup WheelBox",
    "WheelBox Startup",
    "Startup Indonesia",
  ],
};

export default function CoreValuesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroHeader />
      <div className="w-full h-full flex justify-center items-center p-11 lg:p-0">
        {children}
      </div>
    </>
  );
}
