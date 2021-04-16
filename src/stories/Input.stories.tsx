import React, { ChangeEvent, useRef, useState } from "react";
import { Meta } from "@storybook/react";

export default {
  title: "input",
} as Meta;

export const UncontrolledInput = () => <input />;

export const TrackedValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  };
  return (
    <>
      <input onChange={onChange} />-{value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button> - actual value: {value}
    </>
  );
};

export const ControlledInputWithFixedValue = () => (
  <input value={"it-incubator.by"} />
);
