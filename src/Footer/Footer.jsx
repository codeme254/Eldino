import React from "react";
import { Instagram, Facebook, Twitter, LinkedIn } from "../Assets/Icons/Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__box footer__container--about">
          <h3 className="footer__title">about</h3>
          <p className="footer__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            enim illum deleniti tempore dignissimos, provident libero ab facilis
            doloribus. Sit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente doloribus unde earum cum ipsam deserunt dolore in
            placeat eius veniam!
          </p>
          <div className="footer__social-icons">
            <a href="/" className="footer__social-icon--link">
              <Facebook />
            </a>
            <a href="/" className="footer__social-icon--link">
              <Instagram />
            </a>
            <a href="/" className="footer__social-icon--link">
              <Twitter />
            </a>
            <a href="/" className="footer__social-icon--link">
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="footer__box footer__container--helpful-links">
          <h3 className="footer__title">helpful links</h3>
          <ol className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                privacy
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                terms
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                pricing
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                mailing list
              </a>
            </li>
          </ol>
        </div>
        <div className="footer__box footer__container--quick-links">
          <h3 className="footer__title">quick links</h3>
          <ol className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                home
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                about
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                services
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                testimonies
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                opportunities
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                career
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                contacts
              </a>
            </li>
          </ol>
        </div>
        <div className="footer__box footer__container--resources">
          <h3 className="footer__title">resources</h3>
          <ol className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                ultimate retirement guide
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                download
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                elderly guide
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__item--link">
                movies
              </a>
            </li>
          </ol>
        </div>
      </div>
      <p className="footer__copyright">
          Developed with <span className="footer__copyright--icon">&hearts;</span> by Dennis Otwoma. Fell free to use this project for anything.
      </p>
    </footer>
  );
};
export default Footer;
