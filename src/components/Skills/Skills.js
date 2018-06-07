import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox, Input } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
});

class SkillsPage extends Component {

  constructor() {
    super();
    this.state = {
      skills: [],
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

  handleChange = id => event => {
    this.setState({ [id]: event.target.checked });
  };

  handleClick = (event) => {
    this.props.history.push('/powers');
  }

  render() {
    return (
      <div >
        <h1>Strengths and Weaknesses</h1>
        <p className="Directions">Here are some instructions! </p>
        <ul className="skillsUL">{this.state.skills.map(data => {
          return (
            <li className="skillsLI" key={data.id}>
              <Input
                checked={this.state.checkedBox}
                onChange={this.handleChange()}
                value= 'number'
              />
              {data.skill}
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