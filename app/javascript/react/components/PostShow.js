import React from 'react';
import { Link } from 'react-router'

const PostShow = (props) => {
  return(
    <div className="individual_post">
      <p>{props.recommended_conditions}</p>
    </div>
  )
}

export default PostShow
