import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );
const cacheIcons = (fonts) => fonts.map((font) => Font.loadAsync(font));
const cacheFonts = async () => {
  await Font.loadAsync({
    "ObjectSans-Regular": require("./assets/fonts/ObjectSans/ObjectSans-Regular.otf"),
    "ObjectSans-Slanted": require("./assets/fonts/ObjectSans/ObjectSans-Slanted.otf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startAsync = () => {
    const images = cacheImages([require("./assets/splash.png")]);
    const icons = cacheIcons([Ionicons.font]);
    const fonts = cacheFonts();
    return Promise.all([...images, ...icons, ...fonts]);
  };
  const onFinish = () => setIsReady(true);

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </>
  ) : (
    <AppLoading
      startAsync={startAsync}
      onFinish={onFinish}
      onError={console.warn}
    />
  );
}
