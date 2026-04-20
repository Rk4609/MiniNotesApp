import axios from "axios"

const API = axios.create({
  baseURL: "https://mininotesapp-2.onrender.com/",
})

export default API
