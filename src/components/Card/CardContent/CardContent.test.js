import React from "react";
import { render } from "@testing-library/react";
import CardContent from "./CardContent";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<CardContent>{label}</CardContent>);
  expect(getByText(label)).toBeInTheDocument();
});
