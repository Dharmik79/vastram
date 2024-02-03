import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import CakeIcon from '../../icons/cakeIcon';
import HomeIcon from '../../icons/homeIcon';
import GroupIcon from '../../icons/groupIcon';
import NotificationIcon from '../../icons/notificationIcon';

const data = [
  {
    icon: <CakeIcon />,
    msg: "Today is John's birthday",
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
  {
    icon: <GroupIcon size="22" />,
    msg: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel minus saepe laborum quia dolor praesentium!',
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
  {
    icon: <CakeIcon />,
    msg: "Today is John's birthday",
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
  {
    icon: <CakeIcon />,
    msg: "Today is John's birthday",
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
  {
    icon: <CakeIcon />,
    msg: "Today is John's birthday",
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
  {
    icon: <CakeIcon />,
    msg: "Today is John's birthday",
  },
  {
    icon: <HomeIcon size="16" />,
    msg: 'You are working from home today',
  },
];
const NotificationDropdown = () => {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button>
            <NotificationIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute sm:right-0 -right-20 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-80 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[calc(100vh_-_200px)] overflow-auto z-10">
            <div className="divide-y divide-gray-200">
              {data.map((items) => {
                return (
                  <Menu.Item>
                    <button className="block w-full p-3 transition hover:bg-primary hover:bg-opacity-5 group">
                      <div className="flex items-center gap-3 text-sm text-left">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-black group-hover:bg-primary group-hover:text-white rounded-full min-w-[40px] transition">
                          {items.icon}
                        </div>
                        <div>
                          <p className="font-medium">{items.msg}</p>
                        </div>
                      </div>
                    </button>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NotificationDropdown;
