import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECKS_STORAGE_KEY } from './_decks'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
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
