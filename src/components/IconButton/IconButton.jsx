import React from "react";
import { IconButton as MaterialIconButton } from "@material-ui/core";

//import PropTypes from "prop-types";
import * as styles from "./Button.styles";

//const props = {
//  someBoolean: PropTypes.bool,
//};

//const defaultProps = {
//};

const IconButton = props => {
  return <MaterialIconButton {...props} />;
};

//Button.props = props;
//Button.defaultProps = defaultProps;
export default IconButton;
