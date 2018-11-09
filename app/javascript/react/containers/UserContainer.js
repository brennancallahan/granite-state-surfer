import React, { Component } from 'react';
import UserInformation from '../components/UserInformation'

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      profile_photo: {},
      posts: []
    }
    this.handlePostDelete = this.handlePostDelete.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  handlePostDelete(id){
    fetch(`/api/v1/users/${this.state.user.id}/posts/${id}`,
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
    fetch(`/api/v1/users/${this.state.user.id}`)
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
    .then(body => {
      let fetchedUserProfile = body.user
      let fetchedUserProfilePhoto = body.user.profile_photo
      let fetchedUserPosts = body.user.posts
      this.setState({ user: fetchedUserProfile, profile_photo: fetchedUserProfilePhoto, posts: fetchedUserPosts })
    })
  }

  render () {
    return(
      <div>
          <UserInformation
            id={this.state.user.id}
            key={this.state.user.id}
            first_name={this.state.user.first_name}
            last_name={this.state.user.last_name}
            username={this.state.user.username}
            email={this.state.user.email}
            profilePhoto={this.state.profile_photo}
            posts={this.state.posts}
            handlePostDelete={this.handlePostDelete}
          />
      </div>
    )
  }

}

export default UserContainer
