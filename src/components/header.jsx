import { DrawerActions, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { Ionicons } from "@expo/vector-icons"

export const Header = ({ options = {
  title: '',
  notification: true,
  profile: true
} }) => {

  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#fff' }}>
      <StatusBar 
        translucent
        style='auto'
      />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button icon={({ size, color }) => (
          <Ionicons
          name='menu-outline'
          style={{
            fontSize: 25
          }}
          ></Ionicons>
   
  )} labelStyle={{ fontSize: 28 }} mode='text' compact={true} style={{ alignItems: 'flex-start' }} color='white'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text numberOfLines={1} style={{ textAlign: 'center',  fontWeight: 'bold', fontSize: 17, color: '#000', fontFamily: 'Roboto' }}>
          {options.title}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
        {
          (options.notification) && <Button icon="bell-ring-outline" labelStyle={{ fontSize: 25}} mode='text' compact={true} style={{ alignItems: 'flex-end'}} color='dark'
            onPress={() => navigation.navigate('NotificacionesScreen')}
          />
        }

        {
          (options.profile) && <Button icon="account-outline" labelStyle={{ fontSize: 25 }} mode='text' compact={true} style={{ alignItems: 'flex-end' }} color='dark'
            onPress={() => navigation.navigate('Profile')}
          />
        }
      </View>
    </View>
  )
}