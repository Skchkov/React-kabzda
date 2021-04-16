import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { UncontrolledOnOff } from "./UncontrolledOnOff";

export default {
  title: "components/UncontrolledOnOff",
  component: UncontrolledOnOff,
} as Meta;

const callback = action("on or off clicked");

export const OnMode = () => (
  <UncontrolledOnOff defaultOn={true} onChange={callback} />
);
export const OffMode = () => (
  <UncontrolledOnOff defaultOn={false} onChange={callback} />
);
