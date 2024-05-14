import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const LoginLayout: FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default LoginLayout;
