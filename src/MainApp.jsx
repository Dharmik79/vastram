import React from 'react';
import { GlobalContext } from './context/States/GlobalState';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';
import { getResponse } from './services/CommonAPI';
import { socket } from './services/utilService';

function MainApp(props) {
  const { Global, storeMaster, storeUser, storeRole } = React.useContext(GlobalContext);
  const [loader, setLoader] = React.useState(true);
  // const socketRef = React.useRef();
  // socketRef.current = socket;

  // socketRef.current.on('history', (e) => {
  //   if (e?.chats && Global?.login?._id == e?.chats?.authId) {
  //     dataStoreFunction('chats', e?.chats);
  //   }
  //   if (e?.room && Global?.login?._id == e?.room?.authId) {
  //     dataStoreFunction('room', e?.room);
  //   }
  //   if (e?.rooms && Global?.login?._id == e?.rooms?.authId) {
  //     dataStoreFunction('rooms', e?.rooms);
  //     e?.rooms && setAllChatRoom(e?.rooms);
  //   }
  //   if (e?.users && Global?.login?._id == e?.users?.authId) {
  //     dataStoreFunction('users', e?.users);
  //     e?.users && setNewUser(e?.users);
  //     e?.users && setData(e?.users);
  //   }
  // });

  const hideLoader = () => {
    setLoader(false);
  };
  const showLoader = () => {
    setLoader(true);
  };

  const defaultData = async () => {
    showLoader();
    const profileData =
      Global?.login?.token && (await getResponse(`/api/v1/master/all`, {}));
    if (profileData?.STATUS === 'SUCCESS') {
      await storeMaster(profileData?.DATA);
    }
    const response =
      Global?.login?.token && (await getResponse('/api/v1/Profile', {}));
    response?.STATUS === 'SUCCESS' && storeUser(response?.DATA);
    const roles =
      Global?.login?.token && (await getResponse('/api/v1/role/findAll', {}));
    roles?.DATA?.data && (await storeRole(roles?.DATA?.data));
    hideLoader();
  };
  const getData = async () => {};

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
        </>
      )}
    </>
  );
}

export default MainApp;
