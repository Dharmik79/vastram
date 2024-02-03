import React from 'react';

export default function InputNumber({ formik, type, label, name }) {
  return (
    <>
      {formik.values.clothingType.value === type && (
        <div>
          <label
            className="relative block mt-1.5 mb-1.5 text-sm font-medium text-black"
            htmlFor={name}
          >
            {label} :
          </label>
          <input
            type="number"
            className={`bg-white border-gray-400 border-solid focus:outline-none px-4 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md`}
            id={name}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
          />
          {formik.touched[name] && formik.errors[name] ? (
            <div className="error-text">{formik.errors[name]}</div>
          ) : null}
        </div>
      )}
    </>
  );
}
