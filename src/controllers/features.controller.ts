import api from "@/app/server";
import { HttpResponseI } from "@/types/http.types";

import { ContributeI } from "@/types/controller-types/contribute.types";
import { toastApi } from "@/utils/shared/shared-methods";

export const featuresController = api.injectEndpoints({
    endpoints: (builder) => ({
        postFeature: builder.mutation<
            HttpResponseI<ContributeI>,
            {
                title: string;
                description: string;
            }
        >({
            query: (dto) => ({
                url: "/General/Feature",
                body: dto,
                method: "POST",
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { usePostFeatureMutation } = featuresController;
