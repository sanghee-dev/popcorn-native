import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { View, Text } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startAsync = async () => {};
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
