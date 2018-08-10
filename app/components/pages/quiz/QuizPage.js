import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './question'
import Results from './results'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      current: 0,
    }
    this.baseState = this.state 
  }

  componentDidMount() {
    this.query();
  }

  query() {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ questions: json.results });
      })
  }

  handleReset = () => {
    this.setState(this.baseState);
    this.query();
  }

  handleAnswer = (answer) => {
    if (Array.isArray(this.state.questions[this.state.current].correct_answer)) {
      if (this.state.questions[this.state.current].correct_answer.indexOf(answer) != -1) {
        this.setTrue();
      } else {
        this.setFalse();
      }
    } else {
      if (this.state.questions[this.state.current].correct_answer === answer) {
        this.setTrue();
      } else {
        this.setFalse();
      }
    }
  }

  setTrue() {
    this.setState((prevState) => {
      return {
        answers: prevState.answers.concat('true'),
        current: prevState.current + 1
      }
    });
  }

  setFalse() {
    this.setState((prevState) => {
      return {
        answers: prevState.answers.concat('false'),
        current: prevState.current + 1
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          (typeof this.state.questions !== 'undefined' && this.state.questions.length > 0 ) ?
            this.state.current < this.state.questions.length ?
              <Question
                question={this.state.questions[this.state.current]}
                handleAnswer={this.handleAnswer}
              />
              :
              <Results 
                questions={this.state.questions}
                answers={this.state.answers}
                handleReset={this.handleReset}
              />
            :
            <Text style={styles.loading} >
              Loading...
            </Text>
        }
      </View>
    );
  }
}
