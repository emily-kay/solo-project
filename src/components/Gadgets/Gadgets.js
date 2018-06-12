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
      <div >
        <h1>Gadgets</h1>
        <div className="TextList">
          <TextField label="Weapons" onChange={this.handleFormChange} name="weapons"/>
          <br />
          <TextField label="Vehicles" onChange={this.handleFormChange} name="vehicles"/>
          <br />
          <TextField label="Lairs" onChange={this.handleFormChange} name="lairs"/>
        </div>
        <Button onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(GadgetsPage);