import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" />
      <p className="header__date-location">Date and Location</p>
      <button className="header__button-add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img src="" alt="" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
