import axiosInstance from "../../services/api";

// login apis url
  // const LoginUserUrl = "/api/login";
 const LoginUserUrl = "/login";
 const LogoutUserUrl = "/api/logout";
 const SignUpUrl = "/users/add";
 const ForgotUserUrl = "/forgotpassword";
const ResetUserUrl = "/resetpassword"

export const loginWithEmailAsync = async (request) => {
  try {
    const response = await axiosInstance.post(LoginUserUrl, request);
    return response;
  } catch (err) {
    return err;
  }
};

export const logoutAsync = async (request) => {
  try {
    const response = await axiosInstance.get(LogoutUserUrl, request);
    return response;
  } catch (err) {
    return err;
  }
};
export const signUpAsync = async (request) => {
  try {
    const response = await axiosInstance.post(SignUpUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};
export const forgotAsync = async (email) => {
  try {
    const request = {
      
    "email": email
    }
    const response = await axiosInstance.post(ForgotUserUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};
export const resetAsync = async (password) => {
  try {
    const request = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk5LCJpYXQiOjE2ODI1MTIyMTcsImV4cCI6MTY4MjU5ODYxN30.m_kZTxMebXyDiSnZM9gvgfI74jak-8qZMKxGKLjk1AA",
      "password": password
  }
    const response = await axiosInstance.post(ResetUserUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};