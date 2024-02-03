import React, { useState } from 'react';
import EyeIcon from '../icons/eyeIcon';
import EyeCloseIcon from '../icons/eyeCloseIcon';

const PasswordInput = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  mandatory,
  errors,
  touched,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {label && (
        <label className="relative block mb-1.5 text-sm font-medium text-black">
          {label}
          {mandatory && <span className="text-red-600"> *</span>}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={open ? 'password' : 'text'}
          className="bg-white focus:outline-none px-4 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <div
          className="absolute cursor-pointer right-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <EyeCloseIcon /> : <EyeIcon />}
        </div>
      </div>
      {mandatory && errors && touched ? (
        <div className="error-text">{errors}</div>
      ) : null}
    </div>
  );
};

export default PasswordInput;
