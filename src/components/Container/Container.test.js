import React from "react";
import { render } from "@testing-library/react";
import { Container } from "./Container";

it("renders content", () => {
  const label = "Label";
  const { getByText } = render(<Container>{label}</Container>);
  expect(getByText(label)).toBeInTheDocument();
});
