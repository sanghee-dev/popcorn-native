import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import TV from "../screens/TV";
import Search from "../screens/Search";
import Like from "../screens/Like";

const Tab = createBottomTabNavigator();

export default ({ navigation: { setOptions }, route: { state } }) => {
  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({ title: state?.routeNames[state.index] || "Home" });
    }
    return () => (mounted = false);
  }, [state]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  );
};
