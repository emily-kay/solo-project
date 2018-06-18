import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
});

class CongratsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
      <div className="Home">
        <div className="Header">
          <h2>
            You did it! By now you should have a pretty decent idea of who your character is
            as a person. Are you ready to see what they look like?
          </h2>
          <img src="Headers/CONGRATS.jpg" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CongratsPage);