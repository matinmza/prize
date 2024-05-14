import { RootState } from "@/types/store.types";

export const selectApplicationIdWidget = (state: RootState) =>
    state.widget.applicationId;
export const selectTokenWidget = (state: RootState) => state.widget.token;
export const selectOnCloseWidget = (state: RootState) => state.widget.onClose;
export const selectOnBackToApp = (state: RootState) => state.widget.onBackToApp;
export const selectOnRefreshToken = (state: RootState) =>
    state.widget.onRefreshToken;
export const selectLogoBot = (state: RootState) => state.widget.logoBot;
export const selectLogo = (state: RootState) => state.widget.logo;
