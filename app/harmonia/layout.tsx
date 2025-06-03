import type { Metadata } from "next";
import { HeroHeader } from "../components/hero-header";

export const metadata: Metadata = {
  title: "WheelBox | Harmonia",
  description:
    "Harmonia - by WheelBox, a platform of joint venture for helping companies and venture capital to partnership with new our ecosystem with AI-Assistant Finance.",
  keywords: [
    "Startup Cianjur",
    "WheelBox",
    "Startup WheelBox",
    "WheelBox Startup",
    "Startup Indonesia",
  ],
};

export default function HarmoniaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroHeader />
        <div className="w-full h-full flex justify-center items-center p-6 lg:p-0">
          {children}
        </div>
    </>
  );
}
