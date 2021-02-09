import axios from 'axios'


const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/api/v1`,
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;