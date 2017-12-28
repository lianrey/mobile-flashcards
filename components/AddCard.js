import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, white, darkGray, ligthGray, black } from '../utils/colors'
import TextButton from './TextButton'

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add card'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Question"></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Answer"></TextInput>
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
    alignItems: 'center',
    backgroundColor: white
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
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 20
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

export default AddCard
