import React from 'react';
import { Link } from 'react-router';

const PostTile= (props) => {
  let date = new Date(props.posted_date).toDateString()
  let deleteButton
  let attachmentCatch

  if(props.currentUser.id == props.postUserId) {
    deleteButton = <button onClick={() => props.handlePostDelete(props.id)} className="simplebutton">Delete</button>
  }

  if(props.photo_path.url) {
    attachmentCatch = <img src={props.photo_path.url} />
  } else {
    attachmentCatch = "No attachments"
  }


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
      {attachmentCatch}<br/><br/>
      {deleteButton}
    </div>
  </div>

  )
}

export default PostTile
