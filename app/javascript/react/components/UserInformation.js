import React from 'react';
import { Link } from 'react-router';
import UserPostShow from './UserPostShow'

const UserInformation = (props) => {
    return(
      <div>
        <div className="large-6 columns">
          <div className="userprofile">
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
              <div className="userprofiletitle">Your Posts:</div>
                <UserPostShow
                  posts={props.posts}
                />
            </div>
          </div>
        </div>
    )
}

export default UserInformation
