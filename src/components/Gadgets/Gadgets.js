import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class GadgetsPage extends Component {
  
  constructor() {
    super();
    this.state = {
      base: {
        weapons: '',
        vehicles: '',
        lairs: '',
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
    this.props.history.push('/otherCharacters');
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
          <img src="Headers/GADGETS.jpg" />
          <p>
            Here's where you take over. Whatever additional physical things you want to include in your world, 
            here's a spot to put them. Maybe your character has an item that they get their powers from. Maybe
            they have a unique form of travel. Whatever it is, find a spot. 
          </p>
        </div>
        <div className="OriginField">
          Weapons
          <textarea id="textGap" onChange={this.handleFormChange} name="weapons" rows="4" cols="50"> </textarea>
          <br />
          Vehicles
          <textarea id="textGap" onChange={this.handleFormChange} name="vehicles" rows="4" cols="50"> </textarea>
          <br />
          Lairs
          <textarea id="textGap" onChange={this.handleFormChange} name="lairs" rows="4" cols="50"> </textarea>
        </div>
        <Button className="NavButton1" onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(GadgetsPage);