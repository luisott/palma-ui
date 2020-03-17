import React from "react";
import { render } from "@testing-library/react";
import { CardHeader } from "./CardHeader";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<CardHeader title={label} />);
  expect(getByText(label)).toBeInTheDocument();
});
