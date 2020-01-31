import React from "react";
import RichTextEditor from "./RichTextEditor";

export default {
  title: "Components|RichTextEditor"
};

const INITIAL_INPUT =
  "<h1>This is the title of some content</h1>" +
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
  "</ol>";
export const richTextEditor = () => {
  return (
    <RichTextEditor
      initialInput={INITIAL_INPUT}
      onChange={htmlValue => console.log(`onChange with html=${htmlValue}`)}
    />
  );
};
