import React, { useLayoutEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import TV from "../screens/TV";
import Search from "../screens/Search";
import Like from "../screens/Like";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default ({ navigation: { setOptions }, route: { state } }) => {
  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({ title: state?.routeNames[state.index] || "Home" });
    }
    return () => (mounted = false);
  }, [state]);

  return (
    <Tab.Navigator
      screenOptions={({ route: { name: screenName } }) => ({
        tabBarIcon: ({ focused }) => {
          let platformName = Platform.OS === "ios" ? "ios-" : "md-";
          let iconName =
            screenName === "Home"
              ? `${platformName}home`
              : screenName === "Movie"
              ? `${platformName}film`
              : screenName === "TV"
              ? `${platformName}tv`
              : screenName === "Search"
              ? `${platformName}search`
              : `${platformName}heart`;
          return (
            <Ionicons
              name={focused ? iconName : `${iconName}-outline`}
              size={24}
              color={focused ? "black" : "rgb(95, 95, 95)"}
            />
          );
        },
      })}
      initialRouteName="Home"
      activeColor="black"
      barStyle={{
        backgroundColor: "rgb(190, 184, 184)",
      }}

      // tabBarOptions={{
      //   showLabel: false,
      //   style: {
      //     backgroundColor: "rgb(190, 184, 184)",
      //     borderTopColor: "rgb(190, 184, 184)",
      //   },
      // }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  );
};
