"use client";
import Link from "next/link";
import LogoWheelbox from "@/public/Assets/WheelBox_LogoHorizontal_WithoutBg.svg";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NavigationMenuDemo } from "./navbar-menu";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
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

// const menuItems = [
//   { name: "About", href: "#link" },
//   { name: "Products", href: "#link" },
//   { name: "Works", href: "#link" },
//   { name: "Services", href: "#link" },
//   { name: "Blog", href: "#link" },
//   { name: "Contact", href: "#link" },
// ];

const mobileMenu = [
  {
    title: "About",
    items: [
      {
        title: "Teams",
        href: "/teams",
        description: "Meet the professional team...",
      },
      { title: "Vision & Mission", href: "/purpose" },
      { title: "Core Values", href: "/core-values" },
      { title: "Wheelbox Story", href: "/wheelbox-story" },
    ],
  },
  {
    title: "Products",
    items: [
      { title: "Harmonia", href: "/docs/primitives/alert-dialog" },
      { title: "Bowman", href: "/docs/primitives/hover-card" },
      { title: "Uplusbe", href: "/docs/primitives/progress" },
    ],
  },
  {
    title: "Works",
    href: "/docs",
  },
  {
    title: "Services",
    items: [
      { title: "Modern Landing Page Website", href: "/services/landingpage" },
      { title: "Web App & Mobile App", href: "/services/webapp" },
      { title: "Social Media Management", href: "/services/smm" },
      { title: "Creative Brands", href: "/services/creativebrands" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openDropdowns, setOpenDropdowns] = React.useState<
    Record<string, boolean>
  >({});

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      email: "",
      describe: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed z-30 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Image
                  src={LogoWheelbox}
                  alt="Wheelbox"
                  width={100}
                  height={100}
                />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200 transition-all",
                    menuState
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 duration-200 transition-all",
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <NavigationMenuDemo />
            </div>

            <div
              className={cn(
                "bg-background mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                menuState ? "block" : "hidden",
                "lg:flex"
              )}>
              {/* Mobile menu links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {mobileMenu.map((item) =>
                    item.items ? (
                      <li key={item.title}>
                        <button
                          className="flex w-full justify-between items-center text-muted-foreground hover:text-accent-foreground"
                          onClick={() => toggleDropdown(item.title)}
                          aria-expanded={!!openDropdowns[item.title]}>
                          {item.title}
                          <span>{openDropdowns[item.title] ? "▲" : "▼"}</span>
                        </button>
                        {openDropdowns[item.title] && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  className="block text-muted-foreground hover:text-accent-foreground"
                                  onClick={() => setMenuState(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={item.title}>
                        <Link
                          href={item.href!}
                          className="text-muted-foreground hover:text-accent-foreground block"
                          onClick={() => setMenuState(false)}>
                          {item.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Become Client Buttons & Form */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {/* Mobile Sheet */}
                <Sheet>
                  <SheetTrigger asChild>
                    <InteractiveHoverButton
                      className={cn(isScrolled && "text-[12px]")}>
                      Become Client
                    </InteractiveHoverButton>
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="w-screen rounded-b-3xl transition py-5">
                    <SheetHeader>
                      <h1 className="text-6xl">Hey!</h1>
                      <h3 className="text-3xl">Tell us all the things</h3>
                      <div>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="company"
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
                              name="describe"
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
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
