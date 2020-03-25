import React, { useState } from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { PhoneInput } from "./PhoneInput";

export default {
  title: "Components/PhoneInput"
};

export const PhoneInputControlled = () => {
  const [phoneNumber, setPhoneNumber] = useState("16137775454");

  return (
    <PhoneInput
      label={text("Label", "Enter phone number")}
      disabled={boolean("Disabled", false)}
      phoneNumber={phoneNumber}
      onChange={newNumber => setPhoneNumber(newNumber)}
    />
  );
};
