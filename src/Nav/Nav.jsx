import React from "react";
import {
  Twitter,
  FacebookOutline,
  LinkedinOutlined,
} from "../Assets/Icons/Icons";

const Nav = () => {
  return (
    <header className="header">
      <h3 className="header__logo">
        Eldino<span>...</span>
      </h3>
      <ol className="header__list">
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            home
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            about
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            success
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            services
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            goals
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            testimonies
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            opportunities
          </a>
        </li>
        <li className="header__list--item">
          <a href="/" className="header__item--link">
            news & updates
          </a>
        </li>
        <li className="header__list--icons-item">
          <a href="/" className="header__link-icon">
            <FacebookOutline />
          </a>
          <a href="/" className="header__link-icon">
            <Twitter />
          </a>
          <a href="/" className="header__link-icon">
            <LinkedinOutlined />
          </a>
        </li>
      </ol>
    </header>
  );
};
export default Nav;
