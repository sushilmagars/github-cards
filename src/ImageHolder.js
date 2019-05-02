import React, { Component } from 'react';

export default class ImageHolder extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <img className="image-holder" src={this.props.avatarUrl} />
    ) 
  }
}