import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PulseLoader } from "react-spinners";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "t-inline-flex  t-items-center t-justify-center t-whitespace-nowrap t-rounded-md t-font-14-medium t-ring-offset-background t-transition-colors focus-visible:t-outline-none focus-visible:t-ring-2 focus-visible:t-ring-ring focus-visible:t-ring-offset-2 disabled:t-pointer-events-none  disabled:t-text-gray-3",
    {
        variants: {
            variant: {
                default: "t-bg-green t-text-white-1 disabled:t-bg-gray-9",
                destructive:
                    "t-bg-destructive t-text-destructive-foreground hover:t-bg-destructive/90",
                outline:
                    "t-border border-green hover:t-bg-accent  t-text-green disabled:t-border-gray-4 disabled:t-text-gray-4",
                secondary:
                    "t-bg-secondary t-text-secondary-foreground hover:t-bg-secondary/80",
                ghost: "t-text-gray-1 hover:t-bg-accent hover:t-text-accent-foreground",
                link: "t-text-primary t-underline-offset-4 hover:t-underline",
            },
            size: {
                default: "t-h-12 t-px-4 t-py-2",
                sm: "t-h-12 t-rounded-md t-px-3",
                lg: "t-h-11 t-rounded-md t-px-8",
                icon: "t-h-10 t-w-10",
            },
            fullWidth: {
                true: "t-w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    fullWidth?: boolean;
    loading?: boolean;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "default",
            size,
            asChild = false,
            fullWidth = true,
            children,
            loading,
            disabled,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, className, fullWidth })
                )}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading ? (
                    <PulseLoader
                        color={
                            variant === "default"
                                ? "var(--white-1)"
                                : "var(--green-primary)"
                        }
                    />
                ) : (
                    children
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
