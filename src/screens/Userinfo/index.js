import { Divider, Typography } from "@mui/material";
import React from "react";
import WrapperComponent from "../../components/WrapperComponent";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FieldText from "../../components/fieldtext";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MyButton from "../../components/MyButton";
import Avatar from "@mui/material/Avatar";
const Userinfo = () => {
  const currencies = [
    {
      value: "USD",
      label: "San Francisco",
    },
    {
      value: "EUR",
      label: "Alabama",
    },
    {
      value: "BTC",
      label: "New York",
    },
    {
      value: "JPY",
      label: "Los Angeles",
    },
  ];
  return (
    <WrapperComponent isHeader>
      <Grid
        container
        sx={{
          width: "100%",
          height:{xs:"110%"},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          md={8}
          xs={11}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1%",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                  xl: "left",
                },
              }}
            >
              <Typography variant="h4"> Account</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item md={4} xs={12} padding={1}>
                  <Card
                    sx={{
                      height: {xs:"100%",md:"70%"},
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      //  backgroundColor:"red"
                    }}
                  >
                    <CardContent
                      ardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Grid container padding={1} justifyContent="center">
                        <Avatar src="/broken-image.jpg" />
                      </Grid>
                      <Grid container sx={{ justifyContent: "center" }}>
                        <Typography variant="h5">name</Typography>
                      </Grid>
                      <Grid item>
                        <Divider></Divider>
                        <MyButton
                          size="small"
                          title="upload picture"
                          variant="contained"
                          sx={{
                            color: "white",
                            width: "100%",
                            marginRight: "10%",
                            backgroundColor: "#31996A",
                          }}
                        />
                      </Grid>
                    </CardContent>
                    <CardContent sx={{ pt: 0 }}>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8} padding={1}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      // backgroundColor:"red"
                    }}
                  >
                    <CardContent sx={{ pt: 0 }}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "left",
                          alignItems: "left",
                          marginBottom: 4,
                        }}
                      >
                        <Typography variant="h5" marginTop={3}>
                          Profile{" "}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 18, textAlign: "left" }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {" "}
                          The information can be edited
                        </Typography>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item  xs={12} sm={12} md={12} lg={6} xl={6}>
                          <FieldText
                            fullWidth
                            type="text"
                            id="name"
                            label="first name*"
                            name="firstname"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                          <FieldText
                            fullWidth
                            type="text"
                            id="name"
                            label="Last name*"
                            name="lastname"
                          />
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={6} xl={6}>
                          <FieldText
                           
                            fullWidth
                            type="email"
                            id="email"
                            label="Email Address*"
                            name="email"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                          <FieldText
                            fullWidth
                            type="number"
                            id="name"
                            label="Phone number"
                            name="phonenumber"
                          />
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={6} xl={6}>
                          <FieldText
                            fullWidth
                            type="country"
                            id="country"
                            label="country*"
                            name="country"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                          <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Select State"
                            defaultValue="EUR"
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item></Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", justifyContent:{xs:"center",sm:"center",md: "end"} }}
                        >
                          <MyButton
                            size="small"
                            title="save details"
                            variant="contained"
                            sx={{
                              color: "white",
                              backgroundColor: "#31996A",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};
export default Userinfo;