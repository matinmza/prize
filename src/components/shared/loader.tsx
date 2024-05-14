import { STRING_GLOBAL } from "@/constants/string.constants";
import { SyncLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className=" t-bg-white-1 t-h-screen t-w-screen t-flex t-items-center t-justify-center t-flex-col t-gap-10">
            <SyncLoader size={14} color="var(--green-primary)" />
            <div className="t-text-green t-font-16-regular">
                {STRING_GLOBAL.PLEASE_WAIT}
            </div>
        </div>
    );
};

export default Loader;
