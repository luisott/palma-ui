import React from "react";
import { render } from "@testing-library/react";
import AppBar from "./AppBar";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<AppBar>{label}</AppBar>);
  expect(getByText(label)).toBeInTheDocument();
});
