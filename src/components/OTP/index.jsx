import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation } from 'react-router-dom';
import {
  getResponseNotification,
  postResponse,
} from '../../services/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/States/GlobalState';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';

export default function OTP() {
  const navigate = useNavigate();
  const data = useLocation();
  const { storeLogin } = React.useContext(GlobalContext);
  const [otp, setOtp] = useState('');
  const [state, setState] = React.useState({
    email: data?.state?.email,
  });

  const handleChangeSubmit = async () => {
    const response = await postResponse('/api/v1/auth/verify-email', {
      email: state?.email,
      emailCode: otp,
    });
    if (response?.STATUS === 'SUCCESS') {
      navigate('/login');
    }
  };
  const handleResend = async () => {
    await getResponseNotification('/api/v1/auth/resend-verify-email-otp', {
      email: state?.email,
    });
  };

  return (
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
          <img src={logo} className="h-20 mx-auto" alt="" />
          <h3 className="relative mt-4 mb-5 text-xl font-semibold text-dark-gray before:absolute before:bg-primary before:h-[3px] before:w-10 before:-bottom-2 before:left-0">
            OTP
          </h3>
          <p className="text-sm">
            We have sent you an email with 6-digit verification code on your
            email.
            <span className="font-semibold">
              {/* {state?.email ?? 'xyz@gmail.com'} */}
            </span>
          </p>
          <form className="grid gap-4 mt-4">
            <div className="otp-input">
              <OtpInput
                shouldAutoFocus
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleChangeSubmit}
                className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm text-white bg-primary hover:bg-dark-primary hover:text-white border border-primary"
              >
                Confirm
              </button>
            </div>
            <div className="mt-6 text-sm text-center">
              <p>
                Did not receive the code?{' '}
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-medium text-primary"
                >
                  Resend
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
