import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  category: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  question: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  ansver: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  compareRandom() {
    return Math.random() - 0.5;
  }

  render() {
    console.log('question in', this.props.question)
    question_ansvers = this.props.question.incorrect_answers.concat(this.props.question.correct_answer)
    console.log('connect', question_ansvers)
    question_ansvers.sort(this.compareRandom);
    console.log('question_ansvers', question_ansvers)
    return (
      <React.Fragment>
        <Text style={styles.category}>
          {entities.decode(this.props.question.category)}
        </Text>
        <Text style={styles.question}>
          {entities.decode(this.props.question.question)}
        </Text>
        {
          question_ansvers.map((value, index)=>{
            return <Text
              key={index}
              style={styles.ansver}
              onPress={()=> this.props.handleAnswer(value)}
            >{entities.decode(value)}</Text>
          })
        }
      </React.Fragment>
    );
  }
}
