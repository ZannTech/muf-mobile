import { StyleSheet, Dimensions, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Block, Text, Input, theme, Card } from "galio-framework";
const { width, height } = Dimensions.get("screen");
import Toast from "react-native-toast-message";
import { Header } from "../../components/header";
import Session from "../../storage/storage";
import { Paragraph, Title } from "react-native-paper";
import CardGroup from "../../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
const MainScreen = ({ navigation, route }) => {
  const viewed = route.params.viewed ? route.params.viewed : false;
  const [name, setname] = useState("");
  useEffect(() => {
    console.log(height);
    get_name();
    if (viewed != false) {
      Toast.show({
        type: "success",
        text1: "¡Hola!",
        text2: route.params.message,
        position: "top",
        visibilityTime: 6000,
      });
      navigation.setParams({
        massage: "",
        viewed: false,
      });
    }
  });
  const get_name = async () => {
    const name = await Session.get("full_name");
    setname(name);
  };
  return (
    <SafeAreaView>
      <Header
        options={{
          title: "Página Principal",
          notification: true,
          profile: true,
        }}
      />
      <ScrollView collapsable={false}>
          
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
