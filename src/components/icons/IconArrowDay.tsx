import { FC } from "react";

const IconArrowDay: FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8.33473 5.57668L12.7578 9.99977L8.33473 14.4229L7.74498 13.8331L11.5783 9.99977L7.74498 6.16643L8.33473 5.57668Z"
                fill="#5DB075"
            />
        </svg>
    );
};

export default IconArrowDay;
