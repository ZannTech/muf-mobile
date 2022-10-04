import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const Buttonr = ({text}) => {
  return (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
    </Button>
  )
}

export default Buttonr