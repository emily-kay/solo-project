import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox } from '@material-ui/core';
import PowersBoxes from '../PowersBoxes/PowersBoxes';


const mapStateToProps = state => ({
  user: state.user,
});

class PowersPage extends Component {
  
  constructor() {
    super();
    this.state = {
      powers: [],
    };
  }

  componentDidMount = () => {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    axios({
      method: 'GET',
      url: '/api/powers'
    }).then((response) => {
      this.setState({
        powers: response.data,
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

  handleClick = (event) => {
    this.props.history.push('/gadgets');
  }

  render() {
    return (
      <div >
        <img src="Headers/POWERS.jpg" />
        <p className="Directions">
        Time to make your hero super! While you're free
        to choose as many powers as you want, Superman doesn't make for a very 
        interesting character. If your hero only has a couple of powers, they 
        will eventually come up with more creative ways to use them.
        </p>
        <p>
        *As a note, MacGyver refers to the ability to create things you need
        in a moment's notice.
        </p>
        <ul className="PowersUL">{this.state.powers.map(data => {
          return (
            <li className="powersLI" key={data.id}>
             <PowersBoxes id={data.id} power={data.power} />
            </li>
          );
        })}
        </ul>
        <Button onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PowersPage);