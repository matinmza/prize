import { Input } from "@/components/ui/input";
import { useState, Fragment, useRef, useEffect } from "react";

type OtpInputProps = {
    length: number;
    // otp: number;
    onOtpChange: (otp: number) => void;
};

let currentOtpIndex: number = 0;

const OtpInput = ({ length, onOtpChange }: OtpInputProps): JSX.Element => {
    let otp = undefined;
    otp;
    const [tempOtp, setTempOtp] = useState<string[]>(
        new Array(length || 6).fill("")
    );
    const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnchange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOtp: string[] = [...tempOtp];
        newOtp[currentOtpIndex] = value.substring(value.length - 1);

        if (!value) setActiveOtpIndex(currentOtpIndex - 1);
        else setActiveOtpIndex(currentOtpIndex + 1);

        setTempOtp(newOtp);
        onOtpChange(
            isNaN(parseInt(newOtp.join(""))) ? 0 : parseInt(newOtp.join(""))
        );
        otp = isNaN(parseInt(tempOtp.join("")))
            ? 0
            : parseInt(tempOtp.join(""));
    };

    const handleOnKeyDown = (
        { key }: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        currentOtpIndex = index;
        if (key === "Backspace") {
            setActiveOtpIndex(currentOtpIndex - 1);
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOtpIndex]);

    return (
        <div className="t-w-[232px] t-mx-auto t-flex t-justify-center">
            <div className="t-flex t-items-center t-justify-center t-gap-x-2  t-w-full t-ltr">
                {tempOtp.map((_, index) => {
                    return (
                        <Fragment key={index}>
                            <Input
                                ref={index === activeOtpIndex ? inputRef : null}
                                onChange={handleOnchange}
                                onKeyDown={(e) => handleOnKeyDown(e, index)}
                                className="t-w-8 t-h-8 t-p-0  t-text-center  t-border-0 t-border-b t-rounded-none"
                                type="number"
                                // placeholder={(index + 1).toString()}
                                value={tempOtp[index]}
                            />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default OtpInput;
