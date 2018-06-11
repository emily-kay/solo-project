import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Checkbox } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class TraitsBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxChecked: false,
        };
    }

    handleChange = id => event => {
        if (this.state.boxChecked === false) {
            this.props.dispatch({ type: 'POST_TRAIT', payload: this.props.traits })
            this.setState({
                boxChecked: true,
            });
        } else if (this.state.boxChecked === true){
            console.log('You need to add an update to the state!')
            this.props.dispatch({ type: 'DELETE_TRAIT', payload: this.props.traits })
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
                />
                {this.props.traits}
            </div>
        );
    }
}

export default connect(mapStateToProps)(TraitsBoxes);