import { encryptStorage } from "./secureLocalStorage";

export const getUser = () => {
  const userData = encryptStorage.getItem("user");
  if (userData === undefined) return null;
  console.log("userdata: ",userData);
  return userData;
};

export const setUser = (user) => {
  console.log("setUser......... : " , user)
  encryptStorage.setItem("user", user);
};

export const removeUser = () => {
  encryptStorage.removeItem("user");
};

export const getLocalRefreshToken = () => {
  const userData = encryptStorage.getItem("user");
  if (userData === undefined) return null;
  return userData?.token;
};
