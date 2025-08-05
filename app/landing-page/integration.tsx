"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiExpress,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TerminalLP } from "../components/terminal-landing-page";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import DecryptedText from "@/components/ui/decrypted-text";

export default function IntegrationsSection() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="bg-white dark:bg-background">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-3 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={4}
                showBorder={false}
                className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Create Your Modern Website
              </GradientText>
              <DecryptedText
                text="Build a stunning, responsive website with Wheelbox. Perfect for
                startups, portfolios, or businesses—launch your dream website
                today!"
                speed={50}
                animateOn="view"
                revealDirection="center"
                maxIterations={10}
                characters="QAZXSWEDCVFRTGBNHYUJMKIOLP!?"
              />
              <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button>
            </div>

            <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
              <div className="bg-background flex aspect-square items-center justify-center border">
                <SiNextdotjs className="size-9" />
              </div>
              <blockquote>
                <p>
                  A powerful landing page boosts your credibility, enhances
                  brand awareness, and drives marketing success.
                </p>
                <div className="mt-2 flex gap-2 text-sm">
                  <cite>Yopi Septian</cite>
                  <p className="text-muted-foreground">Founder, Wheelbox</p>
                </div>
              </blockquote>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {showTerminal ? (
              <motion.div
                key="terminal"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}>
                <TerminalLP />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                  <div className="grid grid-cols-2 gap-2">
                    <Integration
                      icon={<SiNextdotjs />}
                      name="NextJS"
                      description="Enables you to create high-quality web applications with the power of React components."
                    />
                    <Integration
                      icon={<SiTypescript />}
                      name="Typescript"
                      description="A syntactic superset of JavaScript which adds static typing."
                    />
                    <Integration
                      icon={<SiTailwindcss />}
                      name="Tailwind CSS"
                      description="a utility-first CSS framework that simplifies web development by providing a set of pre-designed utility classes."
                    />
                    <Integration
                      icon={<SiJavascript />}
                      name="JavaScript"
                      description="A lightweight interpreted (or just-in-time compiled) programming language with first-class functions."
                    />
                    <Integration
                      icon={<SiDocker />}
                      name="Docker"
                      description="Docker helps developers bring their ideas to life by conquering the complexity of app development."
                    />
                    <Integration
                      icon={<SiExpress />}
                      name="Express.js"
                      description="a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
