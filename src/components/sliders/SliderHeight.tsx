import { SwiperSlide, Swiper } from "swiper/react";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/virtual";
import { FC, useMemo } from "react";
import IconArrowGreen from "@/components/icons/IconArrowGreen";
import { Swiper as SwiperType } from "swiper/types";
import IconHand from "../icons/IconHand";

type round = "round10" | "round5" | "notRound";

const createValue = (index: number): round => {
    const round10 = index % 10 === 0;
    const round5 = index % 5 === 0;
    if (round10) {
        return "round10";
    }
    if (round5) {
        return "round5";
    }
    return "notRound";
};
export const SliderHeight: FC<{
    onChange: (newVal: number) => void;
    active: number;
}> = ({ active, onChange }) => {
    const tall = useMemo(() => {
        return [...Array(300)]
            .map((_i, index) => ({
                height: index + 1,
                uiType: createValue(index + 1),
            }))
            .reverse();
    }, []);

    return (
        <>
            <div className="t-h-[400px] -t-z-0">
                <div className="t-h-[375px] t-ltr">
                    <Swiper
                        slidesPerView={40}
                        spaceBetween={1}
                        centeredSlides={true}
                        className="t-h-[375px]  t-select-none "
                        onActiveIndexChange={(s: SwiperType) => {
                            onChange(300 - s.activeIndex);
                        }}
                        direction="vertical"
                        initialSlide={300 - active}
                    >
                        {tall.map((i) => {
                            return (
                                <SwiperSlide
                                    className={classNames([
                                        "t-flex t-flex-col t-justify-center",
                                    ])}
                                    key={i.height}
                                >
                                    {i.uiType === "round10" && (
                                        <div className="t-relative t-h-10 t-w-14">
                                            <div className="t-bg-[#474747] t-h-0.5 t-w-6"></div>
                                            <div className="-t-rotate-90 t-absolute t-flex t-flex-col t-justify-center -t-top-3 t-right-0">
                                                {i.height}
                                            </div>
                                        </div>
                                    )}
                                    {i.uiType === "round5" && (
                                        <div className="t-bg-[#ABABAB] t-h-0.5 t-w-4"></div>
                                    )}
                                    {i.uiType === "notRound" && (
                                        <div className="t-bg-[#e0e0e0] t-h-0.5 t-w-2"></div>
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <IconHand />
            </div>
            <div className="t-relative t-h-[375px] t-border-r-2 t-border-gray-300 t-flex t-items-center  t-justify-center ">
                <IconArrowGreen className="-t-mt-[2px]" />

                <div className="t-w-24 t-h-0.5 t-border-dashed t-border-b-2 t-border-[#3FE36D] t-opacity-40 t-absolute t-left-5 -t-mt-[2px]"></div>
            </div>
        </>
    );
};
