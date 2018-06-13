import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class PowersPanelPage extends Component {
    
    constructor() {
        super();
        this.state = {
            powers: [],
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/powers'
        }).then((response) => {
            this.setState({
                powers: response.data
            });
        }).catch((error) => {
            console.log('Error on the powers componentDidMount:', error);
        });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary >
                    Powers
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Your character's powers are
                    {this.state.powers.map(data => {
                        return (
                            <p id='finaleArrays'>{data.powers}</p>
                        );
                    })}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(PowersPanelPage);