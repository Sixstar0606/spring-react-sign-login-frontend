import axios from "axios";

const API_URL = "http://localhost:8090/api/auth/";

const register = (username, email, password) => {
   return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return {"data" : {"message" :  "sucess! Please check your mailbox!"}}
    }
    else{
      var message = response.data.message;
      // console.log(response.data);
      return response;
    }
  });
};

const verify = (verify_url) => {
  return axios.get(API_URL + verify_url);
}

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
  verify
};
