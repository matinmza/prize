import { RootState } from "@/types/store.types";
import { handleGetToken } from "@/utils/local-storage";
import {
    BaseQueryApi,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
// import { Mutex } from "async-mutex";

// create a new mutex
// const mutex = new Mutex();
export interface CustomErrorT {
    status: "CUSTOM_ERROR";
    data?: {
        message: string;
    };
    error: string;
}
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (header, { getState }) => {
        const state = getState() as RootState;
        const widgetToken = state.widget.token;
        if (widgetToken) {
            header.set("Authorization", `Bearer ${widgetToken}`);
        } else {
            const token = handleGetToken();
            if (token) {
                header.set("Authorization", `Bearer ${token}`);
            }
        }
        return header;
    },
});

// @ts-expect-error: Unreachable code error
const baseQueryWithRath: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // Wait until the mutex is available without locking it
    // await mutex.waitForUnlock();
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error?.status === 401) {
        const onClose = (api.getState() as RootState).widget.onClose;
        onClose();
        window.location.reload();

        // if (!mutex.isLocked()) {
        //     const release = await mutex.acquire();
        //     try {
        //         const refreshResult = await baseQuery(
        //             "/refreshToken",
        //             api,
        //             extraOptions
        //         );
        //         if (refreshResult.data) {
        //             // api.dispatch(tokenReceived(refreshResult.data));
        //             // Retry the initial query
        //             // result = await baseQuery(args, api, extraOptions);
        //         } else {
        //             // api.dispatch(loggedOut());
        //         }
        //     } finally {
        //         // Release must be called once the mutex should be released again.
        //         release();
        //     }
        // } else {
        //     // Wait until the mutex is available without locking it
        //     await mutex.waitForUnlock();
        //     result = await baseQuery(args, api, extraOptions);
        // }
    }
    return result;
};
const api = createApi({
    reducerPath: "apiSlice",
    baseQuery: baseQueryWithRath as BaseQueryFn<
        string | FetchArgs,
        unknown,
        CustomErrorT
    >,
    tagTypes: ["User"],
    endpoints: () => ({}),
});

export default api;
