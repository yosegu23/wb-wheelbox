import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "WheelBox | Startup Indonesia",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
