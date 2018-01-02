import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, white, darkGray, black } from '../utils/colors'
import TextButton from './TextButton'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

class Quiz extends Component {
  state = {
    title: '',
    subTitle: 'Answer',
    currentIndex: 0,
    theEnd: false,
    score: 0,
    correctTotal: 0
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }

  reset = () => {
    return {
      title: this.props.navigation.state.params.deck.questions[0].question,
      subTitle: 'Answer',
      currentIndex: 0,
      theEnd: false,
      score: 0,
      correctTotal: 0
    }
  }

  componentDidMount() {
    this.setState(this.reset())
  }

  toggleAnswer = () => {
    const { deck } = this.props.navigation.state.params

    this.setState(
      {
        title: (this.state.subTitle === 'Answer') ? deck.questions[this.state.currentIndex].answer
                                                  : deck.questions[this.state.currentIndex].question,
        subTitle: (this.state.subTitle === 'Answer')? 'Question': 'Answer'
      }
    )
  }

  answerBtn = (type) => {
    const { deck } = this.props.navigation.state.params
    const index = this.state.currentIndex + 1;

    this.setState(
      {
        correctTotal: (type === 'Correct') ? this.state.correctTotal + 1: this.state.correctTotal
      },
      () => {
      if(index < deck.questions.length) {
        this.setState(
          {
            currentIndex: index,
            title: deck.questions[index].question,
            subTitle: 'Answer'
          }
        )
      }
      else{
        const score = (this.state.correctTotal * 100)/deck.questions.length

        clearLocalNotification()
          .then(setLocalNotification)
        this.setState(
          {
            score,
            theEnd: true
          }
        )
      }
    })
  }

  startOver = () => {
    this.setState(this.reset())
  }

  render() {
    const { deck } = this.props.navigation.state.params

    if(deck.questions.length === 0){
      return(
        <View>
          <Text style={styles.itemTitle}>You need to add cards to start a quiz</Text>
        </View>
      )
    }

    if(this.state.theEnd){
      return(
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.first}>
              <Text style={styles.itemTitle}>Score: {this.state.score}</Text>
            </View>
            <View style={{flex:1}}>
              <TextButton backgroundColor={green} borderColor={green} textColor={white}
                onPress={() => {this.startOver()}}>
                  Restart Quiz
              </TextButton>
                <TextButton backgroundColor={black} borderColor={black} textColor={white}
                  onPress={() => { this.props.navigation.goBack(null)}}>
                    Back to Deck
                </TextButton>
            </View>
          </View>
        </View>
      )
    }

    return (
        <View style={styles.mainContainer}>
          <Text style={styles.pages}>{this.state.currentIndex + 1} / {deck.questions.length}</Text>
          <View style={styles.container}>
            <View style={styles.first}>
              <Text style={styles.itemTitle}>{ this.state.title }</Text>
              <TouchableOpacity
                onPress={() => this.toggleAnswer() }>
                <Text style={styles.itemSubTitle}>{ this.state.subTitle }</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TextButton backgroundColor={green} borderColor={green} textColor={white}
                onPress={() => {this.answerBtn('Correct')}}>
                  Correct
              </TextButton>
              <TextButton backgroundColor={red} borderColor={red} textColor={white}
                onPress={() => {this.answerBtn('Incorrect')}}>
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
