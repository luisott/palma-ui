import React from "react";
import { render } from "@testing-library/react";
import { RichTextEditor } from "./RichTextEditor";
import {
  FormatBold,
  FormatItalic,
  FormatQuote,
  Title
} from "@material-ui/icons";

const INLINE_STYLES = [
  { Icon: FormatBold, label: "Bold", style: "BOLD" },
  { Icon: FormatItalic, label: "Italic", style: "ITALIC" }
];

const BLOCK_STYLES = [
  { Icon: Title, label: "Header 2", style: "header-two" },
  { Icon: FormatQuote, label: "Block Quote", style: "blockquote" }
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

delete window.getSelection;
window.getSelection = () => ({ type: "None" });

it("renders some content passed as input", () => {
  const { getByText } = render(
    <RichTextEditor
      initialInput={INITIAL_INPUT}
      inlineStyles={INLINE_STYLES}
      blockStyles={BLOCK_STYLES}
    />
  );
  expect(getByText("This is the title of some content")).toBeInTheDocument();
});
