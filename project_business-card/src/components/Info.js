import picture from '../images/card_picture2.jpeg';
import email from '../images/email.png';
import '../App.css';

function Links() {
  return (
    <div className="info--links">
      <a href="mailto:moin.bung@gmail.com" className="info--links-email">
        <img className="info--links-icon" src={email} alt="email-icon"/> 
        <span className="info--links-email-text">Email</span>
      </a>
    </div>
  )
}

function Info() {
  return (
    <main className="info">
      <img src={picture} className="info--picture" alt="info-pic"/>
      <h1 className="info--name"> Moin Bung </h1>
      <h3 className="info--role"> Software Engineer </h3>
      <a className="info--site" href="http://www.moinbung.com"> moinbung.com </a>
      <Links />
    </main>
  );
}

export default Info;
