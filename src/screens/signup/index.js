import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MyButton from "../../components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import "./_SignupPage.css";
import FieldText from "../../components/fieldtext";
import { useFormik } from "formik";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { signUpUserAction } from "../../redux/auth/middleware";
import { authSelector } from "../../redux/auth/authSlice";
import Swal from "sweetalert2";
const initialValues = {
  firstName: "",
  lastName: "",
  userName:"",
  email: "",
  phone: "",
  passwordHash: "",
  cPassword: "",
};
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const signUpSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "phone is not valid")
    // .number()
    .required("Required")
    .min(10, "contactNois not valid")
    .max(10, "phone is not valid"),
  passwordHash: yup
    .string()
    .required("required")
    .min(4, "Password is too short - should be 4 chars min"),
  // .matches(passwordRules, { message: "Please create a stronger password" }),
  cPassword: yup
    .string()
    .required("required")
    .min(4, "Password is too short - should be 4 chars min")
    .oneOf([yup.ref("passwordHash"), null], "Passwords must match"),
});
const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = useSelector(authSelector);
  console.log("signup dta:", signup);
  const initialValues = {
    firstName: "",
    lastName: "",
    userName:"",
    email: "",
    phone: "",
    passwordHash: "",
  };
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (val) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
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
        });
        dispatch(signUpUserAction(val));
        navigate("/");
      },
    });
  const Navigatetologin = () => navigate("/Login");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log("show password");
  };
  return (
    <Grid
      container
      className="mainsignup"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "100vh" },
          width: { xs: "97vw", lg: "40vw", sm: "60vw", md: "50vw" },
          // mr: { xs: "%" },
        }}
      >
        <Box>
          <Card className="signupbox" sx={{ overflow: "auto" }}>
            <CardContent>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <CardHeader
                  title="Sign Up"
                  variant="h1"
                  sx={{}}
                  className="Cardheader"
                />
              </Grid>
              <form noValidate onSubmit={handleSubmit}>
                <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                  {/* <Textfield/> */}
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <FieldText
                        fullWidth={true}
                        className="firstname"
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        touched={touched?.firstName}
                        errors={errors?.firstName}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {touched.firstName && errors.firstName ? (
                        <div className="error">{errors.firstName}</div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FieldText
                        fullWidth={true}
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        touched={touched?.lastName}
                        errors={errors?.lastName}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {touched.lastName && errors.lastName ? (
                        <div className="error">{errors.lastName}</div>
                      ) : null}
                    </Grid>
                    <FieldText
                      sx={{
                        fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi",
                      }}
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
                    <Grid item xs={12}>
                      <FieldText
                        fullWidth={true}
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        id="email"
                        name="email"
                        touched={touched?.email}
                        errors={errors?.email}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailRoundedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {touched.email && errors.email ? (
                        <div className="error">{errors.email}</div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12}>
                      <FieldText
                        fullWidth={true}
                        type="tel"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="phone"
                        id="phone"
                        name="phone"
                        touched={touched?.phone}
                        errors={errors?.phone}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneRoundedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {touched.phone && errors.phone ? (
                        <div className="error">{errors.phone}</div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FieldText
                        fullWidth={true}
                        // type="password"
                        type={showPassword ? "text" : "password"}
                        id="Password"
                        value={values.passwordHash}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Password"
                        name="passwordHash"
                        touched={touched?.passwordHash}
                        // errors={errors?.passwordHash}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <KeyRoundedIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                      {touched.passwordHash && errors.passwordHash ? (
                        <div className="error">{errors.passwordHash}</div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FieldText
                        className="lastname"
                        fullWidth={true}
                        type={showPassword ? "text" : "password"}
                        value={values.cPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Confirm Password"
                        id="cPassword"
                        name="cPassword"
                        touched={touched?.cPassword}
                        // errors={errors?.cPassword}
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <KeyRoundedIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              {/* <RemoveRedEyeRounded /> */}
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                      {touched.cPassword && errors.cPassword ? (
                        <div className="error">{errors.cPassword}</div>
                      ) : null}
                    </Grid>
                  </Grid>
                </Typography>
                <Grid item>
                  <Typography variant="body2" className="signupboxfooter">
                    <MyButton
                      className="signup"
                      fullWidth={false}
                      title="sign up"
                      variant="contained"
                      type="submit"
                      sx={{
                        width: "80%",
                        marginLeft: "10%",
                        backgroundColor: "#363A3E",
                      }}
                    />
                  </Typography>
                </Grid>
                <br />
                <Divider />
                <br />
                <Grid item textAlign="center">
                  <Typography className="SUtext" gutterBottom>
                    Already have a account ?
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" justifyContent="center">
                  <MyButton
                    className="Slogin"
                    fullWidth={false}
                    title="Log in"
                    handleClick={Navigatetologin}
                  />
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Signup;
