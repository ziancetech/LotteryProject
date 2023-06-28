import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyButton from "../MyButton";
// import Verificationlogo from "../../assets/Images/emailverification.jpg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(20),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default function Popup({
  image,
  imgtitle,
  text,
  popupsx,
  ConfirmClick,
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const itemData = [
    {
      img: image,
      imgtitle: imgtitle,
      text: text,
    },
  ];
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box dividers  sx={popupsx}>
          <Grid
            container
            xs={7}
            md={10}
            sm={12}
            lg={12}
            justifyContent="center"
          >
            <Grid item xs={12} md={12}>
              <ImageList
                sx={{
                  marginLeft: "20%",
                  height: "250px",
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{ width: "180px" }}>
                    <img src={item.img} alt={item.imgtitle} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid
              item
              textAlign="center"
              xs={8}
              md={12}
            >
              <Typography fontSize="30px" sx={{fontSize:{xs:"22px",sm:"30px",md:"30px",lg:"30px"}}} >
                Want To Choose This Card <span style={{ color: "red" }}>?</span>
              </Typography>
              <Typography
                sx={{ marginBottom: {md:"30px",xs:"0"} }}
                md={8}
              >
                If you click on confirm then your bid will be placed and{" "}
                <span style={{ color: "red", fontSize: "20px" }}>1$</span> will
                be deducted from your account{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={10}
              md={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <MyButton
                variant="contained"
                sx={{
                  height: "50px",
                  width: "150px",
                  backgroundColor: "green",
                  margin:"10px"
                }}
                handleClick={ConfirmClick}
                title="Confirm"
              />
              <MyButton
                variant="contained"
                sx={{
                  height: "50px",
                  width: "150px",
                  backgroundColor: "red",
                  margin:"10px"
                }}
                handleClick={handleClose}
                title="Cancel"
              />
            </Grid>
          </Grid>
        </Box>
      </BootstrapDialog>
    </>
  );
}







