import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getResponse } from '../../services/CommonAPI';

export default function index() {
  const [searchParams] = useSearchParams();
  const [state, setState] = React.useState({ data: {} });
  const getSingleData = async () => {
    try {
      let id = searchParams.get('id');

      const res = await getResponse(`clothes/getClothes/?id=${id}`, {});

      setState({ data: res?.payload?.photos[0] });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getSingleData();
  }, []);
  console.log(state?.data);
  return (
    <div class="page">
      <div class="card section">
        <div class="card__center center">
          <div class="card__row">
            <div class="card__col">
              <div class="card__gallery">
                <div class="card__container" id="gallery">
                  <div class="card__slider js-slider-card">
                    <div class="card__slide">
                      <a
                        class="card__preview active"
                        data-image={state?.data?.image?.[0]}
                        data-zoom-image={state?.data?.image?.[0]}
                        href="#"
                      >
                        <img
                          class="card__pic"
                          src={state?.data?.image?.[0]}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card__wrap">
                  <div class="card__status card__status_sale">20% OFF</div>
                  <div class="card__preview">
                    <img
                      class="card__pic js-zoom"
                      src={state?.data?.image?.[0]}
                      alt=""
                      data-zoom-image={state?.data?.image?.[0]}
                    />
                  </div>
                  <div class="card__icon">
                    <svg class="icon icon-magnifier">
                      <use xlink:href="img/sprite.svg#icon-magnifier"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card__col">
              <h1 class="card__title title">{state?.data?.name}</h1>
              <div class="card__details">
                {state?.data?.size?.map((sizeData, index) => {
                  return (
                    <div class="card__category yellow" key={index}>
                      {sizeData}
                    </div>
                  );
                })}
                <div class="card__prices">
                  <div class="card__actual">${state?.data?.price}</div>
                </div>
              </div>

              <div class="card__control">
                <div class="card__counter counter js-counter">
                  <button
                    class="counter__btn counter__btn_minus js-counter-minus"
                    type="button"
                  >
                    <svg class="icon icon-arrow-prev">
                      <use xlink:href="img/sprite.svg#icon-arrow-prev"></use>
                    </svg>
                  </button>
                  <input
                    class="counter__input js-counter-input"
                    type="text"
                    value="1"
                    size="3"
                  />
                  <button
                    class="counter__btn counter__btn_plus js-counter-plus"
                    type="button"
                  >
                    <svg class="icon icon-arrow-next">
                      <use xlink:href="img/sprite.svg#icon-arrow-next"></use>
                    </svg>
                  </button>
                </div>
                <a class="card__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
                <button class="card__favorite">
                  <svg class="icon icon-heart-border">
                    <use xlink:href="img/sprite.svg#icon-heart-border"></use>
                  </svg>
                  <svg class="icon icon-heart-fill">
                    <use xlink:href="img/sprite.svg#icon-heart-fill"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details section">
        <div class="details__center center">
          <div class="details__row">
            <div class="details__col">
              <h1 class="details__title title">Explore the Features</h1>
            </div>
            <div class="details__col">
              <div class="details__item">
                <div class="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="details__box">
                  <div class="details__category">Natural</div>
                  <div class="details__text">
                    We are using natural ingredients only when creating our
                    products.
                  </div>
                </div>
              </div>
              <div class="details__item">
                <div class="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="details__box">
                  <div class="details__category">Full Protection</div>
                  <div class="details__text">
                    This product provides broad spectrum SPF 50 and blue light
                    protection.
                  </div>
                </div>
              </div>
              <div class="details__item">
                <div class="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                    <path d="M22 9h8v8"></path>
                  </svg>
                </div>
                <div class="details__box">
                  <div class="details__category">Trending</div>
                  <div class="details__text">
                    It is one of our most popular products that we have on
                    offer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="review section">
        <div class="review__center center">
          <div class="review__container">
            <div class="review__box">
              <h2 class="review__title title">What our Customers are Saying</h2>
            </div>
            <div class="review__wrap">
              <div class="review__slider js-slider-review">
                <div class="review__item">
                  <div class="review__ava">
                    <img class="review__pic" src="img/ava-1.jpg" alt="" />
                  </div>
                  <div class="review__author">Amy Smith</div>
                  <div class="review__text">
                    This is the best website I have ordered something from. I
                    highly recommend.
                  </div>
                </div>
                <div class="review__item">
                  <div class="review__ava">
                    <img class="review__pic" src="img/ava-1.jpg" alt="" />
                  </div>
                  <div class="review__author">Amy Smith</div>
                  <div class="review__text">
                    This is the best website I have ordered something from. I
                    highly recommend. I highly recommend.
                  </div>
                </div>
                <div class="review__item">
                  <div class="review__ava">
                    <img class="review__pic" src="img/ava-1.jpg" alt="" />
                  </div>
                  <div class="review__author">Amy Smith</div>
                  <div class="review__text">
                    This is the best website I have ordered something from. I
                    highly recommend.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
