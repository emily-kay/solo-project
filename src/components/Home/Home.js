import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
});

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleClickNew = (event) => {
    this.props.history.push('/welcome');
  }

  handleClickOld = (event) => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className='Background' >
        <p id='homeButton1'>
        <Button  onClick={this.handleClickNew}>New Creator</Button>
        </p>
        <p id='homeButton2'>
        <Button  onClick={this.handleClickOld}>Returning Creator</Button>
        </p>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
