import React, { useState } from "react";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import StyleSheet from "./StyleSheet";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const NoPoster = () => {
  const [isActive, setIsActive] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsActive(true);
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <Container>
      <LinearGradient
        style={StyleSheet.Gradient}
        colors={["rgba(0, 255, 84, 0)", "rgba(0, 255, 84, 1)"]}
      />
    </Container>
  );
};

export default NoPoster;
