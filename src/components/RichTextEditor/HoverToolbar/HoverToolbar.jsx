import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  CodeRounded
} from "@material-ui/icons";

import * as styles from "./HoverToolbar.styles";
import PropTypes from "prop-types";

const INLINE_STYLES = [
  { Icon: FormatBold, style: "BOLD" },
  { Icon: FormatItalic, style: "ITALIC" },
  { Icon: FormatUnderlined, style: "UNDERLINE" },
  { Icon: CodeRounded, style: "CODE" }
];

const props = {
  onButtonClicked: PropTypes.func.isRequired,
  currentStyle: PropTypes.any
};

const HoverToolbar = ({ onButtonClicked, currentStyle }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    if (!currentStyle) {
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
              currentStyle.has(style) && styles.button.active
            ]}
            onClick={() => onButtonClicked(style)}
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
