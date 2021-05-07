import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import Rating from "./components/Rating/Rating";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

const App = () => {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className="App">
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <Rating value={ratingValue} onClick={setRatingValue} />
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed);
                }}
                items={[{ title: "ASDASD", value: 4 }]}
                onClick={() => console.log("asd")}
            />
            <OnOff on={switchOn} onChange={setSwitchOn} />
            <UncontrolledAccordion titleValue={"UseReducer"} />
        </div>
    );
};

// type PageTitlePropsType = {
//   title: string;
// };

// // const PageTitle = (props: PageTitlePropsType) => {
// //   console.log("AppTitle rendering");
// //   return <h1>{props.title}</h1>;
// // };

export default App;

// 11.2 REACT AFTER LESSON 18
