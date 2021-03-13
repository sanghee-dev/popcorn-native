import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled, { css } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Tab from "./Tab";
import Detail from "../screens/Detail";
import More from "../screens/More";

const Stack = createStackNavigator();
const Logo = styled.Text`
  font-size: 28px;
  margin-left: 16px;
  ${Platform.select({
    web: css`
      margin-top: -4px;
    `,
  })};
`;
const IconContainer = styled.View`
  flex-direction: row;
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
          fontSize: 20,
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
            <Ionicons
              name="arrow-back-outline"
              onPress={() => navigation.goBack(null)}
              style={{
                fontSize: 24,
                marginLeft: 16,
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="More"
        component={More}
        options={({ navigation }) => ({
          headerLeft: () => (
            <IconContainer>
              <Ionicons
                name="arrow-back-outline"
                onPress={() => navigation.goBack(null)}
                style={{
                  fontSize: 24,
                  marginLeft: 16,
                }}
              />
              <Ionicons
                name="arrow-back-outline"
                onPress={() => navigation.goBack(null)}
                style={{
                  fontSize: 24,
                }}
              />
            </IconContainer>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
