import React from "react";
import { render } from "@testing-library/react";
import { ResultContainer } from "./ResultContainer";

it.skip("renders children", () => {
  const label = "Label";
  const { getByText } = render(
    <ResultContainer anchorEl={null}>{label}</ResultContainer>
  );
  expect(getByText(label)).toBeInTheDocument();
});
