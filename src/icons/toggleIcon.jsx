import React from 'react';

const ToggleIcon = ({ size = '16' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 18 16"
      fill="none"
    >
      <path
        d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ToggleIcon;
