import React from 'react';
import Input from '../../widget/input';
import Select from '../../widget/select';
import ModalWrapper from '../../widget/modalWrapper';
import { Formik, useFormikContext } from 'formik';
import { postResponse, putResponse } from '../../services/CommonAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MultiCreatableSelect from '../../widget/multiCreatableSelect.tsx';
import Avtar from '../../assets/images/avatar.png';

const userList = [
  { id: '5e327b04d31f0818e8b50dd1', name: 'Admin' },
  { id: '5f902c9ff9b3d94e06221593', name: 'HR' },
  { id: '5f902c9ff9b3d94e06221594', name: 'Finance' },
  { id: '5e3279da1d0b6718e8301656', name: 'Manager' },
  { id: '5f902c9aecb6925b7f2951cf', name: 'Supervisor' },
  { id: '5f902c9ff9b3d94e06221592', name: 'Employee' },
];

const eTypeOptions = [
  { name: 'full-time', value: 'full-time' },
  { name: 'casual', value: 'casual' },
  { name: 'part-time', value: 'part-time' },
];
const EditHomeDetails = ({
  type,
  open,
  setOpen,
  Global,
  editValue,
  roles,
  positions,
  schedules,
}) => {
  const [profileImage, setProfileImage] = React.useState(
    Global?.image ?? Avtar
  );
  const [inputValue, setInputValue] = React.useState(undefined);
  const [value, setValue] = React.useState(editValue?.allergies);

  React.useEffect(() => {
    setValue(editValue?.allergies);

    return () => {};
  }, []);

  const formRef = React.useRef(); // Create a ref for the Formik form

  const handleSubmit = async () => {
    if (formRef.current) {
      await formRef.current.handleSubmit(); // Trigger Formik's submit handler
    }
  };

  return (
    <ModalWrapper
      open={open}
      setOpen={setOpen}
      title={`${type} User`}
      width="max-w-4xl"
      modalFooter={
        <>
          <button className="outline-btn" onClick={() => setOpen(false)}>
            Cancel
          </button>{' '}
          <button className="primary-btn" onClick={handleSubmit}>
            Save User
          </button>
        </>
      }
    >
      <Formik
        // validationSchema={schema}
        onSubmit={async (values) => {
          const filterPayload = (payload) => {
            return Object.fromEntries(
              Object.entries(payload).filter(
                ([_, value]) =>
                  value !== undefined &&
                  value !== NaN &&
                  value !== null &&
                  value !== ''
              )
            );
          };
          const filteredPayload = filterPayload(
            type === 'Add'
              ? {
                  firstName: values?.firstName,
                  lastName: values?.lastName,
                  email: values?.email,
                  designation: values?.Designation,
                  phone: values?.phone,
                  address: values?.address,
                  roleId: values?.roleId?.id,
                  // profileImage: profileImage,
                  employmentStatus: values?.employmentType?.value,
                  positions: values?.position.map((e) => e?._id),
                  schedules: values?.schedule.map((e) => e?._id),
                  allergies: value,
                  emergencyContact: {
                    firstName: values?.emergencyFullName,
                    phone: values?.emergencyPhone,
                    email: values?.emergencyEmail,
                    relationship: values?.emergencyRelationship,
                    address: values?.emergencyAddress,
                  },
                  payRateType: values?.payType?.value,
                  maxWeeklyHours: values?.maxHours && Number(values?.maxHours),
                  payRate: values?.payRate && Number(values?.payRate),
                  healthCardNumber: values?.healthCardNumber,
                }
              : type === 'Edit' && {
                  firstName: values?.firstName,
                  lastName: values?.lastName,
                  // email: values?.email,
                  designation: values?.Designation,
                  phone: values?.phone,
                  address: values?.address,
                  // profileImage: profileImage,
                  positions: values?.position.map((e) => e?._id),
                  schedules: values?.schedule.map((e) => e?._id),
                  employmentStatus: values?.employmentType?.value,
                  allergies: value,
                  emergencyContact: {
                    firstName: values?.emergencyFullName,
                    phone: values?.emergencyPhone,
                    email: values?.emergencyEmail,
                    relationship: values?.emergencyRelationship,
                    address: values?.emergencyAddress,
                  },
                  payRateType: values?.payType?.value,
                  maxWeeklyHours: values?.maxHours && Number(values?.maxHours),
                  payRate: values?.payRate && Number(values?.payRate),
                  healthCardNumber: values?.healthCardNumber,
                }
          );
          const res =
            type === 'Add'
              ? await postResponse(`/api/v1/user/create`, {
                  ...filteredPayload,
                })
              : await putResponse(`/api/v1/user/update/${editValue?._id}`, {
                  ...filteredPayload,
                });

          if (res.STATUS == 'SUCCESS') {
            window.location.reload();
            getData();
          }
        }}
        initialValues={{
          firstName: editValue?.firstName ?? '',
          lastName: editValue?.lastName ?? '',
          email: editValue?.email ?? '',
          phone: editValue?.phone,
          address: editValue?.address,
          healthCardNumber: editValue?.healthCardNumber,
          Designation: editValue?.designation,
          allergies: editValue?.allergies,
          payType: {
            name: editValue?.payRateType,
            value: editValue?.payRateType,
          },
          payRate: editValue?.payRate,
          maxHours: editValue?.maxWeeklyHours,
          employmentType: {
            value: editValue?.employmentStatus,
            name: editValue?.employmentStatus,
          },
          emergencyFullName: editValue?.emergencyContact?.firstName,
          emergencyEmail: editValue?.emergencyContact?.email,
          emergencyRelationship: editValue?.emergencyContact?.relationship,
          emergencyPhone: editValue?.emergencyContact?.phone,
          emergencyAddress: editValue?.emergencyContact?.address,
          position: editValue?.positions ?? [],
          schedule: editValue?.schedules ?? [],
        }}
        innerRef={formRef} // Attach the form ref to Formik
      >
        {({
          handleSubmit,
          setFieldValue,
          isSubmitting,
          values,
          touched,
          errors,
        }) => (
          <div className="w-full">
            <Tabs className="mt-8">
              <TabList>
                <Tab>Profile</Tab>
                <Tab>Work</Tab>
                {[1].includes(Global?.login?.roleWeight) && <Tab>Pay</Tab>}
                <Tab>Emergency Contact</Tab>
              </TabList>
              <TabPanel>
                <div className="grid text-sm gap-x-6 gap-y-4 lg:grid-cols-2 sm:text-base ">
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>First Name:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.firstName}
                        name="firstName"
                        type="text"
                        placeholder="Please Enter the First name"
                        value={values.firstName}
                        handleChange={(e) => {
                          setFieldValue('firstName', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Last Name:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.lastName}
                        name="lastName"
                        type="text"
                        placeholder="Please Enter the Last name"
                        value={values.lastName}
                        handleChange={(e) => {
                          setFieldValue('lastName', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Email:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.email}
                        name="email"
                        type="email"
                        placeholder="Please Enter the Email"
                        value={values.email}
                        handleChange={(e) => {
                          setFieldValue('email', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Phone Number:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.phone}
                        name="phone"
                        type="text"
                        placeholder="Please Enter the Phone Number"
                        value={values.phone}
                        handleChange={(e) => {
                          setFieldValue('phone', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Address:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.address}
                        name="address"
                        type="text"
                        placeholder="Please Enter the Address"
                        value={values.address}
                        handleChange={(e) => {
                          setFieldValue('address', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Employment Type:</p>
                    </div>
                    <div className="col-span-9">
                      <Select
                        multiple={false}
                        options={eTypeOptions}
                        disable={[2, 3, 5, 6].includes(
                          Global?.login?.roleWeight
                        )}
                        getOptionLabel={(option) => option?.name}
                        getOptionValue={(option) => option?.value}
                        placeholder={'Select Employment Type'}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        handleChange={(e) => {
                          setFieldValue('employmentType', e);
                          setState({ ...state, employmentType: e });
                        }}
                        name="employmentType"
                        value={values?.employmentType}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Designation:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.roleId}
                        name="Designation"
                        type="text"
                        placeholder="Please Enter the Designation"
                        value={values.Designation}
                        handleChange={(e) => {
                          setFieldValue('Designation', e.target.value);
                        }}
                      />
                      {/* <Select
                        multiple={false}
                        options={userList}
                        getOptionLabel={(option) => option?.name}
                        getOptionValue={(option) => option?.value}
                        placeholder={'Select Designation'}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        handleChange={(e) => {
                          setFieldValue('Designation', e);
                          setState({ ...state, Designation: e });
                        }}
                        name="Designation"
                        value={values?.Designation}
                      /> */}
                    </div>
                  </div>
                  {type == 'Add' && (
                    <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                      <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                        <p>Role:</p>
                      </div>
                      <div className="col-span-9">
                        <Select
                          multiple={false}
                          options={userList}
                          getOptionLabel={(option) => option?.name}
                          getOptionValue={(option) => option?.id}
                          placeholder={'Select Role'}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          handleChange={(e) => {
                            setFieldValue('roleId', e);
                            setState({ ...state, roleId: e });
                          }}
                          name="Role"
                          value={values?.roleId}
                        />
                      </div>
                    </div>
                  )}
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Health Card:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.healthCardNumber}
                        name="healthCardNumber"
                        type="number"
                        placeholder="Please Enter the Health Card Number"
                        value={values.healthCardNumber}
                        handleChange={(e) => {
                          setFieldValue('healthCardNumber', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Allergies:</p>
                    </div>
                    <div className="col-span-9">
                      <MultiCreatableSelect
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        value={value}
                        setValue={setValue}
                        disable={false}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid text-sm gap-x-6 gap-y-4 lg:grid-cols-2 sm:text-base ">
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Positions:</p>
                    </div>
                    <div className="col-span-9">
                      <Select
                        multiple={true}
                        options={positions}
                        getOptionLabel={(option) => option?.name}
                        getOptionValue={(option) => option?._id}
                        placeholder={'Select Positions'}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        handleChange={(e) => {
                          setFieldValue('position', e);
                          setState({ ...state, position: e.value });
                        }}
                        name="position"
                        value={values?.position}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Schedules:</p>
                    </div>
                    <div className="col-span-9">
                      <Select
                        multiple={true}
                        options={schedules}
                        getOptionLabel={(option) => option?.name}
                        getOptionValue={(option) => option?._id}
                        placeholder={'Select Schedules'}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        handleChange={(e) => {
                          setFieldValue('schedule', e);
                          setState({ ...state, schedule: e.value });
                        }}
                        name="schedule"
                        value={values?.schedule}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {[1].includes(Global?.login?.roleWeight) && (
                <TabPanel>
                  <div className="grid text-sm gap-x-6 gap-y-4 lg:grid-cols-2 sm:text-base ">
                    <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                      <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                        <p>Pay Rate:</p>
                      </div>
                      <div className="col-span-9">
                        <Input
                          name="payRate"
                          type="text"
                          placeholder="Please Enter the Pay Rate Per Hour"
                          value={values.payRate}
                          handleChange={(e) => {
                            setFieldValue('payRate', e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                      <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                        <p>Pay Type:</p>
                      </div>
                      <div className="col-span-9">
                        <Select
                          multiple={false}
                          options={[{ name: 'bi-weekly', value: 'bi-weekly' }]}
                          getOptionLabel={(option) => option?.name}
                          getOptionValue={(option) => option?.value}
                          placeholder="Please Select the Pay Type"
                          className="basic-multi-select"
                          classNamePrefix="select"
                          handleChange={(e) => {
                            setFieldValue('payType', e);
                          }}
                          name="payType"
                          value={values.payType}
                        />
                      </div>
                    </div>
                    <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                      <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                        <p>Maximum Hours Per Week:</p>
                      </div>
                      <div className="col-span-9">
                        <Input
                          name="maxHours"
                          type="text"
                          placeholder="Please Enter the Maximum Hours Per Week"
                          value={values.maxHours}
                          handleChange={(e) => {
                            setFieldValue('maxHours', e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              )}
              <TabPanel>
                <div className="grid text-sm gap-x-6 gap-y-4 lg:grid-cols-2 sm:text-base ">
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Full Name:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={`${
                        //   Global?.login?.emergencyContact?.firstName ?? ''
                        // } ${Global?.login?.emergencyContact?.lasName ?? ''}`}
                        name="fullName"
                        type="text"
                        placeholder="Please Enter the Full Name"
                        value={values.emergencyFullName}
                        handleChange={(e) => {
                          setFieldValue('emergencyFullName', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Relationship:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.emergencyContact?.relationship}
                        name="relationShip"
                        type="text"
                        placeholder="Please Enter the Relation Ship"
                        value={values.emergencyRelationship}
                        handleChange={(e) => {
                          setFieldValue(
                            'emergencyRelationship',
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Email:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.emergencyContact?.email}
                        name="emergencyEmail"
                        type="text"
                        placeholder="Please Enter the Emergency Email"
                        value={values.emergencyEmail}
                        handleChange={(e) => {
                          setFieldValue('emergencyEmail', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Phone Number:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.emergencyContact?.phone}
                        name="emergencyPhone"
                        type="text"
                        placeholder="Please Enter the Phone Number"
                        value={values.emergencyPhone}
                        handleChange={(e) => {
                          setFieldValue('emergencyPhone', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
                    <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                      <p>Address:</p>
                    </div>
                    <div className="col-span-9">
                      <Input
                        // value={Global?.login?.address}
                        name="emergencyAddress"
                        type="text"
                        placeholder="Please Enter the Address"
                        value={values.emergencyAddress}
                        handleChange={(e) => {
                          setFieldValue('emergencyAddress', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="grid font-medium gap-x-3 gap-y-1.5 sm:grid-cols-12">
              <div className="flex items-center text-sm text-gray-400 sm:col-span-3">
                <p>Address:</p>
              </div>
              <div className="col-span-9">
              </div>
            </div> */}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default EditHomeDetails;
