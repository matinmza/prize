import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WidgetStateI } from "./widget.types";
import { WidgetProps } from "@/types/widget-types/widget.types";
import { IMG_CONSTANTS } from "@/constants/img.constants";

export const initialWidgetState: WidgetStateI = {
    applicationId: "",
    onClose: () => {},
    token: "",
    logo: "",
    logoBot: IMG_CONSTANTS.ROBOT_AVATAR,
};

export const widgetSlice = createSlice({
    name: "widget",
    initialState: initialWidgetState,
    reducers: {
        reset: (state) => {
            state.applicationId = initialWidgetState.applicationId;
            state.onClose = initialWidgetState.onClose;
            state.token = initialWidgetState.token;
            state.logo = initialWidgetState.logo;
            state.logoBot = initialWidgetState.logoBot;
        },
        setInitialValue: (state, action: PayloadAction<WidgetProps>) => {
            state.applicationId = action.payload.applicationId;
            state.onClose = action.payload.onClose;
            state.onBackToApp = action.payload.onBackToApp;
            state.onRefreshToken = action.payload.onRefreshToken;
            state.token = action.payload.token;
            state.logoBot = action.payload.logoBot;
            state.logo = action.payload.logo;
        },
    },
});

export const widgetActions = widgetSlice.actions;
export const widgetReducer = widgetSlice.reducer;
