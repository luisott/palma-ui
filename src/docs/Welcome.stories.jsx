import React from "react";
import WelcomeReadme from "./README.md";

export default {
  title: "Foundations/Getting Started",
  parameters: {
    readme: {
      // Show readme before story
      content: WelcomeReadme,
      disable: false
    },
    centered: { disable: true },
    info: { disable: true }
    // options: {
    //   showPanel: false
    // }
  }
};

export const usage = () => <div />;
