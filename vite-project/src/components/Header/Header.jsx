import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="wtwr logo" />
      <p className="header__date-location">Date and Location</p>
      <button className="header__button-add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Asa Bird</p>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
