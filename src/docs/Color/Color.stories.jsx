import React from "react";
import ColorReadme from "./README.md";
import { css } from "@emotion/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { themes } from "@styles/themes";

export default {
  title: "Foundations/Color",
  parameters: {
    readme: {
      // Show readme before story
      content: ColorReadme,
      disable: false
    },
    centered: { disable: true },
    info: { disable: true }
    // options: {
    //   showPanel: false
    // }
  }
};

const COLOR_INTENTIONS = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "grey"
];

export const Color = () => {
  const theme = responsiveFontSizes(createMuiTheme(themes.light));

  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {COLOR_INTENTIONS.map(intention => (
          <div
            key={intention}
            css={css`
              margin-bottom: 16px;
            `}
          >
            <Typography variant={"h6"}>{intention}</Typography>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              {Object.keys(theme.palette[intention]).map(variant => (
                <div
                  key={variant}
                  css={css`
                    display: flex;
                    margin-right: 24px;
                    margin-top: 24px;
                  `}
                >
                  <div
                    css={css`
                      width: 48px;
                      height: 48px;
                      background-color: ${theme.palette[intention][variant]};
                      border-radius: ${theme.shape.borderRadius}px;
                      margin-right: 16px;
                    `}
                  />
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      min-width: 70px;
                    `}
                  >
                    <Typography> {variant}</Typography>
                    <Typography variant={"body2"}>
                      {" "}
                      {theme.palette[intention][variant]}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};
