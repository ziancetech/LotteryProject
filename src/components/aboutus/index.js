import React from "react";
import "./_aboutus.css";
import { Grid, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        fontFamily="apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"
        fontSize="50px"
        data-aos="zoom-out-left"
        data-aos-duration="4500"
        data-aos-delay="800"
      >
        About Us
      </Typography>
      
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
        <Grid item xs={12} md={10} padding={5} textAlign="justify">
          <Typography>
            Harvey Langholtz, professor of psychology at William & Mary, teaches
            both psychology of decision making and psychology of decision
            theory, which is a study that uses mathematics, philosophy,
            statistics and psychology when determining how decisions are made.
            He says the odds of winning are a bit different depending on the
            lottery, but points to the Powerball as a good example of how
            daunting it can be for someone to win. “As stated on the Powerball
            website, chances of winning are 1 in 292 million,” Langholtz says.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
