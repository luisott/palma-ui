import React from "react";
import { render } from "@testing-library/react";
import { TextField } from "./TextField";

it("renders label", () => {
  const label = "Label";
  const { getByText } = render(<TextField id={label} label={label} />);
  expect(getByText(label)).toBeInTheDocument();
});
