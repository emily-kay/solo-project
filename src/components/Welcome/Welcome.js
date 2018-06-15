import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header';


const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  // componentDidMount() {
  //   this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  // }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleChange = (event) => {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className='Home' >
        <div className='Header'>
          <img src="Headers/WELCOME.jpg" />
        </div>
        <div className='WelcomeDescription'>
          <p>
            At the heart of any good story is a well written character. They are ultimately the source 
          for every emotion that is stirred. They stay with you long after you walk away. Superheroes
          are no different. The ones that stick with us, that we yearn to adventure with again, that
          we spend countless dollars keeping up with, become friends. They remind us of the people in 
          our lives that we love and hate. They are who we strive to become. 
          </p>
          <p>
            Hero! is here to help you create just such a character. Here you'll have the opportunity to 
            dive into the mind of your own hero. You'll be guided through the creation of a back story. 
            You'll choose personality traits that range from heroic to villianous because even the best
            of us is still far from perfect. You'll discover which skills your character is good at and 
            which ones are their Achilles' heel. Finally, you'll dive into what makes them super. Pick 
            powers, weapons, and gadgets before finishing out with supporting characters. 
          </p>
          <p>
            In the end you'll be left with artwork generated by the choices you've made and a character
            that is prepared for any story.  
          </p>
        </div>
        <br/>
        <Button className='NavButton' onClick={this.handleChange}>Begin Your Adventure</Button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);