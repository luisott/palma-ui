import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";
it("renders button with label", () => {
  const buttonLabel = "Button Label";
  const { getByText } = render(<Button>{buttonLabel}</Button>);
  expect(getByText(buttonLabel)).toBeInTheDocument();
});

it("shows loading indicator when loading", () => {
  const buttonLabel = "Button Label";
  const { getByTestId } = render(<Button loading={true}>{buttonLabel}</Button>);
  expect(getByTestId("loading")).toBeInTheDocument();
});
