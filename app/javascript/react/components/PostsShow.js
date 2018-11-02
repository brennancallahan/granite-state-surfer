import React from 'react';
import { Link } from 'react-router';
import PostTile from './PostTile'

const PostsShow = (props) => {
  let posts = props.posts.map(post => {
    return(
      <PostTile
      id={post.id}
      key={post.id}
      recommended_conditions={post.recommended_conditions}
      recommended_surfers={post.recommended_surfers}
      additional_information={post.additional_information}
      photo_path={post.photo_path}
      user={post.username}
      posted_date={post.created_at}
      />
    )
  })


  return(
      <div className="postsshow">
      {posts}
    </div>

  )
}

export default PostsShow
