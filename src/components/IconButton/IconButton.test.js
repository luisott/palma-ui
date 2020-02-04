import React from "react";
import { render } from "@testing-library/react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "./IconButton";

it("renders a button", () => {
  const { getByRole } = render(
    <IconButton aria-label={"label"}>
      <DeleteIcon />
    </IconButton>
  );
  expect(getByRole("button")).toBeInTheDocument();
});
