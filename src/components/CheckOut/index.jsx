import React from 'react';
import MegaMenu from "../Megamenu/index"


const index = () => {
  return (
    <div class="page">

    <MegaMenu/>
      <div class="checkout section js-checkout">
        <div class="checkout__center center">
          <h2 class="checkout__title title title_mb-lg">Checkout</h2>
          <div class="checkout__row">
            <div class="checkout__col">
              <div class="checkout__steps">
                <div class="checkout__step js-checkout-step active">1</div>
                <div class="checkout__step js-checkout-step">2</div>
                <div class="checkout__step js-checkout-step">3</div>
                <div class="checkout__step js-checkout-step">4</div>
              </div>
              <div class="checkout__container">
                <div class="checkout__item js-checkout-item">
                  <div class="checkout__category">Details</div>
                  <div class="checkout__fieldset">
                    <div class="checkout__field field">
                      <div class="field__label">Email Address</div>
                      <div class="field__wrap">
                        <input class="field__input" type="email" name="email" />
                      </div>
                    </div>
                    <div class="checkout__field field">
                      <div class="field__label">Password</div>
                      <div class="field__wrap">
                        <input
                          class="field__input"
                          type="password"
                          name="password"
                        />
                      </div>
                    </div>
                  </div>
                  <button class="checkout__btn btn btn_green btn_wide js-checkout-btn">
                    Continue
                  </button>
                </div>
                <div class="checkout__item js-checkout-item">
                  <div class="checkout__category">Shipping Details</div>
                  <div class="checkout__fieldset">
                    <div class="checkout__field field">
                      <div class="field__label">Full Name</div>
                      <div class="field__wrap">
                        <input class="field__input" type="text" name="name" />
                      </div>
                    </div>
                    <div class="checkout__field field">
                      <div class="field__label">Street Name</div>
                      <div class="field__wrap">
                        <input class="field__input" type="text" name="street" />
                      </div>
                    </div>
                    <div class="checkout__line">
                      <div class="checkout__cell">
                        <div class="checkout__field field">
                          <div class="field__label">House Number</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="text"
                              name="house"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="checkout__cell">
                        <div class="checkout__field field">
                          <div class="field__label">City</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="text"
                              name="city"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="checkout__line">
                      <div class="checkout__cell">
                        <div class="checkout__field field">
                          <div class="field__label">Country</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="text"
                              name="country"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="checkout__cell">
                        <div class="checkout__field field">
                          <div class="field__label">ZIP Code</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="text"
                              name="code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="checkout__btn btn btn_green btn_wide js-checkout-btn">
                    Continue
                  </button>
                </div>
                <div class="checkout__item js-checkout-item">
                  <div class="checkout__category">Billing Details</div>
                  <div class="checkout__fieldset">
                    <label class="checkout__checkbox checkbox">
                      <input
                        class="checkbox__input js-checkout-checkbox"
                        type="checkbox"
                        checked
                      />
                      <span class="checkbox__in">
                        <span class="checkbox__tick"></span>
                        <span class="checkbox__text">
                          Same as shipping address
                        </span>
                      </span>
                    </label>
                    <div class="checkout__box js-checkout-box">
                      <div class="checkout__field field">
                        <div class="field__label">Full Name</div>
                        <div class="field__wrap">
                          <input class="field__input" type="text" name="name" />
                        </div>
                      </div>
                      <div class="checkout__field field">
                        <div class="field__label">Street Name</div>
                        <div class="field__wrap">
                          <input
                            class="field__input"
                            type="text"
                            name="street"
                          />
                        </div>
                      </div>
                      <div class="checkout__line">
                        <div class="checkout__cell">
                          <div class="checkout__field field">
                            <div class="field__label">House Number</div>
                            <div class="field__wrap">
                              <input
                                class="field__input"
                                type="text"
                                name="house"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="checkout__cell">
                          <div class="checkout__field field">
                            <div class="field__label">City</div>
                            <div class="field__wrap">
                              <input
                                class="field__input"
                                type="text"
                                name="city"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="checkout__line">
                        <div class="checkout__cell">
                          <div class="checkout__field field">
                            <div class="field__label">Country</div>
                            <div class="field__wrap">
                              <input
                                class="field__input"
                                type="text"
                                name="country"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="checkout__cell">
                          <div class="checkout__field field">
                            <div class="field__label">ZIP Code</div>
                            <div class="field__wrap">
                              <input
                                class="field__input"
                                type="text"
                                name="code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="checkout__btn btn btn_green btn_wide js-checkout-btn">
                    Continue
                  </button>
                </div>
                <div class="checkout__item js-checkout-item">
                  <div class="checkout__category">Payment Details</div>
                  <div class="checkout__variants">
                    <label class="checkout__checkbox checkbox js-checkout-payment">
                      <input
                        class="checkbox__input js-checkout-radio"
                        type="radio"
                        name="payment"
                        checked
                      />
                      <span class="checkbox__in">
                        <span class="checkbox__tick"></span>
                        <span class="checkbox__text">Credit Card</span>
                      </span>
                    </label>
                  </div>
                  <div class="checkout__group">
                    <div class="checkout__el js-checkout-el">
                      <div class="checkout__fieldset">
                        <div class="checkout__field field">
                          <div class="field__label">Card Number</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="tel"
                              name="card"
                            />
                          </div>
                        </div>
                        <div class="checkout__line">
                          <div class="checkout__cell">
                            <div class="checkout__field field">
                              <div class="field__label">Expiry Date</div>
                              <div class="field__wrap">
                                <input
                                  class="field__input"
                                  type="text"
                                  name="date"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="checkout__cell">
                            <div class="checkout__field field">
                              <div class="field__label">CVV</div>
                              <div class="field__wrap">
                                <input
                                  class="field__input"
                                  type="tel"
                                  name="cvv"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="checkout__line">
                          /
                          <div class="checkout__cell">
                            <div class="checkout__field field">
                              <div class="field__label">Country</div>
                              <div class="field__wrap">
                                <input
                                  class="field__input"
                                  type="text"
                                  name="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="checkout__cell">
                            <div class="checkout__field field">
                              <div class="field__label">ZIP Code</div>
                              <div class="field__wrap">
                                <input
                                  class="field__input"
                                  type="text"
                                  name="code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="checkout__btn btn btn_green btn_wide">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout__col">
              <div class="basket basket_checkout">
                <div class="basket__category">My Cart</div>
                <div class="basket__list">
                  <div class="basket__item">
                    <a class="basket__preview" href="#">
                      <img
                        class="basket__pic"
                        src="img/products/product-pic-4.png"
                        alt=""
                      />
                    </a>
                    <div class="basket__details">
                      <a class="basket__product" href="#">
                        Eye Mask Gel
                      </a>
                      <div class="basket__price">
                        <div class="basket__old">$127</div>
                        <div class="basket__actual">$180</div>
                      </div>
                    </div>
                  </div>
                  <div class="basket__item">
                    <a class="basket__preview" href="#">
                      <img
                        class="basket__pic"
                        src="img/products/product-pic-6.png"
                        alt=""
                      />
                    </a>
                    <div class="basket__details">
                      <a class="basket__product" href="#">
                        Day Eye Cream
                      </a>
                      <div class="basket__price">
                        <div class="basket__actual">$97</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="basket__total">
                  <div class="basket__text">Total:</div>
                  <div class="basket__text">$224</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
