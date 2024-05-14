import api from "@/app/server";
import { HttpListResponseI, HttpResponseI } from "@/types/http.types";

import { toastApi } from "@/utils/shared/shared-methods";

import { BankI } from "@/types/controller-types/bank.types";
import { PaymentDto } from "@/dtos/bank.dto";

export const bankController = api.injectEndpoints({
    endpoints: (builder) => ({
        getBanks: builder.query<HttpListResponseI<BankI>, null>({
            query: () => ({
                url: "/General/Bank",
                method: "GET",
                params: {
                    Size: 40,
                    Page: 1,
                    Sort: "Default",
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        getPayment: builder.query<HttpResponseI<string>, PaymentDto>({
            query: (dto) => ({
                url: "/General/Payment",
                method: "GET",
                params: {
                    ...dto,
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { useGetBanksQuery, useLazyGetPaymentQuery } = bankController;
