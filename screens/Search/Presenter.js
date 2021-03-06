import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import Input from "../../components/Search/Input";

const Container = styled.View``;
const Title = styled.Text``;

export default ({ keyword, onChangeText, onSubmitEditing }) => {
  return (
    <Container style={StyleSheet.Container}>
      <Input
        keyword={keyword}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};
