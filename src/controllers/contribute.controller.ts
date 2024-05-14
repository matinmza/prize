import api from "@/app/server";
import { HttpResponseI } from "@/types/http.types";

import { ContributeDts } from "@/dtos/step.dto";
import { ContributeI } from "@/types/controller-types/contribute.types";
import { toastApi } from "@/utils/shared/shared-methods";

export const contributeController = api.injectEndpoints({
    endpoints: (builder) => ({
        postContribute: builder.mutation<
            HttpResponseI<ContributeI>,
            ContributeDts
        >({
            query: (dto) => ({
                url: "/General/Contribute",
                body: { ...dto },
                method: "POST",
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
            invalidatesTags: ["User"],
        }),
        getContribute: builder.query<HttpResponseI<ContributeI>, string>({
            query: (contributeId) => ({
                url: "/General/Contribute/" + contributeId,
                method: "GET",
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        getContributeByPlanId: builder.query<
            HttpResponseI<ContributeI>,
            string
        >({
            query: (planId) => ({
                url: "/General/Contribute/Plan/" + planId,
                method: "GET",
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const {
    usePostContributeMutation,
    useGetContributeQuery,
    useLazyGetContributeQuery,
    useLazyGetContributeByPlanIdQuery,
    useGetContributeByPlanIdQuery,
} = contributeController;
