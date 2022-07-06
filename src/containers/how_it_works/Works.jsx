import './works.scss';
import home from '../../assets/home.svg';
import cart from '../../assets/card.svg';
import rent from '../../assets/rent.svg';

import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Works = () => {
  return (
    <div className='works'>
      <div className='works__text'>
        <div className='line'></div>
        <h2>How its works ?</h2>
        <p>
          Everything you need to know when you're looking to buy, rent, or sell
          - all in one place.
        </p>
      </div>
      <div className='logos'>
        {/* First Logo */}
        <div>
          <img src={cart} alt='' />
          <p>Buyer Guides</p>
          <Link to='#' className='link'>
            <span>How to buy</span>
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>

        {/* Second Logo */}
        <div>
          <img src={rent} alt='' />
          <p>Renter Guides</p>
          <Link to='#' className='link'>
            <span>How to rent</span>
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>

        {/* Third Logo */}
        <div>
          <img src={home} alt='' />
          <p>Seller Guides</p>
          <Link to='#' className='link'>
            <span>How to sell</span>
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
      <button className='sell'>Sell Full Guidelines</button>
    </div>
  );
};

export default Works;
