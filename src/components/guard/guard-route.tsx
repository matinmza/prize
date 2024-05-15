import { checkAuth } from "@/utils/auth-methods";

import { FC } from "react";
import { Navigate } from "react-router-dom";

interface PropI {
    Component: JSX.Element;
    auth?: boolean;
    redirectTo?: string;
}
const GuardRoute: FC<PropI> = ({
    Component,
    auth,
    redirectTo = "/auth/login",
}) => {
    const userIsAuthenticated = checkAuth();

    // when user is authenticated and page need user authenticated
    if (auth && userIsAuthenticated) {
        return Component;
    }
    // when user is authenticated but page need user not authenticated
    if (auth === false && userIsAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }
    // when user is not authenticated and page not need user authenticated
    if (!auth) {
        return Component;
    }
    return <Navigate to={redirectTo} replace />;
};

export default GuardRoute;
