import React, { useState, useEffect, useContext } from 'react';
import * as yup from 'yup';
import { GlobalContext } from './../../context/States/GlobalState';
import makeAnimated from 'react-select/animated';
import { getResponse } from '../../services/CommonAPI';
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

  const getData = async () => {
    const res = await getResponse('clothes/getClothes/', {});
    
    setState({ data: res?.payload?.photos });
  };
  React.useEffect(() => {
    getData();
  }, []);
 
  

  return (
    <div>
      <div class="products products_main section">
        <div class="products__center center">
          <div class="products__list">
          {state?.data?.map((item,key)=>{
            return <div class="product" key={key}>
            <div class="product__sale">20% OFF</div>
            <div class="product__view">
              <a class="product__preview" href="product.html">
                <img
                  class="product__pic"
                  src={item?.image[0]}
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
              <div class="product__category yellow">{item?.name}</div>
              <div class="product__price">
           
                <span class="product__actual">${item?.price || 20}</span>
              </div>
            </div>
          </div>
          })  }
           
          </div>
        </div>
      </div>
    </div>
  );
}
