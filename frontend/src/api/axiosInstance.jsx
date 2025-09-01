import axios from 'axios'

const BASE_URL = import.meta.env.PROD
  ? "https://selling-products-mern.onrender.com/api" // Render backend URL
  : "http://localhost:8000/api"; // Local backend

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true
})

export default axiosInstance;