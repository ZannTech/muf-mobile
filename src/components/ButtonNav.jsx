import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const ButtonNav = ({navigation, text, icon, goto, mode}) => {
  return (
   <Button
   onPress={()=>{
    navigation.navigate(goto)
   }}
   icon={icon}
   mode={mode}
   >
    {text}
   </Button>
  )
}

export default ButtonNav