import React, { useState } from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { RadioGroup, FormControl, FormLabel } from "@material-ui/core";
import { Radio } from "./Radio";
import Readme from "./README.md";

export default {
  title: "Components/Radio",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const radio = () =>
  React.createElement(() => {
    const [value, setValue] = useState("one");

    const handleChange = event => {
      setValue(event.target.value);
    };

    const label = text("Radio group label", "Radio group label");
    return (
      <FormControl
        component="fieldset"
        disabled={boolean("Disabled", false)}
        color={select("Color", ["primary", "secondary"], "secondary")}
      >
        <FormLabel hidden={boolean("Hide label", false)} component="legend">
          {label}
        </FormLabel>
        <RadioGroup
          aria-label={label}
          name={label}
          row={boolean("Row", false)}
          value={value}
          onChange={handleChange}
        >
          <Radio value={"one"} label="Radio 1" />
          <Radio value={"two"} label="Radio 2" />
        </RadioGroup>
      </FormControl>
    );
  });
