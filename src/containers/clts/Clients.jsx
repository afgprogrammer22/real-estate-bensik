import './clients.scss';
import logo from '../../assets/Logo.svg';
import Star from '../../components/stars/Star';
import amazon from '../../assets/amazon.svg';
import woocommerce from '../../assets/woocommerce.svg';
import sitepoint from '../../assets/sitepoint.svg';
import slack from '../../assets/slack.svg';
import meUnides from '../../assets/meUnides.svg';

const Clients = () => {
  return (
    <div className='clts'>
      <div className='clts-intro'>
        <div className='intro'>
          <img src={logo} alt='Bensik.' className='logo' />
          <p>More than 45,000+ companies trust besnik</p>
        </div>
        <div className='stars'>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>5 Star Ratings (2k+ Review)</p>
        </div>
      </div>
      <div className='clts-logos'>
        <img src={meUnides} alt='' />
        <img src={slack} alt='' />
        <img src={amazon} alt='' />
        <img src={woocommerce} alt='' />
        <img src={sitepoint} alt='' />
      </div>
    </div>
  );
};

export default Clients;
