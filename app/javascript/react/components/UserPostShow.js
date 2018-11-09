import React from 'react';
import { Link } from 'react-router';
import UserPostTile from './UserPostTile'


const UserPostShow = (props) => {
  let allPosts = props.posts.map(post => {
    return(
      <UserPostTile
        id={post.id}
        key={post.id}
        break={post.break_name}
        break_id={post.break_id}
        recommended_conditions={post.recommended_conditions}
        recommended_surfers={post.recommended_surfers}
        additional_information={post.additional_information}
        photo_path={post.photo_path}
        handlePostDelete={props.handlePostDelete}
      />
    )
  })
  return(
    <div className="userposts">
      Your Posts:
      {allPosts}
    </div>
  )
}

export default UserPostShow
