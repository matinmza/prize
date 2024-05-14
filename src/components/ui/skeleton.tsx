import { cn } from "@/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "t-animate-pulse t-rounded-md t-bg-gray-9",
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };
