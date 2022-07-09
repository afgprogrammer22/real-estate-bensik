import './featured2.scss';
import image from '../../assets/image.jpg';
import { AiOutlineRise } from 'react-icons/ai';

const Featured2 = () => {
  return (
    <div className='featured2'>
      <div className='container'>
        <div className='top'>
          <div className='right'>
            <img src={image} alt='' />
            <div className='card'>
              <div>
                <span>40,000+</span>
                <AiOutlineRise size={'25px'} />
              </div>
              <p>
                By avarage for 2 bedroom <br /> apments in San Francisco, CA
              </p>
              <div className='large-line'></div>

              {/* Circular Images */}

              <div className='images'>
                {/* Top */}
                <div className='top'>
                  {/* First Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                  {/* Second Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>

                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                  {/* Third Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>

                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>

                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                </div>

                {/* Bottom */}
                <div className='bottom'>
                  {/* First Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                  {/* Second Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>
                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                  {/* Third Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>

                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                  {/* Fourth Collection */}
                  <div className='image'>
                    <span className='circleImage'>
                      <img
                        src='https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person1'
                      />
                    </span>

                    <span className='circleImage topImage'>
                      <img
                        src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='person2'
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='left'>
            <div className='line'></div>
            <h2>You’ve found a neighborhood you love.</h2>
            <p>
              When you own a home, you’re committing to living in one location
              for a while. In a recent Trulia survey, we found that five out of
              six respondents said finding the right neighborhood{' '}
            </p>
          </div>
        </div>
        <div className='bottomInfo'>
          <div>
            <h2>2,500</h2>
            <p>Homes for sale</p>
          </div>
          <div>
            <h2>5,000+</h2>
            <p>Homes recently sold</p>
          </div>
          <div>
            <h2>170</h2>
            <p>Price reduced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured2;
