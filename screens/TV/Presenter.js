import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../StyleSheet";

const Container = styled.View``;
const Title = styled.Text``;

export default ({
  loading,
  airingToday,
  onTheAir,
  popular,
  topRated,
  airingTodayError,
  onTheAirError,
  popularError,
  topRatedError,
}) => {
  return (
    <Container style={StyleSheet.Container}>
      <Title style={StyleSheet.Title}>TV</Title>
    </Container>
  );
};
