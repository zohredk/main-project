import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-redux-main-1b4b0-default-rtdb.firebaseio.com/",
});

export default instance;
