import { authApi } from '../utilService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function Authentication(url, Payload) {
  try {
    const response = await authApi
      .post(url, Payload)
      .then((res) => {
        if (res?.status === 200 && res?.data?.STATUS === 'SUCCESS') {
          toast.success(res.data.MESSAGE, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return res?.data;
        } else if (res?.status === 404) {
          toast.error(res?.data?.MESSAGE, {
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
        toast.error(err?.response?.data?.MESSAGE, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    return response;
  } catch (err) {
    toast.error(err?.response?.data?.MESSAGE, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
