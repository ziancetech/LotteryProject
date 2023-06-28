import React, { useEffect } from "react";
import "./_landingPage.css";
import WrapperComponent from "../../components/WrapperComponent";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Timer from "../../components/timer";
import MyCard from "../../components/mycard";
import WinnerSlider from "../../components/winner-slider";
import WinnnerBanner from "../../assets/images/winnerbanner.png";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import AboutUs from "../../components/aboutus";
import MyButton from "../../components/MyButton";
import FAQS from "../../components/FAQS";

const LandingPage = () => {
  const handleDelete = () => {};

  //changes
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const current = new Date();
  const TommorowDate = `${current.getDate() + 1}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        sx={{ height: { xs: 6550, sm: 5400, md: 5800, lg: 5300 } }}
        width="100%"
      >
        <Grid item xs={12} height="94vh" data-aos="fade-right" ref={ref1}>
          <Grid
            container
            xs={12}
            borderBottom={1}
            sx={{ height: { xs: "75vh", sm: "40vh" } }}
            className="firstgrid"
            data-aos="fade-down"
          >
            <Grid
              item
              xs={12}
              md={12}
              xl={6}
              sx={{
                justifyContent: {
                  xs: "center",
                  md: "center",
                  sm: "center",
                  xl: "end",
                },
              }}
            >
              <Grid
                container
                spacing={0}
                height="100%"
                sx={{
                  justifyContent: {
                    xs: "center",
                    md: "center",
                    sm: "center",
                    xl: "end",
                  },
                }}
                alignItems="center"
                data-aos="fade-down"
              >
                <Grid item xs={11} md={7}>
                  <Typography
                    variant="h4"
                    color="white"
                    data-aos="fade-down"
                    whiteSpace="pre-line"
                    sx={{
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                    }}
                  >
                    ONLINE LOTTERY IN INDIA
                  </Typography>
                </Grid>
                <Grid item xs={11} lg={7}>
                  {/* <br></br> */}
                  <Typography
                    variant="h6"
                    textAlign="left"
                    sx={{
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                    }}
                    color="white"
                    data-aos="fade-down"
                    whiteSpace="pre-wrap"
                  >
                    Online lottery is more popular than ever, and you can play
                    the best games from anywhere in India. The concept is
                    nothing new in India, but playing online is a lot easier and
                    more fun! We’re sharing all our tips and tricks for the best
                    online lottery experience!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: {
                  sm: "none",
                  xs: "none",
                  md: "none ",
                  lg: "none",
                  xl: "flex",
                },
                justifyContent: "end",
              }}
            >
              <img
                src="card-images/HeartsCard/ACE_OF_HEARTS.png"
                alt=""
                height={200}
                style={{
                  position: "absolute",
                  top: 180,
                  right: 180,
                  rotate: "290deg",
                  // height:{xl:200,sm:20,lg:"10px"}
                }}
                data-aos="fade-up"
                data-aos-duration="4500"
                data-aos-delay="1500"
              />
              <img
                src="card-images/ClubsCard/ACE_OF_CLUBS.png"
                alt=""
                height={200}
                style={{
                  position: "absolute",
                  top: 110,
                  right: 150,
                  rotate: "310deg",
                }}
                data-aos="fade-up"
                data-aos-duration="4500"
                data-aos-delay="1500"
              />
              <img
                src="card-images/DiamondsCard/ACE_OF_DIAMONDS.png"
                alt=""
                height={200}
                style={{
                  position: "absolute",
                  top: 50,
                  right: 90,
                  rotate: "330deg",
                }}
                data-aos="fade-up"
                data-aos-duration="4500"
                data-aos-delay="1500"
              />
              <img
                src="card-images/SpadesCard/ACE_OF_SPADES.png"
                alt=""
                height={200}
                style={{
                  position: "absolute",
                  top: 15,
                  right: 10,
                  rotate: "350deg",
                }}
                data-aos="fade-up"
                data-aos-duration="4500"
                data-aos-delay="1500"
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              zIndex: 10,
            }}
            item
            boxShadow={10}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="row"
              justifyContent="center"
              spacing={5}
              padding={2}
            >
              <Chip
                label="How To Play"
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2000"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  // justifyContent: "space-between",
                  textAlign: "center",
                  backgroundColor: "#F4BB44",
                  boxShadow: "2px 2px 5px gray",
                  cursor: "pointer",
                  "&:hover": {
                    scale: "1.05",
                    backgroundColor: "#F4BB44",
                  },
                }}
                variant="contained"
                onClick={() =>
                  ref2.current?.scrollIntoView({ behavior: "smooth" })
                }
                // onDelete={handleDelete}
                // deleteIcon={
                //   <ExpandCircleDownOutlinedIcon
                //     style={{ color: "gray", scale: "1.5" }}
                //   />
                // }
              />
              <Chip
                label="Winnig History"
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2500"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  // justifyContent: "space-between",
                  textAlign: "center",
                  backgroundColor: "#F4BB44",
                  "&:hover": {
                    background: "#F4BB44",
                    color: "black",
                    scale: "1.05",
                  },
                }}
                variant="contained"
                onClick={() =>
                  ref3.current?.scrollIntoView({ behavior: "smooth" })
                }
                // onDelete={handleDelete}
                // deleteIcon={
                //   <ExpandCircleDownOutlinedIcon
                //     style={{
                //       color: "gray",
                //       scale: "1.5",
                //       "&:hover": {
                //         color: "black",
                //       },
                //     }}
                //   />
                // }
              />
              <Chip
                label="About Us"
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2800"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  textAlign: "center",
                  backgroundColor: "#F4BB44",
                  "&:hover": {
                    background: "#F4BB44",
                    scale: "1.05",
                  },
                }}
                variant="contained"
                onClick={() =>
                  ref4.current?.scrollIntoView({ behavior: "smooth" })
                }
                // onDelete={handleDelete}
                // deleteIcon={
                //   <ExpandCircleDownOutlinedIcon
                //     style={{ color: "gray", scale: "1.5" }}
                //   />
                // }
              />
            </Stack>
          </Grid>
          {/* section 1 */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
            id="section1"
          >
            <Grid container xs={12} md={8} justifyContent="center">
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                textAlign="center"
              >
                <Typography
                  sx={{
                    mt: 3,
                    fontVariant: "small-caps",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Tommorrow's date : {TommorowDate}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
                <Typography
                  sx={{
                    fontVariant: "small-caps",
                    fontWeight: "bold",
                    fontSize: "20px",
                    margin: "20px",
                    textAlign: "center",
                  }}
                >
                  Time Left Until next Drawn:
                </Typography>
                <Grid container justifyContent="center">
                  <Timer TommorowDate={TommorowDate} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", height: 450 }}
            id="section2"
          >
            <Grid
              container
              className="winpricecontainer"
              xs={12}
              md={8}
              height={450}
              data-aos="zoom-out-right"
              data-aos-duration="4500"
              data-aos-delay="2800"
            >
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={WinnnerBanner}
                  height={250}
                  width={300}
                  alt=""
                  data-aos="zoom-out-right"
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "goldenrod" }}
                  className="bigwin"
                  data-aos="zoom-out-right"
                >
                  <span style={{ fontSize: "30px" }}>Play and </span> <br />
                  Win Big
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              // backgroundColor: "#31996A",
              // marginTop: "10px",
              paddingTop: { sm: 40, xs: 20, md: 20, lg: 40 },
              minHeight: { sm: 1500, xs: 2200, md: 1500, lg: 1100 },
            }}
            className="firstgrid"
            id="section3"
            ref={ref2}
          >
            <Grid
              container
              xs={10}
              md={7}
              sm={10}
              spacing={4}
              sx={{
                boxShadow: "5px 5px 30px  black",
                backgroundColor: "white",
                borderRadius: "55px 5px 55px 5px",
                paddingRight: "38px",
                maxHeight: 200,
              }}
            >
              <Grid
                item
                xs={12}
                textAlign="center"
                sx={{ height: { xs: 150, sm: 100 } }}
              >
                <Typography variant="h4" className="toto" data-aos="fade-left">
                  HOW TO PLAY THE GAME
                </Typography>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xs={12}
                lg={12}
                xl={4}
                data-aos="slide-left"
              >
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: { lg: "50px", xs: "20px", sm: "30px", md: "40px" },
                  }}
                  data-aos="slide-left"
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LooksOneIcon
                      style={{
                        scale: "2",
                        marginRight: "20px",
                        color: "white",
                      }}
                      data-aos="fade-left"
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      // data-aos="fade"
                    >
                      Choose the Card
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "100%",
                      marginLeft: { sm: "0%", xs: "0", lg: "10%" },
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      data-aos="slide-right"
                    >
                      Click on the{" "}
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        "CARD"
                      </span>{" "}
                      and choose the Card for which you want to enjoy your
                      bet(s).
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xs={12}
                lg={12}
                xl={4}
                data-aos="zoom-in"
              >
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: { lg: "50px", xs: "20px", sm: "30px", md: "40px" },
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LooksTwoIcon
                      style={{
                        scale: "2",
                        marginRight: "20px",
                        color: "white",
                      }}
                      data-aos="fade-left"
                    />
                    <Typography variant="h5" color="white" data-aos="fade-left">
                      Create your account
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "100%",
                      marginLeft: { sm: "0%", xs: "0", lg: "10%" },
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      data-aos="fade-left"
                    >
                      Create your account, we need to know who can be the new
                      millionaire!
                      <br /> (if you have already created one, just login).
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xs={12}
                lg={12}
                xl={4}
                data-aos="slide-right"
              >
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: { lg: "50px", xs: "20px", sm: "30px", md: "40px" },
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Looks3Icon
                      style={{
                        scale: "2",
                        marginRight: "20px",
                        color: "white",
                      }}
                    />
                    <Typography variant="h5" color="white" data-aos="fade-left">
                      Complete the purchase
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "100%",
                      marginLeft: { sm: "0%", xs: "0", lg: "10%" },
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      data-aos="fade-left"
                    >
                      Once you have logged in to your account, finalize the
                      purchase of your bets.
                      <br /> $1 will be Deducted.
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                width: "100%",
                marginTop: "20%",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                justifyContent: "end",
              }}
            >
              <MyButton
                title={<KeyboardDoubleArrowUpIcon />}
                variant="contained"
                handleClick={() =>
                  ref1.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            id="section3"
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: {md:"start", sm:"center",xs:"center"},
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#31996A",
              marginTop: "10px",
              paddingTop: { xs: 1, sm: 1, lg: 10, xl: 10 },
              minHeight: { sm: 1000, xs: 1000 },
            }}
            ref={ref3}
          >
            <Grid
              container
              xs={10}
              md={8}
              sx={{
                boxShadow: "5px 5px 30px  black",
                borderRadius: "55px 10px 55px 10px",
                backgroundColor: "offwhite",
                display: "flex",
                justifyContent: "center",
              }}
              pb={12}
            >
              <Grid
                item
                xs={12}
                className="winnerback"
                sx={{
                  borderRadius: "55px 10px 5px 10px",
                  // backgroundColor: "#31996A",
                  height: { xs: 300 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                <StarBorderIcon
                  sx={{ scale: "5", mb: "5%" }}
                  className="bigwin"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="100"
                />
                <Typography
                  variant="h5"
                  className="bigwin"
                  fontFamily="apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"
                  fontSize="50px"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="800"
                  margin={0}
                >
                  Last Week WINNERS{" "}
                </Typography>
              </Grid>
              <Grid
                container
                xs={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WinnerSlider
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="1800"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            id="section3"
            className="firstgrid"
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: {md:"start", sm:"center",xs:"center"},
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#31996A",
              marginTop: "10px",
              paddingTop: { xs: 1, sm: 1, lg: 10, xl: 10 },
              minHeight: { sm: 1000, xs: 1000 },
            }}
            ref={ref4}
          >
            <Grid
              container
              xs={10}
              md={8}
              sx={{
                boxShadow: "5px 5px 30px  black",
                borderRadius: "55px 10px 55px 10px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
              }}
              pb={10}
            >
              <AboutUs />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                width: "100%",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                justifyContent: "end",
              }}
            >
              <MyButton
                title={<KeyboardDoubleArrowUpIcon />}
                // title="sdfjshdf"
                variant="contained"
                handleClick={() =>
                  ref1.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            id="section3"
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: {md:"start", sm:"center",xs:"center"},
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#31996A",
              marginTop: "10px",
              paddingTop: { xs: 1, sm: 1, lg: 10, xl: 10 },
              minHeight: { sm: 1000, xs: 1000 },
            }}
            // ref={ref4}
          >
            <Grid
              container
              xs={10}
              md={8}
              sx={{
                boxShadow: "5px 5px 30px  black",
                borderRadius: "55px 10px 55px 10px",
                backgroundColor: "#31996A",
                display: "flex",
                justifyContent: "center",
                position: "fixed",
              }}
              pb={10}
            >
              <FAQS />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                width: "100%",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                justifyContent: "end",
              }}
            >
              <MyButton
                title={<KeyboardDoubleArrowUpIcon />}
                // title="sdfjshdf"
                variant="contained"
                handleClick={() =>
                  ref1.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item   xs={10} sx={{width:"100%" ,justifyContent:"end"}}>
             <MyButton 
             sx={{display:"fixed",top:"10%"}}
              title={(<KeyboardDoubleArrowUpIcon/>)}
              // title="sdfjshdf"
              variant="contained"
              handleClick={()=>ref1.current?.scrollIntoView({behavior: 'smooth'})}
              />
        </Grid> */}
      </Grid>
    </WrapperComponent>
  );
};

export default LandingPage;
