import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative text-white rounded-full cursor-pointer transition-all duration-300 font-medium m-[.3px]",
  {
    variants: {
      size: {
        sm: "text-xs py-[5px] px-3",
        md: "text-sm py-2 px-4",
        lg: "text-base py-3 px-6",
      },
      variant: {
        default: "bg-[#352662] hover:bg-[#352662]",
        ghost: "bg-transparent hover:bg-[#2a1f4c]/10",
        solid: "bg-[#2a1f4c] hover:bg-[#352662]",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "default",
    },
  }
);

const gradientVariants = cva(
  "absolute inset-0 rounded-full p-[2px] bg-gradient-to-r opacity-100 transition-opacity duration-300",
  {
    variants: {
      gradient: {
        default: "from-[rgba(255,74,231,0.7)] via-[rgba(133,167,243,0)] to-[rgba(17,255,255,0.7)]",
        pink: "bg-gradient-to-b from-[rgba(255,255,255,0.8)]/10  via-[#B496B10D]/20 to-[rgba(255,74,231,0.5)]/60 rounded-lg",
        blue: "bg-gradient-to-b from-[rgba(17,255,255,0.5)] to-[rgba(0,40,45,0.5)]",
        green: "from-[rgba(34,197,94,0.7)] to-[rgba(16,185,129,0.7)]",
        rainbow: "from-[rgba(255,0,0,0.7)] via-[rgba(255,154,0,0.7)] via-[rgba(208,222,33,0.7)] via-[rgba(79,220,74,0.7)] via-[rgba(63,218,216,0.7)] via-[rgba(47,201,226,0.7)] to-[rgba(28,127,238,0.7)]",
      }

    },
    defaultVariants: {
      gradient: "default",
    },
  }
);

// Define the type for the button props by extending ButtonHTMLAttributes
export interface GradientBorderButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof gradientVariants> {
  borderWidth?: string;
}

const GradientBorder = React.forwardRef<
  HTMLButtonElement,
  GradientBorderButtonProps
>(({ 
  className, 
  children, 
  size, 
  variant, 
  gradient, 
  borderWidth = "2px", 
  disabled = false, 
  ...props 
}, ref) => {
  return (
    <div className={cn("relative inline-block group", disabled && "opacity-50 pointer-events-none")}>
      <div 
        className={cn(
          gradientVariants({ 
            gradient,
          }),
          `p-[${borderWidth}]`
        )}
      />
      <button
        className={cn(
          buttonVariants({ size, variant }),
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    </div>
  );
});

GradientBorder.displayName = "GradientBorder";

export { GradientBorder, buttonVariants, gradientVariants };