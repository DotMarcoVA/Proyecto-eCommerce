import axios from 'axios'

<<<<<<< HEAD
const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'

const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
=======
const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1/'

const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)

>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export { registerUserService, loginUserService }
