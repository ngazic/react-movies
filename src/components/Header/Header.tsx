import React, {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Header: FunctionComponent = () => {
  return (<div>
    <Link to="/">Home</Link>
    <Navigation/>
  </div>);
};

export default Header;
