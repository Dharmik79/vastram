import React from 'react';
import { GlobalContext } from './../../context/States/GlobalState';

const Index = () => {
  const { Global } = React.useContext(GlobalContext);

  const total=Global?.cart?.reduce((acc, item) => acc + ((item?.price||100)*(item?.count ||1)), 0) ||0;

  return (
    <div class="page">
      <div class="cart section">
        <div class="cart__center center">
          <div class="cart__head">
            <div class="cart__box">
              <h2 class="cart__title title">Your Shopping Cart</h2>
            </div>
          </div>
          <div class="cart__row">
            <div class="cart__col">
              <div class="cart__list">
                {Global?.cart?.map((item, key) => {
                  return (
                    <div class="cart__item" key={key}>
                      <a class="cart__preview" href="#">
                        <img
                          class="cart__pic"
                          src={item?.image?.[0]}
                          alt=""
                        />
                      </a>
                      <div class="cart__details">
                        <a class="cart__product" href="#">
                          {item?.name}
                        </a>
                        <div class="cart__price">
                          <div class="cart__actual">${item?.price}</div>
                        </div>
                        <div class="cart__control">
                          <div class="cart__counter counter js-counter">
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
                              value={item?.count ||1}
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
                         
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="cart__col">
              <div class="cart__receipt">
                <div class="cart__category">Cart Total</div>
                <div class="cart__wrap">
                  <div class="cart__line">
                    <div class="cart__text">Subtotal:</div>
                    <div class="cart__text">${total}</div>
                  </div>
                  <div class="cart__line">
                    <div class="cart__text">Tax:</div>
                    <div class="cart__text">${total*0.11}</div>
                  </div>
                 
                  <div class="cart__line cart__line_total">
                    <div class="cart__text">Total:</div>
                    <div class="cart__text">${Math.floor(total*1.11).toFixed(2)}</div>
                  </div>
                </div>
                <a class="cart__btn btn btn_green btn_wide" href="/checkout">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
