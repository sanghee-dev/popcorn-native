import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text``;

const Filter = ({}) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>Filter</Title>
    </Container>
  );
};

export default Filter;
