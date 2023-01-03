import axios from 'axios';

const movieDB = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '84c02bc48fd16f368dff32aab235b13f',
        language: 'es-ES',
    },
});

export default movieDB;
