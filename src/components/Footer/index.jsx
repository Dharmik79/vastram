import React from 'react';
import { getResponse } from '../../services/CommonAPI';
import faceBook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
export default function index() {
  const [state, setState] = React.useState({});

  const getData = async () => {
    const res = await getResponse('/categories/getCategories/', {});
    setState({ categories: res?.payload?.categories });
    console.log(res?.payload?.categories);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-gray-100 rounded-lg shadow m-11 p-16">
      <footer class="footer">
        <div class="footer__center center">
          <div class="footer__row">
            <div class="footer__col">
              <a class="footer__logo" href="/">
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
              <div className="flex gap-x-5">
                <img src={faceBook} width={30} height={30} />
                <img src={instagram} width={30} height={30} />
                <img src={twitter} width={30} height={30} />
              </div>
            </div>
            <div class="footer__col">
              <div class="footer__category">Categories</div>
              <div class="footer__menu">
                {state?.categories?.map((item) => {
                  return (
                    <a class="footer__link" href="/">
                      {item?.text?.[0]}
                    </a>
                  );
                })}
              </div>
            </div>
            <div class="footer__col">
              <div class="footer__category">Company</div>
              <div class="footer__menu">
                <a class="footer__link" href="/AboutUS">
                  About
                </a>
                <a class="footer__link" href="/faq">
                  Faq
                </a>

                <a class="footer__link" href="/legal">
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
