import React from 'react';
import ModalWrapper from '../../widget/modalWrapper';
import CakeIcon from '../../icons/cakeIcon';
import HomeIcon from '../../icons/homeIcon';
import GroupIcon from '../../icons/groupIcon';

const Notification = ({ open, setOpen }) => {
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
  return (
    <ModalWrapper
      open={open}
      setOpen={setOpen}
      title="Notifications"
      width="max-w-4xl"
      childrenClass="!p-0"
      modalFooter={
        <>
          <button className="outline-btn" onClick={() => setOpen(false)}>
            Cancel
          </button>{' '}
          <button className="primary-btn">Clear All</button>
        </>
      }
    >
      <div className="divide-y divide-gray-100 ">
        {data.map((items) => {
          return (
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
          );
        })}
      </div>
    </ModalWrapper>
  );
};

export default Notification;
