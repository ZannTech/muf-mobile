import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../../../components/header";
import { Input } from "galio-framework";
import { Card, Button } from "@rneui/themed";
import TableEditable from "../../../../components/table";
import { DataTable } from "react-native-paper";

const BuenaVida = () => {
  const [data, setdata] = useState({
    n_valor: "",
    n_desc: "",
    n_mejorar: "",
    s_valor: "",
    s_desc: "",
    s_mejorar: "",
    p_valor: "",
    p_desc: "",
    p_mejorar: "",
    e_valor: "",
    e_desc: "",
    e_mejorar: "",
    c_valor: "",
    c_desc: "",
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
        flex: 1,
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
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Elemento</DataTable.Title>
            <DataTable.Title>
              ¿Por que identifica a la comunidad?
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell
              style={{
                alignContent: "flex-end",
              }}
            >
              <Input inputStyle={styles.input} label="1.-" />
            </DataTable.Cell>
            <DataTable.Cell
              style={{
                alignContent: "flex-end",
                alignItems: 'center',
                justifyContent: 'center',
                direction: 'inherit',
                display: 'flex',
                flexWrap: 'wrap',
                
              }}
            >
              {" "}
              <Input
                style={{
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  resizeMode: 'cover',
                }}
                label="2.-"
              />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2.- </DataTable.Cell>
            <DataTable.Cell>2.-</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
    borderColor: "#0000000",
    maxWidth: 40,
    width: 100
  },
});

export default BuenaVida;
