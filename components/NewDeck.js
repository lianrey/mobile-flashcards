import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ligthGray, darkGray, black, white } from '../utils/colors'

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Deck title"></TextInput>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitBtnText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  question: {
    fontSize: 50,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center'
  },
  inputWrapper: {
    alignSelf: 'stretch',
    borderColor: darkGray,
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 6,
    paddingRight: 4,
    paddingLeft: 4,
    marginRight: 20,
    marginLeft: 20
  },
  input:{
    borderBottomColor: ligthGray,
    borderBottomWidth: 1,
    padding: 3
  },
  submit: {
    borderRadius: 5,
    backgroundColor: black,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  submitBtnText: {
    color: white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default NewDeck
