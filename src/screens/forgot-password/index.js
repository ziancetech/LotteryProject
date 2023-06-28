
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import WrapperComponent from "../../components/WrapperComponent";
import { Divider, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import "./_forgotpassword.css";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MyButton from "../../components/MyButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";
import Swal from "sweetalert2";
import { showLoader } from "../../redux/lem/lemSlice";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader";
 import { forgotUserAction } from "../../redux/auth/middleware";

const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});
const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: (val, err) => {
      
     
         dispatch(forgotUserAction(val.email));
         console.log("val", val.email);
        //  navigate("/reset-password")
       
        
      },
    });
  const handleclick = () => navigate("/");
  return (
    <WrapperComponent>
      <Grid container className="container-fluid">
        <Card className="forgotpsswdCard">
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              item
              sx={{
                width: { xs: "95vw",lg:"25vw",sm:"60vw",md:"40vw"  },
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
                title="forgot password?"
                variant="h1"
              />
            </Grid>
            <Grid xs={12} item sx={{ textAlign: "center", margin: "1%" }}>
              <Typography className="FPtext" gutterBottom>
                No worries, we'll send you reset instructions.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              className="mail"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <FieldText
                sx={{ mt: 1.5, mb: 1.5, width: {sm:"80%",md:"80%",lg:"80%",xs:"98%"} }}
                type="text"
                id="email"
                label="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched?.email}
                errors={errors?.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              
              
            </Grid>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center",marginBottom:2}}>
              {touched.email && errors.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              </Grid>
            <Grid item xs={12}>
              <MyButton
                className="resetpsswd"
                fullWidth={false}
                title="Reset Password"
                variant="contained"
                 handleClick={handleSubmit}
                type="submit"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "1.5%",
              }}
            >
              <ArrowBackRoundedIcon  />
              <MyButton
                className="bcklogin"
                fullWidth={false}
                title="Back to log in"
                type={"button"}
                handleClick={handleclick}
                sx={{scale:"1.5", color:"green",marginLeft:"10px"}}
              />
            </Grid>
          </form>
        </Card>
      </Grid>
      {/* </div> */}
    </WrapperComponent>
  );
};
export default ForgotPasswordPage;