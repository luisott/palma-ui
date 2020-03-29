import React from "react";
import { render } from "@testing-library/react";
import { Select } from "./Select";
import { MenuItem } from "../MenuItem";

it("renders selected option", () => {
  const selectedOptionLabel = "One";
  const notSelectedOptionLabel = "Two";
  const { getAllByText } = render(
    <Select value={0}>
      <MenuItem key={0} value={0}>
        {selectedOptionLabel}
      </MenuItem>
      <MenuItem key={2} value={1}>
        {notSelectedOptionLabel}
      </MenuItem>
    </Select>
  );
  expect(getAllByText(selectedOptionLabel)[0]).toBeVisible();
});

it("doesn't render unselected option", () => {
  const selectedOptionLabel = "One";
  const notSelectedOptionLabel = "Two";
  const { getByText } = render(
    <Select value={0}>
      <MenuItem key={0} value={0}>
        {selectedOptionLabel}
      </MenuItem>
      <MenuItem key={2} value={1}>
        {notSelectedOptionLabel}
      </MenuItem>
    </Select>
  );
  expect(getByText(notSelectedOptionLabel)).not.toBeVisible();
});
