import { View, Text, ScrollView, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
const { width, height } = Dimensions.get('window')
import { Colors, LeftIcon, RightIcon, StyledFormArea, StyledInputLabel, StyledTextInput } from '../components/styled/theme'
import { Octicons, Ionicons } from "@expo/vector-icons"
import ButtonGradient from '../components/forms/Button'
import Toast from 'react-native-toast-message'
import ApiClient from '../api/client'

const { brand, darkLight, gray, primary, green, red, tertiary, secondary } = Colors
const Signup = ({  navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [Loading, setLoading] = useState(false)
  const [data, setData] = useState({
    user: '',
    name: '',
    lastname: '',
    password: '',
    email: '',
  })
  const changeData = (name, text) => {
    fx: {
      setData({ ...data, [name]: text })
    }
  }
  return (
    <SafeAreaView style={style.maincontainer}>
      <ScrollView collapsable={true} >
        <View style={style.container}>
          <Image
            style={{
              paddingTop: 30,
              height: '30%',
              width: width,
              resizeMode: 'cover',
              position: 'relative',
              marginTop: -20
            }}
            source={require('../../assets/muf.png')}
          />
          <Text style={style.title}>MUF</Text>
          <Text style={style.subtitle}>Registro de usuario.</Text>
          <StyledFormArea>
            <TextInput
              label={"Nombre"}
              icon={"person"}
              placeholder="Nombre(s)"
              onChangeText={(text)=>{
                changeData('name', text)
              }}
            />
            <TextInput
              placeholder="Apellidos"
              label={"Apellido"}
              icon={"person"}
              onChangeText={(text)=>{
                changeData('lastname', text)
              }}
            />
            <TextInput
              placeholder="Usuario"
              label={"Usuario"}
              icon={"person"}
              onChangeText={(text)=>{
                changeData('user', text)
              }}
            />
            <TextInput
              placeholder="Correo Electrónico"
              label={"Email"}
              icon={"mention"}
              onChangeText={(text)=>{
                changeData('email', text)
              }}
            />
            <TextInput
              isPassword={true}
              placeholder='••••••••'
              secureTextEntry={hidePassword}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              label={"Contraseña"}
              icon={"lock"}
              onChangeText={(text)=>{
                  changeData('password', text)
              }}
            />
            
            <View style={{
              flex: 1,
              alignItems: 'center',
              paddingBottom: 0
            }}>
              <ButtonGradient
                mt={10}
                disabled={ Loading }
                loading={Loading}
                text="¡Registrarme!"
                onPress={async ()=>{
                  if(data.email === '' || data.lastname === '' || data.name === '' || data.password === '' || data.user === ''){
                    Toast.show({
                      type: 'error',
                      text1: 'Error, falta llenar datos.',
                      text2: 'Rellena todo el formulario como se pide, faltan datos por rellenar.',
                      visibilityTime: 4000,
                    })
                  }else{
                    setLoading(true)
                    const {message, success} = await ApiClient.register(data)
                    setLoading(false)
                    if(success === true){
                        navigation.navigate('Login', {
                          register: true 
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
            </View>
          </StyledFormArea>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>

  )
}
const style = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#f1f1f1',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: height + 300
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    textAlign: 'center',
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
    color: 'gray',
    textAlign: 'center'
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
export default Signup