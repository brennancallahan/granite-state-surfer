import React from 'react';
import { Link } from 'react-router';

const PostsShow = (props) => {
  return(
  <div className="large-6 columns">
    <div className="post">
      <p>{props.recommended_conditions}</p>
      <p>{props.recommended_surfers}</p>
      <p>{props.additional_information}</p>
    </div>
  </div>

  )
}

export default PostsShow
