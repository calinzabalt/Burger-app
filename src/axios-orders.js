import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-2bf14.firebaseio.com/'
});

export default instance;