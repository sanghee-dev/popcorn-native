import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import Input from "../../components/Search/Input";

const Container = styled.View``;
const Title = styled.Text``;

export default () => {
  const [value, onChangeText] = React.useState("Search Movie or TV");

  return (
    <Container style={StyleSheet.Container}>
      <Title style={StyleSheet.Title}>Search</Title>
      <Input />
    </Container>
  );
};
