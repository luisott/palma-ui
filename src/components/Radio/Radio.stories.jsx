import React, { useState } from "react";
import { text, boolean } from "@storybook/addon-knobs";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "./Radio";

export default {
  title: "Components|Radio"
};

export const radio = () =>
  React.createElement(() => {
    const [value, setValue] = useState("one");

    const handleChange = event => {
      debugger;
      setValue(event.target.value);
    };

    const label = text("Radio group label", "Radio group label");
    return (
      <FormControl component="fieldset" disabled={boolean("Disabled", false)}>
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
