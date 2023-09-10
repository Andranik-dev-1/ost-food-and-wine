"use client";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", full, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
          ${full ? "w-full " : "w-auto"}
            rounded-full 
            bg-orange-600
            border
            border-transparent
            px-4 
            py-2
            disabled:cursor-not-allowed 
            disabled:opacity-50
            text-white
            font-semibold
            hover:opacity-75
            transition
          `,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
