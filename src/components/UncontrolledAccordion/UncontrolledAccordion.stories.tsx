import React from "react";
import { Meta } from "@storybook/react";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "components/UncontrolledAccordion",
  component: UncontrolledAccordion,
} as Meta;

export const ModeChanging = () => {
  return <UncontrolledAccordion titleValue={"Users"} />;
};
