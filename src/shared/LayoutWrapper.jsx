import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import ToggleIcon from '../icons/toggleIcon';
import HomeIcon from '../icons/homeIcon';
import Header from './Header';
import { GlobalContext } from '../context/States/GlobalState';
import { getResponse } from '../services/CommonAPI';

const LayoutWrapper = ({ children, searchbar, padding = 'p-5' }) => {
  const { Global } = React.useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        toggled={toggled}
        onBreakPoint={setBroken}
        onBackdropClick={() => setToggled(false)}
        collapsed={!open && true}
        backgroundColor="#662483"
        className="text-white"
        breakPoint="lg"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-6 h-[70px] mb-5 border-b border-white text-white px-7 focus:outline-none"
        >
          <ToggleIcon />
        </button>
        <Menu>
          <MenuItem
            href="/"
            className={`group relative mb-4 text-light-gray hover:text-white transition ${
              location.pathname === '/' &&
              'text-white group transition active-sidebar'
            }`}
            icon={<HomeIcon />}
          >
            {' '}
            Dashboard
            {!open && (
              <div className="invisible transition sidebar-min-menu min-menu-1 group-hover:visible">
                Dashboard
              </div>
            )}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="w-full ">
        <Header
          searchbar={searchbar}
          broken={broken}
          toggled={toggled}
          setToggled={setToggled}
          open={open}
          setOpen={setOpen}
        />
        <div className={`${padding} lg:h-[calc(100vh_-_72px)] overflow-auto`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
