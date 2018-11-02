import React from 'react';
import { Link } from 'react-router';

const PostsShow = (props) => {
  return(
  <div>
    <div className="post">
      <div className="postquestion">Recommended Conditions for this Spot:</div>
      <p>{props.recommended_conditions}</p>
      <div className="postquestion">Who should surf here?</div>
      <p>{props.recommended_surfers}</p>
      <div className="postquestion">Anything else surfers should know?</div>
      <p>{props.additional_information}</p>
    </div>
  </div>

  )
}

export default PostsShow
