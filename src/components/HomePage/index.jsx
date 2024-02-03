import React, { useState, useEffect, useContext } from 'react';
import * as yup from 'yup';
import { GlobalContext } from './../../context/States/GlobalState';
import makeAnimated from 'react-select/animated';
import Calendar from './../CalendarView/index';
import UpdatePopUp from '../../UpdatePopUp';

const schema = yup.object().shape({
  firstName: yup.string().max(50).required('Please Enter Role'),
  lastName: yup.string().max(50).required('Please Enter Role'),
  email: yup.string().max(50).required('Please Enter Role'),
  role: yup.string().max(50).required('Please Enter Role'),
});

const animatedComponents = makeAnimated();

export default function index() {
  const { Global, storeRole } = useContext(GlobalContext);
  const [state, setState] = useState({ data: [] });
  
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const currentHour = currentTime.getHours();
    let greeting = '';

    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    return greeting;
  };

  return (
    <UpdatePopUp>
      <div className="p-4 flex">
        {/* <div className="pb-2 mb-5 border-b border-gray-200">
        <h4 className="text-lg font-semibold">Dashboard</h4>
      </div> */}

        <div className="user-card mt-3 bg-white shadow-md rounded-md customWidget flex mr-3">
          <div className="user-image-container pr-4">
            <img
              src={
                Global?.image ??
                'https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
              }
              alt={'dd'}
              width="150"
              height="150"
              className="user-image rounded-full"
            />
          </div>
          <div className="user-info">
            <h2 className="text-xl font-semibold">
              {getGreeting()}, {Global?.user?.firstName}
            </h2>
            <p className="text-md mt-2 text-gray-600">
              <b>{formattedDate}</b>
            </p>
          </div>
        </div>
        {/* <div className="user-card mt-3 bg-white shadow-md rounded-md customWidget flex ">
        <Calendar showDetailsHandle={showDetailsHandle} />
      </div> */}
      </div>
    </UpdatePopUp>
  );
}
