import api from "@/app/server";
import { HttpResponseI } from "@/types/http.types";

import { toastApi } from "@/utils/shared/shared-methods";
import { InvoiceI } from "@/types/controller-types/invoice.types";

export const invoiceController = api.injectEndpoints({
    endpoints: (builder) => ({
        postInvoice: builder.mutation<HttpResponseI<InvoiceI>, string>({
            query: (dto) => ({
                url: "/General/Invoice",
                method: "POST",
                body: { packageId: dto },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { usePostInvoiceMutation } = invoiceController;
