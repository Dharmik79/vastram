import React from 'react';

export default function index() {
  return (
    <div className="">
      <footer class="footer">
        <div class="footer__center center">
          <div class="footer__row">
            <div class="footer__col">
              <a class="footer__logo" href="index.html">
                <img
                  class="footer__pic footer__pic_black-desktop"
                  src="../../assets/img/logo.svg"
                  alt=""
                />
                <img
                  class="footer_pic footer__pic_white-desktop"
                  src="../../assets/img/logo-white.svg"
                  alt=""
                />
                <img
                  class="footer_pic footer__pic_black-mobile"
                  src="../../assets/img/logo-mobile.svg"
                  alt=""
                />
                <img
                  class="footer_pic footer__pic_white-mobile"
                  src="../../assets/img/logo-mobile-white.svg"
                  alt=""
                />
              </a>
              <div class="footer__copyright">© 2024 - All rights reserved</div>
              <div class="footer__social social">
                <a class="social_link" href="" target="_blank">
                  <svg class="icon icon-instagram">
                    <use href="img/sprite.svg#icon-instagram"></use>
                  </svg>
                </a>
                <a class="social__link" href="" target="_blank">
                  <svg class="icon icon-twitter">
                    <use href="img/sprite.svg#icon-twitter"></use>
                  </svg>
                </a>
                <a class="social__link" href="" target="_blank">
                  <svg class="icon icon-facebook">
                    <use href="img/sprite.svg#icon-facebook"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="footer__col">
              <div class="footer__category">Categories</div>
              <div class="footer__menu">
                <a class="footer__link" href="category.html">
                  T Shirts
                </a>{' '}
                <a class="footer__link" href="category.html">
                  Shirts
                </a>{' '}
                <a class="footer__link" href="category.html">
                  Ethnic
                </a>{' '}
                <a class="footer__link" href="category.html">
                  Casual
                </a>{' '}
                <a class="footer__link" href="category.html">
                  Jeans
                </a>
                <a class="footer__link" href="category.html">
                  Formal
                </a>
              </div>
            </div>
            <div class="footer__col">
              <div class="footer__category">Company</div>
              <div class="footer__menu">
                <a class="footer__link" href="about-us.html">
                  About
                </a>
                <a class="footer__link" href="faq.html">
                  Faq
                </a>
                <a class="footer__link" href="contacts.html">
                  Contact
                </a>
                <a class="footer__link" href="#">
                  Vision
                </a>
                <a class="footer__link" href="legal-page.html">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
