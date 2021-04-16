import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  title: "components/Accordion",
  component: Accordion,
} as Meta;

const callback = action("accordion mode changed");

export const CollapsedMode = () => (
  <Accordion collapsed={true} titleValue={"Burger"} onChange={callback} />
);
export const UncollapsedMode = () => (
  <Accordion collapsed={false} titleValue={"Users"} onChange={callback} />
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
    />
  );
};
