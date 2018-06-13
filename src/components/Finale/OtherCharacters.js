import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class OtherCharactersPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            otherCharacters: {
                teammates: '',
                loves: '',
                enemies: '',
            }
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/otherCharacters'
        }).then((response) => {
            this.setState({
                otherCharacters: response.data[0]
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
                    Supporting Cast
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Panels">
                    <Typography>
                    Teammates - {this.state.otherCharacters.teammates} 
                    <br/>
                    True Loves - {this.state.otherCharacters.loves}
                    <br/>
                    Enemies - {this.state.otherCharacters.enemies}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(OtherCharactersPanelPage);