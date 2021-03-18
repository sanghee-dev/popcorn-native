import React from "react";
import { Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) =>
  images.map((image) =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );
const cacheIcons = (fonts) => fonts.map((font) => Font.loadAsync(font));
const cacheFonts = async () => {
  await Font.loadAsync({
    "ObjectSans-Regular": require("../../assets/fonts/ObjectSans/ObjectSans-Regular.otf"),
  });
};

const Loading = ({ setIsReady }) => {
  const startAsync = async () => {
    await cacheImages([require("../../assets/splash.png")]);
    await cacheIcons([Ionicons.font]);
    await cacheFonts();
  };
  const onFinish = () => setIsReady(true);

  return (
    <AppLoading
      startAsync={startAsync}
      onFinish={onFinish}
      onError={console.warn}
    />
  );
};

export default Loading;
