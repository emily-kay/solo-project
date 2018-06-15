import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button } from '@material-ui/core';
import Origin from '../Finale/Origin';
import Traits from '../Finale/Traits';
import Skills from '../Finale/Skills';
import Powers from '../Finale/Powers';
import Gadgets from '../Finale/Gadgets';
import OtherCharacters from '../Finale/OtherCharacters';


const mapStateToProps = state => ({
  user: state.user,
});

class YourCharacterPage extends Component {

  constructor() {
    super();
    this.state = {
      super: {
        super_name: '',
      }
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    axios({
      method: 'GET',
      url: '/api/finale/supername'
    }).then((response) => {
      this.setState({
        super: response.data[0]
      });
    }).catch((error) => {
      console.log('Error on the powers componentDidMount:', error);
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleUpdate = (event) => {
    //update
  }

  handleDelete = (event) => {
    //delete
  }

  render() {
    return (
      <div className="Home">
        <div className="Header">
          <h1>Your Character</h1>
          <h2>{this.state.super.super_name}</h2>
        </div>
        <div className="Accordian">
          <Origin />
          <Traits />
          <Skills />
          <Powers />
          <Gadgets />
          <OtherCharacters />
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourCharacterPage);