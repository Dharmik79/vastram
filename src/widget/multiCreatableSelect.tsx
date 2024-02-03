import React, { KeyboardEventHandler } from 'react';

import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

const styleOptions = {
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
export default ({ inputValue, setInputValue, value, setValue, disable }) => {
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => {
          // Ensure prev is an array, initialize it if necessary
          const prevArray = Array.isArray(prev) ? prev : [];
          return [...prevArray, createOption(inputValue)];
        });
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={components}
      inputValue={inputValue}
      isDisabled={disable}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newValue) => setValue(newValue)}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter"
      value={value || []}
      styles={styleOptions}
    />
  );
};
