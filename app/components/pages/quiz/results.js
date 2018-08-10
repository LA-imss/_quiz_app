import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();

const styles = StyleSheet.create({
  score: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    fontSize: 16,
    textAlign: 'left',
    margin: 5,
  },
});

export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var dataArr = [];
    var counter = 0;
    this.props.answers.map((value, index) => {
      if (value === "true") {
        dataArr.push({ value: '+   ' + entities.decode(this.props.questions[index].question), key: String(index) })
        counter++
      } else {
        dataArr.push({ value: '-   ' + entities.decode(this.props.questions[index].question), key: String(index) })
      }
    })

    console.log('dataArr', dataArr);
    console.log('kfgnkmgohnfogh');
    console.log('kfgnkmgohnfogh', this.props);

    return (
      <FlatList
        data={dataArr}
        renderItem={({ item, separators }) => (
          <View key={item.key}>
            <Text style={styles.item}>
              {item.value}
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.score}>
            Your score {counter}/{this.props.answers.length}
          </Text>
        }
        ListFooterComponent={
          <Text 
            style={styles.score}
            onPress={() => this.props.handleReset()}
          >
            PLAY AGAIN?
          </Text>
        }
      />
    );
  }
}
