import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../../../components/header";
import { Card, Input, Button } from "@rneui/themed";

const BuenaVida = () => {
  const [data, setdata] = useState({
    n_valor: "",
    n_desc : "",
    n_mejorar: "",
    s_valor: "",
    s_desc : "",
    s_mejorar: "",
    p_valor: "",
    p_desc : "",
    p_mejorar: "",
    e_valor: "",
    e_desc : "",
    e_mejorar: "",
    c_valor: "",
    c_desc : "",
    c_mejorar: "",
  });
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const changeData = (name, text) => {
    setdata({ ...data, [name]: text });
  };
  return (
    <SafeAreaView
    style={{
        flex: 1
    }}
    >
      <Header
        options={{
          title: "El hombre / la mujer de la buena vida.",
          notification: false,
          profile: true,
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
            El hombre / la mujer de la buena vida
          </Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://images.unsplash.com/photo-1572270184090-3c5a62939cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
            }}
            style={{
              borderRadius: 20,
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Vida Natural</Text>
          <Input
            value={data.n_valor}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Valor"
          />
          <Input
            value={data.n_desc}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Descripcion Clave"
          />
          <Input
            label="¿Qué hace para mejorar?"
            value={data.n_mejorar}
            onChangeText={(text) => {
              changeData("porque_identifica", text);
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Vida Social</Text>
          <Input
            value={data.s_valor}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Valor"
          />
          <Input
            value={data.s_desc}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Descripcion Clave"
          />
          <Input
            label="¿Qué hace para mejorar?"
            value={data.s_mejorar}
            onChangeText={(text) => {
              changeData("porque_identifica", text);
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Vida Politica</Text>
          <Input
            value={data.p_valor}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Valor"
          />
          <Input
            value={data.p_desc}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Descripcion Clave"
          />
          <Input
            label="¿Qué hace para mejorar?"
            value={data.p_mejorar}
            onChangeText={(text) => {
              changeData("porque_identifica", text);
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Vida Ecomomica</Text>
          <Input
            value={data.e_valor}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Valor"
          />
          <Input
            value={data.e_desc}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Descripcion Clave"
          />
          <Input
            label="¿Qué hace para mejorar?"
            value={data.e_mejorar}
            onChangeText={(text) => {
              changeData("porque_identifica", text);
            }}
          />
          <Card.Divider />
          <Text style={styles.title}>Vida Cultural</Text>
          <Input
            value={data.c_valor}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Valor"
          />
          <Input
            value={data.c_desc}
            onChangeText={(text) => {
              changeData("elemento", text);
            }}
            label="Descripcion Clave"
          />
          <Input
            label="¿Qué hace para mejorar?"
            value={data.c_mejorar}
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

export default BuenaVida;
