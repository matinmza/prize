import { QuestionI } from "@/types/steps-types/steps-types";

export interface StepStateI {
    goalId: string;
    planId: string;
    flowQuestions: QuestionI[];
    step: number;
    premiumDay: number | null;
}
