
import { createAsyncThunk } from "@reduxjs/toolkit";

import { removeUser, setUser } from "../../services/token";
import { hideLoader, showLoader } from "../lem/lemSlice";
import { loginWithEmailAsync, logoutAsync, signUpAsync,  forgotAsync ,  resetAsync} from "./services";
import Swal from "sweetalert2";
import { useState } from "react";
import Popup from "../../components/Popup";

export const loginUserByEmailAction = createAsyncThunk(
  
  "auth/loginByEmail",
  async (request, { rejectWithValue, dispatch }) => {
         
            console.log("login123",request)
    try {
      setTimeout(()=>{
        dispatch(showLoader());
      },2000)
      const response = await loginWithEmailAsync(request);
      if (response.status === 200) {
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
         await setUser(response.data.user.token);
        const fakeJson={

        }
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
          timer:3000
        });
       window.location.href = "/"
        return response;
      }
      else{
      
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: "Log in unsuccessfuLL",
          text:"Username or Password is incorret",
          timer:3000
        });
        rejectWithValue(response)
        return ;
      }
     
    } catch (error) {
      console.log("error",error);
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      setTimeout(() => {
        dispatch(showLoader());
      }, 2000);
      // const response = await logoutAsync(request);
      // if (response.status === 200 ) {
      //   await removeUser();
      //   dispatch(hideLoader());
      //   window.location.reload()
      //   return null;
      // }
      // return rejectWithValue(response);
      await removeUser();
      dispatch(hideLoader())
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
export const signUpUserAction = createAsyncThunk(
  "auth/signup",
 
  async (request, { rejectWithValue, dispatch }) => {
    //  console.log("req",request);
    try {
      setTimeout(()=>{
        dispatch(showLoader());
      },2000)
      const response = await signUpAsync(request);
          console.log("REQUEST",request);
         console.log("Response",response);
       dispatch(showLoader({ message: "sign up..........." }));
     
      if (response.status === 200) {
        // console.log("res",response);
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        
        await setUser(response.data.user.token);
        //  console.log("Response",response);
        const fakeJson={

        }
        window.location.reload()
        dispatch(hideLoader());
        return null;
        
      }
      // console.log("res",response);
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const forgotUserAction = createAsyncThunk(
  "auth/forgot",
 
  async (request, { rejectWithValue, dispatch }) => {

    try {
      // setTimeout(()=>{
      //   dispatch(showLoader());
      // },2000)
      const response = await forgotAsync(request);
          console.log("REQUEST",request);
         console.log("Response",response);
         
        //  const newErrMsg= JSON.stringify(errorMsg)
      //  dispatch(showLoader({ message: "forgot..........." }));
      if (response.status === 200) {

        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "email sent successfully",
        });
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        
        //  await setUser(response.data.user.token);
        //  console.log("Response",response);
        // const fakeJson={

        // }
        // window.location.reload()
      
        dispatch(hideLoader());
        window.location.href="/reset-password"
        return response;
        
      }else{
        window.location.href="/verify-email"
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title:"Email does not Exist",
        });
     
        
      }
      // console.log("res",response);
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const resetUserAction = createAsyncThunk(
  "auth/reset",
 
  async (request, { rejectWithValue, dispatch }) => {
    try {
      setTimeout(()=>{
        dispatch(showLoader());
      },2000)
      const response = await resetAsync(request);
          console.log("REQUEST",request);
         console.log("Response",response);
       dispatch(showLoader({ message: "reset..........." }));
     
      if (response.status === 200) {
         console.log("res",response);
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        
         await setUser(response.data.user.token);
         console.log("Response",response);
        // const fakeJson={

        // }
         window.location.reload()
        dispatch(hideLoader());
        return null;
        
      }
      // console.log("res",response);
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

