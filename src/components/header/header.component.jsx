import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown (2).svg';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentuser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentuser ? (
          <div className='option' onClick={() => ""}>
            SIGNOUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
