import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatStateI } from "./chat.types";
import {
    DynamicAnswerButtonsI,
    MessageI,
    TrackingItemI,
} from "@/types/controller-types/chat.types";

export const initialStepsState: ChatStateI = {
    previousDay: 0,
    messages: [],
    isStreaming: false,
    isLoadingPostChat: false,
    dynamicData: [],
    dynamicAnswerButton: undefined,
    dynamicAnswer: [],
};

export const chatSlice = createSlice({
    name: "chats",
    initialState: initialStepsState,
    reducers: {
        setPreviousDay: (state, action: PayloadAction<number>) => {
            state.previousDay = action.payload;
        },
        initMessages: (state, action: PayloadAction<MessageI[]>) => {
            state.messages = action.payload;
        },
        addMessage: (state, action: PayloadAction<MessageI>) => {
            state.messages = [...state.messages, action.payload];
        },
        streamMessage: (state, action: PayloadAction<string>) => {
            const newArr: MessageI[] = state.messages;
            newArr[newArr.length - 1] = {
                ...newArr[newArr.length - 1],
                message: newArr[newArr.length - 1].message + action.payload,
            };
            state.messages = newArr;
        },
        setIsStreaming: (state, action: PayloadAction<boolean>) => {
            state.isStreaming = action.payload;
        },
        setIsLoadingPostChat: (state, action: PayloadAction<boolean>) => {
            state.isLoadingPostChat = action.payload;
        },
        setDynamicData: (state, action: PayloadAction<TrackingItemI[]>) => {
            state.dynamicData = action.payload;
        },
        setDynamicAnswer: (state, action: PayloadAction<string>) => {
            state.dynamicAnswer = [...state.dynamicAnswer, action.payload];
        },
        resetDynamicAnswer: (state) => {
            state.dynamicAnswer = [];
        },
        setDynamicAnswerButton: (
            state,
            action: PayloadAction<DynamicAnswerButtonsI | undefined>
        ) => {
            state.dynamicAnswerButton = action.payload;
        },
    },
});

export const chatActions = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
