import api from "@/app/server";
import { HttpResponseI } from "@/types/http.types";
import { UserI } from "@/types/controller-types/user.types";
import { putUserDto } from "@/dtos/user.dto";
import { toastApi } from "@/utils/shared/shared-methods";

export const userController = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<HttpResponseI<UserI>, null>({
            query: () => ({
                url: "/General/User",
                method: "GET",
            }),
            providesTags: ["User"],
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        putUser: builder.mutation<
            HttpResponseI<{ message: string }>,
            putUserDto
        >({
            query: (dto) => ({
                url: "/General/User",
                body: { ...dto },
                method: "PUT",
            }),
            invalidatesTags: ["User"],
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { useGetUserQuery, useLazyGetUserQuery, usePutUserMutation } =
    userController;
