import { FC, UIEvent, useEffect, useMemo, useRef, useState } from "react";
import { Input } from "../input";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { MONTH } from "./date.constant";
import { monthType, useCalender } from "@/hooks/useCalender";
import { format, newDate } from "date-fns-jalali";

const DatePicker: FC<{
    label: string;
    description?: string;
    onChange: (date: string) => void;
    date?: string;
}> = ({ label, description, onChange, ...props }) => {
    const date = props.date || new Date().toISOString();

    const ref = useRef<HTMLDivElement>(null);
    const [year, setYear] = useState(+format(date, "y"));
    const [month, setMonth] = useState(+format(date, "M"));
    const [day, setDay] = useState(+format(date, "d"));

    const { yearsList, dayList, onChangeMonth, onChangeYear } = useCalender({});

    const yearMemo = useMemo(() => {
        return yearsList.map((i) => ({
            title: i,
            value: i,
        }));
    }, []);

    const dayMemo = useMemo(() => {
        return dayList.map((i) => ({
            title: format(i, "d"),
            value: +format(i, "d"),
        }));
    }, [dayList]);

    useEffect(() => {
        const date = newDate(year, month - 1, day).toISOString();
        onChange(date);
    }, [day, month, year]);

    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <>
            <Drawer
                onOpenChange={(stateVal) => {
                    stateVal ? onOpen() : onClose();
                }}
                open={open}
                onClose={onClose}
            >
                <Input
                    onClick={() => {
                        if (ref && ref.current) {
                            ref.current?.click();
                        }
                    }}
                    onChange={() => {}}
                    value={format(date, "y/MM/d")}
                    label={label}
                />
                <DrawerTrigger>
                    <div ref={ref}></div>
                </DrawerTrigger>

                <DrawerContent>
                    <div className="t-mx-auto t-w-full t-max-w-sm t-px-6 t-pt-5 t-pb-0">
                        <div>
                            {description && (
                                <h2 className="t-font-14-medium t-mb-4">
                                    {description}
                                </h2>
                            )}
                        </div>
                        <div className="t-flex t-bg-primary-lighter t-rounded-sm t-h-[7.25rem] t-py-4">
                            <></>
                            <DateSelector
                                items={dayMemo}
                                onSelect={(x) => {
                                    setDay(x + 1);
                                }}
                                selected={day}
                            />
                            <DateSelector
                                items={MONTH}
                                onSelect={(x) => {
                                    onChangeMonth((x + 1) as monthType);
                                    setMonth(x + 1);
                                }}
                                selected={month}
                            />
                            <DateSelector
                                items={yearMemo}
                                onSelect={(x) => {
                                    const newY = yearMemo[0].value + x;
                                    onChangeYear(newY);
                                    setYear(newY);
                                }}
                                selected={year}
                            />
                        </div>
                        <DrawerFooter className="t-px-0">
                            <div className="t-row">
                                <div className="t-col-span-4">
                                    <Button onClick={onClose}>
                                        {STRING_GLOBAL.SUBMIT}
                                    </Button>
                                </div>
                            </div>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
};

interface DateSelectorPropsI {
    items: { title: number | string; value: number }[];

    selected: number;

    onSelect: (index: number) => void;
}

const DateSelector: FC<DateSelectorPropsI> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const timeoutRef = useRef<NodeJS.Timeout | undefined>();

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        if (containerRef.current) {
            const sI = props.items.findIndex(
                (item) => item.value === props.selected
            );

            setSelectedIndex(sI);

            containerRef.current?.scrollTo({
                top: sI * 32,
            });
        }
    }, [props.items, props.selected, containerRef.current]);

    const handleScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
        clearTimeout(timeoutRef.current);

        const sI = Math.round(e.currentTarget.scrollTop / 32);

        setSelectedIndex(sI);

        timeoutRef.current = setTimeout(() => {
            props.onSelect(sI);
        }, 200);
    };

    return (
        <div
            ref={containerRef}
            className="t-flex-1 t-h-full t-overflow-scroll  t-no-scrollbar t-snap-y"
            onScroll={handleScroll}
        >
            <div className="t-flex t-flex-col t-items-center t-justify-start t-select-none">
                <span className="t-text-gray-2 t-text-label-lg t-font-regular t-text-center t-h-8 t-leading-8 t-flex-center">
                    {/* {props.items[props.items.length - 1]} */}
                </span>

                {props.items.map((item, idx) => (
                    <span
                        key={item.value}
                        className={
                            idx === selectedIndex
                                ? "t-snap-center t-font-14-medium  t-h-8 t-leading-8 t-flex-center"
                                : "t-font-8-regular t-text-gray-1  t-text-center t-h-8 t-leading-8 t-flex-center"
                        }
                    >
                        {item.title}
                    </span>
                ))}

                <span className="t-text-gray-2 t-text-label-lg t-font-regular t-text-center t-h-8 t-leading-8 t-flex-center">
                    {/* {props.items[0]} */}
                </span>
            </div>
        </div>
    );
};

export default DatePicker;
