import React from "react";
import { Typography, Link } from "@material-ui/core";
import TypographyReadme from "./README.md";
import { css } from "@emotion/core";

export default {
  title: "Foundations/Typography",
  parameters: {
    readme: {
      // Show readme before story
      content: TypographyReadme,
      disable: false
    },
    centered: { disable: true },
    info: { disable: true }
    // options: {
    //   showPanel: false
    // }
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

const labelStyle = css`
  align-self: center;
  margin-right: 16px;
  flex: 1 1 auto;
  max-width: 200px;
`;

const lineWrapperStyle = css`
  display: flex;
  margin-bottom: 16px;
`;

const TEXT = "Typography rules";
export const typography = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <Typography variant={"h4"}>Sizes/Types:</Typography>
    {typographyTypes.map(typographyType => (
      <div key={typographyType} css={lineWrapperStyle}>
        <Typography css={labelStyle}>{typographyType}</Typography>
        <Typography variant={typographyType}>{TEXT}</Typography>
      </div>
    ))}
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Typography
        variant={"h4"}
        css={css`
          && {
            margin-top: 24px;
            margin-bottom: 16px;
          }
        `}
      >
        Formatting:
      </Typography>
      <div css={lineWrapperStyle}>
        <Typography css={labelStyle}>Error</Typography>
        <Typography color={"error"}>{TEXT}</Typography>
      </div>
      <div css={lineWrapperStyle}>
        <Typography css={labelStyle}>Link</Typography>
        <Typography>
          <Link> {TEXT}</Link>
        </Typography>
      </div>
    </div>
  </div>
);
