import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import ButtonGradient from '../components/forms/Button';
import ApiClient from '../api/client';
import { Libs } from '../lib/libs';
import Toast from 'react-native-toast-message'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import { LeftIcon, RightIcon, StyledTextInput, Colors, StyledInputLabel, StyledFormArea } from '../components/styled/theme';
const { brand, darkLight, primary, gray } = Colors;

const LoginScreen = ({ navigation, route}) => {
  const  register = route.params.register != undefined ? route.params.register : '' ;
  const [loading, setloading] = useState(false)
  useEffect(()=>{
    console.log(loading)
    if(register != ''){
      Toast.show({
        type: 'success',
        text1: 'Registro completado',
        text2: 'Te has registrado correctamente',
        position: 'top',
        visibilityTime: 6000
      })
      navigation.setParams({
        register: false,
      })
    }
  })
  const [hidePassword, setHidePassword] = useState(true)
  const [userdata, setUserData] = useState({
    email: '',
    password: ''
  })
  const changeUserData = (name, text) => {
    setUserData({ ...userdata, [name]: text })
  }
  return (
    <View style={style.maincontainer}>
      <Image
        style={{
          paddingTop: 30,
          height: '30%',
          width: width,
          resizeMode: 'cover',
          position: 'relative',
          marginTop: -20
        }}
        source={require('./../../assets/muf.png')}
      />
      <View style={style.container}>
        <Text style={style.title}>MUF</Text>
        <Text style={style.subtitle}>Inicia sesión con tu cuenta.</Text>
        <StyledFormArea>
          <TextInput
            label={"Correo Electrónico"}
            icon="mention"
            placeholder='alguien@example.com'
            style={style.input}
            value={userdata.email || ''}
            onChangeText={(text) => {
              changeUserData('email', text)
            }}
          />
          <TextInput
            label={"Contraseña"}
            icon="lock"
            placeholder='••••••••'
            style={style.input}
            value={userdata.password || ''}
            secureTextEntry={hidePassword}
            isPassword={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            onChangeText={(text) => {
              changeUserData('password', text)
            }}
          />
        </StyledFormArea>


        <Text style={style.forgot}
          onPress={() => {
            navigation.navigate('Forgot')
          }}
        >Olvidaste tu contraseña?</Text>
        <ButtonGradient
          mt={20}
          disabled={loading}
          loading={loading}
          text={"Iniciar sesión"}
          icon="signup"
          onPress={async () => {
            if (userdata.email === '' || userdata.password === '') {
              Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Rellena todos los campos.',
                position: 'top',
                visibilityTime: 2000
              })
            } else {
              setloading(true)
              const {message, success} = await ApiClient.auth(userdata)
              setloading(false);
              if (success === true) {
               navigation.navigate('MainScreen', {
                screen: 'Main',
                params: { message: '¡Bienvenido de nuevo!'}
               })
              } else {
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
      <Toast
      
      />
    </View>

  )
}

const style = StyleSheet.create({
  maincontainer: {
    paddingTop: 40,
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
  forgot: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }
})


export const TextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons
          name={icon}
          size={25}
          color={gray}
        />

      </LeftIcon>
      <StyledInputLabel>
        {label}
      </StyledInputLabel>
      <StyledTextInput  {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword)
          }}
        >
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={25}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
}
export default LoginScreen