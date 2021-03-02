import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../StyleSheet";

const Container = styled.View``;
const Title = styled.Text``;

export default ({
  loading,
  nowPlaying,
  upcoming,
  popular,
  topRated,
  nowPlayingError,
  upcomingError,
  popularError,
  topRatedError,
}) => {
  console.log(nowPlaying);

  return (
    <Container style={StyleSheet.Container}>
      <Title style={StyleSheet.Title}>Movie</Title>
    </Container>
  );
};
