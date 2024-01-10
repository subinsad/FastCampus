import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'f09410040419e75d056b5cf8a1855c9e',
        language: 'ko-KR',
    },
});

export default instance;
