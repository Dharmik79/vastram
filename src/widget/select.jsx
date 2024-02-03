import { disableCursor } from '@fullcalendar/core/internal';
import React from 'react';

// import AsyncSelect from 'react-select/async';
import Select from 'react-select';

const index = ({
  label,
  mandatory,
  multiple = false,
  disable = false,
  options,
  getOptionLabel,
  getOptionValue,
  handleChange,
  name,
  value = '',
  placeholder,
  inputCss
}) => {
  const StylesConfig = {
    option: (provided, { isFocused }) => ({
      ...provided,
      fontSize: 12,
      fontWeight: 500,
      background: isFocused ? 'rgba(64, 181, 232, 0.15)' : '#ffffff',
      color: isFocused ? 'rgba(64, 181, 232, 1)' : 'rgba(0, 0, 0, 1)',
    }),
    control: (provided, { isFocused }) => ({
      ...provided,
      minHeight: 36,
      padding: '2px 6px',
      fontSize: 14,
      borderRadius: '6px',
      border: isFocused
        ? '1px solid #662483 !important'
        : '1px solid #E5E7EB !important',
      boxShadow: 'none',
    }),
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        display: 'none',
      };
    },
    noOptionsMessage: (base) => ({
      ...base,
      fontSize: 14,
      fontWeight: 500,
      color: '#000000',
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '250px',
    }),
  };
  return (
    <div className={inputCss}>
      {label && (
        <label className="relative block mb-1.5 text-sm text-3xl font-bold">
          {label}
          {mandatory && <span className="text-red-600"> *</span>}
        </label>
      )}{' '}
      <Select
        placeholder={placeholder}
        isMulti={multiple}
        options={options}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isDisabled={disable}
        onChange={handleChange}
        name={name}
        value={value}
        styles={StylesConfig}
        defaultOptions
      />
    </div>
  );
};

export default index;
