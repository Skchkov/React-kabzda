import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { OnOff } from "./OnOff";

export default {
  title: "components/OnOff",
  component: OnOff,
} as Meta;

const callback = action("on or off clicked");

export const OnMode = () => <OnOff on={true} onChange={callback} />;
export const OffMode = () => <OnOff on={false} onChange={callback} />;

export const ModeChanging = () => {
  const [value, setValue] = useState(true);
  return <OnOff on={value} onChange={setValue} />;
};
