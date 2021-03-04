import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";

const Container = styled.View``;
const Title = styled.Text``;

export default () => {
  return (
    <Container style={StyleSheet.Container}>
      <Title style={StyleSheet.Title}>Home</Title>
    </Container>
  );
};
