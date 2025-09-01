import axios from 'axios'

const BASE_URL = import.meta.env.PROD
  ? "http://localhost:8000/api"  
  : "https://selling-products-mern.onrender.com/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export default axiosInstance;