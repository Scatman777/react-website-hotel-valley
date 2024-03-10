export default function HeaderBurger() {
  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul class="burger">
        <div className="header__li">
          <a href="#">Главная</a>
        </div>
        <div className="header__li">
          <a href="#">Номера</a>
        </div>
        <div className="header__li">
          <a href="#">Развлечения</a>
        </div>
        <div className="header__li">
          <a href="#">Трансфер</a>
        </div>
        <div className="header__li">
          <a href="#">Контакты</a>
        </div>
      </ul>
    </div>
  );
}