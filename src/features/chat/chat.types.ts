import {
    DynamicAnswerButtonsI,
    MessageI,
    TrackingItemI,
} from "@/types/controller-types/chat.types";

export interface ChatStateI {
    previousDay: number;
    messages: MessageI[];
    isStreaming: boolean;
    isLoadingPostChat: boolean;
    dynamicData: TrackingItemI[];
    dynamicAnswerButton?: DynamicAnswerButtonsI;
    dynamicAnswer: string[];
}
