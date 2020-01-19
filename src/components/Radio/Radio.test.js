import React from "react";
import { render } from "@testing-library/react";
import Radio from "./Radio";

it("renders label", () => {
  const label = "Label";
  const { getByText } = render(<Radio label={label} />);
  expect(getByText(label)).toBeInTheDocument();
});

it("renders aria label", () => {
  const label = "Label";
  const { getByLabelText } = render(<Radio label={label} />);
  expect(getByLabelText(label)).toBeInTheDocument();
});
