import React from 'react';

const Input = ({
  label,
  name,
  type,
  value,
  style,
  max,
  disable,
  handleChange,
  placeholder,
  mandatory,
  errors,
  touched,
  inputClass,
}) => {
  return (
    <div>
      {label && (
        <label className="relative block mb-1.5 text-sm font-medium text-black">
          {label}
          {mandatory && <span className="text-red-600"> *</span>}
        </label>
      )}
      <input
        type={type}
        className={
          style ??
          `bg-white focus:outline-none px-4 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md ${inputClass}`
        }
        placeholder={placeholder}
        name={name}
        disabled={disable}
        value={value}
        max={max}
        onChange={handleChange}
      />
      {mandatory && errors && touched ? (
        <div className="error-text">{errors}</div>
      ) : null}
    </div>
  );
};

export default Input;
