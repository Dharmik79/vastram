import React, { useState } from 'react';
import SmallDownIcon from '../icons/smallDownIcon';
import { GlobalContext } from '../context/States/GlobalState';
import { Link } from 'react-router-dom';
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
      <img
        className="w-10 h-10 mr-2 rounded-full"
        src={profileImage ?? Avatar}
        alt="user photo"
      />
    </div>
  );
};

export default AvatarDropdown;
