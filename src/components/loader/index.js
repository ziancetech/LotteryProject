import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { lemSelector } from "../../redux/lem/lemSlice"
import {HashLoader} from "react-spinners"
import {Dna,BallTriangle,InfinitySpin} from "react-loader-spinner"

const Loader = ( {background}) => {
  const lemData = useSelector(lemSelector);
  const { loading } = lemData;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:"100%",
          backgroundColor:"white",
          position:"fixed",
          zIndex:1
        }}
      >
        {/* <CircularProgress size={100} color="error" /> */}
        <HashLoader color="#31996A"  size={200}/>
      </Box>
    );
  }
  return null;
};

export default Loader;
