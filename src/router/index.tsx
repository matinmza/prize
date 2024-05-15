import { Navigate, createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/components/layout/auth";
import PanelLayout from "@/components/layout/panel";
import LoginPage from "@/pages/login-page";
import PanelPage from "@/pages/panel-page";
import GuardRoute from "@/components/guard/guard-route";

const router = createBrowserRouter([
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: (
                    <GuardRoute
                        Component={<LoginPage />}
                        auth={false}
                        redirectTo="/"
                    ></GuardRoute>
                ),
            },
        ],
    },
    {
        path: "/",
        element: <PanelLayout />,
        children: [
            {
                path: "/",
                element: (
                    <GuardRoute
                        Component={<PanelPage />}
                        auth={false}
                        redirectTo="/auth/login"
                    ></GuardRoute>
                ),
            },
        ],
    },
    { path: "*", element: <Navigate to="/" /> },
]);

export default router;
