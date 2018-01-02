import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, white, darkGray, ligthGray, black } from '../utils/colors'
import TextButton from './TextButton'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add card'
    }
  }

  addCard = (question, answer) => {
    const { addCardFunc, deck } = this.props.navigation.state.params

    let questionObj = {
      question,
      answer
    }

    addCardFunc(questionObj, deck)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Question" value={this.state.question}
            onChangeText={(question) => this.setState({question})}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Answer" value={this.state.answer}
            onChangeText={(answer) => this.setState({answer})}></TextInput>
        </View>
        <TouchableOpacity style={styles.submit} onPress = {() => this.addCard(this.state.question, this.state.answer)}>
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

function mapStateToProps () {
  return {
  }
}

export default connect(
  mapStateToProps,
)(AddCard)
