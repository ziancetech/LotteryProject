import { Button } from "@mui/material";
import React from "react";
// import { logoutUserAction } from "../../redux/auth/middleware";
// import { useDispatch, useSelector } from "react-redux";
// import { authSelector } from "../../redux/auth/authSlice";



const MyButton = ({
  title,
  className,
  fullWidth,
  variant,
  handleClick,
  type,
  sx,
  img,
  Disabled
}) => {
  // const authState = useSelector(authSelector);
  // console.log("button",authState);
  return (
    <Button
      className={className}
      fullWidth={fullWidth || false}
      variant={variant}
      onClick={handleClick}
      type={type}
      sx={sx}
      img={img}
      disabled={Disabled}
    >
      {title}
    </Button>
  );
};

export default MyButton;
