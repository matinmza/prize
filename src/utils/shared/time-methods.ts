import { format } from "date-fns-jalali";

export const toTimeFormat = (hour: string, minute: string) => {
    return `${hour}:${minute}`;
};
export const toClock = (date: string) => {
    const clock = format(date, "HH:mm");
    return clock;
};

export const toDate = (date: string) => {
    const newDate = format(date, "yyyy/MM/dd");
    return newDate;
};
