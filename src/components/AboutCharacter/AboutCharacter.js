import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleChange = (event) => {
    this.props.history.push('/origin');
  }

  render() {
    return (
      <div >
        <h1>About Your Character</h1>
        <div className="AboutList">
          <TextField label="First Name"/>
          <br />
          <TextField label="Last Name"/>
          <br />
          <TextField label="Superhero Name"/>
          <br />
        </div>
        <Button onClick={this.handleChange}>Onward</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);