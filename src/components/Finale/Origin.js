import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class OriginPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            about: {
                first_name: '',
                last_name: '',
                home_town: '',
                values: '',
                goals: '',
                backstory: '',
            }
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/origin'
        }).then((response) => {
            this.setState({
                about: response.data[0]
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
                    Origin Story
          </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        First Name - {this.state.about.first_name}
                        <br />
                        Last Name - {this.state.about.last_name}
                        <br />
                        Home Town - {this.state.about.home_town}
                        <br />
                        Personal Values - {this.state.about.values}
                        <br />
                        Goals, Hopes, Dreams - {this.state.about.goals}
                        <br />
                        Backstory - {this.state.about.backstory}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(OriginPanelPage);