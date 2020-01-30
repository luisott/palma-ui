import React from "react";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withConsole } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";
import themeDecorator from "./themeDecorator";

addDecorator(withInfo);
addDecorator(themeDecorator);
addDecorator(centered);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
