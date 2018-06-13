import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import About from '../Finale/About';
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
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
      <div >
        <h1>Your Character</h1>
        <About />
        <Origin />
        <Traits />
        <Skills />
        <Powers />
        <Gadgets />
        <OtherCharacters />
        <Button onClick={this.handleDelete}>Delete!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourCharacterPage);