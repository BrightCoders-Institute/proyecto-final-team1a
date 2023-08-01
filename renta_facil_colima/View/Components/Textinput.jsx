import React from 'react'
import { View, Text, TextInput } from 'react-native'
const Textinput = ({altura,padding,margen,onChangeText,value,placeholder}) => {
  return (
   
        <TextInput
            style={{height:altura,backgroundColor:'#FFFFFF',borderRadius:10,margin:margen,fontWeight:'bold',padding:padding}}
            placeholder={placeholder}
            textAlign='left'
            onChangeText={onChangeText}
            value={value}
        />
    
  )
}

export default Textinput