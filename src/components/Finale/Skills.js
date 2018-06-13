import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class SkillsPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            skills: [],
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/skills'
        }).then((response) => {
            this.setState({
                skills: response.data
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
                    Strengths and Weaknesses
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Your character is
                    {this.state.skills.map(data => {
                        return (
                            <p id='finaleArrays'>{data.skills}-{data.count}</p>
                        );
                    })}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default connect(mapStateToProps)(SkillsPanelPage);