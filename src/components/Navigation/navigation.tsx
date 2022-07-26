// import { Link } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import './navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__container">
                <ul className="navigation__item">
                    <li className="navigation__list">
                        <a href="/" className="navigation__link">Products</a>
                    </li>
                    <li className="navigation__list">
                        <a href="/" className="navigation__link">About</a>
                    </li>
                </ul>
                <div className="navigation__logo--container">
                        <img src={logo} alt="logo" className="navigation__logo" />
                    {/* <Link to="/">
                    </Link> */}
                </div>
                <ul className="navigation__item">
                    <li className="navigation__list">
                        <a href="/" className="navigation__link">Cart(0)</a>
                    </li>
                    <li className="navigation__list">
                        <a href="/" className="navigation__link">Sign in</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation