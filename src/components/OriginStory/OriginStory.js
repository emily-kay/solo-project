import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class OriginPage extends Component {

  constructor() {
    super();
    this.state = {
      base: {
        homeTown: '',
        values: '',
        goals: '',
        backstory: '',
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
    this.props.history.push('/traits');
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
          <img src="Headers/ORIGIN_STORY.jpg" />
        </div>
        <div className="OriginField">
          Home Town 
          <textarea id="textGap" onChange={this.handleFormChange} name="homeTown" rows="4" cols="50"> </textarea>
          Personal Values 
          <textarea id="textGap" onChange={this.handleFormChange} name="values" rows="4" cols="50"> </textarea>
          Goals, Hopes, Dreams 
          <textarea id="textGap" onChange={this.handleFormChange} name="goals" rows="4" cols="50"> </textarea>
          Backstory 
          <textarea id="textGap" onChange={this.handleFormChange} name="backstory" rows="4" cols="50"> </textarea>
        </div>
        <Button className="NavButton1" onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(OriginPage);