import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: rgb(190, 184, 184);
`;
const Text = styled.Text``;

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
    <Container>
      <Text>TV</Text>
    </Container>
  );
};
