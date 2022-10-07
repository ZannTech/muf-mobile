import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { Card, Text, Button, theme } from "@rneui/themed";
import { Header } from "../../components/header";
import { Block } from "galio-framework";
const { height, width } = Dimensions.get("window");

const AsambleaScreen = ({ navigation, route }) => {
  return (
    <View>
      <Header />
      <Block style={style.container} shadow={false}>
        <Card
          containerStyle={{
            borderRadius: 20,
            padding: 20,
            borderWidth: 0.1,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Card.Title>ESCUDO COMUNAL</Card.Title>
          <Button  onPress={()=>{
            navigation.navigate('EscudoComunal')
          }} title={"Ingresar"} />
        </Card>
        <Card
          containerStyle={{
            borderRadius: 20,
            padding: 20,
            borderWidth: 0.1,
          }}
        >
          <Card.Title>EL HOMBRE / LA MUJER DE LA BUENA VIDA</Card.Title>
          <Button 
           onPress={()=>{
            navigation.navigate('BuenaVida')
          }}
          title={"Ingresar"} />
        </Card>
      </Block>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
});

export default AsambleaScreen;
