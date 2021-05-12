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

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("setTimeOut example");

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000);
    }, []);

    return <div>counter: {counter}</div>;
};
