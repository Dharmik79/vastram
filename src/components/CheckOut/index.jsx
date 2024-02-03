import React from 'react';
import { GlobalContext } from './../../context/States/GlobalState';


const index = () => {

  const { Global } = React.useContext(GlobalContext);

  const total=Global?.cart?.reduce((acc, item) => acc + ((item?.price||100)*(item?.count ||1)), 0) ||0;

  return (
    <>
      <div class="page">
        <div class="checkout section js-checkout">
          <div class="checkout__center center">
            <h2 class="checkout__title title title_mb-lg">Checkout</h2>
            <div class="checkout__row">
              <div class="checkout__col">
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
               
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
