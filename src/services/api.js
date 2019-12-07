import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3336"
  });

  // api.interceptors.request.use(async config =>{
  //   const token = getToken();
  //   if(token){
  //     // config.return.
  //   }
  // })
  
  export default api;