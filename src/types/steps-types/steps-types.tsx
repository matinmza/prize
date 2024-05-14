import { FC } from "react";
import { FlowI } from "../controller-types/steps.types";
export type RenderComponentPropsT = FC<{
    // question: QuestionI;
}>;

export interface AnswerI {
    stepId: string;
    inputName: string;
    value: string;
}

export interface QuestionI extends FlowI {
    userValue: string;
}

export interface DetailIFinalSubmit {
    None: QuestionI[];
    PersonalInformation: QuestionI[];
    PlanInformation: QuestionI[];
    TimeInformation: QuestionI[];
    AssistantInformation: QuestionI[];
}
