import linkedin from '../images/linkedin-mid.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/balmoinparis">
        <img className="footer--links-icon" src={twitter} alt="Twitter icon"/>
      </a>
      <a href="https://linkedin.com/in/moin-bung">
        <img className="footer--links-icon" src={linkedin} alt="LinkedIn icon"/>
      </a>
      <a href="https://github.com/Moin-Bung">
        <img className="footer--links-icon" src={github} alt="GitHub icon"/>
      </a>
    </footer>
  );
}

export default Footer;
