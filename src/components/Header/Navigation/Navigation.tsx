import React, { FunctionComponent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

interface NavigationProps {
  click: (e: MouseEvent<HTMLAnchorElement>) => void
}
const Navigation: FunctionComponent<NavigationProps> = (props) => {

  const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    props.click(e);
    e.currentTarget.parentElement?.querySelector('.active')?.classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  return (
    <nav className='navigation' >
      <Link to='/movie' onClick={onClickHandler} className="navigation__link ">
        Movies
     </Link>
      <Link to='/tv' onClick={onClickHandler} className="navigation__link active">
        TV Shows
     </Link>
    </nav>
  );
};

export default Navigation;