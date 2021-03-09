import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Tab from "./Tab";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();
const Logo = styled.Text`
  font-size: 32px;
  margin-left: 16px;
  margin-top: 4px;
`;

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(190, 184, 184)",
          shadowColor: "rgb(190, 184, 184)",
          borderBottomColor: "rgb(190, 184, 184)",
        },
        headerTitleAlign: "left",
        headerTintColor: "black",
        headerTitleStyle: {
          fontFamily: "ObjectSans-Regular",
          fontSize: "20px",
          fontWeight: "500",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={Tab}
        options={() => ({
          headerLeft: () => <Logo>❋</Logo>,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Logo onPress={() => navigation.goBack(null)}>≪</Logo>
            // <Ionicons
            //   name="arrow-back-outline"
            //   onPress={() => navigation.goBack(null)}
            //   style={{
            //     fontSize: "24px",
            //     marginLeft: 12,
            //     marginTop: -2,
            //   }}
            // />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
