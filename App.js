import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import Loading from "./components/App/Loading";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </>
  ) : (
    <Loading setIsReady={setIsReady} />
  );
}
