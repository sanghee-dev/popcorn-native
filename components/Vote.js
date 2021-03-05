import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  color: green;
`;
const HalfTitle = styled.Text`
  width: 9px;
  overflow: hidden;
`;
const Title = styled.Text`
  color: rgb(0, 255, 84);
`;
const Flower = styled.Text`
  font-size: 20px;
`;

const Vote = ({ vote }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>{"❋".repeat(vote / 2)}</Title>
      {vote % 2 > 1 && (
        <>
          {/* <HalfTitle>
            <Flower style={StyleSheet.Title}>❋</Flower>
          </HalfTitle> */}
          <Flower
            style={{
              color: `rgba(0, 255, 84, ${(vote % 2) / 2})`,
            }}
          >
            ❋
          </Flower>
        </>
      )}
    </Container>
  );
};

Vote.propTypes = { vote: PropTypes.number.isRequired };

export default Vote;
