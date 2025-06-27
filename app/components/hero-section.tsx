/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "../components/text-effects";
import { AnimatedGroup } from "../components/animated-group";
import { HeroHeader } from "../components/hero-header";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useTheme } from "next-themes";
import { Waves } from "@/components/ui/waves-background";
import BtnGetStarted from "./get-started";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "@/zod/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/actions/getClient";
import toast from "react-hot-toast";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const { theme } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        description: "",
      },
    });
  
    async function onSubmit(values: z.infer<typeof formSchema>) {
    const sendPromise = toast.promise(
      sendEmail(values),
      {
        loading: 'Sending...',
        success: (data) => {
          if (!data.success) throw new Error(data.error);
          form.reset();
          setIsSheetOpen(false);
          return <b>Email sent successfully!</b>;
        },
        error: (err) => {
          return <b>{err.message || "Could not send email."}</b>;
        },
      }
    );
  
    await sendPromise;
  }

  return (
    <>
      <HeroHeader />
      <main className="lg:overflow-x-hidden min-h-screen overflow-y-auto">
        <div
          aria-hidden
          className="absolute lg:absolute lg:inset-0 lg:pointer-events-none lg:isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="lg:absolute lg:inset-0 lg:pointer-events-none">
            <Waves
              lineColor={
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(0, 0, 0, 0.3)"
              }
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">
                      Ready to fly higher! 🚀
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>
                <div className="mt-4 text-balance text-4xl md:text-5xl lg:mt-10 lg:text-6xl flex flex-col justify-center items-center">
                  <TextEffect
                    as="h1"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    className="inline">
                    Modern Solutions With
                  </TextEffect>
                  <div className="flex items-center justify-center gap-2 flex-row">
                    <span>Creative</span>
                    <WordRotate
                      words={[
                        " Technology",
                        " Marketing",
                        " Brands",
                        " Visual",
                      ]}
                    />
                  </div>
                </div>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-[16px]">
                  Seamless digital experiences that elevate brands and drive
                  success, from concept to execution.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                      <BtnGetStarted />
                    </SheetTrigger>
                    <SheetContent
                      side="top"
                      className="w-screen rounded-b-3xl transition py-2 flex flex-col lg:flex-row">
                      <SheetHeader className="w-full">
                        <SheetTitle>
                          <div>
                            <h3 className="text-6xl">Hey!</h3>
                            <span className="text-3xl">Tell us all the things</span>
                          </div>
                        </SheetTitle>
                        <div>
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-8">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Name & Company</FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Alex from Google"
                                          {...field}
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="alex@google.com"
                                          {...field}
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>
                                      Tell us more about your need.
                                    </FormLabel>
                                    <FormControl>
                                      <Textarea
                                        placeholder="Something about your great idea"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />

                              <div className="flex justify-between items-center">
                                <span>Our Email dev.wheelbox@gmail.com</span>
                                <button
                                  type="submit"
                                  className="flex justify-center gap-2 items-center shadow-xl text-lg bg-black backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                                  Explore
                                  <svg
                                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                    viewBox="0 0 16 19"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                      className="fill-white group-hover:fill-gray-800"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </form>
                          </Form>
                        </div>
                      </SheetHeader>
                      <div className="hidden lg:flex items-center justify-center lg:w-[50%]">
                        {/* Video GIF */}
                        <video
                          width="320"
                          height="240"
                          autoPlay
                          loop
                          className="rounded-2xl">
                          <source src="/website/poster.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="link"
                    className="h-10.5 rounded-xl px-5">
                    <Link href="/works">
                      <span className="text-nowrap">Browse a case studies</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            {/* <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}>
                  <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                    <div
                      aria-hidden
                      className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                    />
                    <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                      <Image
                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                        src="/mail2.png"
                        alt="app screen"
                        width="2700"
                        height="1440"
                      />
                      <Image
                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                        src="/mail2-light.png"
                        alt="app screen"
                        width="2700"
                        height="1440"
                      />
                    </div>
                  </div>
                </AnimatedGroup> */}
          </div>
        </section>
      </main>
    </>
  );
}
