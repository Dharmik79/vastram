import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Authentication } from '../../services/LogInAPI/index';
import { Formik } from 'formik';
import * as yup from 'yup';
import { GlobalContext } from '../../context/States/GlobalState';
import logo from '../../assets/images/logo1.png';
import Input from '../../widget/input';
import PasswordInput from '../../widget/passwordInput';
import AuthenticationSIdebar from './AuthenticationSIdebar';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Please enter your valid email'),
  password: yup.string().max(50).required('Please enter your password'),
});
export default function LogIn() {
  const token = sessionStorage.getItem('login');

  const { storeLogin, storeImage } = React.useContext(GlobalContext);

  const [state, setState] = React.useState({
    password: undefined,
    email: undefined,
  });
  const handleSubmitButton = async () => {
    const response = await Authentication('/admin/login', state);
    response &&
      (storeLogin(response?.payload),
      window.sessionStorage.setItem('token', response?.payload?.token));
    if (response.result === 0) {
      setTimeout(async () => {
        window.location.href = '/';
      }, 2000);
    }
    return response;
  };

  React.useEffect(() => {
    if (token) {
      // if (!data?.subscrition) {
      //   window.location.href = "/Subscription";
      // } else
      {
        window.location.href = '/';
      }
    }
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="min-h-screen grid-cols-12 lg:grid">
        <AuthenticationSIdebar />
        <div className="flex w-full max-w-2xl col-span-12 mx-auto overflow-auto lg:max-w-xl md:col-span-7">
          <div className="flex items-center w-full h-screen px-10 py-10 overflow-auto sm:py-20 sm:px-20 lg:px-10 noscrollbar">
            <div className="w-full sm:p-10 p-6 bg-white border border-[#ddd] shadow-[0px_2px_16px_0px_rgba(61,61,61,0.06)] rounded-2xl">
              <img src={logo} className="h-20 mx-auto" alt="" />
              <h3 className="relative mt-4 mb-8 text-xl font-semibold text-dark-gray before:absolute before:bg-primary before:h-[3px] before:w-10 before:-bottom-2 before:left-0">
                Sign in
              </h3>
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmitButton}
                initialValues={{
                  email: state.email,
                  password: state.password,
                }}
              >
                {({
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                  values,
                  touched,
                  errors,
                }) => (
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="grid gap-4 mt-4"
                  >
                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      name="email"
                      value={values.email}
                      errors={errors.email}
                      touched={touched.email}
                      handleChange={(e) => {
                        setFieldValue('email', e.target.value);
                        setState({ ...state, email: e.target.value });
                      }}
                      mandatory
                    />
                    <PasswordInput
                      label="Password"
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      errors={errors.password}
                      touched={touched.password}
                      handleChange={(e) => {
                        setFieldValue('password', e.target.value);
                        setState({ ...state, password: e.target.value });
                      }}
                      mandatory
                    />
                    <div className="text-end">
                      <Link
                        to="/forgot-password"
                        className="inline-block text-sm text-primary text-end"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm text-white bg-primary hover:bg-dark-primary hover:text-white  border border-primary"
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="mt-6 text-sm text-center">
                      <p>
                        Don’t have an account?{' '}
                        <Link
                          to="/sign-up"
                          className="font-medium text-primary"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
