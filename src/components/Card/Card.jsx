import React from "react";
import { Card as MaterialCard } from "@material-ui/core";

const Card = props => {
  return <MaterialCard variant={"outlined"} {...props} />;
};
export default Card;
