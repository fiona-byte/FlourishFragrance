import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as LinkH } from 'react-router-hash-link';
import Hamburger from '../../assets/svgs/hamburger';
import './navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleStickyNav = (): void => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNav);
  });

  return (
    <nav className={isScrolled ? 'navigation navigation__scrolled' : 'navigation'}>
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
            <img
              src='https://res.cloudinary.com/dw4rdnuqh/image/upload/v1660999508/FlourishFragrance/logo_opmwur.svg'
              alt='logo'
              className='navigation__logo'
            />
          </Link>
        </div>
        <ul className='navigation__item'>
          <li className='navigation__list'>
            <Link to='/' className='navigation__link'>
              Wishlist
            </Link>
          </li>
          <li className='navigation__list'>
            <Link to='/' className='navigation__link'>
              Cart(0)
            </Link>
          </li>
          <li className='navigation__list'>
            <Link to='/signin' className='navigation__link'>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
