import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../icons/searchIcon';
import SearchSmallIcon from '../icons/searchSmallIcon';
import NotificationIcon from '../icons/notificationIcon';
import AvatarDropdown from '../widget/AvatarDropdown';
import logo from './../assets/images/logo1.png';
import ToggleIcon from '../icons/toggleIcon';
import Notification from '../components/Notification';
import NotificationDropdown from '../components/Notification/NotificationDropdown';

const Header = ({
  broken,
  setToggled,
  toggled,
  setOpen,
  searchbar = 'true',
}) => {
  const [mobileSearch, setMobileSearch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const loginData = sessionStorage.getItem('login');
  const token = window.sessionStorage?.getItem('token');
  const mobileToggle = async () => {
    await setToggled(!toggled);
    await setOpen(true);
  };
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-1 bg-white border-b border-gray-200 header-shadow">
      <div className="flex items-center gap-4">
        {broken && (
          <button
            className="flex items-center justify-center w-8 h-8 mr-3 border rounded-md text-primary border-primary"
            onClick={() => mobileToggle()}
          >
            <ToggleIcon size="12" />
          </button>
        )}
        <Link to="/">
          <img src={logo} className="h-[62px]" alt="" />
        </Link>
      </div>
      {/* {searchbar && (
        <div className="relative items-center hidden sm:flex w-96">
          <input
            type="text"
            className="bg-light-gray bg-opacity-20 py-3 px-4 text-sm outline-none placeholder:text-[#03273B] w-full rounded-lg border border-gray-300"
            placeholder="Type to Search..."
          />
          <button className="absolute right-3">
            <SearchIcon />
          </button>
        </div>
      )} */}
      <div className="flex items-center justify-end ">
        <div className="flex items-center">
          {/* <div className="flex items-center h-full px-3 sm:hidden text-light-gray">
            {searchbar && (
              <button onClick={() => setMobileSearch(!mobileSearch)}>
                <SearchSmallIcon />
              </button>
            )}
            {mobileSearch && (
              <div className="absolute left-0 z-10 w-full p-4 bg-white border-b border-gray-200 top-[70px]">
                <div className="relative flex items-center w-full">
                  <input
                    type="text"
                    className=" py-3 px-4 text-sm outline-none placeholder:text-[#03273B] w-full rounded-lg border border-gray-300"
                    placeholder="Type to Search..."
                  />
                  <button className="absolute right-3">
                    <SearchIcon />
                  </button>
                </div>
              </div>
            )}
          </div> */}
          {/* {searchbar && (
            <div className="h-7 w-[1px] bg-gray-200 sm:hidden block"></div>
          )} */}
          {/* <div className="flex items-center h-full px-3">
            <Link to="">
              <MicIcon />
            </Link>
          </div> */}
          <div className="h-7 w-[1px] bg-gray-200"></div>
          {/* <div className="flex items-center h-full px-3">
            <NotificationDropdown />
          </div> */}
          {/* <div className="flex items-center h-full pl-3 lg:px-3 text-light-gray">
            <Link to="">
              <SettingIcon size="18px" />
            </Link>
          </div> */}
          <div className="h-7 w-[1px] bg-gray-200 lg:block hidden"></div>
          {/* <div className="items-center hidden h-full lg:flex">
            <CountryDropdown />
          </div> */}
        </div>
        <div className="h-full pl-3">
          {token ? (
            <AvatarDropdown />
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
      <Notification open={modalOpen} setOpen={() => setModalOpen(!modalOpen)} />
    </div>
  );
};

export default Header;
