import React, { useState } from 'react';
import SmallDownIcon from '../icons/smallDownIcon';
import { GlobalContext } from '../context/States/GlobalState';
import { Link } from 'react-router-dom';
// import Permission from './../components/Permission/index';
import Avatar from '../assets/images/avatar.png';

const AvatarDropdown = () => {
  const { Global } = React.useContext(GlobalContext);
  const [profileImage, setProfileImage] = useState(Global?.image ?? Avatar);
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    setOpen(false);
    sessionStorage.clear();
    window.location.reload(true);
    window.location.href = '/login';
  };

  React.useEffect(() => {
    setProfileImage(Global?.image);
  }, [Global?.image]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center w-full mr-0 text-sm font-medium focus:outline-none"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src={profileImage ?? Avatar}
          alt="user photo"
        />
        <div className="hidden w-full lg:block">
          <div className="flex items-center justify-between gap-2">
            <p className="text-base font-bold truncate">
              {Global?.user?.fullName}
            </p>
            <SmallDownIcon />
          </div>
          <p className="font-normal text-left text-light-gray">
            {Global?.user?.roleId}
          </p>
        </div>
      </button>

      <div
        id="dropdownAvatarName"
        className={`z-10 ${
          open ? 'block' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 right-0 left-auto `}
      >
        <div className="block w-full px-4 py-2 lg:hidden">
          <p className="text-base font-bold truncate">
            {Global?.login?.fullName}
          </p>
          <p className="font-normal text-left text-light-gray">
            {Global?.login?.roleId}
          </p>
        </div>
        <div className="px-4 py-3 text-sm text-gray-900">
          <div className="truncate">{Global?.user?.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          {/* <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Dashboard
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/User"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Permission
            </Link>
          </li> */}
          <li>
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Profile
            </Link>
          </li>
          {([1, 4].includes(Global?.login?.roleWeight) ||
            (Global?.login?.roleWeight == 6 &&
              ['part-time', 'casual'].includes(
                Global?.login?.employmentStatus
              ))) && (
            <li>
              <Link
                to="/availabilityForm"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Availability Form
              </Link>
            </li>
          )}
          {/* <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Settings
            </Link>
          </li> */}
        </ul>
        <div className="py-2">
          <Link
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;
