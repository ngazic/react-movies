import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation: FunctionComponent = () => {
  return (
    <nav className='navigation'>
     <Link to='movies'>
      Movies
     </Link>
     <Link to='shows'>
       TV Shows
     </Link>
    </nav>
  );
};

export default Navigation;