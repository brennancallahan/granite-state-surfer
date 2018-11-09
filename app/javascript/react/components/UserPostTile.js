import React from 'react';
import { Link } from 'react-router';


const UserPostTile = (props) => {
let deleteButton
let attachmentCatch

  deleteButton = <button onClick={() => props.handlePostDelete(props.id)} className="simplebutton">Delete</button>

  if(props.photo_path.url) {
    attachmentCatch = <img src={props.photo_path.url} />
  } else {
    attachmentCatch = "No attachments"
  }

  return(
      <div><br/>
        <Link className="userpostlink" to={`/breaks/${props.break_id}`}>{props.break}</Link>
        <div className="postquestion">Recommended Conditions for this Spot:</div>
        <div className="formshow">{props.recommended_conditions}</div>
        <div className="postquestion">Who should surf here?</div>
        <div className="formshow">{props.recommended_surfers}</div>
        <div className="postquestion">Anything else surfers should know?</div>
        <div className="formshow">{props.additional_information}</div>
        <div className="postquestion">Attatchments:</div>
        <div className="formshow">{attachmentCatch}</div>
        <br/>{deleteButton}
        <br/></div>
  )
}

export default UserPostTile
