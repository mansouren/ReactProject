import axios from "axios";
const baseURL = process.env.API_URL || "http://192.168.50.5/SwitchConfig/api";
// const baseURL = "http://192.168.253.28:5171";
axios.defaults.baseURL = baseURL;

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
};

export default http;
