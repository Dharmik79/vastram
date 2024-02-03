import React from 'react';
import { GlobalContext } from './../../context/States/GlobalState';

import { postResponse } from '../../services/CommonAPI';

const index = () => {
  const { Global } = React.useContext(GlobalContext);

  const total =
    Global?.cart?.reduce(
      (acc, item) => acc + (item?.price || 100) * (item?.count || 1),
      0
    ) || 0;
  const [state, useState] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    country: '',
    code: '',
  });

  const handleSubmit = async () => {
    try {
      const data = Global?.cart?.map((item) => {
        return { pid: item?._id, qty: item?.count };
      });
      data.uid = Global?.login?.admin?._id;
      const response = await postResponse('/cart/addCart', data);

      if (response?.payload?.createCart?.[0]) {
        const orderProduct = await postResponse('order/addOrder', {
          uid: Global?.login?.admin?._id,
          cid: response?.payload?.createCart?.[0]?._id,
        });

        if (orderProduct?.payload?.[0]) {
          alert('Order Placed Successfully');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

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
                    <div class="checkout__el">
                      <div class="checkout__fieldset">
                        <div class="checkout__field field">
                          <div class="field__label">Card Number</div>
                          <div class="field__wrap">
                            <input
                              class="field__input"
                              type="number"
                              name="card"
                              maxLength={16}
                              onChange={(e) =>
                                useState({
                                  ...state,
                                  cardNumber: e.target.value,
                                })
                              }
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
                                  onChange={(e) =>
                                    useState({
                                      ...state,
                                      expiryDate: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    useState({ ...state, cvv: e.target.value })
                                  }
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
                                  onChange={(e) =>
                                    useState({
                                      ...state,
                                      country: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    useState({ ...state, code: e.target.value })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        class="checkout__btn btn btn_green btn_wide"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
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
                      <div class="cart__text">${total * 0.11}</div>
                    </div>

                    <div class="cart__line cart__line_total">
                      <div class="cart__text">Total:</div>
                      <div class="cart__text">
                        ${Math.floor(total * 1.11).toFixed(2)}
                      </div>
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
