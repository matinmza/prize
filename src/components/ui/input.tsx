import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
    HTMLInputElement,
    InputProps & {
        startAdornment?: React.ReactElement;
        eneAdornment?: React.ReactElement;
        error?: string;
        label?: string;
    }
>(
    (
        {
            className,
            type,
            startAdornment,
            eneAdornment,
            error,
            label,
            onChange,
            ...props
        },
        ref
    ) => {
        return (
            <>
                {label && (
                    <div className="t-mt-1 t-text-black-main t-font-12-regular t-flex t-items-center ">
                        {label}
                    </div>
                )}
                <div className="t-w-full t-relative t-flex t-items-center ">
                    {startAdornment && (
                        <div className="t-absolute t-right-2 t-bg-white-1 t-z-10 t-flex t-items-center t-justify-center  ">
                            {startAdornment}
                        </div>
                    )}
                    <input
                        type={type === "number" ? "text" : type}
                        inputMode={type === "number" ? "numeric" : "text"}
                        autoComplete="off"
                        className={cn(
                            "t-flex t-h-12 t-outline-0 t-w-full t-relative t-rounded-md t-border  disabled:t-border-[0.5px] t-border-gray-2 t-bg-transparent t-px-3 t-py-2 t-font-14-medium  file:t-border-0 file:t-bg-transparent file:t-text-sm file:t-font-medium   disabled:t-cursor-not-allowed disabled:t-text-gray-2 disabled:t-bg-primary-lighter t-text-black-1 focus:t-border-green focus:t-text-green",
                            [
                                startAdornment ? "t-pr-9" : "",
                                eneAdornment ? "t-pl-9" : "",
                                error && " t-border-b-red-error",
                            ],
                            className
                        )}
                        ref={ref}
                        onChange={(e) => {
                            if (type === "number") {
                                e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    ""
                                );
                            }
                            onChange && onChange(e);
                        }}
                        {...props}
                    />
                    {eneAdornment && (
                        <div className="t-absolute t-left-2 t-bg-white-1 t-flex t-items-center t-justify-center">
                            {eneAdornment}
                        </div>
                    )}
                </div>
                {error && (
                    <div className="t-mt-1 t-text-red-error t-font-10-regular t-flex t-items-center t-pr-2">
                        . {error}
                    </div>
                )}
            </>
        );
    }
);
Input.displayName = "Input";

export { Input };
