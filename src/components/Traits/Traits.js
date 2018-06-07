import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class TraitsPage extends Component {
  
  constructor() {
    super();
    this.state = {
      traits: [],
      id: false,
    };
  }

  componentDidMount = () => {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    axios({
      method: 'GET',
      url: '/api/traits'
    }).then((response) => {
      this.setState({
        traits: response.data,
      });
    }).catch((error) => {
      console.log('Error on the traits componentDidMount:', error);
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleChange = id => event => {
    this.setState({ [id]: event.target.checked });
  };

  handleClick = (event) => {
    this.props.history.push('/skills');
  }

  render() {
    return (
      <div >
        <h1>Personality Traits</h1>
        <p className="Directions">Here's your opportunity to build out who your hero is as a person. 
          How would your hero interact with other people? What values or characteristics
          do they view as important? How would they describe themselves on their Tinder 
          profile? Choose wisely. A well rounded character will offer rewards later on. </p>
        <ul className="traitsUL">{this.state.traits.map(data => {
          return (
            <li className="traitsLI" key={data.id}>
              <Checkbox
                checked={this.state.checkedBox}
                onChange={this.handleChange()}
                value={data.id}
              />
              {data.traits}
            </li>
          );
        })}
        </ul>
        <Button onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(TraitsPage);