import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { css } from "@emotion/core";

const Center = ({ children }) => (
  <div
    css={css`
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0 40px;
    `}
  >
    {children}
  </div>
);

addDecorator(storyFn => <Center>{storyFn()}</Center>);
addDecorator(withKnobs);
