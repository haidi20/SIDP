import axios from 'axios';

import Config from './Config';

const instance = axios.create({
    baseURL: Config.baseUrl,
});

export default instance;