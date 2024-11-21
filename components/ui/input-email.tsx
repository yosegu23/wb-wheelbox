import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Input19() {
  return (
    <div className="relative w-full">
      <Input
        id="input-19"
        className="pe-24 dark:text-white"
        placeholder="Email"
        type="email"
      />
      <button
        className="absolute inset-y-0 end-[-24px] flex h-full w-24 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Subscribe"
      >
        <Send size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
