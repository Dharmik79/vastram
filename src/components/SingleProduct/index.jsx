import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getResponse } from '../../services/CommonAPI';
import SvgIcon from '../../assets/images/sprite.svg';
import { GlobalContext } from './../../context/States/GlobalState';

export default function index() {
  const [searchParams] = useSearchParams();
  const [state, setState] = React.useState({
    data: {
      count: 1,
      sizeSelected: undefined,
    },
  });
  const getSingleData = async () => {
    try {
      let id = searchParams.get('id');

      const res = await getResponse(`clothes/getClothes/?id=${id}`, {});

      setState({ data: res?.payload?.photos[0] });
    } catch (e) {
      console.log(e);
    }
  };
  const { addCart, Global } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getSingleData();
  }, []);

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
                    <div
                      className={`card__category   ${
                        state?.data?.sizeSelected == sizeData
                          ? 'green'
                          : 'yellow'
                      }`}
                      key={index}
                      onClick={() => {
                        setState({
                          data: { ...state.data, sizeSelected: sizeData },
                        });
                      }}
                    >
                      {sizeData}
                    </div>
                  );
                })}
                <div class="card__prices">
                  <div class="card__actual">${state?.data?.price}</div>
                </div>
              </div>

              <div class="card__control ">
                <div className="flex items-center mx-7">
                  <button
                    className=" text-black"
                    onClick={() => {
                      setState({
                        data: {
                          ...state.data,
                          count: (state?.data?.count || 1) - 1,
                        },
                      });
                    }}
                  >
                    -
                  </button>
                  <input
                    className="text-black text-center"
                    type="text"
                    value={state?.data?.count || 1}
                    size="2"
                  />
                  <button
                    className=" text-black"
                    onClick={() => {
                      setState({
                        data: {
                          ...state.data,
                          count: (state?.data?.count || 1) + 1,
                        },
                      });
                    }}
                  >
                    +
                  </button>
                </div>
                <a
                  class="card__btn btn btn_green"
                  onClick={() => {
                    addCart(state?.data);
                  }}
                >
                  Add Cart
                </a>
                <Link
                  class="card__btn btn btn_green"
                  to='/measurementForm'
                >
                  Customize
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details section">
        <div class="details__center center">
          <div class="details__row">
            <div class="details__col">
              <h1 class="details__title title">Size Chart</h1>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/UcveEV4sSoE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>

            <div class="details__col">
              <div>
                <div class="details__item">
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
