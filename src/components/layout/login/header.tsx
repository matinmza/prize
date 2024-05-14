import IconBack from "@/components/icons/IconBack";
import IconHeadphone from "@/components/icons/IconHeadphone";
import { selectLogo } from "@/features/widget/widget.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";

import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC } from "react";

const Header: FC = () => {
    const { onBack, phone, showHeader } = useDynamicLayout();

    const logo = useAppSelector(selectLogo);

    if (!showHeader) return null;
    return (
        <div>
            <div className="t-h-14"></div>
            <div className="t-ltr t-bg-gray-7 t-fixed t-top-0 t-left-0 t-right-0 t-w-full t-z-50 t-h-[60px] t-flex t-items-center  t-px-5 t-justify-between">
                {onBack ? (
                    <button onClick={onBack}>
                        <IconBack />
                    </button>
                ) : (
                    <div></div>
                )}

                <img className="t-w-24 t-h-auto" src={logo} alt="logo" />
                <a href={"tel:" + phone}>
                    <IconHeadphone />
                </a>
            </div>
        </div>
    );
};

export default Header;
