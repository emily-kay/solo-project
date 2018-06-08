import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    state,
  });

class SkillsCountPage extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }

    handleAdd = id => event => {
        if (this.state.count !== 20) {
          this.setState({ 
            count: this.state.count + 1,
            [id]: event.target.changed});
        }
        this.props.dispatch({ type: 'SKILL_ADDED' })
      };
    
      handleMinus = id => event => {
        if (this.state.count !== 0) {
          this.setState({ 
            count: this.state.count - 1,
            [id]: event.target.changed});
        }
        this.props.dispatch({ type: 'SKILL_MINUSED' })
      };

    render() {
        return (
            <div>
                {this.props.skill}
                <h3 id="skillsCount">{this.state.count}</h3>
                <button
                    className="skillsButton"
                    onClick={this.handleAdd(this.props.id)}>+</button>
                <button
                    className="skillsButton"
                    onClick={this.handleMinus(this.props.id)}>-</button>
            </div>
        );
    };
}  

export default connect(mapStateToProps)(SkillsCountPage);