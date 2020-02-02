import React from "react";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withConsole } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";
import { addParameters } from "@storybook/react";
import themeDecorator from "./themeDecorator";

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true
  }
});
addDecorator(withInfo);
addDecorator(themeDecorator);
addDecorator(centered);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
