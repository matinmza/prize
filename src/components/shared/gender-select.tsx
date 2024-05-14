import { FC } from "react";
import IconRadioChecked from "../icons/IconRadioChecked";

import IconRadioNotChecked from "../icons/IconRadioNotChecked";

const GenderSelect: FC<{
    value: "Female" | "Male";
    onChange: (val: "Female" | "Male") => void;
}> = ({ value, onChange }) => {
    const active = " t-bg-green-3";
    const notActive = " t-bg-[#F2F2F2]";
    const default1 =
        " t-p-8 t-border t-flex t-flex-col t-gap-6  t-justify-center t-items-center t-rounded-sm";
    return (
        <>
            <h3 className="t-font-regular-12 t-mb-2 t-text-center">
                جنسیت خود را انتخاب کنید
            </h3>

            <div className="t-flex t-gap-4 t-w-full t-justify-between ">
                <div
                    className={
                        default1 + (value === "Male" ? active : notActive)
                    }
                    onClick={() => {
                        onChange("Male");
                    }}
                >
                    <img
                        src="/images/gender-male.svg"
                        className={value === "Female" ? "t-opacity-35" : ""}
                    />
                    <div>مرد</div>
                    {value === "Male" ? (
                        <IconRadioChecked />
                    ) : (
                        <IconRadioNotChecked />
                    )}
                </div>
                <div
                    className={
                        default1 + (value === "Female" ? active : notActive)
                    }
                    onClick={() => {
                        onChange("Female");
                    }}
                >
                    <img
                        src="/images/gender-female.svg"
                        className={value === "Male" ? "t-opacity-35" : ""}
                    />
                    <span>زن</span>
                    <span>
                        {value === "Female" ? (
                            <IconRadioChecked />
                        ) : (
                            <IconRadioNotChecked />
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};

export default GenderSelect;
