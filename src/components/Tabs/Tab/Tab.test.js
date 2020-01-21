import React from "react";
import { render } from "@testing-library/react";
import Tab from "./Tab";

it("renders label", () => {
  const label = "Label";
  const { getByText } = render(
    <Tab index={0} ariaLabelPrefix={label} label={label} />
  );
  expect(getByText(label)).toBeInTheDocument();
});
