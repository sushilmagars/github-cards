import React from 'react';
import './App.css';
import Form from './Form';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{id: 1, name: 'Sushil Magar', avatarUrl: 'https://avatars0.githubusercontent.com/u/13083115?v=4'}]
    };
    this.updateUsersList = this.updateUsersList.bind(this);
  }

  updateUsersList(newUser) {
    const newUsers = this.state.users.slice();
    newUsers.push(newUser);

    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Github card viewer</h3>
        <Form onSubmit={this.updateUsersList}/>
        <Card users={this.state.users}/>
      </div>
    );
  }
}

export default App;
