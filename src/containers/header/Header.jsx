import './header.scss';
import Navbar from '../../components/navbar/Navbar';
import hero from '../../assets/hero.png';
const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className='hero'>
        <div className='hero__text'>
          <p className='intro'>Welcome to Besnik Agency</p>
          <h1>
            Discover a place <br></br> you'll love to live.
          </h1>
          <p className='desc'>
            Get the best real estate deals first, before they hit the mass
            market! Hot foreclosure deals with one simple search
          </p>
          <button>More About Us</button>
        </div>
        <div className='hero__image'>
          <img src={hero} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
