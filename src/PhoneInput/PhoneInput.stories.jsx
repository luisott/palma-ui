import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { PhoneInput } from "./PhoneInput";

export default {
  title: "Components/PhoneInput"
};

export const UncontrolledPhoneInput = () => {
  return (
    <PhoneInput
      label={text("Label", "Enter phone number")}
      disabled={boolean("Disabled", false)}
      initialPhoneNumber={text("Phone number", "16137775454")}
      onChange={action("changed")}
    />
  );
};
