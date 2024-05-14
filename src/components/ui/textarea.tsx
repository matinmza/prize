import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "t-flex t-min-h-[80px] t-w-full t-rounded-md t-border focus-visible:t-border-green focus-visible:t-text-green t-border-gray-2 t-bg-background t-px-3 t-py-2 t-text-sm  placeholder:t-text-muted-foreground focus-visible:t-outline-none  disabled:t-cursor-not-allowed disabled:t-opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
