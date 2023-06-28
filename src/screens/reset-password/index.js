import * as React from "react";
import * as yup from "yup";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import WrapperComponent from "../../components/WrapperComponent";
import { Divider, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import FieldText from "../../components/fieldtext";

import Swal from "sweetalert2";
import MyButton from "../../components/MyButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";
import { resetUserAction } from "../../redux/auth/middleware";
import { authSelector } from "../../redux/auth/authSlice";

import "./_resetpassword.css";

const continueSchema = yup.object().shape({
  password: yup
    .string()
    .required("required")
    .min(4, "Password is too short - should be 4 chars min"),
  // .matches(passwordRules, { message: "Please create a stronger password" }),
  cPassword: yup
    .string()
    .required("required")
    .min(4, "Password is too short - should be 4 chars min")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetpassword = useSelector(authSelector);
  console.log("signup dta:", resetpassword);
  const initialValues = {
    password: "",
    cPassword: "",
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,

    values,
    touched,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: continueSchema,
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
    console.log("val", val)
       dispatch(resetUserAction(val.password));
          
       navigate("/login");
    },
  });
  const Navigatetocontinue = (val) => {
      console.log("value", val);
     navigate("/login");
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log("show password");
  };
  return (
    <WrapperComponent>
      <Grid container className="container-fluid">
        <Card
          className="resetpsswdCard"
          xs={12}
          sx={{ minHeight: "fit-content", padding: "5%", display: "flex" }}
        >
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              item
              sx={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <KeyRoundedIcon className="icon" />
            </Grid>
            <Grid
              xs={12}
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <CardHeader
                className="FPheader"
                title="Reset Password"
                variant="h1"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display="flex"
              justifyContent="center"
              margin="5%"
            >
              <FieldText
                fullWidth={true}
                // type="password"
                type={showPassword ? "text" : "password"}
                id="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                name="password"
                touched={touched?.password}
                // errors={errors?.password}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              margin="7%"
            >
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {touched.cPassword && errors.cPassword ? (
                <div className="error">{errors.cPassword}</div>
              ) : null}
            </Grid>

            <Grid container>
              <Grid item>
                <MyButton
                type="submit"
                  className="pswd"
                  size="small"
                  title="continue"
                  variant="contained"
                  // handleClick={Navigatetocontinue}
                />
              </Grid>
              <Grid item marginLeft={2}>
                <MyButton
                  className="pswd"
                  size="small"
                  title="cancel"
                  variant="contained"
                  // handleClick={Navigatetocontinue}
                />
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </WrapperComponent>
  );
};
export default ResetPasswordPage;
