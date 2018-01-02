import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECKS_STORAGE_KEY } from './_decks'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function fetchDeck (title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      let newData = data.filter((d)=> {
        if(d.title === title){
          return d
        }
      })
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData))
    })
}

export function updateDeckResultsApi ({question, deck}) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      let newData = data.filter((d)=> {
        if(d.title === deck.title){
          d.questions.push(question)
        }
        return d
      })
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData))
    })
}

export function addDeckApi (deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data.push(deck)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}
