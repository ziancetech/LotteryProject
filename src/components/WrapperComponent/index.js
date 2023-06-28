import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";
import Footer from "../Footer";


function WrapperComponent(props) {
  const { children, isHeader ,isFooter} = props;
  return (
    <Box sx={{ width: "100%" ,scrollBehavior:"smooth"}} >
      <CssBaseline />
      <Box  sx={{fontFamily:"apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"}}>
        {isHeader && <Header />}
        {children}
        {isHeader && <Footer/>}
      </Box>
    </Box>
  );
}
export default WrapperComponent;
