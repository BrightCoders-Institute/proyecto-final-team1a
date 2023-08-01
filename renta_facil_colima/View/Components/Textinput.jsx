import React from 'react'
import TextinputStyle from '../Styles/TextinputStyle'
import { View, Text, TextInput } from 'react-native'
const Textinput = ({altura,padding,margen,onChangeText,value,placeholder}) => {
  return (
    <TextInput
      style={[{height:altura,margin:margen,padding:padding},TextinputStyle]}
      placeholder={placeholder}
      textAlign='left'
      onChangeText={onChangeText}
      value={value}
    />
  )
}
export default Textinput