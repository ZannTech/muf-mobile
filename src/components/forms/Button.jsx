import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { Component } from 'react'
import { FontAwesome as Icon } from "@expo/vector-icons"
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
import * as Progress from 'react-native-progress';

export default class ButtonGradient extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={{
          marginTop: this.props.mt,
          width: 10,
          alignItems: 'center',
        }}
        onPress={this.props.onPress}
      >
        <LinearGradient
          colors={['#FFB677', '#FF3CBD']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}

        >
          {this.props.loading ? <Progress.Circle size={20} indeterminate={true} color={'white'} />
            : <Text style={styles.text}>{this.props.text}</Text>}
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    alignItems: 'center',
    marginTop: 60
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    width: width - 100,
    minHeight: 50,
    textAlign: 'center',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})