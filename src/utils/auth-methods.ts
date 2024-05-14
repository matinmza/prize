import { handleGetToken, handleSetToken } from "./local-storage";

export const checkAuth = (): boolean => {
    const token = handleGetToken();
    if (token) {
        return true;
    }
    return false;
};

export const logout = (callBack: () => void) => {
    handleSetToken("");
    callBack();
};
