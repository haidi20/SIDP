import axios from 'axios';

import Config from './Config';

const instance = axios.create({
    baseURL: Config.baseUrl,
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;