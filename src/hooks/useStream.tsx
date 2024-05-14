import { fetchSSE } from "@/utils/fetch-sse";
import useAppSelector from "./store/useAppSelector";
import { selectTokenWidget } from "@/features/widget/widget.selectors";

import useAppDispatch from "./store/useAppDispatch";
import { chatActions } from "@/features/chat/chat.slice";
import { useRef } from "react";
import { StreamI } from "@/types/controller-types/chat.types";

const STATIC_ERROR_MESSAGE: Record<string, string> = {
    "درخواست سازمانی شما بیش از حد مجاز میباشد": "error",
    "مشکل دسترسی بوجود آمده است لطفا با پشتیبان تماس بگیرید": "error",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStream = (onStart?: () => void, onEnd?: () => void) => {
    const token = useAppSelector(selectTokenWidget);

    const dispatch = useAppDispatch();
    const isCreated = useRef(false);
    const postChat = async (
        text: string,
        groupId: string,
        currentFlowId?: string,
        selectedFlowId?: string
    ) => {
        dispatch(chatActions.setIsLoadingPostChat(true));
        fetchSSE({
            url: import.meta.env.VITE_BASE_URL + "/General/Chat",
            options: {
                method: "POST",

                headers: {
                    Authorization: "Bearer " + token,
                    "content-type": "application/json",
                },

                body: JSON.stringify({
                    text: text,
                    groupId,
                    ...(currentFlowId
                        ? {
                              currentFlowId,
                              selectedFlowId,
                          }
                        : {}),
                }),

                signal: null,

                onMessage: (data: StreamI) => {
                    // console.log(data);
                    // when user very much call api
                    if (STATIC_ERROR_MESSAGE[data?.Content]) {
                        dispatch(
                            chatActions.addMessage({
                                createdOn: new Date().toISOString(),
                                fileUrl: "",
                                fromFullname: "",
                                fromId: data.Id,
                                id: Math.random().toString(),
                                group: "",
                                message: data.Content,
                                options: null,
                            })
                        );
                        dispatch(chatActions.setIsLoadingPostChat(false));

                        return;
                    }
                    if (isCreated.current === false) {
                        dispatch(chatActions.setIsStreaming(true));
                        dispatch(chatActions.setIsLoadingPostChat(false));
                        onStart && onStart();
                        dispatch(
                            chatActions.addMessage({
                                createdOn: new Date().toISOString(),
                                fileUrl: "",
                                fromFullname: "",
                                fromId: data.Id,
                                id: Math.random().toString(),
                                group: "",
                                message: data.Content,
                                options: null,
                            })
                        );
                        isCreated.current = true;
                        return;
                    }
                    if (data.Content === null) {
                        isCreated.current = false;
                        dispatch(chatActions.setIsStreaming(false));
                        onEnd && onEnd();
                        return;
                    }

                    dispatch(chatActions.streamMessage(data.Content));
                },
                onClose: () => {
                    isCreated.current = false;
                    dispatch(chatActions.setIsStreaming(false));
                    onEnd && onEnd();
                    return;
                },
            },
        });
    };
    return {
        postChat,
    };
};

export default useStream;
