import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const PanelLayout: FC = () => {
    return (
        <div>
            <Header />1 123
            <Outlet />
        </div>
    );
};

export default PanelLayout;
