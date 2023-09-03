import axios from 'axios';

const instance = axios.create({
        // baseURL: 'http://localhost:5000/api'
        baseURL: 'https://techfrairbackend.onrender.com/api'    
        // baseURL: 'https://13.250.63.72:5000/api'
    });
    
export default instance;