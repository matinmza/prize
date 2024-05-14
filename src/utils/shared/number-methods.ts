export const toMoney = (
    num: number | string,
    withOutText?: boolean
): string => {
    const numCorrect = "" + num;
    let money = "";

    for (let i = numCorrect.length - 1; i >= 0; i--) {
        if ((numCorrect.length - i) % 3 || i === 0) {
            money = numCorrect[i] + money;
        } else {
            money = "," + numCorrect[i] + money;
        }
    }
    if (withOutText) {
        return money;
    }

    return money + " " + "تومان";
};
