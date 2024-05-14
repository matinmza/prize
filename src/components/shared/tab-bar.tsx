import { FC, PropsWithChildren } from "react";

const TabBar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className="t-h-14"></div>
            <div className="t-fixed t-bottom-0 t-w-full t-bg-white-1 t-left-0 t-right-0 t-py-4  t-px-5 t-z-50">
                {children}
            </div>
        </>
    );
};

export default TabBar;
