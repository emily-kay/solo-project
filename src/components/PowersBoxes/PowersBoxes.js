import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class PowersBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxChecked: false,
        };
    }

    handleChange = id => event => {
        if (this.state.boxChecked === false) {
            this.props.dispatch({ type: 'POST_POWER', payload: this.props.powers, property: this.props.id })
            this.setState({
                boxChecked: true,
            });
        } else if (this.state.boxChecked === true) {
            this.props.dispatch({ type: 'DELETE_POWER', payload: this.props.powers, property: this.props.id })
            this.setState({
                boxChecked: false,
            });
        }
    };

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.state.checkedBox}
                    onChange={this.handleChange(this.props.id)}
                    value={this.props.id}
                />
                {this.props.power}
            </div>
        );
    }
}

export default connect(mapStateToProps)(PowersBoxes);