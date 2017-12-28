import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ligthGray, darkGray, white } from '../utils/colors'

class DeckList extends Component {
  state = {
    decks: [
      {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ]
  }
  render() {
    const { decks } = this.state

    return (
      <View style={styles.container}>
        {
          decks && decks.map((deck) => {
            return(
              <TouchableOpacity style={styles.itemBox} key={deck.title}
                onPress={() => this.props.navigation.navigate('DeckDetail', { title: deck.title })}>
                <Text style={styles.itemTitle}>{deck.title}</Text>
                <Text style={styles.itemSubTitle}>{deck.questions.length} cards</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: white
  },
  itemBox: {
    borderBottomColor: ligthGray,
    borderBottomWidth: 2,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 23,
    color: darkGray,
    fontWeight: 'bold'
  },
  itemSubTitle: {
    fontSize: 18,
    color: ligthGray,
    paddingTop: 4
  }
})

export default DeckList