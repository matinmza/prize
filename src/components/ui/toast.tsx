import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Viewport>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
        ref={ref}
        className={cn(
            "t-fixed t-top-0 t-z-[100] t-flex t-max-h-screen t-w-full t-flex-col-reverse t-p-4 sm:t-bottom-0 sm:t-right-0 sm:t-top-auto sm:t-flex-col md:t-max-w-[420px]",
            className
        )}
        {...props}
    />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
    "t-group t-shadow-sm t-pointer-events-auto t-relative  t-flex t-w-full t-items-center t-justify-between t-space-x-4 t-overflow-hidden t-rounded-md t-border t-py-2 t-px-8 t-pr-8 t-shadow-lg t-transition-all data-[swipe=cancel]:t-translate-x-0 data-[swipe=end]:t-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:t-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:t-transition-none data-[state=open]:t-animate-in data-[state=closed]:t-animate-out data-[swipe=end]:t-animate-out data-[state=closed]:t-fade-out-80 data-[state=closed]:t-slide-out-to-right-full data-[state=open]:t-slide-in-from-top-full data-[state=open]:sm:t-slide-in-from-bottom-full",
    {
        variants: {
            variant: {
                default: "t-bg-[#DCF5EC]  t-text-[#25C38C]",
                error: "t-bg-red-4 t-text-[#F56A05]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Toast = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
        VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    return (
        <ToastPrimitives.Root
            ref={ref}
            className={cn(toastVariants({ variant }), className)}
            {...props}
        />
    );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Action>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Action
        ref={ref}
        className={cn(
            "t-inline-flex t-h-8 t-shrink-0 t-items-center t-justify-center t-rounded-md t-border t-bg-transparent t-px-3 t-text-sm t-font-medium t-ring-offset-background t-transition-colors hover:t-bg-secondary focus:t-outline-none focus:t-ring-2 focus:t-ring-ring focus:t-ring-offset-2 disabled:t-pointer-events-none disabled:t-opacity-50 group-[.destructive]:t-border-muted/40 group-[.destructive]:hover:t-border-destructive/30 group-[.destructive]:hover:t-bg-destructive group-[.destructive]:hover:t-text-destructive-foreground group-[.destructive]:focus:t-ring-destructive",
            className
        )}
        {...props}
    />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Close>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Close
        ref={ref}
        className={cn(
            "t-relative t-right-2 t-top-2 t-rounded-md t-p-1 t-text-foreground/50 t-opacity-100 t-transition-opacity hover:t-text-foreground focus:t-opacity-100 focus:t-outline-none focus:t-ring-2 group-hover:t-opacity-100 group-[.destructive]:t-text-red-300 group-[.destructive]:hover:t-text-red-50 group-[.destructive]:focus:t-ring-red-400 group-[.destructive]:focus:t-ring-offset-red-600",
            className
        )}
        toast-close=""
        {...props}
    >
        <X className="t-h-4 t-w-4" />
    </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Title>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Title
        ref={ref}
        className={cn("t-font-14-bold t-mb-1", className)}
        {...props}
    />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Description>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Description
        ref={ref}
        className={cn("t-font-12-regular t-opacity-90 ", className)}
        {...props}
    />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
    type ToastProps,
    type ToastActionElement,
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
};
