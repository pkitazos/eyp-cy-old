import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xl font-semibold shadow-sm ring-offset-background transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sun-900 text-foreground",
        header:
          "bg-sun-900 text-foreground rounded-4xl hover:scale-[1.05] hover:rounded-2xl",
        // destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-9 py-5 lg:px-7 lg:py-5 md:text-2xl",
        thin: "px-6 py-3 text-xl",
        lg: "px-9 py-5 xl:px-10 xl:py-7 lg:px-10 lg:py-7 md:px-9 md:py-6 xl:text-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
