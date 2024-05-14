import { useEffect } from "react";

const useLockScroll = () => {
    useEffect(() => {
        document.body.classList.add("t-touch-none");
        return () => {
            document.body.classList.remove("t-touch-none");
        };
    }, []);
    return null;
};

export default useLockScroll;
