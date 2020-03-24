import React from "react";
import PropTypes from "prop-types";
import * as styles from "./InputGroup.styles";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

const InputGroup = ({ disabled, children, ...rest }) => {
  const theme = useTheme();

  const getChildren = () => {
    return children.map((child, index) => (
      <div
        css={[
          styles.childContainer(theme),
          disabled && styles.childContainerDisabled
        ]}
        key={`input-${index}`}
      >
        {child}
      </div>
    ));
  };

  return (
    <div css={styles.container} {...rest}>
      {getChildren()}
    </div>
  );
};

InputGroup.propTypes = propTypes;
export { InputGroup };
