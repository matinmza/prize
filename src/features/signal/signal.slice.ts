import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignalStateI } from "./signal.types";

import { HubConnection } from "@microsoft/signalr";

export const initialSignalState: SignalStateI = {
    connection: null,
};

export const signalSlice = createSlice({
    name: "signalR",
    initialState: initialSignalState,
    reducers: {
        setConnection: (state, action: PayloadAction<HubConnection | null>) => {
            state.connection = action.payload;
        },
    },
});

export const signalActions = signalSlice.actions;
export const signalReducer = signalSlice.reducer;
