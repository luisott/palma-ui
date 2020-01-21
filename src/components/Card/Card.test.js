import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import { CardContent } from "@material-ui/core";

it("renders some label", () => {
  const label = "Label";
  const { getByText } = render(
    <Card>
      <CardContent>{label}</CardContent>
    </Card>
  );
  expect(getByText(label)).toBeInTheDocument();
});
