import React from 'react';

const Checkbox = ({ title, type, For, id, checked, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type={type}
        id={id}
        name="mcq"
        checked={checked}
        htmlFor={For}
        onChange={onChange}
      />
      {title && (
        <label
          className="text-sm inline-block text-foreground normal-case"
          htmlFor={For}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
