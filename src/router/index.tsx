import PanelLayout from "@/components/layout/panel";
import PanelPage from "@/pages/panel-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <PanelLayout />,
        children: [
            {
                path: "/",
                element: <PanelPage />,
            },
        ],
    },
    // {
    //     path: "auth",
    //     element: <LoginLayout />,
    //     children: [
    //         {
    //             path: "/login",
    //             element: <LoginPage />,
    //         },
    //     ],
    // },

    // { path: "*", element: <Navigate to="/" /> },
]);

export default router;
