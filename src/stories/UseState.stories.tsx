import React, { useState } from "react";

export default {
    title: "useState demo",
};

function generateData() {
    console.log("generateData");
    return 1;
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);

    const onClick = () => {
        setCounter(counter + 1);
    };

    return <button onClick={onClick}>+{counter}</button>;
};
