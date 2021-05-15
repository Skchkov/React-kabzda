import { Clock } from "./Clock";

export default {
    title: "components/Clock",
    component: Clock,
};

export const BaseDigitalExample = () => {
    return <Clock mode="digital" />;
};

export const BaseAnalogExample = () => {
    return <Clock mode="analog" />;
};
