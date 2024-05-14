export interface LinkI {
    id: string;
    title: string;
    priority: 1;
    linkUrl: string;
    fileUrl: string;
    createdOn: string;
}

export interface MessageI {
    id: string;
    message: string;
    fromId: string;
    fromFullname: string;
    group: string;
    fileUrl: string;
    createdOn: string;
    options: DynamicAnswerButtonsI | null;
}

export interface StreamI {
    Content: string;
    Id: string;
    // content?: string;
}

export interface TrackingItemI {
    id: string;
    contributeId: string;
    goalTrackingItem: {
        goal: string | null;
        goalId: string;
        title: string;
        fileUrl: string;
        template: string;
        id: string;
        createdOn: string;
        modifiedOn: string | null;
        createdBy: string | null;
        modifiedBy: string | null;
        isDeleted: boolean;
    };
    value: number;
    createdOn: string;
    min?: number;
    max?: number;
}

export interface DynamicAnswerButtonsI {
    currentFlowId: string;
    childFlow: {
        flowId: string;
        subjectMessage: string;
        hasInput: boolean;
    }[];
}
