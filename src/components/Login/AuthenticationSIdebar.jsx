import React from 'react';
import Slider from 'react-slick';
import { GlobalContext } from '../../context/States/GlobalState';

const AuthenticationSIdebar = () => {
  const token = sessionStorage.getItem('login');

  const { storeLogin, storeImage } = React.useContext(GlobalContext);

  const [state, setState] = React.useState({
    password: undefined,
    email: undefined,
  });
  const handleSubmitButton = async () => {
    const response = await Authentication('/api/v1/auth/login', state);
    response &&
      (storeLogin(response?.DATA), storeImage(response?.DATA?.profileImage));
    if (response.STATUS === 'SUCCESS') {
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
    <div className="h-screen overflow-hidden border-r-8 lg:col-span-5 login-sider border-primary">
      <Slider {...settings}>
        <div className="relative items-end hidden h-full min-h-screen text-white login-bg lg:flex bg-opacity-20">
          <img
            className="object-cover w-full h-full max-h-screen min-h-screen"
            src="https://img.freepik.com/free-photo/young-women-posing-near-old-decorated-car_1153-6207.jpg?size=626&ext=jpg&ga=GA1.1.494128832.1706987226&semt=ais"
            alt=""
          />
          <div className="absolute left-0 right-0 z-10 px-10 py-6 text-center bg-primary w-[80%] mx-auto bottom-10">
            <h3 className="text-2xl font-bold">
              Where Quality Meets Affordability{' '}
            </h3>
          </div>
        </div>
        <div className="relative items-end hidden h-full min-h-screen text-white login-bg lg:flex bg-opacity-20">
          <img
            src="https://img.freepik.com/free-photo/set-with-fashionable-women-s-clothing-skirt-sweater_169016-3210.jpg?size=626&ext=jpg&ga=GA1.1.494128832.1706987226&semt=ais"
            className="object-cover w-full h-full max-h-screen min-h-screen"
            alt=""
          />
          <div className="absolute left-0 right-0 z-10 px-10 py-6 text-center bg-primary w-[80%] mx-auto bottom-10">
            <h3 className="text-2xl font-bold">
              Where Quality Meets Affordability{' '}
            </h3>
          </div>
        </div>
        <div className="relative items-end hidden h-full min-h-screen text-white login-bg lg:flex bg-opacity-20">
          <img
            src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478968.jpg?size=626&ext=jpg&ga=GA1.1.494128832.1706987226&semt=ais"
            className="object-cover w-full h-full max-h-screen min-h-screen"
            alt=""
          />
          <div className="absolute left-0 right-0 z-10 px-10 py-6 text-center bg-primary w-[80%] mx-auto bottom-10">
            <h3 className="text-2xl font-bold">
              Where Quality Meets Affordability{' '}
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AuthenticationSIdebar;
