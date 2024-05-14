export interface WidgetProps {
    token: string;
    applicationId: string;
    onClose: () => void;
    logo: string;
    logoBot: string;
    onBackToApp?: () => void;
    onRefreshToken?: () => void;
}
