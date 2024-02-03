import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { postResponse } from '../../services/CommonAPI';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import Input from '../../widget/input';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Please enter your valid email'),
});

export default function ForgotPassword() {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const handleEmailSubmit = async (value) => {
    const res = await postResponse('/api/v1/auth/forgot-password', value);
    res?.STATUS === 'SUCCESS' &&
      navigate('/login', {
        email: state?.email,
      });
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (e) => {
        await handleEmailSubmit(e);
      }}
      initialValues={{
        email: undefined,
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
              <h3 className="relative mt-4 mb-8 text-xl font-semibold text-dark-gray before:absolute before:bg-primary before:h-[3px] before:w-10 before:-bottom-2 before:left-0">
                Forgot Password
              </h3>
              <form className="grid gap-4 mt-4">
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
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm text-white bg-primary hover:bg-dark-primary hover:text-white  border border-primary"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="mt-6 text-sm text-center">
                <p>
                  Remember Password?{' '}
                  <Link to="/login" className="font-medium text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
