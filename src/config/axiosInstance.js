import axios from "axios";


const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
console.log("Env URL:", import.meta.env.VITE_BACKEND_URL);



export default instance;