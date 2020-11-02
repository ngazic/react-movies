import React, { FunctionComponent } from "react";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

const Header: FunctionComponent = () => {
  return (<div>
    <Navigation />
    <Search />
  </div>);
};

export default Header;
