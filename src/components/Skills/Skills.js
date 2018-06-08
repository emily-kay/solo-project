import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox, Input } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
  state,
});


class SkillsPage extends Component {

  constructor() {
    super();
    this.state = {
      skills: [],
      count: 0,
      id: false,
    };
  }

  componentDidMount = () => {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    axios({
      method: 'GET',
      url: '/api/skills'
    }).then((response) => {
      this.setState({
        skills: response.data,
      });
    }).catch((error) => {
      console.log('Error on the skills componentDidMount:', error);
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleAdd = id => event => {
    if (this.state.count !== 50) {
      this.setState({ count: this.state.count + 1 });
    }
    this.props.dispatch({ type: 'SKILL_ADDED' })
  };

  handleClick = (event) => {
    this.props.history.push('/powers');
  }

  handleMinus = id => event => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
    this.props.dispatch({ type: 'SKILL_MINUSED' })
  };

  render() {
    return (
      <div >
        <h1>Strengths and Weaknesses</h1>
        <p className="Directions">Here are some instructions! </p>
        <h2>{this.props.state.skillReducer}</h2>
        <ul className="skillsUL">{this.state.skills.map(data => {
          return (
            <li className="skillsLI" key={data.id}>
              {data.skill}
              <h3 id="skillsCount">{this.state.count}</h3>
              <button className="skillsButton" onClick={this.handleAdd()}>+</button>
              <button className="skillsButton" onClick={this.handleMinus()}>-</button>
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
export default connect(mapStateToProps)(SkillsPage);