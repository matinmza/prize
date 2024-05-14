import { RootState } from "../../types/store.types";
export const selectConnection = (state: RootState) => state.signal.connection;
