import React, { FormEvent, FunctionComponent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchItems } from "../../store/actions";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

const Header: FunctionComponent = () => {
  const [link, setLink] = useState('tv');
  const [searchTerm, setSearchTerm] = useState('tv');

  const location = useLocation();
  let hide = false;
  if (location.pathname === '/single') {
    hide = true;
  }
  let timer: NodeJS.Timeout;
  const dispatch = useDispatch();

  const linkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const linkBasePaths = event.currentTarget.href.split('/');
    const link = linkBasePaths[linkBasePaths.length - 1]
    setLink(event.currentTarget.href.split('/')[linkBasePaths.length - 1])
    dispatch(getSearchItems(searchTerm, link))
  }

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    if (searchTerm.trim().length < 3 && searchTerm.trim().length > 0) {
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(getSearchItems(searchTerm, link))
      setSearchTerm(searchTerm);
    }, 1000)
  }
  return (<header style={{ display: (hide) ? 'none' : '' }}>
    <Navigation click={linkClick} />
    <Search category={link} change={changeHandler} />
  </header>);
};

export default Header;
