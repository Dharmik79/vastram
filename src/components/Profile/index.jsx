import React, { useState } from 'react';
import { GlobalContext } from '../../context/States/GlobalState';
import { Link } from 'react-router-dom';
import './index.css';
import { getResponse } from '../../services/CommonAPI';
const index = () => {
  const { Global } = React.useContext(GlobalContext);
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      let response = await getResponse(
        '/order/getOrder/?uid=' + Global?.login?.admin?._id,
        {}
      );

      if (response?.payload?.order) {
        setData(response?.payload?.order || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-4">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 mb-07"></div>
            </div>
          </div>
          <div class="text-center mb-10">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal">
              {Global?.login?.admin?.name}
            </h3>
            <div class="text-xs  text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Regina, Canada
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>

              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item?.createdAt}>
                  <td>{item?.orderStatus}</td>

                  <td>{item?.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
