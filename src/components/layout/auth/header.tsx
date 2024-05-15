import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC } from "react";

const Header: FC = () => {
    const { showHeader } = useDynamicLayout();

    if (!showHeader) return null;
    return (
        <div>
            <div className="t-h-14"></div>
        </div>
    );
};

export default Header;
