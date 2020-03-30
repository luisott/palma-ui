import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { RichTextEditor } from "./RichTextEditor";
import {
  Code,
  CodeRounded,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  Title
} from "@material-ui/icons";
import Readme from "./README.md";

export default {
  title: "Components/RichTextEditor",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

const INLINE_STYLES = [
  { Icon: FormatBold, label: "Bold", style: "BOLD" },
  { Icon: FormatItalic, label: "Italic", style: "ITALIC" },
  { Icon: FormatUnderlined, label: "Underlined", style: "UNDERLINE" },
  { Icon: CodeRounded, label: "Code", style: "CODE" }
];

const BLOCK_STYLES = [
  { Icon: Title, label: "Header 2", style: "header-two" },
  { Icon: FormatQuote, label: "Block Quote", style: "blockquote" },
  {
    Icon: FormatListBulleted,
    label: "Unordered list",
    style: "unordered-list-item"
  },
  {
    Icon: FormatListNumbered,
    label: "Ordered list",
    style: "ordered-list-item"
  },
  { Icon: Code, label: "Code block", style: "code-block" }
];

const INITIAL_INPUT =
  "<h2>This is the title of some content</h2>" +
  "</br>" +
  "<strong>Some bold content</strong>" +
  "<ul>" +
  "<li>Unordered list element 1</li>" +
  "<li>Unordered list element 2</li>" +
  "<li>Unordered list element 3</li>" +
  "</ul>" +
  "</br>" +
  "Some regular text" +
  "</br></br>" +
  "<code>This is some code block</br>with a new line in between</code>" +
  "</br></br>" +
  "<i>Some italic text</i>" +
  "<ol>" +
  "<li>Ordered list element 1</li>" +
  "<li>Ordered list element 2</li>" +
  "</ol>" +
  "<a href='https://googl.ca'>This is a link</a>";
export const richTextEditor = () => {
  return (
    <RichTextEditor
      initialInput={INITIAL_INPUT}
      onChange={htmlValue => console.log(`onChange with html=${htmlValue}`)}
      inlineStyles={INLINE_STYLES}
      blockStyles={BLOCK_STYLES}
      highlightWhenActive={boolean("Highlight on hover", false)}
    />
  );
};
