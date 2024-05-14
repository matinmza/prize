import { RootState } from "../../types/store.types";
export const selectPreviousDay = (state: RootState) => state.chat.previousDay;
export const selectMessages = (state: RootState) => state.chat.messages;
export const selectIsStreaming = (state: RootState) => state.chat.isStreaming;
export const selectIsLoadingPostChat = (state: RootState) =>
    state.chat.isLoadingPostChat;
export const selectDynamicData = (state: RootState) => state.chat.dynamicData;
export const selectDynamicAnswer = (state: RootState) =>
    state.chat.dynamicAnswer;

export const selectDynamicAnswerButtonData = (state: RootState) =>
    state.chat.dynamicAnswerButton;
