import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const AuthLayout: FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default AuthLayout;
