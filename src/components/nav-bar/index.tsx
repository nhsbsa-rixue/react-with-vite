import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

import CartButton from "../paypal/CartButton";

export default () => {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      if (navBar) {
        navBar.classList.toggle('scrolled', window.scrollY > navBar.clientHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 return (
  <nav className="nav-bar" >
      <div className="header-container">
        <p className="title-section">
          <span className="vibrant-heading">Forever</span>
          <span className="large-roboto-text"> </span>
          <span className="elegant-heading">Flowers</span>
        </p>
        <div className="navigation-bar">
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link-text-style' : 'primary-navigation-link')}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link-text-style' : 'primary-navigation-link')}>Shop</NavLink>
        {/* <NavLink to="/contact"  className={({ isActive }) => (isActive ? 'active-link-text-style' : 'primary-navigation-link')}>Contact</NavLink> */}
        
        </div>
        <div className="header-navigation">
          <CartButton />
          {/* <SvgIcon1 className="svg-container" />
          <SvgIcon2 className="svg-container1" /> */}
        </div>
      </div>
</nav>
 )

};