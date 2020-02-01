import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import * as styles from "./HoverToolbar.styles";
import PropTypes from "prop-types";
import { Tooltip } from "@material-ui/core";
import { richTextStyle } from "components/RichTextEditor/types";

const propTypes = {
  onInlineStyleButtonClicked: PropTypes.func.isRequired,
  onBlockStyleButtonClicked: PropTypes.func.isRequired,
  currentInlineStyle: PropTypes.any,
  currentBlockStyle: PropTypes.string,
  inlineStyles: PropTypes.arrayOf(richTextStyle).isRequired,
  blockStyles: PropTypes.arrayOf(richTextStyle).isRequired
};

const HoverToolbar = ({
  onInlineStyleButtonClicked,
  onBlockStyleButtonClicked,
  currentInlineStyle,
  currentBlockStyle,
  inlineStyles,
  blockStyles
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
        {inlineStyles.map(({ Icon, style, label }) => (
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
        {blockStyles.map(({ Icon, style, label }) => (
          <Tooltip key={style} title={label}>
            <span
              key={style}
              aria-label={label}
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

HoverToolbar.propTypes = propTypes;
export default HoverToolbar;
