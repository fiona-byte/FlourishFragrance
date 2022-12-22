import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as LinkH } from 'react-router-hash-link';
import { useMobile } from '../../hooks/useMobile';
import Hamburger from '../../assets/svgs/hamburger';
import X from '../../assets/svgs/x';
import './navigation.css';
import { ClickAwayListener } from '@mui/material';

const Navigation = () => {
  const isMobile = useMobile();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavbar = () => setIsOpen(false);

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
      {isMobile && (
        <div className='navigation__logo--container'>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/dw4rdnuqh/image/upload/v1660999508/FlourishFragrance/logo_opmwur.svg'
              alt='logo'
              className='navigation__logo'
            />
          </Link>
        </div>
      )}
      <div className='navigation__box'>
        {isMobile && (
          <Link to='/cart' className='navigation__link'>
            Cart(0)
          </Link>
        )}
        <button className='navigation__btn' onClick={handleClick}>
          <Hamburger />
        </button>
      </div>
      {/* <ClickAwayListener onClickAway={closeNavbar}> */}
      <div className={isOpen ? 'navigation__container open' : 'navigation__container'}>
        <button className='navigation__btn close' onClick={closeNavbar}>
          <X />
        </button>
        <ul className='navigation__item'>
          <li className='navigation__list'>
            <LinkH to='/#products' smooth className='navigation__link' onClick={closeNavbar}>
              Products
            </LinkH>
          </li>
          <li className='navigation__list'>
            <LinkH to='/#about' smooth className='navigation__link' onClick={closeNavbar}>
              About
            </LinkH>
          </li>
          <li className='navigation__list'>
            <LinkH to='/contact' smooth className='navigation__link' onClick={closeNavbar}>
              Contact
            </LinkH>
          </li>
        </ul>
        {!isMobile && (
          <div className='navigation__logo--container'>
            <Link to='/'>
              <img
                src='https://res.cloudinary.com/dw4rdnuqh/image/upload/v1660999508/FlourishFragrance/logo_opmwur.svg'
                alt='logo'
                className='navigation__logo'
              />
            </Link>
          </div>
        )}
        <ul className='navigation__item'>
          <li className='navigation__list'>
            <Link to='/' className='navigation__link' onClick={closeNavbar}>
              Wishlist
            </Link>
          </li>
          {!isMobile && (
            <li className='navigation__list'>
              <Link to='/cart' className='navigation__link' onClick={closeNavbar}>
                Cart(0)
              </Link>
            </li>
          )}
          <li className='navigation__list'>
            <Link to='/signin' className='navigation__link' onClick={closeNavbar}>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
      {/* </ClickAwayListener> */}
    </nav>
  );
};

export default Navigation;
