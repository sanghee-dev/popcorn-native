import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

const cacheImages = (images) =>
  images.map((image) =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );
const cacheIcons = (icons) => icons.map((icon) => Font.loadAsync(icon));
const cacheFonts = () => {
  Font.loadAsync({
    "ObjectSans-Regular": require("./assets/fonts/ObjectSans/ObjectSans-Regular.otf"),
    "ObjectSans-Slanted": require("./assets/fonts/ObjectSans/ObjectSans-Slanted.otf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startAsync = async () => {
    const images = cacheImages([require("./assets/splash.png")]);
    const icons = cacheIcons([Ionicons.font]);
    const fonts = cacheFonts();
    return Promise.all([...images, ...icons, ...fonts]);
  };
  const onFinish = () => setIsReady(true);

  return (
    <View>
      {isReady ? (
        <Text>Ready</Text>
      ) : (
        <AppLoading
          startAsync={startAsync}
          onFinish={onFinish}
          onError={console.warn}
        />
      )}
    </View>
  );
}
