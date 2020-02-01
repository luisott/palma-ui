import React, { useState } from "react";
import PropTypes from "prop-types";

import { EditorState, Editor, RichUtils } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import HoverToolbar from "./HoverToolbar/HoverToolbar";

import * as styles from "./RichTextEditor.styles";
import { useTheme } from "@material-ui/core";

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

const RichTextEditor = ({ initialInput, onChange, ...rest }) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(initialInput))
  );

  const theme = useTheme();

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

  const handleInlineStyleChange = newFormat => {
    const newEditorState = RichUtils.toggleInlineStyle(editorState, newFormat);
    handleChange(newEditorState);
  };

  const handleBlockStyleChange = newFormat => {
    const newEditorState = RichUtils.toggleBlockType(editorState, newFormat);
    handleChange(newEditorState);
  };

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div>
      <HoverToolbar
        currentInlineStyle={editorState.getCurrentInlineStyle()}
        currentBlockStyle={blockType}
        onInlineStyleButtonClicked={handleInlineStyleChange}
        onBlockStyleButtonClicked={handleBlockStyleChange}
      />
      <div css={styles.richTextEditor(theme)}>
        <Editor editorState={editorState} onChange={handleChange} {...rest} />
      </div>
    </div>
  );
};

RichTextEditor.props = props;
RichTextEditor.defaultProps = defaultProps;
export default RichTextEditor;
