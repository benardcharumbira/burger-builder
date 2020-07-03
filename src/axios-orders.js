import axios from "axios";

const instance = axios.create({
  baseURL: "https://ivory-period-231310.firebaseio.com/",
});

export default instance;
