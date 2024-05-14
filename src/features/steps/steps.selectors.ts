import { RootState } from "../../types/store.types";
export const selectGoalId = (state: RootState) => state.steps.goalId;
export const selectPlanId = (state: RootState) => state.steps.planId;
export const selectFlowQuestions = (state: RootState) =>
    state.steps.flowQuestions;

export const selectTotalStep = (state: RootState) =>
    state.steps.flowQuestions.length;

export const selectFlowStep = (state: RootState) => state.steps.step;
