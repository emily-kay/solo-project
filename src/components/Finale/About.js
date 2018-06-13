import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class AboutPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            about: {
                first_name: '',
                last_name: '',
                super_name: '',
            }
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/about'
        }).then((response) => {
            console.log('DUDE HERE', response.data)
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

    handleUpdate = (event) => {
        //update
        console.log('OY OVER HERE',this.state)
    }

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary >
                    About
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Panels">
                    <Typography>
                    First Name - {this.state.about.first_name} 
                    <br/>
                    Last Name - {this.state.about.last_name}
                    <br/>
                    Super Name - {this.state.about.super_name}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(AboutPanelPage);