import React from "react";
import MenuItemMaterial from "@material-ui/core/MenuItem";

import * as styles from "./MenuItem.styles";

const MenuItem = props => {
  return <MenuItemMaterial css={styles.menuItem} {...props} />;
};

export { MenuItem };
