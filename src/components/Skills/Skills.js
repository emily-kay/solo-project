import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox, Input } from '@material-ui/core';

import SkillsCounter from '../SkillsCounter/SkillsCounter';

const mapStateToProps = state => ({
  user: state.user,
  state,
});


class SkillsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: [],
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

  handlePost = (event) => {
    this.props.dispatch({ type: 'SKILL_POST', property: this.state.skills })
  }

  handleClick = (event) => {
    this.props.history.push('/powers');
  }

  render() {
    return (
      <div >
        <img src="Headers/SKILLS.jpg" />
        <p className="Directions">Here are some instructions! </p>
        <h2>{this.props.state.skillReducer.skillReducer.allCount}</h2>
        <ul className="skillsUL">{this.state.skills.map(data => {
          return (
            <li className="skillsLI" key={data.id}>
              <SkillsCounter skill={data.skill} id={data.id}/>
            </li>
          );
        })}
        </ul>
        <Button onClick={this.handlePost}>Final Answer</Button>
        <br />
        <Button onClick={this.handleClick}>Onward!</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SkillsPage);