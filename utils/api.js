import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECKS_STORAGE_KEY } from './_decks'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
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
