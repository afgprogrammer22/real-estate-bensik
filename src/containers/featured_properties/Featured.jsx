import './featured.scss';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Card from '../../components/card/Card';
import img1 from '../../assets/firstImage.jpg';
import img2 from '../../assets/secondImage.jpg';
import img3 from '../../assets/thirdImage.jpg';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured__text'>
        <div>
          <h2>Featured Properties</h2>
          <p>Everything you need to know when you're looking</p>
        </div>
        <Link to='#' className='link'>
          <p>View All Properties</p>
          <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      {/* Cards */}

      <div className='cards'>
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </div>
    </div>
  );
};

export default Featured;
