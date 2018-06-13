import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
});

class GadgetsPanelPage extends Component {

    constructor() {
        super();
        this.state = {
            gadgets: {
                weapons: '',
                vehicles: '',
                lairs: '',
            }
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        axios({
            method: 'GET',
            url: '/api/finale/gadgets'
        }).then((response) => {
            this.setState({
                gadgets: response.data[0]
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
                    Gadgets
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Panels">
                    <Typography>
                    Weapons - {this.state.gadgets.weapons} 
                    <br/>
                    Vehicles - {this.state.gadgets.vehicles}
                    <br/>
                    Lairs - {this.state.gadgets.lairs}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}


export default connect(mapStateToProps)(GadgetsPanelPage);