import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wheelbox | Startup Indonesia",
  description:
    "Wheelbox is a technology startup based in Cianjur, Indonesia, focusing on innovation and digital solutions for businesses.",
  keywords: [
    "Startup Cianjur",
    "Wheelbox",
    "Wheelbox",
    "Startup Wheelbox",
    "Wheelbox Startup",
    "Startup Indonesia",
    "Teknologi Indonesia",
    "Inovasi Startup",
    "Digital Solutions",
    "Bisnis Indonesia",
  ],
  openGraph: {
    title: "Wheelbox | Startup Indonesia",
    description:
      "Wheelbox is a technology startup based in Cianjur, Indonesia, focusing on innovation and digital solutions for businesses.",
    url: "https://wheelbox.tech/",
    siteName: "WheelBox",
    locale: "id_ID",
    type: "website",
  },
  metadataBase: new URL("https://wheelbox.tech"),
  alternates: {
    canonical: "https://wheelbox.tech/",
  },
};

// export const metadata: Metadata = {
//   title: "WheelBox | Startup Indonesia",
//   description:
//     "Startup Cianjur - WheelBox, a startup based in Cianjur, Indonesia, focusing on innovation and technology.",
//   keywords: [
//     "Startup Cianjur",
//     "WheelBox",
//     "Startup WheelBox",
//     "WheelBox Startup",
//     "Startup Indonesia",
//   ],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Toaster />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
