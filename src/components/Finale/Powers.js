import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class PowersPanelPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleUpdate = (event) => {
        //update
    }

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary >
                    About
          </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    This is some stuff
            <Button onClick={this.handleUpdate}>Update!</Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(PowersPanelPage);