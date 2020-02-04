import React from "react";
import { render } from "@testing-library/react";
import { HoverToolbar } from "./HoverToolbar";
import {
  FormatBold,
  FormatItalic,
  FormatQuote,
  Title
} from "@material-ui/icons";
import { EditorState, convertFromHTML, ContentState } from "draft-js";

const onBlockStyleButtonClicked = jest.fn();
const onInlineStyleButtonClicked = jest.fn();

const INLINE_STYLES = [
  { Icon: FormatBold, label: "Bold", style: "BOLD" },
  { Icon: FormatItalic, label: "Italic", style: "ITALIC" }
];

const BLOCK_STYLES = [
  { Icon: Title, label: "Header 2", style: "header-two" },
  { Icon: FormatQuote, label: "Block Quote", style: "blockquote" }
];

delete window.getSelection;
window.getSelection = () => ({ type: "None" });

it("renders some label", () => {
  const blocksFromHTML = convertFromHTML("text input");
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const editorState = EditorState.createWithContent(state);
  const { getByLabelText } = render(
    <HoverToolbar
      onBlockStyleButtonClicked={onBlockStyleButtonClicked}
      onInlineStyleButtonClicked={onInlineStyleButtonClicked}
      inlineStyles={INLINE_STYLES}
      blockStyles={BLOCK_STYLES}
      currentInlineStyle={editorState.getCurrentInlineStyle()}
    />
  );
  expect(getByLabelText("Bold")).toBeInTheDocument();
});
