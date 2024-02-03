/* eslint-disable react/prop-types */
import { useRef, createContext, useReducer } from 'react';
import appReducer from '../Reducers/AppReducer';

const login = window.sessionStorage.getItem('login');
const user = window.sessionStorage.getItem('user');
const master = window.sessionStorage.getItem('master');
const role = window.sessionStorage.getItem('role');
const image = window.sessionStorage?.getItem('image');
const initialState = {
  login: isValidJSON(login) ? JSON.parse(login) : undefined,
  user: isValidJSON(user) ? JSON.parse(user) : undefined, // Set to undefined if not defined
  master: isValidJSON(master) ? JSON.parse(master) : undefined,
  image: isValidJSON(image) ? JSON.parse(image) : undefined,
  role: isValidJSON(role) ? JSON.parse(role) : undefined,
  countData: {},
  cart:[]
};

function isValidJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function storeUser(user) {
    typeof user !== 'undefined' &&
      window.sessionStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: 'STORE',
      payload: user,
    });
  }

  function storeCountData(data) {
    dispatch({
      type: 'STORE_COUNT',
      payload: data,
    });
  }

  function storeMaster(master) {
    typeof master !== 'undefined' &&
      window.sessionStorage.setItem('master', JSON.stringify(master));
    dispatch({
      type: 'MASTER',
      payload: master,
    });
  }

  function storeRole(role) {
    typeof role !== 'undefined' &&
      window.sessionStorage.setItem('role', JSON.stringify(role));
    dispatch({
      type: 'ROLE',
      payload: role,
    });
  }

  function storeImage(image) {
    typeof image !== 'undefined' &&
      window.sessionStorage.setItem('image', JSON.stringify(image));
    dispatch({
      type: 'IMAGE',
      payload: image,
    });
  }

  function storeLogin(login) {
    typeof login !== 'undefined' &&
      window.sessionStorage.setItem('login', JSON.stringify(login));
    dispatch({
      type: 'LOGIN',
      payload: login,
    });
  }
  
  function addCart(item) {
    dispatch({
      type: 'UPDATE_CART',
      payload: [...state.cart,item],
    });
  }

  function deleteCart(item) {
    dispatch({
      type: 'DELETE_CART',
      payload: state.cart.filter((i)=>i.id!==item.id),
    });
  }
  function storeReset() {
    window.sessionStorage.clear();
    window.sessionStorage.clear();
    dispatch({
      type: 'RESET',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        Global: state,
        storeUser,
        storeLogin,
        storeReset,
        storeRole,
        storeMaster,
        storeImage,
        storeCountData,
        addCart,
        deleteCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
