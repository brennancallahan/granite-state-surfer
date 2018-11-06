import React, { Component } from 'react';
import BreakShow from '../components/BreakShow'
import PostsShow from '../components/PostsShow'
import PostsFormContainer from './PostsFormContainer'
import PhotoShow from '../components/PhotoShow'

class BreakShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: {},
      break_id: null,
      forecast_data: {},
      current_user: {},
      posts: []
    }
    this.addNewPost = this.addNewPost.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  addNewPost(postPayload) {
    let newPosts = this.state.posts.concat(postPayload)
    this.setState({ posts: newPosts})
  }

  handlePostDelete(id){
    fetch(`/api/v1/breaks/${this.props.params.id}/posts/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json'},
          credentials: 'same-origin'
      }).then((response) => {
        this.deletePost(id)
        swal(
          "Post Removed",
          "You removed your post from the page.",
          "info");
      })
  }

  deletePost(id){
    let updatedPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({
      posts: updatedPosts
    })
  }

  componentDidMount() {
    let breakId = this.props.params.id
    fetch(`/api/v1/breaks/${breakId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else{
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(message);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let fetchedBreak = body.break
      let break_id = body.break.id
      let fetchedForecast = body.forecast_data
      let fetchedUser = body.current_user
      let fetchedPosts = body.break.posts
      this.setState({ break: fetchedBreak, forecast_data: fetchedForecast, current_user: fetchedUser, posts: fetchedPosts, break_id: break_id })
    })
  }

  render() {
    return (
    <div>
    <div className="large-12 columns">
      <div className="showpagetitle">
        {this.state.break.name}
      </div>
    <div className="column middle">
      <div className="breakshow">
        <BreakShow
              break={this.state.break}
              forecast={this.state.forecast_data}
              user={this.state.current_user}
              posts={this.state.posts}
        />
      </div>
    </div>

    <div className="column side">
    <div className = "formshow">
      <PostsFormContainer
          userId={this.state.current_user}
          breakId={this.state.break_id}
          addNewPost={this.addNewPost}
      />
    </div>

      <div className = "postshow">
        <PostsShow
            posts={this.state.posts}
            handlePostDelete={this.handlePostDelete}
            currentUser={this.state.current_user}
        />
      </div>

      <div className = "photoshow">
        <PhotoShow
          photos={this.state.posts}
        />
      </div>
    </div>
  </div>
  </div>

  )}
}

export default BreakShowContainer
