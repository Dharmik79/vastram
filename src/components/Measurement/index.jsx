import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputNumber from '../../widget/InputNumber';
import Select from '../../widget/select';

const statusOptions = [
  { value: '', label: 'Select a clothing type' },
  { value: 'suits', label: 'Suits, Tuxedos, Dress Shirts, and Jackets' },
  { value: 'trousers', label: 'Formal Trousers and Jeans' },
  { value: 'shorts', label: 'Athletic Shorts' },
  { value: 'women', label: "Women's Clothing" },
  { value: 'skirts', label: 'Skirts' },
  { value: 'leggings', label: 'Leggings and Yoga Pants' },
  { value: 'sportsBra', label: 'Sports Bras' },
];

const measurementSchema = Yup.object().shape({
  // Measurements for Suits, Tuxedos, Dress Shirts, and Jackets
  chest: Yup.number().required('Required'),
  waist: Yup.number().required('Required'),
  hips: Yup.number().required('Required'),
  neck: Yup.number().required('Required'),
  sleeveLength: Yup.number().required('Required'),
  backLength: Yup.number().required('Required'),
  shoulderWidth: Yup.number().required('Required'),

  // Measurements for Formal Trousers and Jeans
  trouserWaist: Yup.number().required('Required'),
  hip: Yup.number().required('Required'),
  inseam: Yup.number().required('Required'),
  outseam: Yup.number().required('Required'),
  thigh: Yup.number().required('Required'),

  // Measurements for Athletic Shorts
  shortsWaist: Yup.number().required('Required'),
  shortsHip: Yup.number().required('Required'),
  shortsOutseam: Yup.number().required('Required'),

  // Measurements for Women's Clothing
  bust: Yup.number().required('Required'),
  womenWaist: Yup.number().required('Required'),
  womenHips: Yup.number().required('Required'),
  shoulderToWaist: Yup.number(),
  totalLength: Yup.number(),

  // Measurements for Skirts
  skirtWaist: Yup.number().required('Required'),
  skirtHips: Yup.number().required('Required'),
  skirtLength: Yup.number().required('Required'),

  // Measurements for Leggings and Yoga Pants
  leggingsWaist: Yup.number().required('Required'),
  leggingsHips: Yup.number().required('Required'),
  inseamLeggings: Yup.number().required('Required'),
  thighLeggings: Yup.number().required('Required'),

  // Measurements for Sports Bras
  sportsBraBust: Yup.number().required('Required'),
  sportsBraUnderbust: Yup.number().required('Required'),
});

const index = () => {
  const formik = useFormik({
    initialValues: {
      // Initialize all form fields
      chest: '',
      waist: '',
      hips: '',
      neck: '',
      sleeveLength: '',
      backLength: '',
      shoulderWidth: '',

      trouserWaist: '',
      hip: '',
      inseam: '',
      outseam: '',
      thigh: '',

      shortsWaist: '',
      shortsHip: '',
      shortsOutseam: '',

      bust: '',
      womenWaist: '',
      womenHips: '',
      shoulderToWaist: '',
      totalLength: '',

      skirtWaist: '',
      skirtHips: '',
      skirtLength: '',

      leggingsWaist: '',
      leggingsHips: '',
      inseamLeggings: '',
      thighLeggings: '',

      sportsBraBust: '',
      sportsBraUnderbust: '',
    },
    validationSchema: measurementSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="">
      <div className="title mt-5 ml-5">Measurement Form</div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl mx-auto mt-3 p-2 bg-white rounded-md"
      >
        <Select
          multiple={false}
          id="clothingType"
          name="clothingType"
          label="Clothing Type"
          options={statusOptions}
          placeholder={'Select a clothing type'}
          className="basic-multi-select"
          classNamePrefix="select"
          handleChange={(selectedOption) =>
            formik.setFieldValue('clothingType', selectedOption)
          }
          onBlur={formik.handleBlur}
          value={formik.values.clothingType}
        />

        {/* Render measurement fields based on selected clothing type */}
        {formik.values.clothingType && (
          <div className="mt-4">
            {/* Example: Chest Measurement */}
            <InputNumber
              formik={formik}
              type="suits"
              label="Chest"
              name="chest"
            />
            <InputNumber
              formik={formik}
              type="suits"
              label="Waist"
              name="waist"
            />
            <InputNumber
              formik={formik}
              type="suits"
              label="Hips"
              name="hips"
            />
            <InputNumber
              formik={formik}
              type="suits"
              label="Sleeve Length"
              name="sleeveLength"
            />
            <InputNumber
              formik={formik}
              type="suits"
              label="Back Length"
              name="backLength"
            />
            <InputNumber
              formik={formik}
              type="suits"
              label="Shoulder Width"
              name="shoulderWidth"
            />
            <InputNumber
              formik={formik}
              type="trousers"
              label="Trouser Waist"
              name="trouserWaist"
            />
            <InputNumber
              formik={formik}
              type="trousers"
              label="Hip"
              name="hip"
            />
            <InputNumber
              formik={formik}
              type="trousers"
              label="Inseam"
              name="inseam"
            />
            <InputNumber
              formik={formik}
              type="trousers"
              label="Outseam"
              name="outseam"
            />
            <InputNumber
              formik={formik}
              type="trousers"
              label="Thigh"
              name="thigh"
            />
            <InputNumber
              formik={formik}
              type="shorts"
              label="Waist"
              name="shortsWaist"
            />
            <InputNumber
              formik={formik}
              type="shorts"
              label="Hip"
              name="shortsHip"
            />
            <InputNumber
              formik={formik}
              type="shorts"
              label="Outseam"
              name="shortsOutseam"
            />
            <InputNumber
              formik={formik}
              type="women"
              label="Bust"
              name="bust"
            />
            <InputNumber
              formik={formik}
              type="women"
              label="Waist"
              name="womenWaist"
            />
            <InputNumber
              formik={formik}
              type="women"
              label="Hip"
              name="womenHips"
            />
            <InputNumber
              formik={formik}
              type="women"
              label="shoulder To Waist"
              name="shoulderToWaist"
            />
            <InputNumber
              formik={formik}
              type="women"
              label="Total Length"
              name="totalLength"
            />
            <InputNumber
              formik={formik}
              type="skirts"
              label="Waist"
              name="skirtWaist"
            />
            <InputNumber
              formik={formik}
              type="skirts"
              label="Hips"
              name="skirtHips"
            />

            <InputNumber
              formik={formik}
              type="skirts"
              label="Length"
              name="skirtLength"
            />
            <InputNumber
              formik={formik}
              type="leggings"
              label="Waist"
              name="leggingsWaist"
            />
            <InputNumber
              formik={formik}
              type="leggings"
              label="Hips"
              name="leggingsHips"
            />
            <InputNumber
              formik={formik}
              type="leggings"
              label="inseam Leggings"
              name="inseamLeggings"
            />
            <InputNumber
              formik={formik}
              type="leggings"
              label="Thigh Leggings"
              name="thighLeggings"
            />

            <InputNumber
              formik={formik}
              type="sportsBra"
              label="Bust"
              name="sportsBraBust"
            />
            <InputNumber
              formik={formik}
              type="sportsBra"
              label="Under bust"
              name="sportsBraUnderbust"
            />
          </div>
        )}

        <>
          <div className='mt-5'>
            <label className="relative block mb-1.5 font-bold font-medium text-black">
              {'Description'}
            </label>
            <input
              type="textarea"
              className={`bg-white focus:outline-none px-4 py-2.5 text-bold placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md `}
              placeholder={'Please describe your own idea'}
              name="desc"
              max={50}
              handleChange={(selectedOption) =>
                formik.setFieldValue('desc', selectedOption)
              }
              value={formik.values.desc}
            />
          </div>
        </>
        <button
          type="submit"
          className="mt-4 bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-primary focus:outline-none focus:ring focus:border-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default index;
