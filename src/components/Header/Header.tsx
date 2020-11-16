import React, { FunctionComponent, MouseEvent, useState } from "react";
import { LinkProps } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

const Header: FunctionComponent = () => {
  const [link, setLink] = useState('tv');
  const linkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log('header link click')
    // console.log(link)
    console.log(event.currentTarget.href)
    const linkBasePaths = event.currentTarget.href.split('/');
    console.log(linkBasePaths)
    setLink(event.currentTarget.href.split('/')[linkBasePaths.length-1])
    console.log(link)
  }
  return (<div>
    <Navigation click={linkClick}/>
    <Search category={link} />
  </div>);
};

export default Header;
