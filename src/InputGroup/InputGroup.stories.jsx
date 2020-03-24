import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { InputGroup } from "./InputGroup";
import { MenuItem } from "../MenuItem";
import { InputGroupSelect } from "./InputGroupSelect";
import { InputGroupInput } from "./InputGroupInput";

export default {
  title: "Components/InputGroup"
};

export const inputGroup = () => {
  const disabled = boolean("Disabled", false);
  return (
    <InputGroup label={text("Label", "")} disabled={disabled}>
      <InputGroupSelect
        id={"some-id"}
        labelId={"some-id"}
        defaultValue={0}
        disabled={disabled}
      >
        <MenuItem key={0} value={0}>
          One
        </MenuItem>
        <MenuItem key={1} value={1}>
          Two
        </MenuItem>
        <MenuItem key={2} value={2}>
          Three
        </MenuItem>
      </InputGroupSelect>
      <InputGroupInput placeholder={"Type some text"} disabled={disabled} />
      <InputGroupInput
        type={"number"}
        placeholder={"Pick a number"}
        disabled={disabled}
      />
    </InputGroup>
  );
};
