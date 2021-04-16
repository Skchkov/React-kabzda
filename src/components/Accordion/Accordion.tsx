import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};

export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onChange={props.onChange}
        collapsed={props.collapsed}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
  collapsed: boolean;
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("AccordionTitle rendering");
  return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
};

const AccordionBody = () => {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
