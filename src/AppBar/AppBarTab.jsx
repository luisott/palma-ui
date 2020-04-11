import React from "react";

import { Tab } from "../Tabs/Tab";
import * as styles from "./AppBar.styles";
import useTheme from "@material-ui/core/styles/useTheme";

const AppBarTab = (props) => {
  const theme = useTheme();
  return (
    <div css={styles.tab(theme)}>
      <Tab {...props} />
    </div>
  );
};

export { AppBarTab };
