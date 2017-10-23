import React, { Component } from 'react';

export default class CSSClock extends Component {
  componentDidMount() {
    const secondHand = document.querySelector('.second-hand');
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      console.log(`time is: ${hours}:${minutes}:${seconds}`)
      const secondsDegrees = ((seconds/60) * 360) + 90;
      const hourDegrees = (( hours/12 ) * 360) + 90;
      const minDegrees = (( minutes/60 ) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minDegrees}deg)`
    }
    setInterval(setDate, 1000);
  }
  render() {
    return(
      <div className="fullContainer">
        <h1>Clock</h1>
        <div className="clockbody">
          <div className="clock">

            <div className="clock-face">
              <div className="hand hour-hand"></div>
              <div className="hand min-hand"></div>
              <div className="hand second-hand"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}