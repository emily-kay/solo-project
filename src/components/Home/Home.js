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

  handleClick = (event) => {
    this.props.history.push('/welcome');
  }

  render() {
    return (
      <div className='Background' >
        <p className='NavButton' id='homeButton1'>
        <Button  onClick={this.handleClick}>Enter</Button>
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomePage);
