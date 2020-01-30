import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";

import HoverToolbar2, {
  toggleFormat
} from "src/components/RichTextEditor/HoverToolbar/HoverToolbar2";

//import * as styles from "./$NAME.styles";

const initialValue = [
  {
    children: [
      {
        text:
          "This example shows how you can make a hovering menu appear above your content, which you can use to make text "
      },
      { text: "bold", bold: true },
      { text: ", " },
      { text: "italic", italic: true },
      { text: ", or anything else you might want to do!" }
    ]
  },
  {
    children: [
      { text: "Try it out yourself! Just " },
      { text: "select any piece of text and the menu will appear", bold: true },
      { text: "." }
    ]
  }
];

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underlined) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const props = {
  initialText: PropTypes.string
};

const defaultProps = {};

const RichTextEditor2 = ({ initialText }) => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <HoverToolbar2 />
      <Editable
        renderLeaf={props => <Leaf {...props} />}
        placeholder="Enter some text..."
        onDOMBeforeInput={event => {
          switch (event.inputType) {
            case "formatBold":
              return toggleFormat(editor, "bold");
            case "formatItalic":
              return toggleFormat(editor, "italic");
            case "formatUnderline":
              return toggleFormat(editor, "underline");
          }
        }}
      />
    </Slate>
  );
};

RichTextEditor2.props = props;
RichTextEditor2.defaultProps = defaultProps;
export default RichTextEditor2;
