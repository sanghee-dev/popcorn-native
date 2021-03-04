import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: row;
`;
const Title = styled.Text``;
const HalfTitle = styled.Text`
  width: 9px;
  overflow: hidden;
`;
const Flower = styled.Text``;

const Vote = ({ vote }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>{"❋".repeat(vote / 2)}</Title>
      {vote % 2 > 1 && (
        <HalfTitle>
          <Flower style={StyleSheet.Title}>❋</Flower>
        </HalfTitle>
      )}
    </Container>
  );
};

Vote.propTypes = { vote: PropTypes.number.isRequired };

export default Vote;
