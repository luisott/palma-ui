import React, { useRef, useState } from "react";
import { SearchBar as SearchBarComponent } from "./SearchBar";
import { boolean, select } from "@storybook/addon-knobs";
import { sizes } from "@types/sizes";
import { ClickAwayListener, MenuItem, MenuList } from "@material-ui/core";
import { css } from "@emotion/core";

export default {
  title: "Components/SearchBar"
};

export const SearchBar = () => {
  const [openResults, setOpenResults] = useState(false);
  const ref = useRef();

  const handleCloseResults = () => {
    debugger;
    setOpenResults(false);
  };

  const handleSearchChange = text => {
    if (text) {
      setOpenResults(true);
    } else {
      setOpenResults(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleCloseResults}>
      <div
        ref={ref}
        css={css`
          width: 300px;
          position: absolute;
          left: -150px;
        `}
      >
        <SearchBarComponent
          label={"search storybook"}
          placeholder={"Search..."}
          size={select("Size", sizes, sizes.MEDIUM)}
          withSurface={boolean("With Surface", false)}
          disabled={boolean("Disabled", false)}
          onChange={handleSearchChange}
        >
          {openResults && (
            <MenuList id="menu-list-grow">
              <MenuItem onClick={handleCloseResults}>Profile</MenuItem>
              <MenuItem onClick={handleCloseResults}>My account</MenuItem>
              <MenuItem onClick={handleCloseResults}>Logout</MenuItem>
            </MenuList>
          )}
        </SearchBarComponent>
      </div>
    </ClickAwayListener>
  );
};
