import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import BackButton from './BackButton'

const BreakShow = (props) => {

  let beginnerStatus
  if (props.break.beginner_friendly === true) {
    beginnerStatus = <div className="easyspot">This is a good spot for surfers of all levels!</div>
  } else {
      beginnerStatus = <div className="hardspot">This is an advanced spot. Make sure you're confident with your board, the forecast, and your etiquette before surfing here!</div>
    }

  let forecastTime = moment(props.forecast.timestamp).format('h:mm a')

  return(
    <div>
        <div className="staticspotdata">
          <div className="spotlocation">Spot Information</div>
          Beach: {props.break.beach} <br/>
          Address: {props.break.address} <br/>
          {beginnerStatus}<br/>
          <BackButton />
        </div>

        <div className="conditions">
          <div className="spotlocation">Current Swell Conditions for {props.break.name}:</div>
          <div className="overallrating">Overall Rating: {props.forecast.solidRating}/5</div>

          <div className="waveconditions">
          Maximum Breaking Wave Height: {props.forecast.maxBreakingHeight} ft.<br/>
          Minimum Breaking Wave Height: {props.forecast.minBreakingHeight} ft.<br/>
          </div>

          <p>Wind Speed and Direction: {props.forecast.windspeed}mph, {props.forecast.windDirection}</p>
          <p>Current Air Temperature: {props.forecast.temperature} degrees F</p>
          Current Swell Map:<br/><img src={props.forecast.swellChart} className="maps"></img><br/>
          Current Wind Map:<br/><img src={props.forecast.windChart} className="maps"></img><br/><br/>
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
