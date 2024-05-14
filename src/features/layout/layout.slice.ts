import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LayoutStateI } from "./layout.types";

export const initialLayoutState: LayoutStateI = {
    title: "test",
    logo: "/images/selfit-logo.svg",
    onBack: undefined,
    showHeader: true,
    phone: "021555555",
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState: initialLayoutState,
    reducers: {
        reset: (state) => {
            state.title = initialLayoutState.title;
            state.onBack = initialLayoutState.onBack;
            state.logo = initialLayoutState.logo;
            state.showHeader = initialLayoutState.showHeader;
            state.phone = initialLayoutState.phone;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setOnBack: (state, action: PayloadAction<() => void | undefined>) => {
            state.onBack = action.payload;
        },
        setLogo: (state, action: PayloadAction<string>) => {
            state.logo = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setShowHeader: (state, action: PayloadAction<boolean>) => {
            state.showHeader = action.payload;
        },
    },
});

export const layoutActions = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
