import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/images/logos.svg';
import Avatar from '../../assets/images/avatar.png';
import Cart from '../../icons/availableIcon';
import AvatarDropdown from './../../widget/AvatarDropdown';
import { Link } from 'react-router-dom';
import { GlobalContext } from './../../context/States/GlobalState';
import { getResponse } from '../../services/CommonAPI';

const FashionMegaMenu = () => {
  const { Global } = React.useContext(GlobalContext);

  const [state, setState] = React.useState({});

  const getData = async () => {
    const res = await getResponse('/categories/getCategories/', {});
    setState({ categories: res?.payload?.categories });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="navbar flex justify-between items-center bg-grey-500">
        <a href="/" class="mx-7 navbar-logo">
          <img src={Logo} alt="Logo" className="h-24" />
        </a>
        <div class="dropdown">
          <button class="flex items-left font-bold text-xl">
            Categories
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content overlapClass ml-15">
            {state?.categories?.map((item, key) => {
              return (
                <div class="column" key={key}>
                  <Link className="dropTitle" to={`/?id=${item?._id}`}>
                    {' '}
                    {item?.text?.[0]}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {Global?.login?.admin && (
          <div className="mr-5">
            <div className="flex items-center gap-3">
              {Global?.cart?.length > 0 ? (
                <div
                  className={`relative min-w-[48px] border-2 border-black  header__link_cart`}
                >
                  <Link to="/cart">
                    <Cart />
                  </Link>
                </div>
              ) : (
                <div
                  className={`relative min-w-[48px] border-2 border-black header__link `}
                >
                  <Link to="/cart">
                    <Cart />
                  </Link>
                </div>
              )}

              <div className="relative min-w-[48px] border-2 border-black">
                <img
                  src={Avatar}
                  className="object-cover w-16 h-16 border-2 border-white rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FashionMegaMenu;
