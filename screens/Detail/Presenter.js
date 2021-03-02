import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../StyleSheet";

const Container = styled.View`
  flex: 1;
  background-color: rgb(190, 184, 184);
`;
const Text = styled.Text``;

export default () => {
  return (
    <Container style={StyleSheet.Container}>
      <Text>Detail</Text>
    </Container>
  );
};
