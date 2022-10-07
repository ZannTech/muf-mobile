import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../../../components/header";
import { Button, Card, Input } from "@rneui/themed";
import Toast from "react-native-toast-message";
import ApiClient from "../../../../api/client";

const EscudoComunal = () => {
  const [data, setdata] = useState({
    elemento: "",
    porque_identifica: "",
  });
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const changeData = (name, text) => {
    setdata({ ...data, [name]: text });
  };
  return (
    <SafeAreaView>
      <Header
        options={{
          notification: false,
          profile: true,
          title: "Escudo Comunal | Asamblea",
        }}
      />
      <ScrollView>
        <Card
          containerStyle={{
            borderColor: "#f1f1f1",
            borderWidth: 2,
          }}
        >
          <Card.Title style={{ fontSize: 20 }}>
            Formulario de Escudo Comunal
          </Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            style={{
              borderRadius: 20,
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Rellena los campos</Text>
          <Input
            value={data.elemento}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Elemento"
          />
          <Input
            label="¿Por qué identifica a la comunidad?"
            value={data.porque_identifica}
            onChangeText={(text) => {
              changeData("porque_identifica", text);
            }}
          />
          <Button
            title={"Registrar"}
            disabled={Loading}
            buttonStyle={{
              borderRadius: 20,
            }}
            onPress={async () => {
              if (data.elemento == "" || data.porque_identifica == "") {
                Toast.show({
                  type: "error",
                  text1: "Error",
                  text2: "Rellena todos los campos.",
                  position: "top",
                  visibilityTime: 2000,
                });
              } else {
                const { message, success } =
                  await ApiClient.Asamblea.escudo_comunal(data);
                if (success == true) {
                  setdata("porque_identifica", "");
                  setdata("elemento", "");
                  Toast.show({
                    text1: "Gracias!",
                    text2: message,
                    type: "success",
                    position: "top",
                    visibilityTime: 3000,
                  });
                }
              }
            }}
          />
        </Card>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#f1f11f1",
  },
});

export default EscudoComunal;
