import React from "react";
import PropTypes from "prop-types";
import * as styles from "./InputGroup.styles";
import { useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { formInputLabel } from "../styles/commonStyles";

const propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  color: PropTypes.oneOf(["primary", "secondary"])
};

const InputGroup = ({ disabled, label, color, children, ...rest }) => {
  const theme = useTheme();

  const getChildren = () => {
    return children.map((child, index) => (
      <div
        css={[
          styles.childContainer(theme, color),
          disabled && styles.childContainerDisabled
        ]}
        key={`input-${index}`}
      >
        {child}
      </div>
    ));
  };

  return (
    <div css={styles.container}>
      {label && <InputLabel css={formInputLabel}>{label}</InputLabel>}
      <div css={styles.childrenWrapper} {...rest}>
        {getChildren()}
      </div>
    </div>
  );
};

InputGroup.propTypes = propTypes;
export { InputGroup };
