import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { push } from 'react-router'
import { browserHistory } from 'react-router'
import ConditionsField from '../components/ConditionsField'
import SurfersField from '../components/SurfersField'
import AdditionalInfoField from '../components/AdditionalInfoField'
import Dropzone from 'react-dropzone';
import swal from 'sweetalert';


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
    this.handleClearForm = this.handleClearForm.bind(this);
    this.onDrop = this.onDrop.bind(this);

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

  handleClearForm() {
    this.setState({
      recommended_conditions: '',
      recommended_surfers: '',
      additional_information: '',
      file: []
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    if((this.validateConditionsChange(this.state.recommended_conditions)) && (this.validateSurfersChange(this.state.recommended_surfers))) {

    let body = new FormData()
      body.append("recommended_conditions", this.state.recommended_conditions)
      body.append("recommended_surfers", this.state.recommended_surfers)
      body.append("additional_information", this.state.additional_information)
      body.append("photo_path", this.state.file[0])
      body.append("break_id", this.props.breakId)
      body.append("user_id", this.props.userId.id)
      body.append("username", this.props.userId.username)

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
      this.props.addNewPost(body.post)
      swal(
        "Your post was added succcessfully.",
        "Thank you for contributing.",
        "success");
      this.handleClearForm()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

    onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only upload one photo per post.'})
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className='error'>{errorItems}</div>
    }

    return(
      <div>
      <h5>{errorDiv}</h5>
      <div className='formtitle'>
        Contribute additional information about this spot.
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className='form'>
          <ConditionsField
            content={this.state.recommended_conditions}
            label="What are the ideal conditions for this spot?"
            name="break-conditions"
            handleChange={this.handleConditionsChange}
            />

          <SurfersField
            content={this.state.recommended_surfers}
            label="What type of surfer should surf this spot?"
            name="surf-conditions"
            handleChange={this.handleSurfersChange}
            />

          <AdditionalInfoField
            content={this.state.additional_information}
            label="Any other important pieces of information surfers should know?"
            name="additional-info"
            handleChange={this.handleAdditionalInfoChange}
            />

            <section>
              <div className="dropzone">
              Add a photo from your trip to this break:
                <Dropzone onDrop={this.onDrop}>
                  Drag your photo here, or click to select a photo to upload.
                </Dropzone>
            </div>

            <aside>
              <p>Selected Photos:</p>
              <ul>
                {
                  this.state.file.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>

          <div className="button-group">
            <button className="simplebutton" type="submit" value="Submit">Submit</button>
          </div>
        </div>
    </form>
  </div>
  )
  }
}

export default PostsFormContainer
