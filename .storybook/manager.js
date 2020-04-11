import { addons } from "@storybook/addons";
import "storybook-readme/register";
import { create } from "@storybook/theming/create";
import { themes } from "../src/styles";
import { lightestGrey } from "../src/styles/colors";

const materialTheme = themes.light;

const theme = create({
  base: "light",

  colorPrimary: materialTheme.palette.primary.main,
  colorSecondary: materialTheme.palette.secondary.main,

  // UI
  appBg: "white",
  appContentBg: "silver",
  appBorderColor: lightestGrey,
  appBorderRadius: materialTheme.shape.borderRadius,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontCode: "monospace",
  fontSize: 14,

  // Text colors
  textColor: "black",
  textInverseColor: "white",

  // Toolbar default and active colors
  barTextColor: "black",
  barSelectedColor: materialTheme.palette.secondary.main,
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "white",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Palma UI",
  brandUrl: "https://github.com/luisott/palma-ui/",
  brandImage: "textLogo.svg",
});

addons.setConfig({
  theme,
});
