import './navbar.scss';
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='Bensik.' className='navbar__logo' />
      <ul className='navbar__links'>
        <li className='navbar__links-item'>
          <Link to='#'>Home</Link>
        </li>
        <li className='navbar__links-item'>
          <Link to='#'>Features</Link>
        </li>
        <li className='navbar__links-item'>
          <Link to='#'>Service</Link>
        </li>
        <li className='navbar__links-item'>
          <Link to='#'>Listed</Link>
        </li>
        <li className='navbar__links-item'>
          <Link to='#'>Contact</Link>
        </li>
      </ul>
      <div className='navbar__buttons'>
        <button className='navbar__buttons-login'>Sign In</button>
        <button className='navbar__buttons-register'>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
