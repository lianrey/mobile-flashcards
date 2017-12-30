import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ligthGray, darkGray, black, white } from '../utils/colors'
import { connect } from 'react-redux'
import { receiveDecks, addDeck } from '../actions'
import { addDeckApi } from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
  state = {
    text: ''
  }

  add = (title) => {
    const { dispatch, decks } = this.props

    let deck = {
      title: title,
      questions: []
    }

    addDeckApi(deck).then(() => {
      dispatch(addDeck(deck))
      this.setState({ text: ''})
      this.toHome()
    })
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Deck title" value={this.state.text}
            onChangeText={(text) => this.setState({text})}></TextInput>
        </View>
        <TouchableOpacity style={styles.submit} onPress={() =>this.add(this.state.text)}>
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(NewDeck)
