import api from "@/app/server";
import { HttpListResponseI, HttpResponseI } from "@/types/http.types";
import { LinkI, MessageI } from "@/types/controller-types/chat.types";
import { MessageDto } from "@/dtos/chat.dto";
import { toastApi } from "@/utils/shared/shared-methods";

export const chatController = api.injectEndpoints({
    endpoints: (builder) => ({
        getMessage: builder.query<HttpListResponseI<MessageI>, MessageDto>({
            query: (dto) => ({
                url: `/General/Message/${dto.groupId}`,
                method: "GET",
                params: {
                    Size: 200,
                    Page: 1,
                    Sort: "Default",
                    previosDay: dto.previosDay,
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        getLink: builder.query<HttpListResponseI<LinkI>, null>({
            query: () => ({
                url: "/General/Link",
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
        postChat: builder.mutation<
            HttpResponseI<null>,
            { groupId: string; text: string }
        >({
            query: (dto) => ({
                url: "/General/Chat",
                body: { ...dto },
                method: "POST",
            }),
        }),
    }),
});

export const {
    useGetMessageQuery,
    useLazyGetMessageQuery,
    useGetLinkQuery,
    useLazyGetLinkQuery,
    usePostChatMutation,
} = chatController;
