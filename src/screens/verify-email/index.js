import React from "react";
import Loader from "../../components/loader";
import Popup from "../../components/Popup";
import Verificationlogo from "../../assets/images/emailverification.jpg";
import { Box, Grid, Typography } from "@mui/material";
import WrapperComponent from "../../components/WrapperComponent";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <WrapperComponent>
      <Box
        // image={Verificationlogo}
        // title="verification"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            border: "1px solid black",
            display: "flex",
            // backgroundColor: "#31996A",
            justifyContent: "center",
          }}
        >
          <Grid container sx={{backgroundColor:"#31996A"}} justifyContent="center">
            <Grid item xs={12} md={6}   sx={{ backgroundColor: "white", borderRadius: 15, boxShadow: 20 }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                  }}
                >
                  <TaskAltIcon sx={{ scale: "10", color: "#31996A" }} />
                </Grid>
                <Grid item xs={12} padding={5}>
                  <Typography variant="h4" textAlign="center">
                    We have Sent You the email for verification on your email id
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  padding={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyButton
                    variant="text"
                    title="Back to Login"
                    sx={{ color: "#31996A" }}
                    handleClick={() => navigate("/login")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* <Loader /> */}
    </WrapperComponent>
  );
};

export default VerifyEmail;
