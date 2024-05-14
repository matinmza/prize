export interface WidgetStateI {
    token: string;
    onClose: () => void;
    applicationId: string;
    logo: string;
    logoBot: string;
    onBackToApp?: () => void;
    onRefreshToken?: () => void;
}
