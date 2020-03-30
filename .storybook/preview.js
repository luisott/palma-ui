import React from "react";
import { css } from "@emotion/core";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withConsole } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";
import { addParameters } from "@storybook/react";
import { addReadme, configureReadme } from "storybook-readme";
import themeDecorator from "./themeDecorator";

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true
  },
  readme: { disable: false },
  centered: { disable: true },
  info: { disable: true }
});

/**
 * Trying to make the docs look a bit more like what the app would look like for consistency
 */
configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => (
    <div
      style={{ display: "flex", "justify-content": "center", margin: "50px 0" }}
    >
      {children}
    </div>
  )
});

addDecorator(withInfo);
addDecorator(addReadme);
addDecorator(themeDecorator);
addDecorator(centered);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
