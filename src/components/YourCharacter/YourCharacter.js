import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Origin from '../Finale/Origin';
import Traits from '../Finale/Traits';
import Skills from '../Finale/Skills';
import Powers from '../Finale/Powers';
import Gadgets from '../Finale/Gadgets';
import OtherCharacters from '../Finale/OtherCharacters';
import ThankYous from '../Finale/ThankYous';


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
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER, property: 'finale'});
  }

  componentWillUpdate() {
    if (this.state.super.super_name === ''){
      axios({
        method: 'GET',
        url: '/api/finale/supername'
      }).then((response) => {
        console.log('DONT PANIC', response)
        this.setState({
          super: response.data[0]
        });
      }).catch((error) => {
        console.log('Error on the powers componentDidMount:', error);
      });
    }
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  render() {
    return (
      <div className="Home">
        <div className="Header">
          <h2>{this.state.super.super_name}</h2>
          <img className="CharacterImage" src="Characters/The_Great_Illusion.jpg" />
        </div>
        <div className="Accordian">
          <Origin />
          <Traits />
          <Skills />
          <Powers />
          <Gadgets />
          <OtherCharacters />
          <ThankYous />
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourCharacterPage);