import { Grid, Typography } from "@mui/material";
import React from "react";
import WrapperComponent from "../../components/WrapperComponent";
import "./pagenotfound.css";
import video from "../../assets/videos/404vid.mp4";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";
import { width } from "@mui/system";

const PageNotFound = () => {
  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate("/");
  };
  return (
    <WrapperComponent >
      <Grid
        container
        className="pagenotfoundcontainer"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={12}
      >
        <Grid item xs={12}  zIndex={1} className="heading" left={{sm:"25%"}}>
        <Typography noWrap sx={{fontSize:{xs:10,sm:20},textAlign:"center"}}> Page Not Found</Typography>
        </Grid>
        
        <Grid item  className="content">
        <Typography sx={{fontSize:{xs:8,sm:20}}}>
          <span style={{ fontSize:{xs:5,sm:20}, color: "red" }}>Oops!!</span> We
          can't seem to find the page you're looking for!{" "}
        </Typography>
        </Grid>
        
        <MyButton
          sx={{
            position: "absolute",
            top: "88%",
            left: "20%",
            zIndex: "1",
            backgroundColor: "green",
            padding:"10px",
            width:{sm:"10%",xs:"50%"}
          }}
          size="small"
          title="Go Home"
          variant="contained"
          handleClick={NavigateToHome}
        />
        <video
          autoPlay
          style={{ position: "absolute", width: "90%" }}
          loop
          muted
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </Grid>
    </WrapperComponent>
  );
};

export default PageNotFound;
