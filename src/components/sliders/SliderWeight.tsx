import { SwiperSlide, Swiper } from "swiper/react";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/virtual";
import { FC, useMemo } from "react";
import IconArrowGreen from "../icons/IconArrowGreen";
import { Swiper as SwiperType } from "swiper/types";

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

const SliderWeight: FC<{
    onChange: (newVal: number) => void;
    active: number;
}> = ({ active, onChange }) => {
    const weightList = useMemo(() => {
        return [...Array(290)]
            .map((_i, index) => ({
                weight: index + 1,
                uiType: createValue(index + 1),
            }))
            .reverse();
    }, []);

    return (
        <div className="t-ltr">
            <div className="t-relative  -t-mr-[1px] t-w-full t-border-b t-border-gray-100 t-flex t-justify-center ">
                <IconArrowGreen className="t-rotate-90 -t-mt-3" />
                <div className="t-w-0.5 t-h-20 t-top-0 t-border-dashed t-border-l-2 t-border-[#3FE36D] t-opacity-40 t-absolute"></div>
            </div>

            <Swiper
                slidesPerView={40}
                spaceBetween={4}
                centeredSlides={true}
                className="t-w-full t-select-none  "
                onActiveIndexChange={(s: SwiperType) => {
                    onChange(300 - s.activeIndex);
                }}
                initialSlide={300 - active}
            >
                {weightList.map((i) => (
                    <SwiperSlide
                        className={classNames([
                            "t-flex t-flex-col t-justify-center t-h-20",
                        ])}
                        key={i.weight}
                    >
                        {i.uiType === "round10" && (
                            <div className="t-relative t-h-10 t-w-14 ">
                                <div className="t-bg-[#474747] t-h-8  t-w-0.5 t-absolute -t-top-4"></div>
                                <div className=" t-absolute t-flex t-w-20 t-justify-center t-bottom-0 t-left-10  ">
                                    {i.weight}
                                </div>
                            </div>
                        )}
                        {i.uiType === "round5" && (
                            <div className="t-bg-[#e0e0e0] t-absolute t-top-1 t-h-4 t-w-0.5"></div>
                        )}
                        {i.uiType === "notRound" && (
                            <div className="t-bg-[#e0e0e0] t-absolute t-top-1 t-h-2 t-w-0.5"></div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderWeight;
