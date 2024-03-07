import '/css/Header-style/App.css'
import HeaderLogo1 from '/header-img/header-logo1.svg'
import HeaderLogo2 from '/header-img/header-logo2.svg'

export default function Header() {
	return (
		<header className="header">
			<div className="header__couintainer _countainer">
				<div className="header__body">
					<div className="header__column-logo">
						<img src={HeaderLogo1} alt="headerLogo1" />
						<img src={HeaderLogo2} alt="headerLogo2" />
					</div>
					<nav className="header__navigation">
						<ul className="header__list">
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
					</nav>
				</div>
			</div>
		</header>
	)
}