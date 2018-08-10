import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomePage from './pages/HomePage';
import QuizPage from './pages/quiz/QuizPage';
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home"
            component={HomePage}
            hideNavBar={true}
            initial
          />
          <Scene
            key="quiz"
            component={QuizPage}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}