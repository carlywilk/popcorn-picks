import './Header.scss';
import Logo from '../../assets/images/logo-movie.png';

export function Header () {

    return (
        <header className="header">
            <div className="header__box">
                <img src={Logo} alt="Site Logo" className='header__logo'/>
            </div>
            <div className="header__box">
                <input type="text" className="header__input" placeholder='Find Movie'/>
                <button className="header__button"></button>
            </div>

        </header>
    )
}