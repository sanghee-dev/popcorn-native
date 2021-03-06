import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";

const Container = styled.View``;
const Title = styled.Text``;
const TextInput = styled.TextInput``;

export default () => {
  const [value, onChangeText] = useState("Search Movie or TV");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};
