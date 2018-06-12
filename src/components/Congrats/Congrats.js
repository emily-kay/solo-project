import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
});

class CongratsPage extends Component {
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
    const action = { type: 'POST_BASE' }
    this.props.dispatch(action);
    this.props.history.push('/finale');
  }

  render() {
    return (
      <div >
        <Button onClick={this.handleClick}>Reveal your Character</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CongratsPage);