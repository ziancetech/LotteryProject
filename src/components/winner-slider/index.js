import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { useLocation } from "react-router-dom";
import { cardListAction } from "../../redux/dashboard/middleware";
import Image from "../../assets/images/headerlogo.png";
import MyButton from "../MyButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./_winner-slider.css";

const WinnerSlider = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [sliderRef, setSliderRef] = useState(null);
  // console.log("slideref", sliderRef);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <KeyboardDoubleArrowRightIcon />,
    // prevArrow: <KeyboardDoubleArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const userCardList = useSelector(dashboardSelector);
  const data = userCardList.cardListData;

  useEffect(() => {
    dispatch(cardListAction());
  }, []);
  return (
    <Grid item xs={11} sx={{height:{lg:250,xl:250,xs:250,sm:250},marginTop:{lg:10,xl:10,xs:10,sm:10}}}>
      <Slider ref={setSliderRef} {...settings}  >
        {data.map((element) => (
          <>
             <Grid container justifyContent="center" sx={{borderRadius:5 ,width:"95%",padding:1}}> 
            <Card sx={{display:"flex",justifyContent:"center",borderRadius:5,flexDirection:"column",width:"100%",boxShadow:"5px 5px 10px gray"}} >
              <Grid item  sx={{display:"flex",justifyContent:"center"}}>
              <CardMedia
                sx={{
                  height: 80,
                  width: 60,
                  margin: 1,
                  display: "flex",
                  justifyContent: "center",
                  // boxShadow: 10,
                }}
                image={element.url}
                title="green iguana"
              ></CardMedia>
              </Grid>
           
            <CardContent
              sx={{
                margin: 1,
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography>Date of winnig:</Typography>
              <br />
              <Typography variant="h7" className="toto">
                {element.date}
              </Typography>
            </CardContent>
            </Card>
            {/* </Grid> */}
              </Grid>
          {/* </Card> */}
          </>
          
        ))}
      </Slider>
      <Grid container  marginTop={2}>
        <Grid item xs={6} display="flex" justifyContent="right">
          <MyButton
            title={<ArrowCircleLeftIcon sx={{ scale: "2" }} />}
            handleClick={sliderRef?.slickPrev}
          ></MyButton>
        </Grid>
        <Grid item xs={6}>
          <MyButton
            title={<ArrowCircleRightIcon sx={{ scale: "2" }} />}
            handleClick={sliderRef?.slickNext}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WinnerSlider;
