import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { ligthGray, darkGray, white } from '../utils/colors'
import { fetchDeckResults } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

function Deck ({deck, navigation}) {
  return (
    <TouchableOpacity style={styles.itemBox} key={deck.title}
      onPress={() => navigation.navigate('DeckDetail', { title: deck.title })}>
      <Text style={styles.itemTitle}>{deck.title}</Text>
      <Text style={styles.itemSubTitle}>{deck.questions.length} cards</Text>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    fetchDeckResults()
      .then((result) => dispatch(receiveDecks(result)))
  }

  render() {
    const { decks } = this.props
    
    return (
      <View style={styles.container}>
        {
          decks &&
          <FlatList
            data={decks}
            renderItem={({item}) => <Deck deck={item} navigation={this.props.navigation}></Deck>}
          />
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckList)
