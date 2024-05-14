// packages
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components
import router from "@/router";
import store from "@/app/store";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "./components/ui/toaster";

import "../app/globals.css";

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Provider store={store}>
                <RouterProvider router={router} />

                <Toaster />
            </Provider>
        </ThemeProvider>
    );
}

export default App;
