import React, { useRef } from "react";
import {
  Twitter,
  FacebookOutline,
  LinkedinOutlined,
  MenuIcon,
} from "../Assets/Icons/Icons";

const Nav = () => {
  const navRef = useRef(null);
  const handleNav = () => {
    navRef.current.classList.toggle("header__nav--active");
  };
  return (
    <header className="header">
      <h3 className="header__logo">
        Eldino<span>...</span>
      </h3>
      <nav className="header__nav" ref={navRef}>
        <ol className="header__list">
          <li className="header__list--item">
            <a href="#home" className="header__item--link">
              home
            </a>
          </li>
          <li className="header__list--item">
            <a href="#about" className="header__item--link">
              about
            </a>
          </li>
          <li className="header__list--item">
            <a href="#success" className="header__item--link">
              success
            </a>
          </li>
          <li className="header__list--item">
            <a href="#services" className="header__item--link">
              services
            </a>
          </li>
          <li className="header__list--item">
            <a href="#goals" className="header__item--link">
              goals
            </a>
          </li>
          <li className="header__list--item">
            <a href="#testimonies" className="header__item--link">
              testimonies
            </a>
          </li>
          <li className="header__list--item">
            <a href="#opportunities" className="header__item--link">
              opportunities
            </a>
          </li>
          <li className="header__list--item">
            <a href="#news-and-updates" className="header__item--link">
              news & updates
            </a>
          </li>
          <li className="header__list--icons-item">
            <a
              href="https://www.facebook.com/MY-coding-LIFE-101626235274947"
              className="header__link-icon"
            >
              <FacebookOutline />
            </a>
            <a
              href="https://twitter.com/Zaphenath254"
              className="header__link-icon"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/otwoma/"
              className="header__link-icon"
            >
              <LinkedinOutlined />
            </a>
          </li>
        </ol>
      </nav>
      <button className="header__button" onClick={handleNav}>
        <MenuIcon />
      </button>
    </header>
  );
};
export default Nav;
