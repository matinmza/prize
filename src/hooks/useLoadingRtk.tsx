import useAppSelector from "./store/useAppSelector";
import { QueryStatus } from "@reduxjs/toolkit/query";

const useLoadingRtk = (queryName: string) => {
    const isLoading = useAppSelector((state) => {
        return Object.values(state.apiSlice.queries).some((query) => {
            if (
                query?.endpointName === queryName &&
                query?.status === QueryStatus.pending
            ) {
                return true;
            }
            return false;
        });
    });
    return isLoading;
};

export default useLoadingRtk;
