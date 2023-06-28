import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../screens/login"));
const ForgotPassword = lazy(() => import("../screens/forgot-password"));
const ResetPassword = lazy(() => import("../screens/reset-password"));
const SignUp = lazy(() => import("../screens/signup"));
const VerifyEmail = lazy(() => import("../screens/verify-email"));
const NotFound = lazy(() => import("../screens/page-not-found"));
const LandingPage = lazy(()=> import ("../screens/landingpage"))



function AuthNavigator() {
  return (
    <Suspense
      fallback={
        <>
        </>
      }   
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/Landingpage" element={<LandingPage/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AuthNavigator;
