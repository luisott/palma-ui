import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as MaterialLink } from "@material-ui/core";
import {
  EditorState,
  Editor,
  RichUtils,
  convertFromHTML,
  ContentState,
  CompositeDecorator
} from "draft-js";
import { convertToHTML } from "draft-convert";
import { HoverToolbar } from "./HoverToolbar/HoverToolbar";

import * as styles from "./RichTextEditor.styles";
import { useTheme } from "@material-ui/core/styles";
import { richTextStyle } from "./types";

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

// eslint-disable-next-line react/prop-types
const Link = ({ contentState, entityKey, children }) => {
  // eslint-disable-next-line react/prop-types
  const { url } = contentState.getEntity(entityKey).getData();
  return <MaterialLink href={url}>{children}</MaterialLink>;
};

const propTypes = {
  /**
   * Initial string containing valid html
   */
  initialInput: PropTypes.string,
  /**
   * Every time value changes an HTML string with the new value is returned to this callback
   */
  onChange: PropTypes.func,
  /**
   * Inline styles to support in styling toolbar
   */
  inlineStyles: PropTypes.arrayOf(richTextStyle).isRequired,
  /**
   * Block styles to support in styling toolbar
   */
  blockStyles: PropTypes.arrayOf(richTextStyle).isRequired,
  /**
   * Highlight the whole editor when hover or focused
   */
  highlightWhenActive: PropTypes.bool
};

const defaultProps = {
  initialInput: ""
};

const RichTextEditor = ({
  initialInput,
  onChange,
  inlineStyles,
  blockStyles,
  highlightWhenActive,
  ...rest
}) => {
  const blocksFromHTML = convertFromHTML(initialInput);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link
    }
  ]);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(state, decorator)
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
    <>
      <HoverToolbar
        currentInlineStyle={editorState.getCurrentInlineStyle()}
        currentBlockStyle={blockType}
        onInlineStyleButtonClicked={handleInlineStyleChange}
        onBlockStyleButtonClicked={handleBlockStyleChange}
        inlineStyles={inlineStyles}
        blockStyles={blockStyles}
      />
      <div
        css={[
          styles.richTextEditor(theme).base,
          highlightWhenActive && styles.richTextEditor(theme).highlight
        ]}
      >
        <Editor editorState={editorState} onChange={handleChange} {...rest} />
      </div>
    </>
  );
};

RichTextEditor.propTypes = propTypes;
RichTextEditor.defaultProps = defaultProps;
export { RichTextEditor };
