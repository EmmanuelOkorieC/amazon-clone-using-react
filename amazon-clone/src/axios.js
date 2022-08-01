import axios from 'axios';

const instance = axios.create({
    //THE API cloud function api
    baseURL: 'http://localhost:5001/challenge-60cc0/us-central1/api'
})

export default instance;