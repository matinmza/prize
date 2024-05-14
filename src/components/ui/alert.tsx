import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
    "t-relative t-w-full t-rounded-lg t-border t-p-4 [&>svg~*]:t-pl-7 [&>svg+div]:t-translate-y-[-3px] [&>svg]:t-absolute [&>svg]:t-left-4 [&>svg]:t-top-4 [&>svg]:t-text-foreground",
    {
        variants: {
            variant: {
                default: "t-bg-background t-text-foreground",
                destructive:
                    "t-border-destructive/50 t-text-destructive dark:t-border-destructive [&>svg]:t-text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            "t-mb-1 t-font-medium t-leading-none t-tracking-tight",
            className
        )}
        {...props}
    />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("t-text-sm [&_p]:t-leading-relaxed", className)}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
