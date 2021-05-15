import { ClockViewPropsType } from "./Clock";

export function toDigitalClock(number: number) {
    return number < 10 ? "0" + number : number;
}

export const DigitalClokView = (props: ClockViewPropsType) => {
    return (
        <div>
            <span>{toDigitalClock(props.date.getHours())}</span>:
            <span>{toDigitalClock(props.date.getMinutes())}</span>:
            <span>{toDigitalClock(props.date.getSeconds())}</span>
        </div>
    );
};
