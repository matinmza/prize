import { handleGetToken, handleRemoveToken } from "./local-storage";

export const initWidget = (onClose: () => void) => {
    const tokenValue = handleGetToken();

    if (tokenValue) {
        window.selAssistant = {
            applicationId: "268be311-0747-ee11-92c5-0050568129d7",
            token: tokenValue,
            onClose: () => {
                handleRemoveToken();

                onClose();
            },
            logo: "/images/selfit-logo.svg",
        };

        const script = document.createElement("script");
        script.id = "selAssistant-script";
        script.type = "text/javascript";
        script.src = "./dist/selAssistant_widget.js";
        if (!document.head.contains(script)) document.head.appendChild(script);
        else {
            if (window.mountSelAssistantWidget) {
                window.mountSelAssistantWidget();
            }
        }
    } else {
        return;
    }
};
