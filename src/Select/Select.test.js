import React from "react";
import { render } from "@testing-library/react";
import { Select } from "./Select";
import { MenuItem } from "../MenuItem";

it("renders label", () => {
  const selectedOptionLabel = "One";
  const { getByText } = render(
    <Select value={0}>
      <MenuItem key={0} value={0}>
        {selectedOptionLabel}
      </MenuItem>
    </Select>
  );
  expect(getByText(selectedOptionLabel)).toBeInTheDocument();
});
