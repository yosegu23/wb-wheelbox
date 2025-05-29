"use client";

import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/ui/splashscreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SplashScreen />
      {children}
    </ThemeProvider>
  );
}
