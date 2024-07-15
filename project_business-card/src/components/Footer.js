import linkedin from '../images/linkedin-mid.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer--links-icon" src={twitter} alt="email-icon"/> 
      <img className="footer--links-icon" src={linkedin} alt="email-icon"/> 
      <img className="footer--links-icon" src={github} alt="email-icon"/> 
    </footer>
  );
}

export default Footer;
