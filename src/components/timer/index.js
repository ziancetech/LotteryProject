import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";
import { Grid } from "@mui/material";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

// const  today = new Date();
// const tommorrow =new Date(today)
// const tom= tommorrow.setDate(tommorrow.getDate()+1)

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer({ TommorowDate, isStyle }) {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const style = {
    "@media only screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  };

  return (
    <Grid container border   justifyContent="space-evenly" className="App">
      <Grid item >
        <CountdownCircleTimer
          // size={0}
          strokeWidth={10}
          {...timerProps}
          colors="#D14081"
          // style={{margin:"10px",border:"1px solid red"}}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </Grid>
      <Grid item >
        <CountdownCircleTimer
          {...timerProps}
          colors="#EF798A"
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </Grid>
      <Grid item >
        <CountdownCircleTimer
          {...timerProps}
          colors="#218380"
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("seconds", getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </Grid>
    </Grid>
  );
}
