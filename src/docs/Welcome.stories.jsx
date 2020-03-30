import React from "react";
import WelcomeReadme from "./README.md";

export default {
  title: "Foundations/Getting Started",
  parameters: {
    readme: {
      // Show readme before story
      content: WelcomeReadme
    }
  }
};

export const usage = () => <div />;
