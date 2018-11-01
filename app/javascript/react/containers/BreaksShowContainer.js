import React, { Component } from 'react';
import BreakShow from '../components/BreakShow'
import PostsShow from '../components/PostsShow'
import PostsFormContainer from './PostsFormContainer'

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
  }
  addNewPost(postPayload) {
    let newPosts = this.state.posts.concat(postPayload)
    this.setState({ posts: newPosts})
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
      this.setState({ break: fetchedBreak, forecast_data: fetchedForecast, current_user: fetchedUser, posts: fetchedPosts, break_id: break_id  })
    })
  }

  render() {
    return (
  <div className="row">

    <div className="large-6 columns">
      <div className="breakshow">
        <BreakShow
          break={this.state.break}
          forecast={this.state.forecast_data}
          user={this.state.current_user}
          posts={this.state.posts}
        />
      </div>
    </div>

    <div className="large-6 columns">
      <div className = "formshow">
        <PostsFormContainer
          userId={this.state.current_user}
          breakId={this.state.break_id}
          addNewPost={this.addNewPost}
        />
      </div>
    </div>

    <div className="large-6 columns">
      <div className = "postshow">
        <PostsShow
        posts={this.state.posts}
        />
      </div>
    </div>

  </div>
  )}
}

export default BreakShowContainer
