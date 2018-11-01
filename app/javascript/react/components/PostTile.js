import React from 'react';
import { Link } from 'react-router';

const PostsShow = (props) => {
  return(
  <div>
    <div className="post">
      <p>Recommended Conditions for this Spot:</p>
      <p>{props.recommended_conditions}</p>
      <p>Who should surf here?</p>
      <p>{props.recommended_surfers}</p>
      <p>Anything else surfers should know?</p>
      <p>{props.additional_information}</p>
    </div>
  </div>

  )
}

export default PostsShow
