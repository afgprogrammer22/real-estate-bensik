import './footer.scss';
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='items'>
        <div className='item'>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to='#'>Listing</Link>
            </li>
            <li>
              <Link to='#'>Property</Link>
            </li>
            <li>
              <Link to='#'>Agents</Link>
            </li>
            <li>
              <Link to='#'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='item'>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to='#'>Our Homes</Link>
            </li>
            <li>
              <Link to='#'>Member Stories</Link>
            </li>
            <li>
              <Link to='#'>Video</Link>
            </li>
            <li>
              <Link to='#'>Free Trial</Link>
            </li>
          </ul>
        </div>
        <div className='item'>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to='#'>Partnership</Link>
            </li>
            <li>
              <Link to='#'>Terms of use</Link>
            </li>
            <li>
              <Link to='#'>Privacy</Link>
            </li>
            <li>
              <Link to='#'>Sitemap</Link>
            </li>
          </ul>
        </div>
        <div className='item'>
          <h3>Get in touch</h3>
          <p>You’ll find your next home, in any style you prefer.</p>
          <div className='social'>
            <span className='social_icon'>
              <FaFacebookF size={'14px'} />
            </span>
            <span className='social_icon'>
              <BsTwitter size={'14px'} />
            </span>
            <span className='social_icon'>
              <FaLinkedinIn size={'14px'} />
            </span>
          </div>
        </div>
      </div>
      <div className='logo_copyright'>
        <img src={logo} alt='' />
        <p>Copyright 2020.com, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
