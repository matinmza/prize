import { ThemeProvider } from "@/components/theme/theme-provider";

import "../app/globals.css";
import { FC, useEffect, useState } from "react";
// لیست
import { names } from "./list";
// شماره برنده که از ۰ شروع میشه
const indexWinner = 10;
// سرعت
const speed = 100;
// تعداد دور
const dor = 0;

function App() {
    const [winner, setWinner] = useState<null | number>(null);
    const [activeNumber, setActiveNumber] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveNumber((cur) => {
                if (cur < names.length) {
                    return cur + 1;
                } else {
                    return 0;
                }
            });
        }, speed);
        setTimeout(() => {
            clearInterval(id);
            setWinner(indexWinner);
        }, dor * (speed * names.length) + speed * indexWinner);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="grid grid-cols-12 gap-1 m-2">
                {names.map((item, index) => (
                    <div key={item} className="col-span-4 lg:col-span-2 h-8">
                        <Card
                            loading={activeNumber === index && !winner}
                            isWinner={winner === index}
                            title={item}
                        />
                    </div>
                ))}
            </div>
        </ThemeProvider>
    );
}
const Card: FC<{ title: string; loading: boolean; isWinner: boolean }> = ({
    title,
    loading,
    isWinner,
}) => {
    return (
        <div
            className={`w-full h-full flex items-center text-sm shadow shadow-green-200 justify-center  transition  rounded-md ${
                isWinner
                    ? "bg-green-400 scale-105 animate-bounce duration-700"
                    : "duration-300"
            } ${loading ? "bg-green-300" : ""}`}
        >
            {title}
        </div>
    );
};
export default App;
