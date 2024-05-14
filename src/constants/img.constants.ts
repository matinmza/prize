const url = import.meta.url;
const regex = /https?:\/\/[^\/]+/g;
const match = url.match(regex);
const baseUrl = match ? match[0] : "";
export const IMG_CONSTANTS = {
    LOGO: baseUrl + "/images/selfit-logo.svg",
    LOGO_WHITE: baseUrl + "/images/selfit-logo-white.svg",
    SLIDER_HEIGHT: baseUrl + "/images/slider/man-height.svg",
    SLIDER_WEIGHT: baseUrl + "/images/slider/man-height.svg",
    DYNAMIC_CARD_BG: baseUrl + "/images/card-dynamic-bg.svg",
    ROBOT_AVATAR: baseUrl + "/images/robot-chat.svg",
    OFFER_BG: baseUrl + "/images/offer-red-bg.svg",
    CONTACT_ROBOT: baseUrl + "/images/contact-robot.svg",
    DASHBOARD_GOAL_IMAGE: baseUrl + "/images/goal-dashboard-image.svg",
    DASHBOARD_NEW_PAN: baseUrl + "/images/new-plan.svg",
    DASHBOARD_NEW_PLAN: baseUrl + "/images/ai-bg.png",
};
