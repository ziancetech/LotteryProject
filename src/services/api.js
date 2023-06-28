import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://reqres.in",
  baseURL:"http://192.168.0.194:3001/",
  // headers: {
  //   "Content-Type": "application/json",
  // }
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;
