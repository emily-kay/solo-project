import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, TextField } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class OtherCharactersPage extends Component {

  constructor() {
    super();
    this.state = {
      base: {
        teammates: '',
        loves: '',
        enemies: '',
      },
    }
  }

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
    const action = { type: 'ADD_BASE', payload: this.state.base }
    this.props.dispatch(action);
    this.props.history.push('/congrats');
  }

  handleFormChange = (event) => {
    this.setState({
      base: {
        ...this.state.base,
        [event.target.name]: event.target.value,
      }
    });
  };

  render() {
    return (
      <div className='Home' >
      <div className='Header'>
        <img src="Headers/OTHER.jpg" />
        <p>
            *Almost* done. Here you can put any of the other people in your hero's life. Who do they 
            fight with? Against? For? The people we care about (or don't in some cases) have an effect
            on how we move about in the world. There's plenty of space to do more than name them so take
            a shot at describing them as well. 
          </p>
      </div>
      <div className="OriginField">
        Teammates
        <textarea id="textGap" onChange={this.handleFormChange} name="teammates" rows="4" cols="50"> </textarea>
        <br />
        Love Interests
        <textarea id="textGap" onChange={this.handleFormChange} name="loves" rows="4" cols="50"> </textarea>
        <br />
        Enemies
        <textarea id="textGap" onChange={this.handleFormChange} name="enemies" rows="4" cols="50"> </textarea>
      </div>
      <Button className="NavButton1" onClick={this.handleClick}>Onward!</Button>
    </div>
    );
  }
}

export default connect(mapStateToProps)(OtherCharactersPage);