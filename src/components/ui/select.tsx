import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "t-flex t-h-10 t-w-full t-items-center t-justify-between t-rounded-md t-border t-border-input t-bg-background t-px-3 t-py-2 t-text-sm t-ring-offset-background placeholder:t-text-muted-foreground focus:t-outline-none focus:t-ring-2 focus:t-ring-ring focus:t-ring-offset-2 disabled:t-cursor-not-allowed disabled:t-opacity-50 [&>span]:t-line-clamp-1",
            className
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="t-h-4 t-w-4 t-opacity-50" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn(
            "t-flex t-cursor-default t-items-center t-justify-center t-py-1",
            className
        )}
        {...props}
    >
        <ChevronUp className="t-h-4 t-w-4" />
    </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn(
            "t-flex t-cursor-default t-items-center t-justify-center t-py-1",
            className
        )}
        {...props}
    >
        <ChevronDown className="t-h-4 t-w-4" />
    </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                "t-relative t-z-50 t-max-h-96 t-min-w-[8rem] t-overflow-hidden t-rounded-md t-border t-bg-popover t-text-popover-foreground t-shadow-md data-[state=open]:t-animate-in data-[state=closed]:t-animate-out data-[state=closed]:t-fade-out-0 data-[state=open]:t-fade-in-0 data-[state=closed]:t-zoom-out-95 data-[state=open]:t-zoom-in-95 data-[side=bottom]:t-slide-in-from-top-2 data-[side=left]:t-slide-in-from-right-2 data-[side=right]:t-slide-in-from-left-2 data-[side=top]:t-slide-in-from-bottom-2",
                position === "popper" &&
                    "data-[side=bottom]:t-translate-y-1 data-[side=left]:t--translate-x-1 data-[side=right]:t-translate-x-1 data-[side=top]:t--translate-y-1",
                className
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    "t-p-1",
                    position === "popper" &&
                        "t-h-[var(--radix-select-trigger-height)] t-w-full t-min-w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn(
            "t-py-1.5 t-pl-8 t-pr-2 t-text-sm t-font-semibold",
            className
        )}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "t-relative t-flex t-w-full t-cursor-default t-select-none t-items-center t-rounded-sm t-py-1.5 t-pl-8 t-pr-2 t-text-sm t-outline-none focus:t-bg-accent focus:t-text-accent-foreground data-[disabled]:t-pointer-events-none data-[disabled]:t-opacity-50",
            className
        )}
        {...props}
    >
        <span className="t-absolute t-left-2 t-flex t-h-3.5 t-w-3.5 t-items-center t-justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="t-h-4 t-w-4" />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn("t--mx-1 t-my-1 t-h-px t-bg-muted", className)}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
