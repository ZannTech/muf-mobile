import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'


export const Header = ({ options = {
  title: '',
  notification: true,
  profile: true
} }) => {

  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button icon="menu" labelStyle={{ fontSize: 25 }} mode='text' compact={true} style={{ alignItems: 'flex-start' }} color='white'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text numberOfLines={1} style={{ textAlign: 'center',  fontWeight: 'bold', fontSize: 17, color: '#000', fontFamily: 'Montserrat' }}>
          {options.title}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
        {
          (options.notification) && <Button icon="bell-ring" labelStyle={{ fontSize: 22 }} mode='text' compact={true} style={{ alignItems: 'flex-start' }} color='white'
            onPress={() => navigation.navigate('NotificacionesScreen')}
          />
        }

        {
          (options.profile) && <Button icon="account" labelStyle={{ fontSize: 22 }} mode='text' compact={true} style={{ alignItems: 'flex-start' }} color='white'
            onPress={() => navigation.navigate('SettingScreen')}
          />
        }
      </View>
    </View>
  )
}