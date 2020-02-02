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
import { Card, Container, CardContent, CardHeader } from "components";

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true
  }
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
    <Container>
      <Card
        css={css`
          border-top: 0;
          border-radius: 0 4px 4px 0;
        `}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  ),

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <Container
      css={css`
        margin-top: 40px;
      `}
    >
      <Card
        css={css`
          border-bottom: 0;
          border-radius: 4px 0 0 4px;
        `}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  )
});

addDecorator(withInfo);
addDecorator(themeDecorator);
addDecorator(addReadme);
addDecorator(centered);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
