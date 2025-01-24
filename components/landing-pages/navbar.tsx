"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoWheelbox from "@/public/assets/WheelBox_LogoHorizontal_WithoutBg.svg";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import UsersThree from "@/public/Icons/users-three.svg";
import Checks from "@/public/Icons/checks.svg";
import Confetti from "@/public/Icons/confetti.svg";
import Desktop from "@/public/Icons/desktop.svg";
import DeviceMobile from "@/public/Icons/device-mobile.svg";
import Gauge from "@/public/Icons/gauge.svg";
import Crop from "@/public/Icons/crop.svg";
import Cards from "@/public/Icons/cards.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { formSchema } from "@/zod/schema";
import { Form, FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      email: "",
      describe: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <div className={cn("fixed top-8 inset-x-0 max-w-xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image src={LogoWheelbox} alt="Logo Wheelbox" width={100} height={100} />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2 relative w-6 h-6">
              <span
                className={cn(
                  "block w-full h-1 bg-white rounded-lg absolute transition-transform duration-300",
                  menuOpen ? "rotate-45 top-2.5" : "top-0"
                )}
              ></span>
              <span
                className={cn(
                  "block w-full h-1 bg-white rounded-lg absolute transition-opacity duration-300",
                  menuOpen ? "opacity-0" : "top-2.5"
                )}
              ></span>
              <span
                className={cn(
                  "block w-full h-1 bg-white rounded-lg absolute transition-transform duration-300",
                  menuOpen ? "-rotate-45 top-2.5" : "top-5"
                )}
              ></span>
            </button>
          </div>
          <div className="hidden lg:flex md:flex items-center space-x-4">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/team">
                  <Image src={UsersThree} alt="Team" width={20} height={20} />
                  <span>Team</span>
                </HoveredLink>
                <HoveredLink href="/core-value">
                  <Image src={Checks} alt="Core Value" width={20} height={20} />
                  <span>Core Value</span>
                </HoveredLink>
                <HoveredLink href="/culture">
                  <Image src={Confetti} alt="Culture" width={20} height={20} />
                  <span>Culture</span>
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid lg:grid-cols-2 grid-cols-1 gap-10 p-2">
                <ProductItem
                  title="Coming Soon"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="The apps still development."
                />
                <ProductItem
                  title="Coming Soon"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="The apps still development."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/web-dev">
                  <Image src={Desktop} alt="Web Development" width={20} height={20} />
                  <span>Web Development</span>
                </HoveredLink>
                <HoveredLink href="/mobile-dev">
                  <Image src={DeviceMobile} alt="Mobile Development" width={20} height={20} />
                  <span>Mobile Development</span>
                </HoveredLink>
                <HoveredLink href="/digital-marketing">
                  <Image src={Gauge} alt="Digital Marketing" width={20} height={20} />
                  <span>Digital Marketing</span>
                </HoveredLink>
                <HoveredLink href="/branding">
                  <Image src={Cards} alt="Branding" width={20} height={20} />
                  <span>Branding</span>
                </HoveredLink>
                <HoveredLink href="/interface-design">
                  <Image src={Crop} alt="Interface Design" width={20} height={20} />
                  <span>Interface Design</span>
                </HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="hidden lg:flex md:flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <InteractiveHoverButton text="Become Client" className="w-[135px] text-[12px]" />
              </SheetTrigger>
              <SheetContent side="top" className="w-screen rounded-b-3xl transition py-5">
                <SheetHeader>
                  <h1 className="text-6xl">Hey!</h1>
                  <h3 className="text-3xl">Tell us all the things</h3>
                  <div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name & Company</FormLabel>
                                <FormControl>
                                  <Input placeholder="Alex from Google" {...field} />
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
                                  <Input placeholder="alex@google.com" {...field} />
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
                              <FormLabel>Tell us more about your need.</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Something about your great idea" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-between items-center">
                          <span>Our Email dev.wheelbox@gmail.com</span>
                          <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-lg bg-black backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                            Explore
                            <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-white group-hover:fill-gray-800" />
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
      </Menu>
      <motion.div
        className={cn("lg:hidden flex flex-col space-y-4 p-4 bg-black absolute top-16 left-0 right-0", { hidden: !menuOpen })}
        initial={{ opacity: 0, y: -20 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/team">
              <Image src={UsersThree} alt="Team" width={20} height={20} />
              <span>Team</span>
            </HoveredLink>
            <HoveredLink href="/core-value">
              <Image src={Checks} alt="Core Value" width={20} height={20} />
              <span>Core Value</span>
            </HoveredLink>
            <HoveredLink href="/culture">
              <Image src={Confetti} alt="Culture" width={20} height={20} />
              <span>Culture</span>
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-1 gap-10 p-2">
            <ProductItem
              title="Coming Soon"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="The apps still development."
            />
            <ProductItem
              title="Coming Soon"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="The apps still development."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/web-dev">
              <Image src={Desktop} alt="Web Development" width={20} height={20} />
              <span>Web Development</span>
            </HoveredLink>
            <HoveredLink href="/mobile-dev">
              <Image src={DeviceMobile} alt="Mobile Development" width={20} height={20} />
              <span>Mobile Development</span>
            </HoveredLink>
            <HoveredLink href="/digital-marketing">
              <Image src={Gauge} alt="Digital Marketing" width={20} height={20} />
              <span>Digital Marketing</span>
            </HoveredLink>
            <HoveredLink href="/branding">
              <Image src={Cards} alt="Branding" width={20} height={20} />
              <span>Branding</span>
            </HoveredLink>
            <HoveredLink href="/interface-design">
              <Image src={Crop} alt="Interface Design" width={20} height={20} />
              <span>Interface Design</span>
            </HoveredLink>
          </div>
        </MenuItem>
      </motion.div>
    </div>
  );
}
