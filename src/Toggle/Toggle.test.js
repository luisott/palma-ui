import React from "react";
import { render } from "@testing-library/react";
import { Toggle } from "./Toggle";

it("renders label", () => {
  const label = "Label";
  const { getByLabelText } = render(
    <Toggle value={"someValue"} ariaLabel={label} />
  );
  expect(getByLabelText(label)).toBeInTheDocument();
});
