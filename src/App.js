import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './styles/main.css';

import AboutCharacter from './components/AboutCharacter/AboutCharacter';
import Gadgets from './components/Gadgets/Gadgets';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InfoPage from './components/InfoPage/InfoPage';
import LoginPage from './components/LoginPage/LoginPage';
import OriginStory from './components/OriginStory/OriginStory';
import OtherCharacters from './components/OtherCharacters/OtherCharacters';
import Powers from './components/Powers/Powers';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Skills from './components/Skills/Skills';
import Traits from './components/Traits/Traits';
import UserPage from './components/UserPage/UserPage';
import Welcome from './components/Welcome/Welcome';
import YourCharacter from './components/YourCharacter/YourCharacter';



const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/about"
          component={AboutCharacter}
        />
        <Route
          path="/gadgets"
          component={Gadgets}
        />
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/origin"
          component={OriginStory}
        />
        <Route
          path="/otherCharacters"
          component={OtherCharacters}
        />
        <Route
          path="/powers"
          component={Powers}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/skills"
          component={Skills}
        />
        <Route
          path="/traits"
          component={Traits}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/welcome"
          component={Welcome}
        />
        <Route
          path="/finale"
          component={YourCharacter}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
