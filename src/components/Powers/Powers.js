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

  handleChange = id => event => {
    this.setState({ [id]: event.target.checked });
  };

  handleClick = (event) => {
    this.props.history.push('/gadgets');
  }

  render() {
    return (
      <div >
        <h1>Powers</h1>
        <p className="Directions">Time to make your hero super! </p>
        <ul className="powersUL">{this.state.powers.map(data => {
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