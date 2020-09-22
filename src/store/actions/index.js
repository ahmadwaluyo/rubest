import axios from "axios";

export const SET_LOGIN = "SET_LOGIN";

export const set_post_login = (status) => {
  return { type: SET_LOGIN, payload: status }
}

export const postLogin = (data) => {
  return (dispatch) => {
    dispatch(set_post_login(true))
    axios
    .post( "http://34.101.191.163:3000/api/v1/auth/login", {
      email: data.email,
      password: data.password
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.token)
      dispatch(set_post_login(true))
    })
    .catch(err => {
      console.log(err.message);
      dispatch(set_post_login(false))
    })
  }
}
