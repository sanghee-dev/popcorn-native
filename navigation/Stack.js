import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tab from "./Tab";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "rgb(190, 184, 184)",
        shadowColor: "rgb(190, 184, 184)",
        borderBottomColor: "rgb(190, 184, 184)",
      },
      headerTintColor: "black",
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontFamily: "ObjectSans-Regular",
        fontSize: "20px",
        fontWeight: "500",
      },
    }}
  >
    <Stack.Screen name="Tab" component={Tab} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
