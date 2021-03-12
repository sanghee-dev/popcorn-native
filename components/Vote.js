import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: row;
`;
const Flower = styled.Text`
  font-size: 20px;
`;

const Vote = ({ vote }) => {
  return (
    <Container>
      <Flower
        style={{
          color: `rgb(0, 255, 84)`,
        }}
      >
        {"❋".repeat(vote / 2)}
      </Flower>
      {vote % 2 > 1 && (
        <Flower
          style={{
            color: `rgba(0, 255, 84, ${(vote % 2) / 2})`,
          }}
        >
          ❋
        </Flower>
      )}
    </Container>
  );
};

Vote.propTypes = { vote: PropTypes.number.isRequired };

export default Vote;
