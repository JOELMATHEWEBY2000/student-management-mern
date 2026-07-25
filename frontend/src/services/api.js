import axios from "axios";

const API = axios.create({
    baseURL: "https://student-management-mern-1132.onrender.com/api",
});

export default API;