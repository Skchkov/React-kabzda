import React, { useEffect, useState } from "react";
import { AnalogClokView } from "./AnalogClockView";
import { DigitalClokView } from "./DigitalClockView";

type PropsType = {
    mode?: "digital" | "analog";
};

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

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClokView date={date} />;
            break;
        case "digital":
        default:
            view = <DigitalClokView date={date} />;
    }

    return <div>{view}</div>;
};

export type ClockViewPropsType = {
    date: Date;
};
