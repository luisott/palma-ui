import React from "react";
import { Typography } from "@material-ui/core";
import TypographyReadme from "./README.md";
import { css } from "@emotion/core";

export default {
  title: "Foundations/Typography",
  parameters: {
    readme: {
      // Show readme before story
      content: TypographyReadme
    }
  }
};

const typographyTypes = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "button",
  "overline"
];

const TEXT = "Typography";
export const typography = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    {typographyTypes.map(typographyType => (
      <div
        key={typographyType}
        css={css`
          display: flex;
          margin-bottom: 16px;
        `}
      >
        <Typography
          css={css`
            align-self: center;
            margin-right: 16px;
            flex: 1 1 auto;
            max-width: 200px;
          `}
        >
          {typographyType}
        </Typography>
        <Typography variant={typographyType}>{TEXT}</Typography>
      </div>
    ))}
  </div>
);

typography.story = {
  parameters: {
    centered: { disable: true }
  }
};
