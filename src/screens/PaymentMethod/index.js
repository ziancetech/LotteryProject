import * as React from "react";
import Card from "@mui/material/Card";
import { CardActions, CardHeader, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, InputAdornment } from "@mui/material";
import WrapperComponent from "../../components/WrapperComponent";
import "./_paymentmethod.css";
import CardMedia from "@mui/material/CardMedia";
import FieldText from "../../components/fieldtext";
import MyButton from "../../components/MyButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import picture from "../../assets/images/Credit-card-logo.png";

const Visacard= /^4[0-9]{12}(?:[0-9]{3})?$/;
const Mastercard = /^5[1-5][0-9]{14}$/;
const AmericanExpress = /^3[47][0-9]{13}$/;

const CardPaymentSchema = Yup.object().shape({
  cardNumber: Yup.string() 
    .min(16, "Enter valid card number")
    .max(16, "Enter valid card number")
    .required("required"),
  cvv: Yup.string().min(3).max(4).required("required"),
  nameOnCard: Yup.string().required("required"),
  expiryMonth: Yup.string().min(1).max(2).required("required"),
  expiryYear: Yup.string().min(4).max(4).required("required"),
});
const PaymentMethodPage = () => {
  const initialValues = {
    cardNumber: "",
    cvv: "",
    nameOnCard: "",
    expiryMonth: "",
    expiryYear: "",
  };

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CardPaymentSchema,
      onSubmit: (val) => {
        // console.log("signup details");
        console.log("val", val)
      },
    });

  return (
    <WrapperComponent isHeader>
      <Grid container  className="paymentmethodpage">
        <Card
          className="maincard"
          sx={{
            width: { xs: "38vh", sm: "45vw", md: "45vw", lg: "40vw" },
          }}
        >
          <CardContent sx={{ width: "100%", justifyContent: "center" }}>
            <CardHeader
              sx={{
                mb: "3",
              }}
              className="cardheader"
              title="Payment Information"
            />
            <Divider />
            <form noValidate onSubmit={handleSubmit}>
              <Typography
                variant="body2"
                sx={{
                  mt: "2%",
                  mb: "2",
                  fontWeight: "bold",
                }}
                component="div"
              >
                We accept the following card types :
              </Typography>
              <Grid item xs={5}>
                <CardMedia
                  className="cardlogo"
                  component="img"
                  sx={{
                    width: { xs: "35vh", sm: "25vw" },
                    height: { xs: "40", sm: "50" },
                  }}
                  image={picture}
                />
              </Grid>
              <Grid item xs={12} display={"contents"}>
                <Typography
                  sx={{fontWeight: "bold" }}
                  variant="subtitle1"
                >
                  Name on card :
                </Typography>
                <FieldText
                  fullWidth={true}
                  className="Cardholdername"
                  type="text"
                  value={values.nameOnCard}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="Name"
                  name="nameOnCard"
                  touched={touched?.nameOnCard}
                  errors={errors?.nameOnCard}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                {touched.nameOnCard && errors.nameOnCard ? (
                  <div className="error">{errors.nameOnCard}</div>
                ) : null}
              </Grid>
              <br />
              <Grid item xs={12} display={"contents"} sx={{ mt: "3" }}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle1"
                >
                  Card Number :
                </Typography>
                <FieldText
                  fullWidth={true}
                  className="cardnumber"
                  type="tel"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="number"
                  name="cardNumber"
                  touched={touched?.cardNumber}
                  errors={errors?.cardNumber}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {touched.cardNumber && errors.cardNumber ? (
                  <div className="error">{errors.cardNumber}</div>
                ) : null}
              </Grid>
              <br />
              <Grid item display={"contents"}>
                <Grid
                  item
                  xs={12}
                  className="expirydate"
                  sx={{ display: "flex", mt: "1" }}
                  display={"contents"}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{fontWeight: "bold" }}
                      variant="subtitle1"
                    >
                      Expiry Date
                    </Typography>
                  </Grid>
                  <Grid item md={2} xs={5}>
                    <FieldText
                      fullWidth={true}
                      className="cardnumber"
                      type="tel"
                      value={values.expiryMonth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Month"
                      id="expiryMonth"
                      name="expiryMonth"
                      touched={touched?.expiryMonth}
                      errors={errors?.expiryMonth}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.expiryMonth && errors.expiryMonth ? (
                      <div className="error">{errors.expiryMonth}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={5} md={2} marginLeft={2}>
                    <FieldText
                      fullWidth={true}
                      className="cardnumber"
                      type="tel"
                      value={values.expiryYear}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Year"
                      id="number"
                      name="expiryYear"
                      touched={touched?.expiryYear}
                      errors={errors?.expiryYear}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.expiryYear && errors.expiryYear ? (
                      <div className="error">{errors.expiryYear}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={6} sx={{ ml: { sm: "25px" } }}>
                    <FieldText
                      fullWidth={true}
                      className="cardnumber"
                      type="tel"
                      value={values.cvv}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="CVV"
                      id="number"
                      name="cvv"
                      touched={touched?.cvv}
                      errors={errors?.cvv}
                    />
                    {touched.cvv && errors.cvv ? (
                      <div className="error">{errors.cvv}</div>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>

              <CardActions sx={{ justifyContent: "center" }}>
                <Grid item xs={6}>
                  <MyButton
                    className="Continuebutton"
                    fullWidth={true}
                    title="Continue"
                    variant="contained"
                    type="submit"
                  />{" "}
                </Grid>
                <Grid />
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </WrapperComponent>
  );
};
export default PaymentMethodPage;
