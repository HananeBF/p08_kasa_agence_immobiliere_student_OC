import axios from "axios";

// For API maintainability, if necessary, change the baseURL here
const Axios = axios.create({
    baseURL: 'http://localhost:8080/api/'
})
export default Axios