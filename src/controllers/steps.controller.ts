import api from "@/app/server";
import { HttpListResponseI } from "@/types/http.types";
import { FlowI, GoalI, PlanI } from "@/types/controller-types/steps.types";
import { toastApi } from "@/utils/shared/shared-methods";

export const stepsController = api.injectEndpoints({
    endpoints: (builder) => ({
        getPlans: builder.query<HttpListResponseI<PlanI, string>, null>({
            query: () => ({
                url: "/General/Plan",
                method: "GET",
                params: {
                    Size: 10,
                    Page: 1,
                    Sort: "Default",
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        getGoals: builder.query<HttpListResponseI<GoalI, string>, string>({
            query: (planId) => ({
                url: `/General/Goal/${planId}`,
                method: "GET",
                params: {
                    Size: 10,
                    Page: 1,
                    Sort: "Default",
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
        getFlow: builder.query<HttpListResponseI<FlowI>, string>({
            query: (goalId) => ({
                url: `/General/Flow/${goalId}`,
                method: "GET",
                params: {
                    Size: 50,
                    Page: 1,
                    Sort: "Default",
                },
            }),
            transformErrorResponse: (error) => {
                toastApi(error);
                return error;
            },
        }),
    }),
});

export const { useGetPlansQuery, useGetGoalsQuery, useGetFlowQuery } =
    stepsController;
