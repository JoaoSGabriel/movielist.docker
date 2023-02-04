import axios from "axios";

const instance = axios.create({
  baseURL: "http://18.206.126.112/api",
});

export default instance;
