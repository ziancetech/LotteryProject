import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
        color="white"
      >
        FAQ's
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
            {/* question 1 */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{borderBottom:".5px solid gray"}}
            >
              <Typography>How many cards are there in a deck of Card Games ?</Typography>
            </AccordionSummary>
            <AccordionDetails  sx={{backgroundColor:"wheat"}}>
              <Typography>
                
 The Playing Card Factory decks are made of fifty-two playing cards, including thirteen cards in each of four suits, Clubs ♣, Diamonds ♦, Hearts ♥ and Spades ♠, with reversible face cards. Our decks also include 1 Jokers, each with a different colour combination.

Each suit includes an Ace, King, Queen, and Jack, and cards from two through ten, with each card depicting symbols (pips) of its suit.

Our playing cards are poker size (2.5×3.5 inches (64×89 mm), or B8 size according to ISO 216)


              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          {/* question 2 */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How long does it take for my cards to ship after i have placed my order ?</Typography>
            </AccordionSummary>
            <AccordionDetails  sx={{backgroundColor:"wheat"}}>
              <Typography>
              Normal production timeline is 4-5 business days from when we receive your order. This may vary shorter or longer due to volume of orders.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          {/* question 3 */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How long does it take to create an order for playing cards?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"wheat"}}>
              <Typography>
              Once you have picked an image(s) or design you would like to use, it takes about 1 minutes to complete the order process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          {/* question 4 */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How do i check the balance of my gift card</Typography>
            </AccordionSummary>
            <AccordionDetails  sx={{backgroundColor:"wheat"}}>
              <Typography>
              You can check the balance of your gift card anytime by selecting Gift Card Balance under the Order Info main menu option.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Faqs;
