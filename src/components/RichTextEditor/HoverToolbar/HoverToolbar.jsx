import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { FormatBold, FormatItalic, FormatUnderlined } from "@material-ui/icons";
import { ReactEditor, useSlate } from "slate-react";
import { Range, Editor, Transforms } from "slate";

import * as styles from "./HoverToolbar.styles";

const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
    mode: "all"
  });
  return !!match;
};

export const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

const HoverToolbar = () => {
  const ref = useRef();
  const editor = useSlate();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left +
      window.pageXOffset -
      el.offsetWidth / 2 +
      rect.width / 2}px`;
  });

  return (
    <Portal>
      <div ref={ref} css={styles.menu}>
        <FormatButton format="bold">
          <FormatBold css={styles.icon} />
        </FormatButton>
        <FormatButton format="italic">
          <FormatItalic css={styles.icon} />
        </FormatButton>
        <FormatButton format="underlined">
          <FormatUnderlined css={styles.icon} />
        </FormatButton>
      </div>
    </Portal>
  );
};

export const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

const FormatButton = ({ format, ...props }) => {
  const editor = useSlate();
  const active = isFormatActive(editor, format);
  return (
    <span
      css={[styles.button.base, active && styles.button.active]}
      onMouseDown={event => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
      {...props}
    />
  );
};
export default HoverToolbar;
