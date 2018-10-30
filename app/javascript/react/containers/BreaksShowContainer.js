import React, { Component } from 'react';
import BreakShow from '../components/BreakShow'

class BreakShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      beach: "",
      address: "",
      beginner_friendly: "",
      onsite_parking: "",
      break_type: ""
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
      let fetchedBreak = body
      this.setState({ name: fetchedBreak.name, beach: fetchedBreak.beach, address: fetchedBreak.address, beginner_friendly: fetchedBreak.beginner_friendly, onsite_parking: fetchedBreak.onsite_parking, break_type: fetchedBreak.break_type })
    })
  }

  render() {
    return (
    <BreakShow
      name={this.state.name}
      beach={this.state.beach}
      address={this.state.address}
      beginner_friendly={this.state.beginner_friendly}
      onsite_parking={this.state.onsite_parking}
      break_type={this.state.break_type}
      />
  )}
}

export default BreakShowContainer
