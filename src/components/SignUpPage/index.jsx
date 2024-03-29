import React, { Component } from 'react';
import Slider from 'react-slick';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { Authentication } from '../../services/LogInAPI';
import { GlobalContext } from '../../context/States/GlobalState';
import logo from '../../assets/images/logos.svg';
import Input from '../../widget/input';
import PasswordInput from '../../widget/passwordInput';
import AuthenticationSIdebar from '../Login/AuthenticationSIdebar';

const schema = yup.object().shape({
  firstName: yup.string().required('Please Enter First Name'),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Please enter your valid email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Both passwords must be the same'),
});
export default function SignUpPage() {
  const [state, setState] = React.useState({
    firstName: undefined,
    password: undefined,
    confirmPassword: undefined,
    email: undefined,
  });
  const { storeLogin, storeImage } = React.useContext(GlobalContext);

  const handleSubmitButton = async () => {
    const response = await Authentication('/admin/signup', {
      name: state.firstName,
      email: state.email,
      password: state.password,
    });
    response &&
      (storeLogin(response?.payload),
      window.sessionStorage.setItem('token', response?.payload?.token));
    if (response.result === 0) {
      setState({ ...state, redirect: true });
    }
    return response;
  };

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
      {state.redirect ? (
        <>
          <Navigate
            to={{
              pathname: '/',
            }}
            state={{
              email: state.email,
            }}
          ></Navigate>
        </>
      ) : (
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmitButton}
          initialValues={{
            firstName: state.firstName,
            lastName: state.lastName,
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
            <>
              <div className="min-h-screen grid-cols-12 lg:grid">
                <AuthenticationSIdebar />
                <div className="mt-15 flex items-center w-full max-w-2xl col-span-12 mx-auto overflow-auto lg:max-w-xl md:col-span-7">
                  <div className="flex items-center w-full h-screen px-10 py-10 overflow-auto noscrollbar">
                    <div className="w-full sm:p-10 p-6 bg-white border border-[#ddd] shadow-[0px_2px_16px_0px_rgba(61,61,61,0.06)] rounded-2xl my-10">
                      <img src={logo} className="h-20 mx-auto" alt="" />
                      <h3 className="relative mt-4 mb-8 text-xl font-semibold text-dark-gray before:absolute before:bg-primary before:h-[3px] before:w-10 before:-bottom-2 before:left-0">
                        Sign Up
                      </h3>
                      <form className="grid gap-4 mt-4">
                        <Input
                          label="Name"
                          placeholder="Enter first name"
                          mandatory
                          type="text"
                          handleChange={(e) => {
                            setFieldValue('firstName', e.target.value);
                            setState({
                              ...state,
                              firstName: e.target.value,
                            });
                          }}
                          name="firstName"
                          value={values.firstName}
                          errors={errors.firstName}
                          touched={values.firstName}
                        />
                        <Input
                          label="Email"
                          placeholder="Enter your email"
                          mandatory
                          type="email"
                          handleChange={(e) => {
                            setFieldValue('email', e.target.value);
                            setState({
                              ...state,
                              email: e.target.value,
                            });
                          }}
                          name="email"
                          value={values.email}
                          errors={errors.email}
                          touched={values.email}
                        />
                        <PasswordInput
                          label="Password"
                          placeholder="Enter your password"
                          mandatory
                          name="password"
                          value={values.password}
                          errors={errors.password}
                          touched={touched.password}
                          handleChange={(e) => {
                            setFieldValue('password', e.target.value);
                            setState({ ...state, password: e.target.value });
                          }}
                        />
                        <PasswordInput
                          label="Confirm Password"
                          placeholder="Enter confirm password"
                          mandatory
                          name="confirmPassword"
                          value={values.confirmPassword}
                          errors={errors.confirmPassword}
                          touched={touched.confirmPassword}
                          handleChange={(e) => {
                            setFieldValue('confirmPassword', e.target.value);
                            setState({
                              ...state,
                              confirmPassword: e.target.value,
                            });
                          }}
                        />

                        <div>
                          <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm text-white bg-primary hover:bg-dark-primary hover:text-white  border border-primary"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="mt-6 text-sm text-center">
                          <p>
                            Remember Password?{' '}
                            <Link
                              to="/login"
                              className="font-medium text-primary"
                            >
                              Sign in
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Formik>
      )}
    </>
  );
}
