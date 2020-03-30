import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { PhoneInput } from "./PhoneInput";
import Readme from "./README.md";

export default {
  title: "Components/PhoneInput",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const UncontrolledPhoneInput = () => {
  return (
    <PhoneInput
      label={text("Label", "Enter phone number")}
      disabled={boolean("Disabled", false)}
      initialPhoneNumber={text("Phone number", "16137775454")}
      onChange={action("changed")}
      defaultCountryId={select("Default country id", ["CA", "US"], "US")}
    />
  );
};
