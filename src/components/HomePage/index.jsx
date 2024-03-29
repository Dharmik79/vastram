import React, { useState, useEffect, useContext } from 'react';
import * as yup from 'yup';
import { GlobalContext } from './../../context/States/GlobalState';
import makeAnimated from 'react-select/animated';
import { getResponse } from '../../services/CommonAPI';
import { useSearchParams, Link } from 'react-router-dom';

const schema = yup.object().shape({
  firstName: yup.string().max(50).required('Please Enter Role'),
  lastName: yup.string().max(50).required('Please Enter Role'),
  email: yup.string().max(50).required('Please Enter Role'),
  role: yup.string().max(50).required('Please Enter Role'),
});

export default function index() {
  const [searchParams] = useSearchParams();

  const [state, setState] = useState({ data: [] });

  const { addCart } = React.useContext(GlobalContext);
  const getData = async (id) => {
    let query = 'clothes/getClothes/';

    if (id) {
      query = `clothes/getClothes/?cid=${id}`;
    }
    let res = await getResponse(query, {});

    setState({ data: res?.payload?.photos });
  };
  React.useEffect(() => {
    let id = searchParams.get('id');

    getData(id);
  }, []);
  return (
    <div>
      <div class="products products_main section">
        <div class="products__center center">
          <div class="products__list">
            {state?.data?.map((item, key) => {
              return (
                <div class="product" key={key}>
                  <div class="product__sale">20% OFF</div>
                  <div class="product__view">
                    <Link to={`/single-product?id=${item?._id}`}>
                      <a class="product__preview">
                        <img class="product__pic" src={item?.image[0]} alt="" />
                      </a>
                    </Link>
                  </div>

                  <div class="product__details">
                    <div class="product__category #480F27">{item?.name}</div>
                    <div class="product__price">
                      <span class="product__actual">${item?.price || 20}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
