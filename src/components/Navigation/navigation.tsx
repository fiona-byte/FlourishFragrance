import { Link } from 'react-router-dom';
import { HashLink as LinkH } from 'react-router-hash-link';
import Hamburger from '../../assets/svgs/hamburger';
import logo from '../../assets/svgs/logo.svg';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <button className='navigation__btn'>
        <Hamburger />
      </button>
      <div className='navigation__container'>
        <ul className='navigation__item'>
          <li className='navigation__list'>
            <LinkH to='/#products' smooth className='navigation__link'>
              Products
            </LinkH>
          </li>
          <li className='navigation__list'>
            <LinkH to='/#about' smooth className='navigation__link'>
              About
            </LinkH>
          </li>
          <li className='navigation__list'>
            <LinkH to='/contact' smooth className='navigation__link'>
              Contact
            </LinkH>
          </li>
        </ul>
        <div className='navigation__logo--container'>
          <Link to='/'>
            <img src={logo} alt='logo' className='navigation__logo' />
          </Link>
        </div>
        <ul className='navigation__item'>
          <li className='navigation__list'>
            <a href='/' className='navigation__link'>
              Wishlist
            </a>
          </li>
          <li className='navigation__list'>
            <a href='/' className='navigation__link'>
              Cart(0)
            </a>
          </li>
          <li className='navigation__list'>
            <a href='/sign-in' className='navigation__link'>
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
