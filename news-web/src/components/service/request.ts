import axios, { AxiosInstance } from 'axios';
import NProgress from 'nprogress';
import {SERVER_RSS} from "../data/info";
NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
});

const instance: AxiosInstance = axios.create({
    baseURL: SERVER_RSS,
    timeout: 20000,
});
// Thêm một bộ đón chặn request
instance.interceptors.request.use(
    function (config) {
        NProgress.start();
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Thêm một bộ đón chặn response
instance.interceptors.response.use(
    function (response) {
        NProgress.done();
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);
export default instance;