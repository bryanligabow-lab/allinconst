"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow hover:shadow-glow-lg hover:from-brand-400 hover:to-brand-600",
  secondary:
    "bg-white text-ink-900 hover:bg-ink-100 shadow-premium",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
  outline:
    "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/30"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-[52px] px-8 text-base"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", icon, iconRight, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
        {icon && <span className="relative">{icon}</span>}
        <span className="relative">{children}</span>
        {iconRight && (
          <span className="relative transition-transform group-hover:translate-x-0.5">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
