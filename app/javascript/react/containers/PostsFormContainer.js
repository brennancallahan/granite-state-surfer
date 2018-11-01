import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { push } from 'react-router'
import { browserHistory } from 'react-router'
import ConditionsField from '../components/ConditionsField'
import SurfersField from '../components/SurfersField'
import AdditionalInfoField from '../components/AdditionalInfoField'


class PostsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommended_conditions: '',
      recommended_surfers: '',
      additional_information: '',
      errors: {},
      file: []
    }

    this.validateConditionsChange = this.validateConditionsChange.bind(this);
    this.validateSurfersChange = this.validateSurfersChange.bind(this);
    this.handleConditionsChange = this.handleConditionsChange.bind(this);
    this.handleSurfersChange = this.handleSurfersChange.bind(this);
    this.handleAdditionalInfoChange = this.handleAdditionalInfoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  validateConditionsChange(input) {
      if (input.trim() === '') {
        let newError = { title: "You must provide information about the ideal conditions for this break!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  validateSurfersChange(input) {
      if (input.trim() === '') {
        let newError = { title: "You must provide information about the ideal surfers for this break!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }

  handleConditionsChange(event) {
    let newRecommendedConditions = event.target.value
    this.setState ({ recommended_conditions: newRecommendedConditions})
  }

  handleSurfersChange(event) {
    let newRecommendedSurfers = event.target.value
    this.setState ({ recommended_surfers: newRecommendedSurfers})
  }

  handleAdditionalInfoChange(event) {
    let newAdditionalInfo = event.target.value
    this.setState ({ additional_information: newAdditionalInfo})
  }

  handleSubmit(event) {
    event.preventDefault();
    if((this.validateConditionsChange(this.state.recommended_conditions)) && (this.validateSurfersChange(this.state.recommended_surfers))) {

    let body = new FormData()
      body.append("recommended_conditions", this.state.recommended_conditions)
      body.append("recommended_surfers", this.state.recommended_surfers)
      body.append("additional_information", this.state.additional_information)
      body.append("uploaded_photo", this.state.file[0])
      body.append("break_id", this.props.breakId)
      body.append("user_id", this.props.userId.id)

    fetch(`/api/v1/breaks/${this.props.breakId}/posts`, {
      credentials: 'same-origin',
      method: 'POST',
      body: body,
      headers: {
        'Accept': 'application/json' },
        credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }
  render() {
    console.log(this.state.recommended_conditions)
    console.log(this.state.recommended_surfers)
    console.log(this.state.additional_information)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <ConditionsField
            content={this.state.recommended_conditions}
            label="Break Conditions"
            name="break-conditions"
            handleChange={this.handleConditionsChange}
            />

          <SurfersField
            content={this.state.recommended_surfers}
            label="Surf Conditions"
            name="surf-conditions"
            handleChange={this.handleSurfersChange}
            />

          <AdditionalInfoField
            content={this.state.additional_information}
            label="Additional Info"
            name="additional-info"
            handleChange={this.handleAdditionalInfoChange}
            />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>
    </form>
  </div>
  )
  }
}

export default PostsFormContainer
