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



const Drawer = createDrawerNavigator();

export const AuthNavigation = (navigation) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                sceneContainerStyle: {
                    backgroundColor: 'white'
                }
            }}
            drawerContent={(props) => <Menu {...props} />}
        >
            <Drawer.Screen
                component={MainScreen}
                name='Main'
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
        <DrawerContentScrollView style={{ backgroundColor: '#f2f2f2' }}>
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
                        backgroundColor: '#f0f0f0'
                    }} onPress={() => { navigation.navigate('Main') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#141414' icon="home" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#141414' }}>Inicio</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#f0f0f0'
                    }} onPress={() => { navigation.navigate('Info') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#141414' icon="comment" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#141414' }}>¿Quienes somos?</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#f0f0f0'
                    }} onPress={() => { navigation.navigate('ConsultaScreen') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon color='#141414' icon="comment" />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'normal', color: '#141414' }}>Identidad Comunal</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider />
                    

                </View>
            </View>

        </DrawerContentScrollView>
    )
}