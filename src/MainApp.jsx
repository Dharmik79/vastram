import React from 'react';
import { GlobalContext } from './context/States/GlobalState';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';
import Footer from './components/Footer'
import { getResponse } from './services/CommonAPI';

function MainApp(props) {
  const { Global, storeMaster, storeUser, storeRole } =
    React.useContext(GlobalContext);
  const [loader, setLoader] = React.useState(false);

  const hideLoader = () => {
    setLoader(false);
  };
  const showLoader = () => {
    setLoader(true);
  };

  const defaultData = async () => {
    showLoader();
    // const profileData =
    // Global?.login?.token && (await getResponse(`/api/v1/master/all`, {}));
    // if (profileData?.STATUS === 'SUCCESS') {
    //   await storeMaster(profileData?.DATA);
    // }
    // const response =
    //   Global?.login?.token && (await getResponse('/api/v1/Profile', {}));
    // response?.STATUS === 'SUCCESS' && storeUser(response?.DATA);
    // const roles =
    //   Global?.login?.token && (await getResponse('/api/v1/role/findAll', {}));
    // roles?.DATA?.data && (await storeRole(roles?.DATA?.data));
    hideLoader();
  };

  React.useEffect(() => {
    defaultData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div>{props.children}</div>
          <Footer />
        </>
      )}
    </>
  );
}

export default MainApp;
