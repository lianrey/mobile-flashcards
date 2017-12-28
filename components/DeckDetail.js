import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ligthGray, darkGray, black, white } from '../utils/colors'
import TextButton from './TextButton'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'React'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Text style={styles.itemTitle}>udacicards</Text>
          <Text style={styles.itemSubTitle}>3 cards</Text>
        </View>
        <View style={{flex:1}}>
          <TextButton backgroundColor={white} borderColor={black} textColor={black}
            onPress={() => this.props.navigation.navigate('AddCard', { title: 'lala' })}>
              Add card
          </TextButton>
          <TextButton backgroundColor={black} borderColor={black} textColor={white}
            onPress={() => this.props.navigation.navigate('Quiz', { title: 'lala' })}>
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

export default DeckDetail
