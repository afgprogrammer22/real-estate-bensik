import './card.scss';
import bed from '../../assets/bed.svg';
import both from '../../assets/both.svg';
import sqft from '../../assets/sqft.svg';

const Card = ({ img }) => {
  return (
    <div className='card'>
      <img src={img} alt='' className='img' />
      <div className='details'>
        <h2 className='price'>$35000</h2>
        <p className='intro'>8502 Preston Rd. Inglewood, Maine 98280</p>
        <div className='info'>
          <div>
            <img src={bed} alt='' />
            <span>5 Beds</span>
          </div>
          <div>
            <img src={both} alt='' />
            <span>2 Both</span>
          </div>
          <div>
            <img src={sqft} alt='' />
            <span>2000 Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
