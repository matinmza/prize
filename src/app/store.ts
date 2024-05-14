import { widgetReducer } from "@/features/widget/widget.slice";

import { layoutReducer } from "@/features/layout/layout.slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./server";
import { stepsReducer } from "@/features/steps/steps.slice";
import { chatReducer } from "@/features/chat/chat.slice";
import { signalReducer } from "@/features/signal/signal.slice";

const store = configureStore({
    devTools: true,
    reducer: {
        layout: layoutReducer,
        widget: widgetReducer,
        steps: stepsReducer,
        chat: chatReducer,
        signal: signalReducer,

        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});
setupListeners(store.dispatch);
export default store;
