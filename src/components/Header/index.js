import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { logoutUserAction } from "../../redux/auth/middleware";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton";
import Account from "../Account/index";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  Tooltip,
  tooltipClasses,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoheader2 from "../../assets/images/logoheader.png";
import Swal from "sweetalert2";
import { authSelector } from "../../redux/auth/authSlice";
import { useState } from "react";
import { useEffect } from "react";

const drawerWidth = 240;
const ButtonAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(authSelector);
  const [isDisabled, setIsDisabled] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState("");
  // const [id,seId] =useState([])

  // const {Titles,setTitles} = useState({
  //   "home":" Go to Home",
  //   "cardList": " open Card list",
  //   "selectCard":"open select card"
  // })
  const [Titles, setTitles] = useState(["HOME","CardList"]);
  // console.log("title:",Titles.cardList);
  // 'home','cardList','selectCard'
  useEffect(() => {
    // setTitles(home,cardList);

   
    if (authState?.currentUser) {
      // const newTitles = Titles.map((ele)=>ele)
      // console.log("ids",Titles.filter((res)=>res.includes('HOME')));
      setIsDisabled(false);
      // setTooltipTitle("yes")
    //  if (Titles.filter((res)=>res.includes('HOME'))) {
    //   setTooltipTitle("open home page")
    //  }
    } else {
      setIsDisabled(true);
      setTooltipTitle("you Need to Login first to access this page");
    }
  },[200]);
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      width: 50,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      width: "100%",
      textAlign: "center",
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCardList = () => {
    navigate("/card");
  };
  const ClickToHome = () => {
    console.log("home clicking");
    navigate("/");
    window.location.reload();
  };
  const ClickToSelectCard = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    console.log("log");
    Swal.fire({
      title: "Are You Sure?",
      color: "#000",
      text: "Want to logout !",
      icon: "question",
      width: 600,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "green",
      cancelButtonText: `No`,
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        dispatch(logoutUserAction());
        navigate("/");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 8000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged out successfully",
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
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
          icon: "error",
          title: "Logout unsuccessfull",
        });
      }
    });
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          backgroundColor: "#31996A",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
        }}
      >
        Card Login
      </Typography>
      <Divider />
      <List>
        <ListItem sx={{ pt: 5 }}>
          <MyButton
            size="small"
            title="home"
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            // disabled={authState?.currentUser?true:false}
            fullWidth
            // Disabled={true}
            handleClick={ClickToHome}
          />
        </ListItem>
        <ListItem>
          <MyButton
            size="small"
            title="Card list"
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            handleClick={handleCardList}
            fullWidth
          />
        </ListItem>

        <ListItem>
          <MyButton
            size="small"
            title="Select Card"
            variant="contained"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            fullWidth
            handleClick={ClickToSelectCard}
          />
        </ListItem>
        <ListItem>
          {authState?.currentUser ? (
            <MyButton
              size="small"
              title="Userinfo"
              variant="contained"
              fullWidth
              sx={{
                color: "white",
                backgroundColor: "#31996A",
                marginRight: "20px",
              }}
              handleClick={() => navigate("/Userinfo")}
            />
          ) : (
            <MyButton
              title="lOGIN"
              variant="contained"
              sx={{
                color: "white",
                marginRight: "20px",
                backgroundColor: "#31996A",
              }}
              handleClick={() => navigate("/login")}
              fullWidth
            />
          )}
        </ListItem>
        <ListItem>
          <MyButton
            size="small"
            title="logout"
            variant="contained"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            handleClick={handleLogout}
            fullWidth
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Grid container justifyContent="center" bgcolor="#31996A">
      <Grid item sm={12} md={8} xs={12} lg={8} xl={8}>
        <Toolbar>
          <Grid
            container
            sx={{
              display: {
                sm: "flex",
                xs: "flex",
                md:"none",
                justifyContent: "space-evenly",
              },
            }}
          >
            <Grid item xs={4}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" sx={{ color: "white" }}>
                Card Login
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 2,
              display: { xs: "none", sm: "none",md:"flex" },
              alignItems: "center",
              margin: 1,
            }}
          >
            <img src={logoheader2} style={{ height: "70px" }} alt="img"></img>
            <Typography
              variant="h4"
              sx={{
                marginLeft: "15px",
                color: "white",
                fontFamily:
                  "-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
              }}
              whiteSpace="nowrap"
          
            >
              Card Login
            </Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none",md:"flex" } ,justifyContent:"space-evenly"}}>
            <BootstrapTooltip title={tooltipTitle}>
              <Grid item  whiteSpace="nowrap">
                <MyButton
                  size="small"
                  title="home"
                  variant="text"
                  sx={{ color: "white", marginRight: "20px",whiteSpace:"nowrap" }}
                  handleClick={ClickToHome}
                  Disabled={isDisabled}
                />
              </Grid>
            </BootstrapTooltip>
            <BootstrapTooltip title={tooltipTitle}>
              <Grid item  whiteSpace="nowrap">
                <MyButton
                  size="small"
                  title="Select Card"
                  variant="text"
                  sx={{ color: "white", marginRight: "20px" }}
                  handleClick={ClickToSelectCard}
                  Disabled={isDisabled}
                />
              </Grid>
            </BootstrapTooltip>
            <BootstrapTooltip title={tooltipTitle}>
              <Grid item whiteSpace="nowrap">
                <MyButton
                  size="small"
                  title="Card list"
                  variant="text"
                  sx={{ color: "white", marginRight: "20px" }}
                  handleClick={handleCardList}
                  Disabled={isDisabled}
                />
              </Grid>
            </BootstrapTooltip>
            {authState?.currentUser ? (
              <Account />
            ) : (
              <MyButton
                title="lOGIN"
                variant="text"
                sx={{ color: "white" }}
                handleClick={() => navigate("/login")}
              />
            )}
          </Box>
        </Toolbar>

        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ButtonAppBar;
