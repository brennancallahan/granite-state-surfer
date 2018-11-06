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
      postUserId={post.user_id}
      posted_date={post.created_at}
      handlePostDelete={props.handlePostDelete}
      currentUser={props.currentUser}
      />
    )
  })

  let postCatch
  if(posts.length == 0) {
    postCatch = "There aren't any posts about this break yet. If you've been to this break, make a post to inform other surfers!"
  }
  return(
      <div className="postsshow">
        <div className="postsheader">Posts from Other Surfers</div>
        {postCatch}
        {posts}
      </div>
  )
}

export default PostsShow
