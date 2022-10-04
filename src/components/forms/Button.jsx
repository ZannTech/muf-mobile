import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { Component } from 'react'
import { AntDesign } from "@expo/vector-icons"

export default class ButtonGradient extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableOpacity
      style={styles.container}
      onPress={this.props.onPress}
    >
      <LinearGradient
        colors={['#FFB677', '#FF3CBD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}

      >
        <Text style={styles.text}>
          {this.props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: 'center',
    marginTop: 60
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  button: {
    width: '80%',
    minHeight: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})