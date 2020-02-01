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

const INLINE_STYLES = [
  { Icon: FormatBold, style: "BOLD" },
  { Icon: FormatItalic, style: "ITALIC" },
  { Icon: FormatUnderlined, style: "UNDERLINE" },
  { Icon: CodeRounded, style: "CODE" }
];

const BLOCK_STYLES = [
  { Icon: Title, style: "header-five" },
  { Icon: FormatQuote, style: "blockquote" },
  { Icon: FormatListBulleted, style: "unordered-list-item" },
  { Icon: FormatListNumbered, style: "ordered-list-item" },
  { Icon: Code, style: "code-block" }
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
        {INLINE_STYLES.map(({ Icon, style }) => (
          <span
            key={style}
            css={[
              styles.button.base,
              currentInlineStyle.has(style) && styles.button.active
            ]}
            onClick={() => onInlineStyleButtonClicked(style)}
          >
            <Icon css={styles.icon} />
          </span>
        ))}
        {BLOCK_STYLES.map(({ Icon, style }) => (
          <span
            key={style}
            css={[
              styles.button.base,
              currentBlockStyle === style && styles.button.active
            ]}
            onClick={() => onBlockStyleButtonClicked(style)}
          >
            <Icon css={styles.icon} />
          </span>
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
