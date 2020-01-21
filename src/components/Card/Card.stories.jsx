import React from "react";
import Card from "./Card";
import { css } from "@emotion/core";
import { CardContent, CardHeader, Typography } from "@material-ui/core";

export default {
  title: "Components|Card"
};

export const card = () => (
  <Card>
    <CardHeader title="Some card header" />
    <CardContent
      css={css`
        width: 200px;
        height: 200px;
      `}
    >
      <Typography>Some card content</Typography>
    </CardContent>
  </Card>
);
