import React from 'react';
import { Link } from 'react-router';

const BreakShow = (props) => {

  let beginnerStatus
  if (props.break.beginner_friendly === true) {
    beginnerStatus = "This is a good spot for surfers of all levels!"
  } else {
      beginnerStatus = "This is an advanced spot. Make sure you're confident with your board, the forecast, and your etiquette before surfing here!"
    }



  return(
    <div>
        <div>
          <div className="spotlocation">Spot Information</div>
          <div className="breakname">{props.break.name}</div>
          <p>Beach: {props.break.beach}</p>
          <p>Address: {props.break.address}</p>
          <p>Difficulty: {beginnerStatus}</p>
        </div>

        <div className="conditions">
          <div className="spotlocation">Current Conditions:</div>
          <p>Overall Rating: {props.forecast.solidRating}/5</p>
          <p>Maximum Breaking Wave Height: {props.forecast.maxBreakingHeight} ft.</p>
          <p>Minimum Breaking Wave Height: {props.forecast.minBreakingHeight} ft.</p>
          <p>Wind Speed and Direction: {props.forecast.windspeed}mph, {props.forecast.windDirection}</p>
          <a href="http://magicseaweed.com">
            <img src="https://im-1-uk.msw.ms/msw_powered_by.png"></img>
          </a>
        </div>
      </div>
  )
}

export default BreakShow

// {posts}
// <p>Rating with wind taken into account: {props.forecast.fadedRating}/5</p>
