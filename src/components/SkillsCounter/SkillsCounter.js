import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';


class SkillsCountPage extends Component {

    render() {
        return (
            <div>
                {this.props.skill}
                <h3 id="skillsCount">{this.props.count}</h3>
                <button
                    className="skillsButton"
                    onClick={this.props.handleAdd(this.props.id)}>+</button>
                <button
                    className="skillsButton"
                    onClick={this.props.handleMinus(this.props.id)}>-</button>
            </div>
        );
    };
}  

export default SkillsCountPage;