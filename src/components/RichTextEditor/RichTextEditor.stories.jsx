import React from "react";
// import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import RichTextEditor from "./RichTextEditor";

export default {
  title: "Components|RichTextEditor"
};

export const richTextEditor = () => {
  return (
    <RichTextEditor
      initialInput={"<strong>bold</strong> not bold"}
      onChange={htmlValue => console.log(`onChange with html=${htmlValue}`)}
    />
  );
};
