import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton ({ children, onPress, backgroundColor, borderColor, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.base, {backgroundColor: backgroundColor, borderColor: borderColor}]}>
      <Text style={[styles.submitBtnText, {color: textColor}]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 15,
    alignSelf: 'stretch'
  },
  submitBtnText: {
    fontSize: 18,
    textAlign: 'center'
  }
})
