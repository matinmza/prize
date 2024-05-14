import {
    eachDayOfInterval,
    eachYearOfInterval,
    format,
    getDaysInMonth,
    getYear,
    isExists,
    newDate,
    setYear,
    getMonth,
    isDate,
    setMonth,
} from "date-fns-jalali";
import { useMemo, useState } from "react";
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export interface CalenderProps {
    defaultDate?: Date;
    yearsOptions?: {
        from: number;
        to: number;
    };
}

export type monthType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type useCalenderHookT = (options: CalenderProps) => {
    onChangeYear: (year: number) => void;
    onChangeMonth: (month: monthType) => void;
    onChangeDay: (day: Date) => void;
    activeDate: Date;
    yearsList: number[];
    monthList: number[];
    dayList: Date[];
    yearValue: number | "";
};
export const useCalender: useCalenderHookT = (props = {}) => {
    const { defaultDate, yearsOptions } = props;
    const [activeDate, setActiveDate] = useState<Date>(
        defaultDate ? defaultDate : new Date()
    );

    const [yearValue, setYearValue] = useState<number | "">(
        defaultDate ? getYear(defaultDate) : ""
    );
    const lastDayOfMonth = useMemo(
        () =>
            getDaysInMonth(
                newDate(getYear(activeDate), getMonth(activeDate), 1)
            ),
        [activeDate]
    );
    const yearsList = useMemo<number[]>(() => {
        let years;
        const isCorrectOptionYear =
            yearsOptions && yearsOptions.from < yearsOptions.to;
        if (yearsOptions && isCorrectOptionYear) {
            years = eachYearOfInterval({
                start: newDate(yearsOptions.from, 1, 6),
                end: newDate(yearsOptions.to, 1, 6),
            });
        } else {
            years = eachYearOfInterval({
                start: newDate(1300, 1, 6),
                end: newDate(1500, 1, 6),
            });
        }
        return years.map((year) => +format(year, "yyyy"));
    }, [yearsOptions]);

    const dayList = useMemo<Date[]>(() => {
        const days = eachDayOfInterval({
            start: newDate(getYear(activeDate), getMonth(activeDate), 1),
            end: newDate(
                getYear(activeDate),
                getMonth(activeDate),
                lastDayOfMonth
            ),
        });
        return days;
    }, [activeDate, lastDayOfMonth]);

    const onChangeYear = (year: number) => {
        const isSpam =
            year.toString().length > 4 ||
            year === yearValue ||
            isNaN(year) ||
            typeof year !== "number";
        if (isSpam) return;
        if (year.toString().length === 4) {
            const inRange = yearsOptions
                ? yearsOptions.from <= year && yearsOptions.to >= year
                : true;
            if (isExists(year, 5, 5) && inRange) {
                const newDateCalender = setYear(activeDate, year);
                setActiveDate(newDateCalender);
                setYearValue(year);
            } else {
                setYearValue("");
            }
            return;
        }
        setYearValue(year || "");
    };

    const onChangeMonth = (month: monthType) => {
        const isCorrectFormat = 0 < month && month <= 12;
        if (!isCorrectFormat) return;
        // we get 1 to 12
        // package want number from 0 to 11
        const fixMonth = month - 1;
        const newDateCalender = setMonth(activeDate, fixMonth);
        setActiveDate(newDateCalender);
    };

    const onChangeDay = (day: Date) => {
        const isCorrectFormat = isDate(day);
        if (!isCorrectFormat) return;
        setActiveDate(day);
    };

    return {
        activeDate,
        yearsList,
        monthList,
        dayList,
        yearValue,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
    };
};
