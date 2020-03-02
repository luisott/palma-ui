import React from "react";
import { render } from "@testing-library/react";
import { SelectContainer } from "./SelectContainer";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<SelectContainer>{label}</SelectContainer>);
  expect(getByText(label)).toBeInTheDocument();
});
