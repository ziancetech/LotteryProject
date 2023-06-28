import React from "react";
import { useSelector } from "react-redux";
import Loader from "./components/loader";
import AppNavigator from "./navigators/AppNavigator";
import AuthNavigator from "./navigators/AuthNavigator";
import { authSelector } from "./redux/auth/authSlice";

const App = () => {
  const authState = useSelector(authSelector);

  return (
    <>
      <Loader />
      {authState?.currentUser ? <AppNavigator /> : <AuthNavigator />}
    </>
  );
};

export default App;
