import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

export default class HomePage extends Component {
	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Home Page!
				</Text>
        <Text
          style={styles.welcome}
          onPress={() => Actions.quiz()}
        >
          Start Quiz
				</Text>
      </View>
		);
	}
}