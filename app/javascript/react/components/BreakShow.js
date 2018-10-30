import React from 'react';
import { Link } from 'react-router';

const BreakShow = (props) => {
  let beginnerStatus
  if (props.beginner_friendly === true) {
    beginnerStatus = "This is a good spot for surfers of all levels!"
  } else {
      beginnerStatus = "This is an advanced spot. Make sure you're confident with your board, the forecast, and your etiquette before surfing here!"
    }

  return(
    <div className="breakinformation">
    <p>{props.name}</p>
    <p>{props.beach}</p>
    <p>{props.address}</p>
    <p>{beginnerStatus}</p>
    </div>
  )
}

export default BreakShow
