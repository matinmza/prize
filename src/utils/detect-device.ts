import { BrowserE, DeviceE } from "@/types/device.types";

const detectDevice = (): {
    device: DeviceE;
    browser: BrowserE;
} => ({
    device: (() => {
        switch (true) {
            case window.navigator.userAgent.includes("iPhone"):
                return DeviceE.IPhone;
            case window.navigator.userAgent.includes("Android"):
                return DeviceE.Android;
            default:
                return DeviceE.UNKNOWN;
        }
    })(),
    browser: (() => {
        switch (true) {
            case testUserAgent(/edg/i):
                return BrowserE.EDGE;
            case testUserAgent(/trident/i):
                return BrowserE.INTERNET_EXPLORER;
            case testUserAgent(/firefox|fxios/i):
                return BrowserE.FIRE_FOX;
            case testUserAgent(/opr\//i):
                return BrowserE.OPERA;
            case testUserAgent(/ucbrowser/i):
                return BrowserE.UC_BROWSER;
            case testUserAgent(/samsungbrowser/i):
                return BrowserE.SAMSUNG_BROWSER;
            case testUserAgent(/chrome|chromium|crios/i):
                return BrowserE.CHROME;
            case testUserAgent(/safari/i):
                return BrowserE.SAFARI;
            default:
                return BrowserE.UNKNOWN;
        }
    })(),
});

const testUserAgent = (regexp: RegExp): boolean =>
    regexp.test(window.navigator.userAgent);

export default detectDevice;
