import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useDrawerProgress,
  } from '@react-navigation/drawer';import MainScreen from '../screens/App/MainScreen';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Divider, List } from 'react-native-paper';
import InfoScreen from '../screens/App/InfoScreen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons"
import Session from '../storage/storage';


const Drawer = createDrawerNavigator();

export const AuthNavigation = (navigation) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                headerTintColor:'dark',
                swipeEnabled: true,
                drawerType: 'slide',
                headerTitleAlign: 'center',
                
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                sceneContainerStyle: {
                    backgroundColor: 'white'
                },
               
            }}
            drawerContent={(props) => <Menu {...props} />}
        >
            <Drawer.Screen
                component={MainScreen}
                name='Main'
                initialParams={{
                    viewed: false,
                    message: ''
                }}
                options={{
                    title: 'MUF Inicio',
                    drawerIcon: ({focused, size}) => (
                        <Ionicons
                           name="md-home"
                           size={size}
                           color={focused ? '#7cc' : '#ccc'}
                        />
                     ),
                }}
            >
            </Drawer.Screen>
            <Drawer.Screen
                component={InfoScreen}
                name='Info'
            >
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const Menu = (props) => {
    const {navigation} = props
    return (
        <DrawerContentScrollView style={{ backgroundColor: '#F8F8F8' }}>
            <View style={{ padding: 15 }}>
                <View>
                    <Image source={require('../../assets/muf.png')} style={{
                        width: 200,
                        height: 100,
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        resizeMode: 'cover'
                    }} />
                </View>
                <Divider style={{ marginVertical: 20 }} />
                <View
                    style={{
                        padding: 0,
                        margin: 0,
                    }}>
                    <TouchableOpacity style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#F8F8F8',
                        borderTopEndRadius: 10,
                    }} onPress={() => { navigation.navigate('Main') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#7E7E7E' icon="home" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#181818' }}>Inicio</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#F8F8F8'
                    }} onPress={() => { navigation.navigate('Info') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#7E7E7E' icon="comment" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#181818' }}>¿Quienes somos?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#F8F8F8'
                    }} onPress={() => { navigation.navigate('ConsultaScreen') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#7E7E7E' icon="comment" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#181818' }}>Identidad Comunal</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </DrawerContentScrollView>
    )
}