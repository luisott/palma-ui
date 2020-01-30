import React, { useState } from "react";
import PropTypes from "prop-types";

import { EditorState, Editor, RichUtils } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import HoverToolbar from "./HoverToolbar/HoverToolbar";

//import * as styles from "./$NAME.styles";

const props = {
  /**
   * Initial string containing valid html
   */
  initialInput: PropTypes.string,
  /**
   * Every time value changes an HTML string with the new value is returned to this callback
   */
  onChange: PropTypes.func
};

const defaultProps = {
  initialInput: ""
};

const RichTextEditor = ({ initialInput, onChange }) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(initialInput))
  );

  const handleChange = newEditorState => {
    const currentEditorState = editorState;
    setEditorState(newEditorState);

    if (
      onChange &&
      currentEditorState.getCurrentContent() !==
        newEditorState.getCurrentContent()
    ) {
      onChange(convertToHTML(newEditorState.getCurrentContent()));
    }
  };

  return (
    <div>
      <HoverToolbar
        currentStyle={editorState.getCurrentInlineStyle()}
        onButtonClicked={format =>
          handleChange(RichUtils.toggleInlineStyle(editorState, format))
        }
      />
      <Editor editorState={editorState} onChange={handleChange} />
    </div>
  );
};

RichTextEditor.props = props;
RichTextEditor.defaultProps = defaultProps;
export default RichTextEditor;
