import React, { useEffect, useState } from "react";
import {Grid} from "@mui/material";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import WrapperComponent from "../../components/WrapperComponent";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { fetchCardAction } from "../../redux/dashboard/middleware";
import "./_home.css";
import Slider from "../../components/Slider/index";


const HomeScreen = () => {
  const [showCards, setShowCards] = useState(false);
  const dashboardData = useSelector(dashboardSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardAction());
  }, []);

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        sx={{
          minHeight: "94vh",
          maxWidth: "100%",
          marginTop: "81px",
          paddingTop: "1%",
        }}
        justifyContent="center"
        xs={8}
        md={12}
      >
        <Grid item xs={7}>
          <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12}>
                <Slider
                  data={dashboardData?.cardsData?.find(
                    (item) => item.name === "spadescard"
                  )}
                  showCards={showCards}
                />
              </Grid>
              <Grid item xs={12}>
                <Slider
                  data={dashboardData?.cardsData?.find(
                    (item) => item.name === "diamondscard"
                  )}
                  showCards={showCards}
                />
              </Grid>
           
                  
            <Grid item xs={12}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "joker"
                )}
                showCards={showCards}
                isTrue
              />
            </Grid>
           
            
            <Grid item xs={12}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "clubscard"
                )}
                showCards={showCards}
              />
            </Grid>
            <Grid item xs={12}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "heartscard"
                )}
                showCards={showCards}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br/>
    </WrapperComponent>
  );
};

export default HomeScreen;
