import { FC, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard: FC<{ length: number }> = ({ length }) => {
    const myArray = useMemo(() => {
        return Array.from({ length }, () => 0);
    }, [length]);

    return (
        <div className="t-flex t-flex-col t-gap-5">
            {myArray.map((_x, i) => (
                <div
                    key={i}
                    className="t-flex t-animate-pulse t-shadow-default t-items-center t-space-x-4 t-justify-between t-rounded-sm t-py-5 t-px-4"
                >
                    <div>
                        <Skeleton className="t-h-6 t-w-6 t-rounded-full" />
                    </div>
                    <div className="t-space-y-2 ">
                        <Skeleton className="t-h-4 t-w-[64px]" />
                        <Skeleton className="t-h-4 t-w-[149px]" />
                    </div>
                    <Skeleton className="t-h-12 t-w-12 t-rounded-sm" />
                </div>
            ))}
        </div>
    );
};

export default SkeletonCard;
