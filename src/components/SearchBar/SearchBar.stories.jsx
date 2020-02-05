import React, { useRef, useState } from "react";
import { SearchBar as SearchBarComponent } from "./SearchBar";
import { boolean, select } from "@storybook/addon-knobs";
import { sizes } from "@types/sizes";
import { SearchResultContainer } from "@components/SearchBar/SearchResultContainer/SearchResultContainer";
import { MenuItem, MenuList } from "@material-ui/core";

export default {
  title: "Components/SearchBar"
};

export const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openResults, setOpenResults] = useState(false);
  const ref = useRef();

  const handleCloseResults = () => {
    setOpenResults(false);
    setAnchorEl(null);
  };

  const handleSearchChange = text => {
    if (text) {
      setAnchorEl(ref.current);
      setOpenResults(true);
    } else {
      setAnchorEl(null);
      setOpenResults(false);
    }
  };

  return (
    <div ref={ref}>
      <SearchBarComponent
        label={"search storybook"}
        placeholder={"Search..."}
        size={select("Size", sizes, sizes.MEDIUM)}
        withSurface={boolean("With Surface", false)}
        disabled={boolean("Disabled", false)}
        onChange={handleSearchChange}
      />
      <SearchResultContainer
        anchorEl={anchorEl}
        open={openResults}
        onClickAway={handleCloseResults}
      >
        <MenuList id="menu-list-grow">
          <MenuItem onClick={handleCloseResults}>Profile</MenuItem>
          <MenuItem onClick={handleCloseResults}>My account</MenuItem>
          <MenuItem onClick={handleCloseResults}>Logout</MenuItem>
        </MenuList>
      </SearchResultContainer>
    </div>
  );
};
