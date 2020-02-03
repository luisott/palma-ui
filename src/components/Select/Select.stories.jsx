import React from "react";
import Select from "./Select";
import { MenuItem } from "@material-ui/core";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/Select"
};

export const select = () => (
  <Select
    id={"some-id"}
    labelId={"some-id"}
    disabled={boolean("Disabled", false)}
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
  </Select>
);
