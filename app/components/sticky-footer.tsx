import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

export function StickyFooter({
  children,
  className,
  heightValue = "100dvh",
  ...props
}: {
  children: ReactNode;
  className?: string;
  heightValue?: string;
} & ComponentProps<"div">) {
  return (
    <div
      className="relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", height: heightValue }}
      {...props}
    >
      <div
        className={cn("fixed bottom-0 w-full", className)}
        style={{ height: heightValue }}
      >
        {children}
      </div>
    </div>
  );
}