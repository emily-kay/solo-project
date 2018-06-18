import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class AboutPage extends Component {

  constructor() {
    super();
    this.state = {
      base: {
        firstName: '',
        lastName: '',
        superName: '',
      },
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
    this.props.history.push('/origin');
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
      <div className='Home' >
        <div className='Header'>
          <img src="Headers/ABOUT.jpg" />
          <p>Let's get started! Tell us the name your hero goes by both 
          with the mask on and off.</p>
        </div>
        <div className="Login">
          <TextField label="First Name" onChange={this.handleFormChange} name="firstName" />
          <br />
          <TextField label="Last Name" onChange={this.handleFormChange} name="lastName" />
          <br />
          <TextField label="Superhero Name" onChange={this.handleFormChange} name="superName" />
          <br />
        </div>
        <Button  className="NavButton1" onClick={this.handleClick}>Onward</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AboutPage);