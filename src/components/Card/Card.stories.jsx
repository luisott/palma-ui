import React from "react";
import Card from "./Card";
import { css } from "@emotion/core";
import { CardContent, CardHeader, Typography } from "@material-ui/core";

export default {
  title: "Components/Card"
};

export const card = () => (
  <Card>
    <CardHeader title="Some card header" />
    <CardContent
      css={css`
        max-width: 600px;
      `}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
        erat risus, vel tristique orci faucibus vitae. Fusce nec lacus
        pellentesque, rhoncus tortor gravida, bibendum quam. Vestibulum at
        facilisis orci. Sed ultricies lorem et commodo pulvinar. Donec ut
        facilisis lectus, at varius tortor. Nunc sit amet libero mollis,
        efficitur erat quis, suscipit arcu. Sed convallis velit nec blandit
        finibus. Nam commodo nisi vel nibh laoreet, sit amet pellentesque leo
        finibus.
      </Typography>
    </CardContent>
  </Card>
);
