"use client";

import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: ReactNode;
}

export function Card({ className, hoverable = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-md",
        hoverable &&
          "transition-all duration-500 hover:border-brand-400/40 hover:shadow-glow hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-b from-white/[0.03] to-transparent"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function CardSpotlight({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Card className={className}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(circle_at_top,rgba(47,87,245,0.25),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </Card>
  );
}
