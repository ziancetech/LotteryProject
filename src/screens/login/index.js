import React from "react";
import WrapperComponent from "../../components/WrapperComponent";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";
import "./_logincard.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import MyButton from "../../components/MyButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { loginUserByEmailAction } from "../../redux/auth/middleware";
import { authSelector } from "../../redux/auth/authSlice";
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
// import NumberCounter from 'my-number-counter';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector(authSelector);
  const authState = useSelector(authSelector);
  const [showPassword, setShowPassword] = React.useState(false);
  const [users,setUsers]=useState(false)
  const initialValues = {
     //email: "",
     userName: "",
    password: "",
  };
  const signInSchema = yup.object().shape({
    //  email: yup.string().email().required("userName is required"),
    userName: yup.string().required("userName is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars min"),
  });

  useEffect(() => {
    console.log("authState",authData);
    if (authData?.currentUser) {
      console.log("true");
      setUsers(true); 
    } else {
      console.log("false");
      setUsers(false);
    }
  })
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (val, err) => {
        dispatch(loginUserByEmailAction(val));
      },
    });


    useEffect(()=>{
      const newitem= localStorage.getItem("secure:user")
      console.log("log",localStorage.getItem("secure:user"));
    })

    console.log("authfts",authData);
  const NavigateOnClick = () => {
    navigate("/forgot-password");
  };
  const NavigateOnClickRegistraion = () => {
    navigate("/signUp");
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <WrapperComponent>
      <Grid container justifyContent= "center" border={1} className="container">
        <Grid
          item
          sx={{
            width: { xs: "95vw",lg:"40vw",sm:"70vw",md:"60vw"  },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Card className="loginbox">
              <CardContent>
                <CardHeader
                  className="Cardheader"
                  title="Sign in"
                  variant="h1"
                  sx={{
                    // textShadow: "1px 1px 20px red",
                  }}
                />
                <form noValidate onSubmit={handleSubmit}>
                  <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                    <Grid container>
                     
                    <Grid item xs={12}>
                        <FieldText
                        sx={{ fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi"}}
                          fullWidth={true}
                          type="userName"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="userName"
                          id="userName"
                          name="userName"
                          touched={touched?.userName}
                          errors={errors?.userName}
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        
                      </Grid>  
                       {/* <Grid item xs={12}>
                        <FieldText
                        sx={{ fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi"}}
                          fullWidth={true}
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="email"
                          id="email"
                          name="email"
                          touched={touched?.email}
                          errors={errors?.email}
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        
                      </Grid> */}
                      <Grid item xs={12}>
                        <FieldText
                        sx={{ fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi"}}
                          fullWidth={true}
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="password"
                          name="password"
                          touched={touched?.password}
                          errors={errors?.password}
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  // onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        {touched.password && errors.password ? (
                          <div className="error">{errors.password}</div>
                        ) : null}
                      </Grid>
                      {/* <NumberCounter end={100} delay={5} className="increment" preFix="Up revenue:" postFix="$"/> */}
                    </Grid>
                  </Typography>
                  <Typography variant="body2" className="boxfooter">
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <MyButton
                          className="signin"
                          fontFamily="apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"
                          // fullWidth={true}
                          title="sign in"
                          variant="contained"
                          type="submit"
                       
                        />{" "}
                        <MyButton
                        
                           className="signin"
                          size="small"
                          title="Signup"
                          variant="contained"
                         handleClick={NavigateOnClickRegistraion}
                         
                        />
                        
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <MyButton
                          className="forgotpassword"
                          size="small"
                          title="Forgot password ?"
                          variant="text"
                          handleClick={NavigateOnClick}
                        />
                      </Grid>
                    </Grid>
                  </Typography>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};
export default Login;