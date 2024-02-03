import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/images/logos.svg';
import Avatar from '../../assets/images/avatar.png';
import Cart from '../../icons/availableIcon';
import AvatarDropdown from './../../widget/AvatarDropdown';
import CloseIcon from '../../icons/closeIcon';
import { Link } from 'react-router-dom';
import { GlobalContext } from './../../context/States/GlobalState';
import { getResponse } from '../../services/CommonAPI';

import FilterIcon from './../../icons/filterIcon';
const FashionMegaMenu = () => {
  const { Global } = React.useContext(GlobalContext);
  const token = window.sessionStorage?.getItem('token');

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
          <button class="flex items-center font-bold text-xl">
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

              <div className="h-full">
                <Link to="/profile">
                  <AvatarDropdown />
                </Link>
              </div>
              <div
                className="h-full"
                onClick={() => {
                  // Clear session storage
                  sessionStorage.clear();
                  window.location.href = '/login';
                  // Optionally, you can also remove specific items from session storage using removeItem
                  // sessionStorage.removeItem('yourKey');
                }}
              >
                <FilterIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FashionMegaMenu;
