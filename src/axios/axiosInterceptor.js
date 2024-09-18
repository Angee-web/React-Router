import axiosInstance from "./axiosInstance";

const axiosInterceptor = (logOut) => {
  // intercept the response
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const status = err?.response?.status || null;
      // if unauthorized redirect to login page
      if (status === 401) {
        logOut();
      }
      return Promise.reject(err);
    }
  );
};

export default axiosInterceptor;