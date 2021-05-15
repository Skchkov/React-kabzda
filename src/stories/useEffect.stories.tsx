import { useEffect, useState } from "react";

export default {
    title: "useEffect demo",
};

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("simple example");

    useEffect(() => {
        console.log("use effect rerendered always");
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log("use effect only first render");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("use effect rerender every counter change");
        document.title = counter.toString();
    }, [counter]);
    return (
        <div>
            Hello, {counter + "  "}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("setTimeOut example");

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>counter: {counter}</div>;
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("component rendered");

    useEffect(() => {
        console.log("Effect done " + counter);

        return () => {
            console.log("reset effect");
        };
    }, [counter]);

    const increase = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            counter: {counter} <button onClick={increase}>+</button>
        </div>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");
    console.log("component rendered with" + text);

    const handler = (e: KeyboardEvent) => {
        console.log(e.key);
        setText(text + e.key);
    };

    useEffect(() => {
        window.addEventListener("keypress", handler);
        return () => {
            window.removeEventListener("keypress", handler);
        };
    }, [text]);

    return <div>Typed text: {text}</div>;
};

export const SetTimeOutExample = () => {
    const [text, setText] = useState("");
    console.log("component rendered with" + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("timeout expared");
            setText("3 seconds passed");
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);

    return <div>Typed text: {text}</div>;
};
