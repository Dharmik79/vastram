import { toast } from 'react-toastify';
import { api, apiForm } from './utilService';

const handle403Error = () => {
  window.sessionStorage.clear();
  if (window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
};

export const getResponse = async (url, data) => {
  const res = await api
    .get(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 400) {
        return err?.response;
      }
      if (err.response?.status == 403) {
        handle403Error();
      }
      return err?.response?.data;
    });
  return res;
};

export const postResponse = async (url, data) => {
  const response = await api
    .post(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.result === -1) {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return err.response.data;
    });
  return response;
};

export const postResponseWithoutNotification = async (url, data) => {
  const response = await api
    .post(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.STATUS === 'FAILURE') {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return err.response.data;
    });
  return response;
};

export const putResponse = async (url, data) => {
  const response = await api
    .put(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.STATUS === 'FAILURE') {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return err?.response?.data;
      }
    });
  return response;
};

export const deleteResponse = async (url, id) => {
  const response = await api
    .delete(url, id)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return res?.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.STATUS === 'FAILURE') {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return err.response.data;
    });
  return response;
};

export const postImageResponse = (url, data) => {
  const response = apiForm.post(url, data);
  if (response.status === 200) {
    toast.success(response.data.message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return response;
};

export const getResponseNotification = async (url, data) => {
  const response = await api
    .post(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.DATA.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.STATUS === 'FAILURE') {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return err.response.data;
    });
  return response;
};
export const getApiResponseNotification = async (url, data) => {
  const response = await api
    .get(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        handle403Error();
      }
      if (err.response?.data?.STATUS === 'FAILURE') {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return err.response.data;
    });
  return response;
};
