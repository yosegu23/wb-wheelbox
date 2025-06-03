"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Harmonia",
    href: "/harmonia",
    description:
      "A collaboration platform for venture-backed companies, making it easier to work together without time and location constraints.",
  },
  {
    title: "BuwmanHub",
    href: "/buwmanHub",
    description:
      "A complete business management platform with inventory modules, invoices, point of sale, and detailed reports.",
  },
  {
    title: "Uplusbe",
    href: "/uplusbe",
    description:
      "A platform to upload content to all social media with a single click, featuring ad targeting and audience management tools.",
  },
];

const secondComponent: { title: string; href: string; description: string }[] =
  [
    {
      title: "Modern Landing Page Website",
      href: "/landing-page",
      description:
        "Create a modern landing page for your business profile or personal branding that captures attention.",
    },
    {
      title: "Web App & Mobile App",
      href: "/custom-app",
      description:
        "Custom web and mobile app development using the best tech stack, designed for scalability and performance.",
    },
    {
      title: "Social Media Management",
      href: "/smm",
      description:
        "Manage your social media with compelling visuals, effective captions, and hooks to boost your brand and products.",
    },
    {
      title: "Creative Brands",
      href: "/creative-brands",
      description:
        "Build a standout brand with modern strategies and visuals that set you apart from the competition.",
    },
  ];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/teams"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-teams-image shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">Teams</div>
                    <p className="text-[10px] leading-tight text-white">
                      Meet the professional team behind Wheelbox, delivering
                      excellence in every project.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/purpose" title="Vision & Mission">
                Discover the core goals and values driving our company&apos;s
                future.
              </ListItem>
              <ListItem href="/core-values" title="Core Values">
                Understand the principles that guide our development process and
                decision-making.
              </ListItem>
              <ListItem href="/wheelbox-story" title="Wheelbox Story">
                Learn about our journey, challenges, and successes that shaped
                Wheelbox today.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/works" className={navigationMenuTriggerStyle()}>
              Works
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {secondComponent.map((secondComponents) => (
                <ListItem
                  key={secondComponents.title}
                  title={secondComponents.title}
                  href={secondComponents.href}>
                  {secondComponents.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/docs" className={navigationMenuTriggerStyle()}>
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
