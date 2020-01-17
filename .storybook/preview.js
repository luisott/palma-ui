import React from "react";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import themeDecorator from "./themeDecorator";

addDecorator(themeDecorator);
addDecorator(withInfo);
addDecorator(centered);
addDecorator(withKnobs);
