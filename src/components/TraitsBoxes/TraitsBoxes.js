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
            traitId: 0,
            boxChecked: false,
        };
    }

    handleChange = id => event => {
        console.log(id)
        this.setState({
            traitId: id,
          });
        console.log(this.state.traitId)
        this.props.dispatch({ type: 'POST_TRAIT', payload: {traitId: id, boxChecked: this.state.boxChecked} })
        console.log(this.state)
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