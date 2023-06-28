import React from "react";
import Slider from "react-slick";
import HomeCard from "../HomeCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./_Slider.css";

const index = ({ data, showCards,isTrue }) => {
  console.log("infinite",isTrue);

  const settings = {
    dots: false,
    speed: 800,
    infinite: (isTrue ? false : true),
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    nextArrow: <KeyboardDoubleArrowRightIcon />,
    prevArrow: <KeyboardDoubleArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {data?.data.map((row, index) => (
        <HomeCard
          showCards={showCards}
          data={row}
        />
      ))}
    </Slider>
  );
};

export default index;
