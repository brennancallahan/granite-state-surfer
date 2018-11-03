import React, { Component } from 'react';
import PostShow from '../components/PostShow'

class PostShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
    }
  }

  componentDidMount() {
    fetch(`/api/v1/breaks/${this.props.params.break_id}/posts`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(message);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(fetchedPosts => {
      this.setState({ posts: fetchedPosts.posts})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let posts = this.state.posts.map(post => {
      return(
        <PostsShow
          key={post.id}
          id={post.id}
          recommended_conditions={post.recommended_conditions}
          recommended_surfers={post.recommended_surfers}
          additional_information={post.additional_information}
          photo_path={post.photo_path}
          />
      )
    })
    return(

      <div className="posts">
        {posts}
      </div>
    )
  }
}

export default PostShowContainer;
