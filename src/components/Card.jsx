import { View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "@rneui/themed";
import { Icon } from "@rneui/base";
const { width, height } = Dimensions.get("window");
import {FontAwesome, Fontisto, MaterialCommunityIcons} from "@expo/vector-icons"
const CardGroup = ({
  options = {
    title: "",
    icon: "",
    icon_color: "",
    color: "",
    group_name: "",
  },
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        padding: 30,
        marginTop: 40,
        backgroundColor: options.color,
        borderRadius: 30,
        marginLeft: 8,
        marginRight: 10,
        shadowColor: options.color,
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        justifyContent: "center",
      }}
    >
      <Card.Title
        style={{
          color: options.icon_color,
        }}
      >
        {options.group_name}
      </Card.Title>
      <View style={{ position: "relative", alignItems: "center" }}>
        {(
            <MaterialCommunityIcons 
            name={options.icon}
            size={width / 4}
            color={options.icon_color}
            ></MaterialCommunityIcons>
        )}
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "600",
            color: options.icon_color,
          }}
        >
          {" "}
          {options.title}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardGroup;
