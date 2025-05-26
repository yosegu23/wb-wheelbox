import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardCoreValues() {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Integrity",
    description:
      "Upholding honesty and ethical behavior to build trust with clients and partners.",
  },
  {
    title: "Collaboration",
    description:
      "Embracing teamwork, diversity, and open communication to achieve goals.",
  },
  {
    title: "Innovation",
    description:
      "Continuously pursuing creative solutions to meet evolving needs.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Delivering exceptional value by understanding and exceeding expectations.",
  },
];
