import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  title: "components/Accordion",
  component: Accordion,
} as Meta;

const callback = action("accordion mode changed");
const onClickCallback = action("some item was clicked");

export const CollapsedMode = () => (
  <Accordion
    collapsed={true}
    titleValue={"Burger"}
    onChange={callback}
    items={[{ title: "Burger", value: "0" }]}
    onClick={onClickCallback}
  />
);
export const UncollapsedMode = () => (
  <Accordion
    collapsed={false}
    titleValue={"Users"}
    onChange={callback}
    items={[
      { title: "Nikita", value: 1 },
      { title: "Dimas", value: 2 },
      { title: "Denis", value: 3 },
    ]}
    onClick={onClickCallback}
  />
);

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Accordion
      collapsed={collapsed}
      titleValue={"Users"}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
      items={[
        { title: "Nikita", value: 1 },
        { title: "Dimas", value: 2 },
        { title: "Denis", value: 3 },
      ]}
      onClick={(id) => {
        alert(`user with ID ${id} should be happy`);
      }}
    />
  );
};
