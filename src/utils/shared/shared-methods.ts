import { CustomErrorT } from "@/app/server";

import { toast } from "@/components/ui/use-toast";

export const toastApi = (error: CustomErrorT) => {
    toast({
        variant: "error",
        title: "خطا",
        description: error.data?.message || error.status,
    });
};

export const BMI = (height: number): string => {
    const heightToMeter = height / 100;
    const w1 = Math.round(heightToMeter * heightToMeter * 18);
    const w2 = Math.round(heightToMeter * heightToMeter * 24);

    return `${w1} تا ${w2}`;
};

export const copyToKeyboard = (text: string) => {
    if (!navigator.clipboard) {
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            toast({
                variant: "default",
                title: "کپی",
                description: "متن  با موفقیت کپی شد",
            });
        },
        function () {
            toast({
                variant: "error",
                title: "خطا",
                description: "متن کپی نشد!",
            });
        }
    );
};
