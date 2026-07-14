import axios from "axios";

const API = axios.create({
    baseURL: "https://contact-manager-b-csm-b.onrender.com"
});

export default API;
