import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import { MdMenu, MdClose } from 'react-icons/md';
const Navbar = () => {
  // Toggle menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Navbar links
  const links = [
    { title: 'Home', to: '#' },
    { title: 'About', to: '#' },
    { title: 'Services', to: '#' },
    { title: 'Listed', to: '#' },
    { title: 'Contact', to: '#' },
  ];
  return (
    <nav className='navbar'>
      {/* Logo */}
      <Link to='/' className='logo'>
        <img src={logo} alt='Bensik' />
      </Link>

      {/* Navbar Items */}
      <div className='navbar__items'>
        <ul className='navbar__items-links'>
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className='navbar__items-buttons'>
          <Link to='#' className='login-btn'>
            Sign In
          </Link>
          <Link to='#' className='register-btn'>
            Register
          </Link>
        </div>
      </div>
      {/* Mobile Navbar Items */}

      <div className='navbar__mobile'>
        <div className='navbar__mobile-menu'>
          <MdMenu onClick={() => setToggleMenu(true)} />
        </div>
        {toggleMenu && (
          <div className='mobile__links'>
            <MdClose onClick={() => setToggleMenu(false)} />
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
