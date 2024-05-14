import { checkAuth } from "@/utils/auth-methods";
import { isSeenOnBoarding } from "@/utils/local-storage";
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PropI {
    Component: JSX.Element;
    auth?: boolean;
    redirectTo?: string;
}
const GuardRoute: FC<PropI> = ({ Component, auth, redirectTo = "/login" }) => {
    const userIsAuthenticated = checkAuth();
    const location = useLocation();

    const isOnboardingPage = location.pathname === "/on-boarding";
    const userSeeOnboarding = isSeenOnBoarding();
    if (auth && userIsAuthenticated) {
        return Component;
    }
    // when user is authenticated but page need user not authenticated
    if (auth === false && userIsAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }
    // user must first see onBoarding before see login form
    if (
        auth === false &&
        !userIsAuthenticated &&
        !userSeeOnboarding &&
        !isOnboardingPage
    ) {
        return <Navigate to="/on-boarding" />;
    }

    if (!auth) {
        return Component;
    }
    return <Navigate to={redirectTo} replace />;
};

export default GuardRoute;
