import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "t-peer t-h-6 t-w-6 t-shrink-0 t-rounded-[2px] t-border-2 t-border-gray-11 t-ring-offset-background focus-visible:t-outline-none focus-visible:t-ring-2 focus-visible:t-ring-ring focus-visible:t-ring-offset-2 disabled:t-cursor-not-allowed disabled:t-opacity-50 data-[state=checked]:t-bg-white-1 data-[state=checked]:t-border-green  data-[state=checked]:t-text-green",
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn(
                "t-flex t-items-center t-justify-center t-text-current"
            )}
        >
            <Check className="h-5 w-5" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
