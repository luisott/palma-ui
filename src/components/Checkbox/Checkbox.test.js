import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

it("aria label", () => {
  const label = "Label";
  const { getByLabelText } = render(<Checkbox ariaLabel={label} />);
  expect(getByLabelText(label)).toBeInTheDocument();
});
