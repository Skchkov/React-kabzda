import { useEffect, useState } from "react";

type PropsType = {};

function toDigitalClock(number: number) {
    return number < 10 ? "0" + number : number;
}

export const Clock = (props: PropsType) => {
    console.log("tick");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <span>{toDigitalClock(date.getHours())}</span>:
            <span>{toDigitalClock(date.getMinutes())}</span>:
            <span>{toDigitalClock(date.getSeconds())}</span>
        </div>
    );
};
