import PropTypes from "prop-types";

const INLINE_STYLES = PropTypes.oneOf(["BOLD", "ITALIC", "UNDERLINE", "CODE"]);
const BLOCK_STYLES = PropTypes.oneOf([
  "header-one",
  "header-two",
  "header-three",
  "header-four",
  "header-five",
  "header-six",
  "blockquote",
  "unordered-list-item",
  "ordered-list-item",
  "code-block"
]);

export const richTextStyle = PropTypes.shape({
  /**
   * React component for the icon to show
   */
  Icon: PropTypes.object.isRequired,
  /**
   * Label to show in tooltip plus aria label in the icon
   */
  label: PropTypes.string.isRequired,
  /**
   * Style string for this style, needs to be one of the strings supported by DraftJS (https://draftjs.org/docs/advanced-topics-inline-styles/)
   */
  style: PropTypes.oneOfType([INLINE_STYLES, BLOCK_STYLES]).isRequired
});
