import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StepStateI } from "./steps.types";
import { QuestionI } from "@/types/steps-types/steps-types";

export const initialStepsState: StepStateI = {
    goalId: "",
    planId: "",
    flowQuestions: [],
    step: 0,
    premiumDay: null,
};

export const stepsSlice = createSlice({
    name: "steps",
    initialState: initialStepsState,
    reducers: {
        reset: (state) => {
            state.goalId = initialStepsState.goalId;
            state.planId = initialStepsState.planId;
            state.premiumDay = initialStepsState.premiumDay;
            state.flowQuestions = initialStepsState.flowQuestions;
            state.step = initialStepsState.step;
        },
        setPlanId: (state, action: PayloadAction<string>) => {
            state.planId = action.payload;
        },
        setGoalId: (state, action: PayloadAction<string>) => {
            state.goalId = action.payload;
        },
        setGoalPremiumDay: (state, action: PayloadAction<number | null>) => {
            state.premiumDay = action.payload;
        },
        setFlowQuestions: (state, action: PayloadAction<QuestionI[]>) => {
            state.flowQuestions = action.payload;
        },
        setAnswer: (state, action: PayloadAction<string>) => {
            const findData = state.flowQuestions[state.step];
            const newData: QuestionI = {
                ...findData,
                userValue: action.payload,
            };
            state.flowQuestions[state.step] = newData;
        },
        setNextStep: (state) => {
            state.step = state.step + 1;
        },
        setBackStep: (state) => {
            state.step = state.step - 1;
        },
    },
});

export const stepsActions = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
