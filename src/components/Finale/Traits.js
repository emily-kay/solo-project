import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class TraitsPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            traits: [],
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/traits'
        }).then((response) => {
            this.setState({
                traits: response.data
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
                    Personality Traits
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Your character is
                    {this.state.traits.map(data => {
                        return (
                            <p id='finaleArrays'>{data.traits}</p>
                        );
                    })}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(TraitsPanelPage);