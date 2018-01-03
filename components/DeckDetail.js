import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ligthGray, darkGray, black, white } from '../utils/colors'
import TextButton from './TextButton'
import { updateDeckResultsApi } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class DeckDetail extends Component {
  state = {
    deck : { questions: [], title: '' }
  }

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck.title
    }
  }

  componentDidMount(){
    this.setState(() => { deck: this.props.navigation.state.params })
  }

  addCardFunc = (question, deck) => {
    const { dispatch, goBack, addCardAction } = this.props

    this.setState(() => { deck: deck })

    updateDeckResultsApi({ question, deck })
      .then((result) => {
        addCardAction(deck, question)
        goBack()
      })
  }

  render() {
    const { deck } = (this.state.deck.questions.length > 0)? this.state : this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Text style={styles.itemTitle}>{deck.title}</Text>
          <Text style={styles.itemSubTitle}>{deck.questions.length} cards</Text>
        </View>
        <View style={{flex:1}}>
          <TextButton backgroundColor={white} borderColor={black} textColor={black}
            onPress={() => this.props.navigation.navigate('AddCard', { addCardFunc: this.addCardFunc, deck })}>
              Add card
          </TextButton>
          <TextButton backgroundColor={black} borderColor={black} textColor={white}
            onPress={() => this.props.navigation.navigate('Quiz', { title: deck.title })}>
              Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: white
  },
  first: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 30,
    color: darkGray,
    fontWeight: 'bold'
  },
  itemSubTitle: {
    fontSize: 18,
    color: ligthGray,
    paddingTop: 4
  }
})

function mapStateToProps (deck) {
  return {
    deck
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    addCardAction: (deck, question) => dispatch(addCard({deck, question})),
    goBack: () => navigation.goBack(null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail)
