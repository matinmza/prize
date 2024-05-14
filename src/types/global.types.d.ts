import * as React from "react";
React;

export interface SelAssistantI {
    applicationId: string;
    token: string;
    onClose: () => void;
    logo?: string;
    logoBot?: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "ai-assistant": {
                token: string;
            };
        }
    }
    interface Window {
        selAssistant: SelAssistantI;
        mountSelAssistantWidget?: () => void;
    }
}

interface matin {
    name: "x";
}
