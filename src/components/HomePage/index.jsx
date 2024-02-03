import React, { useState, useEffect, useContext } from 'react';
import * as yup from 'yup';
import { GlobalContext } from './../../context/States/GlobalState';
import makeAnimated from 'react-select/animated';

const schema = yup.object().shape({
  firstName: yup.string().max(50).required('Please Enter Role'),
  lastName: yup.string().max(50).required('Please Enter Role'),
  email: yup.string().max(50).required('Please Enter Role'),
  role: yup.string().max(50).required('Please Enter Role'),
});

const animatedComponents = makeAnimated();

export default function index() {
  const { Global, storeRole } = useContext(GlobalContext);
  const [state, setState] = useState({ data: [] });

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
 
  

  return (
    <div>
      <div class="products products_main section">
        <div class="products__center center">
          <div class="products__list">
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-1.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Sun Cream
              </a>
              <div class="product__details">
                <div class="product__category yellow">Sun Care</div>
                <div class="product__price">
                  <span class="product__old">$30</span>
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-2.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Night Eye Cream
              </a>
              <div class="product__details">
                <div class="product__category blue">EYE CARE</div>
                <div class="product__price">
                  <span class="product__old">$30</span>
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-3.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Acne Skin Gel
              </a>
              <div class="product__details">
                <div class="product__category pink">Treatments</div>
                <div class="product__price">
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-4.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Anti Dry Skin
              </a>
              <div class="product__details">
                <div class="product__category green">Moisturizers</div>
                <div class="product__price">
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__new">NEW IN</div>
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-5.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Body Protection
              </a>
              <div class="product__details">
                <div class="product__category yellow">Treatments</div>
                <div class="product__price">
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-6.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                All In One Gel
              </a>
              <div class="product__details">
                <div class="product__category blue">FEATURED</div>
                <div class="product__price">
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-7.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Deep Treatment
              </a>
              <div class="product__details">
                <div class="product__category pink">ON SALE</div>
                <div class="product__price">
                  <span class="product__old">$30</span>
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="product__view">
                <a class="product__preview" href="product.html">
                  <img
                    class="product__pic"
                    src="img/products/product-pic-8.png"
                    alt=""
                  />
                </a>
                <a class="product__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
              </div>
              <a class="product__name" href="product.html">
                Morning Shine
              </a>
              <div class="product__details">
                <div class="product__category green">NIGHT CARE</div>
                <div class="product__price">
                  <span class="product__actual">$20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
