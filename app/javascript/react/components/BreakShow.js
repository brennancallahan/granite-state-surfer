import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import BackButton from './BackButton'

const BreakShow = (props) => {

  let beginnerStatus
  if (props.break.beginner_friendly === true) {
    beginnerStatus = "This is a good spot for surfers of all levels!"
  } else {
      beginnerStatus = "This is an advanced spot. Make sure you're confident with your board, the forecast, and your etiquette before surfing here!"
    }

  let forecastTime = moment(props.forecast.timestamp).format('h:mm a')

  return(
    <div>
        <div className="staticspotdata">
          <div className="spotlocation">Spot Information</div>
          Beach: {props.break.beach} <br/><br/>
          Address: {props.break.address} <br/><br/>
          Difficulty: {beginnerStatus}<br/><br/>
          <BackButton />
        </div>

        <div className="conditions">
          <div className="spotlocation">Current Swell Conditions for {props.break.name}:</div>
          <p>Overall Rating: {props.forecast.solidRating}/5</p>
          <p>Maximum Breaking Wave Height: {props.forecast.maxBreakingHeight} ft.</p>
          <p>Minimum Breaking Wave Height: {props.forecast.minBreakingHeight} ft.</p>
          <p>Wind Speed and Direction: {props.forecast.windspeed}mph, {props.forecast.windDirection}</p>
          <p>Current Air Temperature: {props.forecast.temperature} degrees F</p>
          <p>Current Swell Map:</p><img src={props.forecast.swellChart}></img><br/>
          <p>Current Wind Map:</p><img src={props.forecast.windChart}></img><br/><br/>
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
