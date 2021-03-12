import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import PropTypes from "prop-types";
import Poster from "../Poster";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text``;

const Card = ({ movieList }) => {
  return (
    <Container>
      {movieList.reverse().map((movie, index) => {
        return (
          <Card key={index} style={StyleSheet.BorderRadius}>
            <Poster posterUrl={movie.poster_path} />

            <Title style={StyleSheet.Title}>{movie.original_title}</Title>
          </Card>
        );
      })}
    </Container>
  );
};

Card.propTypes = { movieList: PropTypes.array.isRequired };

export default Card;
