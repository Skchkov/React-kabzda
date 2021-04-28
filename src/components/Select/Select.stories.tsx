import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { Select } from "./Select";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Select",
  component: Select,
} as Meta;

export const WithValue = () => {
  const [value, setValue] = useState("2");
  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { title: "Minsk", value: "1" },
          { title: "Kioto", value: "2" },
          { title: "Tokio", value: "3" },
        ]}
      />
    </>
  );
};

export const WhithoutValue = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { title: "Minsk", value: "1" },
          { title: "Kioto", value: "2" },
          { title: "Tokio", value: "3" },
        ]}
      />
    </>
  );
};
