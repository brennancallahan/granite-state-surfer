import React from 'react';
import { Link } from 'react-router';
import UserPostTile from './UserPostTile'


const UserPostShow = (props) => {
  let allPosts = props.posts.map(post => {
    return(
      <UserPostTile
        key={post.id}
        recommended_conditions={post.recommended_conditions}
        recommended_surfers={post.recommended_surfers}
        additional_information={post.additional_information}
      />
    )
  })
  return(
    <div className="userposts">
      {allPosts}
    </div>
  )
}

export default UserPostShow
