import { WidgetProps } from "@/types/widget-types/widget.types";
import { useEffect } from "react";
import useAppDispatch from "./store/useAppDispatch";
import { widgetActions } from "@/features/widget/widget.slice";
import useAppSelector from "./store/useAppSelector";
import {
    selectApplicationIdWidget,
    selectTokenWidget,
} from "@/features/widget/widget.selectors";
import NoConfigAlert from "@/components/shared/no-config-alert";

export const useInitWidget = (initValue: WidgetProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(widgetActions.setInitialValue(initValue));
    }, []);
    const token = useAppSelector(selectTokenWidget);
    const applicationId = useAppSelector(selectApplicationIdWidget);

    if (!token || !applicationId) return <NoConfigAlert />;
    return null;
};
