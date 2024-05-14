export type LocalStorageValueT = "ON_BOARDING" | "TOKEN";

export const getLocalStorage = <T>(key: LocalStorageValueT): T | null => {
    try {
        const value = localStorage.getItem(key) as string;
        const localStorageParse = JSON.parse(value) as T;
        return localStorageParse;
    } catch (error) {
        return null;
    }
};

export const setLocalStorage = (
    key: LocalStorageValueT,
    value: object | string | number | boolean
): boolean => {
    try {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
        return true;
    } catch (error) {
        return false;
    }
};

export const removeLocalStorage = (key: LocalStorageValueT): boolean => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        return false;
    }
};

export const handleSetOnBoarding = () => setLocalStorage("ON_BOARDING", true);
export const isSeenOnBoarding = () => getLocalStorage<boolean>("ON_BOARDING");

// token
export const handleSetToken = (token: string) =>
    setLocalStorage("TOKEN", token);
export const handleGetToken = () => getLocalStorage<string>("TOKEN");
export const handleRemoveToken = () => removeLocalStorage("TOKEN");
