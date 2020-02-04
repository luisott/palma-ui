import React from "react";
import { render } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";
import { Button } from "../Button";

it("renders some label", () => {
  const label = "Label";
  const { getByLabelText } = render(
    <ButtonGroup aria-label={label}>
      <Button>button 1</Button>
      <Button>button 2</Button>
    </ButtonGroup>
  );
  expect(getByLabelText(label)).toBeInTheDocument();
});
