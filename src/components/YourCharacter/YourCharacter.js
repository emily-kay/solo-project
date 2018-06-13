import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';


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
        <ExpansionPanel>
          <ExpansionPanelSummary >
            About
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            This is some stuff
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button onClick={this.handleUpdate}>Update!</Button>
        <Button onClick={this.handleDelete}>Delete!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourCharacterPage);