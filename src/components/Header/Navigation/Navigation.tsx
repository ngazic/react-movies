import React, { FunctionComponent, MouseEvent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import './Navigation.scss';

interface NavigationProps {
  click: (e: MouseEvent<HTMLAnchorElement>) => void
}
const Navigation: FunctionComponent<NavigationProps> = (props) => {
  return (
    <nav className='navigation'>
     <Link to='/movie' onClick={props.click}>
      Movies
     </Link>
     <Link to='/tv' onClick={props.click}>
       TV Shows
     </Link>
    </nav>
  );
};

export default Navigation;