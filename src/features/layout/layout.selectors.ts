import { RootState } from "../../types/store.types";
export const selectTitleLayout = (state: RootState) => state.layout.title;
export const selectOnBackLayout = (state: RootState) => state.layout.onBack;
export const selectLogoLayout = (state: RootState) => state.layout.logo;
export const selectPhoneLayout = (state: RootState) => state.layout.phone;

export const selectShowHeaderLayout = (state: RootState) =>
    state.layout.showHeader;
