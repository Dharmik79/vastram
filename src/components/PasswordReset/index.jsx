import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import Input from '../../widget/input';
import PasswordInput from '../../widget/passwordInput';
import { useLocation } from 'react-router-dom';
import { postResponse } from '../../services/CommonAPI';
import { Formik } from 'formik';
import * as yup from 'yup';

const PassWordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)'
    )
    .required('Please Enter New Password'),
  new_password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)'
    )
    .oneOf([yup.ref('password'), null], 'Both passwords must be the same'),
});

export default function PasswordReset() {
  const data = useLocation();
  const navigate = useNavigate();

  const [state] = React.useState({
    token: new URL(window.location.href).searchParams.get('token'),
  });

  const handlePasswordChange = async (value) => {
    const response = await postResponse('/api/v1/auth/reset-password', {
      password: value?.new_password,
      token: state?.token,
    });
    return response;
  };

  return (
    <Formik
      validationSchema={PassWordSchema}
      enableReinitialize={true}
      onSubmit={async (e, { resetForm }) => {
        const response = await handlePasswordChange(e);
        if (response?.STATUS == 'SUCCESS') {
          await setTimeout(function () {
            resetForm();
            navigate('/login');
          }, 2000);
        }
        return response;
      }}
      onReset={() => {}}
      initialValues={{
        newPassword: '',
        new_password: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        values,
        touched,
        errors,
      }) => (
        <div className="flex items-center justify-center min-h-screen grid-cols-12 lg:grid">
          <div className="items-center hidden h-full p-10 text-white lg:flex lg:col-span-5 bg-opacity-20 login-bg xl:p-20">
            <div className="">
              <h3 className="text-2xl font-bold">
                it's clothing brands who focus on customization
              </h3>
              {/* <p className="mt-3 text-sm">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Veritatis laborum, cupiditate laudantium maiores neque, quam
                              quibusdam nobis consequatur mollitia repellendus enim dolor
                              suscipit! Aliquam, obcaecati incidunt. Error at libero
                              adipisci.
                            </p> */}
            </div>
          </div>
          <div className="flex items-center w-full max-w-2xl col-span-12 px-10 py-10 mx-auto sm:py-20 sm:px-20 lg:px-10 lg:max-w-xl md:col-span-7">
            <div className="w-full sm:p-10 p-6 bg-white border border-[#ddd] shadow-[0px_2px_16px_0px_rgba(61,61,61,0.06)] rounded-2xl">
              {/* <div className="w-full p-6 sm:p-10 bg-primary bg-opacity-10 rounded-2xl"> */}
              <img src={logo} className="h-20 mx-auto" alt="" />
              <h3 className="relative mt-4 mb-4 text-xl font-semibold text-dark-gray before:absolute before:bg-primary before:h-[3px] before:w-10 before:-bottom-2 before:left-0">
                Reset Password?
              </h3>
              <p className="text-sm">
                Enter the new password
                <span className="pl-1.5 font-semibold">
                  {/* {state.email ?? 'xyz@gmail.com'} */}
                </span>
              </p>
              <form className="grid gap-4 mt-4">
                <PasswordInput
                  label="New Password"
                  placeholder="Enter new password"
                  mandatory
                  handleChange={handleChange}
                  name="password"
                  value={values?.password}
                  errors={errors.password}
                  touched={touched.password}
                />
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                  mandatory
                  handleChange={handleChange}
                  name="new_password"
                  value={values?.new_password}
                  errors={errors.new_password}
                  touched={touched.new_password}
                />
                <div>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm text-white bg-primary hover:bg-dark-primary hover:text-white  border border-primary"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
