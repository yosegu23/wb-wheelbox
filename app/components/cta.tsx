"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import FormEmail from "@/components/forms/form-email";

export function CallToAction() {
  return (
    <div className="h-[40rem] w-full rounded-md
     relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 lg:text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Let&apos;s Build Together
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Your vision. Our execution. Start your journey with Wheelbox today.
        </p>
        <FormEmail />
      </div>
      <BackgroundBeams />
    </div>
  );
}
