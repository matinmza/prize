import {
    selectLogoLayout,
    selectOnBackLayout,
    selectPhoneLayout,
    selectShowHeaderLayout,
    selectTitleLayout,
} from "@/features/layout/layout.selectors";
import useAppSelector from "./store/useAppSelector";
import useAppDispatch from "./store/useAppDispatch";
import { layoutActions } from "@/features/layout/layout.slice";
import { useEffect } from "react";

type useDynamicLayoutT = (initial?: {
    logo?: string;
    phone?: string;
    title?: string;
    onBack?: () => void;
    revalidate?: boolean;
    showHeader?: boolean;
}) => {
    title?: string;
    logo?: string;
    phone?: string;
    onBack?: () => void;
    showHeader: boolean;
    setLogo: (val: string) => void;
    setPhone: (val: string) => void;
    setTitle: (val: string) => void;
    setShowHeader: (val: boolean) => void;
    setOnBack: (val: () => void) => void;
};

const useDynamicLayout: useDynamicLayoutT = (initial) => {
    const title = useAppSelector(selectTitleLayout);
    const logo = useAppSelector(selectLogoLayout);
    const phone = useAppSelector(selectPhoneLayout);

    const showHeader = useAppSelector(selectShowHeaderLayout);

    const onBackSelector = useAppSelector(selectOnBackLayout);

    const dispatch = useAppDispatch();

    const setOnBack = (val: () => void) => {
        dispatch(layoutActions.setOnBack(val));
    };
    const setTitle = (val: string) => {
        dispatch(layoutActions.setTitle(val));
    };
    const setPhone = (val: string) => {
        dispatch(layoutActions.setPhone(val));
    };
    const setLogo = (val: string) => {
        dispatch(layoutActions.setLogo(val));
    };
    const setShowHeader = (val: boolean) => {
        dispatch(layoutActions.setShowHeader(val));
    };
    useEffect(() => {
        initial?.onBack && setOnBack(initial?.onBack);
    }, []);

    useEffect(() => {
        initial?.title && setTitle(initial?.title);
    }, [initial?.title]);

    useEffect(() => {
        initial?.logo && setTitle(initial?.logo);
    }, [initial?.logo]);

    useEffect(() => {
        initial?.phone && setPhone(initial?.phone);
    }, [initial?.phone]);

    useEffect(() => {
        if (typeof initial?.showHeader === "undefined") return;
        setShowHeader(Boolean(initial?.showHeader));
    }, [initial?.showHeader]);

    useEffect(() => {
        return () => {
            if (initial?.revalidate) {
                dispatch(layoutActions.reset());
            }
        };
    }, []);

    return {
        title,
        logo,
        onBack: onBackSelector,
        phone,
        setOnBack,
        setTitle,
        setLogo,
        showHeader,
        setShowHeader,
        setPhone,
    };
};

export default useDynamicLayout;
