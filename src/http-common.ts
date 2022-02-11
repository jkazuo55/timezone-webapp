import axios from "axios";
export default axios.create({
  baseURL: "https://spring-format-transformet-serv.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});