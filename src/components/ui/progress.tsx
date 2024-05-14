import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "t-relative t-h-1  t-w-full t-overflow-hidden  t-bg-gray-7 t-ltr t-rounded-md",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className="t-h-full t-w-full t-flex-1 t-bg-[#59DF7F] t-transition-all"
            style={{ transform: `translateX(${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
