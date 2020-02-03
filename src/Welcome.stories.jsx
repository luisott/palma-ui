import React from "react";
import WelcomeReadme from "./README.md";

export default {
  title: "Welcome/Getting Started",
  parameters: {
    readme: {
      // Show readme before story
      content: WelcomeReadme,
      disable: false
    },
    centered: { disable: true },
    info: { disable: true }
  }
};

export const usage = () => <div />;
