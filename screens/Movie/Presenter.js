import React from "react";
import styled from "styled-components/native";

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
    <Container>
      <Text>Movie</Text>
    </Container>
  );
};
