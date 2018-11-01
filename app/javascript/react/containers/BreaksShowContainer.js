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
  <div>
    <div>
    <BreakShow
      break={this.state.break}
      forecast={this.state.forecast_data}
      user={this.state.current_user}
      posts={this.state.posts}
    />
    <PostsShow
    posts={this.state.posts}
    />
    </div>
    <PostsFormContainer
      userId={this.state.current_user}
      breakId={this.state.break_id}
    />
  </div>
  )}
}

export default BreakShowContainer
