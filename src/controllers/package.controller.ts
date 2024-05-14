import api from "@/app/server";
import { HttpListResponseI } from "@/types/http.types";

import { toastApi } from "@/utils/shared/shared-methods";
import { PackageI } from "@/types/controller-types/package.types";

export const packageController = api.injectEndpoints({
    endpoints: (builder) => ({
        getPackage: builder.query<HttpListResponseI<PackageI>, null>({
            query: () => ({
                url: "/General/Package",
                method: "GET",
                params: {
                    Size: 40,
                    Page: 1,
                    Sort: "Default",
                    type: "Subscription",
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { useGetPackageQuery } = packageController;
