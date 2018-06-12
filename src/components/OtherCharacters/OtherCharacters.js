import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class OtherCharactersPage extends Component {

  constructor() {
    super();
    this.state = {
      base: {
        teammates: '',
        loves: '',
        enemies: '',
      },
    }
  }

  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const action = { type: 'ADD_BASE', payload: this.state.base }
    this.props.dispatch(action);
    this.props.history.push('/congrats');
  }

  handleFormChange = (event) => {
    this.setState({
      base: {
        ...this.state.base,
        [event.target.name]: event.target.value,
      }
    });
  };

  render() {
    return (
      <div >
        <h1>Other Characters</h1>
        <div className="TextList">
          <TextField label="Teammates" onChange={this.handleFormChange} name="teammates" />
          <br />
          <TextField label="Love Interests" onChange={this.handleFormChange} name="loves" />
          <br />
          <TextField label="Enemies" onChange={this.handleFormChange} name="enemies" />
        </div>
        <Button onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OtherCharactersPage);