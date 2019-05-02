import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const renderCard = (user) => {
      return (
        <div key={user.id} className="image-holder">
          <img key={user.id} src={user.avatarUrl} alt="user"/>
          <h4 key={user.name}>{user.name}</h4>
        </div>
      )
    }

    return (
      <div className="github-users-list">
        {this.props.users.map(renderCard)}
      </div>
    );
  }
}