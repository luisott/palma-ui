import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  CodeRounded,
  FormatListNumbered,
  FormatListBulleted,
  Code,
  FormatQuote,
  Title
} from "@material-ui/icons";

import * as styles from "./HoverToolbar.styles";
import PropTypes from "prop-types";
import { Tooltip } from "@material-ui/core";

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

const props = {
  onInlineStyleButtonClicked: PropTypes.func.isRequired,
  onBlockStyleButtonClicked: PropTypes.func.isRequired,
  currentInlineStyle: PropTypes.any,
  currentBlockStyle: PropTypes.string
};

const HoverToolbar = ({
  onInlineStyleButtonClicked,
  onBlockStyleButtonClicked,
  currentInlineStyle,
  currentBlockStyle
}) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    if (!currentInlineStyle) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();

    if (domSelection.type !== "Range" && domSelection.type !== "None") {
      // User clicked outside the toolbar (likely domSelection.type !== "Caret")
      el.removeAttribute("style");
      return;
    }

    if (domSelection.type === "None") {
      // User clicked on a button so keep the toolbar where it is
      return;
    }
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
        {INLINE_STYLES.map(({ Icon, style, label }) => (
          <Tooltip key={style} title={label}>
            <span
              key={style}
              aria-label={label}
              css={[
                styles.button.base,
                currentInlineStyle.has(style) && styles.button.active
              ]}
              onClick={() => onInlineStyleButtonClicked(style)}
            >
              <Icon css={styles.icon} />
            </span>
          </Tooltip>
        ))}
        {BLOCK_STYLES.map(({ Icon, style, label }) => (
          <Tooltip key={style} title={label}>
            <span
              key={style}
              aria-label={label}
              title={label}
              css={[
                styles.button.base,
                currentBlockStyle === style && styles.button.active
              ]}
              onClick={() => onBlockStyleButtonClicked(style)}
            >
              <Icon css={styles.icon} />
            </span>
          </Tooltip>
        ))}
      </div>
    </Portal>
  );
};

// Need to attach the hover toolbar in the body of the page so that position is calculated correctly
const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

HoverToolbar.props = props;
export default HoverToolbar;
