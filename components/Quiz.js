import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, white, darkGray } from '../utils/colors'
import TextButton from './TextButton'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.pages}>2 / 2</Text>
        <View style={styles.container}>
          <View style={styles.first}>
            <Text style={styles.itemTitle}>Does React Navite work with Android?</Text>
            <Text style={styles.itemSubTitle}>Answer</Text>
          </View>
          <View style={{flex:1}}>
            <TextButton backgroundColor={green} borderColor={green} textColor={white}>
                Correct
            </TextButton>
            <TextButton backgroundColor={red} borderColor={red} textColor={white}>
                Incorrect
            </TextButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
  },
  pages: {
    padding: 10,
    fontSize: 18
  },
  first: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 40,
    color: darkGray,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'center'
  },
  itemSubTitle: {
    fontWeight: 'bold',
    color: red,
    paddingTop: 20,
    fontSize: 18
  }
})

export default Quiz
