import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../StyleSheet";

const Container = styled.View`
  flex: 1;
  background-color: rgb(190, 184, 184);
`;
const Text = styled.Text``;

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
      <Text style={StyleSheet.Title}>Movie</Text>
    </Container>
  );
};
