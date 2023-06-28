import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MyButton from "../MyButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Swal from "sweetalert2";
import { logoutUserAction } from "../../redux/auth/middleware";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

 const options = ["hrh"];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
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
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
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
          icon: "success",
          title: "Logged out successfully",
        });
        dispatch(logoutUserAction());
        navigate("/");
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
  

  return (
    <React.Fragment>
        <MyButton
          size="small"
          title={
            <AccountCircleIcon onClick={handleClick} ref={anchorRef} style={{ border: "none" }}>
              {options[selectedIndex]}
            </AccountCircleIcon>
          }
          variant="text"
          sx={{ border: "none", height: "30px", scale: "1.5", color: "white" }}
          handleClick={handleToggle}
        />
      <Popper
        sx={{
          zIndex: 1,
          
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              borderRadius: "25px 10px 25px 10px",
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {/* {option} */}
                      <MyButton
                        size="small"
                        title="Userinfo"
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#31996A",
                          margin: "15%",
                          borderRadius: "10px",
                          
                          
                        }}
                        handleClick={() => navigate("/Userinfo")}
                        
                      />
                      <MyButton
                        size="small"
                        title="logout"
                        variant="contained"
                        sx={{ color: "white", backgroundColor: "#31996A",borderRadius: "10px" }}
                        handleClick={handleLogout}
                      />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
