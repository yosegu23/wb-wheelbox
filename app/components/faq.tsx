"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.15,
                ease: "easeOut",
            }}
            className={cn(
                "group rounded-lg border-[0.5px] border-gray-200/50 dark:border-gray-800/50",
                "transition-all duration-200 ease-in-out",
                isOpen
                    ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
                    : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4"
            >
                <h3
                    className={cn(
                        "text-base font-medium transition-colors duration-200 text-left",
                        "text-gray-700 dark:text-gray-300",
                        isOpen && "text-gray-900 dark:text-white"
                    )}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "p-0.5 rounded-full shrink-0",
                        "transition-colors duration-200",
                        isOpen
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2">
                            <motion.p
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function Faq02() {
    const faqs: Omit<FAQItemProps, "index">[] = [
        {
            question: "What is Wheelbox?",
            answer: "Wheelbox is a multi-disciplinary tech agency that specializes in software development, creative design, digital marketing, and joint venture SaaS solutions. We're committed to delivering high-impact digital experiences through strategic innovation.",
        },
        {
            question: "What makes Wheelbox different?",
            answer: "Our edge lies in combining agency services with product development. Unlike traditional firms, we also build scalable SaaS platforms internally, allowing us to offer clients both execution and ecosystem-level innovation.",
        },
        {
            question: "Who is behind Wheelbox?",
            answer: "We're a diverse team of 13 professionals including strategists, developers, designers, and marketers. Our leadership includes experienced C-level execs who bring decades of industry insight and executional precision.",
        },
        {
            question: "What’s your mission?",
            answer: "Our mission is to accelerate businesses through collaboration, design thinking, and technology. We aim to bridge vision and execution, turning bold ideas into real-world impact.",
        },
        {
            question: "Do you work with startups or enterprises?",
            answer: "Both. We partner with startups for rapid validation and growth, and also serve enterprises looking for agility and innovative edge. Our joint venture model makes us especially appealing to ambitious founders and venture-backed teams.",
        }
    ];    

    return (
        <section className="py-16 w-full bg-linear-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-white/[0.02] dark:to-transparent">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold mb-3 bg-linear-to-r text-gray-600 dark:text-gray-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Everything you need to know about us
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq02;
