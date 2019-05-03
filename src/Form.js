import React,  { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTerm: ''
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async handleFormSubmission(event) {
    // stop default submission so it does not refresh
    event.preventDefault();
    
    // call github api to get user information
    const username = this.state.inputTerm;
    const githubUser = await axios.get(`https://api.github.com/users/${username}`);

    const newUser = {
      id: githubUser.data.id,
      name: githubUser.data.name,
      avatarUrl: githubUser.data.avatar_url,
    }

    // update parent component's users list
    this.props.onSubmit(newUser);

    this.setState({
      inputTerm: ''
    });  
  }

  handleTermChange(event) {
    this.setState({
      inputTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className="github-form">
        <form onSubmit={this.handleFormSubmission}>
          <input
            className="github-form-username" 
            placeholder="Enter github username"
            value={this.state.inputTerm}
            onChange={this.handleTermChange} />
          <button className="github-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}