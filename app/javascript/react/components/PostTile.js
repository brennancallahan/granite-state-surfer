import React from 'react';
import { Link } from 'react-router';

const PostTile= (props) => {
  let date = new Date(props.posted_date).toDateString()
  console.log(date)
  return(
  <div>
    <div className="post">
      <p>Posted by: {props.user} on {date} </p>
      <div className="postquestion">Recommended Conditions for this Spot:</div>
      <p>{props.recommended_conditions}</p>
      <div className="postquestion">Who should surf here?</div>
      <p>{props.recommended_surfers}</p>
      <div className="postquestion">Anything else surfers should know?</div>
      <p>{props.additional_information}</p>
      <div className="postquestion">Attatchments:</div>
      <img src={props.photo_path.url} />
    </div>
  </div>

  )
}

export default PostTile
