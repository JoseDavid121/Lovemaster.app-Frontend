import axios from "axios";

const instance = axios.create({
    url: "/",
    baseURL: "https://apilovemaster.com/api",
    withCredentials: true,
})

export default instance