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
      <div className="large-6 columns">
        <div className="breakinformation">
          Spot Information
          <p>Break Name: {props.break.name}</p>
          <p>Beach: {props.break.beach}</p>
          <p>Address: {props.break.address}</p>
          <p>Difficulty: {beginnerStatus}</p>
        </div>


        <div className="mswdata">
          Current Conditions:
          <p>Overall Rating: {props.forecast.solidRating}/5</p>
          <p>Maximum Breaking Wave Height: {props.forecast.maxBreakingHeight} ft.</p>
          <p>Minimum Breaking Wave Height: {props.forecast.minBreakingHeight} ft.</p>
          <p>Wind Speed and Direction: {props.forecast.windspeed}mph, {props.forecast.windDirection}</p>
      </div>
    </div>

  )
}

export default BreakShow

// {posts}
// <p>Rating with wind taken into account: {props.forecast.fadedRating}/5</p>
