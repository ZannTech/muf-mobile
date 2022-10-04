import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import ButtonGradient from '../components/forms/Button';
import  ApiClient  from '../api/client';
import { Libs } from '../lib/libs';
import Toast from 'react-native-toast-message'



const LoginScreen = ({ navigation }) => {
  const [userdata, setUserData] = useState({
    email: '',
    password: ''
  })
  const changeUserData = (name, text) => {
    setUserData({ ...userdata, [name]: text })
  }
  useEffect(() => {
    console.log(userdata)
  }, [userdata])
  return (
    <View style={style.maincontainer}>
      <Image
        style={{
          height: '30%',
          width: width,
          resizeMode: 'cover',
          position: 'relative',
          marginTop: -20
        }}
        source={require('../../assets/images/head.png')}
      />
      <View style={style.container}>
        <Text style={style.title}>MUF</Text>
        <Text style={style.subtitle}>Inicia sesión con tu cuenta.</Text>
        <TextInput
          placeholder='alguien@example.com'
          style={style.input}
          value={userdata.email || ''}
          onChangeText={(text) => {
            changeUserData('email', text)
          }}
        />
        <TextInput
          placeholder='••••••••'
          style={style.input}
          value={userdata.password || ''}
          secureTextEntry={true}
          onChangeText={(text) => {
            changeUserData('password', text)
          }}

        />
        <Text style={style.forgot}
          onPress={() => {
            navigation.navigate('Forgot')
          }}
        >Olvidaste tu contraseña?</Text>
        <ButtonGradient
          text={"Iniciar sesión"}
          icon="login"
          onPress={async ()=>{
            if(userdata.email === '' || userdata.password === ''){
              Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Rellena todos los campos.',
                position: 'top',
                visibilityTime: 2000
              })
            }else{
              const {message, status} = await ApiClient.auth(userdata)
              if(status === 200){
                Toast.show({
                  type: 'success',
                  text1: 'Correcto',
                  text2: message,
                  position: 'top',
                  visibilityTime: 2000
                })
              }else{
                Toast.show({
                  type: 'error',
                  text1: 'Error',
                  text2: message,
                  position: 'top',
                  visibilityTime: 2000
                })
              }
            }
          }}
        />
        <Text style={style.forgot}
          onPress={() => {
            navigation.navigate('Signup')
          }}
        >¿No tienes cuenta?</Text>
      </View>
      <Toast/>
    </View>

  )
}

const style = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#f1f1f1',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold'
  },
  containerSvg: {
    width: width,
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingTop: 0
  },
  subtitle: {
    fontSize: 20,
    color: 'gray'
  },
  input: {
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingStart: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
  },
  forgot: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }
})

export default LoginScreen