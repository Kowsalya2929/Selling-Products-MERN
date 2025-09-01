import axios from 'axios'

const BASE_URL = import.meta.env.PROD
  ? "https://selling-products-mern.onrender.com/api" 
  : "http://localhost:8000/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export default axiosInstance;