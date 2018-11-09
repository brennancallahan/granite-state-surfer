import React from 'react';
import { Link } from 'react-router';
import UserPostShow from './UserPostShow'

const UserInformation = (props) => {
    return(
      <div>
        <div className="large-6 columns">
          <div className="userprofile">
          <div className="userprofiletitle">Name:</div>
            {props.first_name} {props.last_name}
            <div className="userprofiletitle">Username:</div>
            {props.username}<br/>
            <div className="userprofiletitle">Email address:</div>
            {props.email}<br/>
            <div className="userprofiletitle">Your profile photo:</div>
            <img src={props.profilePhoto.url} />
          </div>
        </div>

          <div className="large-6 columns">
            <div className="userpost">
                <UserPostShow
                  posts={props.posts}
                  handlePostDelete={props.handlePostDelete}
                />
            </div>
          </div>
        </div>
    )
}

export default UserInformation
