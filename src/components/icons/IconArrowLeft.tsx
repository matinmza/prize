import { FC } from "react";

const IconArrowLeft: FC<{ color?: "white" }> = ({ color }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.5013 4.16699L6.66797 10.0003L12.5013 15.8337"
                stroke={color ? "var(--white-1)" : "#676767"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconArrowLeft;
